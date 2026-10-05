// src/sections/Pricing.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { plans } from '../data/siteConfig';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { Button } from '../components/Button';
import './Pricing.css';

function PlanCard({ plan, yearly, index }) {
  const price = yearly ? plan.yearlyPrice : plan.monthlyPrice;
  const period = yearly ? '/year' : '/month';

  return (
    <Reveal delay={index * 0.12} className={`plan-card-wrap ${plan.popular ? 'popular' : ''}`}>
      <article
        className="plan-card"
        style={{ background: plan.color, color: plan.textColor }}
        aria-label={`${plan.name} membership plan`}
      >
        {plan.popular && (
          <div className="plan-popular-badge">⭐ Most Popular</div>
        )}

        <div className="plan-header">
          <h3 className="plan-name">{plan.name}</h3>
          <div className="plan-price">
            <AnimatePresence mode="wait">
              <motion.span
                key={price}
                className="plan-amount"
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: .25 }}
              >
                ₹{price.toLocaleString()}
              </motion.span>
            </AnimatePresence>
            <span className="plan-period">{period}</span>
          </div>
          {yearly && (
            <motion.p
              className="plan-saving"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Save ₹{((plan.monthlyPrice * 12) - plan.yearlyPrice).toLocaleString()}/year!
            </motion.p>
          )}
        </div>

        <ul className="plan-features" aria-label={`${plan.name} features`}>
          {plan.features.map((f, i) => (
            <li key={i} className="plan-feature plan-feature--yes">
              <Check size={15} strokeWidth={3} className="feat-icon feat-yes" />
              {f}
            </li>
          ))}
          {plan.notIncluded.map((f, i) => (
            <li key={i} className="plan-feature plan-feature--no">
              <X size={15} strokeWidth={3} className="feat-icon feat-no" />
              {f}
            </li>
          ))}
        </ul>

        <Button
          variant={plan.popular ? 'lime' : (plan.color === '#0B1B3A' ? 'primary' : 'outline')}
          className="plan-cta"
          onClick={() => document.querySelector('#trial')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Get Started
        </Button>
      </article>
    </Reveal>
  );
}

export function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="pricing-section" aria-labelledby="pricing-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Membership Plans"
          title={<>Invest In<br />Your Best Self</>}
          subtitle="Transparent pricing. No hidden fees. Cancel anytime."
          center
          id="pricing-heading"
        />

        {/* Toggle */}
        <div className="pricing-toggle" role="group" aria-label="Billing period toggle">
          <span className={!yearly ? 'toggle-active' : ''}>Monthly</span>
          <button
            className="toggle-switch"
            onClick={() => setYearly(!yearly)}
            aria-pressed={yearly}
            aria-label="Toggle yearly billing"
          >
            <motion.div
              className="toggle-thumb"
              animate={{ x: yearly ? 24 : 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            />
          </button>
          <span className={yearly ? 'toggle-active' : ''}>
            Yearly <span className="toggle-save">Save 25%</span>
          </span>
        </div>

        <div className="plans-grid">
          {plans.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} yearly={yearly} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
