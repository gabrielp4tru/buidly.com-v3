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

  if (!mounted) return <div className="min-h-screen" style={{ background: "var(--bg-dark)" }} />;

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--bg-dark)" }}
    >
      {/* Grid pattern background */}
      <div className="pattern-grid-dark absolute inset-0 opacity-60" />

      {/* Animated gradient orbs */}
      <div
        className="absolute top-[-20%] right-[-10%] w-[60%] h-[80%] rounded-full blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[70%] rounded-full blur-[100px]"
        style={{
          background: "radial-gradient(circle, rgba(200, 255, 0, 0.08) 0%, transparent 70%)",
        }}
      />

      {/* Main content */}
      <div className="container relative z-10 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-16 lg:gap-20">
          {/* Left column - Main content */}
          <div className="flex-1 max-w-[720px]">
            {/* Status tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="tag tag-electric mb-8"
            >
              <span className="dot" />
              <span>3 of 4 Q2 slots filled</span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="display-xl mb-8"
              style={{ color: "var(--white)" }}
            >
              Your next{" "}
              <span className="relative inline-block min-w-[3ch]">
                <span className="invisible">{ROTATOR[0].word}</span>
                {ROTATOR.map((r, idx) => (
                  <motion.span
                    key={idx}
                    className="absolute inset-0 flex items-center"
                    initial={false}
                    animate={{
                      opacity: idx === i ? 1 : 0,
                      y: idx === i ? 0 : idx < i ? -20 : 20,
                    }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{ color: "var(--electric)" }}
                  >
                    {r.word}
                  </motion.span>
                ))}
              </span>
              <br />
              <span style={{ color: "var(--white-dim)" }}>Built to last.</span>
              <br />
              <span style={{ color: "var(--white-dim)" }}>Shipped in weeks.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl mb-10 max-w-[560px]"
              style={{ color: "var(--white-muted)" }}
            >
              We are a senior engineering studio that treats your product like we treat our own. 
              Five years in, 25+ products shipped,{" "}
              <span style={{ color: "var(--electric)" }}>$100M+</span> in critical infrastructure,{" "}
              <span style={{ color: "var(--white)" }}>zero</span> security incidents.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-16"
            >
              <a href="#cta" className="btn btn-primary">
                Book a free call
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
              <a href="#work" className="btn btn-secondary-dark">
                See our work
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-0"
              style={{ borderTop: "1px solid var(--border-dark)" }}
            >
              {[
                { num: "25+", label: "Products shipped", sub: "2020 — today" },
                { num: "$100M+", label: "Assets secured", sub: "across 4 chains" },
                { num: "0", label: "Security incidents", sub: "since day one", highlight: true },
              ].map((s, idx) => (
                <div
                  key={idx}
                  className="flex-1 pt-8"
                  style={{
                    paddingRight: 24,
                    paddingLeft: idx > 0 ? 24 : 0,
                    borderRight: idx < 2 ? "1px solid var(--border-dark)" : "none",
                  }}
                >
                  <div
                    className="font-display text-4xl md:text-5xl mb-2"
                    style={{
                      color: s.highlight ? "var(--coral)" : "var(--white)",
                      fontFeatureSettings: '"tnum"',
                    }}
                  >
                    {s.num}
                  </div>
                  <div className="text-sm mb-1" style={{ color: "var(--white-dim)" }}>
                    {s.label}
                  </div>
                  <div className="mono text-xs" style={{ color: "var(--white-subtle)" }}>
                    {s.sub}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column - Visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block flex-shrink-0 w-[460px]"
          >
            <LiveProductMock rotatorIdx={i} />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="mono text-xs" style={{ color: "var(--white-subtle)", letterSpacing: "0.2em" }}>
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8"
          style={{ background: "var(--white-subtle)" }}
        />
      </motion.div>
    </section>
  );
}

function LiveProductMock({ rotatorIdx }: { rotatorIdx: number }) {
  const data = ROTATOR[rotatorIdx];

  return (
    <div className="relative">
      {/* Label */}
      <div
        className="mono text-xs mb-4"
        style={{ color: "var(--white-subtle)", letterSpacing: "0.1em" }}
      >
        FIG.01 — {data.tag.toUpperCase()}
      </div>

      {/* Mock terminal/dashboard */}
      <motion.div
        className="relative rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%)",
          border: "1px solid var(--border-dark)",
          boxShadow: "0 40px 80px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(0, 212, 255, 0.1)",
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Window controls */}
        <div
          className="flex items-center gap-3 px-4 py-3"
          style={{ borderBottom: "1px solid var(--border-dark)" }}
        >
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
            <span className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
            <span className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
          </div>
          <div className="flex-1 text-center mono text-xs" style={{ color: "var(--white-subtle)" }}>
            ~/buidly/{data.word.replace(/ /g, "-").toLowerCase()}
          </div>
          <div className="mono text-xs" style={{ color: "var(--electric)" }}>
            ● LIVE
          </div>
        </div>

        <div className="p-5">
          {/* Project header */}
          <div className="flex justify-between items-start mb-5">
            <div>
              <div className="mono text-xs mb-1" style={{ color: "var(--electric)" }}>
                PROJECT / {data.tag.split(" / ")[0].toUpperCase()}
              </div>
              <div className="font-display text-lg" style={{ color: "var(--white)" }}>
                Your next {data.word}
              </div>
            </div>
            <div className="mono text-xs" style={{ color: "var(--white-subtle)" }}>
              wk 4 / 6
            </div>
          </div>

          {/* Progress bars */}
          <div className="space-y-3 mb-5">
            {[
              { l: "Discover", d: 100 },
              { l: "Design", d: 100 },
              { l: "Build", d: 68 },
              { l: "Launch", d: 0 },
            ].map((s, idx) => (
              <div key={idx}>
                <div
                  className="flex justify-between text-xs mb-1"
                  style={{ color: s.d === 100 ? "var(--electric)" : "var(--white-muted)" }}
                >
                  <span>
                    {idx + 1}. {s.l}
                  </span>
                  {s.d === 100 && (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6l2.5 2.5 5-5" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  )}
                </div>
                <div
                  className="h-1 rounded-full overflow-hidden"
                  style={{ background: "var(--border-dark)" }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: s.d === 100 ? "var(--green)" : "var(--electric)",
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${s.d}%` }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Terminal output */}
          <div
            className="rounded-lg p-3 mono text-xs leading-relaxed"
            style={{ background: "rgba(0,0,0,0.4)", border: "1px solid var(--border-dark)" }}
          >
            <div style={{ color: "var(--white-subtle)" }}>
              <span style={{ color: "var(--electric)" }}>$</span> buidly deploy --env production
            </div>
            <div style={{ color: "var(--white-muted)" }}>
              → Tests <span style={{ color: "var(--green)" }}>1,247 passed</span>
            </div>
            <div style={{ color: "var(--white-muted)" }}>
              → Bundle <span style={{ color: "var(--lime)" }}>142kb</span> gzip
            </div>
            <div style={{ color: "var(--green)" }}>✓ Shipped in 4m 12s</div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            {[
              { l: "Uptime", v: "99.98%" },
              { l: "p95 latency", v: "84ms" },
            ].map((m, idx) => (
              <div
                key={idx}
                className="rounded-lg p-3"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border-dark)" }}
              >
                <div className="mono text-xs mb-1" style={{ color: "var(--white-subtle)" }}>
                  {m.l.toUpperCase()}
                </div>
                <div className="font-display text-xl" style={{ color: "var(--white)" }}>
                  {m.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute -bottom-4 -right-4 flex items-center gap-2 px-4 py-2 rounded-xl"
        style={{
          background: "var(--bg-card)",
          boxShadow: "0 20px 40px -10px rgba(0,0,0,0.4)",
        }}
      >
        <span className="dot" />
        <span className="text-sm font-medium" style={{ color: "var(--ink)" }}>
          Deployed 4m ago
        </span>
      </motion.div>
    </div>
  );
}
