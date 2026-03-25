export function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 72px 80px',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--bg)',
      }}
    >
      {/* Grid background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 100% 80% at 60% 40%, black 10%, transparent 80%)',
          pointerEvents: 'none',
        }}
      />

      {/* Radial glow — right side only */}
      <div
        style={{
          position: 'absolute',
          top: '0%',
          right: '-5%',
          width: '55vw',
          height: '100vh',
          background:
            'radial-gradient(ellipse at 70% 30%, rgba(15,71,255,.10) 0%, rgba(147,51,234,.05) 50%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* 2-column grid — 60 / 40 split */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: 1240,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr',
          gap: 56,
          alignItems: 'center',
        }}
      >
        {/* ── LEFT: Copy ── */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>

          {/* Eyebrow badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(15,71,255,.08)',
              border: '1px solid rgba(15,71,255,.22)',
              borderRadius: 40,
              padding: '5px 14px 5px 6px',
              marginBottom: 28,
              opacity: 0,
              animation: 'fadeUp .6s ease .1s forwards',
            }}
          >
            <span
              style={{
                background: 'var(--pink)',
                color: '#fff',
                fontFamily: 'var(--mono)',
                fontSize: 9,
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                padding: '3px 8px',
                borderRadius: 20,
                fontWeight: 600,
              }}
            >
              NEW
            </span>
            <span
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 11,
                letterSpacing: '.08em',
                color: 'rgba(240,242,255,.65)',
                textTransform: 'uppercase',
              }}
            >
              AI Business OS — built for service pros
            </span>
          </div>

          {/* H1 — forced 3 lines */}
          <h1
            className="hero-h1"
            style={{ textAlign: 'left', margin: '0 0 22px' }}
          >
            Your $200K Brain<br />
            Shouldn't Be Doing<br />
            <em>$20/hr Work.</em>
          </h1>

          {/* Subtitle */}
          <p
            className="hero-sub"
            style={{ textAlign: 'left', margin: '0 0 38px', maxWidth: 460 }}
          >
            The same AI system helping founders, consultants, and service pros reclaim 20+ hours
            a week — without hiring or complexity.
          </p>

          {/* CTAs */}
          <div className="hero-ctas" style={{ justifyContent: 'flex-start', marginBottom: 0 }}>
            <a href="#clear" className="btn-p">
              <ArrowRight />
              See the 5 Workflows
            </a>
            <a
              href="#final"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '14px 28px',
                background: 'rgba(240,242,255,.06)',
                border: '1px solid rgba(240,242,255,.12)',
                borderRadius: 999,
                fontFamily: 'var(--display)',
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: '.07em',
                textTransform: 'uppercase' as const,
                color: 'var(--white-60)',
                textDecoration: 'none',
                cursor: 'none',
                transition: 'background .2s, color .2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(240,242,255,.1)';
                (e.currentTarget as HTMLAnchorElement).style.color = 'var(--white)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(240,242,255,.06)';
                (e.currentTarget as HTMLAnchorElement).style.color = 'var(--white-60)';
              }}
            >
              Book Advisory Call
              <ArrowRight size={11} />
            </a>
          </div>

          {/* Social proof */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginTop: 32,
              opacity: 0,
              animation: 'fadeUp .8s ease 1s forwards',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {[
                'https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGhlYWRzaG90JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczODY2NTUxfDA&ixlib=rb-4.1.0&q=80&w=80',
                'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzgwODE1MXww&ixlib=rb-4.1.0&q=80&w=80',
                'https://images.unsplash.com/photo-1617386124435-9eb3935b1e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRyZXByZW5ldXIlMjBzbWlsaW5nJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczODY2ODA4fDA&ixlib=rb-4.1.0&q=80&w=80',
              ].map((src, i) => (
                <div
                  key={i}
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: '50%',
                    border: '2px solid var(--bg)',
                    overflow: 'hidden',
                    marginLeft: i === 0 ? 0 : -10,
                    position: 'relative',
                    zIndex: 3 - i,
                    boxShadow: '0 0 0 1px rgba(15,71,255,.35)',
                  }}
                >
                  <img src={src} alt="founder" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', gap: 2, marginBottom: 3 }}>
                {[0,1,2,3,4].map(s => (
                  <svg key={s} width={11} height={11} viewBox="0 0 24 24" fill="#f59e0b" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.1em', color: 'rgba(240,242,255,.45)', whiteSpace: 'nowrap' }}>
                Trusted by <strong style={{ color: 'rgba(240,242,255,.75)', fontWeight: 600 }}>200+ founders</strong> &amp; service pros
              </span>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Compact metric card ── */}
        <div
          className="hero-card-wrap"
          style={{ position: 'relative', zIndex: 2, width: '100%', transform: 'scale(0.85)', transformOrigin: 'top center', marginTop: '24px' }}
        >
          {/* Outer glow */}
          <div
            style={{
              position: 'absolute',
              inset: '-20px',
              borderRadius: 24,
              background:
                'conic-gradient(from 200deg at 50% 50%, #0F47FF 0deg, #7c3aff 80deg, #9333ea 140deg, #7c3aff 180deg, #9333ea 220deg, #7c3aff 280deg, #0F47FF 360deg)',
              filter: 'blur(32px)',
              opacity: 0.147,
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />
          {/* Mid halo */}
          <div
            style={{
              position: 'absolute',
              inset: '-4px',
              borderRadius: 17,
              background:
                'conic-gradient(from 200deg at 50% 0%, #0F47FF 0deg, #7c3aff 60deg, #9333ea 120deg, #7c3aff 180deg, #9333ea 200deg, #7c3aff 260deg, #0F47FF 360deg)',
              filter: 'blur(8px)',
              opacity: 0.406,
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />
          {/* Gradient border */}
          <div
            style={{
              position: 'absolute',
              inset: '-1.5px',
              borderRadius: 14.5,
              background:
                'conic-gradient(from 200deg at 50% 0%, #0F47FF, #7c3aff, #9333ea, #7c3aff, #9333ea, #7c3aff, #0F47FF, #0F47FF)',
              zIndex: 1,
              pointerEvents: 'none',
            }}
          />

          {/* Card shell */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              background: 'var(--bg-2)',
              borderRadius: 13,
              overflow: 'hidden',
              boxShadow: '0 32px 80px rgba(0,0,0,.7), 0 0 0 1px rgba(255,255,255,.06)',
            }}
          >
            {/* Top accent line */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, var(--blue), var(--pink))', zIndex: 10 }} />

            {/* Browser chrome bar */}
            <div
              style={{
                background: 'var(--bg-3)',
                borderBottom: '1px solid rgba(255,255,255,.06)',
                padding: '10px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff5f57', flexShrink: 0 }} />
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#febc2e', flexShrink: 0 }} />
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#28c840', flexShrink: 0 }} />
              <div
                style={{
                  flex: 1,
                  margin: '0 10px',
                  background: 'rgba(255,255,255,.05)',
                  border: '1px solid rgba(255,255,255,.07)',
                  borderRadius: 4,
                  padding: '3px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 5,
                }}
              >
                <LockIcon />
                <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'rgba(240,242,255,.3)', letterSpacing: '.04em' }}>
                  app.aibusinessos.io
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', animation: 'blink 2s ease infinite', display: 'inline-block' }} />
                <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'rgba(240,242,255,.35)', letterSpacing: '.06em' }}>LIVE</span>
              </div>
            </div>

            {/* Status row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 18px',
                borderBottom: '1px solid rgba(255,255,255,.05)',
                background: 'rgba(15,71,255,.04)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--pink)', animation: 'blink 2s ease infinite', flexShrink: 0, display: 'inline-block' }} />
                <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(240,242,255,.55)', letterSpacing: '.06em' }}>
                  AI Engine Active
                </span>
              </div>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'rgba(240,242,255,.28)', letterSpacing: '.08em' }}>
                3 workflows running
              </span>
            </div>

            {/* Subtitle */}
            <div style={{
              padding: '14px 18px 10px',
              borderBottom: '1px solid rgba(255,255,255,.04)',
              background: 'rgba(15,71,255,.02)',
            }}>
              <p style={{
                fontFamily: 'var(--body)',
                fontSize: 12,
                color: 'rgba(240,242,255,.52)',
                lineHeight: 1.6,
                margin: 0,
                letterSpacing: '.005em',
              }}>
                From strategy to scale, KATEK AI engineers high-performance AI systems that deliver tangible business outcomes.
              </p>
            </div>

            {/* Metric rows */}
            <div style={{ padding: '6px 0' }}>
              {[
                { label: 'Leads captured today',    value: '14',      badge: '+3 new',    bc: '#4ade80', bb: 'rgba(74,222,128,.12)',  bbd: 'rgba(74,222,128,.22)' },
                { label: 'Emails auto-drafted',      value: '28',      badge: 'ACTIVE',    bc: 'var(--pink)', bb: 'rgba(15,71,255,.12)', bbd: 'rgba(15,71,255,.25)' },
                { label: 'Content posts scheduled',  value: '7',       badge: 'this week', bc: '#c084fc', bb: 'rgba(147,51,234,.10)',  bbd: 'rgba(147,51,234,.20)' },
                { label: 'Follow-ups sent',           value: '11',      badge: 'auto',      bc: 'rgba(240,242,255,.4)', bb: 'rgba(240,242,255,.05)', bbd: 'rgba(240,242,255,.1)' },
              ].map((row, i, arr) => (
                <div
                  key={row.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '11px 18px',
                    borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,.042)' : 'none',
                    gap: 10,
                  }}
                >
                  <span style={{ fontFamily: 'var(--body)', fontSize: 12, color: 'rgba(240,242,255,.48)' }}>
                    {row.label}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                    <span style={{ fontFamily: 'var(--display)', fontSize: 15, fontWeight: 700, color: 'var(--white)', letterSpacing: '-.02em' }}>
                      {row.value}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--mono)',
                        fontSize: 8,
                        letterSpacing: '.08em',
                        textTransform: 'uppercase',
                        color: row.bc,
                        background: row.bb,
                        border: `1px solid ${row.bbd}`,
                        borderRadius: 20,
                        padding: '2px 7px',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {row.badge}
                    </span>
                  </div>
                </div>
              ))}

              {/* Hero stat — Hours reclaimed */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 18px 16px',
                  borderTop: '1px solid rgba(255,255,255,.06)',
                  gap: 10,
                  background: 'rgba(15,71,255,.03)',
                }}
              >
                <span style={{ fontFamily: 'var(--body)', fontSize: 12, color: 'rgba(240,242,255,.48)' }}>
                  Hours reclaimed
                </span>
                <span
                  style={{
                    fontFamily: 'var(--display)',
                    fontSize: 24,
                    fontWeight: 800,
                    fontStyle: 'italic',
                    color: 'var(--pink)',
                    letterSpacing: '-.03em',
                  }}
                >
                  22.5 hrs
                </span>
              </div>
            </div>

            {/* Footer — system live */}
            <div
              style={{
                borderTop: '1px solid rgba(255,255,255,.06)',
                padding: '10px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: 7,
                background: 'rgba(74,222,128,.03)',
              }}
            >
              <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '.12em', color: 'rgba(74,222,128,.7)', textTransform: 'uppercase' }}>
                System live — 3 days after setup
              </span>
            </div>
          </div>

          {/* Floating pill — top right */}
          <div
            style={{
              position: 'absolute',
              top: -14,
              right: -16,
              background: 'var(--bg-3)',
              border: '1px solid rgba(255,255,255,.12)',
              borderRadius: 30,
              padding: '7px 12px',
              display: 'flex',
              alignItems: 'center',
              gap: 7,
              boxShadow: '0 10px 32px rgba(0,0,0,.55)',
              fontFamily: 'var(--body)',
              fontSize: 10,
              color: 'rgba(240,242,255,.65)',
              whiteSpace: 'nowrap',
              zIndex: 10,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', animation: 'blink 2s ease infinite', display: 'inline-block' }} />
            AI running 24/7
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowRight({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width={8} height={8} viewBox="0 0 24 24" fill="none" stroke="rgba(240,242,255,.28)" strokeWidth={2.5}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}