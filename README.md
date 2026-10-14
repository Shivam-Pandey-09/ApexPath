# 🚀 ApexPath — Striver's A2Z DSA Sheet AI Study Planner

A full-stack web application based on [Striver's A2Z DSA Sheet (takeUforward)](https://takeuforward.org/prep-hub/strivers-a2z-dsa-sheet) with dual AI integration (**Google Gemini** & **Anthropic Claude**) to analyze strengths, identify weaknesses, and build customized DSA study roadmaps.

---

## 🌟 Key Features

1. **Complete Striver's A2Z DSA Sheet**:
   - All 19 Steps & 450+ structured problems.
   - Interactive checklist with local persistence.
   - Search & filter by problem name, step, and difficulty.

2. **Dual AI Analysis (Gemini + Claude)**:
   - Provide your own Gemini / Claude API keys safely (keys are never stored on a server).
   - Gemini 2.0 Flash provides fast structured analysis & topic recommendations.
   - Claude Sonnet provides deep reasoning, common pitfalls, and interview readiness scores.
   - Side-by-side comparison cards.

3. **Smart Study Plan Generator**:
   - Customizable timelines (4 to 24 weeks).
   - Adaptable daily study hours and priority topics.
   - Weekly milestones with handpicked problems to solve.

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js, CORS, Dotenv, Fetch
- **Frontend**: React 18, Vite, Framer Motion, Lucide React, Modern Dark Theme inspired by takeUforward

---

## ⚡ Quick Start

### 1. Install & Start Backend
```bash
# In the project root (where server.js is located)
npm install
npm start
```
The backend will run on `http://localhost:3001`.

### 2. Install & Start Frontend
```bash
# In the client directory
cd client
npm install
npm run dev
```
The frontend will run on `http://localhost:5173`.

---

## 🔑 Environment Variables (Optional)
You can configure a default API key in `.env` or input it directly via the interactive UI:
```env
PORT=3001
GEMINI_API_KEY=your_gemini_api_key_here
CLAUDE_API_KEY=your_claude_api_key_here
```
