const painPoints = [
  {
    icon: (
      <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: 'Leads slip through daily',
    desc: 'Inquiries land in your inbox, never get followed up, and walk to a competitor.',
  },
  {
    icon: (
      <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: 'Content falls off the cliff',
    desc: 'You post when you have time — which is almost never. Consistency dies.',
  },
  {
    icon: (
      <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Every call is unprepared',
    desc: 'Sales calls require manual digging through notes that could prep themselves.',
  },
  {
    icon: (
      <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="17 1 21 5 17 9" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><polyline points="7 23 3 19 7 15" /><path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    ),
    title: 'Follow-ups never happen',
    desc: 'After meetings, the momentum vanishes. Deals go cold. Relationships fade.',
  },
];

export function Problem() {
  return (
    <section
      id="problem"
      className="section-pad"
      style={{ padding: '120px 64px', background: 'var(--bg-1)' }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'start',
          maxWidth: 1240,
          margin: '0 auto',
        }}
      >
        {/* Left: copy */}
        <div className="reveal">
          <p className="sec-label">The Problem</p>
          <h2 className="prob-h2">
            You have apps.<br />You still have <em>chaos.</em>
          </h2>
          <p className="prob-lead">
            Most growing service businesses look automated on the surface. Inside, it's still
            you — forwarding emails, updating spreadsheets, chasing leads, and prepping for calls
            that could have prepped themselves.
          </p>
          <p className="prob-lead2">Sound familiar?</p>
          <div className="prob-quote">
            "The problem isn't effort. It's that your operation runs on human memory — the weakest
            infrastructure in any business."
          </div>
        </div>

        {/* Right: bento pain cards */}
        <div className="prob-bento reveal d2">
          {/* Wide stat card */}
          <div className="prob-card wide" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            <div>
              <div
                style={{
                  fontFamily: 'var(--display)',
                  fontSize: 56,
                  fontWeight: 800,
                  fontStyle: 'italic',
                  color: 'var(--pink)',
                  lineHeight: 1,
                  marginBottom: 6,
                  letterSpacing: '-.03em',
                }}
              >
                20+
              </div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(240,242,255,.35)' }}>
                hours lost per week
              </div>
            </div>
            <div style={{ width: 1, height: 56, background: 'var(--border)', flexShrink: 0 }} />
            <div>
              <div
                style={{
                  fontFamily: 'var(--display)',
                  fontSize: 56,
                  fontWeight: 800,
                  fontStyle: 'italic',
                  color: 'rgba(240,242,255,.6)',
                  lineHeight: 1,
                  marginBottom: 6,
                  letterSpacing: '-.03em',
                }}
              >
                $0
              </div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(240,242,255,.35)' }}>
                value from those hours
              </div>
            </div>
            <div
              style={{
                marginLeft: 'auto',
                fontFamily: 'var(--body)',
                fontSize: 13,
                color: 'rgba(240,242,255,.4)',
                lineHeight: 1.6,
                maxWidth: 160,
              }}
            >
              The average service pro loses a full workday every week to tasks AI can handle.
            </div>
          </div>

          {/* 4 pain cards */}
          {painPoints.map((p) => (
            <div key={p.title} className="prob-card">
              <div className="prob-card-icon" style={{ color: 'var(--pink)' }}>{p.icon}</div>
              <div className="prob-card-title">{p.title}</div>
              <div className="prob-card-desc">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}