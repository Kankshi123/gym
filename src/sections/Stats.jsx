// src/sections/Stats.jsx
import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';
import { stats } from '../data/siteConfig';
import { Reveal } from '../components/Reveal';
import './Stats.css';

function StatCard({ value, suffix, label, delay }) {
  const [ref, inView] = useInView();
  const count = useCountUp(value, inView);
  return (
    <Reveal delay={delay} className="stat-card">
      <div ref={ref} className="stat-number">
        <span>{count.toLocaleString()}</span>
        <span className="stat-suffix">{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
      <div className="stat-bar">
        <div className="stat-bar-fill" style={{ animationDelay: delay + 's', '--pct': inView ? '100%' : '0%' }} />
      </div>
    </Reveal>
  );
}

export function Stats() {
  return (
    <section className="stats-section" aria-labelledby="stats-heading">
      <div className="container">
        <h2 id="stats-heading" className="sr-only">Our Statistics</h2>
        <div className="stats-grid">
          {stats.map((s, i) => (
            <StatCard key={i} {...s} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
}
