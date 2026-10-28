import { motion } from 'framer-motion';
import { clientNames, groupStats, businesses } from '../data';
import { Counter, EASE, Eyebrow, Reveal, SectionIntro } from './ui';

export function ClientBand() {
  const track = [...businesses, ...businesses];
  return (
    <section className="client-band" aria-label="Clients and businesses">
      <div className="container client-row">
        <p>Experience serving leading organizations</p>
        <div className="client-list">
          {clientNames.map((n, i) => (
            <motion.span
              key={n}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
            >
              {n}
            </motion.span>
          ))}
        </div>
      </div>
      <div className="ticker" aria-hidden="true">
        <motion.div
          className="ticker-track"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
          style={{ width: 'max-content', marginInline: 'auto' }}
        >
          {track.map((b, i) => (
            <span key={i}>{b.name} <i>◆</i></span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function Stats() {
  return (
    <section className="section stats" id="about" aria-label="INTER in numbers">
      <div className="container">
        <SectionIntro
          eyebrow="THE GROUP AT A GLANCE"
          title={<span>Rooted in the Kingdom.<br /><em>Committed to delivery.</em></span>}
          aside={
            <>
              <p>
                Founded in Dhahran in 1988, INTER Trading Group began as a local contracting
                business serving the Eastern Province. Today the group brings together
                construction, trading and specialist services under one Saudi-owned organisation.
              </p>
              <a className="text-arrow with-sweep" href="https://inter.sa/about/interinbrief.aspx">
                Discover INTER’s story <b aria-hidden="true">↗</b>
              </a>
            </>
          }
        />
        <div className="stats-grid">
          {groupStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="stat-cell">
              <strong>
                <Counter value={s.value} suffix={s.suffix || ''} plain={!!s.plain} />
              </strong>
              <span>{s.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="about-section" id="story" aria-label="About INTER">
      <div className="container about-wrap">
        <Reveal className="about-photo" from="left">
          <div className="about-photo-frame">
            <img src="/images/training.jpg" alt="National Training Institute facility in the Eastern Province" loading="lazy" />
            <span className="photo-tag">THE EASTERN PROVINCE · SAUDI ARABIA</span>
            <div className="about-year" aria-hidden="true">
              <motion.span
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.25, ease: EASE }}
              >
                SINCE <b>1988</b>
              </motion.span>
            </div>
          </div>
        </Reveal>
        <Reveal className="about-copy" delay={0.1} from="right">
          <Eyebrow>WHO WE ARE</Eyebrow>
          <p className="about-lead">
            For nearly four decades, INTER has delivered the construction, equipment and
            specialist services that keep Saudi industry moving — from the Eastern Province to
            wherever our clients operate.
          </p>
          <div className="about-docs">
            <img src="/images/fire-protection.jpg" alt="Certified documentation and compliance records" loading="lazy" />
            <div>
              <strong>Certified. Compliant. Accountable.</strong>
              <p>Documented quality and safety practices across every INTER business.</p>
            </div>
          </div>
          <Eyebrow>OUR PROMISE</Eyebrow>
          <p className="about-note">
            We value dependable execution, long-term relationships and a practical understanding
            of the industries our clients work in. <span>*Workforce figures shown on the current
            public site; to be confirmed before publication.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
