import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, Brain, Sparkles, AlertCircle, CheckCircle2, ChevronDown, Loader2 } from 'lucide-react';

const experienceLevels = ['beginner', 'intermediate', 'advanced'];
const languages = ['C++', 'Java', 'Python'];
const weakAreaOptions = [
  'Arrays', 'Strings', 'Linked List', 'Recursion', 'Backtracking',
  'Binary Search', 'Stacks & Queues', 'Trees', 'Graphs', 'Dynamic Programming',
  'Bit Manipulation', 'Heaps', 'Greedy', 'Tries', 'Sliding Window',
];

const stepNames = [
  'Step 1: Learn the Basics', 'Step 2: Sorting', 'Step 3: Arrays',
  'Step 4: Binary Search', 'Step 5: Strings', 'Step 6: Linked List',
  'Step 7: Recursion & Backtracking', 'Step 8: Bit Manipulation',
  'Step 9: Stack & Queues', 'Step 10: Sliding Window & Two Pointer',
  'Step 11: Heaps', 'Step 12: Greedy', 'Step 13: Binary Trees',
  'Step 14: BST', 'Step 15: Graphs', 'Step 16: Dynamic Programming',
  'Step 17: Tries', 'Step 18: Strings Advanced', 'Step 19: Advanced Graphs',
];

function ApiKeyInput({ label, value, onChange, provider }) {
  const [show, setShow] = useState(false);
  const isGemini = provider === 'gemini';
  const color = isGemini ? '#4285F4' : '#cc785c';

  return (
    <div style={{ flex: 1 }}>
      <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 8 }}>
        <div style={{
          width: 24, height: 24, borderRadius: 6, background: color + '20',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 12, fontWeight: 700, color,
        }}>
          {isGemini ? 'G' : 'C'}
        </div>
        {label}
      </label>
      <div style={{ position: 'relative' }}>
        <input
          type={show ? 'text' : 'password'}
          className="input-field"
          placeholder={isGemini ? 'AIza...' : 'sk-ant-...'}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{ paddingRight: 40 }}
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          style={{
            position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)',
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'var(--text-muted)', padding: 4,
          }}
        >
          {show ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>
    </div>
  );
}

export default function Analyze() {
  const [geminiKey, setGeminiKey] = useState('');
  const [claudeKey, setClaudeKey] = useState('');
  const [experience, setExperience] = useState('beginner');
  const [targetDate, setTargetDate] = useState('');
  const [hoursPerDay, setHoursPerDay] = useState(3);
  const [language, setLanguage] = useState('C++');
  const [weakAreas, setWeakAreas] = useState([]);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');

  const toggleWeak = (area) => {
    setWeakAreas((prev) => prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]);
  };

  const toggleCompleted = (step) => {
    setCompletedSteps((prev) => prev.includes(step) ? prev.filter((s) => s !== step) : [...prev, step]);
  };

  const handleAnalyze = async () => {
    if (!geminiKey && !claudeKey) {
      setError('Please provide at least one API key.');
      return;
    }
    setError('');
    setLoading(true);
    setResults(null);

    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          geminiApiKey: geminiKey,
          claudeApiKey: claudeKey,
          userProfile: {
            experience,
            targetDate,
            hoursPerDay,
            preferredLanguage: language,
            weakAreas,
            completedTopics: completedSteps,
          },
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Analysis failed');
      setResults(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '36px 40px', maxWidth: 1000, margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>
          <span className="gradient-text">AI Analysis</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: 32, fontSize: 15 }}>
          Enter your API keys and profile — Gemini & Claude will analyze your strengths, weaknesses, and recommend topics.
        </p>

        {/* API Keys */}
        <div className="card" style={{ marginBottom: 24 }}>
          <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>🔑 API Keys</h3>
          <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 16 }}>
            Your keys are never stored — they're used only for this session's API calls.
          </p>
          <div style={{ display: 'flex', gap: 16 }}>
            <ApiKeyInput label="Gemini API Key" value={geminiKey} onChange={setGeminiKey} provider="gemini" />
            <ApiKeyInput label="Claude API Key" value={claudeKey} onChange={setClaudeKey} provider="claude" />
          </div>
        </div>

        {/* Profile */}
        <div className="card" style={{ marginBottom: 24 }}>
          <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>📝 Your Profile</h3>

          {/* Experience */}
          <div style={{ marginBottom: 20 }}>
            <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-secondary)', display: 'block', marginBottom: 8 }}>
              Experience Level
            </label>
            <div style={{ display: 'flex', gap: 10 }}>
              {experienceLevels.map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setExperience(lvl)}
                  style={{
                    flex: 1, padding: '12px 16px', borderRadius: 8,
                    border: experience === lvl ? '1px solid var(--accent)' : '1px solid var(--border)',
                    background: experience === lvl ? 'var(--accent-glow)' : 'var(--bg-secondary)',
                    color: experience === lvl ? 'var(--accent)' : 'var(--text-secondary)',
                    cursor: 'pointer', fontSize: 14, fontWeight: 500,
                    textTransform: 'capitalize', transition: 'all 0.15s ease',
                  }}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          {/* Date & Hours */}
          <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
            <div className="input-group" style={{ flex: 1 }}>
              <label>Target Completion Date</label>
              <input type="date" className="input-field" value={targetDate} onChange={(e) => setTargetDate(e.target.value)} />
            </div>
            <div className="input-group" style={{ flex: 1 }}>
              <label>Hours Available Per Day: <strong style={{ color: 'var(--accent)' }}>{hoursPerDay}h</strong></label>
              <input
                type="range" min="1" max="10" value={hoursPerDay}
                onChange={(e) => setHoursPerDay(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--accent)', marginTop: 8 }}
              />
            </div>
          </div>

          {/* Language */}
          <div style={{ marginBottom: 20 }}>
            <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-secondary)', display: 'block', marginBottom: 8 }}>
              Preferred Language
            </label>
            <div style={{ display: 'flex', gap: 10 }}>
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  style={{
                    padding: '10px 24px', borderRadius: 8,
                    border: language === lang ? '1px solid var(--accent)' : '1px solid var(--border)',
                    background: language === lang ? 'var(--accent-glow)' : 'var(--bg-secondary)',
                    color: language === lang ? 'var(--accent)' : 'var(--text-secondary)',
                    cursor: 'pointer', fontSize: 14, fontWeight: 500, transition: 'all 0.15s ease',
                  }}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* Weak Areas */}
          <div style={{ marginBottom: 20 }}>
            <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-secondary)', display: 'block', marginBottom: 8 }}>
              Self-Reported Weak Areas
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {weakAreaOptions.map((area) => (
                <button
                  key={area}
                  onClick={() => toggleWeak(area)}
                  style={{
                    padding: '6px 14px', borderRadius: 20, fontSize: 13,
                    border: weakAreas.includes(area) ? '1px solid var(--danger)' : '1px solid var(--border)',
                    background: weakAreas.includes(area) ? 'rgba(239,68,68,0.12)' : 'var(--bg-secondary)',
                    color: weakAreas.includes(area) ? 'var(--danger)' : 'var(--text-secondary)',
                    cursor: 'pointer', transition: 'all 0.15s ease',
                  }}
                >
                  {area}
                </button>
              ))}
            </div>
          </div>

          {/* Completed Steps */}
          <div>
            <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-secondary)', display: 'block', marginBottom: 8 }}>
              Already Completed Steps
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {stepNames.map((step) => (
                <button
                  key={step}
                  onClick={() => toggleCompleted(step)}
                  style={{
                    padding: '6px 12px', borderRadius: 20, fontSize: 12,
                    border: completedSteps.includes(step) ? '1px solid var(--success)' : '1px solid var(--border)',
                    background: completedSteps.includes(step) ? 'rgba(34,197,94,0.12)' : 'var(--bg-secondary)',
                    color: completedSteps.includes(step) ? 'var(--success)' : 'var(--text-secondary)',
                    cursor: 'pointer', transition: 'all 0.15s ease',
                  }}
                >
                  {completedSteps.includes(step) && <CheckCircle2 size={12} style={{ marginRight: 4, verticalAlign: -2 }} />}
                  {step}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8, padding: '12px 16px',
            background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)',
            borderRadius: 8, marginBottom: 16, fontSize: 14, color: 'var(--danger)',
          }}>
            <AlertCircle size={16} /> {error}
          </div>
        )}

        {/* Analyze Button */}
        <button
          className="btn-primary"
          onClick={handleAnalyze}
          disabled={loading || (!geminiKey && !claudeKey)}
          style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: 16, marginBottom: 32 }}
        >
          {loading ? (
            <>
              <Loader2 size={20} className="spinner" style={{ animation: 'spin 0.8s linear infinite' }} />
              Analyzing with AI...
            </>
          ) : (
            <>
              <Brain size={20} /> Analyze with AI
            </>
          )}
        </button>

        {/* Loading */}
        <AnimatePresence>
          {loading && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              style={{ textAlign: 'center', padding: '40px 0' }}
            >
              <div className="spinner" style={{ width: 40, height: 40, borderWidth: 4, margin: '0 auto 16px' }} />
              <p style={{ color: 'var(--text-secondary)', fontSize: 15 }}>
                AI models are analyzing your profile...
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: 13, marginTop: 4 }}>
                This may take 10-30 seconds
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results */}
        <AnimatePresence>
          {results && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 24 }}>
                ✨ AI Analysis Results
              </h2>

              {/* Errors from individual providers */}
              {results.errors?.length > 0 && (
                <div style={{
                  padding: '12px 16px', marginBottom: 16, borderRadius: 8,
                  background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)',
                  fontSize: 13, color: 'var(--warning)',
                }}>
                  ⚠️ {results.errors.map((e) => `${e.provider}: ${e.message}`).join(' | ')}
                </div>
              )}

              <div style={{ display: 'grid', gridTemplateColumns: results.gemini && results.claude ? '1fr 1fr' : '1fr', gap: 20 }}>
                {/* Gemini Results */}
                {results.gemini && (
                  <div className="card" style={{ borderColor: '#4285F4' + '40' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                      <div style={{
                        width: 28, height: 28, borderRadius: 8, background: '#4285F420',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 14, fontWeight: 700, color: '#4285F4',
                      }}>G</div>
                      <span style={{ fontWeight: 700, fontSize: 16 }}>Gemini Analysis</span>
                    </div>

                    {/* Strategy */}
                    {results.gemini.overallStrategy && (
                      <div style={{ marginBottom: 16 }}>
                        <h4 style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-muted)', marginBottom: 6 }}>📋 Strategy</h4>
                        <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                          {results.gemini.overallStrategy}
                        </p>
                      </div>
                    )}

                    {/* Strengths */}
                    {results.gemini.strengths && (
                      <div style={{ marginBottom: 16 }}>
                        <h4 style={{ fontSize: 13, fontWeight: 600, color: 'var(--success)', marginBottom: 8 }}>💪 Strengths</h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                          {results.gemini.strengths.map((s, i) => (
                            <span key={i} className="badge badge-green">{s}</span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Weaknesses */}
                    {results.gemini.weaknesses && (
                      <div style={{ marginBottom: 16 }}>
                        <h4 style={{ fontSize: 13, fontWeight: 600, color: 'var(--danger)', marginBottom: 8 }}>🎯 Areas to Improve</h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                          {results.gemini.weaknesses.map((w, i) => (
                            <span key={i} className="badge badge-red">{w}</span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Recommended Topics */}
                    {results.gemini.recommendedTopics && (
                      <div style={{ marginBottom: 16 }}>
                        <h4 style={{ fontSize: 13, fontWeight: 600, color: 'var(--accent)', marginBottom: 8 }}>📚 Recommended Topics</h4>
                        {results.gemini.recommendedTopics.slice(0, 8).map((t, i) => (
                          <div key={i} style={{
                            padding: '8px 12px', marginBottom: 6, borderRadius: 6,
                            background: 'var(--bg-secondary)', border: '1px solid var(--border)',
                            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                          }}>
                            <span style={{ fontSize: 13 }}>{t.topicName}</span>
                            <span className={`badge ${t.priority === 'high' ? 'badge-red' : t.priority === 'medium' ? 'badge-yellow' : 'badge-green'}`}>
                              {t.priority}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tips */}
                    {results.gemini.tips && (
                      <div>
                        <h4 style={{ fontSize: 13, fontWeight: 600, color: 'var(--warning)', marginBottom: 8 }}>💡 Tips</h4>
                        {results.gemini.tips.map((tip, i) => (
                          <div key={i} style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 4, paddingLeft: 12, borderLeft: '2px solid var(--warning)' }}>
                            {tip}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Estimated Weeks */}
                    {results.gemini.estimatedCompletionWeeks && (
                      <div style={{ marginTop: 16, padding: '12px', borderRadius: 8, background: 'var(--accent-glow)', textAlign: 'center' }}>
                        <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>Estimated Completion: </span>
                        <strong style={{ color: 'var(--accent)' }}>{results.gemini.estimatedCompletionWeeks} weeks</strong>
                      </div>
                    )}
                  </div>
                )}

                {/* Claude Results */}
                {results.claude && (
                  <div className="card" style={{ borderColor: '#cc785c40' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                      <div style={{
                        width: 28, height: 28, borderRadius: 8, background: '#cc785c20',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 14, fontWeight: 700, color: '#cc785c',
                      }}>C</div>
                      <span style={{ fontWeight: 700, fontSize: 16 }}>Claude Analysis</span>
                    </div>

                    {/* Detailed Analysis */}
                    {results.claude.detailedAnalysis && (
                      <div style={{ marginBottom: 16 }}>
                        <h4 style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-muted)', marginBottom: 6 }}>📋 Analysis</h4>
                        <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                          {results.claude.detailedAnalysis}
                        </p>
                      </div>
                    )}

                    {/* Focus Areas */}
                    {results.claude.focusAreas && (
                      <div style={{ marginBottom: 16 }}>
                        <h4 style={{ fontSize: 13, fontWeight: 600, color: '#cc785c', marginBottom: 8 }}>🎯 Focus Areas</h4>
                        {results.claude.focusAreas.slice(0, 6).map((f, i) => (
                          <div key={i} style={{
                            padding: '10px 12px', marginBottom: 8, borderRadius: 8,
                            background: 'var(--bg-secondary)', border: '1px solid var(--border)',
                          }}>
                            <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>{f.area}</div>
                            <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 4 }}>{f.reason}</div>
                            {f.suggestedProblems && (
                              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                                {f.suggestedProblems.slice(0, 4).map((p, j) => (
                                  <span key={j} className="badge badge-blue">{p}</span>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Study Strategy */}
                    {results.claude.studyStrategy && (
                      <div style={{ marginBottom: 16 }}>
                        <h4 style={{ fontSize: 13, fontWeight: 600, color: 'var(--success)', marginBottom: 6 }}>📖 Study Strategy</h4>
                        <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                          {results.claude.studyStrategy}
                        </p>
                      </div>
                    )}

                    {/* Common Mistakes */}
                    {results.claude.commonMistakes && (
                      <div style={{ marginBottom: 16 }}>
                        <h4 style={{ fontSize: 13, fontWeight: 600, color: 'var(--danger)', marginBottom: 8 }}>⚠️ Common Mistakes to Avoid</h4>
                        {results.claude.commonMistakes.map((m, i) => (
                          <div key={i} style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 4, paddingLeft: 12, borderLeft: '2px solid var(--danger)' }}>
                            {m}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Motivational Note */}
                    {results.claude.motivationalNote && (
                      <div style={{
                        marginTop: 16, padding: '14px', borderRadius: 8,
                        background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)',
                      }}>
                        <p style={{ fontSize: 14, color: 'var(--success)', fontStyle: 'italic', lineHeight: 1.5 }}>
                          💚 {results.claude.motivationalNote}
                        </p>
                      </div>
                    )}

                    {/* Interview Readiness */}
                    {results.claude.interviewReadinessScore !== undefined && (
                      <div style={{ marginTop: 16, padding: '12px', borderRadius: 8, background: '#cc785c15', textAlign: 'center' }}>
                        <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>Interview Readiness: </span>
                        <strong style={{ color: '#cc785c' }}>{results.claude.interviewReadinessScore}/100</strong>
                        <span style={{ fontSize: 13, color: 'var(--text-muted)' }}> • Estimated: </span>
                        <strong style={{ color: '#cc785c' }}>{results.claude.estimatedWeeksToReady} weeks</strong>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
