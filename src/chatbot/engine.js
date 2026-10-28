// Retrieval engine: intent matching first, then keyword scoring over the KB.
import { knowledge, faqs, intents, CONTACT } from './knowledge.js';

const STOP = new Set(['the', 'a', 'an', 'is', 'are', 'do', 'does', 'you', 'your', 'of', 'and', 'to', 'in', 'on', 'for', 'what', 'how', 'can', 'i', 'me', 'my', 'it', 'at', 'be', 'with', 'about', 'tell', 'want', 'know', 'have', 'please', 'we', 'us', 'our', 'there', 'that', 'this', 'more', 'info', 'information']);

function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\u0600-\u06FF\s]/g, ' ')
    .split(/\s+/)
    .filter((w) => w && !STOP.has(w) && w.length > 1);
}

/** Normalise plurals/variants crudely for matching. */
function stem(w) {
  if (w.endsWith('ies')) return w.slice(0, -3) + 'y';
  if (w.endsWith('es')) return w.slice(0, -2);
  if (w.endsWith('s') && !w.endsWith('ss')) return w.slice(0, -1);
  return w;
}

function scoreEntry(entry, queryTokens) {
  let score = 0;
  const titleTokens = tokenize(entry.title);
  for (const tk of titleTokens) {
    for (const q of queryTokens) {
      if (q === tk || stem(q) === stem(tk)) score += 9;
      else if (tk.includes(q) || q.includes(tk)) score += 3;
    }
  }
  const kw = entry.keywords.map((k) => k.toLowerCase());
  for (const kwToken of kw) {
    const parts = tokenize(kwToken);
    for (const p of parts) {
      for (const q of queryTokens) {
        if (q === p || stem(q) === stem(p)) score += 9;
        else if (p.includes(q) || q.includes(p)) score += 1.5;
      }
    }
  }
  return score;
}

/** Direct-lookup answers for crisp factual questions (phone, email...). */
const directRules = [
  { match: /\b(phone|number|call|tel|mobile)\b/i, id: 'contact', boost: 30 },
  { match: /\b(email|e-?mail|mail)\b/i, id: 'contact', boost: 30 },
  { match: /\b(address|located|location|where)\b/i, id: 'contact', boost: 22 },
  { match: /\b(hours|timing|timing|open|close|friday|working (hours|days))\b/i, id: 'contact', boost: 22 },
  { match: /\b(aramco|clients?)\b/i, id: 'clients', boost: 20 },
  { match: /\b(catalog|catalogue)\b/i, id: 'catalog', boost: 30 },
];

export function getFAQs() {
  return faqs.map((f) => f.q);
}

export function answerFor(id) {
  return knowledge.find((k) => k.id === id) || null;
}

/**
 * Main entry: returns { answer, links, chips, sources }
 */
export function respond(message) {
  const text = message.trim();
  if (!text) return null;

  // 1) Smalltalk / direct intents
  for (const intent of intents) {
    if (intent.match.test(text)) {
      return {
        answer: intent.answer,
        links: intent.links || [],
        chips: intent.chips || [],
        sources: [],
        ...(intent.action ? { action: intent.action, links: [], chips: intent.chips || [] } : {}),
      };
    }
  }

  const tokens = tokenize(text);
  if (!tokens.length) {
    return {
      answer: 'Could you rephrase that? You can ask about INTER\u2019s businesses, services, projects, clients, contact details or office hours.',
      links: [], chips: ['What businesses does INTER have?', 'How can I contact INTER?'], sources: [],
    };
  }

  // 2) Keyword scoring over the knowledge base
  const scored = knowledge
    .map((entry) => ({ entry, score: scoreEntry(entry, tokens) }))
    .sort((a, b) => b.score - a.score);

  // Boost direct factual hits
  for (const rule of directRules) {
    if (rule.match.test(text)) {
      const hit = scored.find((s) => s.entry.id === rule.id);
      if (hit) hit.score += rule.boost;
    }
  }

  const best = scored[0];
  const second = scored[1];

  if (best && best.score >= 6) {
    return {
      answer: best.entry.answer,
      links: best.entry.links || [],
      chips: best.entry.chips || [],
      sources: [best.entry.title],
      related: second && second.score > 4 ? second.entry.title : null,
      contactFooter: /\b(contact|phone|email|call|reach)\b/i.test(text) ? CONTACT : null,
    };
  }

  // 3) Fallback
  return {
    answer:
      'I couldn\u2019t find that specific detail on the public site yet. I can help with INTER\u2019s businesses, services, projects, clients, certifications, contact details and office hours — or reach the team directly:',
    links: [{ label: 'Email info@inter.sa', href: `mailto:${CONTACT.emailInfo}` }, { label: 'Call ' + CONTACT.phone, href: CONTACT.phoneHref }],
    chips: ['What businesses does INTER have?', 'What services do you offer?', 'How can I contact INTER?'],
    sources: [],
  };
}
