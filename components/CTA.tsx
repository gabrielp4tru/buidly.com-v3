"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function CTA() {
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

  const slots = [
    { day: "TUE", date: "22", month: "Apr", time: "14:00 - 14:30 CEST", open: true },
    { day: "WED", date: "23", month: "Apr", time: "10:30 - 11:00 CEST", open: true },
    { day: "THU", date: "24", month: "Apr", time: "16:00 - 16:30 CEST", open: true },
    { day: "FRI", date: "25", month: "Apr", time: "Fully booked", open: false },
  ];

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy to-navy-deep" />
      <div className="absolute inset-0 bg-grid-dark opacity-30" />

      {/* Gradient orbs */}
      <div className="absolute top-[-30%] left-[-10%] w-[70%] h-[120%] bg-[radial-gradient(ellipse_at_center,rgba(1,200,240,0.15)_0%,transparent_55%)] pointer-events-none" />
      <div className="absolute bottom-[-30%] right-[-10%] w-[60%] h-[90%] bg-[radial-gradient(ellipse_at_center,rgba(1,152,255,0.15)_0%,transparent_55%)] pointer-events-none" />

      <div className="container relative">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="chip mb-6">
              <span className="dot" />
              1 Q2 slot remaining
            </div>

            <h2 className="font-display font-bold text-white leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Let&apos;s figure out
              <br />
              if we&apos;re a <span className="text-gradient">fit.</span>
            </h2>

            <p className="text-lg text-white/60 max-w-xl mb-8 leading-relaxed">
              30 minutes, free, no sales pitch. You describe the problem. We tell
              you how we&apos;d approach it, what it costs, and when it ships —
              whether you hire us or not.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a href="#" className="btn btn-primary pulse-glow">
                Book a free 30-min call
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
                href="mailto:hello@buidly.com"
                className="btn btn-secondary border-white/20 text-white hover:border-cyan hover:bg-cyan/10"
              >
                hello@buidly.com
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10 max-w-lg">
              {[
                { label: "Response", value: "< 24h" },
                { label: "First call", value: "Free" },
                { label: "Locked scope", value: "48h" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`${idx < 2 ? "border-r border-white/10 pr-4" : ""} ${
                    idx > 0 ? "pl-4" : ""
                  }`}
                >
                  <div className="font-mono text-[10px] text-white/40 tracking-wider mb-1">
                    {item.label.toUpperCase()}
                  </div>
                  <div className="font-display text-xl font-bold text-white">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Calendar card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-dark rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="font-mono text-xs text-white/40 tracking-wider">
                  NEXT AVAILABLE
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-cyan">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan"></span>
                  </span>
                  3 slots this week
                </div>
              </div>

              <div className="space-y-3">
                {slots.map((slot, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                    className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${
                      slot.open
                        ? "bg-white/5 border-white/10 hover:border-cyan hover:bg-cyan/5 cursor-pointer"
                        : "border-white/5 opacity-40"
                    }`}
                  >
                    {/* Date */}
                    <div
                      className={`w-12 text-center py-2 rounded-lg ${
                        slot.open
                          ? "bg-white/10 border border-white/10"
                          : "bg-transparent"
                      }`}
                    >
                      <div className="font-mono text-[9px] text-white/40">
                        {slot.day}
                      </div>
                      <div className="font-display text-lg font-bold text-white leading-none">
                        {slot.date}
                      </div>
                      <div className="font-mono text-[9px] text-white/30">
                        {slot.month}
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <div className="text-sm font-medium text-white mb-1">
                        Discovery call
                      </div>
                      <div className="font-mono text-xs text-white/50">
                        {slot.time}
                      </div>
                    </div>

                    {/* Arrow */}
                    {slot.open && (
                      <svg
                        className="w-4 h-4 text-cyan"
                        fill="none"
                        viewBox="0 0 16 16"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M3 8h10M9 4l4 4-4 4" />
                      </svg>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Async note */}
              <div className="mt-6 p-4 rounded-xl bg-cyan/10 border border-cyan/20">
                <div className="flex gap-3 items-start text-sm text-white/70">
                  <svg
                    className="w-4 h-4 text-cyan flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>
                    Prefer async? Email{" "}
                    <a
                      href="mailto:hello@buidly.com"
                      className="text-cyan hover:underline"
                    >
                      hello@buidly.com
                    </a>{" "}
                    with your brief.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const columns = [
    {
      title: "Services",
      links: ["MVP & Launch", "Custom Apps", "SaaS", "AI Integration", "Web3"],
    },
    {
      title: "Work",
      links: ["Surflux", "OneFinity", "Claynosaurz", "All projects"],
    },
    {
      title: "Company",
      links: ["About", "Team", "Process", "Pricing", "Journal"],
    },
    {
      title: "Get in touch",
      links: ["hello@buidly.com", "Book a call", "LinkedIn", "Twitter"],
    },
  ];

  return (
    <footer className="bg-navy-deep border-t border-white/10 py-16">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 mb-12">
          {/* Logo section */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/buidly-logo.svg"
                alt="Buidly"
                width={100}
                height={28}
                className="h-7 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs mb-4">
              Senior engineering studio. Web, mobile, SaaS, AI, Web3. Built to
              last. Shipped in weeks.
            </p>
            <div className="font-mono text-xs text-white/30 tracking-wider">
              BERLIN · BUCHAREST · LISBON
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col, idx) => (
            <div key={idx}>
              <div className="font-mono text-[10px] text-white/40 tracking-wider mb-4">
                {col.title.toUpperCase()}
              </div>
              <ul className="space-y-2.5">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-sm text-white/60 hover:text-cyan transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="font-mono text-xs text-white/30 tracking-wider">
            © 2020-2026 BUIDLY SRL · ALL RIGHTS RESERVED
          </div>
          <div className="flex gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-cyan transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-cyan transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-cyan transition-colors">
              Imprint
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
