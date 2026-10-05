// src/sections/Footer.jsx
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ArrowUp } from 'lucide-react';
import { brand } from '../data/siteConfig';
import './Footer.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Free Trial', href: '#trial' },
];

const InstagramIcon = ({ size }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const FacebookIcon = ({ size }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const TwitterIcon = ({ size }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>;
const YoutubeIcon = ({ size }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>;

const socials = [
  { icon: InstagramIcon, href: brand.instagram, label: 'Instagram' },
  { icon: FacebookIcon, href: brand.facebook, label: 'Facebook' },
  { icon: TwitterIcon, href: brand.twitter, label: 'Twitter' },
  { icon: YoutubeIcon, href: brand.youtube, label: 'YouTube' },
];

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const navClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-inner">

        {/* Brand col */}
        <div className="footer-col footer-brand">
          <a href="#hero" onClick={() => scrollTop()} className="footer-logo" aria-label="FITNESS STACK UNISEX GYM Home">
            <svg viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="0" y="10" width="12" height="20" rx="3" fill="#FF5A1F"/>
              <rect x="10" y="14" width="7" height="12" rx="2" fill="#D94400"/>
              <rect x="17" y="17" width="46" height="6" rx="3" fill="white"/>
              <rect x="63" y="14" width="7" height="12" rx="2" fill="#D94400"/>
              <rect x="68" y="10" width="12" height="20" rx="3" fill="#FF5A1F"/>
            </svg>
            <span>FITNESS STACK UNISEX GYM</span>
          </a>
          <p className="footer-tagline">Push Beyond Your Limits</p>
          <p className="footer-desc">Dehradun's premier fitness destination, delivering transformational results since 2012.</p>
          <div className="footer-socials">
            {socials.map((s) => (
              <a key={s.label} href={s.href} className="footer-social" aria-label={s.label} target="_blank" rel="noopener noreferrer">
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="footer-link"
                  onClick={(e) => { e.preventDefault(); navClick(l.href); }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours */}
        <div className="footer-col">
          <h3 className="footer-heading">Opening Hours</h3>
          <div className="footer-hours">
            <div className="hours-row">
              <span><Clock size={14} /> Mon – Fri</span>
              <span>{brand.hours.weekdays}</span>
            </div>
            <div className="hours-row">
              <span><Clock size={14} /> Saturday</span>
              <span>{brand.hours.saturday}</span>
            </div>
            <div className="hours-row">
              <span><Clock size={14} /> Sunday</span>
              <span>{brand.hours.sunday}</span>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h3 className="footer-heading">Contact Us</h3>
          <div className="footer-contacts">
            <a href={`tel:${brand.phone.replace(/\s/g, '')}`} className="footer-contact">
              <Phone size={16} /> {brand.phone}
            </a>
            <a href={`mailto:${brand.email}`} className="footer-contact">
              <Mail size={16} /> {brand.email}
            </a>
            <p className="footer-contact footer-addr">
              <MapPin size={16} /> {brand.address}
            </p>
          </div>

          {/* Map Embed */}
          <div className="footer-map" aria-label="Gym location on map">
            <iframe 
              title="Gym Location"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(brand.address)}&t=&z=14&ie=UTF8&iwloc=&output=embed`} 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '180px', filter: 'invert(90%) hue-rotate(180deg) contrast(1.1)' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} FITNESS STACK UNISEX GYM Gym. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#" className="footer-legal-link">Privacy Policy</a>
            <a href="#" className="footer-legal-link">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <motion.button
        className="back-to-top"
        onClick={scrollTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: .95 }}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
}
