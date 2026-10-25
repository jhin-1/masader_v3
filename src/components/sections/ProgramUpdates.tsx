"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Tag, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";

const UPDATES = [
  {
    category: "Plant Updates",
    date: "October 2026",
    title: "Alexandria Distillation Train Achieves Full Operational Throughput",
    excerpt:
      "Expanded processing capacity engineered with CARBON operating to full EN 14214 compliance across all production lines.",
    tag: "Plant Milestone",
  },
  {
    category: "ISCC Audit Milestones",
    date: "September 2026",
    title: "Annual ISCC EU Mass-Balance Audit Successfully Concluded",
    excerpt:
      "Independent certification renewal verifying end-to-end chain of custody from regional feedstock intake through to export documentation.",
    tag: "ISCC Audit",
  },
  {
    category: "Export Market Notes",
    date: "August 2026",
    title: "European Biofuel Demand Accelerates Under RED II / RED III Mandates",
    excerpt:
      "Long-term off-take contracts expanding for verified UCOME and certified second-generation renewable fuel streams.",
    tag: "Market Notes",
  },
];

export function ProgramUpdates() {
  return (
    <section id="updates" className="relative py-24 sm:py-32 bg-[#061A12] border-t border-[#1E4635] overflow-hidden">
      <Container>
        {/* Header with Eyebrow, Heading, Subtitle, and Green Link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B261C] border border-[#1E4635] text-[#E5A93C] text-xs font-semibold uppercase tracking-widest">
              <span>NEWS &amp; INSIGHTS</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8FAFC] tracking-tight leading-[1.15]">
              Updates on our certification programme and the export market
            </h2>

            <p className="text-base text-[#B8D0C5] leading-relaxed">
              Plant updates, ISCC audit milestones, and export-market notes — coming soon.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#4ADE80] hover:text-[#22C55E] transition-colors group shrink-0"
          >
            <span>Read all news →</span>
          </a>
        </div>

        {/* 3 News / Updates Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {UPDATES.map((update, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#839085] mb-4">
                  <div className="flex items-center gap-1.5 text-[#E5A93C] font-mono">
                    <Tag className="w-3.5 h-3.5" />
                    <span>{update.category}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{update.date}</span>
                  </div>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#F8FAFC] mb-3 group-hover:text-[#4ADE80] transition-colors leading-snug">
                  {update.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#B8D0C5] leading-relaxed mb-6">
                  {update.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1E4635] flex items-center justify-between">
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#061A12] border border-[#1E4635] text-[#B8D0C5]">
                  {update.tag}
                </span>

                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#E5A93C] group-hover:text-[#4ADE80] transition-colors">
                  <span>Read update</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
