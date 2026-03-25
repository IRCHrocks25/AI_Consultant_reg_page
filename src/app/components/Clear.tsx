import { useState } from 'react';

const ENGINES = [
  {
    letter: 'C',
    word: 'Communicate',
    num: '01',
    name: 'Communication Engine',
    desc: 'AI monitors your inbox, reads every email, detects intent, and drafts professional replies in your voice — ready for one-click approval. Your inbox stops being a bottleneck.',
    features: [
      'Gmail + Outlook integration',
      'Intent classification & priority sorting',
      'Brand-voice reply drafts',
      'One-click send or edit',
      'Saves 1–2 hours per day',
    ],
    metric: { label: 'Hrs Saved / Day', value: '1–2' },
    kpi: 'INBOX ZERO',
  },
  {
    letter: 'L',
    word: 'Launch',
    num: '02',
    name: 'Content Engine',
    desc: 'Drop an idea, a voice note, a text, a thought. The Content Engine turns it into 3–5 platform-ready posts, schedules them, and publishes across every channel automatically.',
    features: [
      'Voice or text idea input',
      'Instagram, Facebook, LinkedIn',
      '1 Idea → 5 posts auto-generated',
      'Schedule & publish automatically',
      'Performance analytics loop',
    ],
    metric: { label: 'Ideas to Posts', value: '1 → 5' },
    kpi: 'AUTO-PUBLISH',
  },
  {
    letter: 'E',
    word: 'Engage',
    num: '03',
    name: 'Lead Engine',
    desc: 'Every inquiry from every channel is captured, scored, and routed to your CRM instantly. A Voice AI answers calls 24/7. No lead goes cold — ever.',
    features: [
      'Multi-channel lead capture',
      'AI lead scoring & routing',
      '24/7 Voice AI answering calls',
      'WhatsApp + website chatbot',
      'Automated appointment booking',
    ],
    metric: { label: 'AI Uptime', value: '99.9%' },
    kpi: 'ZERO COLD LEADS',
  },
  {
    letter: 'A',
    word: 'Arrive',
    num: '04',
    name: 'Sales Engine',
    desc: 'The moment a call is booked, the Sales Engine pulls contact history, generates a full agenda, surfaces objections, and delivers a pre-call briefing before you open your calendar.',
    features: [
      'CRM history & context pull',
      'AI-generated call agenda',
      'Objection handling prompts',
      'Calendar & prep integration',
      'Every call fully prepared',
    ],
    metric: { label: 'Win Rate Lift', value: '+34%' },
    kpi: 'FULLY BRIEFED',
  },
  {
    letter: 'R',
    word: 'Recap',
    num: '05',
    name: 'Follow-Through Engine',
    desc: 'Every call is recorded, transcribed, and summarized by AI. Follow-up emails are drafted. CRM notes updated. Sequences triggered. Nothing falls through the cracks.',
    features: [
      'Call recording & transcription',
      'AI-generated meeting summary',
      'Follow-up email auto-drafted',
      'CRM notes & tasks updated',
      'Zero missed follow-ups',
    ],
    metric: { label: 'Follow-Ups', value: '100%' },
    kpi: 'LOOP CLOSED',
  },
];

export function Clear() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="clear"
      className="section-pad"
      style={{ padding: '120px 48px', background: 'var(--bg-1)', overflow: 'hidden' }}
    >
      <style>{`
        /* ── Keyframes ── */
        @keyframes blink2 {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.35; }
        }
        @keyframes activePulse {
          0%, 100% {
            filter: drop-shadow(0 0 14px rgba(15,71,255,.28))
                    drop-shadow(0 0 32px rgba(147,51,234,.14));
          }
          50% {
            filter: drop-shadow(0 0 22px rgba(15,71,255,.44))
                    drop-shadow(0 0 52px rgba(147,51,234,.22));
          }
        }

        /* ── Row ── */
        .clr-row {
          display: flex;
          gap: 10px;
          max-width: 1160px;
          margin: 0 auto;
          height: 480px;
          align-items: stretch;
        }

        /* ── Card base ── */
        .clr-card {
          position: relative;
          display: flex;
          border-radius: 18px;
          overflow: hidden;
          cursor: none;
          border: 1px solid rgba(15, 71, 255, 0.10);
          background: rgba(12, 8, 28, 0.55);
          backdrop-filter: blur(6px);
          transition:
            flex 360ms cubic-bezier(0.4, 0, 0.2, 1),
            opacity 280ms ease,
            border-color 280ms ease,
            background 280ms ease;
        }
        .clr-card.clr-inactive {
          flex: 0 0 82px;
          opacity: 0.48;
        }
        .clr-card.clr-inactive:hover {
          opacity: 0.72;
          border-color: rgba(15, 71, 255, 0.22);
        }
        .clr-card.clr-active {
          flex: 1;
          opacity: 1;
          border-color: rgba(124, 58, 255, 0.45);
          background: rgba(16, 10, 34, 0.82);
        }

        /* ── Left letter column ── */
        .clr-letter-col {
          flex-shrink: 0;
          width: 82px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 28px 0;
          position: relative;
          z-index: 2;
        }
        .clr-letter {
          font-family: var(--display);
          font-size: 54px;
          font-weight: 800;
          font-style: italic;
          line-height: 1;
          margin-bottom: 18px;
          transition: all 360ms cubic-bezier(0.4, 0, 0.2, 1);
          user-select: none;
        }
        .clr-letter.letter-dim {
          color: rgba(240, 242, 255, 0.18);
          -webkit-text-fill-color: rgba(240, 242, 255, 0.18);
        }
        .clr-letter.letter-glow {
          background: linear-gradient(145deg, #0F47FF 0%, #7c3aff 50%, #9333ea 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: activePulse 4s ease infinite;
        }
        .clr-word {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
          font-family: var(--mono);
          font-size: 9px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          transition: color 280ms ease;
        }
        .clr-word.word-dim   { color: rgba(240, 242, 255, 0.18); }
        .clr-word.word-lit   { color: rgba(240, 242, 255, 0.55); }
        .clr-active-dot {
          position: absolute;
          bottom: 20px;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--blue);
          animation: blink2 2s ease infinite;
        }

        /* ── Top accent line on active card ── */
        .clr-top-bar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, #0F47FF, #7c3aff, #9333ea);
          z-index: 3;
          opacity: 0;
          transition: opacity 300ms ease;
        }
        .clr-card.clr-active .clr-top-bar { opacity: 1; }

        /* ── Ambient glow ── */
        .clr-glow {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          background: radial-gradient(
            ellipse at 25% 70%,
            rgba(15, 71, 255, 0.08) 0%,
            rgba(124, 58, 255, 0.06) 45%,
            transparent 70%
          );
          opacity: 0;
          transition: opacity 360ms ease;
        }
        .clr-card.clr-active .clr-glow { opacity: 1; }

        /* ── Divider line between letter col and content ── */
        .clr-divider {
          flex-shrink: 0;
          width: 1px;
          align-self: stretch;
          background: rgba(15, 71, 255, 0.12);
          margin: 20px 0;
          transition: background 280ms ease;
          z-index: 2;
        }
        .clr-card.clr-active .clr-divider {
          background: rgba(124, 58, 255, 0.30);
        }

        /* ── Expanded content area ── */
        .clr-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 32px 36px 32px 24px;
          overflow: hidden;
          min-width: 0;
          opacity: 0;
          transform: translateY(12px);
          transition:
            opacity 260ms ease 60ms,
            transform 260ms ease 60ms;
          pointer-events: none;
          z-index: 2;
        }
        .clr-card.clr-active .clr-content {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        /* ── Mobile ── */
        @media (max-width: 840px) {
          .clr-row {
            flex-direction: column;
            height: auto;
          }
          .clr-card.clr-inactive {
            flex: 0 0 64px;
            height: 64px;
          }
          .clr-card.clr-active {
            flex: none;
            height: auto;
            min-height: 380px;
          }
          .clr-letter-col {
            flex-direction: row;
            width: 100%;
            height: 64px;
            justify-content: flex-start;
            padding: 0 20px;
            gap: 16px;
          }
          .clr-letter {
            font-size: 32px;
            margin-bottom: 0;
          }
          .clr-word {
            writing-mode: horizontal-tb;
            transform: none;
            font-size: 10px;
          }
          .clr-divider {
            display: none;
          }
          .clr-content {
            padding: 4px 20px 24px 20px;
          }
          .clr-active-dot {
            bottom: auto;
            right: 20px;
            left: auto;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      `}</style>

      {/* ── Header ── */}
      <div className="reveal" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 72px' }}>
        <p className="sec-label center">Our Proprietary Framework</p>
        <h2 className="clear-h2">
          The <em>CLEAR</em> Method™
        </h2>
        <p className="clear-sub">
          Five intelligent engines. One connected system. Built to run your entire service business on autopilot.
        </p>
      </div>

      {/* ── Expanding card row ── */}
      <div className="clr-row reveal d1">
        {ENGINES.map((e, i) => {
          const isActive = active === i;
          return (
            <div
              key={i}
              className={`clr-card ${isActive ? 'clr-active' : 'clr-inactive'}`}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
            >
              {/* Top accent bar */}
              <div className="clr-top-bar" />

              {/* Ambient glow */}
              <div className="clr-glow" />

              {/* ── Letter column ── */}
              <div className="clr-letter-col">
                {/* Big letter */}
                <div className={`clr-letter ${isActive ? 'letter-glow' : 'letter-dim'}`}>
                  {e.letter}
                </div>

                {/* Vertical word */}
                <div className={`clr-word ${isActive ? 'word-lit' : 'word-dim'}`}>
                  {e.word}
                </div>

                {/* Active indicator dot */}
                {isActive && <div className="clr-active-dot" />}
              </div>

              {/* Thin divider */}
              <div className="clr-divider" />

              {/* ── Expanded content ── */}
              <div className="clr-content">
                <div>
                  {/* Breadcrumb */}
                  <div style={{
                    fontFamily: 'var(--mono)', fontSize: 9,
                    letterSpacing: '0.2em', textTransform: 'uppercase',
                    color: 'var(--white-35)', marginBottom: 14,
                    display: 'flex', alignItems: 'center', gap: 10,
                  }}>
                    <span style={{
                      padding: '2px 8px',
                      border: '1px solid var(--border)',
                      borderRadius: 20,
                    }}>ENG.{e.num}</span>
                    <span style={{
                      display: 'flex', alignItems: 'center', gap: 5, color: '#4ade80',
                    }}>
                      <span style={{
                        width: 4, height: 4, borderRadius: '50%',
                        background: '#4ade80', display: 'inline-block',
                        animation: 'blink2 2s ease infinite',
                      }} />
                      ACTIVE
                    </span>
                  </div>

                  {/* Engine name */}
                  <h3 style={{
                    fontFamily: 'var(--display)',
                    fontSize: 'clamp(18px, 1.7vw, 24px)',
                    fontWeight: 700, color: 'var(--white)',
                    lineHeight: 1.2, letterSpacing: '-0.02em',
                    marginBottom: 14,
                  }}>
                    {e.name}
                  </h3>

                  {/* Divider */}
                  <div style={{
                    height: 1,
                    background: 'linear-gradient(90deg, rgba(15,71,255,0.35), rgba(147,51,234,0.15), transparent)',
                    marginBottom: 16,
                  }} />

                  {/* Description */}
                  <p style={{
                    fontFamily: 'var(--body)', fontSize: 14,
                    color: 'var(--white-60)', lineHeight: 1.68,
                    marginBottom: 22,
                  }}>
                    {e.desc}
                  </p>

                  {/* Feature list */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {e.features.map((feat, fi) => (
                      <div key={fi} style={{ display: 'flex', alignItems: 'flex-start', gap: 9 }}>
                        <span style={{
                          fontFamily: 'var(--mono)', fontSize: 10,
                          color: '#7c83ff', flexShrink: 0, marginTop: 2,
                        }}>▸</span>
                        <span style={{
                          fontFamily: 'var(--mono)', fontSize: 11,
                          color: 'var(--white-60)', letterSpacing: '0.02em', lineHeight: 1.45,
                        }}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom: metric + KPI badge */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  paddingTop: 20,
                  borderTop: '1px solid rgba(255,255,255,0.05)',
                  marginTop: 22,
                  flexWrap: 'wrap',
                }}>
                  {/* Metric block */}
                  <div style={{
                    padding: '10px 16px',
                    background: 'rgba(0, 0, 0, 0.35)',
                    border: '1px solid var(--border)',
                    borderRadius: 10,
                    flexShrink: 0,
                  }}>
                    <div style={{
                      fontFamily: 'var(--mono)', fontSize: 8,
                      letterSpacing: '0.15em', textTransform: 'uppercase',
                      color: 'var(--white-35)', marginBottom: 5,
                    }}>
                      {e.metric.label}
                    </div>
                    <div style={{
                      fontFamily: 'var(--display)', fontSize: 22,
                      fontWeight: 800, color: 'var(--white)', lineHeight: 1,
                      letterSpacing: '-0.02em',
                    }}>
                      {e.metric.value}
                    </div>
                  </div>

                  {/* KPI badge */}
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 7,
                    padding: '7px 14px',
                    background: 'rgba(15, 71, 255, 0.09)',
                    border: '1px solid rgba(124, 58, 255, 0.30)',
                    borderRadius: 999,
                  }}>
                    <span style={{
                      width: 4, height: 4, borderRadius: '50%',
                      background: '#7c3aff', display: 'inline-block',
                    }} />
                    <span style={{
                      fontFamily: 'var(--mono)', fontSize: 9,
                      letterSpacing: '0.16em', textTransform: 'uppercase',
                      color: '#a78bfa',
                    }}>
                      {e.kpi}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Footer word row ── */}
      <p className="clear-foot reveal" style={{ marginTop: 52 }}>
        <span>C</span> · Communicate &nbsp;·&nbsp;{' '}
        <span>L</span> · Launch Content &nbsp;·&nbsp;{' '}
        <span>E</span> · Engage Every Lead &nbsp;·&nbsp;{' '}
        <span>A</span> · Arrive Prepared &nbsp;·&nbsp;{' '}
        <span>R</span> · Recap &amp; Retain
      </p>
    </section>
  );
}