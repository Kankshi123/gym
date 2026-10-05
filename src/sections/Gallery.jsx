// src/sections/Gallery.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { galleryImages } from '../data/siteConfig';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import './Gallery.css';

function Lightbox({ image, onClose }) {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Enlarged image: ${image.alt}`}
        >
          <motion.div
            className="lightbox-inner"
            initial={{ scale: .85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: .85, opacity: 0 }}
            transition={{ duration: .3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={image.src.replace('w=800', 'w=1200')} alt={image.alt} />
            <p className="lightbox-caption">{image.alt}</p>
          </motion.div>
          <button className="lightbox-close" onClick={onClose} aria-label="Close image">
            <X size={24} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="gallery" className="gallery-section bg-warm" aria-labelledby="gallery-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Our Space"
          title="World-Class Facility"
          subtitle="State-of-the-art equipment, premium spaces, and an energy that drives results."
          center
          id="gallery-heading"
        />

        <div className="masonry-grid">
          {galleryImages.map((img, i) => (
            <Reveal key={img.id} delay={i * 0.08} className={`masonry-item masonry-${img.span}`}>
              <button
                className="gallery-item"
                onClick={() => setSelected(img)}
                aria-label={`View ${img.alt}`}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className="gallery-overlay">
                  <ZoomIn size={28} className="gallery-zoom" />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox image={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
