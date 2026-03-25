const testimonials = [
  {
    initial: 'S',
    name: 'Sarah M.',
    role: 'Realtor · Dallas, TX',
    text: "I went from spending 3 hours a day on email to 20 minutes. The AI drafts in my voice so well that clients don't even know. My pipeline hasn't been this clean in five years.",
  },
  {
    initial: 'D',
    name: 'David R.',
    role: 'Business Coach · New York',
    text: "As a business coach, follow-ups were always my weak spot. Now every call gets a recap, a follow-up, and a CRM update — automatically. I've closed 40% more deals this quarter.",
    delay: 'd1',
  },
  {
    initial: 'A',
    name: 'Amanda K.',
    role: 'Agency Owner · Chicago',
    text: "We set this up in a week and within a month my team reclaimed 80+ hours. The content engine alone is worth 10x the price. This is the only system I recommend to every client.",
    delay: 'd2',
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-pad"
      style={{ padding: '120px 64px', background: 'var(--bg)' }}
    >
      <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
        <p className="sec-label center">Social Proof</p>
        <h2 className="test-h2">What service pros <em>are saying.</em></h2>
      </div>
      <div
        className="test-grid-3col"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 18,
          maxWidth: 1240,
          margin: '0 auto',
        }}
      >
        {testimonials.map((t) => (
          <div key={t.name} className={`test-card reveal${t.delay ? ' ' + t.delay : ''}`}>
            <div className="test-stars">★★★★★</div>
            <div className="test-qmark">"</div>
            <p className="test-text">{t.text}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div className="test-av">{t.initial}</div>
              <div>
                <div className="test-name">{t.name}</div>
                <div className="test-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}