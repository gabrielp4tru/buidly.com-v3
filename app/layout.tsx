import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Buidly — Your next app, built to last, shipped in weeks.",
  description:
    "Senior engineering studio. Web, mobile, SaaS, AI, Web3. 25+ products shipped, $100M+ in critical infrastructure, zero security incidents.",
};

const DEFAULT_ACCENT = "#0b80ef";
const DEFAULT_DENSITY = "default";
const DEFAULT_PATTERN = "on";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ ["--accent" as string]: DEFAULT_ACCENT }}>
      <body data-density={DEFAULT_DENSITY} data-pattern={DEFAULT_PATTERN}>
        {/* Expose tweak defaults for the Tweaks panel (no DOM mutation here — avoids hydration mismatch) */}
        <Script id="tweak-defaults" strategy="beforeInteractive">
          {`window.__TWEAK_DEFAULTS = { accent: 'blue', density: 'default', pattern: true };`}
        </Script>
        {children}
      </body>
    </html>
  );
}
