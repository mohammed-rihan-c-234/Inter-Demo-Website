import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { contact } from '../data';
import { currentTheme, toggleTheme } from '../theme';
import { EASE } from './ui';

const links = [
  ['Businesses', '#businesses'],
  ['Services', '#services'],
  ['About', '#about'],
  ['Projects', '#projects'],
  ['Contact', '#contact'],
];

export function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });
  return <motion.div className="page-progress" style={{ scaleX }} aria-hidden="true" />;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState(currentTheme);
  const dark = theme === 'dark';
  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme(toggleTheme())}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={dark ? 'Light mode' : 'Dark mode'}
    >
      {dark ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      )}
    </button>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Saudi-owned · Established 1988 · Dammam, KSA</span>
          <div className="topbar-links">
            <a href={contact.phoneHref}>{contact.phone}</a>
            <i aria-hidden="true" />
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={contact.arabicSite} lang="ar" dir="rtl">العربية</a>
          </div>
        </div>
      </div>

      <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container header-inner">
          <a className="brand" href="#home" aria-label="INTER Trading Group home">
            <span className="brand-monogram">I<i>.</i></span>
            <span className="brand-name">INTER<small>TRADING GROUP</small></span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map(([t, h]) => <a key={t} href={h}>{t}</a>)}
          </nav>
          <div className="header-actions">
            <ThemeToggle />
            <a className="header-cta" href="#contact">Start a conversation <b aria-hidden="true">↗</b></a>
          </div>
          <button
            className="menu-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            aria-expanded={open}
          >
            {open ? '×' : '☰'}
          </button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.nav
              className="mobile-nav"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: EASE }}
              aria-label="Mobile navigation"
            >
              {links.map(([t, h]) => (
                <a key={t} href={h} onClick={() => setOpen(false)}>
                  {t} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
