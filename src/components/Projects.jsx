import { useCallback, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects } from '../data';
import { EASE, SectionIntro } from './ui';

export function Projects() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const project = projects[active];

  const go = useCallback((d) => {
    setDirection(d);
    setActive((i) => (i + d + projects.length) % projects.length);
  }, []);

  const jump = useCallback((i) => {
    setDirection(i > active ? 1 : -1);
    setActive(i);
  }, [active]);

  return (
    <section className="section projects" id="projects" aria-label="Project experience">
      <div className="container">
        <SectionIntro
          eyebrow="PROJECT EXPERIENCE"
          title={<span>Work grounded in<br /><em>experience.</em></span>}
          aside={
            <>
              <p>
                A selection from INTER’s public project gallery. Verified scope, location and
                outcomes to be added as full project case studies.
              </p>
              <a href="https://inter.sa/default.aspx">Browse project gallery <b aria-hidden="true">↗</b></a>
            </>
          }
        />

        <div className="project-stage">
          {/* Main image, swipeable cross-fade */}
          <div className="project-media">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                custom={direction}
                className="project-active-image"
                initial={{ opacity: 0, x: direction * 56, scale: 1.04 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: direction * -44, scale: 0.98 }}
                transition={{ duration: 0.52, ease: EASE }}
                aria-label={`Open ${project.title} in the INTER gallery`}
              >
                <img src={project.image} alt={project.alt} loading="lazy" />
                <span className="project-count">{String(active + 1).padStart(2, '0')} <i>/</i> {String(projects.length).padStart(2, '0')}</span>
                <span className="project-open" aria-hidden="true">↗</span>
              </motion.a>
            </AnimatePresence>
          </div>

          {/* Details and controls */}
          <div className="project-details">
            <AnimatePresence mode="wait">
              <motion.div
                className="project-meta"
                key={project.title}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.42, ease: EASE }}
              >
                <small>{project.category.toUpperCase()}</small>
                <h3>{project.title}</h3>
                <p>{project.scope}</p>
              </motion.div>
            </AnimatePresence>

            <div className="project-controls">
              <button onClick={() => go(-1)} aria-label="Previous project">←</button>
              <button onClick={() => go(1)} aria-label="Next project">→</button>
              <div className="project-progress" aria-hidden="true">
                <motion.span
                  animate={{ width: `${((active + 1) / projects.length) * 100}%` }}
                  transition={{ duration: 0.4, ease: EASE }}
                />
              </div>
            </div>

            <div className="project-thumbs">
              {projects.map((item, i) => (
                <button
                  key={item.title}
                  className={i === active ? 'selected' : ''}
                  onClick={() => jump(i)}
                  aria-label={`Show ${item.title}`}
                >
                  <img src={item.image} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="project-note">
          Images sourced from the public INTER gallery — full case studies in development.
        </p>
      </div>
    </section>
  );
}
