import finalBg from 'figma:asset/e06ca00d24cb36ff0de59bded28909ccfc12a616.png';

export function Final() {
  return (
    <section
      id="final"
      className="section-pad"
      style={{
        padding: '140px 64px',
        background: 'var(--bg)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Deep-space background - no overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${finalBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <p className="final-eyebrow">
          <span />
          The Decision Point
          <span />
        </p>
        <h2 className="final-h2 reveal" style={{ color: '#fff', background: 'none', WebkitTextFillColor: 'unset' }}>
          Your competitors are already automating.<br />
          The question is whether you are.
        </h2>
        <p className="final-sub reveal d1">
          The AI Business OS gives any service business five intelligent workflows that run
          together, handle the work, and keep the pipeline moving without adding headcount or hours
          to your day.
        </p>
        <p
          className="reveal d2"
          style={{
            fontSize: 15,
            color: 'var(--white-35)',
            maxWidth: 480,
            margin: '0 auto 36px',
            position: 'relative',
            zIndex: 1,
            fontFamily: 'var(--body)',
            lineHeight: 1.7,
          }}
        >
          For $200, you get a fully implemented system that works while you sleep. Most businesses
          recoup that in the first week alone.
        </p>
        <div
          className="reveal d3"
          style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 56, position: 'relative', zIndex: 1 }}
        >
          <a href="#clear" className="btn-p" style={{ fontSize: 14, padding: '16px 34px' }}>
            <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            See the 5 Workflows
          </a>
          <a href="#" className="btn-outline" style={{ fontSize: 14, padding: '16px 34px' }}>
            Book Advisory Call
          </a>
        </div>
      </div>
    </section>
  );
}