"use client";

import { useState } from "react";

const SERVICES = [
  {
    id: "mvp",
    num: "01",
    problem: "Ship fast. Don't cut corners.",
    solution: "Sprint MVP",
    desc: "Idea to deployed product in 4–8 weeks. Production-ready code. UX, engineering, deployment — one scope.",
    tags: ["Next.js", "TypeScript", "Postgres", "Stripe", "Vercel"],
    stat: { num: "4-8", unit: "weeks" },
    budget: "€5–12K",
    example: "Burnify — production in 6 weeks",
  },
  {
    id: "custom",
    num: "02",
    problem: "Your workflow lives in spreadsheets.",
    solution: "Custom Web & Mobile Apps",
    desc: "Replace manual processes with purpose-built tools. Web + native mobile. Integrated with what you already use.",
    tags: ["React Native", "Node", "GraphQL", "AWS", "Figma"],
    stat: { num: "25+", unit: "shipped" },
    budget: "€12–35K",
    example: "Materia Prima — board game + companion app",
  },
  {
    id: "saas",
    num: "03",
    problem: "You're building a product people pay for monthly.",
    solution: "SaaS & Platform",
    desc: "Multi-tenant architecture. Billing. Auth. API layer. Analytics. Scale-ready from day one.",
    tags: ["Multi-tenant", "Stripe", "RBAC", "OpenAPI", "Kubernetes"],
    stat: { num: "99.98%", unit: "uptime" },
    budget: "€35–120K",
    example: "Surflux — data layer powering Sui dev ecosystem",
  },
  {
    id: "ai",
    num: "04",
    problem: "Repetitive work is eating your margin.",
    solution: "AI Integration",
    desc: "Chatbots. Document processing. Workflow automation. Add AI to existing products or build new ones.",
    tags: ["OpenAI", "Anthropic", "RAG", "LangGraph", "Pinecone"],
    stat: { num: "40%", unit: "time saved" },
    budget: "€8–45K",
    example: "Support agent — 2k+ tickets/mo for SaaS client",
  },
  {
    id: "web3",
    num: "05",
    problem: "You need trustless infrastructure.",
    solution: "Web3 & Blockchain",
    desc: "Smart contracts in Rust, Move, Solidity. dApps. DeFi protocols. Cross-chain infrastructure. Trusted by Mysten Labs and MultiversX.",
    tags: ["Move", "Rust", "Solidity", "Sui", "MultiversX"],
    stat: { num: "$100M+", unit: "secured" },
    budget: "€20–200K",
    example: "OneFinity bridge — cross-chain, $100M+ TVL",
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const s = SERVICES[active];

  return (
    <section id="services" className="section" style={{ background: "#fff", position: "relative" }}>
      <div className="wrap-wide">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>What you need</div>
            <h2 className="display">
              You have a problem.
              <br />
              We have the <span className="italic" style={{ color: "var(--accent)" }}>fix.</span>
            </h2>
          </div>
          <p className="lead">
            Every engagement starts with your challenge. Pick the scenario closest to yours — we&apos;ll show you the shape, the stack, and the cost.
          </p>
        </div>

        <div
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.2fr)",
            gap: 48,
            alignItems: "start",
          }}
        >
          <div style={{ position: "sticky", top: 120 }}>
            {SERVICES.map((svc, idx) => (
              <button
                key={svc.id}
                onClick={() => setActive(idx)}
                onMouseEnter={() => setActive(idx)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "24px 0",
                  borderTop: idx === 0 ? "1px solid var(--border)" : "none",
                  borderBottom: "1px solid var(--border)",
                  background: "transparent",
                  cursor: "pointer",
                  position: "relative",
                  transition: "padding .3s var(--ease)",
                  paddingLeft: active === idx ? 16 : 0,
                }}
              >
                {active === idx && (
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: 3,
                      height: "calc(100% - 32px)",
                      background: "var(--accent)",
                      transition: "height .3s var(--ease)",
                    }}
                  />
                )}
                <div style={{ display: "flex", alignItems: "start", gap: 20 }}>
                  <span
                    className="mono"
                    style={{
                      fontSize: 12,
                      color: active === idx ? "var(--accent)" : "var(--fg4)",
                      fontWeight: 500,
                      marginTop: 6,
                      letterSpacing: ".05em",
                      transition: "color .3s",
                    }}
                  >
                    {svc.num}
                  </span>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: active === idx ? 22 : 20,
                        fontWeight: 700,
                        color: active === idx ? "var(--ink)" : "var(--fg2)",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.25,
                        transition: "all .3s var(--ease)",
                      }}
                    >
                      {svc.problem}
                    </div>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    style={{
                      color: active === idx ? "var(--accent)" : "var(--fg4)",
                      flexShrink: 0,
                      marginTop: 6,
                      transform: active === idx ? "translateX(4px)" : "translateX(0)",
                      transition: "all .3s var(--ease)",
                    }}
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </div>
              </button>
            ))}
          </div>

          <div style={{ position: "sticky", top: 120 }}>
            <div
              style={{
                background: "var(--bg-tint)",
                borderRadius: "var(--radius-card)",
                padding: 40,
                border: "1px solid var(--border)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                className="pattern-optional"
                style={{
                  position: "absolute",
                  inset: 0,
                  opacity: 0.5,
                  pointerEvents: "none",
                  backgroundImage:
                    "radial-gradient(circle, rgba(11,128,239,.08) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "start",
                    marginBottom: 24,
                  }}
                >
                  <div>
                    <div
                      className="mono"
                      style={{
                        fontSize: 11,
                        color: "var(--fg3)",
                        letterSpacing: ".1em",
                        marginBottom: 6,
                      }}
                    >
                      SOLUTION {s.num}
                    </div>
                    <h3 className="display" style={{ margin: 0, fontSize: 40 }}>
                      {s.solution}
                    </h3>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div
                      style={{
                        fontSize: 32,
                        fontWeight: 800,
                        color: "var(--accent)",
                        letterSpacing: "-0.03em",
                        lineHeight: 1,
                        fontFeatureSettings: '"tnum"',
                      }}
                    >
                      {s.stat.num}
                    </div>
                    <div
                      className="mono"
                      style={{
                        fontSize: 10,
                        color: "var(--fg3)",
                        letterSpacing: ".1em",
                        marginTop: 4,
                      }}
                    >
                      {s.stat.unit.toUpperCase()}
                    </div>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.6,
                    color: "var(--fg2)",
                    marginBottom: 28,
                  }}
                >
                  {s.desc}
                </p>

                <div style={{ marginBottom: 28 }}>
                  <div
                    className="mono"
                    style={{
                      fontSize: 10,
                      color: "var(--fg4)",
                      letterSpacing: ".12em",
                      marginBottom: 10,
                    }}
                  >
                    / STACK
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          padding: "6px 12px",
                          background: "#fff",
                          border: "1px solid var(--border-strong)",
                          borderRadius: 6,
                          fontSize: 12,
                          fontWeight: 500,
                          color: "var(--ink)",
                          fontFamily: "JetBrains Mono, monospace",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    borderTop: "1px solid var(--border-strong)",
                    paddingTop: 20,
                  }}
                >
                  <div>
                    <div
                      className="mono"
                      style={{
                        fontSize: 10,
                        color: "var(--fg4)",
                        letterSpacing: ".12em",
                        marginBottom: 6,
                      }}
                    >
                      / TYPICAL BUDGET
                    </div>
                    <div style={{ fontSize: 18, fontWeight: 700, color: "var(--ink)" }}>
                      {s.budget}
                    </div>
                  </div>
                  <div>
                    <div
                      className="mono"
                      style={{
                        fontSize: 10,
                        color: "var(--fg4)",
                        letterSpacing: ".12em",
                        marginBottom: 6,
                      }}
                    >
                      / EXAMPLE
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 500,
                        color: "var(--ink)",
                        lineHeight: 1.4,
                      }}
                    >
                      {s.example}
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: 28 }}>
                  <a href="#cta" className="btn btn-primary">
                    Scope this work
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
