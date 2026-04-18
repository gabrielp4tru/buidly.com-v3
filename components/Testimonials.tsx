"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const HERO_QUOTE = {
  quote:
    "Some teams build apps. Others build ecosystems. Buidly has been quietly powering core infra across MultiversX — protocol-level tools, real dApps, dev-grade smart contracts.",
  name: "Beniamin Mincu",
  role: "Co-Founder, MultiversX",
  initials: "BM",
};

const FEATURED = [
  {
    quote: "Buidly pushing infra forward on Sui where it matters.",
    name: "George Danezis",
    role: "Chief Scientist, Mysten Labs",
    initials: "GD",
  },
  {
    quote:
      "One of the most needed infra modules to upgrade the MultiversX ecosystem. Big respect.",
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
  {
    quote: "The kind of best-kept-secret team I want all to myself.",
    name: "Nypam",
    role: "Claynosaurz",
  },
  {
    quote: "If you're building on Sui, Buidly is your new best friend.",
    name: "Adeniyi",
    role: "Mysten Labs",
  },
  {
    quote: "A partner who works closely with you and understands your goals.",
    name: "Eugenio Di Santo",
    role: "Umbrella Network",
  },
  {
    quote: "Their expertise brought our web & mobile UI designs to life.",
    name: "Julian",
    role: "OneTap Design",
  },
  {
    quote: "Working with Buidly has been a game-changer for Materia Prima.",
    name: "Florian Pfab",
    role: "Materia Prima",
  },
  {
    quote: "The perfect Web3 partner, delivering beyond our expectations.",
    name: "Petru",
    role: "Burnify",
  },
];

export default function Testimonials() {
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
      id="testimonials"
      className="section bg-white border-t border-border relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="container relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-12 md:mb-16"
        >
          <div className="eyebrow mb-4">Words from the people who&apos;d know</div>
          <h2 className="headline-lg text-navy mb-6">
            Co-founders of
            <br />
            <span className="text-gradient">billion-dollar</span> protocols.
          </h2>
          <p className="body-lg max-w-xl">
            When the people who built Sui and MultiversX from zero say they trust
            us, we take it seriously. Here&apos;s what some of them said.
          </p>
        </motion.div>

        {/* Hero quote */}
        <motion.figure
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 md:mb-16"
        >
          <div className="relative p-6 md:p-10 rounded-3xl bg-gradient-to-br from-navy-deep to-navy overflow-hidden">
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-grid-dark opacity-30" />

            {/* Glow orbs */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-cyan/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue/20 rounded-full blur-3xl" />

            <div className="relative flex flex-col md:flex-row gap-6 md:gap-10">
              {/* Quote mark */}
              <div className="flex-shrink-0 hidden md:block">
                <svg
                  className="w-16 h-12 text-cyan/30"
                  viewBox="0 0 60 42"
                  fill="currentColor"
                >
                  <path d="M0 42V22C0 10 6 2 18 0v10c-4 2-6 6-6 12h6v20H0zM34 42V22c0-12 6-20 18-22v10c-4 2-6 6-6 12h6v20H34z" />
                </svg>
              </div>

              <div className="flex-1">
                <blockquote className="mb-6">
                  <p className="text-xl md:text-2xl lg:text-3xl font-medium text-white leading-snug">
                    &ldquo;{HERO_QUOTE.quote.split("ecosystems").map((part, i) =>
                      i === 0 ? (
                        <span key={i}>
                          {part}
                          <span className="text-cyan">ecosystems</span>
                        </span>
                      ) : (
                        part.split("core infra").map((p2, j) =>
                          j === 0 ? (
                            <span key={j}>
                              {p2}
                              <span className="border-b-2 border-cyan pb-0.5">
                                core infra
                              </span>
                            </span>
                          ) : (
                            p2
                          )
                        )
                      )
                    )}&rdquo;
                  </p>
                </blockquote>

                <figcaption className="flex items-center gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-cyan to-blue flex items-center justify-center text-white font-bold text-lg shadow-glow">
                    {HERO_QUOTE.initials}
                  </div>
                  <div>
                    <div className="font-display font-semibold text-white">
                      {HERO_QUOTE.name}
                    </div>
                    <div className="font-mono text-xs text-white/60">
                      {HERO_QUOTE.role}
                    </div>
                  </div>
                </figcaption>
              </div>

              {/* NPS badge */}
              <div className="hidden lg:flex flex-col items-center justify-center">
                <div className="font-mono text-xs text-white/40 tracking-wider mb-2">
                  NPS SCORE
                </div>
                <div className="font-display text-4xl font-bold text-gradient">
                  9.6
                </div>
                <div className="font-mono text-xs text-white/40">/ 10</div>
              </div>
            </div>
          </div>
        </motion.figure>

        {/* Featured testimonials */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {FEATURED.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
              className="card p-6 md:p-8 flex flex-col group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-cyan"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg font-medium text-navy leading-snug mb-6 flex-1">
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white font-bold text-sm">
                  {item.initials}
                </div>
                <div>
                  <div className="font-medium text-navy text-sm">
                    {item.name}
                  </div>
                  <div className="font-mono text-xs text-muted">
                    {item.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Small testimonials grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border"
        >
          {SMALL.map((item, idx) => (
            <div
              key={idx}
              className="p-5 bg-white hover:bg-background transition-colors duration-300"
            >
              <p className="text-sm text-muted italic leading-relaxed mb-3">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="text-sm">
                <span className="font-semibold text-navy">{item.name}</span>
                <span className="text-muted"> · {item.role}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
