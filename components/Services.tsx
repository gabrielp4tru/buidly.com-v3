"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SERVICES = [
  {
    id: "mvp",
    num: "01",
    problem: "You need to ship an MVP — fast, without cutting corners later.",
    solution: "Sprint MVP",
    desc: "Idea to deployed product in 4-8 weeks. Production-ready code, not a throwaway prototype. UX, engineering, and deployment in one scope.",
    tags: ["Next.js", "TypeScript", "Postgres", "Stripe", "Vercel"],
    stat: { num: "4-8", unit: "weeks" },
    budget: "€5-12K",
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
    budget: "€12-35K",
    example: "Materia Prima — board game + companion app",
  },
  {
    id: "saas",
    num: "03",
    problem: "You're building a commercial product and users will pay monthly.",
    solution: "SaaS & Platform",
    desc: "Multi-tenant architecture, billing, auth, user management, API layer, analytics. Scale-ready from day one.",
    tags: ["Multi-tenant", "Stripe", "RBAC", "OpenAPI", "Kubernetes"],
    stat: { num: "99.98%", unit: "uptime avg" },
    budget: "€35-120K",
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
    budget: "€8-45K",
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
    budget: "€20-200K",
    example: "OneFinity bridge — cross-chain, $100M+ TVL",
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const [isExpanded, setIsExpanded] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const s = SERVICES[active];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="section bg-white relative overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div className="container relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-12 md:mb-16"
        >
          <div className="eyebrow mb-4">What the client needs</div>
          <h2 className="headline-lg text-navy mb-6">
            Tell us your{" "}
            <span className="text-gradient">problem.</span>
            <br />
            We&apos;ll tell you the fix.
          </h2>
          <p className="body-lg max-w-xl">
            Every engagement starts here. Pick the scenario closest to yours —
            we&apos;ll show you the shape of the work, the stack, and what it costs.
          </p>
        </motion.div>

        {/* Desktop layout */}
        <div className="hidden lg:grid grid-cols-[1fr_1.2fr] gap-12 items-start">
          {/* Left - Problem selector */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="sticky top-32"
          >
            {SERVICES.map((svc, idx) => (
              <button
                key={svc.id}
                onClick={() => setActive(idx)}
                onMouseEnter={() => setActive(idx)}
                className={`w-full text-left py-6 border-b border-border relative transition-all duration-300 group ${
                  idx === 0 ? "border-t" : ""
                }`}
                style={{ paddingLeft: active === idx ? 20 : 0 }}
              >
                {/* Active indicator */}
                <motion.div
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-1 bg-gradient-to-b from-cyan to-blue rounded-full"
                  initial={false}
                  animate={{
                    height: active === idx ? "calc(100% - 24px)" : 0,
                    opacity: active === idx ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />

                <div className="flex items-start gap-4">
                  <span
                    className={`font-mono text-xs font-medium mt-1.5 transition-colors duration-300 ${
                      active === idx ? "text-cyan" : "text-muted-foreground"
                    }`}
                  >
                    {svc.num}
                  </span>
                  <div className="flex-1">
                    <div
                      className={`font-display font-semibold leading-tight transition-all duration-300 ${
                        active === idx
                          ? "text-xl text-navy"
                          : "text-lg text-muted group-hover:text-navy"
                      }`}
                    >
                      {svc.problem}
                    </div>
                  </div>
                  <svg
                    className={`w-4 h-4 mt-1.5 flex-shrink-0 transition-all duration-300 ${
                      active === idx
                        ? "text-cyan translate-x-1"
                        : "text-muted-foreground group-hover:translate-x-1"
                    }`}
                    fill="none"
                    viewBox="0 0 16 16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </div>
              </button>
            ))}
          </motion.div>

          {/* Right - Solution card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="sticky top-32"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="card p-8 md:p-10 relative"
              >
                {/* Dot pattern */}
                <div
                  className="absolute inset-0 opacity-30 pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, rgba(1,200,240,0.1) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />

                <div className="relative">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <div className="font-mono text-xs text-muted tracking-wider mb-2">
                        SOLUTION {s.num}
                      </div>
                      <h3 className="headline-md">{s.solution}</h3>
                    </div>
                    <div className="text-right">
                      <div className="font-display text-3xl font-bold text-gradient">
                        {s.stat.num}
                      </div>
                      <div className="font-mono text-[10px] text-muted tracking-wider mt-1">
                        {s.stat.unit.toUpperCase()}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="body-md mb-6">{s.desc}</p>

                  {/* Stack */}
                  <div className="mb-6">
                    <div className="font-mono text-[10px] text-muted-foreground tracking-wider mb-3">
                      / STACK
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {s.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 bg-background border border-border rounded-lg font-mono text-xs font-medium text-navy"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Budget & Example */}
                  <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
                    <div>
                      <div className="font-mono text-[10px] text-muted-foreground tracking-wider mb-2">
                        / TYPICAL BUDGET
                      </div>
                      <div className="font-display text-lg font-bold text-navy">
                        {s.budget}
                      </div>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] text-muted-foreground tracking-wider mb-2">
                        / EXAMPLE
                      </div>
                      <div className="text-sm font-medium text-navy leading-snug">
                        {s.example}
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-8">
                    <a href="#cta" className="btn btn-primary">
                      Scope this work
                      <svg
                        className="w-4 h-4"
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
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Mobile accordion */}
        <div className="lg:hidden space-y-3">
          {SERVICES.map((svc, idx) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <button
                onClick={() => setIsExpanded(isExpanded === idx ? null : idx)}
                className="w-full text-left"
              >
                <div
                  className={`p-5 rounded-2xl border transition-all duration-300 ${
                    isExpanded === idx
                      ? "bg-white border-cyan shadow-glow"
                      : "bg-white border-border"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <span className="font-mono text-xs text-cyan font-medium mt-1">
                        {svc.num}
                      </span>
                      <div>
                        <div className="font-display font-semibold text-navy leading-tight mb-1">
                          {svc.problem}
                        </div>
                        <div className="text-sm text-cyan font-medium">
                          {svc.solution}
                        </div>
                      </div>
                    </div>
                    <motion.svg
                      animate={{ rotate: isExpanded === idx ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-5 h-5 text-cyan flex-shrink-0 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </motion.svg>
                  </div>

                  <AnimatePresence>
                    {isExpanded === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-5 mt-5 border-t border-border">
                          {/* Stat */}
                          <div className="flex items-baseline gap-2 mb-4">
                            <span className="font-display text-2xl font-bold text-gradient">
                              {svc.stat.num}
                            </span>
                            <span className="font-mono text-xs text-muted">
                              {svc.stat.unit}
                            </span>
                          </div>

                          <p className="text-sm text-muted mb-4">{svc.desc}</p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {svc.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 bg-background border border-border rounded font-mono text-[10px] text-navy"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Budget */}
                          <div className="flex justify-between items-center mb-4">
                            <span className="font-mono text-xs text-muted">
                              Budget
                            </span>
                            <span className="font-display font-bold text-navy">
                              {svc.budget}
                            </span>
                          </div>

                          <a
                            href="#cta"
                            className="btn btn-primary w-full justify-center text-sm h-11"
                          >
                            Scope this work
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
