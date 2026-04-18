"use client";

export default function Pillars() {
  const pillars = [
    {
      num: "01",
      eyebrow: "Engineering Excellence",
      title: "Senior engineers only. No juniors hidden in the invoice.",
      points: [
        "100% senior (8+ yrs). Architecture, security, scale — built-in.",
        "Direct access to the engineers writing your code.",
        "Audit-ready codebase. Built for CTO handoff from day one.",
      ],
      accent: "var(--ink)",
      stat: { value: "100%", label: "Senior engineers" },
    },
    {
      num: "02",
      eyebrow: "Speed",
      title: "Weeks, not quarters. Market windows don't wait.",
      points: [
        "AI-augmented workflows. 4× developer velocity.",
        "Weekly demos, not status emails. See it working.",
        "Ship in 4–8 weeks. Every week a deployable build.",
      ],
      accent: "var(--coral)",
      stat: { value: "4×", label: "Faster iteration" },
    },
    {
      num: "03",
      eyebrow: "Capital Efficiency",
      title: "Your burn rate, protected. 40% less than agencies.",
      points: [
        "Outcome pricing. Scope locked, no surprise invoices.",
        "40% below traditional agency cost for comparable output.",
        "Transparent resource tracking. Every milestone visible.",
      ],
      accent: "var(--blue)",
      stat: { value: "−40%", label: "vs agency cost" },
    },
  ];

  return (
    <section
      id="process"
      className="section"
      style={{ background: "var(--bg-tint)", position: "relative" }}
    >
      <div className="wrap-wide">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>What the client gets</div>
            <h2 className="display">
              Three things you won&apos;t
              <br />
              get <span className="italic" style={{ color: "var(--accent)" }}>anywhere else.</span>
            </h2>
          </div>
          <p className="lead">
            Most studios trade off between quality, speed, and cost. Our delivery model — senior-only, AI-augmented, outcome-priced — removes the trade.
          </p>
        </div>

        <div
          className="pillars-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 0,
            border: "1px solid var(--border)",
            borderRadius: 20,
            overflow: "hidden",
            background: "#fff",
          }}
        >
          {pillars.map((p, idx) => (
            <div
              key={idx}
              style={{
                padding: 40,
                borderRight: idx < 2 ? "1px solid var(--border)" : "none",
                display: "flex",
                flexDirection: "column",
                background: "#fff",
                position: "relative",
                transition: "background .3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-blue)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 32,
                }}
              >
                <span
                  className="mono"
                  style={{
                    fontSize: 11,
                    letterSpacing: ".15em",
                    color: p.accent,
                    fontWeight: 600,
                  }}
                >
                  {p.num} / {p.eyebrow.toUpperCase()}
                </span>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 6,
                    background: p.accent,
                    opacity: 0.1,
                  }}
                />
              </div>

              <h3
                style={{
                  fontSize: 26,
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                  color: "var(--ink)",
                  marginTop: 0,
                  marginBottom: 32,
                  minHeight: 120,
                }}
              >
                {p.title}
              </h3>

              <div
                style={{
                  fontSize: 56,
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: p.accent,
                  lineHeight: 1,
                  marginBottom: 4,
                  fontFeatureSettings: '"tnum"',
                }}
              >
                {p.stat.value}
              </div>
              <div
                className="mono"
                style={{
                  fontSize: 11,
                  color: "var(--fg3)",
                  letterSpacing: ".08em",
                  marginBottom: 32,
                }}
              >
                {p.stat.label.toUpperCase()}
              </div>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  borderTop: "1px solid var(--border)",
                  paddingTop: 24,
                }}
              >
                {p.points.map((pt, j) => (
                  <li
                    key={j}
                    style={{
                      display: "flex",
                      gap: 12,
                      alignItems: "start",
                      marginBottom: 14,
                      fontSize: 14,
                      lineHeight: 1.55,
                      color: "var(--fg2)",
                    }}
                  >
                    <span style={{ color: p.accent, fontWeight: 700, flexShrink: 0, marginTop: 2 }}>
                      →
                    </span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
