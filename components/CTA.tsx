"use client";

import BuidlyMark from "./BuidlyMark";

export function CTA() {
  return (
    <section
      id="cta"
      style={{
        background: "linear-gradient(180deg, #061b39 0%, #03142d 100%)",
        color: "#fff",
        padding: "120px 0 100px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="blueprint-dark pattern-optional" style={{ position: "absolute", inset: 0, opacity: 0.7 }} />
      <div
        style={{
          position: "absolute",
          top: "-30%",
          left: "-10%",
          width: "70%",
          height: "120%",
          background: "radial-gradient(ellipse at center, rgba(11,128,239,.28) 0%, transparent 55%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-30%",
          right: "-10%",
          width: "60%",
          height: "90%",
          background: "radial-gradient(ellipse at center, rgba(232,70,90,.14) 0%, transparent 55%)",
          pointerEvents: "none",
        }}
      />

      <div className="wrap-wide" style={{ position: "relative" }}>
        <div
          className="cta-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
        >
          <div>
            <div className="chip on-dark" style={{ marginBottom: 28 }}>
              <span className="dot" />
              1 Q2 slot remaining · replies within 24h
            </div>

            <h2 className="display" style={{ color: "#fff", marginTop: 0, marginBottom: 28 }}>
              Let&apos;s figure out
              <br />
              if we&apos;re a <span className="italic" style={{ color: "var(--blue-bright)" }}>fit.</span>
            </h2>

            <p
              style={{
                fontSize: 19,
                lineHeight: 1.55,
                color: "rgba(255,255,255,.7)",
                maxWidth: 560,
                marginBottom: 40,
              }}
            >
              30 minutes, free, no sales pitch. You describe the problem. We tell you how we&apos;d approach it, what it costs, and when it ships — whether you hire us or not.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 56 }}>
              <a href="#" className="btn btn-dark">
                Book a free 30-min call
                <svg
                  className="arrow"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
              <a href="mailto:hello@buidly.com" className="btn btn-on-dark">
                hello@buidly.com
              </a>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 0,
                borderTop: "1px solid rgba(255,255,255,.12)",
                paddingTop: 28,
                maxWidth: 520,
              }}
            >
              {[
                { k: "Response", v: "< 24h" },
                { k: "First call", v: "Free" },
                { k: "Locked scope", v: "48h" },
              ].map((m, i) => (
                <div
                  key={i}
                  style={{
                    paddingRight: 20,
                    borderRight: i < 2 ? "1px solid rgba(255,255,255,.08)" : "none",
                    paddingLeft: i > 0 ? 20 : 0,
                  }}
                >
                  <div
                    className="mono"
                    style={{
                      fontSize: 10.5,
                      color: "rgba(255,255,255,.45)",
                      letterSpacing: ".12em",
                      marginBottom: 6,
                    }}
                  >
                    {m.k.toUpperCase()}
                  </div>
                  <div style={{ fontSize: 20, fontWeight: 700, color: "#fff" }}>{m.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,.04)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,.12)",
              borderRadius: 20,
              padding: 32,
              boxShadow: "0 30px 80px -20px rgba(0,0,0,.5)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 22,
              }}
            >
              <div
                className="mono"
                style={{ fontSize: 10, color: "rgba(255,255,255,.5)", letterSpacing: ".15em" }}
              >
                NEXT AVAILABLE
              </div>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 11,
                  color: "var(--blue-bright)",
                  fontFamily: "JetBrains Mono, monospace",
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "var(--green)",
                    boxShadow: "0 0 0 3px rgba(23,178,106,.2)",
                  }}
                />
                3 slots this week
              </span>
            </div>

            {[
              { day: "TUE", date: "22", month: "Apr", time: "14:00 — 14:30 CEST", open: true },
              { day: "WED", date: "23", month: "Apr", time: "10:30 — 11:00 CEST", open: true },
              { day: "THU", date: "24", month: "Apr", time: "16:00 — 16:30 CEST", open: true },
              { day: "FRI", date: "25", month: "Apr", time: "Fully booked", open: false },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "14px 16px",
                  background: s.open ? "rgba(255,255,255,.02)" : "transparent",
                  border: "1px solid rgba(255,255,255,.06)",
                  borderRadius: 10,
                  marginBottom: 10,
                  opacity: s.open ? 1 : 0.4,
                  cursor: s.open ? "pointer" : "default",
                  transition: "all .2s",
                }}
                onMouseEnter={(e) => {
                  if (s.open) {
                    e.currentTarget.style.borderColor = "var(--blue-bright)";
                    e.currentTarget.style.background = "rgba(77,184,255,.06)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (s.open) {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,.06)";
                    e.currentTarget.style.background = "rgba(255,255,255,.02)";
                  }
                }}
              >
                <div
                  style={{
                    width: 48,
                    textAlign: "center",
                    background: s.open ? "rgba(255,255,255,.06)" : "transparent",
                    border: "1px solid rgba(255,255,255,.08)",
                    borderRadius: 8,
                    padding: "6px 0",
                  }}
                >
                  <div
                    className="mono"
                    style={{ fontSize: 9, color: "rgba(255,255,255,.5)", letterSpacing: ".1em" }}
                  >
                    {s.day}
                  </div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", lineHeight: 1 }}>
                    {s.date}
                  </div>
                  <div
                    className="mono"
                    style={{ fontSize: 9, color: "rgba(255,255,255,.4)", marginTop: 1 }}
                  >
                    {s.month}
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, color: "#fff", fontWeight: 500, marginBottom: 2 }}>
                    Discovery call
                  </div>
                  <div className="mono" style={{ fontSize: 11, color: "rgba(255,255,255,.5)" }}>
                    {s.time}
                  </div>
                </div>
                {s.open && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    style={{ color: "var(--blue-bright)" }}
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                )}
              </div>
            ))}

            <div
              style={{
                marginTop: 14,
                padding: "10px 12px",
                background: "rgba(77,184,255,.08)",
                border: "1px solid rgba(77,184,255,.2)",
                borderRadius: 8,
                fontSize: 11.5,
                color: "rgba(255,255,255,.7)",
                display: "flex",
                gap: 8,
                alignItems: "start",
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                style={{ flexShrink: 0, marginTop: 2 }}
              >
                <circle cx="6" cy="6" r="5.5" stroke="var(--blue-bright)" />
                <path
                  d="M6 3v4M6 9v.01"
                  stroke="var(--blue-bright)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              Prefer async? Email{" "}
              <a href="mailto:hello@buidly.com" style={{ color: "var(--blue-bright)", textDecoration: "underline" }}>
                hello@buidly.com
              </a>{" "}
              with your brief.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const columns: { h: string; items: string[] }[] = [
    { h: "Services", items: ["MVP & Launch", "Custom Apps", "SaaS", "AI Integration", "Web3"] },
    { h: "Work", items: ["Surflux", "OneFinity", "Claynosaurz", "All projects"] },
    { h: "Company", items: ["About", "Team", "Process", "Pricing", "Journal"] },
    { h: "Get in touch", items: ["hello@buidly.com", "Book a call", "LinkedIn", "Twitter"] },
  ];

  return (
    <footer
      style={{
        background: "#03142d",
        color: "rgba(255,255,255,.6)",
        borderTop: "1px solid rgba(255,255,255,.08)",
        padding: "56px 0 32px",
      }}
    >
      <div className="wrap-wide">
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1fr",
            gap: 40,
            marginBottom: 48,
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <BuidlyMark size={28} />
              <span
                style={{
                  fontWeight: 800,
                  fontSize: 18,
                  color: "#fff",
                  letterSpacing: "-0.03em",
                }}
              >
                buidly
              </span>
            </div>
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.6,
                color: "rgba(255,255,255,.5)",
                maxWidth: 280,
                margin: "0 0 18px",
              }}
            >
              Senior engineering studio. Web, mobile, SaaS, AI, Web3. Built to last. Shipped in weeks.
            </p>
            <div
              className="mono"
              style={{ fontSize: 11, color: "rgba(255,255,255,.4)", letterSpacing: ".1em" }}
            >
              BUCHAREST · LISBON · REMOTE
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.h}>
              <div
                className="mono"
                style={{
                  fontSize: 10.5,
                  color: "rgba(255,255,255,.4)",
                  letterSpacing: ".14em",
                  marginBottom: 16,
                }}
              >
                {col.h.toUpperCase()}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {col.items.map((x) => (
                  <li key={x} style={{ marginBottom: 10 }}>
                    <a href="#" style={{ fontSize: 13.5, color: "rgba(255,255,255,.7)" }}>
                      {x}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,.08)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div
            className="mono"
            style={{ fontSize: 11, color: "rgba(255,255,255,.4)", letterSpacing: ".08em" }}
          >
            © 2020–2026 BUIDLY SRL · ALL RIGHTS RESERVED
          </div>
          <div style={{ display: "flex", gap: 24, fontSize: 12, color: "rgba(255,255,255,.5)" }}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Imprint</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
