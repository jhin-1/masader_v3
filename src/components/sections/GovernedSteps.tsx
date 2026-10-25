"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Factory, Ship, ArrowUpRight, Scale } from "lucide-react";
import { Container } from "@/components/ui/Container";

const STEPS = [
  {
    step: "01",
    phase: "STEP 01",
    title: "Collect",
    description:
      "Used cooking oil and recovered soap-stock / fatty-acid oils, sourced through our feedstock network and logged at intake.",
    icon: ShieldCheck,
    badges: ["Feedstock Intake", "Sourced & Logged"],
    metricLabel: "Custody",
    metricValue: "Logged at Intake",
  },
  {
    step: "02",
    phase: "STEP 02",
    title: "Process",
    description:
      "Transesterification, separation, vacuum methanol recovery and distillation engineered with CARBON — every unit in the train, holding EN 14214 at every batch.",
    icon: Factory,
    badges: ["CARBON Engineered", "EN 14214 Standards"],
    metricLabel: "Specification",
    metricValue: "EN 14214 Every Batch",
  },
  {
    step: "03",
    phase: "STEP 03",
    title: "Certify & Export",
    description:
      "ISCC EU mass-balance certified FAME, UCOME and glycerin, shipped Ex-Works Alexandria to buyers across Europe and Africa.",
    icon: Ship,
    badges: ["ISCC EU Mass-Balance", "Europe & Africa Export"],
    metricLabel: "Delivery",
    metricValue: "Ex-Works Alexandria",
  },
];

export function GovernedSteps() {
  return (
    <section id="process" className="relative py-24 sm:py-32 bg-[#061A12] border-t border-[#1E4635] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/3 left-0 w-80 h-80 bg-[#4ADE80]/5 rounded-full blur-3xl -z-10" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 w-96 h-96 bg-[#E5A93C]/5 rounded-full blur-3xl -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Sticky on Desktop */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B261C] border border-[#1E4635] text-[#E5A93C] text-xs font-semibold uppercase tracking-widest">
              <span>HOW THE LOOP CLOSES</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8FAFC] tracking-tight leading-[1.15]">
              From spent oil to certified fuel, in three governed steps
            </h2>

            <p className="text-base text-[#B8D0C5] leading-relaxed">
              Every batch is tracked from feedstock intake to certificate — the chain of custody a
              European buyer needs is built into how we run the plant, not bolted on afterward.
            </p>

            {/* Checklist */}
            <div className="space-y-3.5 pt-2">
              {[
                "✓ ISCC EU certified chain of custody",
                "✓ Fully traceable supply chain, intake to export",
                "✓ EN 14214 specifications, every batch",
              ].map((text, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#4ADE80]/15 border border-[#4ADE80]/40 flex items-center justify-center shrink-0 mt-0.5 text-[#4ADE80]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm text-[#F8FAFC]/90 font-medium leading-snug">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Callout Box (Gold left border) */}
            <div className="rounded-2xl bg-[#0B261C]/90 border-l-4 border-l-[#E5A93C] border border-[#1E4635] p-5 shadow-lg relative overflow-hidden">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#E5A93C]/10 text-[#E5A93C] shrink-0">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#E5A93C] uppercase tracking-wider mb-1">
                    Scope
                  </h4>
                  <p className="text-xs sm:text-sm text-[#B8D0C5] leading-relaxed">
                    ISCC EU mass-balance certification covers UCOME, FAME and glycerin from intake
                    through export documentation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Three Interactive Cards with Vertical Timeline */}
          <div className="lg:col-span-7 relative space-y-8">
            {/* Visual Timeline Bar for Desktop */}
            <div className="hidden sm:block absolute left-8 top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#E5A93C] via-[#4ADE80] to-[#22C55E]/40" />

            {STEPS.map((stepItem, index) => {
              const StepIcon = stepItem.icon;
              return (
                <motion.div
                  key={stepItem.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative sm:pl-16 group"
                >
                  {/* Step Marker Node */}
                  <div className="hidden sm:flex absolute left-4 top-8 -translate-x-1/2 w-8 h-8 rounded-full bg-[#061A12] border-2 border-[#E5A93C] group-hover:border-[#4ADE80] items-center justify-center text-xs font-mono font-bold text-[#E5A93C] group-hover:text-[#4ADE80] transition-colors shadow-lg z-10">
                    {stepItem.step}
                  </div>

                  {/* Card Body */}
                  <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 relative overflow-hidden transition-all duration-300">
                    {/* Header with Phase & Icon */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="sm:hidden font-mono text-xs font-bold text-[#E5A93C] px-2 py-0.5 rounded bg-[#E5A93C]/10 border border-[#E5A93C]/30">
                          {stepItem.step}
                        </span>
                        <span className="text-[11px] font-mono uppercase tracking-widest text-[#E5A93C] font-semibold">
                          Step {stepItem.step}
                        </span>
                      </div>

                      <div className="w-10 h-10 rounded-xl bg-[#061A12] border border-[#1E4635] flex items-center justify-center text-[#4ADE80] group-hover:text-[#E5A93C] group-hover:border-[#E5A93C]/50 transition-colors shadow-inner">
                        <StepIcon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F8FAFC] mb-3 group-hover:text-[#4ADE80] transition-colors">
                      {stepItem.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[#B8D0C5] leading-relaxed mb-6 font-normal">
                      {stepItem.description}
                    </p>

                    {/* Badges and Metric Row */}
                    <div className="pt-4 border-t border-[#1E4635] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {stepItem.badges.map((badge, bIdx) => (
                          <span
                            key={bIdx}
                            className="px-2.5 py-1 rounded-md bg-[#061A12]/90 border border-[#1E4635] text-[11px] text-[#B8D0C5] font-mono"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>

                      <div className="shrink-0 self-start sm:self-center px-3 py-1.5 rounded-lg bg-[#061A12] border border-[#1E4635] text-right">
                        <span className="block text-[10px] uppercase tracking-wider text-[#839085]">
                          {stepItem.metricLabel}
                        </span>
                        <span className="font-mono text-xs sm:text-sm font-bold text-[#E5A93C]">
                          {stepItem.metricValue}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
