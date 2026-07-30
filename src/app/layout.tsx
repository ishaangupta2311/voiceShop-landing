import type { Metadata, Viewport } from "next";
import {
  Archivo_Black,
  Baloo_2,
  Fraunces,
  Gabarito,
  IBM_Plex_Mono,
  Manrope,
  Permanent_Marker,
  Sora,
} from "next/font/google";
import ConceptSwitcher from "@/components/ConceptSwitcher";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const baloo = Baloo_2({
  subsets: ["latin"],
  variable: "--font-baloo",
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

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

const gabarito = Gabarito({
  subsets: ["latin"],
  variable: "--font-gabarito",
  display: "swap",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo",
  display: "swap",
});

const marker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marker",
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
  themeColor: "#faf7f1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${baloo.variable} ${fraunces.variable} ${sora.variable} ${plexMono.variable} ${gabarito.variable} ${archivoBlack.variable} ${marker.variable}`}
    >
      <body>
        {children}
        <ConceptSwitcher />
      </body>
    </html>
  );
}
