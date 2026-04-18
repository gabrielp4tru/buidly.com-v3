"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ROTATOR = [
  { word: "app", tag: "iOS · Android · Web" },
  { word: "platform", tag: "SaaS · Multi-tenant" },
  { word: "dashboard", tag: "Analytics · Realtime" },
  { word: "protocol", tag: "Move · Rust · Solidity" },
  { word: "AI agent", tag: "LLM · RAG · Automation" },
];

const STATS = [
  { num: "25+", label: "Products shipped", sub: "2020 — today" },
  { num: "$100M+", label: "Assets secured", sub: "across 4 chains" },
  { num: "0", label: "Security incidents", sub: "since day one", highlight: true },
];

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIdx((prev) => (prev + 1) % ROTATOR.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={containerRef}
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden bg-navy-deep"
    >
      {/* Animated background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-dark opacity-50" />

        {/* Gradient orbs */}
        <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[120%] bg-[radial-gradient(ellipse_at_center,rgba(1,200,240,0.2)_0%,transparent_50%)]" />
        <div className="absolute bottom-[-30%] left-[-10%] w-[60%] h-[90%] bg-[radial-gradient(ellipse_at_center,rgba(1,152,255,0.15)_0%,transparent_55%)]" />
        
        {/* Animated gradient line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent origin-left"
        />
      </motion.div>

      {/* Top bar */}
      <div className="absolute top-24 left-0 right-0 px-5 md:px-8 flex justify-between font-mono text-[10px] md:text-xs text-white/30 tracking-wider">
        <span className="hidden sm:block">BUIDLY / EST. 2020 / BERLIN</span>
        <span>UX-FIRST TECH HUB</span>
      </div>

      {/* Main content */}
      <motion.div style={{ opacity }} className="container relative pt-32 pb-20 md:pt-36 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Text */}
          <div className="order-2 lg:order-1">
            {/* Chip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="chip mb-6 md:mb-8"
            >
              <span className="dot" />
              Accepting new projects
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-display font-bold text-white leading-[1.05] tracking-tight mb-6 md:mb-8"
              style={{ fontSize: "clamp(2.25rem, 7vw, 4.5rem)" }}
            >
              Your next{" "}
              <span className="relative inline-block min-w-[4ch]">
                <span className="invisible">{ROTATOR[0].word}</span>
                {ROTATOR.map((item, idx) => (
                  <motion.span
                    key={idx}
                    initial={false}
                    animate={{
                      opacity: idx === wordIdx ? 1 : 0,
                      y: idx === wordIdx ? 0 : idx < wordIdx ? -20 : 20,
                    }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 text-gradient"
                  >
                    {item.word}
                  </motion.span>
                ))}
              </span>
              .
              <br />
              <span className="text-white/90">Built to last.</span>
              <br />
              <span className="text-gradient">Shipped in weeks.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-base md:text-lg text-white/60 max-w-xl mb-8 md:mb-10 leading-relaxed"
            >
              We&apos;re a senior engineering studio that treats your product like we treat our own.
              Five years in, 25+ products shipped,{" "}
              <span className="text-cyan font-medium">$100M+</span> in critical infrastructure,{" "}
              <span className="text-white font-medium">zero</span> security incidents.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-3 md:gap-4 mb-12 md:mb-16"
            >
              <a href="#cta" className="btn btn-primary pulse-glow">
                Book a free call
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
              <a
                href="#work"
                className="btn btn-secondary border-white/20 text-white hover:border-cyan hover:bg-cyan/10"
              >
                See our work
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="grid grid-cols-3 gap-4 md:gap-6 pt-8 border-t border-white/10"
            >
              {STATS.map((stat, idx) => (
                <div key={idx} className="text-center md:text-left">
                  <div
                    className={`font-display font-bold text-2xl md:text-4xl tracking-tight mb-1 ${
                      stat.highlight ? "text-cyan" : "text-white"
                    }`}
                    style={{ fontFeatureSettings: '"tnum"' }}
                  >
                    {stat.num}
                  </div>
                  <div className="text-xs md:text-sm text-white/80 font-medium">
                    {stat.label}
                  </div>
                  <div className="font-mono text-[10px] md:text-xs text-white/40 mt-1">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column - Device Mock */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg"
            >
              <DeviceMock wordIdx={wordIdx} />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="font-mono text-[10px] text-white/40 tracking-[0.2em]">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            className="w-5 h-5 text-cyan/60"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

function DeviceMock({ wordIdx }: { wordIdx: number }) {
  const data = ROTATOR[wordIdx];

  return (
    <div className="relative">
      {/* Label */}
      <div className="absolute -top-6 left-4 font-mono text-[10px] text-white/40 tracking-wider">
        FIG.01 — {data.tag.toUpperCase()}
      </div>

      {/* Device */}
      <motion.div
        className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan/10"
        style={{
          background: "linear-gradient(180deg, rgba(40,40,80,0.8) 0%, rgba(26,26,46,0.9) 100%)",
          transform: "perspective(2000px) rotateY(-4deg) rotateX(2deg)",
        }}
        whileHover={{ rotateY: 0, rotateX: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Title bar */}
        <div className="flex items-center gap-3 px-4 py-3 bg-black/30 border-b border-white/5">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 font-mono text-[11px] text-white/40 text-center">
            ~/buidly/{data.word.replace(/ /g, "-").toLowerCase()}
          </div>
          <div className="font-mono text-[10px] text-cyan flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
            LIVE
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-[120px_1fr] min-h-[360px] md:min-h-[400px]">
          {/* Sidebar */}
          <div className="bg-black/20 border-r border-white/5 p-3">
            <div className="font-mono text-[9px] text-white/30 tracking-wider mb-3">
              PIPELINE
            </div>
            {[
              { l: "Discover", d: 100 },
              { l: "Design", d: 100 },
              { l: "Build", d: 68 },
              { l: "Launch", d: 0 },
            ].map((step, idx) => (
              <div key={idx} className="mb-3">
                <div className="flex justify-between items-center text-[11px] mb-1">
                  <span
                    className={step.d === 100 ? "text-cyan" : "text-white/60"}
                  >
                    {idx + 1}. {step.l}
                  </span>
                  {step.d === 100 && (
                    <svg className="w-3 h-3 text-cyan" fill="none" viewBox="0 0 10 10">
                      <path d="M2 5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  )}
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${
                      step.d === 100 ? "bg-cyan" : "bg-blue"
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: `${step.d}%` }}
                    transition={{ delay: idx * 0.2, duration: 0.8 }}
                  />
                </div>
              </div>
            ))}

            <div className="mt-6 p-2.5 rounded-lg bg-cyan/10 border border-cyan/20">
              <div className="font-mono text-[9px] text-white/40 mb-1">ETA</div>
              <div className="text-sm font-semibold text-white">6 weeks</div>
            </div>
          </div>

          {/* Main content */}
          <div className="p-4 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <div className="font-mono text-[10px] text-cyan tracking-wider mb-1">
                  PROJECT / {data.tag.split(" · ")[0].toUpperCase()}
                </div>
                <motion.div
                  key={wordIdx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-base font-semibold text-white"
                >
                  Your next {data.word}
                </motion.div>
              </div>
              <div className="font-mono text-[10px] text-white/40">wk 4 / 6</div>
            </div>

            {/* Terminal */}
            <div className="rounded-lg bg-black/40 border border-white/5 p-3 font-mono text-[11px] leading-relaxed">
              <div className="text-white/40">
                <span className="text-cyan">$</span> buidly deploy --env production
              </div>
              <div className="text-white/50">
                → Building{" "}
                <span className="text-white">{data.word.replace(/ /g, "-").toLowerCase()}</span>
                ...
              </div>
              <div className="text-white/50">
                → Tests <span className="text-[#28c840]">1,247 passed</span>
              </div>
              <div className="text-white/50">
                → Bundle <span className="text-amber-400">142kb</span> gzip
              </div>
              <div className="text-[#28c840]">
                ✓ Shipped in <span className="font-semibold">4m 12s</span>
              </div>
            </div>

            {/* Metrics grid */}
            <div className="grid grid-cols-2 gap-2">
              {[
                { l: "Uptime", v: "99.98%", color: "text-[#28c840]" },
                { l: "p95", v: "84ms", color: "text-cyan" },
                { l: "Users", v: "24.8k", color: "text-[#28c840]" },
                { l: "Errors", v: "0.003%", color: "text-white/60" },
              ].map((m, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/5 rounded-lg p-2.5"
                >
                  <div className="font-mono text-[9px] text-white/40 mb-1">
                    {m.l.toUpperCase()}
                  </div>
                  <div className={`text-base font-bold ${m.color}`}>{m.v}</div>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="flex items-end gap-0.5 h-10 pt-2">
              {Array.from({ length: 24 }).map((_, idx) => {
                const height = 20 + Math.sin(idx * 0.5) * 15 + idx * 2.5;
                return (
                  <motion.div
                    key={idx}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: idx * 0.03 + 0.5 }}
                    className="flex-1 rounded-sm origin-bottom"
                    style={{
                      height: `${Math.min(height, 100)}%`,
                      background: `linear-gradient(180deg, var(--cyan) 0%, rgba(1,200,240,0.2) 100%)`,
                      opacity: 0.3 + (idx / 24) * 0.7,
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute -bottom-4 -right-4 bg-white text-navy rounded-xl px-4 py-2.5 shadow-xl shadow-cyan/20 flex items-center gap-2"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#28c840] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#28c840]"></span>
        </span>
        <span className="text-sm font-semibold">Deployed 4m ago</span>
      </motion.div>
    </div>
  );
}
