"use client";

import { motion } from "framer-motion";

const LOGOS = [
  { name: "Mysten Labs" },
  { name: "MultiversX" },
  { name: "Claynosaurz" },
  { name: "Gameloft" },
  { name: "xPortal" },
  { name: "OneFinity" },
  { name: "Materia Prima" },
  { name: "Umbrella" },
  { name: "OneDex" },
  { name: "Boogas" },
];

export default function TrustBar() {
  return (
    <section className="py-8 bg-white border-b border-border relative overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
          {/* Security badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0"
          >
            <div className="flex items-center gap-3 px-4 py-2.5 bg-cyan/10 border border-cyan/20 rounded-full">
              <span
                className="font-display text-2xl font-bold text-cyan"
                style={{ fontFeatureSettings: '"tnum"' }}
              >
                0
              </span>
              <div className="text-sm text-navy font-medium">
                security incidents{" "}
                <span className="text-muted">· 5 years, 25+ products</span>
              </div>
            </div>
          </motion.div>

          {/* Logo marquee */}
          <div
            className="flex-1 overflow-hidden relative"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            }}
          >
            <motion.div
              className="flex gap-0"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...LOGOS, ...LOGOS].map((logo, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 px-6 md:px-8 flex items-center group"
                >
                  <span className="font-display text-base font-semibold text-navy/50 group-hover:text-navy transition-colors duration-200 whitespace-nowrap">
                    {logo.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
