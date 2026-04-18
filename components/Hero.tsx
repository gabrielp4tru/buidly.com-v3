"use client";

import { useEffect, useState } from "react";

const ROTATOR = [
  { word: "app", tag: "iOS · Android · Web" },
  { word: "platform", tag: "SaaS · Multi-tenant" },
  { word: "dashboard", tag: "Analytics · Realtime" },
  { word: "protocol", tag: "Move · Rust · Solidity" },
  { word: "AI agent", tag: "LLM · RAG · Automation" },
];

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % ROTATOR.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="top"
      style={{
        position: "relative",
        background: "linear-gradient(180deg, #061b39 0%, #0a2957 60%, #061b39 100%)",
        color: "#fff",
        overflow: "hidden",
        paddingTop: 120,
        paddingBottom: 100,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="blueprint-dark pattern-optional" style={{ position: "absolute", inset: 0, opacity: 0.8 }} />
      <div
        style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: "70%",
          height: "120%",
          background:
            "radial-gradient(ellipse at center, rgba(11,128,239,.35) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-30%",
          left: "-10%",
          width: "60%",
          height: "90%",
          background:
            "radial-gradient(ellipse at center, rgba(232,70,90,.12) 0%, transparent 55%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 100,
          left: 32,
          right: 32,
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "JetBrains Mono, monospace",
          fontSize: 11,
          color: "rgba(255,255,255,.4)",
        }}
      >
        <span>BUIDLY / EST. 2020 / BUCHAREST · LISBON</span>
        <span>v.26.04 — SHIPPING</span>
      </div>

      <div className="wrap-wide" style={{ position: "relative", width: "100%" }}>
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.25fr) minmax(0, 1fr)",
            gap: 64,
            alignItems: "center",
          }}
        >
          <div>
            <div className="chip on-dark" style={{ marginBottom: 32 }}>
              <span className="dot" />
              3 of 4 Q2 slots filled
            </div>

            <h1 className="display" style={{ color: "#fff", marginTop: 0, marginBottom: 28 }}>
              Your next{" "}
              <span
                style={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "5.5ch",
                  verticalAlign: "baseline",
                }}
              >
                <span style={{ visibility: "hidden" }}>{ROTATOR[0].word}</span>
                {ROTATOR.map((r, idx) => (
                  <span
                    key={idx}
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      color: "var(--accent)",
                      opacity: idx === i ? 1 : 0,
                      transform:
                        idx === i
                          ? "translateY(0)"
                          : idx < i
                          ? "translateY(-24px)"
                          : "translateY(24px)",
                      transition: "all .6s var(--ease)",
                    }}
                  >
                    {r.word}
                  </span>
                ))}
              </span>
              .
              <br />
              <span className="italic">Engineered</span> to last.
              <br />
              <span className="italic">Shipped</span> in weeks.
            </h1>

            <p
              className="lead"
              style={{ color: "rgba(255,255,255,.7)", maxWidth: 520, marginBottom: 40 }}
            >
              We&apos;re a senior engineering studio that treats your product like equity.
              <br /><br />
              Five years. 25+ products.{" "}
              <span style={{ color: "var(--blue-bright)", fontWeight: 600 }}>$100M+</span> in critical infrastructure.{" "}
              <span style={{ color: "#fff", fontWeight: 600 }}>Zero</span> security incidents.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 56 }}>
              <a href="#cta" className="btn btn-dark">
                Book a call
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
              <a href="#work" className="btn btn-on-dark">
                See our work
              </a>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 0,
                borderTop: "1px solid rgba(255,255,255,.15)",
                paddingTop: 32,
              }}
            >
              {[
                { num: "25+", label: "Products shipped", sub: "2020 — today" },
                { num: "$100M+", label: "Assets secured", sub: "across 4 chains" },
                { num: "0", label: "Security incidents", sub: "since day one", highlight: true },
              ].map((s, idx) => (
                <div
                  key={idx}
                  style={{
                    paddingRight: 24,
                    borderRight: idx < 2 ? "1px solid rgba(255,255,255,.08)" : "none",
                    paddingLeft: idx > 0 ? 24 : 0,
                  }}
                >
                  <div
                    style={{
                      fontSize: 44,
                      fontWeight: 800,
                      letterSpacing: "-0.03em",
                      color: s.highlight ? "var(--coral)" : "#fff",
                      lineHeight: 1,
                      marginBottom: 10,
                      fontFeatureSettings: '"tnum"',
                    }}
                  >
                    {s.num}
                  </div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,.85)", fontWeight: 500 }}>
                    {s.label}
                  </div>
                  <div
                    className="mono"
                    style={{
                      fontSize: 10.5,
                      color: "rgba(255,255,255,.4)",
                      marginTop: 4,
                      letterSpacing: ".05em",
                    }}
                  >
                    {s.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-device" style={{ position: "relative" }}>
            <LiveProductMock rotatorIdx={i} />
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "JetBrains Mono, monospace",
          fontSize: 10,
          color: "rgba(255,255,255,.4)",
          letterSpacing: ".2em",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        SCROLL
        <svg width="1" height="28" viewBox="0 0 1 28">
          <line x1="0.5" y1="0" x2="0.5" y2="28" stroke="rgba(255,255,255,.3)" />
        </svg>
      </div>
    </section>
  );
}

function LiveProductMock({ rotatorIdx }: { rotatorIdx: number }) {
  const data = ROTATOR[rotatorIdx];

  return (
    <div style={{ position: "relative", padding: "0 12px" }}>
      <div
        className="mono"
        style={{
          position: "absolute",
          top: -28,
          left: 14,
          fontSize: 10,
          color: "rgba(255,255,255,.4)",
          letterSpacing: ".15em",
        }}
      >
        FIG.01 — {data.tag.toUpperCase()}
      </div>

      <div
        style={{
          background: "linear-gradient(180deg, #0d2d5c 0%, #081f42 100%)",
          borderRadius: 18,
          border: "1px solid rgba(255,255,255,.1)",
          boxShadow: "0 40px 80px -20px rgba(0,0,0,.5), 0 0 0 1px rgba(77,184,255,.1)",
          overflow: "hidden",
          transform: "perspective(2000px) rotateY(-4deg) rotateX(3deg)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "12px 16px",
            borderBottom: "1px solid rgba(255,255,255,.08)",
            background: "rgba(0,0,0,.2)",
          }}
        >
          <div style={{ display: "flex", gap: 6 }}>
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
          </div>
          <div
            className="mono"
            style={{
              flex: 1,
              textAlign: "center",
              fontSize: 11,
              color: "rgba(255,255,255,.45)",
            }}
          >
            ~/buidly/{data.word.replace(/ /g, "-").toLowerCase()}
          </div>
          <div className="mono" style={{ fontSize: 10, color: "rgba(77,184,255,.7)" }}>
            ●  LIVE
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", minHeight: 420 }}>
          <div
            style={{
              background: "rgba(0,0,0,.15)",
              borderRight: "1px solid rgba(255,255,255,.06)",
              padding: "16px 12px",
            }}
          >
            <div
              className="mono"
              style={{
                fontSize: 9,
                color: "rgba(255,255,255,.35)",
                letterSpacing: ".1em",
                marginBottom: 10,
              }}
            >
              PIPELINE
            </div>
            {[
              { l: "Discover", d: 100 },
              { l: "Design", d: 100 },
              { l: "Build", d: 68 },
              { l: "Launch", d: 0 },
            ].map((s, idx) => (
              <div key={idx} style={{ marginBottom: 14 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 11,
                    color: s.d === 100 ? "var(--blue-bright)" : "rgba(255,255,255,.7)",
                    marginBottom: 5,
                    fontWeight: 500,
                  }}
                >
                  <span>
                    {idx + 1}. {s.l}
                  </span>
                  {s.d === 100 && (
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  )}
                </div>
                <div style={{ height: 3, background: "rgba(255,255,255,.08)", borderRadius: 2 }}>
                  <div
                    style={{
                      width: `${s.d}%`,
                      height: "100%",
                      background: s.d === 100 ? "var(--green)" : "var(--blue-bright)",
                      borderRadius: 2,
                      transition: "width .6s var(--ease)",
                    }}
                  />
                </div>
              </div>
            ))}
            <div
              style={{
                marginTop: 24,
                padding: 10,
                background: "rgba(77,184,255,.06)",
                borderRadius: 6,
                border: "1px solid rgba(77,184,255,.15)",
              }}
            >
              <div
                className="mono"
                style={{ fontSize: 9, color: "rgba(255,255,255,.5)", marginBottom: 4 }}
              >
                ETA
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>6 weeks</div>
            </div>
          </div>

          <div style={{ padding: 18, display: "flex", flexDirection: "column", gap: 14 }}>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  className="mono"
                  style={{
                    fontSize: 10,
                    color: "var(--blue-bright)",
                    letterSpacing: ".1em",
                    marginBottom: 4,
                  }}
                >
                  PROJECT / {data.tag.split(" · ")[0].toUpperCase()}
                </div>
                <div style={{ fontSize: 17, fontWeight: 700, color: "#fff" }}>
                  Your next {data.word}
                </div>
              </div>
              <div className="mono" style={{ fontSize: 10, color: "rgba(255,255,255,.4)" }}>
                wk 4 / 6
              </div>
            </div>

            <div
              style={{
                background: "rgba(0,0,0,.35)",
                borderRadius: 8,
                border: "1px solid rgba(255,255,255,.06)",
                padding: 12,
                fontSize: 11,
                lineHeight: 1.65,
                fontFamily: "JetBrains Mono, monospace",
              }}
            >
              <div style={{ color: "rgba(255,255,255,.4)" }}>
                <span style={{ color: "var(--blue-bright)" }}>$</span> buidly deploy --env production
              </div>
              <div style={{ color: "rgba(255,255,255,.5)" }}>
                → Building <span style={{ color: "#fff" }}>{data.word.replace(/ /g, "-").toLowerCase()}</span>...
              </div>
              <div style={{ color: "rgba(255,255,255,.5)" }}>
                → Tests <span style={{ color: "var(--green)" }}>1,247 passed</span>
              </div>
              <div style={{ color: "rgba(255,255,255,.5)" }}>
                → Bundle <span style={{ color: "var(--amber)" }}>142kb</span> gzip
              </div>
              <div style={{ color: "var(--green)" }}>
                ✓ Shipped in <span style={{ fontWeight: 600 }}>4m 12s</span>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
              {[
                { l: "Uptime", v: "99.98%", trend: "+0.02", color: "var(--green)" },
                { l: "p95 latency", v: "84ms", trend: "-12ms", color: "var(--blue-bright)" },
                { l: "Active users", v: "24.8k", trend: "+8.4%", color: "var(--green)" },
                { l: "Error rate", v: "0.003%", trend: "−", color: "rgba(255,255,255,.6)" },
              ].map((m, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "rgba(255,255,255,.04)",
                    border: "1px solid rgba(255,255,255,.06)",
                    borderRadius: 8,
                    padding: 10,
                  }}
                >
                  <div
                    className="mono"
                    style={{
                      fontSize: 9,
                      color: "rgba(255,255,255,.4)",
                      letterSpacing: ".08em",
                      marginBottom: 4,
                    }}
                  >
                    {m.l.toUpperCase()}
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                    <div
                      style={{
                        fontSize: 18,
                        fontWeight: 700,
                        color: "#fff",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {m.v}
                    </div>
                    <div className="mono" style={{ fontSize: 9.5, color: m.color }}>
                      {m.trend}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", alignItems: "end", gap: 3, height: 42, paddingTop: 6 }}>
              {[18, 24, 20, 28, 32, 26, 34, 30, 38, 44, 40, 48, 52, 46, 54, 62, 58, 66, 72, 68, 78, 74, 82, 88].map(
                (h, idx) => (
                  <div
                    key={idx}
                    style={{
                      flex: 1,
                      height: `${h}%`,
                      background: "linear-gradient(180deg, var(--blue-bright), rgba(77,184,255,.2))",
                      borderRadius: 1,
                      opacity: 0.3 + (idx / 24) * 0.7,
                    }}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: -18,
          right: -12,
          background: "#fff",
          color: "var(--ink)",
          padding: "10px 14px",
          borderRadius: 10,
          fontSize: 12,
          fontWeight: 600,
          boxShadow: "0 18px 40px -10px rgba(0,0,0,.4)",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "var(--green)",
            boxShadow: "0 0 0 3px rgba(23,178,106,.25)",
          }}
        />
        Deployed 4m ago
      </div>
    </div>
  );
}
