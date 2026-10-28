// "What we deliver" — accessible tabs, one per company service/feature.
import { useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { services } from '../data';
import { Reveal, SectionIntro } from './ui';

export function Services() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const tabRefs = useRef([]);
  const current = services[active];

  // Arrow-key navigation for the tablist
  const onKeyNav = (e) => {
    const dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (active + dir + services.length) % services.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section className="section services" id="services" aria-label="INTER services">
      <div className="container">
        <SectionIntro
          eyebrow="WHAT WE DELIVER"
          title={
            <>
              Seven service lines.<br />
              <em>One accountable team.</em>
            </>
          }
          aside={
            <p>
              Every INTER service is delivered by its own specialist division —
              pick a tab to see what each one actually does on the ground.
            </p>
          }
        />

        <Reveal delay={0.05}>
          <div
            className="services-tabs"
            role="tablist"
            aria-label="INTER services"
            onKeyDown={onKeyNav}
          >
            {services.map((s, i) => (
              <button
                key={s.tab}
                ref={(el) => (tabRefs.current[i] = el)}
                role="tab"
                id={`service-tab-${i}`}
                aria-selected={i === active}
                aria-controls={`service-panel-${i}`}
                tabIndex={i === active ? 0 : -1}
                className={`services-tab ${i === active ? 'active' : ''}`}
                onClick={() => setActive(i)}
              >
                {s.tab}
              </button>
            ))}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            role="tabpanel"
            id={`service-panel-${active}`}
            aria-labelledby={`service-tab-${active}`}
            className="services-panel"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 22, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="services-copy">
              <div className="service-aside">
                <span className="service-count">{String(active + 1).padStart(2, '0')}</span>
                <small className="service-stat">
                  <b>{current.stat.value}</b> {current.stat.label}
                </small>
              </div>
              <h3>{current.title}</h3>
              <p className="service-lead">{current.lead}</p>
              <p className="service-desc">{current.description}</p>
              <ul className="service-points">
                {current.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <a className="text-arrow" href="#contact">Discuss this service <b aria-hidden="true">↗</b></a>
            </div>
            <div className="service-media">
              <img src={current.image} alt={current.alt} loading="lazy" />
              <span className="service-tag">{current.tab}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
