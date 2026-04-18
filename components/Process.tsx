"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STEPS = [
  {
    num: "01",
    name: "Discovery",
    duration: "1-2 days",
    desc: "Free call. We learn your goals and constraints. Fixed scope and quote in 48h.",
    deliverable: "Scope doc + fixed quote",
  },
  {
    num: "02",
    name: "Design",
    duration: "3-5 days",
    desc: "UX flows, technical blueprint. You approve the plan before we write code.",
    deliverable: "Figma + system diagram",
  },
  {
    num: "03",
    name: "Build",
    duration: "3-8 weeks",
    desc: "Senior engineers, weekly demos. See the real product every Friday.",
    deliverable: "Weekly deployable build",
  },
  {
    num: "04",
    name: "Launch",
    duration: "ongoing",
    desc: "Production deploy, monitoring, iterate on real user feedback.",
    deliverable: "Live product + runbook",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" ref={ref} className="section-lg bg-[#f8f8f8] border-t border-[#e0e0e0]">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-16 mb-12 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <div className="tag tag-light mb-4">How we work together</div>
            <h2 className="display-lg">
              Four stages. No <span className="text-[#00d4ff]">surprises.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base lg:text-lg max-w-md text-[#5c5c5c]"
          >
            We lock scope, timeline, and price before we start. Every week you get a working build.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Line - desktop */}
          <div
            className="hidden lg:block absolute top-10 left-0 right-0 h-px"
            style={{
              background: "linear-gradient(to right, transparent, #e0e0e0 10%, #e0e0e0 90%, transparent)",
            }}
          />

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {STEPS.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Dot */}
                <div className="relative mb-6 lg:mb-10">
                  <div className="w-4 h-4 rounded-full border-2 border-[#00d4ff] bg-[#f8f8f8] relative z-10">
                    <div className="absolute inset-0.5 rounded-full bg-[#00d4ff]" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="mono text-[10px] text-[#8c8c8c] mb-2">STEP {step.num}</div>
                  <h3 className="font-display text-xl mb-1">{step.name}</h3>
                  <div className="mono text-[11px] text-[#00d4ff] mb-3">→ {step.duration.toUpperCase()}</div>
                  <p className="text-sm text-[#5c5c5c] mb-4">{step.desc}</p>

                  {/* Deliverable */}
                  <div className="p-3 rounded-lg bg-white border-l-2 border-[#00d4ff]">
                    <div className="mono text-[9px] text-[#8c8c8c] mb-0.5">YOU GET</div>
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
