// src/sections/Preloader.jsx
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Preloader.css';

export function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 15 + 5;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setTimeout(() => {
          setDone(true);
          setTimeout(onComplete, 700);
        }, 300);
      }
      setProgress(Math.min(Math.floor(p), 100));
    }, 80);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="preloader"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: .6, ease: [.76, 0, .24, 1] }}
        >
          <div className="preloader__inner">
            {/* Dumbbell SVG */}
            <motion.div
              className="preloader__logo"
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: .6, ease: [.34, 1.56, .64, 1] }}
            >
              <svg viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="FITNESS STACK UNISEX GYM dumbbell logo">
                <rect x="0" y="18" width="18" height="24" rx="4" fill="#FF5A1F"/>
                <rect x="14" y="22" width="10" height="16" rx="3" fill="#D94400"/>
                <rect x="24" y="26" width="72" height="8" rx="4" fill="#0B1B3A"/>
                <rect x="96" y="22" width="10" height="16" rx="3" fill="#D94400"/>
                <rect x="102" y="18" width="18" height="24" rx="4" fill="#FF5A1F"/>
              </svg>
              <motion.div
                className="preloader__name"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: .4, duration: .4 }}
              >
                FITNESS STACK UNISEX GYM
              </motion.div>
            </motion.div>

            {/* Progress */}
            <div className="preloader__bar-wrap">
              <div className="preloader__bar">
                <motion.div
                  className="preloader__fill"
                  style={{ width: progress + '%' }}
                />
              </div>
              <motion.span
                className="preloader__count"
                key={progress}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .1 }}
              >
                {progress}%
              </motion.span>
            </div>

            {/* Tagline */}
            <motion.p
              className="preloader__tagline"
              initial={{ opacity: 0 }}
              animate={{ opacity: .6 }}
              transition={{ delay: .5, duration: .5 }}
            >
              Push Beyond Your Limits
            </motion.p>
          </div>

          {/* Background shapes */}
          <div className="preloader__shapes" aria-hidden="true">
            <span className="shape s1" />
            <span className="shape s2" />
            <span className="shape s3" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
