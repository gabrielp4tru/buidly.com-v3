"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const SERVICES = [
  {
    id: "mvp",
    num: "01",
    problem: "You need to ship an MVP — fast, without cutting corners later.",
    solution: "Sprint MVP",
    desc: "Idea to deployed product in 4-8 weeks. Production-ready code, not a throwaway prototype. UX, engineering, and deployment in one scope.",
    tags: ["Next.js", "TypeScript", "Postgres", "Stripe", "Vercel"],
    stat: { num: "4-8", unit: "weeks" },
    budget: "EUR 5-12K",
    example: "Burnify — shipped to production in 6 weeks",
  },
  {
    id: "custom",
    num: "02",
    problem: "Your workflow is stuck in spreadsheets. You need a tool built for it.",
    solution: "Custom Web & Mobile Apps",
    desc: "Replace spreadsheets, manual processes, or generic SaaS. Responsive web + native mobile, integrated with your existing tools.",
    tags: ["React Native", "Node", "GraphQL", "AWS", "Figma"],
    stat: { num: "25+", unit: "shipped" },
    budget: "EUR 12-35K",
    example: "Materia Prima — board game + companion app",
  },
  {
    id: "saas",
    num: "03",
    problem: "You are building a commercial product and users will pay monthly.",
    solution: "SaaS & Platform",
    desc: "Multi-tenant architecture, billing, auth, user management, API layer, analytics. Scale-ready from day one.",
    tags: ["Multi-tenant", "Stripe", "RBAC", "OpenAPI", "Kubernetes"],
    stat: { num: "99.98%", unit: "uptime avg" },
    budget: "EUR 35-120K",
    example: "Surflux — data layer powering Sui dev ecosystem",
  },
  {
    id: "ai",
    num: "04",
    problem: "You want AI to handle the repetitive work — chat, docs, workflows.",
    solution: "AI Integration",
    desc: "Chatbots, document processing, workflow automation with LLMs. Add AI capabilities to existing products or build new ones.",
    tags: ["OpenAI", "Anthropic", "RAG", "LangGraph", "Pinecone"],
    stat: { num: "40%", unit: "time saved" },
    budget: "EUR 8-45K",
    example: "Support agent handling 2k+ tickets/mo for SaaS client",
  },
  {
    id: "web3",
    num: "05",
    problem: "You need trustless code — smart contracts, dApps, or protocol infra.",
    solution: "Web3 & Blockchain",
    desc: "Smart contracts in Rust, Move, Solidity. dApps, DeFi protocols, cross-chain infrastructure. Trusted by Mysten Labs, MultiversX.",
    tags: ["Move", "Rust", "Solidity", "Sui", "MultiversX"],
    stat: { num: "$100M+", unit: "assets secured" },
    budget: "EUR 20-200K",
    example: "OneFinity bridge — cross-chain, $100M+ TVL",
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const s = SERVICES[active];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      ref={ref}
      className="section-lg relative"
      style={{ background: "var(--bg)" }}
    >
      <div className="container">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-20 mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="tag tag-light mb-6">What the client needs</div>
            <h2 className="display-lg">
              Tell us your{" "}
              <span style={{ color: "var(--electric)" }}>problem.</span>
              <br />
              We will tell you the fix.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg max-w-md"
            style={{ color: "var(--ink-muted)" }}
          >
            Every engagement starts here. Pick the scenario closest to yours — we will show you the
            shape of the work, the stack, and what it costs.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Problem list */}
          <div className="lg:w-1/2">
            {SERVICES.map((svc, idx) => (
              <motion.button
                key={svc.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setActive(idx)}
                onMouseEnter={() => setActive(idx)}
                className="w-full text-left py-6 border-b relative transition-all"
                style={{
                  borderColor: "var(--border)",
                  paddingLeft: active === idx ? 20 : 0,
                }}
              >
                {active === idx && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-0 top-6 bottom-6 w-1 rounded-full"
                    style={{ background: "var(--electric)" }}
                  />
                )}
                <div className="flex items-start gap-4">
                  <span
                    className="mono text-sm shrink-0 pt-1"
                    style={{
                      color: active === idx ? "var(--electric)" : "var(--ink-subtle)",
                    }}
                  >
                    {svc.num}
                  </span>
                  <div className="flex-1">
                    <div
                      className="text-lg font-medium leading-snug"
                      style={{
                        color: active === idx ? "var(--ink)" : "var(--ink-secondary)",
                      }}
                    >
                      {svc.problem}
                    </div>
                  </div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="shrink-0 mt-1 transition-transform"
                    style={{
                      color: active === idx ? "var(--electric)" : "var(--ink-subtle)",
                      transform: active === idx ? "translateX(4px)" : "translateX(0)",
                    }}
                  >
                    <path d="M4 10h12M11 5l5 5-5 5" />
                  </svg>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Solution card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:w-1/2 lg:sticky lg:top-32 lg:self-start"
          >
            <div
              className="card p-8 lg:p-10 relative overflow-hidden"
              style={{ background: "var(--bg-card)" }}
            >
              {/* Subtle grid pattern */}
              <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, var(--border) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />

              <div className="relative">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="mono text-xs mb-2" style={{ color: "var(--ink-muted)" }}>
                      SOLUTION {s.num}
                    </div>
                    <h3 className="display-sm">{s.solution}</h3>
                  </div>
                  <div className="text-right">
                    <div
                      className="font-display text-3xl"
                      style={{ color: "var(--electric)", fontFeatureSettings: '"tnum"' }}
                    >
                      {s.stat.num}
                    </div>
                    <div className="mono text-xs" style={{ color: "var(--ink-muted)" }}>
                      {s.stat.unit.toUpperCase()}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-base mb-6" style={{ color: "var(--ink-secondary)" }}>
                  {s.desc}
                </p>

                {/* Tags */}
                <div className="mb-6">
                  <div className="mono text-xs mb-3" style={{ color: "var(--ink-subtle)" }}>
                    / STACK
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 rounded-md mono text-xs"
                        style={{
                          background: "var(--bg-warm)",
                          border: "1px solid var(--border)",
                          color: "var(--ink)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Budget & Example */}
                <div
                  className="grid grid-cols-2 gap-6 py-5 mb-6"
                  style={{ borderTop: "1px solid var(--border)" }}
                >
                  <div>
                    <div className="mono text-xs mb-2" style={{ color: "var(--ink-subtle)" }}>
                      / TYPICAL BUDGET
                    </div>
                    <div className="font-display text-xl">{s.budget}</div>
                  </div>
                  <div>
                    <div className="mono text-xs mb-2" style={{ color: "var(--ink-subtle)" }}>
                      / EXAMPLE
                    </div>
                    <div className="text-sm" style={{ color: "var(--ink)" }}>
                      {s.example}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <a href="#cta" className="btn btn-primary w-full">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
