"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BuidlyMark from "./BuidlyMark";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const navItems = ["Services", "Work", "Process", "About"];

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          padding: scrolled ? "10px 0" : "16px 0",
          background: scrolled ? "rgba(248, 248, 248, 0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid #e0e0e0" : "1px solid transparent",
        }}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2.5">
            <BuidlyMark size={32} />
            <span
              className="font-display text-lg"
              style={{ color: scrolled ? "#0a0a0a" : "#ffffff" }}
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
                className="px-4 py-2 text-sm font-medium rounded-md transition-colors"
                style={{ color: scrolled ? "#5c5c5c" : "rgba(255,255,255,0.7)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = scrolled ? "#0a0a0a" : "#ffffff";
                  e.currentTarget.style.background = scrolled ? "#f2f2f2" : "rgba(255,255,255,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = scrolled ? "#5c5c5c" : "rgba(255,255,255,0.7)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-3">
            {/* Status */}
            <div
              className="hidden lg:flex items-center gap-2 mono text-[11px]"
              style={{ color: scrolled ? "#8c8c8c" : "rgba(255,255,255,0.5)" }}
            >
              <span className="dot" />
              Q2 slots
            </div>

            {/* CTA */}
            <a
              href="#cta"
              className="hidden sm:flex items-center gap-2 h-9 px-4 rounded-md text-sm font-semibold transition-all"
              style={{
                background: scrolled ? "#0a0a0a" : "#ffffff",
                color: scrolled ? "#ffffff" : "#0a0a0a",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#00d4ff";
                e.currentTarget.style.color = "#0a0a0a";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = scrolled ? "#0a0a0a" : "#ffffff";
                e.currentTarget.style.color = scrolled ? "#ffffff" : "#0a0a0a";
              }}
            >
              Book a call
            </a>

            {/* Mobile toggle */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              <motion.span
                animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 5 : 0 }}
                className="w-5 h-0.5 rounded-full"
                style={{ background: scrolled ? "#0a0a0a" : "#ffffff" }}
              />
              <motion.span
                animate={{ opacity: mobileOpen ? 0 : 1 }}
                className="w-5 h-0.5 rounded-full"
                style={{ background: scrolled ? "#0a0a0a" : "#ffffff" }}
              />
              <motion.span
                animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -5 : 0 }}
                className="w-5 h-0.5 rounded-full"
                style={{ background: scrolled ? "#0a0a0a" : "#ffffff" }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden bg-[#0a0a0a]"
          >
            <div className="flex flex-col justify-center items-center h-full gap-6">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ delay: idx * 0.08 }}
                  className="display-md text-white"
                >
                  {item}
                </motion.a>
              ))}
              <motion.a
                href="#cta"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ delay: 0.35 }}
                className="btn btn-primary mt-6"
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
