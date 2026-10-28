// "Saqr" — the INTER falcon mascot, drawn in the site's teal + copper palette.
// mood: 'idle' | 'wave' | 'think'
// gaze: { x, y } in [-1, 1] — pupils drift toward the cursor. 0 = centred.

export function Falcon({ size = 120, mood = 'idle', gaze = { x: 0, y: 0 }, className = '' }) {
  const gx = Math.max(-1, Math.min(1, gaze.x)) * 2.6;
  const gy = Math.max(-1, Math.min(1, gaze.y)) * 2.2;

  return (
    <svg
      className={`falcon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 120 120"
      role="img"
      aria-label={mood === 'wave' ? 'Saqr the falcon waving' : 'Saqr the INTER falcon'}
    >
      <defs>
        <linearGradient id="falcon-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a6f6e" />
          <stop offset="100%" stopColor="#0a2e2e" />
        </linearGradient>
        <linearGradient id="falcon-hat" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e2a862" />
          <stop offset="100%" stopColor="#c07a2c" />
        </linearGradient>
      </defs>

      {/* ground shadow (hidden when floating in UI panels) */}
      {!className.includes('falcon--flat') && (
        <ellipse cx="60" cy="106" rx="24" ry="4.5" fill="rgba(0,0,0,0.14)" />
      )}

      {/* feet */}
      <path d="M50 94 v7 M70 94 v7" stroke="#d18a45" strokeWidth="3.4" strokeLinecap="round" />

      {/* left wing (static) */}
      <path d="M30 62 Q21 80 36 88 Q41 73 36 61 Z" fill="#14565b" />

      {/* right wing — waves when greeting */}
      <g className={`falcon-wing ${mood === 'wave' ? 'is-waving' : ''}`}>
        <path d="M90 62 Q99 80 84 88 Q79 73 84 61 Z" fill="#14565b" />
      </g>

      {/* body */}
      <circle cx="60" cy="60" r="33" fill="url(#falcon-body)" />
      {/* belly */}
      <ellipse cx="60" cy="68" rx="19" ry="13.5" fill="#f4ead8" opacity="0.95" />

      {/* brows (thinking) */}
      {mood === 'think' && (
        <path d="M42 44 h10 M68 44 h10" stroke="#0a2e2e" strokeWidth="2.4" strokeLinecap="round" />
      )}

      {/* eyes — blink via CSS, pupils track the gaze */}
      <g className="falcon-eyes">
        <ellipse cx="48" cy="53" rx="6.6" ry="7.2" fill="#fff" />
        <ellipse cx="72" cy="53" rx="6.6" ry="7.2" fill="#fff" />
        <circle cx={48 + gx} cy={53 + gy} r="3.1" fill="#06201f" />
        <circle cx={72 + gx} cy={53 + gy} r="3.1" fill="#06201f" />
        <circle cx={49.4 + gx} cy={51.2 + gy} r="1" fill="#fff" />
        <circle cx={73.4 + gx} cy={51.2 + gy} r="1" fill="#fff" />
      </g>

      {/* beak */}
      <path d="M60 57 L54.5 62.5 Q60 68.5 65.5 62.5 Z" fill="#d18a45" />
      <path d="M60 63 v2.4" stroke="#a95f1d" strokeWidth="1.6" strokeLinecap="round" />

      {/* hard hat */}
      <path d="M40.5 38.5 Q60 19 79.5 38.5 Z" fill="url(#falcon-hat)" />
      <path d="M60 23.5 v15" stroke="#f4ead8" strokeWidth="2.4" strokeLinecap="round" opacity="0.65" />
      <rect x="36" y="37" width="48" height="5.5" rx="2.75" fill="#b06a24" />
    </svg>
  );
}
