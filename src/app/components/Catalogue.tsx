import ctaBgImg from 'figma:asset/945c23188949e0d0967967712fd684a3612a812d.png';

export function Catalogue() {
  return (
    <section
      id="catalogue"
      className="section-pad"
      style={{ padding: '120px 64px', background: 'var(--bg)', position: 'relative' }}
    >
      {/* Glow blobs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 800, height: 800, borderRadius: '50%', background: 'rgba(0,85,255,.06)', filter: 'blur(120px)' }} />
        <div style={{ position: 'absolute', bottom: -200, right: -100, width: 700, height: 700, borderRadius: '50%', background: 'rgba(124,58,255,.06)', filter: 'blur(120px)' }} />
      </div>

      <div style={{ maxWidth: 1240, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 72 }}>
          <div className="cat-badge">
            <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <rect x={3} y={3} width={7} height={7} rx={1} /><rect x={14} y={3} width={7} height={7} rx={1} />
              <rect x={3} y={14} width={7} height={7} rx={1} /><rect x={14} y={14} width={7} height={7} rx={1} />
            </svg>
            AI Capabilities Catalogue — Everything in one view
          </div>
          <h2 className="cat-h2">
            Everything we build &amp; deploy.<br />
            <em>One catalogue. Zero guesswork.</em>
          </h2>
          <p className="cat-sub">
            Below is the full picture of what we offer — not a random list. Your{' '}
            <strong style={{ color: 'var(--white)' }}>AI Business OS</strong> package covers the
            five core workflows above; everything else is available as add-ons, upgrades, or custom
            scope.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#pricing" className="btn-p">
              <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path d="M8 2v3M16 2v3M3 9h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
              </svg>
              See the $200 package
            </a>
            <a href="https://l.katalyst-crm.com/widget/bookings/discovery-call-ai-business-os" className="btn-outline">Book Advisory Call</a>
          </div>
        </div>

        {/* Context block */}
        <div className="cat-context reveal d1">
          <p className="ctx-label">How this works</p>
          <p className="ctx-title">The OS is the foundation. Everything else is what you build on top.</p>
          <div className="ctx-grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
            <div>
              <p className="ctx-block-head">The Core — AI Business OS ($200)</p>
              <p style={{ fontSize: 13, color: 'var(--white-35)', lineHeight: 1.7 }}>
                The five engines in <a href="#clear" style={{ color: '#6e9dff', textDecoration: 'none' }}>The CLEAR Method™</a> — email automation, content, lead capture, sales call prep, and follow-through — delivered as one connected system.
              </p>
            </div>
            <div>
              <p className="ctx-block-head">Everything else in this catalogue</p>
              <p style={{ fontSize: 13, color: 'var(--white-35)', lineHeight: 1.7 }}>
                Standalone products and services we also build — course platforms, SEO/GEO, onboarding flows, omnichannel support, document AI, CRM automation, and custom integrations.
              </p>
            </div>
          </div>
          <div style={{ height: 1, background: 'var(--border)', margin: '20px 0' }} />
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 12, color: 'var(--white-35)', lineHeight: 1.5 }}>
              <span className="ctx-leg-badge blue">View Demo</span>
              Try the live app or in-product experience directly
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 12, color: 'var(--white-35)', lineHeight: 1.5 }}>
              <span className="ctx-leg-badge pink">Watch Demo</span>
              Short Loom walkthrough — see it in action in under 3 minutes
            </div>
          </div>
        </div>

        {/* Guide block — 3-step diagram */}
        <div className="cat-guide reveal d2" style={{ marginTop: 64, marginBottom: 80 }}>
          <div className="guide-header">
            <p className="guide-label">Not sure where to start?</p>
            <h3 className="guide-h">
              You want less grind and a more capable business.<br />
              <em style={{ color: '#fff', fontStyle: 'italic' }}>You just don't know which lever to pull first.</em>
            </h3>
            <p className="guide-body">
              That's exactly what the call is for. Tell us where the friction is — inbox, leads, follow-up, content, calls, ops.
            </p>
          </div>

          {/* Steps diagram */}
          <div className="guide-steps">
            {[
              {
                num: '01',
                icon: (
                  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                    <path d="M9 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4" /><path d="M15 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4" /><line x1="12" y1="3" x2="12" y2="21" />
                  </svg>
                ),
                title: 'We map your workflow',
                desc: 'Who does what, where things slow down, what\'s costing you the most time.',
              },
              {
                num: '02',
                icon: (
                  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                ),
                title: 'We match you to the right systems',
                desc: 'So you\'re not guessing from a grid of tiles — just the tools that fit your actual workflow.',
              },
              {
                num: '03',
                icon: (
                  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
                  </svg>
                ),
                title: 'We tell you what moves the needle first',
                desc: 'Workload down, output up — without overbuilding or buying tools you don\'t need.',
              },
            ].map((step, i) => (
              <div key={step.num} className="guide-step-wrap">
                <div className="guide-step">
                  <div className="guide-step-icon">{step.icon}</div>
                  <div className="guide-step-num">{step.num}</div>
                  <h4 className="guide-step-title">{step.title}</h4>
                  <p className="guide-step-desc">{step.desc}</p>
                </div>
                {i < 2 && (
                  <div className="guide-step-arrow">
                    <svg width={28} height={10} viewBox="0 0 28 10" fill="none">
                      <path d="M0 5 Q14 5 22 5" stroke="url(#ag)" strokeWidth={1.5} strokeDasharray="3 3" />
                      <path d="M20 2l4 3-4 3" stroke="url(#ag)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                      <defs>
                        <linearGradient id="ag" x1="0" y1="0" x2="28" y2="0" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#0055ff" />
                          <stop offset="1" stopColor="#7c3aff" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', marginTop: 36, justifyContent: 'center' }}>
            <a href="#final" className="btn-p">
              <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Talk to us — get a clear next step
            </a>
            <a href="#final" className="btn-outline" style={{ padding: '12px 22px', fontSize: 12 }}>Book Advisory Call</a>
          </div>
        </div>

        {/* Featured demos divider */}
        <div id="catalogue-demos" style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }} className="reveal d1">
          <div className="cat-divider-line" />
          <div className="cat-divider-badge blue">
            <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}><polyline points="20 6 9 17 4 12" /></svg>
            Featured — try these first
          </div>
          <div className="cat-divider-line" />
        </div>
        <p className="cat-sec-note reveal d1">Flagship demos: course creation, search/GEO, website assistant, and client onboarding.</p>

        {/* Featured demos grid */}
        <div className="cat-demos-grid reveal d2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, marginBottom: 48 }}>
          {[
            {
              kicker: 'ct-kicker-blue', kickerText: 'Live Demo', iconClass: 'blue',
              icon: <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x={2} y={3} width={20} height={14} rx={2} /><path d="M8 21h8M12 17v4" /></svg>,
              title: 'AI Course Creator Platform',
              desc: 'Build comprehensive courses with AI-powered content generation. Create structured learning paths, interactive modules, and engaging educational experiences — all in one platform.',
              tags: ['Course Creation', 'AI Content Generation', 'Learning Paths', 'Student Management'],
              actions: [{ href: 'https://sop-master-production.up.railway.app/', text: 'View Demo', blue: false }],
            },
            {
              kicker: 'ct-kicker-pink', kickerText: 'Live Demo', iconClass: 'pink',
              icon: <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx={11} cy={11} r={8} /><path d="m21 21-4.35-4.35" /></svg>,
              title: 'SEO & Generative Engine Optimisation (GEO)',
              desc: 'Complete search visibility: traditional SEO plus AI-driven optimization for Google, ChatGPT, Gemini, Claude, and Perplexity.',
              tags: ['SEO', 'GEO', 'Keyword Optimization', 'Technical SEO', 'AI-First Content'],
              actions: [
                { href: 'https://www.katek-ai.com/demo/geo/', text: 'View Demo', blue: false },
                { href: 'https://gamma.app/docs/Generative-Engine-Optimisation-GEO-x2jmgx0dg9w8yfa?mode=doc', text: 'View Presentation', blue: true },
              ],
            },
            {
              kicker: 'ct-kicker-blue', kickerText: 'Live Demo', iconClass: 'blue',
              icon: <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
              title: 'Website AI Assistant',
              desc: 'Answers questions, guides users, captures leads, and hands off to humans. Watch the walkthrough or get it deployed on your site.',
              tags: ['Lead Capture', 'Handoff', 'CRM Actions', 'Permissions'],
              actions: [
                { href: 'https://www.loom.com/share/48c4d6742f984558a8c5e5227b17d970', text: 'Watch Demo', blue: false },
                { href: 'https://l.katalyst-crm.com/widget/bookings/discovery-call-ai-business-os', text: 'Book Discovery Call', blue: true },
              ],
            },
            {
              kicker: 'ct-kicker-pink', kickerText: 'Live Demo', iconClass: 'pink',
              icon: <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M22 10v6M2 10l10-5 10 5-10 5z" /></svg>,
              title: 'Onboarding Assistant',
              desc: 'Step-by-step guidance, completion tracking, and drop-off recovery. Interactive multi-step journey to create course blueprints and onboard clients automatically.',
              tags: ['Guided Flows', 'Tracking', 'CRM Updates', 'Course Creation'],
              actions: [{ href: 'https://katekai-production.up.railway.app/onboarding/', text: 'View Demo', blue: false }],
            },
          ].map((tile, i) => (
            <div key={i} className="cat-tile">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <div className={`ct-kicker ${tile.kicker}`}>{tile.kickerText}</div>
                <div className={`ct-icon ${tile.iconClass}`}>{tile.icon}</div>
              </div>
              <h3 className="ct-title">{tile.title}</h3>
              <p className="ct-desc">{tile.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 18 }} className="ct-tags">
                {tile.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 10, marginTop: 'auto', paddingTop: 4 }}>
                {tile.actions.map((a) => (
                  <a key={a.text} href={a.href} target={a.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className={`ct-link${a.blue ? ' ct-link-blue' : ''}`}>
                    {a.text} <ArrowSm />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Full capability list divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }} className="reveal">
          <div className="cat-divider-line" />
          <div className="cat-divider-badge grey">
            <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <rect x={3} y={3} width={7} height={7} rx={1} /><rect x={14} y={3} width={7} height={7} rx={1} />
              <rect x={3} y={14} width={7} height={7} rx={1} /><rect x={14} y={14} width={7} height={7} rx={1} />
            </svg>
            Full capability list
          </div>
          <div className="cat-divider-line" />
        </div>
        <p className="cat-sec-note reveal">Operations &amp; revenue systems we deploy every week — email, voice, omnichannel support, lead qualification, and backend automation.</p>

        {/* Email row */}
        <div className="reveal d1" style={{ marginBottom: 16 }}>
          <div className="cat-tile">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <div className="ct-kicker ct-kicker-pink">Live Demo</div>
              <div className="ct-icon pink">
                <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
            </div>
            <h3 className="ct-title">AI Email Automation — Inbox on Autopilot</h3>
            <p className="ct-desc">Reads incoming emails, detects intent + urgency, drafts replies, routes to the right team, updates CRM, and creates tasks and tickets automatically.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 18 }} className="ct-tags">
              {['Auto-Triage', 'Approval Mode', 'CRM Sync', 'Follow-Ups', 'Prioritization'].map((t) => <span key={t}>{t}</span>)}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 'auto' }}>
              <a href="https://www.katek-ai.com/demo/email-automation/" target="_blank" rel="noopener noreferrer" className="ct-link">View Demo <ArrowSm /></a>
              <a href="https://www.loom.com/share/1eb08e019cf94399be57e5b4df2311be" target="_blank" rel="noopener noreferrer" className="ct-link">Watch Demo <PlaySm /></a>
            </div>
          </div>
        </div>

        {/* 4-col row */}
        <div className="cat-cap-row-grid reveal d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 28 }}>
          {[
            {
              kicker: 'ct-kicker-blue', iconClass: 'blue', kickerText: 'Live Demo',
              icon: <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx={9} cy={7} r={4} /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
              title: 'Omnichannel AI Customer Support',
              desc: 'Web chat, Facebook, Instagram, WhatsApp — unified AI support with CRM actions.',
              tags: ['Web Chat', 'Social', 'WhatsApp', 'CRM'],
              actions: [{ href: 'https://www.katek-ai.com/demo/omnichannel-support/', text: 'View Demo' }, { href: 'https://www.loom.com/share/992ac898057a49fabe0859147507f635', text: 'Watch Demo' }],
            },
            {
              kicker: 'ct-kicker-pink', iconClass: 'pink', kickerText: '24/7 Phone',
              icon: <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.09h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.89 5.89l.96-.96a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7a2 2 0 0 1 1.72 2.04z" /></svg>,
              title: 'Voice AI Agent',
              desc: 'Answers calls, routes, books appointments, and logs everything into your CRM.',
              tags: ['Receptionist', 'Routing', 'Booking'],
              actions: [{ href: 'https://www.katek-ai.com/demo/voice-agent/', text: 'View Demo' }],
            },
            {
              kicker: 'ct-kicker-blue', iconClass: 'blue', kickerText: 'Live Demo',
              icon: <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>,
              title: 'AI Sales & Lead Qualification',
              desc: 'Qualifies leads, scores them, pushes to CRM, and books the right next step.',
              tags: ['Lead Scoring', 'CRM', 'Qualification'],
              actions: [{ href: 'https://www.katek-ai.com/demo/qualification/', text: 'View Demo' }, { href: 'https://www.loom.com/share/e5f11433299e4e9abf1ba039d53aef0d', text: 'Watch Demo' }],
            },
            {
              kicker: 'ct-kicker-blue', iconClass: 'blue', kickerText: 'Live Demo',
              icon: <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x={3} y={3} width={7} height={7} /><rect x={14} y={3} width={7} height={7} /><rect x={14} y={14} width={7} height={7} /><rect x={3} y={14} width={7} height={7} /></svg>,
              title: 'Backend Automation Engine',
              desc: 'Triggers workflows from chat, forms, emails, and CRM events. Smart routing + real-time updates.',
              tags: ['Triggers', 'Webhooks', 'Sync'],
              actions: [{ href: 'https://www.katek-ai.com/demo/automation-engine/', text: 'View Demo' }, { href: 'https://www.loom.com/share/553340b5472242d0a8b8bce59c255b00', text: 'Watch Demo' }],
            },
          ].map((tile, i) => (
            <div key={i} className="cat-tile">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <div className={`ct-kicker ${tile.kicker}`}>{tile.kickerText}</div>
                <div className={`ct-icon ${tile.iconClass}`}>{tile.icon}</div>
              </div>
              <h3 className="ct-title">{tile.title}</h3>
              <p className="ct-desc">{tile.desc}</p>
              <div className="ct-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 18 }}>
                {tile.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
              <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {tile.actions.map((a, j) => (
                  <a key={j} href={a.href} target={a.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="ct-link">
                    {a.text} <ArrowSm />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="cat-sec-note reveal d2" style={{ marginBottom: 20 }}>Specialised bots, document AI, integrations, analytics, and custom builds — the "long tail" of what we offer.</p>

        {/* Bento wall */}
        <div className="cat-bento-grid reveal d2" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, marginBottom: 48 }}>
          {/* Chatbots */}
          <div className="bento-group-label blue" style={{ gridColumn: '1 / -1' }}>
            <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
            Chatbots &amp; booking (text)
          </div>
          <div className="bento-card">
            <div className="bc-icon blue"><svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M3 21l1.9-5.7A8.5 8.5 0 1 1 20 12.5" /></svg></div>
            <div className="bc-title">WhatsApp Business Bot</div>
            <div className="bc-desc">Customer service, updates, and bookings via WhatsApp with full CRM sync.</div>
            <div className="bc-tags"><span>WhatsApp</span><span>Templates</span><span>Routing</span></div>
          </div>
          <div className="bento-card">
            <div className="bc-icon pink"><svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x={3} y={4} width={18} height={18} rx={2} /><path d="M16 2v4M8 2v4M3 10h18" /></svg></div>
            <div className="bc-title">AI Booking System</div>
            <div className="bc-desc">Conversational booking for reservations, consultations, and appointments with calendar sync.</div>
            <div className="bc-tags"><span>Reservations</span><span>Calendar Sync</span><span>Confirmation</span></div>
            <div className="bc-actions">
              <a href="https://www.katek-ai.com/demo/booking-bot/" target="_blank" rel="noopener noreferrer" className="bc-demo">Demo →</a>
              <a href="https://www.loom.com/share/8097868c7dc64a8e974bf9815418ac3a" target="_blank" rel="noopener noreferrer" className="bc-watch">Watch Demo</a>
            </div>
          </div>

          {/* Knowledge */}
          <div className="bento-group-label pink" style={{ gridColumn: '1 / -1' }}>
            <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
            Knowledge &amp; Training
          </div>
          <div className="bento-card">
            <div className="bc-icon blue"><svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg></div>
            <div className="bc-title">Internal SOP &amp; Policy Bot</div>
            <div className="bc-desc">Trained on your documentation. Secure Q&amp;A answers with access control for teams.</div>
            <div className="bc-tags"><span>Docs</span><span>Q&amp;A</span><span>Secure Access</span></div>
            <div className="bc-actions">
              <a href="https://www.katek-ai.com/demo/sop-bot/" target="_blank" rel="noopener noreferrer" className="bc-demo">Demo →</a>
              <a href="https://www.loom.com/share/f05fa42b9e77429490d207d2b09e771a" target="_blank" rel="noopener noreferrer" className="bc-watch">Watch Demo</a>
            </div>
          </div>

          {/* Documents */}
          <div className="bento-group-label blue" style={{ gridColumn: '1 / -1' }}>
            <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
            Documents
          </div>
          <div className="bento-card">
            <div className="bc-icon pink"><svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx={11} cy={11} r={8} /><path d="m21 21-4.35-4.35" /></svg></div>
            <div className="bc-title">Document Q&amp;A</div>
            <div className="bc-desc">Upload PDFs and ask questions. Instant answers with page citations powered by AI semantic search.</div>
            <div className="bc-tags"><span>PDFs</span><span>Search</span><span>Citations</span></div>
            <div className="bc-actions">
              <a href="https://document-qa-search.vercel.app/" target="_blank" rel="noopener noreferrer" className="bc-demo">Demo →</a>
              <a href="https://www.loom.com/share/a78d32aef2184a14b8ba18c8465dde25" target="_blank" rel="noopener noreferrer" className="bc-watch">Watch Demo</a>
            </div>
          </div>
          <div className="bento-card">
            <div className="bc-icon blue"><svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x={3} y={3} width={18} height={18} rx={2} /><path d="M3 9h18M9 21V9" /></svg></div>
            <div className="bc-title">Structured Data Extraction</div>
            <div className="bc-desc">Pull key fields from contracts and reports into CRM or spreadsheets automatically.</div>
            <div className="bc-tags"><span>Extraction</span><span>Validation</span><span>CRM Push</span></div>
            <div className="bc-actions">
              <a href="https://www.katek-ai.com/demo/extraction/" target="_blank" rel="noopener noreferrer" className="bc-demo">Demo →</a>
              <a href="https://www.loom.com/share/acc247c3ff6e477685c81f2630bd3b8b" target="_blank" rel="noopener noreferrer" className="bc-watch">Watch Demo</a>
            </div>
          </div>

          {/* Automation */}
          <div className="bento-group-label pink" style={{ gridColumn: '1 / -1' }}>
            <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}><circle cx={12} cy={12} r={3} /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" /></svg>
            Automation &amp; Integrations
          </div>
          <div className="bento-card">
            <div className="bc-icon blue"><svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg></div>
            <div className="bc-title">AI CRM &amp; Workflow Automation</div>
            <div className="bc-desc">Auto-tag contacts, route leads, create tickets, and trigger follow-ups in real time.</div>
            <div className="bc-tags"><span>Routing</span><span>Triggers</span><span>CRM</span></div>
            <div className="bc-actions">
              <a href="https://www.katek-ai.com/demo/crm-workflow/" target="_blank" rel="noopener noreferrer" className="bc-demo">Demo →</a>
              <a href="https://www.loom.com/share/b439f7ae717a461bb79cfabbd9d42f25" target="_blank" rel="noopener noreferrer" className="bc-watch">Watch Demo</a>
            </div>
          </div>
          <div className="bento-card">
            <div className="bc-icon pink"><svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M17 1l4 4-4 4" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><path d="M7 23l-4-4 4-4" /><path d="M21 13v2a4 4 0 0 1-4 4H3" /></svg></div>
            <div className="bc-title">Integration Services</div>
            <div className="bc-desc">Two-way sync across CRMs, email, booking, Slack, Discord, and any API.</div>
            <div className="bc-tags"><span>Webhooks</span><span>APIs</span><span>Sync</span></div>
            <div className="bc-actions">
              <a href="https://integration-services.vercel.app/" target="_blank" rel="noopener noreferrer" className="bc-demo">Demo →</a>
              <a href="https://www.loom.com/share/e24ba4ed0140406b96bb4006f20948b9" target="_blank" rel="noopener noreferrer" className="bc-watch">Watch Demo</a>
            </div>
          </div>

          {/* Analytics */}
          <div className="bento-group-label blue" style={{ gridColumn: '1 / -1' }}>
            <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
            Analytics &amp; Quality
          </div>
          <div className="bento-card">
            <div className="bc-icon pink"><svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M18 20V10M12 20V4M6 20v-6" /></svg></div>
            <div className="bc-title">AI Analytics &amp; Insights</div>
            <div className="bc-desc">Intent detection, performance reports, support bottlenecks, and conversion insights.</div>
            <div className="bc-tags"><span>Analytics</span><span>Optimization</span><span>Funnels</span></div>
            <div className="bc-actions"><a href="https://www.katek-ai.com/demo/analytics/" target="_blank" rel="noopener noreferrer" className="bc-demo">Demo →</a></div>
          </div>
          <div className="bento-card">
            <div className="bc-icon blue"><svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg></div>
            <div className="bc-title">Quality Control &amp; Monitoring</div>
            <div className="bc-desc">Detect unhappy customers, bad responses, and compliance issues — and alert humans instantly.</div>
            <div className="bc-tags"><span>Sentiment</span><span>QA</span><span>Compliance</span></div>
            <div className="bc-actions">
              <a href="https://www.katek-ai.com/demo/quality-control/" target="_blank" rel="noopener noreferrer" className="bc-demo">Demo →</a>
              <a href="https://www.loom.com/share/3cc30369c34c46a98b9f87d6699f6089" target="_blank" rel="noopener noreferrer" className="bc-watch">Watch Demo</a>
            </div>
          </div>
          <div className="bento-card">
            <div className="bc-icon pink"><svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx={12} cy={12} r={2} /><path d="M16.24 7.76l2.83-2.83a10 10 0 0 1 0 14.14l-2.83-2.83M7.76 16.24l-2.83 2.83a10 10 0 0 1 0-14.14l2.83 2.83" /></svg></div>
            <div className="bc-title">AI CRM &amp; Workflow (Pipeline)</div>
            <div className="bc-desc">One lead → full auto pipeline: contacts, tags, tasks, tickets, follow-ups.</div>
            <div className="bc-tags"><span>Pipeline</span><span>Workflow</span><span>CRM</span></div>
            <div className="bc-actions">
              <a href="https://www.katek-ai.com/demo/crm-workflow/" target="_blank" rel="noopener noreferrer" className="bc-demo">Demo →</a>
              <a href="https://www.loom.com/share/b439f7ae717a461bb79cfabbd9d42f25" target="_blank" rel="noopener noreferrer" className="bc-watch">Watch Demo</a>
            </div>
          </div>

          {/* Custom */}
          <div className="bento-group-label pink" style={{ gridColumn: '1 / -1' }}>
            <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
            Custom Builds
          </div>
          <div className="bento-card">
            <div className="bc-icon blue"><svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg></div>
            <div className="bc-title">Custom AI Systems</div>
            <div className="bc-desc">Tailored logic, flows, permissions, dashboards, and integrations — built specifically for your business.</div>
            <div className="bc-tags"><span>Custom Logic</span><span>Dashboards</span><span>Permissions</span></div>
            <div className="bc-actions">
              <a href="https://www.katek-ai.com/demo/custom-ai-systems/" target="_blank" rel="noopener noreferrer" className="bc-demo">Demo →</a>
              <a href="https://www.loom.com/share/78dbf4bdd14e440894df522bbe7eebae" target="_blank" rel="noopener noreferrer" className="bc-watch">Watch Demo</a>
            </div>
          </div>
          <div className="bento-card">
            <div className="bc-icon pink"><svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg></div>
            <div className="bc-title">AI Sales Lead Qualification</div>
            <div className="bc-desc">Automatically qualify leads, score them, and route to sales teams. AI asks qualifying questions and determines next actions.</div>
            <div className="bc-tags"><span>Lead Scoring</span><span>Qualification</span><span>CRM Routing</span></div>
            <div className="bc-actions">
              <a href="https://www.katek-ai.com/demo/qualification/" target="_blank" rel="noopener noreferrer" className="bc-demo">Demo →</a>
              <a href="https://www.loom.com/share/e5f11433299e4e9abf1ba039d53aef0d" target="_blank" rel="noopener noreferrer" className="bc-watch">Watch Demo</a>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="cat-cta-bar reveal">
          <img
            src={ctaBgImg}
            alt=""
            className="cat-cta-bar-bg"
            aria-hidden="true"
          />
          <div className="cat-cta-bar-overlay" />
          <div>
            <h4 className="cat-cta-title">Clear on what you need?</h4>
            <p className="cat-cta-sub">We'll spell out: what's in the $200 OS, what's an add-on, and what's custom — no overlap, no confusion.</p>
          </div>
          <a href="#pricing" className="btn-p">
            <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}><polygon points="5 3 19 12 5 21 5 3" /></svg>
            See package &amp; next step
          </a>
        </div>
      </div>
    </section>
  );
}

function ArrowSm() {
  return (
    <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function PlaySm() {
  return (
    <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}