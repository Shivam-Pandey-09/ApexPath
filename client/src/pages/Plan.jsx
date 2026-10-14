import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarDays, Clock, Sparkles, Loader2, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

export default function Plan() {
  const [provider, setProvider] = useState('gemini');
  const [apiKey, setApiKey] = useState('');
  const [weeks, setWeeks] = useState(12);
  const [hoursPerDay, setHoursPerDay] = useState(3);
  const [focusAreas, setFocusAreas] = useState(['Arrays', 'Dynamic Programming', 'Graphs']);
  const [loading, setLoading] = useState(false);
  const [planData, setPlanData] = useState(null);
  const [error, setError] = useState('');

  const focusOptions = [
    'Arrays', 'Binary Search', 'Linked List', 'Recursion & Backtracking',
    'Trees', 'Graphs', 'Dynamic Programming', 'Sliding Window', 'Stack & Queues'
  ];

  const toggleFocus = (area) => {
    setFocusAreas(prev => 
      prev.includes(area) ? prev.filter(a => a !== area) : [...prev, area]
    );
  };

  const handleGeneratePlan = async () => {
    if (!apiKey) {
      setError(`Please enter your ${provider === 'gemini' ? 'Gemini' : 'Claude'} API key.`);
      return;
    }
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/generate-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          apiKey,
          provider,
          weeks,
          hoursPerDay,
          focusAreas
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to generate study plan');
      setPlanData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '36px 40px', maxWidth: 900, margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>
          <span className="gradient-text">Personalized DSA Study Plan</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: 32, fontSize: 15 }}>
          Generate a custom week-by-week roadmap mapped directly to Striver's A2Z DSA Sheet problems.
        </p>

        {/* Generator Form */}
        <div className="card" style={{ marginBottom: 28 }}>
          <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>⚙️ Configure Your Plan</h3>

          {/* AI Model Selection */}
          <div style={{ marginBottom: 20 }}>
            <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-secondary)', display: 'block', marginBottom: 8 }}>
              Preferred AI Engine
            </label>
            <div style={{ display: 'flex', gap: 12 }}>
              <button
                type="button"
                onClick={() => setProvider('gemini')}
                style={{
                  flex: 1, padding: '12px 16px', borderRadius: 8,
                  border: provider === 'gemini' ? '1px solid #4285F4' : '1px solid var(--border)',
                  background: provider === 'gemini' ? 'rgba(66, 133, 244, 0.15)' : 'var(--bg-secondary)',
                  color: provider === 'gemini' ? '#4285F4' : 'var(--text-secondary)',
                  cursor: 'pointer', fontSize: 14, fontWeight: 600, transition: 'all 0.15s ease'
                }}
              >
                ✨ Google Gemini (Fast & Structured)
              </button>
              <button
                type="button"
                onClick={() => setProvider('claude')}
                style={{
                  flex: 1, padding: '12px 16px', borderRadius: 8,
                  border: provider === 'claude' ? '1px solid #cc785c' : '1px solid var(--border)',
                  background: provider === 'claude' ? 'rgba(204, 120, 92, 0.15)' : 'var(--bg-secondary)',
                  color: provider === 'claude' ? '#cc785c' : 'var(--text-secondary)',
                  cursor: 'pointer', fontSize: 14, fontWeight: 600, transition: 'all 0.15s ease'
                }}
              >
                🧠 Anthropic Claude (Deep Reasoning)
              </button>
            </div>
          </div>

          {/* API Key */}
          <div className="input-group" style={{ marginBottom: 20 }}>
            <label>{provider === 'gemini' ? 'Gemini' : 'Claude'} API Key</label>
            <input
              type="password"
              className="input-field"
              placeholder={provider === 'gemini' ? 'AIza...' : 'sk-ant-...'}
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
          </div>

          {/* Weeks & Hours */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
            <div className="input-group">
              <label>Duration: <strong style={{ color: 'var(--accent)' }}>{weeks} Weeks</strong></label>
              <input
                type="range" min="4" max="24" step="1" value={weeks}
                onChange={(e) => setWeeks(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--accent)', marginTop: 8 }}
              />
            </div>
            <div className="input-group">
              <label>Daily Study Time: <strong style={{ color: 'var(--accent)' }}>{hoursPerDay} Hours/Day</strong></label>
              <input
                type="range" min="1" max="10" step="1" value={hoursPerDay}
                onChange={(e) => setHoursPerDay(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--accent)', marginTop: 8 }}
              />
            </div>
          </div>

          {/* Focus Areas */}
          <div style={{ marginBottom: 24 }}>
            <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-secondary)', display: 'block', marginBottom: 8 }}>
              Priority Focus Areas
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {focusOptions.map((area) => (
                <button
                  key={area}
                  type="button"
                  onClick={() => toggleFocus(area)}
                  style={{
                    padding: '6px 14px', borderRadius: 20, fontSize: 13,
                    border: focusAreas.includes(area) ? '1px solid var(--accent)' : '1px solid var(--border)',
                    background: focusAreas.includes(area) ? 'var(--accent-glow)' : 'var(--bg-secondary)',
                    color: focusAreas.includes(area) ? 'var(--accent)' : 'var(--text-secondary)',
                    cursor: 'pointer', transition: 'all 0.15s ease'
                  }}
                >
                  {area}
                </button>
              ))}
            </div>
          </div>

          {error && (
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8, padding: '12px 16px',
              background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)',
              borderRadius: 8, marginBottom: 16, fontSize: 14, color: 'var(--danger)',
            }}>
              <AlertCircle size={16} /> {error}
            </div>
          )}

          <button
            className="btn-primary"
            onClick={handleGeneratePlan}
            disabled={loading}
            style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: 15 }}
          >
            {loading ? (
              <>
                <Loader2 size={18} className="spinner" /> Generating Roadmap...
              </>
            ) : (
              <>
                <Sparkles size={18} /> Generate Tailored DSA Plan
              </>
            )}
          </button>
        </div>

        {/* Render Plan Roadmap */}
        <AnimatePresence>
          {planData && planData.plan && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700 }}>📅 Your {planData.totalWeeks || weeks}-Week Roadmap</h2>
                <span className="badge badge-blue">{planData.plan.length} Weeks Detailed</span>
              </div>

              {planData.plan.map((item, index) => (
                <div key={index} className="card" style={{ marginBottom: 16, borderLeft: '4px solid var(--accent)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                    <div>
                      <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase' }}>
                        Week {item.week || index + 1}
                      </span>
                      <h4 style={{ fontSize: 17, fontWeight: 600, marginTop: 2 }}>{item.title}</h4>
                    </div>
                    {item.dailyHours && (
                      <span className="badge badge-yellow">
                        <Clock size={12} style={{ marginRight: 4 }} /> {item.dailyHours}h / day
                      </span>
                    )}
                  </div>

                  {item.topics && (
                    <div style={{ marginBottom: 12 }}>
                      <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', marginBottom: 6 }}>TOPICS</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                        {item.topics.map((t, i) => (
                          <span key={i} className="badge badge-blue">{t}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.problems && (
                    <div style={{ marginBottom: 12 }}>
                      <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', marginBottom: 6 }}>KEY PROBLEMS TO SOLVE</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                        {item.problems.map((p, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text-secondary)' }}>
                            <CheckCircle2 size={14} style={{ color: 'var(--accent)' }} /> {p}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.milestone && (
                    <div style={{
                      marginTop: 10, padding: '8px 12px', borderRadius: 6,
                      background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.2)',
                      fontSize: 13, color: 'var(--success)'
                    }}>
                      🎯 <strong>Milestone:</strong> {item.milestone}
                    </div>
                  )}
                </div>
              ))}

              {planData.finalAdvice && (
                <div className="card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--accent-glow)', marginTop: 24 }}>
                  <h4 style={{ fontSize: 15, fontWeight: 600, color: 'var(--accent)', marginBottom: 8 }}>💡 Coach's Note</h4>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{planData.finalAdvice}</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
