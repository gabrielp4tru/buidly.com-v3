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
    <section className="relative py-6 bg-white border-b border-[#e0e0e0]">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
          {/* Zero incidents badge */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 px-4 py-2 rounded-full bg-[#f2f2f2] border border-[#e0e0e0] shrink-0"
          >
            <span className="font-display text-2xl text-[#ff3b30]">0</span>
            <div className="text-sm">
              <span className="text-[#0a0a0a] font-medium">security incidents</span>
              <span className="text-[#8c8c8c]"> / 5 yrs</span>
            </div>
          </motion.div>

          {/* Marquee */}
          <div
            className="flex-1 overflow-hidden relative"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div className="marquee-track">
              {[...LOGOS, ...LOGOS].map((name, idx) => (
                <div
                  key={idx}
                  className="flex items-center px-6 shrink-0 transition-opacity"
                  style={{ opacity: 0.4 }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.4")}
                >
                  <span className="font-display text-sm text-[#0a0a0a] whitespace-nowrap tracking-tight">
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
