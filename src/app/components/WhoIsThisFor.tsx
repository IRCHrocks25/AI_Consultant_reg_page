export function WhoIsThisFor() {
  return (
    <section
      style={{
        background: "#EEF2FF",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle dot texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle, rgba(214,51,132,0.1) 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
          pointerEvents: "none",
          opacity: 0.45,
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20 md:py-28 relative">

        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-7"
            style={{
              background: "rgba(214,51,132,0.1)",
              border: "1px solid rgba(214,51,132,0.32)",
              color: "#A01F6A",
              fontSize: "0.72rem",
              letterSpacing: "0.18em",
              fontWeight: 700,
            }}
          >
            ✦ IS THIS FOR YOU?
          </div>

          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.7rem)",
              fontWeight: 800,
              color: "#0B1D3A",
              lineHeight: 1.2,
              letterSpacing: "-0.025em",
              maxWidth: "680px",
              margin: "0 auto 16px",
            }}
          >
            This Summit Was Built for{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #D63384, #A01F6A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Builders, Not Browsers
            </span>
          </h2>
        </div>

        {/* For you — card */}
        <div
          className="rounded-2xl px-7 sm:px-9 py-8 mb-6"
          style={{
            background: "white",
            border: "1.5px solid rgba(214,51,132,0.13)",
            boxShadow: "0 4px 40px rgba(11,29,58,0.06)",
          }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
              style={{
                background: "linear-gradient(135deg, #D63384, #F272B6)",
                boxShadow: "0 3px 10px rgba(214,51,132,0.35)",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", color: "#D63384", textTransform: "uppercase" }}>
              This is for you if…
            </span>
          </div>

          <p style={{ fontSize: "1rem", color: "#3d3d56", lineHeight: 1.85, marginBottom: "16px" }}>
            This is for you if you're an entrepreneur, professional, coach, consultant, service provider, course creator, or expert who already understands that AI is transforming business — and you're ready to go beyond "using tools" and start deploying agents that handle real functions in your operation.
          </p>

          <p style={{ fontSize: "1rem", color: "#3d3d56", lineHeight: 1.85 }}>
            Maybe you've been building a business and you're ready to add serious leverage. Maybe you're launching something new and want to build it on an agentic foundation from day one. Maybe you've seen the consulting opportunity and want to help companies adopt AI agent systems. Whatever your path, you're past the "what is AI?" stage and ready for the "how do I build with it?" stage.
          </p>
        </div>

        {/* Not for you — card */}
        <div
          className="rounded-2xl px-7 sm:px-9 py-8 mb-8"
          style={{
            background: "white",
            border: "1.5px solid rgba(214,51,132,0.13)",
            boxShadow: "0 4px 40px rgba(11,29,58,0.06)",
          }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
              style={{
                background: "rgba(220,60,60,0.1)",
                border: "1.5px solid rgba(220,60,60,0.25)",
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(180,50,50,0.8)" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", color: "#7a2020", textTransform: "uppercase" }}>
              This is NOT for you if…
            </span>
          </div>

          <p style={{ fontSize: "1rem", color: "#3d3d56", lineHeight: 1.85 }}>
            This is NOT for you if you're looking for a surface-level overview of AI, a list of cool tools to try, or a motivational talk about "the future of AI." There are plenty of events that do that. This summit is about building. It's about architecture. It's about deploying real agents for real business functions. Come ready to take notes and take action.
          </p>
        </div>

        {/* New to AI? callout box */}
        <div
          className="rounded-2xl px-7 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          style={{
            background: "linear-gradient(135deg, #0B1D3A 0%, #142d57 100%)",
            border: "1.5px solid rgba(214,51,132,0.25)",
            boxShadow: "0 12px 40px rgba(11,29,58,0.12)",
          }}
        >
          <div
            className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: "rgba(214,51,132,0.15)", border: "1px solid rgba(214,51,132,0.3)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F272B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
          <div>
            <p style={{ color: "#F272B6", fontWeight: 700, fontSize: "0.82rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "4px" }}>
              New to AI?
            </p>
            <p style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.7 }}>
              Our AI Unleashed Summit covers the fundamentals — tools, workflows, and getting started.{" "}
              <span
                style={{
                  color: "#F272B6",
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                Check it out here.
              </span>{" "}
              Then come to this event ready to deploy.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
