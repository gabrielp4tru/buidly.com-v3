"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const SERVICES = [
  {
    id: "mvp",
    num: "01",
    problem: "You need to ship an MVP — fast, without cutting corners later.",
    solution: "Sprint MVP",
    desc: "Idea to deployed product in 4-8 weeks. Production-ready code, not a throwaway prototype.",
    tags: ["Next.js", "TypeScript", "Postgres", "Stripe"],
    stat: { num: "4-8", unit: "weeks" },
    budget: "EUR 5-12K",
  },
  {
    id: "custom",
    num: "02",
    problem: "Your workflow is stuck in spreadsheets. You need a tool built for it.",
    solution: "Custom Apps",
    desc: "Replace spreadsheets and generic SaaS with a tool that fits your process.",
    tags: ["React Native", "Node", "GraphQL", "AWS"],
    stat: { num: "25+", unit: "shipped" },
    budget: "EUR 12-35K",
  },
  {
    id: "saas",
    num: "03",
    problem: "You are building a commercial product users will pay monthly for.",
    solution: "SaaS & Platform",
    desc: "Multi-tenant architecture, billing, auth, API layer. Scale-ready from day one.",
    tags: ["Multi-tenant", "Stripe", "RBAC", "Kubernetes"],
    stat: { num: "99.98%", unit: "uptime" },
    budget: "EUR 35-120K",
  },
  {
    id: "ai",
    num: "04",
    problem: "You want AI to handle the repetitive work — chat, docs, workflows.",
    solution: "AI Integration",
    desc: "Chatbots, document processing, workflow automation with LLMs.",
    tags: ["OpenAI", "Anthropic", "RAG", "LangGraph"],
    stat: { num: "40%", unit: "time saved" },
    budget: "EUR 8-45K",
  },
  {
    id: "web3",
    num: "05",
    problem: "You need trustless code — smart contracts, dApps, or protocol infra.",
    solution: "Web3 & Blockchain",
    desc: "Smart contracts in Rust, Move, Solidity. Trusted by Mysten Labs, MultiversX.",
    tags: ["Move", "Rust", "Solidity", "Sui"],
    stat: { num: "$100M+", unit: "secured" },
    budget: "EUR 20-200K",
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const s = SERVICES[active];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="section-lg bg-[#f8f8f8]">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-16 mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <div className="tag tag-light mb-4">What the client needs</div>
            <h2 className="display-lg">
              Tell us your <span className="text-[#00d4ff]">problem.</span>
              <br />
              We will tell you the fix.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base lg:text-lg max-w-md text-[#5c5c5c]"
          >
            Pick the scenario closest to yours — we will show you the shape of the work, the stack, and what it costs.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Problem list */}
          <div className="lg:w-1/2">
            {SERVICES.map((svc, idx) => (
              <motion.button
                key={svc.id}
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => setActive(idx)}
                onMouseEnter={() => setActive(idx)}
                className="w-full text-left py-5 border-b border-[#e0e0e0] relative transition-all"
                style={{ paddingLeft: active === idx ? 16 : 0 }}
              >
                {active === idx && (
                  <motion.div
                    layoutId="svcIndicator"
                    className="absolute left-0 top-5 bottom-5 w-0.5 bg-[#00d4ff]"
                  />
                )}
                <div className="flex items-start gap-3">
                  <span
                    className="mono text-xs shrink-0 pt-0.5"
                    style={{ color: active === idx ? "#00d4ff" : "#8c8c8c" }}
                  >
                    {svc.num}
                  </span>
                  <div className="flex-1">
                    <div
                      className="text-base lg:text-lg font-medium leading-snug"
                      style={{ color: active === idx ? "#0a0a0a" : "#5c5c5c" }}
                    >
                      {svc.problem}
                    </div>
                  </div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="shrink-0 mt-0.5 transition-transform"
                    style={{
                      color: active === idx ? "#00d4ff" : "#8c8c8c",
                      transform: active === idx ? "translateX(3px)" : "translateX(0)",
                    }}
                  >
                    <path d="M4 9h10M10 5l4 4-4 4" />
                  </svg>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Solution card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="lg:w-1/2 lg:sticky lg:top-28 lg:self-start"
          >
            <div className="card p-6 lg:p-8 bg-white">
              {/* Header */}
              <div className="flex justify-between items-start mb-5">
                <div>
                  <div className="mono text-[11px] text-[#8c8c8c] mb-1">SOLUTION {s.num}</div>
                  <h3 className="display-sm">{s.solution}</h3>
                </div>
                <div className="text-right">
                  <div className="font-display text-2xl text-[#00d4ff]">{s.stat.num}</div>
                  <div className="mono text-[10px] text-[#8c8c8c]">{s.stat.unit.toUpperCase()}</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-[#5c5c5c] mb-5">{s.desc}</p>

              {/* Tags */}
              <div className="mb-5">
                <div className="mono text-[10px] text-[#8c8c8c] mb-2">STACK</div>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded mono text-[11px] bg-[#f2f2f2] border border-[#e0e0e0] text-[#0a0a0a]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Budget */}
              <div className="py-4 border-t border-[#e0e0e0] mb-5">
                <div className="mono text-[10px] text-[#8c8c8c] mb-1">TYPICAL BUDGET</div>
                <div className="font-display text-lg">{s.budget}</div>
              </div>

              {/* CTA */}
              <a href="#cta" className="btn btn-primary w-full">
                Scope this work
                <svg className="arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
