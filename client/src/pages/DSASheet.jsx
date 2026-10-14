import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, Search, CheckCircle2, Circle, BookOpen, Hash } from 'lucide-react';

export default function DSASheet() {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState({});
  const [completed, setCompleted] = useState(() => {
    try { return JSON.parse(localStorage.getItem('dsa-completed') || '{}'); } catch { return {}; }
  });

  useEffect(() => {
    fetch('/api/dsa-sheet')
      .then((r) => r.json())
      .then(setData)
      .catch(console.error);
  }, []);

  useEffect(() => {
    localStorage.setItem('dsa-completed', JSON.stringify(completed));
  }, [completed]);

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleProblem = (key) => {
    setCompleted((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const totalCompleted = Object.values(completed).filter(Boolean).length;

  const filteredSteps = useMemo(() => {
    if (!data) return [];
    if (!search.trim()) return data.steps;
    const q = search.toLowerCase();
    return data.steps
      .map((step) => ({
        ...step,
        topics: step.topics
          .map((topic) => ({
            ...topic,
            problems: topic.problems.filter((p) => p.toLowerCase().includes(q)),
          }))
          .filter((topic) => topic.problems.length > 0 || topic.name.toLowerCase().includes(q)),
      }))
      .filter((step) => step.topics.length > 0 || step.title.toLowerCase().includes(q));
  }, [data, search]);

  const diffColor = (d) => {
    if (d === 'beginner') return 'var(--success)';
    if (d === 'intermediate') return 'var(--warning)';
    return 'var(--danger)';
  };

  if (!data) {
    return (
      <div style={{ padding: 60, textAlign: 'center' }}>
        <div className="spinner" style={{ margin: '0 auto 16px', width: 32, height: 32 }} />
        <p style={{ color: 'var(--text-muted)' }}>Loading DSA Sheet...</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '36px 40px', maxWidth: 900, margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
          <div>
            <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 4 }}>
              <span className="gradient-text">Striver's A2Z DSA Sheet</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>
              {data.totalSteps} Steps • {data.totalTopics} Topics • {data.totalProblems} Problems
            </p>
          </div>
          <div style={{
            padding: '8px 16px', borderRadius: 8, background: 'var(--accent-glow)',
            border: '1px solid rgba(50,124,246,0.2)', fontSize: 14, fontWeight: 600,
          }}>
            <span style={{ color: 'var(--accent)' }}>{totalCompleted}</span>
            <span style={{ color: 'var(--text-muted)' }}> / {data.totalProblems} done</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div style={{
          height: 6, borderRadius: 3, background: 'var(--bg-card)', marginBottom: 24,
          overflow: 'hidden',
        }}>
          <div style={{
            height: '100%', borderRadius: 3,
            background: 'var(--accent-gradient)',
            width: `${(totalCompleted / data.totalProblems) * 100}%`,
            transition: 'width 0.3s ease',
          }} />
        </div>

        {/* Search */}
        <div style={{ position: 'relative', marginBottom: 24 }}>
          <Search size={16} style={{
            position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)',
            color: 'var(--text-muted)',
          }} />
          <input
            className="input-field"
            placeholder="Search problems, topics..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ paddingLeft: 36 }}
          />
        </div>

        {/* Steps */}
        {filteredSteps.map((step) => {
          const stepProblems = step.topics.flatMap((t) => t.problems);
          const stepDone = stepProblems.filter((_, i) => {
            const key = `${step.id}-${step.topics.findIndex((t) => t.problems.includes(stepProblems[i]))}-${stepProblems[i]}`;
            return completed[key];
          }).length;
          // simpler approach for step completion count
          let totalStepDone = 0;
          let totalStepProblems = 0;
          step.topics.forEach((topic) => {
            topic.problems.forEach((problem) => {
              totalStepProblems++;
              if (completed[`${step.id}-${topic.id}-${problem}`]) totalStepDone++;
            });
          });

          return (
            <div key={step.id} className="card" style={{ marginBottom: 12, padding: 0, overflow: 'hidden' }}>
              {/* Step Header */}
              <button
                onClick={() => toggleExpand(step.id)}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '16px 20px', background: 'none', border: 'none', cursor: 'pointer',
                  color: 'var(--text-primary)', textAlign: 'left',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 8,
                    background: diffColor(step.difficulty) + '18',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 14, fontWeight: 700, color: diffColor(step.difficulty),
                  }}>
                    {step.id}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 15 }}>{step.title}</div>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>
                      {step.topics.length} topics • {totalStepProblems} problems • ~{step.estimatedHours}h
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontSize: 13, color: totalStepDone === totalStepProblems && totalStepProblems > 0 ? 'var(--success)' : 'var(--text-muted)' }}>
                    {totalStepDone}/{totalStepProblems}
                  </span>
                  {expanded[step.id] ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                </div>
              </button>

              {/* Step Content */}
              <AnimatePresence>
                {expanded[step.id] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{ padding: '0 20px 16px', borderTop: '1px solid var(--border)' }}>
                      {step.topics.map((topic) => (
                        <div key={topic.id} style={{ marginTop: 16 }}>
                          <div style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            marginBottom: 8,
                          }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                              <BookOpen size={14} style={{ color: diffColor(topic.difficulty) }} />
                              <span style={{ fontWeight: 600, fontSize: 14 }}>{topic.name}</span>
                            </div>
                            <span className={`badge ${topic.difficulty === 'beginner' ? 'badge-green' : topic.difficulty === 'intermediate' ? 'badge-yellow' : 'badge-red'}`}>
                              {topic.difficulty}
                            </span>
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {topic.problems.map((problem) => {
                              const key = `${step.id}-${topic.id}-${problem}`;
                              const isDone = completed[key];
                              return (
                                <button
                                  key={key}
                                  onClick={() => toggleProblem(key)}
                                  style={{
                                    display: 'flex', alignItems: 'center', gap: 10,
                                    padding: '8px 12px', borderRadius: 6,
                                    background: isDone ? 'rgba(34,197,94,0.06)' : 'transparent',
                                    border: 'none', cursor: 'pointer', textAlign: 'left',
                                    color: isDone ? 'var(--success)' : 'var(--text-secondary)',
                                    fontSize: 13, width: '100%',
                                    transition: 'background 0.15s ease',
                                  }}
                                  onMouseEnter={(e) => { if (!isDone) e.currentTarget.style.background = 'var(--bg-card-hover)'; }}
                                  onMouseLeave={(e) => { if (!isDone) e.currentTarget.style.background = 'transparent'; }}
                                >
                                  {isDone ? <CheckCircle2 size={16} /> : <Circle size={16} />}
                                  <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>{problem}</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
