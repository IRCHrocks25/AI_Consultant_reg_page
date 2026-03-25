import pricingBg from 'figma:asset/bfcbfeb4d159bd485f3419bb32819eb8531db058.png';

const features = [
  'Complete setup of all 5 automation workflows',
  'AI configuration with ChatGPT / LLM integration',
  'CRM, email, calendar, social, voice, and chat — all connected',
  'Brand voice training across all AI outputs',
  'Testing, QA, and go-live support',
  'Onboarding documentation and 1:1 walkthrough',
  'Live in as little as 3 business days',
  'Works with tools you already use',
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="section-pad"
      style={{ 
        padding: '120px 64px', 
        background: 'var(--bg-1)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background image layer */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${pricingBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.5,
        }}
      />
      
      {/* Content layer */}
      <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div className="reveal">
          <h2 className="price-h2" style={{ whiteSpace: 'nowrap' }}>
            The full AI Business OS.<br />
            <em>One price. No surprises.</em>
          </h2>
          <p className="price-sub">Everything included — no hidden costs, no monthly platform fees from us.</p>
        </div>

        <div className="price-card reveal d1" style={{ textAlign: 'center' }}>
          <div className="price-badge">Complete Implementation Package</div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 3, marginBottom: 6, justifyContent: 'center' }}>
            <span className="price-sym">$</span>
            <span className="price-num">200</span>
          </div>
          <p className="price-type">One-time setup fee</p>
          <div style={{ height: 1, background: 'var(--border)', margin: '32px 0' }} />
          <div
            className="price-features-grid"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 13, marginBottom: 40 }}
          >
            {features.map((f) => (
              <div key={f} className="price-feat" style={{ maxWidth: 460, width: '100%', justifyContent: 'flex-start' }}>
                <span className="feat-chk">✓</span>
                {f}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#" className="btn-p">
              <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              Get Started for $200
            </a>
            <a href="#" className="btn-o">
              Book Advisory Call
            </a>
          </div>
          <p className="price-note">
            Questions?{' '}
            <a href="#">Book Advisory Call</a> — no pressure, no pitch.
          </p>
        </div>
      </div>
    </section>
  );
}