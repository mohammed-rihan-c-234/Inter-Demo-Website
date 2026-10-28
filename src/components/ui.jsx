// Shared motion primitives used across sections.
import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

export const EASE = [0.22, 1, 0.36, 1];

/** Scroll-triggered staged reveal with blur. */
export function Reveal({ children, className = '', delay = 0, from = 'up', amount = 0.18 }) {
  const reduce = useReducedMotion();
  const offset = from === 'left' ? -40 : from === 'right' ? 40 : 28;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : offset, x: reduce || from === 'up' ? 0 : offset / 2, filter: reduce ? 'none' : 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, x: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Animated number that counts up when scrolled into view. */
export function Counter({ value, suffix = '', duration = 1.6, plain = false }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce || plain) { setDisplay(value); return; }
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / (duration * 1000), 1);
      setDisplay(Math.round(value * (1 - Math.pow(1 - t, 3))));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration, reduce, plain]);

  return (
    <span ref={ref}>
      {plain ? display : display > 0 || inView ? display : 0}
      {suffix}
    </span>
  );
}

/** Section label: "— OUR BUSINESSES". */
export function Eyebrow({ light = false, children }) {
  return (
    <div className={light ? 'eyebrow light' : 'eyebrow'}>
      <i aria-hidden="true" />
      {children}
    </div>
  );
}

/** Standard section header used at the top of most sections. */
export function SectionIntro({ eyebrow, title, aside }) {
  return (
    <Reveal className="section-intro">
      <div className="section-intro-copy">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2>{title}</h2>
      </div>
      {aside && (
        <div className="intro-aside">
          {aside}
        </div>
      )}
    </Reveal>
  );
}
