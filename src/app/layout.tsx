import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Cairo } from "next/font/google";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-arabic",
  display: "swap",
  weight: ["700", "900"],
});

export const metadata: Metadata = {
  title: "Masader | مصادر — Precision Biofuel & Used Oil Recycling",
  description:
    "Every drop of used oil finds its way back into the loop. ISCC EU certified European supply chain compliance, precision lab testing, and verified GHG emission reductions.",
  keywords: [
    "Masader",
    "Biofuel",
    "UCO",
    "Used Cooking Oil",
    "ISCC EU",
    "Renewable Energy",
    "Egypt",
    "Circular Economy",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${plusJakarta.variable} ${cairo.variable} scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="bg-[#061A12] text-[#B8D0C5] antialiased selection:bg-[#E5A93C]/30 selection:text-[#F8FAFC]"
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
