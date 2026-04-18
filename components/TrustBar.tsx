"use client";

import { motion } from "framer-motion";

const LOGOS = [
  "Mysten Labs",
  "MultiversX",
  "Claynosaurz",
  "Gameloft",
  "xPortal",
  "OneFinity",
  "Materia Prima",
  "Umbrella",
  "OneDex",
  "Boogas",
];

export default function TrustBar() {
  return (
    <section
      className="relative py-8 overflow-hidden"
      style={{ background: "var(--bg-card)", borderBottom: "1px solid var(--border)" }}
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          {/* Stats badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 px-5 py-3 rounded-full shrink-0"
            style={{
              background: "var(--bg-warm)",
              border: "1px solid var(--border)",
            }}
          >
            <span
              className="font-display text-3xl"
              style={{ color: "var(--coral)", fontFeatureSettings: '"tnum"' }}
            >
              0
            </span>
            <div className="text-sm">
              <span style={{ color: "var(--ink)" }}>security incidents</span>
              <span style={{ color: "var(--ink-muted)" }}> / 5 years, 25+ products</span>
            </div>
          </motion.div>

          {/* Marquee logos */}
          <div
            className="flex-1 overflow-hidden relative"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            }}
          >
            <div className="marquee-track">
              {[...LOGOS, ...LOGOS].map((name, idx) => (
                <div
                  key={idx}
                  className="flex items-center px-8 shrink-0"
                  style={{ opacity: 0.5 }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.5")}
                >
                  <span
                    className="font-display text-base whitespace-nowrap"
                    style={{ color: "var(--ink)", letterSpacing: "-0.02em" }}
                  >
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
