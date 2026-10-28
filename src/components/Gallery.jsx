import { motion } from 'framer-motion';
import { EASE, SectionIntro } from './ui';

const tiles = [
  { name: 'Safer sites, every day', image: '/images/whoweare.jpg' },
  { name: 'Machines ready to deploy', image: '/images/carequipment.jpg' },
  { name: 'Stands that stop the aisle', image: '/images/exhibition.jpg' },
  { name: 'Protection engineered in-house', image: '/images/fire-protection.jpg' },
  { name: 'Supply routes across the region', image: '/images/enterprise.jpg' },
  { name: 'On program, on the ground', image: '/images/construction.jpg' },
];

export function Gallery() {
  return (
    <section className="section gallery" id="insight" aria-label="Group in action">
      <div className="container">
        <SectionIntro
          eyebrow="GROUP IN ACTION"
          title={<span>Inside our <em>operations.</em></span>}
          aside={<p>A glimpse across construction sites, safety operations and specialist services — hover a tile to reveal the story behind it.</p>}
        />
        <div className="gallery-grid">
          {tiles.map((t, i) => (
            <motion.figure
              key={t.name}
              className={i % 3 === 0 ? 'tile tall' : 'tile'}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: EASE }}
            >
              <img src={t.image} alt={t.name} loading="lazy" />
              <figcaption>{t.name}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
