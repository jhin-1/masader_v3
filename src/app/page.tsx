import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { MarqueeTicker } from "@/components/hero/MarqueeTicker";
import { GovernedSteps } from "@/components/sections/GovernedSteps";
import { ExportSpecifications } from "@/components/sections/ExportSpecifications";
import { CircularModel } from "@/components/sections/CircularModel";
import { CertificationsGauge } from "@/components/sections/CertificationsGauge";
import { ProgramUpdates } from "@/components/sections/ProgramUpdates";
import { CtaBannerFooter } from "@/components/sections/CtaBannerFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#061A12] text-[#F8FAFC] overflow-x-hidden selection:bg-[#E5A93C]/30 selection:text-[#F8FAFC]">
      {/* 1. Floating Glass Navbar */}
      <Navbar />

      {/* 2. Hero Section with Living Watermark & Counter Metrics */}
      <Hero />

      {/* Marquee Ticker */}
      <MarqueeTicker />

      {/* 3. Three Governed Steps with Sticky Layout & Progress Timeline */}
      <GovernedSteps />

      {/* 4. Export Specifications & Living Lab Illustration */}
      <ExportSpecifications />

      {/* 5. Circular Model & Interactive Multi-Orbit Loop */}
      <CircularModel />

      {/* 6. ISCC EU Certifications & Animated Radial 80% Gauge */}
      <CertificationsGauge />

      {/* 7. Program Updates & Market Intelligence */}
      <ProgramUpdates />

      {/* 8. Luxury CTA Banner & Corporate Footer */}
      <CtaBannerFooter />
    </main>
  );
}
