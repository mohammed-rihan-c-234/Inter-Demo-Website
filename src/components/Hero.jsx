import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { EASE } from './ui';

function MaskedWord({ word, index, em = false }) {
  const props = {
    initial: { y: '112%', opacity: 0, rotate: 3 },
    animate: { y: '0%', opacity: 1, rotate: 0 },
    transition: { duration: 0.95, delay: 0.3 + index * 0.085, ease: EASE },
  };
  return (
    <span className="word-mask" aria-hidden="true">
      <motion.span {...props} className={em ? 'hero-word em' : 'hero-word'}>
        {word}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 720], [0, reduce ? 0 : 70]);
  const imageScale = useTransform(scrollY, [0, 720], [1.06, reduce ? 1.06 : 1.18]);
  const contentY = useTransform(scrollY, [0, 720], [0, reduce ? 0 : -60]);
  const fade = useTransform(scrollY, [0, 500], [1, 0.2]);

  let wordIndex = 0;

  return (
    <section className="hero" id="home">
      <motion.img
        className="hero-image"
        src="/images/excavator.jpg"
        alt="INTER construction equipment at a Saudi worksite"
        style={{ y: imageY, scale: imageScale }}
        fetchPriority="high"
      />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="container hero-content">
        <motion.div className="eyebrow light" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <i aria-hidden="true" /> A SAUDI GROUP WITH A PROVEN FOUNDATION
        </motion.div>

        <motion.h1 style={{ y: contentY, opacity: fade }}>
          <span className="visually-hidden">Built on trust. Ready for what’s next.</span>
          <span className="hero-line" aria-hidden="true">
            {['Built', 'on', 'trust.'].map((w) => <MaskedWord key={w} word={w} index={wordIndex++} />)}
          </span>
          <span className="hero-line" aria-hidden="true">
            {['Ready', 'for'].map((w) => <MaskedWord key={w} word={w} index={wordIndex++} />)}
            {['what’s', 'next.'].map((w) => <MaskedWord key={w} word={w} index={wordIndex++} em />)}
          </span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 1.0 }}>
          Construction, engineering, trading and specialist services supporting industry across Saudi Arabia.
        </motion.p>

        <motion.div className="hero-actions" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.15 }}>
          <a className="button button-gold with-sweep" href="#businesses">Explore our businesses <span aria-hidden="true">→</span></a>
          <a className="hero-link" href="#projects">View selected projects <span aria-hidden="true">↗</span></a>
        </motion.div>
      </div>

      <motion.aside
        className="hero-mini-chip"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.15, ease: EASE }}
      >
        <b>06</b> &nbsp;BUSINESSES · ONE SAUDI GROUP
      </motion.aside>

      <motion.aside
        className="hero-glass-card"
        initial={{ opacity: 0, x: 34, scale: 0.96 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.85, delay: 1.3, ease: EASE }}
      >
        <img className="glass-thumb" src="/images/whoweare.jpg" alt="" aria-hidden="true" loading="lazy" />
        <div className="glass-copy">
          <small>INTER GROUP</small>
          <strong>100% Saudi-owned*</strong>
          <span>Established in Dhahran<br /><b>1988</b></span>
        </div>
        <i aria-hidden="true">↗</i>
      </motion.aside>

      <div className="hero-bottom">
        <span>CONSTRUCTION · EQUIPMENT · SPECIALIST SERVICES</span>
        <motion.a
          href="#businesses"
          animate={reduce ? {} : { y: [0, 5, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          SCROLL TO EXPLORE <i aria-hidden="true">↓</i>
        </motion.a>
        <span>SINCE 1988</span>
      </div>
    </section>
  );
}
