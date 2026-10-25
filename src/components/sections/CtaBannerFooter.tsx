"use client";

import React from "react";
import { ArrowRight, Phone, MapPin, ChevronUp, Clock, FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function CtaBannerFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative bg-[#04120D] text-[#B8D0C5] overflow-hidden pt-12">
      <Container className="mb-20">
        {/* Luxury CTA Gradient Banner */}
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16 border border-[#E5A93C]/40 shadow-2xl bg-gradient-to-br from-[#154632] via-[#0E3524] to-[#C8963E]/80">
          {/* Ambient Halos inside Banner */}
          <div className="pointer-events-none absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 w-80 h-80 bg-[#E5A93C]/20 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8FAFC] tracking-tight leading-[1.15]">
              Ready to bring Masader into your supply chain?
            </h2>

            <p className="text-base sm:text-lg text-[#F8FAFC]/90 max-w-xl mx-auto leading-relaxed">
              Talk to us about offtake volumes, samples, or feedstock partnerships.
            </p>

            {/* Two Action Buttons: Monospace Phone & Dark Contact Us */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              {/* Button 1: White button, dark text, monospace: +2 03 4701 1465 */}
              <a
                href="tel:+20347011465"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-mono font-bold text-sm sm:text-base bg-[#F8FAFC] text-[#061A12] hover:bg-white/95 hover:scale-[1.02] transition-all shadow-lg"
              >
                <Phone className="w-4 h-4 text-[#061A12]" />
                <span>+2 03 4701 1465</span>
              </a>

              {/* Button 2: Dark button, white text: Contact Us */}
              <a
                href="mailto:info@masader.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-sm sm:text-base bg-[#061A12] text-[#F8FAFC] border border-white/20 hover:border-[#E5A93C] hover:bg-[#061A12]/90 hover:scale-[1.02] transition-all shadow-lg"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 text-[#E5A93C]" />
              </a>
            </div>
          </div>
        </div>
      </Container>

      {/* Main Footer (4 Columns) */}
      <div className="border-t border-[#1E4635] pt-16 pb-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
            {/* Col 1: Logo masader + Address */}
            <div className="space-y-4">
              <a href="#" className="flex items-center gap-3 group" aria-label="masader مصادر Home">
                <div className="relative w-10 h-10 rounded-xl bg-[#0B261C] border border-[#1E4635] flex items-center justify-center overflow-hidden group-hover:border-[#E5A93C]/60 transition-colors shadow-inner shrink-0">
                  <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
                    <polygon
                      points="16,2 28.5,9.2 28.5,23.8 16,31 3.5,23.8 3.5,9.2"
                      stroke="#4ADE80"
                      strokeWidth="1.8"
                      fill="#061A12"
                      fillOpacity="0.8"
                    />
                    <path
                      d="M16 9 C14.2 13 11.5 16 11.5 19.5 A4.5 4.5 0 0 0 20.5 19.5 C20.5 16 17.8 13 16 9 Z"
                      fill="url(#footer-gold-drop)"
                    />
                    <defs>
                      <linearGradient id="footer-gold-drop" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F3C66F" />
                        <stop offset="100%" stopColor="#E5A93C" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="flex flex-col text-left">
                  <span className="font-serif text-2xl font-bold tracking-tight text-[#F8FAFC] leading-none lowercase">
                    masader
                  </span>
                  <span className="font-arabic font-bold text-xs text-[#E5A93C] leading-tight tracking-wider mt-0.5">
                    مصادر
                  </span>
                </div>
              </a>

              <div className="flex items-start gap-2.5 text-xs text-[#B8D0C5] leading-relaxed pt-2">
                <MapPin className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                <span>Km 26 Alexandria–Cairo Desert Road, Alexandria, Egypt</span>
              </div>
            </div>

            {/* Col 2: Company */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#F8FAFC] font-semibold">
                Company
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="#about" className="hover:text-[#F8FAFC] transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#process" className="hover:text-[#F8FAFC] transition-colors">
                    Facilities &amp; Process
                  </a>
                </li>
                <li>
                  <a href="#markets" className="hover:text-[#F8FAFC] transition-colors">
                    Markets &amp; Trading
                  </a>
                </li>
                <li>
                  <a href="#careers" className="hover:text-[#F8FAFC] transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Products */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#F8FAFC] font-semibold">
                Products
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="#products" className="hover:text-[#F8FAFC] transition-colors">
                    Biodiesel — PURE &amp; PUREMAX
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-[#F8FAFC] transition-colors">
                    Technical Glycerine
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-[#F8FAFC] transition-colors">
                    Soap-Stock Derivatives
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Useful Links & Working Hours */}
            <div className="space-y-6">
              <div className="space-y-2.5">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#F8FAFC] font-semibold">
                  Useful Links
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#contact" className="hover:text-[#F8FAFC] transition-colors">
                      ISCC EU Certificate
                    </a>
                  </li>
                  <li>
                    <a href="#terms" className="hover:text-[#F8FAFC] transition-colors">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#privacy" className="hover:text-[#F8FAFC] transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#1E4635]/60">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#E5A93C] font-semibold">
                  Working Hours
                </h4>
                <div className="space-y-1.5 text-xs text-[#B8D0C5]">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#4ADE80]" />
                    <span>Sun–Sat 09:00–23:00</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#E5A93C]" />
                    <span>Phone support 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom Bar */}
          <div className="border-t border-[#1E4635] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            {/* Left: مصادر "From waste stream to certified fuel." */}
            <div className="flex items-center gap-2.5">
              <span className="font-arabic font-bold text-sm text-[#E5A93C]">مصادر</span>
              <span className="text-[#839085]">·</span>
              <span className="text-[#B8D0C5] italic">
                &ldquo;From waste stream to certified fuel.&rdquo;
              </span>
            </div>

            {/* Right: © 2026 Masader for Industry & Investment */}
            <div className="flex items-center gap-4">
              <span className="text-[#839085]">
                © 2026 Masader for Industry &amp; Investment
              </span>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0B261C] border border-[#1E4635] text-[#F8FAFC] hover:text-[#E5A93C] hover:border-[#E5A93C]/40 transition-colors"
                aria-label="Back to top"
              >
                <span>Back to top</span>
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
