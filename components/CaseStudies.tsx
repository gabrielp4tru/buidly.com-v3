"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

type Metric = { v: string; u: string };
type CaseData = {
  num: string;
  client: string;
  chain: string;
  title: string;
  tagline: string;
  desc: string;
  metrics: Metric[];
  mock: "dashboard" | "bridge" | "mobile";
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
    mock: "dashboard",
    accent: "#01C8F0",
    quote: '"Buidly pushing infra forward on Sui where it matters."',
    quoteBy: "George Danezis · Chief Scientist, Mysten Labs",
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
    mock: "bridge",
    accent: "#0198FF",
    quote: '"The kind of infrastructure work most teams can\'t even scope, let alone ship."',
    quoteBy: "Lucian Mincu · Co-Founder, MultiversX",
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
    mock: "mobile",
    accent: "#01C8F0",
    quote: '"Buidly is the kind of best-kept-secret team I want all to myself."',
    quoteBy: "Nypam · Head of Product, Claynosaurz",
  },
];

export default function CaseStudies() {
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
      id="work"
      className="section bg-background border-t border-border relative overflow-hidden"
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
          <div className="eyebrow mb-4">Selected work · 2024-2025</div>
          <h2 className="headline-lg text-navy mb-6">
            Production code.
            <br />
            Real <span className="text-gradient">outcomes.</span>
          </h2>
          <p className="body-lg max-w-xl">
            Three representative projects. The rest — and the ones under NDA —
            live in our portfolio. Every case study links to a longer write-up.
          </p>
        </motion.div>
      </div>

      {/* Case cards */}
      <div className="space-y-6 md:space-y-8">
        {CASES.map((c, idx) => (
          <CaseStudyCard key={c.num} data={c} flip={idx % 2 === 1} isVisible={isVisible} delay={idx * 0.2} />
        ))}
      </div>

      {/* CTA */}
      <div className="container mt-12 text-center">
        <a href="#" className="btn btn-secondary">
          See all 25+ projects
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
      </div>
    </section>
  );
}

function CaseStudyCard({
  data,
  flip,
  isVisible,
  delay,
}: {
  data: CaseData;
  flip: boolean;
  isVisible: boolean;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className="container"
    >
      <article className="card overflow-hidden">
        <div
          className={`grid lg:grid-cols-2 ${
            flip ? "lg:[direction:rtl] lg:*:[direction:ltr]" : ""
          }`}
        >
          {/* Content */}
          <div className="p-6 md:p-10 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="font-mono text-xs text-muted tracking-wider">
                  CASE / {data.num}
                </span>
                <span
                  className="px-2.5 py-1 rounded text-xs font-mono font-medium"
                  style={{
                    backgroundColor: `${data.accent}15`,
                    color: data.accent,
                  }}
                >
                  {data.chain}
                </span>
                <span className="text-sm text-muted">
                  · Client: <strong className="text-navy">{data.client}</strong>
                </span>
              </div>

              {/* Title */}
              <h3 className="headline-md mb-3">{data.title}</h3>
              <p className="text-lg font-medium text-navy mb-4 leading-snug">
                {data.tagline}
              </p>
              <p className="body-md mb-8 max-w-lg">{data.desc}</p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border mb-8">
                {data.metrics.map((m, i) => (
                  <div key={i}>
                    <div
                      className="font-display text-2xl md:text-3xl font-bold text-navy"
                      style={{ fontFeatureSettings: '"tnum"' }}
                    >
                      {m.v}
                    </div>
                    <div className="font-mono text-[10px] text-muted tracking-wider mt-1">
                      {m.u.toUpperCase()}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <blockquote
                className="p-4 rounded-r-xl border-l-2"
                style={{
                  borderColor: data.accent,
                  backgroundColor: `${data.accent}08`,
                }}
              >
                <p className="text-sm font-medium text-navy mb-2">
                  {data.quote}
                </p>
                <cite className="text-xs font-mono text-muted not-italic">
                  {data.quoteBy}
                </cite>
              </blockquote>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a href="#" className="btn btn-tertiary">
                Read case study
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
            </div>
          </div>

          {/* Visual */}
          <div
            className="relative p-8 md:p-12 flex items-center justify-center border-t lg:border-t-0 border-border overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${data.accent}08 0%, ${data.accent}02 100%)`,
              borderLeft: flip ? "none" : undefined,
              borderRight: flip ? undefined : "none",
            }}
          >
            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `linear-gradient(${data.accent}12 1px, transparent 1px), linear-gradient(90deg, ${data.accent}12 1px, transparent 1px)`,
                backgroundSize: "32px 32px",
              }}
            />
            <CaseMockup type={data.mock} accent={data.accent} />
          </div>
        </div>
      </article>
    </motion.div>
  );
}

function CaseMockup({
  type,
  accent,
}: {
  type: CaseData["mock"];
  accent: string;
}) {
  if (type === "dashboard") return <DashboardMock accent={accent} />;
  if (type === "bridge") return <BridgeMock accent={accent} />;
  if (type === "mobile") return <MobileMock accent={accent} />;
  return null;
}

function DashboardMock({ accent }: { accent: string }) {
  return (
    <div
      className="w-full max-w-[480px] rounded-2xl overflow-hidden shadow-2xl"
      style={{
        background: "linear-gradient(180deg, #1A1A2E 0%, #282850 100%)",
        transform: "perspective(2000px) rotateY(-3deg)",
      }}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-navy-deep border-b border-white/10">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 font-mono text-[10px] text-white/30 text-center">
          surflux.buidly.dev
        </div>
      </div>

      <div className="p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <div className="font-mono text-[9px] text-white/40 tracking-wider mb-1">
              FLUX STREAM / MAINNET
            </div>
            <div className="text-sm font-semibold text-white">DeepBook events</div>
          </div>
          <div className="font-mono text-[10px]" style={{ color: accent }}>
            <span className="inline-block w-1.5 h-1.5 rounded-full mr-1" style={{ backgroundColor: accent }} />
            live · 2,481 ev/s
          </div>
        </div>

        {/* Chart */}
        <div className="h-24 flex items-end gap-0.5 mb-4">
          {Array.from({ length: 26 }).map((_, i) => {
            const h = 30 + Math.sin(i * 0.4) * 20 + i * 3;
            return (
              <div
                key={i}
                className="flex-1 rounded-sm"
                style={{
                  height: `${Math.min(h, 100)}%`,
                  background: `linear-gradient(180deg, ${accent} 0%, ${accent}33 100%)`,
                }}
              />
            );
          })}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[
            { l: "Indexed 24h", v: "12.4M" },
            { l: "Subscribers", v: "847" },
            { l: "Uptime", v: "99.98%" },
          ].map((m, i) => (
            <div
              key={i}
              className="p-2.5 rounded-lg bg-white/5 border border-white/5"
            >
              <div className="font-mono text-[8px] text-white/40 tracking-wider mb-1">
                {m.l.toUpperCase()}
              </div>
              <div className="text-sm font-bold text-white">{m.v}</div>
            </div>
          ))}
        </div>

        {/* Terminal */}
        <div className="p-3 rounded-lg bg-black/40 font-mono text-[10px] leading-relaxed">
          <div className="text-white/30">
            [14:32:04] <span style={{ color: accent }}>tx 0x4f..8ea</span> order_filled 2,840 SUI
          </div>
          <div className="text-white/30">
            [14:32:04] <span style={{ color: accent }}>tx 0x7b..2cd</span> pool_created USDC/SUI
          </div>
          <div className="text-white/30">
            [14:32:05] <span style={{ color: accent }}>tx 0x91..4fa</span> liquidity_added 14k
          </div>
        </div>
      </div>
    </div>
  );
}

function BridgeMock({ accent }: { accent: string }) {
  return (
    <div
      className="w-full max-w-[400px] rounded-2xl bg-white border border-border shadow-2xl overflow-hidden"
      style={{ transform: "perspective(2000px) rotateY(3deg)" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-border">
        <div className="font-display font-semibold text-navy">OneFinity Bridge</div>
        <span className="font-mono text-[10px]" style={{ color: accent }}>
          <span className="inline-block w-1.5 h-1.5 rounded-full mr-1" style={{ backgroundColor: accent }} />
          Mainnet
        </span>
      </div>

      <div className="p-5">
        {/* From */}
        <div className="font-mono text-[10px] text-muted tracking-wider mb-2">FROM</div>
        <div className="flex items-center justify-between p-4 bg-background rounded-xl mb-3">
          <div>
            <div className="text-sm text-muted mb-1">MultiversX</div>
            <div className="font-display text-2xl font-bold text-navy">2,480.00</div>
          </div>
          <div className="px-3 py-2 bg-white border border-border rounded-lg font-semibold text-sm">
            EGLD
          </div>
        </div>

        {/* Arrow */}
        <div className="text-center my-3">
          <div
            className="inline-flex w-10 h-10 rounded-full items-center justify-center text-white"
            style={{ backgroundColor: accent }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="2">
              <path d="M8 2v12M3 9l5 5 5-5" />
            </svg>
          </div>
        </div>

        {/* To */}
        <div className="font-mono text-[10px] text-muted tracking-wider mb-2">TO</div>
        <div className="flex items-center justify-between p-4 bg-background rounded-xl mb-4">
          <div>
            <div className="text-sm text-muted mb-1">Ethereum</div>
            <div className="font-display text-2xl font-bold text-navy">28.4127</div>
          </div>
          <div className="px-3 py-2 bg-white border border-border rounded-lg font-semibold text-sm">
            ETH
          </div>
        </div>

        {/* Details */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 p-3 bg-background rounded-lg text-sm mb-4">
          <span className="text-muted">Network fee</span>
          <span className="text-right font-medium text-navy">€1.84</span>
          <span className="text-muted">Bridge time</span>
          <span className="text-right font-medium text-navy">~ 4m 20s</span>
          <span className="text-muted">Route audit</span>
          <span className="text-right font-medium text-[#28c840]">Verified</span>
        </div>

        <button
          className="w-full h-12 rounded-xl font-semibold text-white"
          style={{ backgroundColor: accent }}
        >
          Bridge assets
        </button>
      </div>
    </div>
  );
}

function MobileMock({ accent }: { accent: string }) {
  return (
    <div
      className="relative w-[260px] h-[500px] rounded-[40px] overflow-hidden shadow-2xl"
      style={{
        background: "linear-gradient(180deg, #1A1A2E 0%, #282850 100%)",
        transform: "perspective(2000px) rotateY(-5deg)",
      }}
    >
      {/* Notch */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full" />

      {/* Content */}
      <div className="pt-12 px-5">
        {/* Status */}
        <div className="flex items-center justify-between mb-6">
          <div className="font-mono text-[9px] text-white/40">MINT / POPKINS</div>
          <div className="font-mono text-[10px]" style={{ color: accent }}>
            <span className="inline-block w-1.5 h-1.5 rounded-full mr-1 animate-pulse" style={{ backgroundColor: accent }} />
            LIVE
          </div>
        </div>

        {/* Image placeholder */}
        <div
          className="w-full aspect-square rounded-2xl mb-4 flex items-center justify-center"
          style={{ background: `linear-gradient(135deg, ${accent}20, ${accent}05)` }}
        >
          <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20" />
        </div>

        {/* Info */}
        <div className="text-center mb-4">
          <div className="text-lg font-bold text-white mb-1">Popkin #4,821</div>
          <div className="font-mono text-xs text-white/50">0.42 SOL</div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="p-3 rounded-xl bg-white/5 text-center">
            <div className="font-mono text-[9px] text-white/40 mb-1">MINTED</div>
            <div className="text-sm font-bold text-white">8,421 / 10k</div>
          </div>
          <div className="p-3 rounded-xl bg-white/5 text-center">
            <div className="font-mono text-[9px] text-white/40 mb-1">QUEUE</div>
            <div className="text-sm font-bold text-white">2,841</div>
          </div>
        </div>

        {/* Button */}
        <button
          className="w-full h-12 rounded-xl font-bold text-white"
          style={{ backgroundColor: accent }}
        >
          Mint Now
        </button>
      </div>
    </div>
  );
}
