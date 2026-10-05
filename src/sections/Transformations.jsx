// src/sections/Transformations.jsx
import { useRef, useState, useEffect } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import './Transformations.css';

function BeforeAfterSlider({ before, after, name, duration, lost }) {
  const [pos, setPos] = useState(50);
  const sliderRef = useRef(null);
  const isDragging = useRef(false);

  const update = (clientX) => {
    const rect = sliderRef.current.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setPos(pct);
  };

  const onMouseDown = () => { isDragging.current = true; };
  const onMouseUp = () => { isDragging.current = false; };
  const onMouseMove = (e) => { if (isDragging.current) update(e.clientX); };
  const onTouchMove = (e) => update(e.touches[0].clientX);

  useEffect(() => {
    window.addEventListener('mouseup', onMouseUp);
    return () => window.removeEventListener('mouseup', onMouseUp);
  }, []);

  return (
    <div
      ref={sliderRef}
      className="ba-slider"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
      role="slider"
      aria-label="Before and after comparison"
      aria-valuenow={Math.round(pos)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') setPos(p => Math.max(0, p - 2));
        if (e.key === 'ArrowRight') setPos(p => Math.min(100, p + 2));
      }}
    >
      {/* After (underneath) */}
      <div className="ba-after">
        <img src={after} alt={`${name} after transformation`} draggable={false} />
        <span className="ba-label ba-label-right">AFTER</span>
      </div>

      {/* Before (clipped) */}
      <div className="ba-before" style={{ width: pos + '%' }}>
        <img src={before} alt={`${name} before transformation`} draggable={false} />
        <span className="ba-label ba-label-left">BEFORE</span>
      </div>

      {/* Handle */}
      <div className="ba-handle" style={{ left: pos + '%' }}>
        <div className="ba-handle-circle">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
        <div className="ba-handle-line" />
      </div>

      {/* Stats */}
      <div className="ba-stats">
        <span className="ba-name">{name}</span>
        <span className="ba-result">Lost {lost} in {duration}</span>
      </div>
    </div>
  );
}

export function Transformations() {
  return (
    <section id="transformations" className="transformations-section" aria-labelledby="transform-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Real Results"
          title={<>Real People,<br /><span style={{ color: 'var(--primary)' }}>Real Results</span></>}
          subtitle="Drag the slider to see the incredible transformations our members have achieved."
          center
          id="transform-heading"
        />
        <Reveal direction="scale">
          <BeforeAfterSlider
            before="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=700&q=80"
            after="https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=700&q=80"
            name="Rohan M."
            duration="8 months"
            lost="22kg"
          />
        </Reveal>
        <div className="transform-note">
          <span>👆 Drag the slider to compare</span>
        </div>
      </div>
    </section>
  );
}
