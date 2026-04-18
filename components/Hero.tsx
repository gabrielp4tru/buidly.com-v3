"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ROTATOR = [
  { word: "app", tag: "iOS / Android / Web" },
  { word: "platform", tag: "SaaS / Multi-tenant" },
  { word: "dashboard", tag: "Analytics / Realtime" },
  { word: "protocol", tag: "Move / Rust / Solidity" },
  { word: "AI agent", tag: "LLM / RAG / Automation" },
];

export default function Hero() {
  const [i, setI] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const t = setInterval(() => setI((x) => (x + 1) % ROTATOR.length), 3000);
    return () => clearInterval(t);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-[#0a0a0a]" />;

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Grid pattern */}
      <div className="pattern-grid-dark absolute inset-0 opacity-40" />

      {/* Cyan gradient orb - top right */}
      <div
        className="absolute top-[-30%] right-[-15%] w-[70%] h-[90%] rounded-full blur-[150px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0, 212, 255, 0.2) 0%, transparent 60%)",
        }}
      />

      {/* Content */}
      <div className="container relative z-10 pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          {/* Left - Main content */}
          <div className="flex-1 max-w-2xl">
            {/* Status */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="tag tag-electric mb-6"
            >
              <span className="dot" />
              <span>3 of 4 Q2 slots filled</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="display-xl mb-6 text-white"
            >
              Your next{" "}
              <span className="relative inline-block">
                <span className="invisible">{ROTATOR[0].word}</span>
                {ROTATOR.map((r, idx) => (
                  <motion.span
                    key={idx}
                    className="absolute inset-0 text-[#00d4ff]"
                    initial={false}
                    animate={{
                      opacity: idx === i ? 1 : 0,
                      y: idx === i ? 0 : idx < i ? -16 : 16,
                    }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {r.word}
                  </motion.span>
                ))}
              </span>
              <br />
              <span className="text-white/70">Built to last.</span>
              <br />
              <span className="text-white/70">Shipped in weeks.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-lg lg:text-xl mb-8 max-w-lg text-white/60 leading-relaxed"
            >
              Senior engineering studio. Five years, 25+ products shipped,{" "}
              <span className="text-[#00d4ff]">$100M+</span> in critical infrastructure,{" "}
              <span className="text-white">zero</span> security incidents.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <a href="#cta" className="btn btn-primary">
                Book a free call
                <svg className="arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
              <a href="#work" className="btn btn-secondary-dark">
                See our work
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex border-t border-white/10"
            >
              {[
                { num: "25+", label: "Products shipped", highlight: false },
                { num: "$100M+", label: "Assets secured", highlight: false },
                { num: "0", label: "Incidents", highlight: true },
              ].map((s, idx) => (
                <div
                  key={idx}
                  className="flex-1 pt-6"
                  style={{
                    paddingRight: idx < 2 ? 20 : 0,
                    paddingLeft: idx > 0 ? 20 : 0,
                    borderRight: idx < 2 ? "1px solid rgba(255,255,255,0.1)" : "none",
                  }}
                >
                  <div
                    className="font-display text-3xl lg:text-4xl mb-1"
                    style={{
                      color: s.highlight ? "#ff3b30" : "#00d4ff",
                      fontFeatureSettings: '"tnum"',
                    }}
                  >
                    {s.num}
                  </div>
                  <div className="text-xs lg:text-sm text-white/50">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:block flex-shrink-0 w-[400px]"
          >
            <ProductMock rotatorIdx={i} />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="mono text-[10px] text-white/30 tracking-[0.2em]">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-6 bg-white/20"
        />
      </motion.div>
    </section>
  );
}

function ProductMock({ rotatorIdx }: { rotatorIdx: number }) {
  const data = ROTATOR[rotatorIdx];

  return (
    <div className="relative">
      {/* Label */}
      <div className="mono text-[10px] text-white/30 mb-3 tracking-widest">
        FIG.01 — {data.tag.toUpperCase()}
      </div>

      {/* Terminal card */}
      <motion.div
        className="rounded-xl overflow-hidden border border-white/10"
        style={{
          background: "linear-gradient(180deg, #141414 0%, #0a0a0a 100%)",
          boxShadow: "0 32px 64px -16px rgba(0,0,0,0.6), 0 0 0 1px rgba(0, 212, 255, 0.08)",
        }}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.25 }}
      >
        {/* Window bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/8">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 text-center mono text-[10px] text-white/30">
            ~/buidly/{data.word.replace(/ /g, "-")}
          </div>
          <div className="mono text-[10px] text-[#00d4ff]">● LIVE</div>
        </div>

        <div className="p-4">
          {/* Header */}
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="mono text-[10px] text-[#00d4ff] mb-0.5">
                PROJECT / {data.tag.split(" / ")[0].toUpperCase()}
              </div>
              <div className="font-display text-base text-white">
                Your next {data.word}
              </div>
            </div>
            <div className="mono text-[10px] text-white/30">wk 4/6</div>
          </div>

          {/* Progress */}
          <div className="space-y-2 mb-4">
            {[
              { l: "Discover", p: 100 },
              { l: "Design", p: 100 },
              { l: "Build", p: 68 },
              { l: "Launch", p: 0 },
            ].map((step, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-[10px] mb-0.5" style={{ color: step.p === 100 ? "#00d4ff" : "rgba(255,255,255,0.5)" }}>
                  <span>{idx + 1}. {step.l}</span>
                  {step.p === 100 && (
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  )}
                </div>
                <div className="h-0.5 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: step.p === 100 ? "#00c853" : "#00d4ff" }}
                    initial={{ width: 0 }}
                    animate={{ width: `${step.p}%` }}
                    transition={{ duration: 0.6, delay: idx * 0.08 }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Terminal */}
          <div className="rounded-lg p-2.5 mono text-[10px] leading-relaxed bg-black/40 border border-white/5">
            <div className="text-white/30">
              <span className="text-[#00d4ff]">$</span> buidly deploy --prod
            </div>
            <div className="text-white/50">
              → Tests <span className="text-[#00c853]">1,247 passed</span>
            </div>
            <div className="text-white/50">
              → Bundle <span className="text-[#b8e600]">142kb</span> gzip
            </div>
            <div className="text-[#00c853]">✓ Shipped in 4m 12s</div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-2 mt-3">
            {[
              { l: "Uptime", v: "99.98%" },
              { l: "p95", v: "84ms" },
            ].map((m, idx) => (
              <div key={idx} className="rounded-lg p-2.5 bg-white/3 border border-white/5">
                <div className="mono text-[9px] text-white/30 mb-0.5">{m.l.toUpperCase()}</div>
                <div className="font-display text-lg text-white">{m.v}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="absolute -bottom-3 -right-3 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white shadow-xl"
      >
        <span className="dot" />
        <span className="text-xs font-medium text-[#0a0a0a]">Deployed 4m ago</span>
      </motion.div>
    </div>
  );
}
