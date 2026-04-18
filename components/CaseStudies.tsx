"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Metric = { v: string; u: string };
type CaseData = {
  num: string;
  client: string;
  chain: string;
  title: string;
  tagline: string;
  desc: string;
  metrics: Metric[];
  accent: string;
  quote: string;
  quoteBy: string;
};

const CASES: CaseData[] = [
  {
    num: "01",
    client: "Mysten Labs",
    chain: "Sui",
    title: "Surflux",
    tagline: "The data layer for Sui Network.",
    desc: "Real-time data infrastructure powering Sui's developer ecosystem — flux streams, NFT Indexing API, DeepBook Indexing, gRPC. Built from zero in 11 weeks, now in production across 12+ major dApps.",
    metrics: [
      { v: "11", u: "weeks to prod" },
      { v: "340M+", u: "events indexed" },
      { v: "42ms", u: "p95 latency" },
    ],
    accent: "#00d4ff",
    quote: "Buidly pushing infra forward on Sui where it matters.",
    quoteBy: "George Danezis / Chief Scientist, Mysten Labs",
  },
  {
    num: "02",
    client: "OneFinity",
    chain: "MultiversX",
    title: "Cross-chain bridge",
    tagline: "A sovereign blockchain and bridge handling $100M+ in TVL.",
    desc: "Custom appchain + production bridge to Ethereum, Solana, MultiversX. Zero-downtime deployment, audited smart contracts, and monitoring infrastructure handling $100M+ in user assets.",
    metrics: [
      { v: "$100M+", u: "total value" },
      { v: "0", u: "incidents" },
      { v: "4", u: "chains bridged" },
    ],
    accent: "#ff4757",
    quote: "The kind of infrastructure work most teams cannot even scope, let alone ship.",
    quoteBy: "Lucian Mincu / Co-Founder, MultiversX",
  },
  {
    num: "03",
    client: "Claynosaurz",
    chain: "Solana",
    title: "Popkins NFT drop",
    tagline: "NFT infrastructure at scale for one of Solana's biggest brands.",
    desc: "High-traffic minting infrastructure, backend, and real-time inventory. Zero-failure drop handling peak load from hundreds of thousands of concurrent users — every mint settled, every NFT delivered.",
    metrics: [
      { v: "180k", u: "concurrent users" },
      { v: "99.98%", u: "uptime" },
      { v: "12s", u: "mint settlement" },
    ],
    accent: "#c8ff00",
    quote: "Buidly is the kind of best-kept-secret team I want all to myself.",
    quoteBy: "Nypam / Head of Product, Claynosaurz",
  },
];

export default function CaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="work"
      ref={ref}
      className="section-lg relative"
      style={{ background: "var(--bg-warm)", borderTop: "1px solid var(--border)" }}
    >
      <div className="container mb-16 lg:mb-20">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="tag tag-light mb-6">Selected work / 2024-2025</div>
            <h2 className="display-lg">
              Production code.
              <br />
              Real <span style={{ color: "var(--electric)" }}>outcomes.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg max-w-md"
            style={{ color: "var(--ink-muted)" }}
          >
            Three representative projects. The rest — and the ones under NDA — live in our
            portfolio. Every case study links to a longer write-up.
          </motion.p>
        </div>
      </div>

      {/* Case studies */}
      <div className="space-y-8">
        {CASES.map((c, idx) => (
          <CaseStudyCard key={c.num} data={c} index={idx} />
        ))}
      </div>

      {/* See all CTA */}
      <div className="container mt-12 text-center">
        <a href="#" className="btn btn-secondary">
          See all 25+ projects
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
      </div>
    </section>
  );
}

function CaseStudyCard({ data, index }: { data: CaseData; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const flip = index % 2 === 1;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="container"
    >
      <article
        className="card overflow-hidden"
        style={{ background: "var(--bg-card)" }}
      >
        <div
          className={`flex flex-col ${
            flip ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          {/* Content side */}
          <div className="flex-1 p-8 lg:p-12 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span
                  className="mono text-xs"
                  style={{ color: "var(--ink-subtle)", letterSpacing: "0.1em" }}
                >
                  CASE / {data.num}
                </span>
                <span
                  className="px-2 py-1 rounded text-xs font-medium mono"
                  style={{
                    background: data.accent + "20",
                    color: data.accent,
                  }}
                >
                  {data.chain}
                </span>
                <span className="text-sm" style={{ color: "var(--ink-muted)" }}>
                  / Client: <strong style={{ color: "var(--ink)" }}>{data.client}</strong>
                </span>
              </div>

              {/* Title */}
              <h3 className="display-md mb-3">{data.title}</h3>
              <p
                className="text-xl font-medium mb-4"
                style={{ color: "var(--ink)" }}
              >
                {data.tagline}
              </p>
              <p
                className="text-base mb-8 max-w-lg"
                style={{ color: "var(--ink-muted)" }}
              >
                {data.desc}
              </p>

              {/* Metrics */}
              <div
                className="grid grid-cols-3 gap-4 py-6 mb-8"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                {data.metrics.map((m, i) => (
                  <div key={i}>
                    <div
                      className="font-display text-2xl lg:text-3xl mb-1"
                      style={{ fontFeatureSettings: '"tnum"' }}
                    >
                      {m.v}
                    </div>
                    <div
                      className="mono text-xs"
                      style={{ color: "var(--ink-muted)" }}
                    >
                      {m.u.toUpperCase()}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <blockquote
                className="p-5 rounded-lg"
                style={{
                  background: "var(--bg-warm)",
                  borderLeft: `3px solid ${data.accent}`,
                }}
              >
                <p
                  className="text-base font-medium mb-2"
                  style={{ color: "var(--ink)" }}
                >
                  &ldquo;{data.quote}&rdquo;
                </p>
                <cite
                  className="mono text-xs not-italic"
                  style={{ color: "var(--ink-muted)" }}
                >
                  {data.quoteBy}
                </cite>
              </blockquote>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a href="#" className="btn btn-tertiary">
                Read case study
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            </div>
          </div>

          {/* Visual side */}
          <div className="flex-1 relative min-h-[400px] lg:min-h-0 flex items-center justify-center p-8 lg:p-12">
            {/* Background gradient */}
            <div
              className="absolute inset-0 pattern-grid opacity-50"
              style={{
                background: `linear-gradient(135deg, ${data.accent}08 0%, ${data.accent}02 100%)`,
              }}
            />

            {/* Mockup placeholder */}
            <div
              className="relative w-full max-w-md rounded-xl overflow-hidden"
              style={{
                background: "var(--bg-dark)",
                boxShadow: `0 40px 80px -20px ${data.accent}30`,
              }}
            >
              {/* Terminal header */}
              <div
                className="flex items-center gap-2 px-4 py-3"
                style={{ borderBottom: "1px solid var(--border-dark)" }}
              >
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
                </div>
                <div className="flex-1 text-center mono text-xs" style={{ color: "var(--white-subtle)" }}>
                  {data.title.toLowerCase().replace(/ /g, "-")}.buidly.dev
                </div>
              </div>

              {/* Content area */}
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <div className="mono text-xs" style={{ color: data.accent }}>
                    ● LIVE
                  </div>
                  <div className="mono text-xs" style={{ color: "var(--white-subtle)" }}>
                    {data.chain.toUpperCase()}
                  </div>
                </div>

                {/* Chart bars */}
                <div className="flex items-end gap-1 h-24">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-sm"
                      style={{
                        background: `linear-gradient(180deg, ${data.accent}, ${data.accent}40)`,
                      }}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${30 + Math.random() * 70}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.03 }}
                    />
                  ))}
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-2">
                  {data.metrics.slice(0, 3).map((m, i) => (
                    <div
                      key={i}
                      className="rounded-lg p-3"
                      style={{ background: "rgba(255,255,255,0.05)" }}
                    >
                      <div className="mono text-xs mb-1" style={{ color: "var(--white-subtle)" }}>
                        {m.u.toUpperCase().slice(0, 8)}
                      </div>
                      <div className="font-display text-lg" style={{ color: "var(--white)" }}>
                        {m.v}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </motion.div>
  );
}
