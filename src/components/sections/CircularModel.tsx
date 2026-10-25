"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Cpu, RefreshCw } from "lucide-react";
import { Container } from "@/components/ui/Container";

interface Pillar {
  id: number;
  title: string;
  subtitle: string;
  content: React.ReactNode;
  icon: React.ElementType;
  statTitle: string;
  statValue: string;
}

const PILLARS: Pillar[] = [
  {
    id: 0,
    title: "Integrity",
    subtitle: "Audited & Verified Custody",
    content: (
      <span>
        Honest specifications and full traceability, audited against EU requirements — not
        asserted, demonstrated.
      </span>
    ),
    icon: ShieldCheck,
    statTitle: "Audit Standard",
    statValue: "ISCC EU Demonstrable",
  },
  {
    id: 1,
    title: "Technology Edge",
    subtitle: "Engineered Process Trains",
    content: (
      <span>
        Every process unit engineered with our technology partner,{" "}
        <span className="text-[#4ADE80] font-semibold">
          CARBON Engineering &amp; Consultancy
        </span>.
      </span>
    ),
    icon: Cpu,
    statTitle: "Engineering",
    statValue: "CARBON Engineered",
  },
  {
    id: 2,
    title: "Diversity & Agility",
    subtitle: "Direct Feedstock Operations",
    content: (
      <span>
        Flexible across feedstocks, direct in how we deal with buyers and suppliers — no rigid
        terms.
      </span>
    ),
    icon: RefreshCw,
    statTitle: "Flexibility",
    statValue: "Multi-Feedstock Ready",
  },
];

export function CircularModel() {
  const [activePillar, setActivePillar] = useState<number>(0);

  return (
    <section id="model" className="relative py-24 sm:py-32 bg-[#061A12] border-t border-[#1E4635] overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-br from-[#154632]/25 via-[#4ADE80]/10 to-transparent rounded-full blur-3xl -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: 3 Pillars */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B261C] border border-[#1E4635] text-[#E5A93C] text-xs font-semibold uppercase tracking-widest mb-4">
                <span>WHY MASADER</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8FAFC] tracking-tight leading-[1.15] mb-4">
                A model built for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ADE80] via-[#22C55E] to-[#E5A93C]">
                  one purpose
                </span>
              </h2>

              <p className="text-base text-[#B8D0C5] leading-relaxed">
                Empowering the international green transition by turning spent oil into a strategic
                decarbonization asset through rigorous sustainability governance.
              </p>
            </div>

            {/* Pillar Selector Cards */}
            <div className="space-y-4">
              {PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                const isActive = activePillar === pillar.id;
                return (
                  <div
                    key={pillar.id}
                    onMouseEnter={() => setActivePillar(pillar.id)}
                    onClick={() => setActivePillar(pillar.id)}
                    className={`cursor-pointer rounded-2xl p-5 sm:p-6 transition-all duration-300 border ${
                      isActive
                        ? "bg-[#0B261C] border-[#E5A93C]/70 shadow-lg shadow-[#E5A93C]/10 translate-x-1"
                        : "bg-[#0B261C]/50 border-[#1E4635] hover:border-[#1E4635]/80 hover:bg-[#0B261C]/80"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isActive
                            ? "bg-[#E5A93C]/15 border border-[#E5A93C]/60 text-[#E5A93C]"
                            : "bg-[#061A12] border border-[#1E4635] text-[#4ADE80]"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h3
                            className={`font-serif text-lg font-bold transition-colors ${
                              isActive ? "text-[#F8FAFC]" : "text-[#F8FAFC]/90"
                            }`}
                          >
                            {pillar.title}
                          </h3>
                          <span
                            className={`text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded ${
                              isActive
                                ? "bg-[#E5A93C]/20 text-[#E5A93C]"
                                : "bg-[#061A12] text-[#839085]"
                            }`}
                          >
                            Orbit 0{pillar.id + 1}
                          </span>
                        </div>

                        <div className="text-xs text-[#E5A93C] font-semibold mb-2">
                          {pillar.subtitle}
                        </div>

                        <p className="text-xs sm:text-sm text-[#B8D0C5] leading-relaxed">
                          {pillar.content}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Interactive Orbital Loop Visual */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-[440px] aspect-square flex items-center justify-center select-none">
              {/* Outer Glow Halo */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#154632]/40 to-[#E5A93C]/15 blur-2xl pointer-events-none" />

              {/* Orbit Ring 3 (Outer) */}
              <div
                className={`absolute w-[380px] h-[380px] rounded-full border border-dashed transition-all duration-500 animate-[spin_50s_linear_infinite] ${
                  activePillar === 2
                    ? "border-[#E5A93C] shadow-[0_0_20px_rgba(229,169,60,0.3)] scale-[1.03]"
                    : "border-[#1E4635]/60"
                }`}
              >
                {/* Orbiting Satellite Node */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#E5A93C] shadow-lg shadow-[#E5A93C]/60 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#061A12]" />
                </div>
              </div>

              {/* Orbit Ring 2 (Middle) */}
              <div
                className={`absolute w-[290px] h-[290px] rounded-full border transition-all duration-500 animate-[spin_35s_linear_infinite_reverse] ${
                  activePillar === 1
                    ? "border-[#4ADE80] shadow-[0_0_20px_rgba(74,222,128,0.35)] scale-[1.03]"
                    : "border-[#1E4635]/60"
                }`}
              >
                {/* Orbiting Satellite Node */}
                <div className="absolute bottom-4 right-10 w-3.5 h-3.5 rounded-full bg-[#4ADE80] shadow-md shadow-[#4ADE80]/50" />
              </div>

              {/* Orbit Ring 1 (Inner) */}
              <div
                className={`absolute w-[200px] h-[200px] rounded-full border border-dashed transition-all duration-500 animate-[spin_20s_linear_infinite] ${
                  activePillar === 0
                    ? "border-[#E5A93C] shadow-[0_0_15px_rgba(229,169,60,0.3)] scale-[1.04]"
                    : "border-[#1E4635]/60"
                }`}
              >
                {/* Orbiting Satellite Node */}
                <div className="absolute top-6 left-6 w-3 h-3 rounded-full bg-[#E5A93C]" />
              </div>

              {/* Center Core: Hexagonal Green Cube/Badge with Golden Oil Drop & ISCC EU / CERTIFIED */}
              <div className="relative z-10 w-32 h-32 rounded-2xl bg-gradient-to-br from-[#0B261C] via-[#0E3524] to-[#061A12] border-2 border-[#4ADE80]/80 shadow-[0_0_35px_rgba(74,222,128,0.3)] flex flex-col items-center justify-center p-3 animate-pulse">
                {/* Hexagonal shape with golden oil drop */}
                <svg viewBox="0 0 40 40" className="w-12 h-12" fill="none">
                  <polygon
                    points="20,2 36,11 36,29 20,38 4,29 4,11"
                    stroke="#4ADE80"
                    strokeWidth="2.2"
                    fill="#061A12"
                    fillOpacity="0.85"
                  />
                  <path
                    d="M20 10 C17.8 15 14.5 19 14.5 23.5 A5.5 5.5 0 0 0 25.5 23.5 C25.5 19 22.2 15 20 10 Z"
                    fill="url(#orbital-gold-grad)"
                  />
                  <defs>
                    <linearGradient id="orbital-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F3C66F" />
                      <stop offset="100%" stopColor="#E5A93C" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="flex flex-col items-center mt-1 text-center">
                  <span className="text-[11px] font-mono font-bold tracking-widest text-[#F8FAFC]">
                    ISCC EU
                  </span>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#4ADE80] font-semibold">
                    CERTIFIED
                  </span>
                </div>
              </div>
            </div>

            {/* Orbit Active Feedback Display */}
            <div className="w-full max-w-sm mt-4 rounded-xl bg-[#0B261C]/90 border border-[#1E4635] p-4 text-center shadow-lg">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#E5A93C] mb-0.5">
                {PILLARS[activePillar].statTitle}
              </div>
              <div className="text-base sm:text-lg font-bold text-[#F8FAFC] font-serif">
                {PILLARS[activePillar].statValue}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
