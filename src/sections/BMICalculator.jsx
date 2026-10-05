// src/sections/BMICalculator.jsx
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import './BMICalculator.css';

function getBMICategory(bmi) {
  if (bmi < 18.5) return { label: 'Underweight', color: '#60A5FA', tip: 'Consider a muscle-building program with our trainers.' };
  if (bmi < 25)   return { label: 'Normal Weight', color: '#34D399', tip: "You're in great shape! Maintain it with our fitness programs." };
  if (bmi < 30)   return { label: 'Overweight', color: '#FBBF24', tip: 'Our cardio and nutrition programs can help you reach your goal weight.' };
  return { label: 'Obese', color: '#F87171', tip: 'Our expert trainers will create a personalized plan just for you.' };
}

// Gauge arc helper
function describeArc(cx, cy, r, startAngle, endAngle) {
  const rad = (deg) => (deg * Math.PI) / 180;
  const x1 = cx + r * Math.cos(rad(startAngle));
  const y1 = cy + r * Math.sin(rad(startAngle));
  const x2 = cx + r * Math.cos(rad(endAngle));
  const y2 = cy + r * Math.sin(rad(endAngle));
  const large = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2}`;
}

export function BMICalculator() {
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState(null);

  const calculate = () => {
    const h = height / 100;
    const result = (weight / (h * h)).toFixed(1);
    const cat = getBMICategory(parseFloat(result));
    setBmi(result);
    setCategory(cat);
  };

  // Gauge: map BMI 10–40 → -140 to 140 degrees
  const gaugeAngle = bmi
    ? Math.min(140, Math.max(-140, ((parseFloat(bmi) - 10) / 30) * 280 - 140))
    : -140;

  return (
    <section id="bmi" className="bmi-section" aria-labelledby="bmi-heading">
      <div className="container">
        <SectionHeading
          eyebrow="BMI Calculator"
          title="Know Your Numbers"
          subtitle="Calculate your Body Mass Index and get a personalised fitness recommendation."
          center
          id="bmi-heading"
        />

        <div className="bmi-inner">
          {/* Form */}
          <div className="bmi-form">
            <label className="bmi-label" htmlFor="bmi-height">
              Height: <strong>{height} cm</strong>
            </label>
            <input
              type="range"
              id="bmi-height"
              className="bmi-range"
              min={140} max={220}
              value={height}
              onChange={(e) => setHeight(+e.target.value)}
              aria-label="Height in centimetres"
            />
            <div className="bmi-range-labels"><span>140cm</span><span>220cm</span></div>

            <label className="bmi-label" htmlFor="bmi-weight" style={{ marginTop: '1.5rem' }}>
              Weight: <strong>{weight} kg</strong>
            </label>
            <input
              type="range"
              id="bmi-weight"
              className="bmi-range"
              min={30} max={180}
              value={weight}
              onChange={(e) => setWeight(+e.target.value)}
              aria-label="Weight in kilograms"
            />
            <div className="bmi-range-labels"><span>30kg</span><span>180kg</span></div>

            <Button variant="primary" size="lg" className="bmi-btn" onClick={calculate}>
              Calculate BMI
            </Button>
          </div>

          {/* Result */}
          <div className="bmi-result-area">
            {bmi ? (
              <motion.div
                className="bmi-result"
                initial={{ opacity: 0, scale: .9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: .4, type: 'spring' }}
              >
                {/* Gauge */}
                <div className="bmi-gauge" aria-label={`BMI gauge showing ${bmi}`}>
                  <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
                    {/* Track */}
                    <path d={describeArc(100, 100, 80, -220, 40)} stroke="#E2E8F0" strokeWidth="16" fill="none" strokeLinecap="round" />
                    {/* Fill */}
                    <path d={describeArc(100, 100, 80, -220, -220 + ((parseFloat(bmi) - 10) / 30) * 260)} stroke={category.color} strokeWidth="16" fill="none" strokeLinecap="round" />
                    {/* Needle */}
                    <line
                      x1="100" y1="100"
                      x2={100 + 65 * Math.cos(((gaugeAngle - 90) * Math.PI) / 180)}
                      y2={100 + 65 * Math.sin(((gaugeAngle - 90) * Math.PI) / 180)}
                      stroke={category.color}
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <circle cx="100" cy="100" r="6" fill={category.color} />
                    {/* Value */}
                    <text x="100" y="82" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#0B1B3A" fontFamily="'Bebas Neue', sans-serif">{bmi}</text>
                    <text x="100" y="96" textAnchor="middle" fontSize="10" fill="#64748B" fontFamily="'Poppins', sans-serif">BMI</text>
                  </svg>
                </div>

                <motion.div
                  className="bmi-category"
                  style={{ color: category.color }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: .2 }}
                >
                  {category.label}
                </motion.div>
                <motion.p
                  className="bmi-tip"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: .35 }}
                >
                  {category.tip}
                </motion.p>
                <Button
                  variant="primary"
                  onClick={() => document.querySelector('#trial')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get a Personalised Plan
                </Button>
              </motion.div>
            ) : (
              <div className="bmi-placeholder" aria-hidden="true">
                <div className="bmi-placeholder-icon">📊</div>
                <p>Enter your details and calculate your BMI</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
