// INTER mascot chatbot — "Saqr" the falcon.
// Brain: public inter.sa knowledge base (see src/chatbot/knowledge.js).
// Extras: mascot launcher + guided quote-request flow + theme toggle action.
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { respond, getFAQs } from './engine.js';
import { CONTACT } from './knowledge.js';
import { Falcon } from '../components/Mascot.jsx';
import { toggleTheme } from '../theme.js';

const EASE = [0.22, 1, 0.36, 1];

const WELCOME = {
  from: 'bot',
  text:
    'Marhaba! 👋 I\u2019m **Saqr**, the INTER falcon.\nAsk me about our businesses, services, projects or contact details — or tap a suggestion below. I can also take a **quote request** for the team.',
  chips: ['What businesses does INTER have?', 'What services do you offer?', 'Request a quote'],
};

const QUOTE_FLOW = {
  intro: 'Great — I\u2019ll take a few details and pass them to the right INTER business. You can type **cancel** anytime.',
  steps: [
    { key: 'name', question: 'First — what should we call you?' },
    { key: 'topic', question: 'What do you need help with? (construction, fire & safety, equipment rental, supply & shipping, exhibitions, training…)' },
    { key: 'reach', question: 'How can the team reach you? (email or phone)' },
  ],
  done: (d) =>
    `Shukran, **${d.name}**! ✅\nRequest saved: ${d.topic}.\nThe team will contact you at ${d.reach} during office hours (${CONTACT.hours}).`,
};

function renderText(text) {
  // Splits markdown-style **bold** segments into <b> elements.
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith('**') && p.endsWith('**')) return <b key={i}>{p.slice(2, -2)}</b>;
    return <span key={i}>{p}</span>;
  });
}

function Bubble({ msg, gaze, mood }) {
  const bot = msg.from === 'bot';
  const time = new Date(msg.t || Date.now()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  return (
    <motion.div
      className={bot ? 'msg bot' : 'msg user'}
      initial={{ opacity: 0, y: 14, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.35, ease: EASE }}
    >
      {bot && (
        <span className="msg-avatar is-mascot" aria-hidden="true">
          <Falcon size={30} gaze={gaze} mood={mood} className="falcon--flat" />
        </span>
      )}
      <div className="msg-body">
        <div className="msg-text">
          {renderText(msg.text)}
          {msg.links?.length > 0 && (
            <div className="msg-links">
              {msg.links.map((l) => (
                <a key={l.href} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  {l.label} <b aria-hidden="true">↗</b>
                </a>
              ))}
            </div>
          )}
        </div>
        {msg.chips?.length > 0 && (
          <div className="msg-chips">
            {msg.chips.map((c) => (
              <button key={c} onClick={() => msg.onAsk?.(c)}>{c}</button>
            ))}
          </div>
        )}
        <small className="msg-time">{time}</small>
      </div>
    </motion.div>
  );
}

const ts = () => Date.now();

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([{ ...WELCOME, t: ts() }]);
  const [input, setInput] = useState('');
  const [nudge, setNudge] = useState(false);
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const [flow, setFlow] = useState(null); // active quote-flow step key
  const [gaze, setGaze] = useState({ x: 0, y: 0 });
  const isStarted = useRef(false);
  const answers = useRef({});
  const reduce = useReducedMotion();
  const listRef = useRef(null);
  const inputRef = useRef(null);
  const timers = useRef([]);

  // Nudge bubble appears once, shortly after load
  useEffect(() => {
    if (reduce) return;
    const t1 = setTimeout(() => setNudge(true), 7000);
    const t2 = setTimeout(() => setNudge(false), 17000);
    timers.current.push(t1, t2);
    return () => timers.current.forEach(clearTimeout);
  }, [reduce]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: reduce ? 'auto' : 'smooth' });
  }, [messages, typing, flow, reduce]);

  // Esc closes the panel
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  // The falcon's eyes follow the cursor while the chat is open
  useEffect(() => {
    if (!open || reduce) return;
    const onMove = (e) => {
      const el = listRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      setGaze({
        x: ((e.clientX - r.left) / r.width - 0.5) * 2,
        y: ((e.clientY - r.top) / r.height - 0.5) * 2,
      });
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [open, reduce]);

  // First open: mark started (welcome bubble already there)
  useEffect(() => {
    if (open && !isStarted.current) {
      isStarted.current = true;
      const t = setTimeout(() => inputRef.current?.focus(), 400);
      timers.current.push(t);
    }
  }, [open]);

  function finish(reply) {
    const extra = reply.action === 'toggle-theme' ? toggleTheme() : null;
    setTyping(false);
    setMessages((m) => [
      ...m,
      {
        from: 'bot',
        text: reply.answer,
        links: extra ? [] : reply.links || [],
        chips: reply.chips || [],
        t: ts(),
        onAsk: ask,
      },
    ]);
  }

  function ask(question) {
    if (!question.trim() || typing) return;
    setMessages((m) => [...m, { from: 'user', text: question, t: ts() }]);
    setInput('');
    setTyping(true);

    // Guided quote-request flow
    if (flow) {
      const step = flow;
      if (/^cancel$/i.test(question.trim())) {
        setFlow(null);
        answers.current = {};
        const nudge = { answer: 'No problem — quote request cancelled. What else can I do for you?', chips: ['What services do you offer?', 'How can I contact INTER?'] };
        setTimeout(() => finish(nudge), reduce ? 100 : 700);
        return;
      }
      answers.current[step] = question.trim();
      const idx = QUOTE_FLOW.steps.findIndex((s) => s.key === step);
      const next = QUOTE_FLOW.steps[idx + 1];
      setTimeout(() => {
        setFlow(next ? next.key : null);
        finish({
          answer: next ? next.question : QUOTE_FLOW.done(answers.current),
          chips: next ? [] : ['What businesses does INTER have?', 'How can I contact INTER?'],
        });
      }, reduce ? 100 : 700);
      return;
    }

    // Flow trigger
    if (!typing && /quote|rfq|tender|proposal/i.test(question)) {
      answers.current = {};
      const t = setTimeout(() => {
        setFlow(QUOTE_FLOW.steps[0].key);
        finish({ answer: QUOTE_FLOW.intro });
        const t2 = setTimeout(() => finish({ answer: QUOTE_FLOW.steps[0].question }), reduce ? 100 : 800);
        timers.current.push(t2);
      }, reduce ? 100 : 600);
      timers.current.push(t);
      return;
    }

    const reply = respond(question);
    const botReply = reply
      ? reply
      : { ...WELCOME, text: WELCOME.text };
    setTimeout(() => finish(botReply), reduce ? 100 : 700 + Math.min((botReply.answer || botReply.text || '').length * 2, 900));
  }

  function openFaq(q) {
    setOpen(true);
    setTimeout(() => ask(q), 350);
  }

  function reset() {
    setFlow(null);
    answers.current = {};
    setMessages([{ ...WELCOME, t: ts() }]);
  }

  const faqItems = getFAQs().slice(0, 5);
  const mascotMood = typing ? 'think' : 'idle';

  return (
    <>
      {/* Floating teaser */}
      <AnimatePresence>
        {nudge && !open && (
          <motion.div
            className="chat-nudge chat-nudge--mascot"
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            transition={{ duration: 0.4, ease: EASE }}
            role="status"
          >
            <span className="chat-nudge-falcon"><Falcon size={46} mood="wave" className="falcon--flat" /></span>
            <span className="chat-nudge-copy"><strong>Saqr</strong>Need help exploring INTER? Ask me anything.</span>
            <button className="chat-nudge-close" onClick={() => setNudge(false)} aria-label="Dismiss greeting">×</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating launcher */}
      <motion.button
        className="chat-launcher chat-launcher--mascot"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat assistant' : 'Open chat assistant'}
        whileTap={{ scale: 0.92 }}
        whileHover={reduce ? undefined : { y: -3 }}
        animate={nudge && !open && !reduce ? { y: [0, -4, 0] } : { y: 0 }}
        transition={nudge && !open && !reduce ? { duration: 1.6, repeat: Infinity, ease: 'easeInOut' } : { type: 'spring', stiffness: 260, damping: 22 }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={open ? 'x' : 'falcon'}
            initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 30, scale: 0.7 }}
            transition={{ duration: 0.22 }}
          >
            {open ? '×' : <Falcon size={54} mood="wave" className="falcon--flat" />}
          </motion.span>
        </AnimatePresence>
        <span className="chat-dot" aria-hidden="true" />
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.section
            className="chat-panel"
            aria-label="INTER assistant chat"
            initial={{ opacity: 0, y: 28, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 28, scale: 0.94 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <header className="chat-head">
              <div className="chat-brand chat-brand--mascot">
                <span className="msg-avatar is-mascot chat-head-avatar" aria-hidden="true">
                  <Falcon size={38} gaze={gaze} mood={mascotMood} className="falcon--flat" />
                </span>
                <div>
                  <strong>Saqr · INTER Assistant</strong>
                  <small>Trained on inter.sa · Online</small>
                </div>
              </div>
              <div className="chat-head-actions">
                <button onClick={reset} aria-label="Reset conversation" title="Reset conversation">⟲</button>
                <button onClick={() => setOpen(false)} aria-label="Close chat" title="Close chat">×</button>
              </div>
            </header>

            <div className="chat-list" ref={listRef} aria-live="polite">
              <AnimatePresence initial={false}>
                {messages.map((m, i) => (
                  <Bubble key={i} msg={{ ...m, onAsk: ask }} gaze={gaze} mood={mascotMood} />
                ))}
              </AnimatePresence>
              {typing && (
                <motion.div className="msg bot" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <span className="msg-avatar is-mascot" aria-hidden="true">
                    <Falcon size={30} mood="think" className="falcon--flat" />
                  </span>
                  <div className="msg-text typing" aria-label="Assistant is typing">
                    <i /><i /><i />
                  </div>
                </motion.div>
              )}
            </div>

            <div className="chat-faqs" aria-label="Frequently asked questions">
              {flow ? (
                <button className="faq-more" onClick={() => ask('cancel')}>Cancel quote request</button>
              ) : (
                <>
                  {faqItems.map((q) => (
                    <button key={q} onClick={() => openFaq(q)}>{q}</button>
                  ))}
                  {showAllFaqs ? (
                    getFAQs().slice(5).map((q) => (
                      <button key={q} onClick={() => openFaq(q)}>{q}</button>
                    ))
                  ) : (
                    <button className="faq-more" onClick={() => setShowAllFaqs(true)}>
                      More FAQs <i aria-hidden="true">▾</i>
                    </button>
                  )}
                </>
              )}
            </div>

            <form
              className="chat-input"
              onSubmit={(e) => {
                e.preventDefault();
                ask(input);
              }}
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={flow ? 'Type your answer… (or cancel)' : 'Ask Saqr about INTER…'}
                aria-label="Type your question"
              />
              <button type="submit" aria-label="Send message" disabled={!input.trim() || typing}>➤</button>
            </form>
            <footer className="chat-foot">
              Answers based on the public pages of inter.sa · <a href={CONTACT.arabic} lang="ar" dir="rtl">العربية</a>
            </footer>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}
