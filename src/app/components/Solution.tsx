import bgImage from 'figma:asset/17bb3049ef70e77d69e73c1768ed7b653ccaee13.png';

export function Solution() {
  const checks = [
    'No more missed leads — every inquiry is captured, scored, and routed instantly',
    'No more inbox overwhelm — AI reads, classifies, and drafts replies in your voice',
    'No more content gaps — one idea becomes posts across every platform',
    'No more unprepared calls — AI briefs you before every appointment',
    'No more forgotten follow-ups — every call recap is automated and CRM-synced',
    'Runs 24/7 without lifting a finger',
  ];

  return (
    <section
      id="solution"
      className="section-pad"
      style={{
        padding: '120px 64px',
        background: `var(--bg)`,
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div style={{ maxWidth: 760, marginBottom: 64 }} className="reveal">
          <p className="sec-label">Introducing the AI Business OS</p>
          <h2 className="sol-h2">
            One system. Five engines.<br />
            <em>The whole business runs itself.</em>
          </h2>
          <p className="sol-sub">
            Built in N8N and powered by AI — the AI Business OS connects your CRM, calendar,
            email, social media, and phone into one intelligent operation. It runs while you sleep,
            while you're in meetings, and while you're closing deals.
          </p>
        </div>

        <div
          className="sol-checks-grid reveal d2"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}
        >
          {checks.map((c, i) => (
            <div key={i} className="sol-check">
              <span className="chk">✓</span>
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}