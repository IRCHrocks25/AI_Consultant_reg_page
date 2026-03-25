export function How() {
  const nodes = [
    { letter: 'C', label: 'Communicate', desc: 'Inbox managed. Replies drafted. Done.' },
    { letter: 'L', label: 'Launch Content', desc: 'One idea → 5 posts, published everywhere.' },
    { letter: 'E', label: 'Engage Leads', desc: 'Every lead captured and scored instantly.' },
    { letter: 'A', label: 'Arrive Prepared', desc: 'Briefed before every call automatically.' },
  ];

  return (
    <section
      id="how"
      className="section-pad"
      style={{ padding: '120px 64px', background: 'var(--bg)' }}
    >
      <div
        className="how-inner-grid"
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 100,
          alignItems: 'center',
        }}
      >
        <div className="reveal">
          <p className="sec-label">How It Works Together</p>
          <h2 className="how-h2">
            This isn't five separate tools. It's{' '}
            <em>one compounding system.</em>
          </h2>
          <p className="how-body">
            Most automation tools work in silos. The AI Business OS is different — each engine
            feeds the next, creating a loop that builds momentum the longer it runs.
            <br /><br />
            A lead comes in through the Lead Engine. The Communication Engine nurtures them. A call
            is booked and the Sales Engine briefs you automatically. After the call, the
            Follow-Through Engine recaps, follows up, and updates your CRM. The Content Engine
            keeps driving new leads back in.
          </p>
          <div className="how-callout">
            Your business doesn't just work faster. It{' '}
            <span>compounds.</span>
          </div>
        </div>

        <div
          className="flow-wrap reveal d2"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}
        >
          {nodes.map((n) => (
            <div key={n.letter} className="f-node">
              <div className="f-letter">{n.letter}</div>
              <div className="f-label">{n.label}</div>
              <div className="f-desc">{n.desc}</div>
            </div>
          ))}
          <div className="f-node span2">
            <div className="f-letter" style={{ fontSize: 36, display: 'inline-block' }}>R</div>
            <div className="f-label" style={{ fontSize: 15 }}>Recap &amp; Retain</div>
            <div className="f-desc" style={{ maxWidth: 280, margin: '0 auto', fontSize: 12 }}>
              Call transcribed. Follow-up sent. CRM updated. Loop restarts.
            </div>
          </div>
          <div className="loop-note">↻ Continuous Loop — No Human Required</div>
        </div>
      </div>
    </section>
  );
}