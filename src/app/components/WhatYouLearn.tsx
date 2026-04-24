const agents = [
  {
    number: "01",
    title: "Lead Generation",
    body: "Build an agent that identifies your ideal prospects, initiates personalized outreach, nurtures relationships through multi-touch sequences, pre-qualifies leads against your criteria, and books qualified calls directly on your calendar. This agent replaces the work of a dedicated SDR — running 24/7 without a salary, without management, without dropping the ball.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Content Creation",
    body: "Deploy an agent trained on your voice, your frameworks, and your expertise that produces a full content pipeline — social posts, articles, video scripts, newsletters, podcasts — in your authentic tone. Not generic AI slop. Content that sounds like you wrote it, because the agent learned how you think.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Product Development & Validation",
    body: "Build an agent that researches market opportunities, validates business ideas against real data, identifies gaps in your competitive landscape, and helps you architect new offers — digital courses, services, consulting packages, micro-apps — before you invest a dollar or a month of your life into something the market doesn't want.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Personalized Marketing at Scale",
    body: "Deploy a marketing agent that runs personalized campaigns across your channels — tailoring messaging, timing, and offers to individual segments of your audience. The kind of marketing sophistication that used to require an agency, a $10K/month ad budget, and a team of three. Now handled by one agent you built yourself.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Sales & Conversion",
    body: "Build an agent that handles sales conversations, overcomes objections, follows up with prospects who went cold, and moves qualified leads through your pipeline to conversion. From first touch to closed deal — orchestrated by an agent that never forgets to follow up and never loses a lead in the cracks.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2L11 13" />
        <path d="M22 2L15 22 11 13 2 9l20-7z" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Operations & Automation",
    body: "Deploy an agent that manages the time-consuming activities that steal hours from your week — email management, scheduling, reporting, data organization, client onboarding, workflow coordination. The admin layer that makes everything else run smoothly.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 3 21 3 21 8" />
        <line x1="4" y1="20" x2="21" y2="3" />
        <polyline points="21 16 21 21 16 21" />
        <line x1="15" y1="15" x2="21" y2="21" />
      </svg>
    ),
  },
];

export function WhatYouLearn() {
  return (
    <section
      style={{
        background: "linear-gradient(170deg, #070F22 0%, #0B1D3A 50%, #070F22 100%)",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D63384' fill-opacity='0.025'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          pointerEvents: "none",
        }}
      />

      {/* Top glow */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(214,51,132,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 relative">

        {/* Header */}
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6"
            style={{
              background: "rgba(214,51,132,0.1)",
              border: "1px solid rgba(214,51,132,0.35)",
              color: "#F272B6",
              fontSize: "0.72rem",
              letterSpacing: "0.16em",
              fontWeight: 700,
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#F272B6"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            THE AI AGENTS SUMMIT CURRICULUM
          </div>

          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.8vw, 3rem)",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.2,
              letterSpacing: "-0.025em",
              marginBottom: "16px",
            }}
          >
            The AI Agent Team{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #D63384, #FFADD6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              You'll Learn to Build
            </span>
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.65)",
              maxWidth: "680px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Every business runs on the same core functions. At the AI Agents Summit, you'll see how to deploy an AI agent across each one — and connect them into a single orchestrated system.
          </p>
        </div>

        {/* Cards grid — 3 columns for 6 agents */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {agents.map((agent) => (
            <div
              key={agent.number}
              className="group relative rounded-2xl p-6 flex flex-col gap-4 transition-transform hover:-translate-y-1"
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.015) 100%)",
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(8px)",
                cursor: "default",
              }}
            >
              {/* Hover border shimmer */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  border: "1px solid rgba(214,51,132,0.4)",
                  pointerEvents: "none",
                }}
              />

              {/* Icon + Number row */}
              <div className="flex items-center justify-between">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{
                    background: "rgba(214,51,132,0.12)",
                    color: "#D63384",
                    border: "1px solid rgba(214,51,132,0.2)",
                  }}
                >
                  {agent.icon}
                </div>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "rgba(214,51,132,0.4)",
                    letterSpacing: "0.1em",
                  }}
                >
                  AGENT {agent.number}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "white",
                  lineHeight: 1.3,
                }}
              >
                {agent.title}
              </h3>

              {/* Pink rule */}
              <div
                style={{
                  height: "2px",
                  width: "32px",
                  background: "linear-gradient(90deg, #D63384, #FFADD6)",
                  borderRadius: "2px",
                }}
              />

              {/* Body */}
              <p
                style={{
                  fontSize: "0.84rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.75,
                  flex: 1,
                }}
              >
                {agent.body}
              </p>
            </div>
          ))}
        </div>

        {/* Orchestration callout */}
        <div
          className="mt-8 rounded-2xl px-7 py-6"
          style={{
            background: "rgba(214,51,132,0.07)",
            border: "1px solid rgba(214,51,132,0.2)",
          }}
        >
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.8, textAlign: "center" }}>
            <strong style={{ color: "white" }}>The real power?</strong> These agents don't work in isolation. You'll learn how to orchestrate them as one connected team — where your lead gen agent feeds qualified prospects to your sales agent, your content agent drives traffic to your marketing agent, and your product development agent validates ideas using real intelligence from across your entire system.
          </p>
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-10 flex flex-col items-center gap-3">
          <button
            className="cta-btn shrink-0 px-10 py-4"
            onClick={() => {
              window.dispatchEvent(new Event("open-registration-modal"));
            }}
            style={{
              fontSize: "0.95rem",
              whiteSpace: "nowrap",
            }}
          >
            YES — I WANT TO BUILD MY AGENT TEAM →
          </button>
          <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.04em" }}>
            Join 3 million+ entrepreneurs trained by Kane &amp; Alessia. Register in 10 seconds.
          </p>
        </div>
      </div>
    </section>
  );
}
