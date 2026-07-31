import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope, Sora } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "VoiceShop — a voice-first AI sales agent for Shopify",
    template: "%s | VoiceShop",
  },
  description:
    "VoiceShop is a voice-first AI sales agent for Shopify storefronts. Shoppers speak, the storefront responds — grounded in your real catalog and cart.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070a10",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${fraunces.variable} ${sora.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
