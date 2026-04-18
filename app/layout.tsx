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
    "Senior engineering studio based in Berlin. We build complex Web3 and business technology projects with a UX-first approach. 25+ products shipped, $100M+ in critical infrastructure.",
  keywords: [
    "Berlin tech hub",
    "Web3 development",
    "UX design",
    "business technology",
    "senior engineering",
    "product studio",
  ],
  authors: [{ name: "Buidly" }],
  openGraph: {
    title: "Buidly — Berlin Tech Hub | UX-First Web3 & Business Technology",
    description:
      "Senior engineering studio based in Berlin. We build complex Web3 and business technology projects with a UX-first approach.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buidly — Berlin Tech Hub",
    description: "UX-First Web3 & Business Technology Studio",
  },
};

export const viewport: Viewport = {
  themeColor: "#01C8F0",
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
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} bg-[#FAFBFC]`}
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
