import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Buidly — Berlin Tech Hub | UX-First Web3 & Business Technology",
  description:
    "Senior engineering studio with UX-first approach. Complex Web3 and business technology projects. 25+ products shipped, $100M+ secured. Berlin.",
  keywords: ["Web3", "Blockchain", "UX Design", "Software Development", "Berlin", "Tech Hub", "Smart Contracts", "SaaS"],
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} bg-[#f8f8f8]`}
    >
      <body>{children}</body>
    </html>
  );
}
