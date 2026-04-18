"use client";

export default function Testimonials() {
  const hero = {
    name: "Beniamin Mincu",
    role: "Co-Founder, MultiversX",
    initials: "BM",
  };

  const featured = [
    {
      quote: '"Buidly pushing infra forward on Sui where it matters."',
      name: "George Danezis",
      role: "Chief Scientist, Mysten Labs",
      initials: "GD",
      stars: 5,
    },
    {
      quote:
        '"One of the most needed infra modules to upgrade the MultiversX ecosystem. Big respect."',
      name: "Lucian Mincu",
      role: "Co-Founder, MultiversX",
      initials: "LM",
      stars: 5,
    },
    {
      quote: '"Buidly solving the annoying parts so devs can just build."',
      name: "Sam Blackshear",
      role: "Co-Founder, Mysten Labs",
      initials: "SB",
      stars: 5,
    },
  ];

  const small = [
    { quote: "The kind of best-kept-secret team I want all to myself.", name: "Nypam", role: "Claynosaurz" },
    { quote: "If you're building on Sui, Buidly is your new best friend.", name: "Adeniyi", role: "Mysten Labs" },
    {
      quote: "A partner who works closely with you and understands your goals.",
      name: "Eugenio Di Santo",
      role: "Umbrella Network",
    },
    { quote: "Their expertise brought our web & mobile UI designs to life.", name: "Julian", role: "OneTap Design" },
    {
      quote: "Working with Buidly has been a game-changer for Materia Prima.",
      name: "Florian Pfab",
      role: "Materia Prima",
    },
    { quote: "The perfect Web3 partner, delivering beyond our expectations.", name: "Petru", role: "Burnify" },
  ];

  return (
    <section
      id="testimonials"
      className="section"
      style={{ background: "#fff", borderTop: "1px solid var(--border)", position: "relative" }}
    >
      <div className="wrap-wide">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>Words from the people who&apos;d know</div>
            <h2 className="display">
              Co-founders of
              <br />
              <span className="italic" style={{ color: "var(--accent)" }}>billion-dollar</span> protocols.
            </h2>
          </div>
          <p className="lead">
            When the people who built Sui and MultiversX from zero say they trust us, we take it seriously. Here&apos;s what some of them said.
          </p>
        </div>

        <figure style={{ margin: 0, padding: 0, position: "relative", marginBottom: 80 }}>
          <div
            className="hero-quote-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "80px 1fr auto",
              gap: 40,
              alignItems: "start",
            }}
          >
            <div>
              <svg
                width="60"
                height="42"
                viewBox="0 0 60 42"
                fill="none"
                style={{ color: "var(--accent)", opacity: 0.25 }}
              >
                <path
                  d="M0 42V22C0 10 6 2 18 0v10c-4 2-6 6-6 12h6v20H0zM34 42V22c0-12 6-20 18-22v10c-4 2-6 6-6 12h6v20H34z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <blockquote style={{ margin: 0 }}>
              <p
                style={{
                  fontSize: "clamp(26px, 3vw, 40px)",
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.25,
                  color: "var(--ink)",
                  margin: 0,
                  maxWidth: 920,
                }}
              >
                &ldquo;Some teams build apps. Others build{" "}
                <span style={{ color: "var(--accent)" }}>ecosystems.</span>{" "}
                Buidly has been quietly powering{" "}
                <span style={{ borderBottom: "2px solid var(--accent)", paddingBottom: 2 }}>core infra</span>{" "}
                across MultiversX — protocol-level tools, real dApps, dev-grade smart contracts.&rdquo;
              </p>
              <figcaption style={{ marginTop: 32, display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #0a2957, #0b80ef)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 17,
                    letterSpacing: ".02em",
                    boxShadow: "0 8px 20px -6px rgba(11,128,239,.4)",
                  }}
                >
                  {hero.initials}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: "var(--ink)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {hero.name}
                  </div>
                  <div className="mono" style={{ fontSize: 12, color: "var(--fg3)", marginTop: 2 }}>
                    {hero.role}
                  </div>
                </div>
              </figcaption>
            </blockquote>
            <div
              className="mono"
              style={{
                fontSize: 11,
                color: "var(--fg4)",
                letterSpacing: ".15em",
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              ★ NPS 9.6 / 10
            </div>
          </div>
        </figure>

        <div
          className="featured-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            marginBottom: 40,
          }}
        >
          {featured.map((f, i) => (
            <div
              key={i}
              style={{
                padding: 32,
                background: "var(--bg-tint)",
                borderRadius: 16,
                border: "1px solid var(--border)",
                display: "flex",
                flexDirection: "column",
                minHeight: 260,
                transition: "all .3s var(--ease)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--bg-blue)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.borderColor = "var(--blue-200)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--bg-tint)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "var(--border)";
              }}
            >
              <div style={{ display: "flex", gap: 2, marginBottom: 14 }}>
                {Array.from({ length: f.stars }).map((_, idx) => (
                  <svg key={idx} width="14" height="14" viewBox="0 0 14 14" fill="var(--accent)">
                    <path d="M7 0l2 4.5 4.5.5-3.5 3 1 4.5L7 10l-4 2.5 1-4.5L.5 5l4.5-.5z" />
                  </svg>
                ))}
              </div>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.45,
                  color: "var(--ink)",
                  margin: "0 0 24px",
                  fontWeight: 500,
                  flex: 1,
                  letterSpacing: "-0.005em",
                }}
              >
                {f.quote}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  borderTop: "1px solid var(--border)",
                  paddingTop: 18,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "var(--ink)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  {f.initials}
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--ink)" }}>{f.name}</div>
                  <div className="mono" style={{ fontSize: 10.5, color: "var(--fg3)", marginTop: 2 }}>
                    {f.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="small-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1,
            background: "var(--border)",
            border: "1px solid var(--border)",
            borderRadius: 12,
            overflow: "hidden",
          }}
        >
          {small.map((s, i) => (
            <div key={i} style={{ padding: 22, background: "#fff" }}>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.5,
                  color: "var(--fg2)",
                  margin: "0 0 14px",
                  fontStyle: "italic",
                }}
              >
                &ldquo;{s.quote}&rdquo;
              </p>
              <div style={{ fontSize: 12 }}>
                <span style={{ fontWeight: 600, color: "var(--ink)" }}>{s.name}</span>
                <span style={{ color: "var(--fg3)" }}> · {s.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
