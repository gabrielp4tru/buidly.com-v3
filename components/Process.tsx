"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const STEPS = [
  {
    num: "01",
    name: "Discovery",
    duration: "1-2 days",
    desc: "Free call. We learn your business, goals, constraints. You leave with a fixed scope, timeline, and quote in 48 hours.",
    deliverable: "Scope document + fixed quote",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    num: "02",
    name: "Design & Architecture",
    duration: "3-5 days",
    desc: "UX flows, technical blueprint, stack decisions. You approve the plan before we write a line of code.",
    deliverable: "Figma prototype + system diagram",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    num: "03",
    name: "Build",
    duration: "3-8 weeks",
    desc: "Senior engineers, weekly demos. You see the real product every Friday — not a status email.",
    deliverable: "Weekly deployable build",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    num: "04",
    name: "Launch & Support",
    duration: "ongoing",
    desc: "Production deploy, monitoring, iterate on real user feedback. Your product ships — not a prototype.",
    deliverable: "Live product + runbook",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

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
      id="process"
      className="section bg-white relative overflow-hidden border-t border-border"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="container relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-12 md:mb-16"
        >
          <div className="eyebrow mb-4">How we work together</div>
          <h2 className="headline-lg text-navy mb-6">
            Four stages.
            <br />
            No <span className="text-gradient">surprises.</span>
          </h2>
          <p className="body-lg max-w-xl">
            We lock the scope, timeline, and price before we start. Every week,
            you get a working build — not a status update.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Progress line */}
          <div className="absolute top-[52px] left-0 right-0 h-px bg-border">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan to-blue"
              initial={{ width: "0%" }}
              animate={isVisible ? { width: `${((activeStep + 1) / STEPS.length) * 100}%` } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-4 gap-8">
            {STEPS.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + idx * 0.15 }}
                className="relative pt-4"
                onMouseEnter={() => setActiveStep(idx)}
              >
                {/* Node */}
                <div className="absolute top-[36px] left-0">
                  <motion.div
                    className={`w-4 h-4 rounded-full border-2 transition-colors duration-300 ${
                      idx <= activeStep
                        ? "border-cyan bg-cyan"
                        : "border-border bg-white"
                    }`}
                    whileHover={{ scale: 1.2 }}
                  >
                    {idx <= activeStep && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-cyan"
                        initial={{ scale: 1 }}
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: idx * 0.2 }}
                        style={{ opacity: 0.3 }}
                      />
                    )}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="pl-8 pt-8">
                  <div className="font-mono text-xs text-muted-foreground tracking-wider mb-3">
                    STEP {step.num}
                  </div>

                  <div
                    className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center transition-all duration-300 ${
                      idx <= activeStep
                        ? "bg-gradient-to-br from-cyan to-blue text-white shadow-glow"
                        : "bg-background border border-border text-muted"
                    }`}
                  >
                    {step.icon}
                  </div>

                  <h3 className="font-display text-xl font-semibold text-navy mb-2">
                    {step.name}
                  </h3>

                  <div className="font-mono text-xs text-cyan tracking-wider mb-4">
                    {step.duration.toUpperCase()}
                  </div>

                  <p className="text-sm text-muted leading-relaxed mb-5">
                    {step.desc}
                  </p>

                  {/* Deliverable */}
                  <div className="p-3 bg-background border-l-2 border-cyan rounded-r-lg">
                    <div className="font-mono text-[9px] text-muted-foreground tracking-wider mb-1">
                      YOU GET
                    </div>
                    <div className="text-sm font-medium text-navy">
                      {step.deliverable}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-0 bottom-0 w-px bg-border">
            <motion.div
              className="w-full bg-gradient-to-b from-cyan to-blue"
              initial={{ height: "0%" }}
              animate={isVisible ? { height: "100%" } : {}}
              transition={{ duration: 1.5, delay: 0.3 }}
            />
          </div>

          <div className="space-y-8">
            {STEPS.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.15 }}
                className="relative pl-8"
              >
                {/* Node */}
                <div className="absolute left-0 top-0">
                  <div className="w-4 h-4 rounded-full border-2 border-cyan bg-cyan">
                    <div className="absolute inset-0 rounded-full bg-cyan animate-ping opacity-30" />
                  </div>
                </div>

                {/* Card */}
                <div className="card p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="font-mono text-[10px] text-muted-foreground tracking-wider mb-1">
                        STEP {step.num}
                      </div>
                      <h3 className="font-display text-lg font-semibold text-navy">
                        {step.name}
                      </h3>
                    </div>
                    <div
                      className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan to-blue text-white flex items-center justify-center flex-shrink-0"
                    >
                      {step.icon}
                    </div>
                  </div>

                  <div className="font-mono text-xs text-cyan tracking-wider mb-3">
                    {step.duration.toUpperCase()}
                  </div>

                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {step.desc}
                  </p>

                  <div className="p-3 bg-background border-l-2 border-cyan rounded-r-lg">
                    <div className="font-mono text-[9px] text-muted-foreground tracking-wider mb-1">
                      YOU GET
                    </div>
                    <div className="text-sm font-medium text-navy">
                      {step.deliverable}
                    </div>
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
