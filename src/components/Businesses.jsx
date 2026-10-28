import { useCallback, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { businesses } from '../data';
import { EASE, SectionIntro } from './ui';

export function Businesses() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const current = businesses[active];

  const choose = useCallback((i) => {
    setDirection(i > active ? 1 : -1);
    setActive(i);
  }, [active]);

  return (
    <section className="section businesses" id="businesses" aria-label="INTER businesses">
      <div className="container">
        <SectionIntro
          eyebrow="OUR BUSINESSES"
          title={<span>Connected expertise.<br /><em>Clear capability.</em></span>}
          aside={
            <>
              <p>
                Six complementary businesses covering the full delivery chain.
                Select any business to see the specialist work behind it.
              </p>
              <a href="https://inter.sa/services/default.aspx">Explore all services <b aria-hidden="true">↗</b></a>
            </>
          }
        />

        <div className="capability-showcase">
          {/* Left: business selector */}
          <div
            className="capability-selector"
            role="tablist"
            aria-label="INTER businesses"
            onKeyDown={(e) => {
              if (e.key === 'ArrowDown' || e.key === 'ArrowRight') choose((active + 1) % businesses.length);
              if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') choose((active - 1 + businesses.length) % businesses.length);
            }}
          >
            {businesses.map((b, i) => (
              <button
                key={b.name}
                role="tab"
                aria-selected={i === active}
                aria-controls="capability-panel"
                id={`cap-tab-${i}`}
                className={i === active ? 'active' : ''}
                onClick={() => choose(i)}
              >
                {i === active && (
                  <motion.span
                    layoutId="active-business-indicator"
                    className="active-indicator"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="cap-no">{String(i + 1).padStart(2, '0')}</span>
                <span className="cap-name">{b.name}</span>
                <span className="cap-arrow" aria-hidden="true">↗</span>
              </button>
            ))}
          </div>

          {/* Right: animated visual panel */}
          <div className="capability-visual" id="capability-panel" role="tabpanel" aria-labelledby={`cap-tab-${active}`}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.name}
                className="capability-image"
                custom={direction}
                initial={{ opacity: 0, x: direction * 42, clipPath: 'inset(0 0 0 6%)' }}
                animate={{ opacity: 1, x: 0, clipPath: 'inset(0 0 0 0%)' }}
                exit={{ opacity: 0, x: direction * -34, clipPath: 'inset(0 6% 0 0)' }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                <img src={current.image} alt={current.alt} loading="lazy" />
                <div className="capability-shade" aria-hidden="true" />
                <motion.div
                  className="capability-caption"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.16, ease: EASE }}
                >
                  <small>{current.label}</small>
                  <h3>{current.name}</h3>
                  <p>{current.description}</p>
                  <div className="cap-foot">
                    <span className="cap-stat">
                      <strong>{current.stat.value}</strong>
                      {current.stat.label}
                    </span>
                    <a href="https://inter.sa/services/default.aspx">View capability <b aria-hidden="true">↗</b></a>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            <div className="capability-pagination" aria-hidden="true">
              <span>{String(active + 1).padStart(2, '0')}</span>
              <i>
                <motion.span
                  key={active}
                  className="pagination-dot"
                  initial={{ scaleX: 0.4, opacity: 0.4 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.45, ease: EASE }}
                />
              </i>
              <span>{String(businesses.length).padStart(2, '0')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
