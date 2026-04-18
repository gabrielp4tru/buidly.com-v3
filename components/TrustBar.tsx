"use client";

export default function TrustBar() {
  const logos = [
    { name: "Mysten Labs" },
    { name: "MultiversX" },
    { name: "Claynosaurz" },
    { name: "Gameloft" },
    { name: "xPortal" },
    { name: "OneFinity" },
    { name: "Materia Prima" },
    { name: "Umbrella" },
    { name: "OneDex" },
    { name: "Boogas" },
  ];

  return (
    <section
      style={{
        padding: "32px 0",
        background: "#fff",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="wrap-wide">
        <div
          className="trust-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 40,
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "8px 14px",
                background: "var(--bg-blue)",
                border: "1px solid var(--blue-200)",
                borderRadius: 999,
              }}
            >
              <span
                className="mono"
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: "var(--coral)",
                  lineHeight: 1,
                  fontFeatureSettings: '"tnum"',
                }}
              >
                0
              </span>
              <div style={{ fontSize: 13, color: "var(--ink)", fontWeight: 500 }}>
                security incidents{" "}
                <span style={{ color: "var(--fg3)" }}>· 5 years · 25+ products</span>
              </div>
            </div>
          </div>

          <div
            style={{
              overflow: "hidden",
              position: "relative",
              maxWidth: 800,
              maskImage:
                "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            }}
          >
            <div className="marquee-track">
              {[...logos, ...logos].map((l, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "0 28px",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    opacity: 0.55,
                    transition: "opacity .2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = ".55")}
                >
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: "var(--ink)",
                      letterSpacing: "-0.02em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {l.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
