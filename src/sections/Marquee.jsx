// src/sections/Marquee.jsx
import './Marquee.css';

const items = ['STRENGTH', 'CARDIO', 'YOGA', 'CROSSFIT', 'ZUMBA', 'BOXING', 'PILATES', 'HIIT'];

export function Marquee() {
  return (
    <div className="marquee-strip" aria-label="Fitness programs" role="region">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-dot">•</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
