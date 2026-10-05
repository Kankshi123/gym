// src/sections/Programs.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, BarChart2 } from 'lucide-react';
import { programs } from '../data/siteConfig';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import './Programs.css';

function ProgramCard({ program, index }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    setTilt({ x, y });
  };

  return (
    <Reveal delay={index * 0.1} className="program-card-wrap">
      <motion.article
        className="program-card"
        onMouseMove={onMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        animate={{ rotateX: tilt.y, rotateY: tilt.x }}
        style={{ transformStyle: 'preserve-3d' }}
        transition={{ type: 'spring', stiffness: 150, damping: 20 }}
        aria-label={`${program.title} program`}
      >
        {/* Image */}
        <div className="program-img">
          <img src={program.image} alt={`${program.title} class`} loading="lazy" />
          {program.badge && (
            <span className="program-badge" style={{ background: program.color === '#C6FF3D' || program.color === '#FFD400' ? program.color : program.color, color: program.color === '#C6FF3D' || program.color === '#FFD400' ? 'var(--navy)' : 'var(--white)' }}>
              {program.badge}
            </span>
          )}
        </div>

        {/* Body */}
        <div className="program-body">
          <div className="program-meta">
            <span className="program-meta-item">
              <Clock size={13} /> {program.duration}
            </span>
            <span className="program-meta-item">
              <BarChart2 size={13} /> {program.level}
            </span>
          </div>
          <h3 className="program-title">{program.title}</h3>
          <p className="program-desc">{program.description}</p>
          <button className="program-cta" onClick={() => document.querySelector('#trial')?.scrollIntoView({ behavior: 'smooth' })}>
            Learn more <ArrowRight size={16} className="program-arrow" />
          </button>
        </div>
      </motion.article>
    </Reveal>
  );
}

export function Programs() {
  return (
    <section id="programs" className="programs-section bg-warm" aria-labelledby="programs-heading">
      <div className="container">
        <SectionHeading
          eyebrow="What We Offer"
          title={<>Programs Built<br />to Transform</>}
          subtitle="From strength to serenity — find your perfect training style."
          id="programs-heading"
          center
        />
        <div className="programs-grid">
          {programs.map((p, i) => <ProgramCard key={p.id} program={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
