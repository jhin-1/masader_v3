"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, Award } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function CertificationsGauge() {
  const [inView, setInView] = useState(false);

  // SVG Gauge calculations for 90%
  const size = 300;
  const strokeWidth = 18;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const targetPercent = 0.9;
  const strokeDashoffset = circumference * (1 - targetPercent);

  return (
    <section
      id="sustainability"
      className="relative py-24 sm:py-32 bg-[#061A12] border-t border-[#1E4635] overflow-hidden"
    >
      {/* Radial background ambient */}
      <div className="pointer-events-none absolute top-1/2 left-1/3 -translate-y-1/2 w-[650px] h-[500px] bg-gradient-to-r from-[#154632]/25 via-[#4ADE80]/10 to-transparent blur-3xl -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Certifications Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B261C] border border-[#1E4635] text-[#E5A93C] text-xs font-semibold uppercase tracking-widest">
              <span>SUSTAINABILITY &amp; CERTIFICATIONS</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8FAFC] tracking-tight leading-[1.15]">
              See the ISCC EU certificate and our GHG methodology
            </h2>

            <p className="text-base sm:text-lg text-[#B8D0C5] leading-relaxed">
              Certificate number, scope, mass-balance approach, and the circular-economy impact
              behind every tonne we ship.
            </p>

            {/* Button (Gold): View Certifications */}
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-xs sm:text-sm uppercase tracking-wider bg-gradient-to-r from-[#E5A93C] via-[#F3C66F] to-[#E5A93C] text-[#061A12] shadow-lg shadow-[#E5A93C]/20 hover:shadow-[#E5A93C]/35 hover:scale-[1.02] transition-all shimmer-effect"
              >
                <ShieldCheck className="w-4 h-4 text-[#061A12]" />
                <span>View Certifications</span>
                <ArrowRight className="w-4 h-4 text-[#061A12]" />
              </a>
            </div>
          </div>

          {/* Right Column: Animated Radial 90% Gauge */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <motion.div
              onViewportEnter={() => setInView(true)}
              viewport={{ once: true, margin: "-80px" }}
              className="relative p-8 rounded-3xl bg-[#0B261C]/80 border border-[#1E4635] shadow-2xl flex flex-col items-center select-none"
            >
              {/* Radial backdrop glow */}
              <div className="absolute inset-8 rounded-full bg-[#4ADE80]/15 blur-2xl pointer-events-none" />

              {/* SVG Radial Gauge */}
              <div className="relative w-[280px] sm:w-[300px] h-[280px] sm:h-[300px] flex items-center justify-center">
                <svg
                  width={size}
                  height={size}
                  viewBox={`0 0 ${size} ${size}`}
                  className="rotate-[-90deg] transform"
                >
                  {/* Background Track */}
                  <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="#061A12"
                    strokeWidth={strokeWidth}
                  />
                  <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="#1E4635"
                    strokeWidth={strokeWidth - 6}
                    strokeDasharray="4 8"
                  />

                  {/* Gradient Definition */}
                  <defs>
                    <linearGradient id="gauge-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#E5A93C" />
                      <stop offset="50%" stopColor="#4ADE80" />
                      <stop offset="100%" stopColor="#22C55E" />
                    </linearGradient>
                  </defs>

                  {/* Animated Progress Circle up to 90% */}
                  <motion.circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="url(#gauge-gradient)"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset: inView ? strokeDashoffset : circumference }}
                    transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                  />
                </svg>

                {/* Inner Center Metrics: 90% and GHG REDUCTION */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <div className="flex items-baseline justify-center font-serif text-6xl sm:text-7xl font-bold text-[#F8FAFC]">
                    <span>90%</span>
                  </div>

                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#4ADE80] mt-1">
                    GHG REDUCTION
                  </span>
                </div>
              </div>

              {/* Status Badge below Gauge */}
              <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#061A12] border border-[#1E4635] text-[11px] font-mono text-[#4ADE80]">
                <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-ping" />
                <span>ISCC EU Verified Methodology</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Full-Width Sub-section: WHERE IT GOES */}
        <div className="mt-20 pt-16 border-t border-[#1E4635] text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B261C] border border-[#1E4635] text-[#E5A93C] text-xs font-semibold uppercase tracking-widest">
            <span>WHERE IT GOES</span>
          </div>

          <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#F8FAFC] leading-relaxed font-normal">
            Exporting across Europe and Africa, Ex-Works Alexandria — and supplying Egypt&apos;s
            own Suez Canal Authority.
          </p>
        </div>
      </Container>
    </section>
  );
}
