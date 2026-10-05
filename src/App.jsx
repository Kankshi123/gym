// src/App.jsx
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Styles
import './styles/globals.css';

// Hooks
import { useScrollProgress } from './hooks/useScrollProgress';

// Components
import { CustomCursor } from './components/CustomCursor';

// Sections
import { Preloader } from './sections/Preloader';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { Marquee } from './sections/Marquee';
import { Stats } from './sections/Stats';
import { About } from './sections/About';
import { Programs } from './sections/Programs';
import { Trainers } from './sections/Trainers';
import { Transformations } from './sections/Transformations';
import { Pricing } from './sections/Pricing';
import { Schedule } from './sections/Schedule';
import { BMICalculator } from './sections/BMICalculator';
import { Testimonials } from './sections/Testimonials';
import { Gallery } from './sections/Gallery';
import { FreeTrial } from './sections/FreeTrial';
import { Footer } from './sections/Footer';

function MainSite() {
  useScrollProgress();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: .6 }}
    >
      <Navbar />
      <main id="main-content">
        <Hero />
        <Marquee />
        <Stats />
        <About />
        <Programs />
        <Trainers />
        <Transformations />
        <Pricing />
        <Schedule />
        <BMICalculator />
        <Testimonials />
        <Gallery />
        <FreeTrial />
      </main>
      <Footer />
    </motion.div>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Scroll progress bar */}
      <div id="scroll-progress" role="progressbar" aria-label="Page scroll progress" aria-valuemin={0} aria-valuemax={100} />

      {/* Custom cursor */}
      <CustomCursor />

      <AnimatePresence mode="wait">
        {!loaded ? (
          <Preloader key="preloader" onComplete={() => setLoaded(true)} />
        ) : (
          <MainSite key="site" />
        )}
      </AnimatePresence>
    </>
  );
}
