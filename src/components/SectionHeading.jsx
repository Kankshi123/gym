// src/components/SectionHeading.jsx
import { motion } from 'framer-motion';
import './SectionHeading.css';

export function SectionHeading({ eyebrow, title, subtitle, center = false, light = false }) {
  return (
    <div className={`section-heading ${center ? 'center' : ''} ${light ? 'light' : ''}`}>
      {eyebrow && (
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .5 }}
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        className="heading-text"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .6, delay: .1 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="subtitle-text"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .5, delay: .2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
