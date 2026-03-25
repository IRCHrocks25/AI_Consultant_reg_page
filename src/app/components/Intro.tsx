import { useEffect, useRef, useState } from 'react';

const COPY =
  'With 10+ years of experience, KATEK AI becomes your embedded AI team—designing and implementing custom multi-agent systems that outperform standard tools and in-house capabilities.';

const STATS = [
  { num: '200', suffix: '+', lbl: 'Service Pros' },
  { num: '20', suffix: 'hrs', lbl: 'Reclaimed Weekly' },
  { num: '3', suffix: 'days', lbl: 'To Go Live' },
];

export function Intro() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollable = sectionRef.current.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      setProgress(Math.max(0, Math.min(1, scrolled / scrollable)));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const words = COPY.split(' ');
  const n = words.length;

  // Stats slide up and fade in after 68% scroll progress
  const statsP = Math.max(0, Math.min(1, (progress - 0.68) / 0.32));

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{ height: '280vh', position: 'relative', background: 'var(--bg)' }}
    >
      {/* Sticky viewport-height frame */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 clamp(24px, 6vw, 120px)',
          overflow: 'hidden',
        }}
      >
        {/* Ambient glow */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -55%)',
            width: '70vw',
            height: '60vh',
            background:
              'radial-gradient(ellipse at center, rgba(124,58,255,.055) 0%, transparent 68%)',
            pointerEvents: 'none',
          }}
        />

        {/* "About" pill badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 7,
            background: 'rgba(124,58,255,.10)',
            border: '1px solid rgba(124,58,255,.22)',
            borderRadius: 999,
            padding: '6px 16px',
            marginBottom: 52,
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Diamond / sparkle icon */}
          <svg
            width={10}
            height={10}
            viewBox="0 0 24 24"
            fill="none"
            style={{ flexShrink: 0 }}
          >
            <path
              d="M12 2l2.09 6.42L21 10l-6.91 1.58L12 18l-2.09-6.42L3 10l6.91-1.58z"
              fill="#c084fc"
            />
          </svg>
          <span
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 10,
              letterSpacing: '.16em',
              textTransform: 'uppercase',
              color: '#c084fc',
            }}
          >
            About
          </span>
        </div>

        {/* ── Scroll-animated headline ── */}
        <p
          style={{
            maxWidth: 900,
            textAlign: 'center',
            fontFamily: 'var(--display)',
            fontSize: 'clamp(24px, 3.8vw, 56px)',
            fontWeight: 500,
            lineHeight: 1.28,
            letterSpacing: '-0.025em',
            margin: '0 0 72px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {words.map((word, i) => {
            // Each word lights up sequentially as scroll progress passes its threshold
            const threshold = i / (n - 1);
            const smooth = 5 / n; // transition window width
            const wp = Math.max(0, Math.min(1, (progress - threshold + smooth) / smooth));
            const lit = wp > 0.45;

            // "KATEK" (index 5) and following "AI" (index 6) get gradient treatment
            const isAccent = i === 5 || i === 6;

            return (
              <span
                key={i}
                style={{
                  display: 'inline',
                  opacity: 0.1 + wp * 0.9,
                  ...(isAccent && lit
                    ? {
                        background: 'linear-gradient(135deg, #0F47FF 0%, #7c3aff 50%, #9333ea 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }
                    : {
                        color: 'var(--white)',
                      }),
                  transition: 'opacity 0.06s linear',
                }}
              >
                {word}{' '}
              </span>
            );
          })}
        </p>

        {/* ── Stats row ── */}
        <div
          style={{
            display: 'flex',
            gap: 'clamp(36px, 8vw, 96px)',
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingTop: 48,
            borderTop: '1px solid rgba(255,255,255,.07)',
            position: 'relative',
            zIndex: 1,
            opacity: statsP,
            transform: `translateY(${(1 - statsP) * 20}px)`,
          }}
        >
          {STATS.map((s) => (
            <div key={s.lbl} style={{ textAlign: 'center' }}>
              {/* Number */}
              <div
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 'clamp(36px, 4.5vw, 52px)',
                  fontWeight: 800,
                  lineHeight: 1,
                  marginBottom: 8,
                  letterSpacing: '-0.03em',
                  color: 'var(--white)',
                }}
              >
                {s.num}
                <em
                  style={{
                    fontStyle: 'normal',
                    background: 'linear-gradient(135deg, #0F47FF, #9333ea)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {s.suffix}
                </em>
              </div>
              {/* Label */}
              <div
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 10,
                  letterSpacing: '.16em',
                  textTransform: 'uppercase',
                  color: 'rgba(240,242,255,.35)',
                }}
              >
                {s.lbl}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
