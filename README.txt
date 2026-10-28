# INTER Trading Group — homepage concept (v2)

Saudi-owned, established 1988 — a client-presentation-ready homepage prototype.

## Chat assistant
- `src/chatbot/knowledge.js` — knowledge base built from the public inter.sa
  pages (about, vision, mission, core values, 6 businesses, 7 service lines,
  clients, projects, contact, catalog, Arabic site) + 18 FAQs + smalltalk intents
- `src/chatbot/engine.js` — intent rules first, then keyword/phrase scoring
  over the KB with fallback to contact links
- `src/chatbot/ChatWidget.jsx` — floating chat panel: welcome chips, FAQ chips,
  typing indicator, follow-up suggestion chips, deep links (catalog PDF,
  Arabic site, mail/tel), reset button
- To update answers, edit `knowledge.js` — no engine changes needed

## Run locally
From this folder:
  npm install
  npm run dev
  npm run build && npm run preview   # production preview (used for screenshots)

## Structure
- `src/data.js` — content model: businesses, projects, stats, clients, contact
- `src/main.jsx` — section order + root render
- `src/components/` — Header, Hero, About/Stats/ClientBand, Businesses,
  VisionBand, Projects, Gallery, Contact/Footer, shared `ui.jsx`
- `src/styles.css` — design system (navy/gold, Inter + Fraunces), responsive
- `vite.config.js` — automatic JSX runtime

## Page narrative
Hero → client band/ticker → businesses showcase (tablist + cross-fade) →
group stats (scrolled counters) → vision parallax band → about/story →
projects carousel → operations mosaic → contact → footer.

## Motion
Scroll progress bar, parallax hero + staggered masked word reveal, ticker,
shared `layoutId` tab indicator, clip-path cross-fades, animated counters,
scroll-linked parallax band, hover sweeps and drift arrow. All transitions
respect `prefers-reduced-motion`.

## Content integrity
- Images are copied from public inter.sa pages — see `public/images/SOURCES.txt`.
- Ownership/workforce figures are marked with **\*** and must be confirmed
  before publication.
- No enquiry form is connected; contact links open mail/tel.
- Arabic link opens the current Arabic site (https://inter.sa/ar/).
