import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dsaSheet, totalProblems, totalTopics } from "./dsa-data.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: ["http://localhost:3000", "http://localhost:5173"] }));
app.use(express.json());

// ─── Helpers ────────────────────────────────────────────────────────────────

function buildPrompt(userProfile) {
  const sheetSummary = dsaSheet
    .map(
      (s) =>
        `Step ${s.id}: ${s.title} (${s.difficulty}, ~${s.estimatedHours}h) — Topics: ${s.topics.map((t) => t.name).join(", ")}`
    )
    .join("\n");

  return `You are an expert DSA (Data Structures & Algorithms) mentor. A student needs your help planning their preparation based on Striver's A2Z DSA Sheet.

=== STRIVER'S A2Z DSA SHEET (${totalProblems} problems, ${totalTopics} topics, 19 steps) ===
${sheetSummary}

=== STUDENT PROFILE ===
- Experience Level: ${userProfile.experience || "beginner"}
- Available Hours/Day: ${userProfile.hoursPerDay || 3}
- Target Completion Date: ${userProfile.targetDate || "3 months from now"}
- Preferred Language: ${userProfile.preferredLanguage || "C++"}
- Self-Reported Weak Areas: ${(userProfile.weakAreas || []).join(", ") || "Not specified"}
- Already Completed Topics: ${(userProfile.completedTopics || []).join(", ") || "None"}

Analyze the student's profile and provide a detailed JSON response with this exact structure:
{
  "strengths": ["list of likely strengths based on their profile"],
  "weaknesses": ["list of likely weaknesses or areas to improve"],
  "recommendedTopics": [
    {"stepId": 1, "topicName": "...", "priority": "high|medium|low", "reason": "..."}
  ],
  "estimatedCompletionWeeks": 12,
  "weeklyPlan": [
    {"week": 1, "title": "...", "topics": ["..."], "hoursNeeded": 10, "goals": "..."}
  ],
  "tips": ["actionable study tips"],
  "overallStrategy": "paragraph describing the overall approach"
}

Return ONLY valid JSON, no markdown code fences or extra text.`;
}

function buildClaudePrompt(userProfile) {
  const sheetSummary = dsaSheet
    .map(
      (s) =>
        `Step ${s.id}: ${s.title} (${s.difficulty}) — ${s.topics.length} topics, ~${s.estimatedHours}h`
    )
    .join("\n");

  return `You are a world-class competitive programmer and DSA coach. Analyze this student's profile against Striver's A2Z DSA Sheet and give deep, personalized advice.

=== DSA SHEET OVERVIEW ===
${sheetSummary}

=== STUDENT INFO ===
- Level: ${userProfile.experience || "beginner"}
- Daily study time: ${userProfile.hoursPerDay || 3} hours
- Deadline: ${userProfile.targetDate || "3 months"}
- Language: ${userProfile.preferredLanguage || "C++"}
- Weak areas: ${(userProfile.weakAreas || []).join(", ") || "Not specified"}
- Completed: ${(userProfile.completedTopics || []).join(", ") || "Nothing yet"}

Provide a JSON response with this exact structure:
{
  "detailedAnalysis": "comprehensive paragraph analyzing the student's current position",
  "focusAreas": [
    {"area": "...", "reason": "...", "suggestedProblems": ["problem names"], "estimatedDays": 5}
  ],
  "studyStrategy": "detailed paragraph on how to approach studying",
  "difficultyProgression": [
    {"phase": "Week 1-2", "focus": "...", "difficulty": "Easy", "steps": [1, 2]}
  ],
  "commonMistakes": ["mistakes to avoid"],
  "motivationalNote": "encouraging message",
  "interviewReadinessScore": 0,
  "estimatedWeeksToReady": 12
}

Return ONLY valid JSON, no markdown code fences or extra text.`;
}

async function callGemini(apiKey, prompt) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { temperature: 0.7, maxOutputTokens: 4096 },
    }),
  });

  if (!res.ok) {
    const errBody = await res.text();
    throw new Error(`Gemini API error (${res.status}): ${errBody}`);
  }

  const data = await res.json();
  const text =
    data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
  // Strip markdown code fences if present
  const cleaned = text.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
  return JSON.parse(cleaned);
}

async function callClaude(apiKey, prompt) {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 4096,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!res.ok) {
    const errBody = await res.text();
    throw new Error(`Claude API error (${res.status}): ${errBody}`);
  }

  const data = await res.json();
  const text = data?.content?.[0]?.text || "";
  const cleaned = text.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
  return JSON.parse(cleaned);
}

// ─── Routes ─────────────────────────────────────────────────────────────────

app.get("/api/dsa-sheet", (_req, res) => {
  res.json({ steps: dsaSheet, totalProblems, totalTopics, totalSteps: dsaSheet.length });
});

app.post("/api/analyze", async (req, res) => {
  try {
    const { geminiApiKey, claudeApiKey, userProfile } = req.body;

    if (!geminiApiKey && !claudeApiKey) {
      return res.status(400).json({ error: "At least one API key (Gemini or Claude) is required." });
    }
    if (!userProfile) {
      return res.status(400).json({ error: "User profile is required." });
    }

    const results = { gemini: null, claude: null, errors: [] };

    const promises = [];

    if (geminiApiKey) {
      promises.push(
        callGemini(geminiApiKey, buildPrompt(userProfile))
          .then((data) => { results.gemini = data; })
          .catch((err) => { results.errors.push({ provider: "gemini", message: err.message }); })
      );
    }

    if (claudeApiKey) {
      promises.push(
        callClaude(claudeApiKey, buildClaudePrompt(userProfile))
          .then((data) => { results.claude = data; })
          .catch((err) => { results.errors.push({ provider: "claude", message: err.message }); })
      );
    }

    await Promise.all(promises);

    if (!results.gemini && !results.claude) {
      return res.status(502).json({
        error: "Both API calls failed.",
        details: results.errors,
      });
    }

    res.json(results);
  } catch (err) {
    console.error("Analyze error:", err);
    res.status(500).json({ error: "Internal server error", message: err.message });
  }
});

app.post("/api/generate-plan", async (req, res) => {
  try {
    const { apiKey, provider, weeks, hoursPerDay, focusAreas } = req.body;

    if (!apiKey || !provider) {
      return res.status(400).json({ error: "API key and provider are required." });
    }

    const prompt = `Create a detailed ${weeks || 12}-week DSA study plan for a student who can study ${hoursPerDay || 3} hours per day.
Focus areas: ${(focusAreas || []).join(", ") || "All topics"}.

Based on Striver's A2Z DSA Sheet (19 steps, ${totalProblems} problems).

Return a JSON object:
{
  "totalWeeks": ${weeks || 12},
  "plan": [
    {
      "week": 1,
      "title": "Week title",
      "dailyHours": ${hoursPerDay || 3},
      "topics": ["topic names"],
      "problems": ["specific problem names to solve"],
      "milestone": "what you should achieve by end of this week"
    }
  ],
  "finalAdvice": "closing advice paragraph"
}

Return ONLY valid JSON.`;

    let result;
    if (provider === "gemini") {
      result = await callGemini(apiKey, prompt);
    } else {
      result = await callClaude(apiKey, prompt);
    }

    res.json(result);
  } catch (err) {
    console.error("Generate plan error:", err);
    res.status(500).json({ error: "Failed to generate plan", message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 DSA Planner API running on http://localhost:${PORT}`);
});
