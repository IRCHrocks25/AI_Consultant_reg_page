export function BottomNewToAISection() {
  return (
    <section
      style={{
        background: "#040A15",
        fontFamily: "'DM Sans', sans-serif",
        padding: "0",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
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
              Our AI Unleashed Summit covers the fundamentals - tools, workflows, and getting started.{" "}
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
