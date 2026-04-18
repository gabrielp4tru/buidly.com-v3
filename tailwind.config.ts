import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          DEFAULT: "#01C8F0",
          bright: "#2DD4F5",
          deep: "#00A8CC",
          glow: "rgba(1, 200, 240, 0.15)",
        },
        blue: {
          DEFAULT: "#0198FF",
          deep: "#006DFF",
          bright: "#1B86F7",
        },
        navy: {
          DEFAULT: "#282850",
          deep: "#1A1A2E",
          light: "#3D3D6B",
        },
        background: "#FAFBFC",
        foreground: "#282850",
        muted: {
          DEFAULT: "#64748B",
          foreground: "#94A3B8",
        },
        border: "#E2E8F0",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "headline-xl": [
          "clamp(2.5rem, 8vw, 5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.03em" },
        ],
        "headline-lg": [
          "clamp(2rem, 5vw, 3.5rem)",
          { lineHeight: "1.1", letterSpacing: "-0.025em" },
        ],
        "headline-md": [
          "clamp(1.5rem, 3vw, 2rem)",
          { lineHeight: "1.15", letterSpacing: "-0.02em" },
        ],
        "headline-sm": [
          "clamp(1.125rem, 2vw, 1.5rem)",
          { lineHeight: "1.2", letterSpacing: "-0.015em" },
        ],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      borderRadius: {
        xl: "16px",
        "2xl": "24px",
        "3xl": "32px",
      },
      boxShadow: {
        glow: "0 0 40px rgba(1, 200, 240, 0.15)",
        "glow-strong": "0 0 60px rgba(1, 200, 240, 0.25)",
        "glow-intense": "0 4px 32px rgba(1, 200, 240, 0.5)",
      },
      animation: {
        "marquee": "marquee 30s linear infinite",
        "float": "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "gradient-rotate": "gradient-rotate 3s linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 4px 16px rgba(1, 200, 240, 0.3)" },
          "50%": { boxShadow: "0 4px 32px rgba(1, 200, 240, 0.5)" },
        },
        "gradient-rotate": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
