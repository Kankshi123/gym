// src/sections/Hero.jsx
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Play, Zap } from 'lucide-react';
import { Button } from '../components/Button';
import './Hero.css';

const words = ['PUSH', 'BEYOND', 'YOUR', 'LIMITS'];

export function Hero() {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (parallaxRef.current) {
        const y = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${y * 0.35}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: .12, delayChildren: .3 } },
  };
  const wordVariants = {
    hidden: { opacity: 0, y: 60, skewY: 5 },
    visible: { opacity: 1, y: 0, skewY: 0, transition: { duration: .7, ease: [.25, .1, .25, 1] } },
  };

  return (
    <section id="hero" className="hero" aria-label="Hero section">
      {/* Background image with parallax */}
      <div className="hero__bg" aria-hidden="true">
        <div ref={parallaxRef} className="hero__bg-img">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=85"
            alt=""
            loading="eager"
          />
        </div>
        <div className="hero__overlay" />
      </div>

      {/* Floating shapes */}
      <div className="hero__shapes" aria-hidden="true">
        <motion.div
          className="hero-shape hs1"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Zap size={28} />
        </motion.div>
        <motion.div
          className="hero-shape hs2"
          animate={{ y: [0, 16, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          💪
        </motion.div>
        <motion.div
          className="hero-shape hs3"
          animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: .5 }}
        >
          🔥
        </motion.div>
        <motion.div
          className="hero-badge"
          initial={{ scale: 0, rotate: -15 }}
          animate={{ scale: 1, rotate: -8 }}
          transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
        >
          <span className="badge-number">#1</span>
          <span className="badge-text">GYM IN<br/>Dehradun</span>
        </motion.div>
        <motion.div
          className="hero-badge2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5, type: 'spring', stiffness: 180 }}
        >
          <span>FREE</span>
          <span>TRIAL</span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="container hero__content">
        {/* Eyebrow */}
        <motion.div
          className="hero__eyebrow"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .6, delay: .1 }}
        >
          <span className="hero__eye-dot" />
          Dehradun's Premier Fitness Destination
        </motion.div>

        {/* Big headline */}
        <motion.h1
          className="hero__headline"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          aria-label="Push Beyond Your Limits"
        >
          {words.map((word, i) => (
            <motion.span key={i} className="hero__word" variants={wordVariants}>
              {word}
              {i === 1 && <span className="hero__word-accent"> BEYOND</span>}
            </motion.span>
          ))}
        </motion.h1>

        {/* Sub */}
        <motion.p
          className="hero__sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .9, duration: .6 }}
        >
          World-class trainers · State-of-the-art equipment · 120+ weekly classes
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="hero__ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: .5 }}
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => document.querySelector('#trial')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Free Trial
          </Button>
          <Button
            variant="outline-white"
            size="lg"
            onClick={() => document.querySelector('#programs')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Play size={18} fill="currentColor" /> Explore Programs
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          className="hero__scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }}
          aria-label="Scroll to about section"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={20} />
          </motion.div>
          <span>Scroll</span>
        </motion.a>
      </div>
    </section>
  );
}
