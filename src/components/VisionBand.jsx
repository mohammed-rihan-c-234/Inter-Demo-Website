import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Reveal } from './ui';

export function VisionBand() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);

  return (
    <section className="vision-band" ref={ref} aria-label="Vision statement">
      <motion.img
        className="vision-image"
        src="/images/services-banner.jpg"
        alt=""
        aria-hidden="true"
        style={{ y: reduce ? 0 : y, scale: 1.2 }}
        loading="lazy"
      />
      <div className="vision-overlay" aria-hidden="true" />
      <div className="container vision-inner">
        <Reveal>
          <p className="vision-quote">
            “To remain the Kingdom’s trusted partner — <em>built on trust, ready for what comes next.</em>”
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <span className="vision-attrib">— INTER TRADING GROUP · VISION</span>
        </Reveal>
      </div>
    </section>
  );
}
