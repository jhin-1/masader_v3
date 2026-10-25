"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import LivingLabIllustration from "@/components/visuals/LivingLabIllustration";

function OilDropIcon({ stroke, fill }: { stroke: string; fill: string }) {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <path
        d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const PRODUCT_CARDS = [
  {
    title: "BIODIESEL — PURE & PUREMAX",
    text: "FAME and UCOME from used cooking oil and fatty acids, produced to EN 14214 in two grades.",
    linkText: "Data sheet →",
    topBorder: "border-t-[#E5A93C]",
    iconStroke: "#E5A93C",
    iconFill: "rgba(229, 169, 60, 0.25)",
    badge: "EN 14214",
  },
  {
    title: "CRUDE & TECHNICAL GLYCERINE",
    text: "Recovered with distillation residue and methanol from every production stream.",
    linkText: "Data sheet →",
    topBorder: "border-t-[#22C55E]",
    iconStroke: "#22C55E",
    iconFill: "rgba(34, 197, 94, 0.25)",
    badge: "Recovered Stream",
  },
  {
    title: "SOAP-STOCK & FATTY-ACID DERIVATIVES",
    text: "From our CARBON-designed glycerolysis line — recovered value from every stream.",
    linkText: "Data sheet →",
    topBorder: "border-t-[#86EFAC]",
    iconStroke: "#FDE68A",
    iconFill: "rgba(253, 230, 138, 0.25)",
    badge: "CARBON-Designed",
  },
];

export function ExportSpecifications() {
  return (
    <section id="products" className="relative py-24 sm:py-32 bg-[#061A12] border-t border-[#1E4635] overflow-hidden">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#154632]/20 via-[#E5A93C]/5 to-transparent blur-3xl -z-10" />

      <Container>
        {/* Top 2-Column Section: Left Column Copy & Right Column LivingLabIllustration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 lg:mb-20">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B261C] border border-[#1E4635] text-[#E5A93C] text-xs font-semibold uppercase tracking-widest">
              <span>OUR PRODUCTS</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8FAFC] tracking-tight leading-[1.15]">
              Specification-backed,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5A93C] via-[#F3C66F] to-[#4ADE80]">
                export ready
              </span>
            </h2>

            <p className="text-base text-[#B8D0C5] leading-relaxed">
              From the same UCOME stream entering our Alexandria plant, three certified lines leave
              it — biodiesel, glycerine, and soap-stock derivatives — each produced to
              specification, not approximated.
            </p>

            {/* Monospace Specs Line */}
            <div className="p-3.5 rounded-xl bg-[#0B261C]/90 border border-[#1E4635] font-mono text-xs sm:text-sm text-[#4ADE80] tracking-wide shadow-inner">
              12,000 MTPA certified capacity &nbsp;·&nbsp; Ex-Works Alexandria &nbsp;·&nbsp; EN 14214
            </div>

            {/* Link (Green) */}
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#4ADE80] hover:text-[#22C55E] group transition-colors"
              >
                <span>All products &amp; data sheets →</span>
              </a>
            </div>
          </div>

          {/* Right Column: Living Lab Illustration */}
          <div className="lg:col-span-7">
            <LivingLabIllustration />
          </div>
        </div>

        {/* Bottom 3 Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PRODUCT_CARDS.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className={`glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 relative flex flex-col justify-between group overflow-hidden border-t-2 ${card.topBorder}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#061A12] border border-[#1E4635] flex items-center justify-center transition-colors">
                    <OilDropIcon stroke={card.iconStroke} fill={card.iconFill} />
                  </div>
                  <span className="font-mono text-xs font-semibold text-[#839085] px-2.5 py-1 rounded bg-[#061A12] border border-[#1E4635]">
                    {card.badge}
                  </span>
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#F8FAFC] mb-2.5 group-hover:text-[#4ADE80] transition-colors leading-snug">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#B8D0C5] leading-relaxed mb-6">
                  {card.text}
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E5A93C] hover:text-[#F3C66F] group-hover:gap-2.5 transition-all pt-3 border-t border-[#1E4635]"
              >
                <span>{card.linkText}</span>
              </a>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
