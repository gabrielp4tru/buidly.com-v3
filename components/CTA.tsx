"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BuidlyMark from "./BuidlyMark";

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="cta"
      ref={ref}
      className="relative overflow-hidden"
      style={{
        background: "var(--bg-dark)",
        padding: "120px 0 100px",
      }}
    >
      {/* Grid pattern */}
      <div className="pattern-grid-dark absolute inset-0 opacity-50" />

      {/* Gradient orbs */}
      <div
        className="absolute top-[-20%] left-[-10%] w-[60%] h-[80%] rounded-full blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(0, 212, 255, 0.2) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[70%] rounded-full blur-[100px]"
        style={{
          background: "radial-gradient(circle, rgba(200, 255, 0, 0.1) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            {/* Status tag */}
            <div className="tag tag-electric mb-8">
              <span className="dot" />
              <span>1 Q2 slot remaining / replies within 24h</span>
            </div>

            {/* Headline */}
            <h2 className="display-lg mb-6" style={{ color: "var(--white)" }}>
              Let us figure out
              <br />
              if we are a <span style={{ color: "var(--electric)" }}>fit.</span>
            </h2>

            {/* Description */}
            <p
              className="text-xl mb-10 max-w-lg"
              style={{ color: "var(--white-muted)" }}
            >
              30 minutes, free, no sales pitch. You describe the problem. We tell you how we would
              approach it, what it costs, and when it ships — whether you hire us or not.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#" className="btn btn-primary-dark">
                Book a free 30-min call
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
              <a href="mailto:hello@buidly.com" className="btn btn-secondary-dark">
                hello@buidly.com
              </a>
            </div>

            {/* Quick stats */}
            <div
              className="flex gap-0 pt-8"
              style={{ borderTop: "1px solid var(--border-dark)" }}
            >
              {[
                { k: "Response", v: "< 24h" },
                { k: "First call", v: "Free" },
                { k: "Locked scope", v: "48h" },
              ].map((m, i) => (
                <div
                  key={i}
                  className="flex-1"
                  style={{
                    paddingRight: 20,
                    paddingLeft: i > 0 ? 20 : 0,
                    borderRight: i < 2 ? "1px solid var(--border-dark)" : "none",
                  }}
                >
                  <div
                    className="mono text-xs mb-2"
                    style={{ color: "var(--white-subtle)", letterSpacing: "0.1em" }}
                  >
                    {m.k.toUpperCase()}
                  </div>
                  <div
                    className="font-display text-2xl"
                    style={{ color: "var(--white)" }}
                  >
                    {m.v}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Calendar card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[420px] shrink-0"
          >
            <div
              className="rounded-2xl p-6 lg:p-8"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(20px)",
                border: "1px solid var(--border-dark)",
                boxShadow: "0 40px 80px -20px rgba(0, 0, 0, 0.5)",
              }}
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <div
                  className="mono text-xs"
                  style={{ color: "var(--white-subtle)", letterSpacing: "0.1em" }}
                >
                  NEXT AVAILABLE
                </div>
                <div className="flex items-center gap-2 mono text-xs" style={{ color: "var(--electric)" }}>
                  <span className="dot" />
                  3 slots this week
                </div>
              </div>

              {/* Time slots */}
              {[
                { day: "TUE", date: "22", month: "Apr", time: "14:00 — 14:30 CEST", open: true },
                { day: "WED", date: "23", month: "Apr", time: "10:30 — 11:00 CEST", open: true },
                { day: "THU", date: "24", month: "Apr", time: "16:00 — 16:30 CEST", open: true },
                { day: "FRI", date: "25", month: "Apr", time: "Fully booked", open: false },
              ].map((slot, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl mb-3 transition-all cursor-pointer"
                  style={{
                    background: slot.open ? "rgba(255, 255, 255, 0.02)" : "transparent",
                    border: "1px solid var(--border-dark)",
                    opacity: slot.open ? 1 : 0.4,
                  }}
                  onMouseEnter={(e) => {
                    if (slot.open) {
                      e.currentTarget.style.borderColor = "var(--electric)";
                      e.currentTarget.style.background = "rgba(0, 212, 255, 0.05)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (slot.open) {
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)";
                    }
                  }}
                >
                  {/* Date box */}
                  <div
                    className="w-12 text-center py-2 rounded-lg"
                    style={{
                      background: slot.open ? "rgba(255, 255, 255, 0.05)" : "transparent",
                      border: "1px solid var(--border-dark)",
                    }}
                  >
                    <div
                      className="mono text-xs"
                      style={{ color: "var(--white-subtle)", fontSize: 9 }}
                    >
                      {slot.day}
                    </div>
                    <div
                      className="font-display text-lg"
                      style={{ color: "var(--white)" }}
                    >
                      {slot.date}
                    </div>
                    <div
                      className="mono text-xs"
                      style={{ color: "var(--white-subtle)", fontSize: 9 }}
                    >
                      {slot.month}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <div
                      className="text-sm font-medium mb-1"
                      style={{ color: "var(--white)" }}
                    >
                      Discovery call
                    </div>
                    <div
                      className="mono text-xs"
                      style={{ color: "var(--white-muted)" }}
                    >
                      {slot.time}
                    </div>
                  </div>

                  {/* Arrow */}
                  {slot.open && (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="var(--electric)"
                      strokeWidth="1.5"
                    >
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  )}
                </div>
              ))}

              {/* Email fallback */}
              <div
                className="flex items-start gap-3 p-4 rounded-xl mt-4"
                style={{
                  background: "rgba(0, 212, 255, 0.05)",
                  border: "1px solid rgba(0, 212, 255, 0.15)",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="shrink-0 mt-0.5"
                >
                  <circle cx="8" cy="8" r="7" stroke="var(--electric)" strokeWidth="1.5" />
                  <path
                    d="M8 5v4M8 11v.5"
                    stroke="var(--electric)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <p className="text-sm" style={{ color: "var(--white-muted)" }}>
                  Prefer async? Email{" "}
                  <a
                    href="mailto:hello@buidly.com"
                    style={{ color: "var(--electric)", textDecoration: "underline" }}
                  >
                    hello@buidly.com
                  </a>{" "}
                  with your brief.
                </p>
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
    { h: "Services", items: ["MVP & Launch", "Custom Apps", "SaaS", "AI Integration", "Web3"] },
    { h: "Work", items: ["Surflux", "OneFinity", "Claynosaurz", "All projects"] },
    { h: "Company", items: ["About", "Team", "Process", "Pricing", "Journal"] },
    { h: "Get in touch", items: ["hello@buidly.com", "Book a call", "LinkedIn", "Twitter"] },
  ];

  return (
    <footer
      style={{
        background: "#050505",
        borderTop: "1px solid var(--border-dark)",
        padding: "60px 0 32px",
      }}
    >
      <div className="container">
        {/* Main footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <BuidlyMark size={32} />
              <span
                className="font-display text-lg"
                style={{ color: "var(--white)" }}
              >
                buidly
              </span>
            </div>
            <p
              className="text-sm mb-4 max-w-[240px]"
              style={{ color: "var(--white-muted)" }}
            >
              Senior engineering studio. Web, mobile, SaaS, AI, Web3. Built to last. Shipped in weeks.
            </p>
            <div
              className="mono text-xs"
              style={{ color: "var(--white-subtle)", letterSpacing: "0.1em" }}
            >
              BERLIN / BUCHAREST / REMOTE
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.h}>
              <div
                className="mono text-xs mb-4"
                style={{ color: "var(--white-subtle)", letterSpacing: "0.1em" }}
              >
                {col.h.toUpperCase()}
              </div>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm transition-colors"
                      style={{ color: "var(--white-muted)" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "var(--white)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "var(--white-muted)";
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6"
          style={{ borderTop: "1px solid var(--border-dark)" }}
        >
          <div
            className="mono text-xs"
            style={{ color: "var(--white-subtle)", letterSpacing: "0.05em" }}
          >
            2020-2026 BUIDLY SRL / ALL RIGHTS RESERVED
          </div>
          <div className="flex gap-6 text-sm" style={{ color: "var(--white-muted)" }}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Imprint</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
