# INTER Demo Website

A homepage prototype for **INTER Trading Group** — a 100% Saudi-owned multi-business group established in Dhahran in 1988.

Built as a modern, animated single-page concept with a bespoke **"Oasis" design system** (deep teal + copper), a fully themed **dark/light mode**, and an interactive **mascot chatbot**.

---

## ✨ Features

### 🎨 Oasis design system
- Deep teal + copper palette with editorial serif headlines (Fraunces)
- Token-driven theming — every color, glass layer, and shadow is a CSS custom property
- Morphing liquid "aurora" blobs behind glassmorphism panels
- Smooth scroll-triggered reveals and micro-interactions throughout (framer-motion)

### 🌗 Dark / light mode
- Header toggle (moon/sun) with animated icons
- Choice persisted in `localStorage`, falls back to OS `prefers-color-scheme`
- No flash on reload — theme applied before first paint via an inline script
- `color-scheme` set per mode so native controls match too

### 🦅 Saqr — the mascot chatbot
- Custom SVG falcon mascot in brand colors, wearing a hard hat
- Blinks, waves, "thinks" while typing, and its eyes follow your cursor
- Answers from a knowledge base crawled from the public inter.sa site
  (businesses, services, projects, clients, contact details, FAQs)
- Quick-reply FAQ chips, message timestamps, typing indicator, reset button
- **Guided quote-request flow** — collects name, need, and contact details step by step
- **Theme intent** — say "dark mode" in chat and it flips the site theme
- Floating teaser bubble, notification dot, Esc to close

### 🗂 Services tab section
- Accessible tabs (`role="tablist"`, arrow-key navigation) — one per company service:
  Trading & Supply, Civil, Electro-Mechanical, Electrical, HR, HVAC, Indoor Air Quality
- Animated panel transitions, themed photo cards, key stats per service

### Other sections
- Hero with staged word-mask animation and glass info cards
- Interactive businesses capability showcase (6 divisions)
- Animated stat counters, client band, vision band, project gallery, photo mosaic
- Contact section with office details, Arabic site link, back-to-top control

---

## 🧰 Tech stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 19 | UI |
| Vite | 7 | Dev server & build |
| framer-motion | 12 | Animations |
| Plain CSS | — | Design system (no framework) |
| Playwright-core | — | Screenshot/visual testing scripts |

## 🚀 Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## 📁 Project structure

```
├── index.html                  # meta, fonts, no-flash theme script
├── src/
│   ├── main.jsx                # app shell (aurora, sections, chat, back-to-top)
│   ├── styles.css              # Oasis design system + dark mode tokens
│   ├── theme.js                # light/dark theme init & toggle
│   ├── data.js                 # businesses, services, projects, stats, contact
│   ├── chatbot/
│   │   ├── knowledge.js        # crawled inter.sa knowledge base + FAQs
│   │   └── engine.js           # intent matching & keyword scoring
│   └── components/             # Hero, Header, Businesses, Services, Chatbot,
│                               # Mascot (Saqr), Contact, Projects, Gallery, …
└── scripts/                    # playwright screenshot helpers
```

## ⚙️ Runtime requirements

See `requirements.txt` for the environment used to develop and build this project.
Node dependencies are managed in `package.json`.

## 🖼 Assets

Images under `public/images/` are used for this concept prototype only —
provenance is documented in `public/images/SOURCES.txt`. Confirm rights before publishing.

---

© 2026 INTER Trading Group — homepage concept. Content sourced from public pages of inter.sa.
