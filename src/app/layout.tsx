import type { Metadata } from "next";
import {
  Archivo_Black,
  Baloo_2,
  Fraunces,
  IBM_Plex_Mono,
  Instrument_Serif,
  Manrope,
} from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-editorial",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poster",
});

const baloo = Baloo_2({
  subsets: ["latin"],
  variable: "--font-round",
});

export const metadata: Metadata = {
  title: {
    default: "Digital Salesman — AI sales for Shopify",
    template: "%s | Digital Salesman",
  },
  description:
    "A voice-first AI sales assistant that helps Shopify shoppers discover products, get answers, and move confidently toward checkout.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${instrumentSerif.variable} ${fraunces.variable} ${plexMono.variable} ${archivoBlack.variable} ${baloo.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
