// src/sections/FreeTrial.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Button } from '../components/Button';
import { Reveal } from '../components/Reveal';
import './FreeTrial.css';

function Confetti() {
  const pieces = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    color: ['#FF5A1F', '#C6FF3D', '#FFD400', '#0B1B3A', '#FF8A5C'][i % 5],
    delay: Math.random() * 0.6,
    size: Math.random() * 10 + 6,
  }));
  return (
    <div className="confetti-wrap" aria-hidden="true">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="confetti-piece"
          style={{
            left: p.x + '%',
            background: p.color,
            width: p.size + 'px',
            height: p.size + 'px',
            animationDelay: p.delay + 's',
            borderRadius: p.id % 3 === 0 ? '50%' : '2px',
          }}
        />
      ))}
    </div>
  );
}

const programs = ['Strength Training', 'CrossFit', 'Yoga', 'Cardio Blast', 'Boxing', 'Zumba'];

export function FreeTrial() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', program: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required';
    if (!form.phone.match(/^[6-9]\d{9}$/)) e.phone = 'Valid 10-digit phone required';
    if (!form.program) e.program = 'Please select a program';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const update = (field) => (e) => {
    setForm(f => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors(err => ({ ...err, [field]: '' }));
  };

  return (
    <section id="trial" className="trial-section" aria-labelledby="trial-heading">
      <div className="trial-inner">
        {/* Left panel */}
        <div className="trial-left">
          <Reveal direction="left">
            <p className="trial-eyebrow">Limited Time</p>
            <h2 id="trial-heading" className="trial-heading">Your First Class<br />Is On Us. Free.</h2>
            <p className="trial-sub">No commitments. No credit card. Just show up and experience the FITNESS STACK UNISEX GYM difference.</p>
            <ul className="trial-perks">
              {['Access to all facilities', 'One group class of your choice', 'Fitness assessment with a trainer', 'Nutrition guidance session'].map((p, i) => (
                <li key={i}><CheckCircle size={18} /> {p}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Right panel – form */}
        <div className="trial-right">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                className="trial-success"
                initial={{ opacity: 0, scale: .9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <Confetti />
                <motion.div
                  className="success-icon"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: [0, -10, 10, 0] }}
                  transition={{ delay: .2, type: 'spring', stiffness: 200 }}
                >
                  <CheckCircle size={56} />
                </motion.div>
                <h3>You're All Set! 🎉</h3>
                <p>We'll call you within 2 hours to confirm your free trial session.</p>
                <p className="success-note">Check your inbox at <strong>{form.email}</strong></p>
                <Button variant="lime" onClick={() => setSubmitted(false)}>Book Another</Button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                className="trial-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                aria-label="Free trial registration form"
                noValidate
              >
                <h3 className="form-title">Start Your Free Trial</h3>

                <div className="form-group">
                  <label htmlFor="trial-name" className="form-label">Full Name *</label>
                  <input
                    id="trial-name"
                    type="text"
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    placeholder="Arjun Sharma"
                    value={form.name}
                    onChange={update('name')}
                    autoComplete="name"
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-err' : undefined}
                  />
                  {errors.name && <span className="form-error" id="name-err" role="alert">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="trial-email" className="form-label">Email Address *</label>
                  <input
                    id="trial-email"
                    type="email"
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    placeholder="arjun@email.com"
                    value={form.email}
                    onChange={update('email')}
                    autoComplete="email"
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-err' : undefined}
                  />
                  {errors.email && <span className="form-error" id="email-err" role="alert">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="trial-phone" className="form-label">Phone Number *</label>
                  <input
                    id="trial-phone"
                    type="tel"
                    className={`form-input ${errors.phone ? 'error' : ''}`}
                    placeholder="9876543210"
                    value={form.phone}
                    onChange={update('phone')}
                    autoComplete="tel"
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'phone-err' : undefined}
                  />
                  {errors.phone && <span className="form-error" id="phone-err" role="alert">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="trial-program" className="form-label">Preferred Program *</label>
                  <select
                    id="trial-program"
                    className={`form-input form-select ${errors.program ? 'error' : ''}`}
                    value={form.program}
                    onChange={update('program')}
                    aria-required="true"
                    aria-invalid={!!errors.program}
                    aria-describedby={errors.program ? 'program-err' : undefined}
                  >
                    <option value="">Select a program...</option>
                    {programs.map((p) => <option key={p} value={p}>{p}</option>)}
                  </select>
                  {errors.program && <span className="form-error" id="program-err" role="alert">{errors.program}</span>}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="form-submit"
                  disabled={loading}
                >
                  {loading ? 'Submitting...' : 'Claim Free Trial'}
                </Button>
                <p className="form-disclaimer">By submitting, you agree to our Privacy Policy. We'll never spam you.</p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
