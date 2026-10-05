// src/sections/Testimonials.jsx
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../data/siteConfig';
import { SectionHeading } from '../components/SectionHeading';
import './Testimonials.css';

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const intervalRef = useRef(null);

  const go = (newIdx, direction) => {
    setDir(direction);
    setIdx((newIdx + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => go(idx + 1, 1), 5000);
    return () => clearInterval(intervalRef.current);
  }, [idx]);

  // Swipe support
  const touchStart = useRef(null);
  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStart.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(diff) > 50) {
      go(diff > 0 ? idx - 1 : idx + 1, diff > 0 ? -1 : 1);
    }
    touchStart.current = null;
  };

  const t = testimonials[idx];

  const variants = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0 },
    exit: (d) => ({ opacity: 0, x: d > 0 ? -80 : 80 }),
  };

  return (
    <section id="testimonials" className="testimonials-section bg-navy" aria-labelledby="testimonials-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Success Stories"
          title={<>What Our Members<br />Are Saying</>}
          center
          light
          id="testimonials-heading"
        />

        <div
          className="testimonial-carousel"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <AnimatePresence custom={dir} mode="wait">
            <motion.div
              key={idx}
              className="testimonial-card"
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: .4, ease: [.25,.1,.25,1] }}
            >
              {/* Quote mark */}
              <div className="testimonial-quote" aria-hidden="true">"</div>

              {/* Stars */}
              <div className="testimonial-stars" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={18} fill="#FFD400" color="#FFD400" />
                ))}
              </div>

              <p className="testimonial-text">"{t.text}"</p>

              <div className="testimonial-author">
                <img
                  src={t.image}
                  alt={t.name}
                  className="testimonial-avatar"
                  loading="lazy"
                />
                <div className="testimonial-meta">
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
                <span className="testimonial-tag">{t.tag}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="testimonial-controls">
            <button
              className="testimonial-btn"
              onClick={() => go(idx - 1, -1)}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="testimonial-dots" role="tablist">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === idx}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`testimonial-dot ${i === idx ? 'active' : ''}`}
                  onClick={() => go(i, i > idx ? 1 : -1)}
                />
              ))}
            </div>

            <button
              className="testimonial-btn"
              onClick={() => go(idx + 1, 1)}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
