export default function Process() {
  const steps = [
    {
      num: "01",
      name: "Discovery",
      duration: "1–2 days",
      desc: "Free call. We learn your business, goals, constraints. You leave with a fixed scope, timeline, and quote in 48 hours.",
      deliverable: "Scope document + fixed quote",
    },
    {
      num: "02",
      name: "Design & architecture",
      duration: "3–5 days",
      desc: "UX flows, technical blueprint, stack decisions. You approve the plan before we write a line of code.",
      deliverable: "Figma prototype + system diagram",
    },
    {
      num: "03",
      name: "Build",
      duration: "3–8 weeks",
      desc: "Senior engineers, weekly demos. You see the real product every Friday — not a status email.",
      deliverable: "Weekly deployable build",
    },
    {
      num: "04",
      name: "Launch & support",
      duration: "ongoing",
      desc: "Production deploy, monitoring, iterate on real user feedback. Your product ships — not a prototype.",
      deliverable: "Live product + runbook",
    },
  ];

  return (
    <section
      className="section"
      style={{ background: "#fff", position: "relative", borderTop: "1px solid var(--border)" }}
    >
      <div className="wrap-wide">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>How we work together</div>
            <h2 className="display">
              Four stages.
              <br />
              No <span className="italic" style={{ color: "var(--accent)" }}>surprises.</span>
            </h2>
          </div>
          <p className="lead">
            We lock the scope, timeline, and price before we start. Every week, you get a working build — not a status update.
          </p>
        </div>

        <div style={{ position: "relative" }}>
          <div
            className="process-line"
            style={{
              position: "absolute",
              top: 42,
              left: "5%",
              right: "5%",
              height: 1,
              background:
                "linear-gradient(to right, transparent, var(--border-strong) 10%, var(--border-strong) 90%, transparent)",
              zIndex: 0,
            }}
          />

          <div
            className="process-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 32,
              position: "relative",
              zIndex: 1,
            }}
          >
            {steps.map((s, idx) => (
              <div key={idx} style={{ position: "relative" }}>
                <div
                  style={{
                    width: 14,
                    height: 14,
                    background: "#fff",
                    border: "2px solid var(--accent)",
                    borderRadius: "50%",
                    position: "absolute",
                    top: 35,
                    left: 0,
                  }}
                >
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      background: "var(--accent)",
                      borderRadius: "50%",
                      position: "absolute",
                      top: 2,
                      left: 2,
                    }}
                  />
                </div>
                <div style={{ paddingLeft: 32 }}>
                  <div
                    className="mono"
                    style={{
                      fontSize: 11,
                      color: "var(--fg4)",
                      letterSpacing: ".15em",
                      marginBottom: 12,
                      fontWeight: 500,
                    }}
                  >
                    STEP {s.num}
                  </div>
                  <h3
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      margin: "0 0 10px",
                      color: "var(--ink)",
                    }}
                  >
                    {s.name}
                  </h3>
                  <div
                    className="mono"
                    style={{
                      fontSize: 11,
                      color: "var(--accent)",
                      letterSpacing: ".08em",
                      marginBottom: 16,
                    }}
                  >
                    ⟶ {s.duration.toUpperCase()}
                  </div>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.6,
                      color: "var(--fg3)",
                      margin: "0 0 20px",
                    }}
                  >
                    {s.desc}
                  </p>
                  <div
                    style={{
                      padding: "10px 12px",
                      background: "var(--bg-tint)",
                      borderLeft: "2px solid var(--accent)",
                      fontSize: 12,
                      color: "var(--ink)",
                      fontWeight: 500,
                    }}
                  >
                    <div
                      className="mono"
                      style={{
                        fontSize: 9.5,
                        color: "var(--fg4)",
                        letterSpacing: ".1em",
                        marginBottom: 3,
                      }}
                    >
                      YOU GET
                    </div>
                    {s.deliverable}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
