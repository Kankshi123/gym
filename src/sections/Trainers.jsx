// src/sections/Trainers.jsx
import { motion } from 'framer-motion';
import { trainers } from '../data/siteConfig';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import './Trainers.css';

function TrainerCard({ trainer, index }) {
  return (
    <Reveal delay={index * 0.1} className="trainer-card-wrap">
      <article className="trainer-card" aria-label={`Trainer ${trainer.name}`}>
        {/* Image */}
        <div className="trainer-img">
          <img src={trainer.image} alt={trainer.name} loading="lazy" />
          {/* Hover overlay */}
          <div className="trainer-overlay">
            <div className="trainer-overlay-inner">
              <p className="trainer-specialty">{trainer.specialty}</p>
              <p className="trainer-exp">🏆 {trainer.experience} Experience</p>
              <div className="trainer-socials">
                <a href={trainer.instagram} aria-label={`${trainer.name} Instagram`} className="trainer-social">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href={trainer.twitter} aria-label={`${trainer.name} Twitter`} className="trainer-social">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="trainer-info">
          <h3 className="trainer-name">{trainer.name}</h3>
          <p className="trainer-role">{trainer.role}</p>
        </div>
      </article>
    </Reveal>
  );
}

export function Trainers() {
  return (
    <section id="trainers" className="trainers-section" aria-labelledby="trainers-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Meet The Team"
          title={<>Experts Who Push<br />You Further</>}
          subtitle="Every FITNESS STACK UNISEX GYM trainer is certified, passionate, and obsessed with your success."
          id="trainers-heading"
          center
        />
        <div className="trainers-grid">
          {trainers.map((t, i) => <TrainerCard key={t.id} trainer={t} index={i} />)}
        </div>
      </div>
    </section>
  );
}
