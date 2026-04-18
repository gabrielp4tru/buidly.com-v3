"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PILLARS = [
  {
    num: "01",
    eyebrow: "Engineering Excellence",
    title: "Senior engineers only. No juniors hidden in the invoice.",
    points: [
      "100% senior (8+ yrs). Architecture, security, scale — built-in.",
      "Direct access to the engineers writing your code.",
      "Audit-ready codebase. Built for CTO handoff from day one.",
    ],
    stat: { value: "100%", label: "Senior engineers" },
    accent: "var(--ink)",
  },
  {
    num: "02",
    eyebrow: "Speed",
    title: "Weeks, not quarters. Market windows do not wait.",
    points: [
      "AI-augmented workflows. 4x developer velocity.",
      "Weekly demos, not status emails. See it working.",
      "Ship in 4-8 weeks. Every week a deployable build.",
    ],
    stat: { value: "4x", label: "Faster iteration" },
    accent: "var(--electric)",
  },
  {
    num: "03",
    eyebrow: "Capital Efficiency",
    title: "Your burn rate, protected. 40% less than agencies.",
    points: [
      "Outcome pricing. Scope locked, no surprise invoices.",
      "40% below traditional agency cost for comparable output.",
      "Transparent resource tracking. Every milestone visible.",
    ],
    stat: { value: "-40%", label: "vs agency cost" },
    accent: "var(--lime)",
  },
];

export default function Pillars() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="pillars"
      ref={ref}
      className="section-lg relative"
      style={{ background: "var(--bg-warm)" }}
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
            <div className="tag tag-light mb-6">What the client gets</div>
            <h2 className="display-lg">
              Three things you will not
              <br />
              get <span style={{ color: "var(--electric)" }}>anywhere else.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg max-w-md"
            style={{ color: "var(--ink-muted)" }}
          >
            Most studios trade off between quality, speed, and cost. Our delivery model — 
            senior-only, AI-augmented, outcome-priced — removes the trade.
          </motion.p>
        </div>

        {/* Pillars grid */}
        <div className="grid md:grid-cols-3 gap-0 rounded-2xl overflow-hidden border" style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}>
          {PILLARS.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative p-8 lg:p-10 flex flex-col group"
              style={{
                borderRight: idx < 2 ? "1px solid var(--border)" : "none",
                borderBottom: "1px solid var(--border)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--bg-warm)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--bg-card)";
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 100%, ${p.accent}10 0%, transparent 70%)`,
                }}
              />

              {/* Header */}
              <div className="flex justify-between items-center mb-8 relative">
                <span
                  className="mono text-xs"
                  style={{ color: p.accent, letterSpacing: "0.1em" }}
                >
                  {p.num} / {p.eyebrow.toUpperCase()}
                </span>
                <div
                  className="w-8 h-8 rounded-lg opacity-10"
                  style={{ background: p.accent }}
                />
              </div>

              {/* Title */}
              <h3
                className="font-display text-2xl leading-tight mb-8 relative"
                style={{ minHeight: 80 }}
              >
                {p.title}
              </h3>

              {/* Stat */}
              <div className="mb-8 relative">
                <div
                  className="font-display text-5xl lg:text-6xl mb-1"
                  style={{ color: p.accent, fontFeatureSettings: '"tnum"' }}
                >
                  {p.stat.value}
                </div>
                <div className="mono text-xs" style={{ color: "var(--ink-muted)" }}>
                  {p.stat.label.toUpperCase()}
                </div>
              </div>

              {/* Points */}
              <ul
                className="space-y-3 pt-6 relative flex-1"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                {p.points.map((pt, j) => (
                  <li
                    key={j}
                    className="flex gap-3 items-start text-sm"
                    style={{ color: "var(--ink-secondary)" }}
                  >
                    <span
                      className="font-medium shrink-0 mt-0.5"
                      style={{ color: p.accent }}
                    >
                      →
                    </span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
