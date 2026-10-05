// src/sections/About.jsx
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal, RevealGroup } from '../components/Reveal';
import { Button } from '../components/Button';
import './About.css';

const perks = [
  'State-of-the-art equipment updated every 2 years',
  'Air-conditioned facility with premium locker rooms',
  'Expert nutritionists on staff',
  'Dedicated recovery zone with ice baths & saunas',
  'On-site parking & 24-hour security',
  'Result-driven approach with tracked progress',
];

export function About() {
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const section = document.querySelector('#about');
      if (!section) return;
      const top = section.getBoundingClientRect().top + y;
      const offset = (y - top) * 0.08;
      if (img1Ref.current) img1Ref.current.style.transform = `translateY(${offset}px)`;
      if (img2Ref.current) img2Ref.current.style.transform = `translateY(${-offset}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="about" className="about-section" aria-labelledby="about-heading">
      <div className="container about-inner">

        {/* Image collage */}
        <Reveal direction="left" className="about-images">
          <div className="about-img about-img--main">
            <div ref={img1Ref}>
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=700&q=80"
                alt="Personal trainer helping client with form"
                loading="lazy"
              />
            </div>
          </div>
          <div className="about-img about-img--secondary">
            <div ref={img2Ref}>
              <img
                src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=500&q=80"
                alt="Members working out in FITNESS STACK UNISEX GYM gym"
                loading="lazy"
              />
            </div>
          </div>
          {/* Floating stat badge */}
          <motion.div
            className="about-stat-badge"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: .5, type: 'spring', stiffness: 200 }}
          >
            <span className="asb-number">12+</span>
            <span className="asb-label">Years of<br/>Excellence</span>
          </motion.div>
        </Reveal>

        {/* Text */}
        <div className="about-text">
          <SectionHeading
            eyebrow="About FITNESS STACK UNISEX GYM"
            id="about-heading"
            title={<>We Don't Just Build<br /><span style={{ color: 'var(--primary)' }}>Bodies.</span> We Build<br />Champions.</>}
            subtitle="Founded in 2012, FITNESS STACK UNISEX GYM has grown from a single training floor to Dehradun's most respected fitness institution — because we obsess over your results."
          />

          <RevealGroup stagger={0.08} className="about-perks">
            {perks.map((p, i) => (
              <motion.div
                key={i}
                className="about-perk"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: .4 } },
                }}
              >
                <span className="perk-icon"><Check size={14} strokeWidth={3} /></span>
                {p}
              </motion.div>
            ))}
          </RevealGroup>

          <Reveal delay={.3}>
            <Button
              variant="primary"
              size="lg"
              onClick={() => document.querySelector('#trial')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started Today
            </Button>
          </Reveal>
        </div>
      </div>

      {/* Diagonal divider */}
      <div className="section-divider about-divider" aria-hidden="true">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <polygon points="0,0 1440,60 1440,60 0,60" fill="var(--bg-warm)" />
        </svg>
      </div>
    </section>
  );
}
