"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const HERO_QUOTE = {
  name: "Beniamin Mincu",
  role: "Co-Founder, MultiversX",
  initials: "BM",
  quote:
    "Some teams build apps. Others build ecosystems. Buidly has been quietly powering core infra across MultiversX — protocol-level tools, real dApps, dev-grade smart contracts.",
};

const FEATURED = [
  {
    quote: "Buidly pushing infra forward on Sui where it matters.",
    name: "George Danezis",
    role: "Chief Scientist, Mysten Labs",
    initials: "GD",
  },
  {
    quote: "One of the most needed infra modules to upgrade the MultiversX ecosystem. Big respect.",
    name: "Lucian Mincu",
    role: "Co-Founder, MultiversX",
    initials: "LM",
  },
  {
    quote: "Buidly solving the annoying parts so devs can just build.",
    name: "Sam Blackshear",
    role: "Co-Founder, Mysten Labs",
    initials: "SB",
  },
];

const SMALL = [
  { quote: "The kind of best-kept-secret team I want all to myself.", name: "Nypam", role: "Claynosaurz" },
  { quote: "If you are building on Sui, Buidly is your new best friend.", name: "Adeniyi", role: "Mysten Labs" },
  { quote: "A partner who works closely with you and understands your goals.", name: "Eugenio Di Santo", role: "Umbrella Network" },
  { quote: "Their expertise brought our web & mobile UI designs to life.", name: "Julian", role: "OneTap Design" },
  { quote: "Working with Buidly has been a game-changer for Materia Prima.", name: "Florian Pfab", role: "Materia Prima" },
  { quote: "The perfect Web3 partner, delivering beyond our expectations.", name: "Petru", role: "Burnify" },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="testimonials"
      ref={ref}
      className="section-lg relative"
      style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}
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
            <div className="tag tag-light mb-6">Words from the people who would know</div>
            <h2 className="display-lg">
              Co-founders of
              <br />
              <span style={{ color: "var(--electric)" }}>billion-dollar</span> protocols.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg max-w-md"
            style={{ color: "var(--ink-muted)" }}
          >
            When the people who built Sui and MultiversX from zero say they trust us, we take it
            seriously. Here is what some of them said.
          </motion.p>
        </div>

        {/* Hero quote */}
        <motion.figure
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 lg:mb-24"
        >
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Quote mark */}
            <svg
              width="60"
              height="48"
              viewBox="0 0 60 48"
              fill="none"
              className="shrink-0 opacity-20"
              style={{ color: "var(--electric)" }}
            >
              <path
                d="M0 48V24C0 11 6 2 18 0v12c-4 2-6 6-6 12h6v24H0zM34 48V24c0-13 6-22 18-24v12c-4 2-6 6-6 12h6v24H34z"
                fill="currentColor"
              />
            </svg>

            {/* Quote content */}
            <blockquote className="flex-1">
              <p className="display-sm mb-8" style={{ fontWeight: 500 }}>
                &ldquo;{HERO_QUOTE.quote.split("ecosystems.")[0]}
                <span style={{ color: "var(--electric)" }}>ecosystems.</span>
                {HERO_QUOTE.quote.split("ecosystems.")[1].split("core infra")[0]}
                <span
                  style={{
                    borderBottom: "2px solid var(--electric)",
                    paddingBottom: 2,
                  }}
                >
                  core infra
                </span>
                {HERO_QUOTE.quote.split("core infra")[1]}&rdquo;
              </p>

              <figcaption className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center font-display text-lg"
                  style={{
                    background: "linear-gradient(135deg, var(--ink) 0%, var(--electric) 100%)",
                    color: "var(--white)",
                    boxShadow: "0 8px 24px -4px rgba(0, 212, 255, 0.3)",
                  }}
                >
                  {HERO_QUOTE.initials}
                </div>
                <div>
                  <div className="font-medium text-base">{HERO_QUOTE.name}</div>
                  <div className="mono text-sm" style={{ color: "var(--ink-muted)" }}>
                    {HERO_QUOTE.role}
                  </div>
                </div>
              </figcaption>
            </blockquote>

            {/* NPS badge */}
            <div
              className="mono text-xs hidden lg:block"
              style={{
                color: "var(--ink-subtle)",
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                letterSpacing: "0.1em",
              }}
            >
              NPS 9.6 / 10
            </div>
          </div>
        </motion.figure>

        {/* Featured testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {FEATURED.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="card p-6 lg:p-8 flex flex-col group"
              style={{ background: "var(--bg-card)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--electric)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <svg
                    key={idx}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="var(--electric)"
                  >
                    <path d="M8 0l2 5.5 5.5.5-4 3.5 1.5 5.5L8 12l-5 3 1.5-5.5-4-3.5 5.5-.5z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-lg font-medium flex-1 mb-6"
                style={{ color: "var(--ink)" }}
              >
                &ldquo;{f.quote}&rdquo;
              </p>

              {/* Author */}
              <div
                className="flex items-center gap-3 pt-5"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-medium text-sm"
                  style={{ background: "var(--ink)", color: "var(--white)" }}
                >
                  {f.initials}
                </div>
                <div>
                  <div className="font-medium text-sm">{f.name}</div>
                  <div className="mono text-xs" style={{ color: "var(--ink-muted)" }}>
                    {f.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Small testimonials grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 rounded-xl overflow-hidden border"
          style={{ borderColor: "var(--border)", background: "var(--border)" }}
        >
          {SMALL.map((s, i) => (
            <div
              key={i}
              className="p-5"
              style={{ background: "var(--bg-card)" }}
            >
              <p
                className="text-sm italic mb-3"
                style={{ color: "var(--ink-secondary)" }}
              >
                &ldquo;{s.quote}&rdquo;
              </p>
              <div className="text-sm">
                <span className="font-medium">{s.name}</span>
                <span style={{ color: "var(--ink-muted)" }}> / {s.role}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
