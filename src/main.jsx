import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, useReducedMotion } from 'framer-motion';
import './styles.css';
import { initTheme } from './theme';

import { ProgressBar, Header } from './components/Header';
import { Hero } from './components/Hero';
import { ClientBand, Stats, About } from './components/About';
import { Businesses } from './components/Businesses';
import { Services } from './components/Services';
import { VisionBand } from './components/VisionBand';
import { Projects } from './components/Projects';
import { Gallery } from './components/Gallery';
import { Contact, Footer } from './components/Contact';
import { BackToTop } from './components/BackToTop';
import { ChatWidget } from './chatbot/ChatWidget';

/** Liquid gradient blobs that morph behind the glass panels. */
function Aurora() {
  const reduce = useReducedMotion();
  if (reduce) return null;
  return (
    <div className="aurora" aria-hidden="true">
      <span className="orb orb-a" />
      <span className="orb orb-b" />
      <span className="orb orb-c" />
    </div>
  );
}

/** Ghost arrow that drifts through the empty margin between sections. */
function DriftingArrow() {
  const reduce = useReducedMotion();
  if (reduce) return null;
  return (
    <motion.div
      className="drift-arrow"
      aria-hidden="true"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: [0, 0.35, 0] }}
      viewport={{ amount: 0.5 }}
      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      style={{ y: [0, 26, 0] }}
    >
      ↓
    </motion.div>
  );
}

function App() {
  return (
    <>
      <Aurora />
      <ProgressBar />
      <Header />
      <main>
        <Hero />
        <ClientBand />
        <Businesses />
        <Services />
        <Stats />
        <VisionBand />
        <About />
        <Projects />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <DriftingArrow />
      <BackToTop />
      <ChatWidget />
    </>
  );
}

initTheme();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
