import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, BookOpen, CalendarDays, Zap, Target, TrendingUp, ArrowRight } from 'lucide-react';

const stats = [
  { label: 'Steps', value: '19', icon: BookOpen, color: '#327CF6' },
  { label: 'Problems', value: '450+', icon: Target, color: '#22c55e' },
  { label: 'AI Models', value: '2', icon: Brain, color: '#a855f7' },
];

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Analysis',
    desc: 'Get personalized strength & weakness analysis from both Gemini and Claude AI models.',
    color: '#327CF6',
  },
  {
    icon: CalendarDays,
    title: 'Custom Study Plans',
    desc: 'Generate week-by-week study plans tailored to your schedule and experience level.',
    color: '#22c55e',
  },
  {
    icon: TrendingUp,
    title: 'Track Progress',
    desc: 'Mark problems as done, track completion, and see your progress across all 19 steps.',
    color: '#f59e0b',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '48px 40px', maxWidth: 1100, margin: '0 auto' }}>
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        {/* Hero */}
        <motion.div variants={itemVariants} style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '6px 14px', borderRadius: 20,
            background: 'var(--accent-glow)', border: '1px solid rgba(50,124,246,0.2)',
            fontSize: 13, fontWeight: 500, color: 'var(--accent)', marginBottom: 20,
          }}>
            <Zap size={14} /> Powered by Gemini & Claude
          </div>
          <h1 style={{
            fontSize: 48, fontWeight: 800, lineHeight: 1.15,
            marginBottom: 16, letterSpacing: '-0.02em',
          }}>
            Master DSA with{' '}
            <span className="gradient-text">AI-Powered</span>
            <br />Guidance
          </h1>
          <p style={{
            fontSize: 18, color: 'var(--text-secondary)',
            maxWidth: 600, margin: '0 auto 32px',
            lineHeight: 1.6,
          }}>
            Based on <strong style={{ color: 'var(--text-primary)' }}>Striver's A2Z DSA Sheet</strong> — get personalized study plans,
            AI-driven analysis, and track your progress from basics to advanced.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            <button className="btn-primary" onClick={() => navigate('/analyze')}>
              Start AI Analysis <ArrowRight size={16} />
            </button>
            <button className="btn-secondary" onClick={() => navigate('/sheet')}>
              <BookOpen size={16} /> View DSA Sheet
            </button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div variants={itemVariants} style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 56,
        }}>
          {stats.map((stat) => (
            <div key={stat.label} className="card" style={{
              textAlign: 'center', padding: '28px 20px',
            }}>
              <stat.icon size={28} style={{ color: stat.color, marginBottom: 12 }} />
              <div style={{ fontSize: 36, fontWeight: 800, color: stat.color }}>{stat.value}</div>
              <div style={{ fontSize: 14, color: 'var(--text-secondary)', marginTop: 4 }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Features */}
        <motion.div variants={itemVariants}>
          <h2 style={{
            fontSize: 28, fontWeight: 700, textAlign: 'center', marginBottom: 32,
          }}>
            How it works
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {features.map((f, i) => (
              <motion.div
                key={i}
                className="card"
                whileHover={{ y: -4, borderColor: f.color + '40' }}
                style={{ cursor: 'default' }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: f.color + '18', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', marginBottom: 16,
                }}>
                  <f.icon size={22} style={{ color: f.color }} />
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Source Credit */}
        <motion.div variants={itemVariants} style={{
          marginTop: 56, textAlign: 'center', padding: '20px',
          borderTop: '1px solid var(--border)',
        }}>
          <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>
            Based on{' '}
            <a href="https://takeuforward.org/prep-hub/strivers-a2z-dsa-sheet"
              target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--accent)', textDecoration: 'none' }}>
              Striver's A2Z DSA Sheet — takeUforward
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
