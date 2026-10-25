"use client";

import React from "react";
import { ShieldCheck, Award, Zap, Droplet, CheckCircle2, Globe2 } from "lucide-react";

const TICKER_ITEMS = [
  "ISCC EU",
  "EN 14214",
  "GAFI Registered",
  "EU Trade Agreement Market Access",
];

export function MarqueeTicker() {
  // Multiply items for smooth infinite loop
  const repeatedItems = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="relative w-full overflow-hidden border-y border-[#1E4635] bg-[#061A12]/95 backdrop-blur-sm py-3 select-none flex items-center">
      {/* Left Label: CERTIFIED & RECOGNIZED */}
      <div className="shrink-0 z-20 pl-4 sm:pl-8 pr-4 sm:pr-6 py-1 bg-[#061A12] border-r border-[#1E4635] flex items-center gap-2.5 shadow-[12px_0_24px_#061A12]">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]" />
        </span>
        <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest font-bold text-[#E5A93C] whitespace-nowrap">
          CERTIFIED &amp; RECOGNIZED
        </span>
      </div>

      {/* Side gradient fades */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#061A12] to-transparent z-10" />

      {/* Marquee track */}
      <div className="flex-1 overflow-hidden relative">
        <div className="flex w-max animate-marquee">
          {/* Render twice for seamless infinite loop */}
          {[...repeatedItems, ...repeatedItems].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 sm:gap-6 px-4 sm:px-6 text-xs sm:text-sm text-[#F8FAFC] whitespace-nowrap font-medium"
            >
              <span className="font-sans tracking-wide text-[#F8FAFC]">{item}</span>
              <span className="text-[#E5A93C] font-black text-sm select-none">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
