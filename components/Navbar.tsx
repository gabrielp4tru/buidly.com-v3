"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BuidlyMark from "./BuidlyMark";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  const navItems = ["Services", "Work", "Process", "About"];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          padding: scrolled ? "12px 0" : "20px 0",
          background: scrolled ? "rgba(250, 250, 250, 0.9)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          transition: "all 0.3s var(--ease)",
        }}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-3">
            <BuidlyMark size={36} />
            <span
              className="font-display text-xl"
              style={{ color: scrolled ? "var(--ink)" : "var(--white)" }}
            >
              buidly
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 text-sm font-medium rounded-lg transition-colors"
                style={{
                  color: scrolled ? "var(--ink-secondary)" : "var(--white-dim)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = scrolled ? "var(--ink)" : "var(--white)";
                  e.currentTarget.style.background = scrolled
                    ? "var(--bg-warm)"
                    : "rgba(255,255,255,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = scrolled
                    ? "var(--ink-secondary)"
                    : "var(--white-dim)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Status indicator - desktop only */}
            <div
              className="hidden lg:flex items-center gap-2 mono text-xs"
              style={{ color: scrolled ? "var(--ink-muted)" : "var(--white-muted)" }}
            >
              <span className="dot" />
              Accepting Q2 slots
            </div>

            {/* CTA button */}
            <a
              href="#cta"
              className="hidden sm:flex items-center gap-2 h-10 px-5 rounded-lg text-sm font-semibold transition-all"
              style={{
                background: scrolled ? "var(--ink)" : "var(--white)",
                color: scrolled ? "var(--white)" : "var(--ink)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--electric)";
                e.currentTarget.style.color = "var(--bg-dark)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = scrolled ? "var(--ink)" : "var(--white)";
                e.currentTarget.style.color = scrolled ? "var(--white)" : "var(--ink)";
              }}
            >
              Book a call
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

            {/* Mobile menu button */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <motion.span
                animate={{
                  rotate: mobileOpen ? 45 : 0,
                  y: mobileOpen ? 6 : 0,
                }}
                className="w-6 h-0.5 rounded-full"
                style={{ background: scrolled ? "var(--ink)" : "var(--white)" }}
              />
              <motion.span
                animate={{ opacity: mobileOpen ? 0 : 1 }}
                className="w-6 h-0.5 rounded-full"
                style={{ background: scrolled ? "var(--ink)" : "var(--white)" }}
              />
              <motion.span
                animate={{
                  rotate: mobileOpen ? -45 : 0,
                  y: mobileOpen ? -6 : 0,
                }}
                className="w-6 h-0.5 rounded-full"
                style={{ background: scrolled ? "var(--ink)" : "var(--white)" }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ background: "var(--bg-dark)" }}
          >
            <div className="flex flex-col justify-center items-center h-full gap-8">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: idx * 0.1 }}
                  className="display-md"
                  style={{ color: "var(--white)" }}
                >
                  {item}
                </motion.a>
              ))}
              <motion.a
                href="#cta"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
                className="btn btn-primary mt-8"
              >
                Book a call
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
