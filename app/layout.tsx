import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Buidly — Tech Hub | UX-First Web3 & Business Technology | Berlin",
  description:
    "Senior engineering studio. UX-first approach for complex Web3 and business technology projects. 25+ products shipped, $100M+ in critical infrastructure. Based in Berlin.",
  keywords: ["Web3", "Blockchain", "UX Design", "Software Development", "Berlin", "Tech Hub", "Smart Contracts", "SaaS"],
};

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#fafafa]">
      <body>{children}</body>
    </html>
  );
}
