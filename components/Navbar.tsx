"use client";

import { useEffect, useState } from "react";
import BuidlyMark from "./BuidlyMark";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? "10px 0" : "20px 0",
        transition: "all .3s var(--ease)",
        background: scrolled ? "rgba(255,255,255,.85)" : "transparent",
        backdropFilter: scrolled ? "saturate(180%) blur(18px)" : "none",
        WebkitBackdropFilter: scrolled ? "saturate(180%) blur(18px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div
        className="wrap-wide"
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
      >
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <BuidlyMark size={32} dark={scrolled} />
          <span
            style={{
              fontWeight: 800,
              fontSize: 19,
              letterSpacing: "-0.03em",
              color: scrolled ? "var(--ink)" : "#fff",
            }}
          >
            buidly
          </span>
        </a>

        <nav
          className="nav-links"
          style={{ display: "flex", alignItems: "center", gap: 4 }}
        >
          {["Services", "Work", "Process", "About", "Journal"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                padding: "8px 14px",
                fontSize: 14,
                fontWeight: 500,
                color: scrolled ? "var(--fg2)" : "rgba(255,255,255,.75)",
                borderRadius: 8,
                transition: "color .2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = scrolled ? "var(--ink)" : "#fff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = scrolled
                  ? "var(--fg2)"
                  : "rgba(255,255,255,.75)")
              }
            >
              {item}
            </a>
          ))}
        </nav>

        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <span
            className="mono"
            style={{
              fontSize: 11,
              color: scrolled ? "var(--fg3)" : "rgba(255,255,255,.5)",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--green)",
                boxShadow: "0 0 0 3px rgba(23,178,106,.25)",
              }}
            />
            Q2 slots open
          </span>
          <a
            href="#cta"
            className="btn"
            style={{
              background: scrolled ? "var(--ink)" : "#fff",
              color: scrolled ? "#fff" : "var(--ink)",
              height: 40,
              padding: "0 18px",
              fontSize: 14,
            }}
          >
            Let&apos;s talk
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
      </div>
    </header>
  );
}
