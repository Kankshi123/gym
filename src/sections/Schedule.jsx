// src/sections/Schedule.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { schedule } from '../data/siteConfig';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import './Schedule.css';

const days = Object.keys(schedule);

export function Schedule() {
  const [activeDay, setActiveDay] = useState('Monday');
  const classes = schedule[activeDay];

  return (
    <section id="schedule" className="schedule-section" aria-labelledby="schedule-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Class Schedule"
          title="Find Your Perfect Class"
          subtitle="Book a spot in any class with your membership. First class always free!"
          center
          id="schedule-heading"
        />

        {/* Day Tabs */}
        <Reveal>
          <div className="schedule-tabs" role="tablist" aria-label="Day selection">
            {days.map((day) => (
              <button
                key={day}
                role="tab"
                aria-selected={activeDay === day}
                aria-controls={`schedule-panel-${day}`}
                id={`tab-${day}`}
                className={`schedule-tab ${activeDay === day ? 'active' : ''}`}
                onClick={() => setActiveDay(day)}
              >
                <span className="tab-short">{day.slice(0, 3)}</span>
                <span className="tab-full">{day}</span>
                {activeDay === day && (
                  <motion.div className="tab-indicator" layoutId="tab-indicator" />
                )}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Classes list */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            id={`schedule-panel-${activeDay}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeDay}`}
            className="schedule-panel"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: .3 }}
          >
            {classes.map((cls, i) => (
              <motion.div
                key={i}
                className="schedule-row"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * .07 }}
              >
                <div className="sch-time">{cls.time}</div>
                <div className="sch-info">
                  <span className="sch-class">{cls.class}</span>
                  <span className="sch-trainer">{cls.trainer}</span>
                </div>
                <div className="sch-spots">
                  <span className="spots-dot" />
                  {cls.spots} spots
                </div>
                <button
                  className="sch-book"
                  onClick={() => document.querySelector('#trial')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book
                </button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
