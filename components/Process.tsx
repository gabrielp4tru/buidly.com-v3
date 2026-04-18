"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STEPS = [
  {
    num: "01",
    name: "Discovery",
    duration: "1-2 days",
    desc: "Free call. We learn your business, goals, constraints. You leave with a fixed scope, timeline, and quote in 48 hours.",
    deliverable: "Scope document + fixed quote",
  },
  {
    num: "02",
    name: "Design & architecture",
    duration: "3-5 days",
    desc: "UX flows, technical blueprint, stack decisions. You approve the plan before we write a line of code.",
    deliverable: "Figma prototype + system diagram",
  },
  {
    num: "03",
    name: "Build",
    duration: "3-8 weeks",
    desc: "Senior engineers, weekly demos. You see the real product every Friday — not a status email.",
    deliverable: "Weekly deployable build",
  },
  {
    num: "04",
    name: "Launch & support",
    duration: "ongoing",
    desc: "Production deploy, monitoring, iterate on real user feedback. Your product ships — not a prototype.",
    deliverable: "Live product + runbook",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="process"
      ref={ref}
      className="section-lg relative"
      style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}
    >
      <div className="container">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-20 mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="tag tag-light mb-6">How we work together</div>
            <h2 className="display-lg">
              Four stages.
              <br />
              No <span style={{ color: "var(--electric)" }}>surprises.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg max-w-md"
            style={{ color: "var(--ink-muted)" }}
          >
            We lock the scope, timeline, and price before we start. Every week, you get a working
            build — not a status update.
          </motion.p>
        </div>

        {/* Process timeline */}
        <div className="relative">
          {/* Connection line - desktop */}
          <div
            className="hidden lg:block absolute top-12 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(to right, transparent, var(--border) 10%, var(--border) 90%, transparent)",
            }}
          />

          {/* Steps grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {STEPS.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="relative mb-8 lg:mb-12">
                  <div
                    className="w-5 h-5 rounded-full border-2 relative z-10"
                    style={{
                      borderColor: "var(--electric)",
                      background: "var(--bg)",
                    }}
                  >
                    <div
                      className="absolute inset-1 rounded-full"
                      style={{ background: "var(--electric)" }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div
                    className="mono text-xs mb-3"
                    style={{ color: "var(--ink-subtle)", letterSpacing: "0.1em" }}
                  >
                    STEP {step.num}
                  </div>

                  <h3 className="font-display text-2xl mb-2">{step.name}</h3>

                  <div
                    className="mono text-xs mb-4"
                    style={{ color: "var(--electric)" }}
                  >
                    → {step.duration.toUpperCase()}
                  </div>

                  <p
                    className="text-sm mb-6 leading-relaxed"
                    style={{ color: "var(--ink-muted)" }}
                  >
                    {step.desc}
                  </p>

                  {/* Deliverable */}
                  <div
                    className="p-4 rounded-lg"
                    style={{
                      background: "var(--bg-warm)",
                      borderLeft: "2px solid var(--electric)",
                    }}
                  >
                    <div
                      className="mono text-xs mb-1"
                      style={{ color: "var(--ink-subtle)" }}
                    >
                      YOU GET
                    </div>
                    <div className="text-sm font-medium">{step.deliverable}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
