"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PILLARS = [
  {
    num: "01",
    label: "Engineering",
    title: "Senior engineers only.",
    points: [
      "100% senior (8+ yrs). No juniors hidden in the invoice.",
      "Direct access to the engineers writing your code.",
      "Audit-ready codebase from day one.",
    ],
    stat: { value: "100%", label: "Senior" },
    accent: "#0a0a0a",
  },
  {
    num: "02",
    label: "Speed",
    title: "Weeks, not quarters.",
    points: [
      "AI-augmented workflows. 4x developer velocity.",
      "Weekly demos, not status emails.",
      "Ship in 4-8 weeks. Every week a deployable build.",
    ],
    stat: { value: "4x", label: "Faster" },
    accent: "#00d4ff",
  },
  {
    num: "03",
    label: "Efficiency",
    title: "40% less than agencies.",
    points: [
      "Outcome pricing. Scope locked, no surprise invoices.",
      "40% below traditional agency cost.",
      "Transparent resource tracking.",
    ],
    stat: { value: "-40%", label: "vs agency" },
    accent: "#00c853",
  },
];

export default function Pillars() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pillars" ref={ref} className="section-lg bg-[#f2f2f2]">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-16 mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <div className="tag tag-light mb-4">What the client gets</div>
            <h2 className="display-lg">
              Three things you will not get{" "}
              <span className="text-[#00d4ff]">anywhere else.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base lg:text-lg max-w-md text-[#5c5c5c]"
          >
            Most studios trade off between quality, speed, and cost. Our model removes the trade.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-0 rounded-xl overflow-hidden border border-[#e0e0e0] bg-white">
          {PILLARS.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-6 lg:p-8 flex flex-col group transition-colors"
              style={{
                borderRight: idx < 2 ? "1px solid #e0e0e0" : "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#f8f8f8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <span className="mono text-[11px]" style={{ color: p.accent }}>
                  {p.num} / {p.label.toUpperCase()}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-xl lg:text-2xl mb-6 leading-tight">{p.title}</h3>

              {/* Stat */}
              <div className="mb-6">
                <div className="font-display text-4xl lg:text-5xl" style={{ color: p.accent }}>
                  {p.stat.value}
                </div>
                <div className="mono text-[10px] text-[#8c8c8c]">{p.stat.label.toUpperCase()}</div>
              </div>

              {/* Points */}
              <ul className="space-y-2 pt-5 border-t border-[#e0e0e0] flex-1">
                {p.points.map((pt, j) => (
                  <li key={j} className="flex gap-2 items-start text-sm text-[#5c5c5c]">
                    <span style={{ color: p.accent }}>→</span>
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
