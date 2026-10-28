const STORAGE_KEY = 'inter-theme';

/** Read the theme currently applied to <html>. */
export function currentTheme() {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

/**
 * Seed the page theme. Preference order:
 *   1. saved user choice (localStorage)
 *   2. OS setting (prefers-color-scheme)
 *   3. light
 * Called once before React mounts — keeps everything in sync.
 */
export function initTheme() {
  let saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch { /* storage unavailable */ }
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved === 'dark' || saved === 'light'
    ? saved
    : prefersDark ? 'dark' : 'light';
  document.documentElement.dataset.theme = theme;
  return theme;
}

/** Flip light ↔ dark, persist the choice, and return the new theme. */
export function toggleTheme() {
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem(STORAGE_KEY, next); } catch { /* storage unavailable */ }
  return next;
}
