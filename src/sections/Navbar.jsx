// src/sections/Navbar.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '../components/Button';
import './Navbar.css';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Gallery', href: '#gallery' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const handleNavClick = (href) => {
    setActive(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`} role="banner">
        <div className="container navbar__inner">
          {/* Logo */}
          <a href="#hero" className="navbar__logo" onClick={() => handleNavClick('#hero')} aria-label="FITNESS STACK UNISEX GYM Home">
            <svg viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="0" y="10" width="12" height="20" rx="3" fill="#FF5A1F"/>
              <rect x="10" y="14" width="7" height="12" rx="2" fill="#D94400"/>
              <rect x="17" y="17" width="46" height="6" rx="3" fill={scrolled ? '#0B1B3A' : '#FFFFFF'}/>
              <rect x="63" y="14" width="7" height="12" rx="2" fill="#D94400"/>
              <rect x="68" y="10" width="12" height="20" rx="3" fill="#FF5A1F"/>
            </svg>
            <span className={`navbar__brand ${scrolled ? 'dark' : ''}`}>FITNESS STACK UNISEX GYM</span>
          </a>

          {/* Desktop links */}
          <nav className="navbar__links" aria-label="Main navigation">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`navbar__link ${active === l.href ? 'active' : ''} ${scrolled ? 'dark' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(l.href); }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="navbar__cta">
            <Button
              variant={scrolled ? 'primary' : 'outline-white'}
              size="sm"
              onClick={() => handleNavClick('#trial')}
            >
              Join Now
            </Button>
            {/* Hamburger */}
            <button
              className={`navbar__hamburger ${scrolled ? 'dark' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: .25 }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <nav>
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  className="mobile-menu__link"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * .06 }}
                  onClick={(e) => { e.preventDefault(); handleNavClick(l.href); }}
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: .4 }}
              >
                <Button
                  variant="primary"
                  className="mobile-menu__cta"
                  onClick={() => handleNavClick('#trial')}
                >
                  Start Free Trial
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
