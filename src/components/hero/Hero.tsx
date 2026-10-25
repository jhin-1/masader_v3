"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ShieldCheck, Flame, TrendingDown, RefreshCw, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

function Counter({ end, suffix = "", prefix = "", duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span suppressHydrationWarning>
      {prefix}
      {count.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 120 };
  const parallaxX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-25, 25]), springConfig);
  const parallaxY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-15, 15]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };

  const titleWords = [
    "Every",
    "drop",
    "of",
    "used",
    "oil",
    "finds",
    "its",
    "way",
    "back",
    "into",
    "the",
    "loop.",
  ];

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-28 sm:pt-36 pb-16 flex flex-col justify-between overflow-hidden bg-[#061A12]"
    >
      {/* Background Radial Glows */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-b from-[#154632]/25 via-[#E5A93C]/10 to-transparent blur-3xl -z-10" />
      <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 bg-[#4ADE80]/10 rounded-full blur-3xl -z-10" />
      <div className="pointer-events-none absolute top-1/2 -right-40 w-96 h-96 bg-[#E5A93C]/10 rounded-full blur-3xl -z-10" />

      {/* Living Watermark "مصادر" */}
      <div className="pointer-events-none absolute inset-x-0 top-32 sm:top-28 flex items-center justify-center -z-10 overflow-hidden">
        <motion.div
          style={{ x: parallaxX, y: parallaxY }}
          className="font-arabic font-black text-[22vw] sm:text-[18vw] leading-none text-[#4ADE80]/[0.035] select-none tracking-tight blur-[0.5px]"
        >
          مصادر
        </motion.div>
      </div>

      <Container className="relative z-10 my-auto text-center">
        {/* Eyebrow & Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4 py-2 rounded-full bg-[#0B261C] border border-[#1E4635] mb-8 shadow-inner"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#E5A93C]">
            MASADER — ARABIC FOR &quot;RESOURCES&quot;
          </span>
          <span className="text-[#1E4635] hidden sm:inline">·</span>
          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#061A12] border border-[#1E4635] text-[11px] font-mono text-[#4ADE80]">
            <span className="text-[#4ADE80] font-bold">✓</span>
            <span>ISCC EU CERTIFIED</span>
          </span>
        </motion.div>

        {/* Editorial Serif Main Heading */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#F8FAFC] max-w-5xl mx-auto leading-[1.08] mb-8">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="block text-[#F8FAFC]"
          >
            Waste finds
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="block text-[#F8FAFC]"
          >
            its way back
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4ADE80] via-[#22C55E] to-[#4ADE80] drop-shadow-[0_2px_25px_rgba(74,222,128,0.35)]"
          >
            into the loop.
          </motion.span>
        </h1>

        {/* Lead Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-[#B8D0C5] max-w-3xl mx-auto leading-relaxed mb-10 font-normal"
        >
          ISCC EU-certified FAME, UCOME and glycerin from used cooking oil and recovered
          fatty-acid oils — 12,000 MTPA, engineered with CARBON, exported across Europe
          and Africa.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 sm:mb-20"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl font-semibold text-xs sm:text-sm uppercase tracking-wider bg-gradient-to-r from-[#E5A93C] via-[#F3C66F] to-[#E5A93C] text-[#061A12] shadow-lg shadow-[#E5A93C]/25 hover:shadow-[#E5A93C]/40 hover:scale-[1.02] transition-all shimmer-effect"
          >
            <span>Request a Quotation</span>
            <ArrowRight className="w-4 h-4 text-[#061A12]" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-medium text-xs sm:text-sm text-[#F8FAFC] bg-[#0B261C]/80 hover:bg-[#0B261C] border border-[#1E4635] hover:border-[#E5A93C]/50 transition-all shadow-md"
          >
            <span>Feedstock Partnerships</span>
            <RefreshCw className="w-4 h-4 text-[#4ADE80]" />
          </a>
        </motion.div>

        {/* 3 Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto"
        >
          {/* Metric 1: 12,000 | MTPA certified capacity */}
          <div className="glass-panel glass-panel-hover rounded-2xl p-6 text-left relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#E5A93C]/5 rounded-bl-full pointer-events-none" />
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#E5A93C] font-semibold">
                Refined Capacity
              </span>
              <div className="w-8 h-8 rounded-lg bg-[#061A12] border border-[#1E4635] flex items-center justify-center text-[#E5A93C]">
                <Flame className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-bold font-serif text-[#F8FAFC] mb-1">
              <Counter end={12000} />
            </div>
            <p className="text-xs text-[#B8D0C5] leading-relaxed font-medium">
              MTPA certified capacity
            </p>
          </div>

          {/* Metric 2: 85–95% | GHG reduction, UCOME */}
          <div className="glass-panel glass-panel-hover rounded-2xl p-6 text-left relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#4ADE80]/5 rounded-bl-full pointer-events-none" />
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#4ADE80] font-semibold">
                Decarbonization
              </span>
              <div className="w-8 h-8 rounded-lg bg-[#061A12] border border-[#1E4635] flex items-center justify-center text-[#4ADE80]">
                <TrendingDown className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-bold font-serif text-[#F8FAFC] mb-1">
              85–95%
            </div>
            <p className="text-xs text-[#B8D0C5] leading-relaxed font-medium">
              GHG reduction, UCOME
            </p>
          </div>

          {/* Metric 3: 100% | mass-balance traceable */}
          <div className="glass-panel glass-panel-hover rounded-2xl p-6 text-left relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#E5A93C]/5 rounded-bl-full pointer-events-none" />
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#E5A93C] font-semibold">
                Chain of Custody
              </span>
              <div className="w-8 h-8 rounded-lg bg-[#061A12] border border-[#1E4635] flex items-center justify-center text-[#4ADE80]">
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-bold font-serif text-[#F8FAFC] mb-1">
              <Counter end={100} suffix="%" />
            </div>
            <p className="text-xs text-[#B8D0C5] leading-relaxed font-medium">
              mass-balance traceable
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
