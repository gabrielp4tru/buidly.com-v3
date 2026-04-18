"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

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
    gradient: "from-cyan to-blue",
  },
  {
    num: "02",
    eyebrow: "Speed",
    title: "Weeks, not quarters. Market windows don't wait.",
    points: [
      "AI-augmented workflows. 4× developer velocity.",
      "Weekly demos, not status emails. See it working.",
      "Ship in 4-8 weeks. Every week a deployable build.",
    ],
    stat: { value: "4×", label: "Faster iteration" },
    gradient: "from-blue to-cyan",
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
    gradient: "from-cyan via-blue to-cyan",
  },
];

export default function Pillars() {
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

  return (
    <section
      ref={sectionRef}
      id="pillars"
      className="section bg-background relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-background to-background" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="container relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-12 md:mb-16"
        >
          <div className="eyebrow mb-4">What the client gets</div>
          <h2 className="headline-lg text-navy mb-6">
            Three things you won&apos;t get{" "}
            <span className="text-gradient">anywhere else.</span>
          </h2>
          <p className="body-lg max-w-xl">
            Most studios trade off between quality, speed, and cost. Our delivery
            model — senior-only, AI-augmented, outcome-priced — removes the trade.
          </p>
        </motion.div>

        {/* Desktop grid */}
        <div className="hidden lg:grid grid-cols-3 gap-0 rounded-3xl overflow-hidden border border-border bg-white">
          {PILLARS.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.15 }}
              className={`p-8 xl:p-10 flex flex-col relative group transition-colors duration-500 hover:bg-cyan/[0.03] ${
                idx < 2 ? "border-r border-border" : ""
              }`}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-[0.02]`} />
              </div>

              <div className="relative">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                  <span className="font-mono text-xs tracking-wider text-cyan font-medium">
                    {pillar.num} / {pillar.eyebrow.toUpperCase()}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${pillar.gradient} opacity-20`} />
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl font-semibold text-navy leading-tight mb-8 min-h-[80px]">
                  {pillar.title}
                </h3>

                {/* Stat */}
                <div className="mb-8">
                  <div
                    className={`font-display text-5xl xl:text-6xl font-bold bg-gradient-to-r ${pillar.gradient} bg-clip-text text-transparent`}
                    style={{ fontFeatureSettings: '"tnum"' }}
                  >
                    {pillar.stat.value}
                  </div>
                  <div className="font-mono text-xs text-muted tracking-wider mt-2">
                    {pillar.stat.label.toUpperCase()}
                  </div>
                </div>

                {/* Points */}
                <ul className="space-y-3 pt-6 border-t border-border">
                  {pillar.points.map((point, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-sm text-muted leading-relaxed"
                    >
                      <span className="text-cyan font-bold flex-shrink-0 mt-0.5">
                        →
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile cards */}
        <div className="lg:hidden space-y-4">
          {PILLARS.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card p-6 relative overflow-hidden"
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.gradient}`} />

              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-xs tracking-wider text-cyan font-medium">
                  {pillar.num} / {pillar.eyebrow.toUpperCase()}
                </span>
                <div
                  className={`font-display text-3xl font-bold bg-gradient-to-r ${pillar.gradient} bg-clip-text text-transparent`}
                >
                  {pillar.stat.value}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-display text-lg font-semibold text-navy leading-tight mb-4">
                {pillar.title}
              </h3>

              {/* Points */}
              <ul className="space-y-2">
                {pillar.points.map((point, j) => (
                  <li
                    key={j}
                    className="flex gap-2 text-sm text-muted leading-relaxed"
                  >
                    <span className="text-cyan font-bold flex-shrink-0">→</span>
                    <span>{point}</span>
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
