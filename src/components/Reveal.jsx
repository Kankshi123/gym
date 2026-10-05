// src/components/Reveal.jsx
// Wraps children with a scroll-triggered fade/slide animation
import { motion } from 'framer-motion';

const variants = {
  hidden: (dir) => ({
    opacity: 0,
    y: dir === 'up' ? 40 : dir === 'down' ? -40 : 0,
    x: dir === 'left' ? 40 : dir === 'right' ? -40 : 0,
    scale: dir === 'scale' ? 0.85 : 1,
  }),
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
  },
};

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  as = 'div',
}) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      custom={direction}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </Tag>
  );
}

export function RevealGroup({ children, stagger = 0.1, className = '' }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{ visible: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  );
}
