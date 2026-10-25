"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";

const NAV_LINKS = [
  { name: "About Us", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Sustainability", href: "#sustainability" },
  { name: "Facilities & Process", href: "#process" },
  { name: "Markets & Trading", href: "#markets" },
  { name: "Careers", href: "#careers" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className={`w-full transition-all duration-300 ${scrolled ? "py-2.5" : "py-4"}`}>
        <Container>
          <div
            className={`flex items-center justify-between transition-all duration-300 rounded-2xl px-4 sm:px-6 py-2.5 ${
              scrolled
                ? "bg-[#061A12]/90 backdrop-blur-md border border-[#1E4635] shadow-lg shadow-black/40"
                : "bg-transparent border border-transparent"
            }`}
          >
            {/* Brand Logo: masader with مصادر underneath and hexagonal green/gold drop icon */}
            <a
              href="#"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#E5A93C]/50 rounded-lg p-1"
              aria-label="masader مصادر Home"
            >
              <div className="relative w-10 h-10 rounded-xl bg-[#0B261C] border border-[#1E4635] flex items-center justify-center overflow-hidden group-hover:border-[#E5A93C]/60 transition-colors shadow-inner shrink-0">
                {/* Hexagonal green/gold drop icon */}
                <svg
                  viewBox="0 0 32 32"
                  className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_2px_8px_rgba(74,222,128,0.3)]"
                  fill="none"
                >
                  <polygon
                    points="16,2 28.5,9.2 28.5,23.8 16,31 3.5,23.8 3.5,9.2"
                    stroke="#4ADE80"
                    strokeWidth="1.8"
                    fill="#061A12"
                    fillOpacity="0.8"
                  />
                  <path
                    d="M16 9 C14.2 13 11.5 16 11.5 19.5 A4.5 4.5 0 0 0 20.5 19.5 C20.5 16 17.8 13 16 9 Z"
                    fill="url(#gold-drop-grad)"
                  />
                  <defs>
                    <linearGradient id="gold-drop-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F3C66F" />
                      <stop offset="100%" stopColor="#E5A93C" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="flex flex-col text-left">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#F8FAFC] leading-none lowercase">
                  masader
                </span>
                <span className="font-arabic font-bold text-[11px] text-[#E5A93C] leading-tight tracking-wider mt-0.5">
                  مصادر
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setActiveLink(link.name)}
                  onMouseLeave={() => setActiveLink("")}
                  className="relative px-3 py-2 text-xs lg:text-[13px] font-medium text-[#B8D0C5] hover:text-[#F8FAFC] transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E5A93C]/40 whitespace-nowrap"
                >
                  {link.name}
                  {activeLink === link.name && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0.5 left-2.5 right-2.5 h-[2px] bg-gradient-to-r from-[#E5A93C] to-[#4ADE80] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* CTA Button (Gold): Request a Quotation */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#E5A93C] via-[#F3C66F] to-[#E5A93C] text-[#061A12] shadow-md shadow-[#E5A93C]/20 hover:shadow-[#E5A93C]/35 hover:scale-[1.02] transition-all shimmer-effect focus:outline-none focus:ring-2 focus:ring-[#E5A93C]"
              >
                <span>Request a Quotation</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#061A12]" />
              </a>

              {/* Mobile Menu Hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 rounded-xl border border-[#1E4635] bg-[#0B261C]/80 text-[#F8FAFC] hover:text-[#E5A93C] hover:border-[#E5A93C]/50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#E5A93C]"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="xl:hidden fixed inset-0 z-50">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/75 backdrop-blur-md"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-full max-w-xs bg-[#061A12] border-l border-[#1E4635] p-6 flex flex-col justify-between shadow-2xl overflow-y-auto"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#1E4635]">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#0B261C] border border-[#1E4635] flex items-center justify-center">
                      <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none">
                        <polygon
                          points="16,2 28.5,9.2 28.5,23.8 16,31 3.5,23.8 3.5,9.2"
                          stroke="#4ADE80"
                          strokeWidth="1.8"
                          fill="#061A12"
                        />
                        <path
                          d="M16 9 C14.2 13 11.5 16 11.5 19.5 A4.5 4.5 0 0 0 20.5 19.5 C20.5 16 17.8 13 16 9 Z"
                          fill="#E5A93C"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-serif font-bold text-lg text-[#F8FAFC] lowercase">
                        masader
                      </span>
                      <span className="font-arabic text-xs text-[#E5A93C]">مصادر</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg text-[#B8D0C5] hover:text-[#F8FAFC] focus:outline-none"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex flex-col gap-1.5 mt-6">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-4 py-3 rounded-xl text-sm font-medium text-[#B8D0C5] hover:text-[#F8FAFC] hover:bg-[#0B261C] border border-transparent hover:border-[#1E4635] transition-all flex items-center justify-between"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-4 h-4 text-[#839085]" />
                    </a>
                  ))}
                </nav>
              </div>

              <div className="pt-6 border-t border-[#1E4635] space-y-3">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-xs uppercase tracking-wider bg-gradient-to-r from-[#E5A93C] via-[#F3C66F] to-[#E5A93C] text-[#061A12] shadow-md shadow-[#E5A93C]/20"
                >
                  <span>Request a Quotation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <div className="flex items-center justify-center gap-2 text-xs text-[#839085]">
                  <ShieldCheck className="w-4 h-4 text-[#4ADE80]" />
                  <span>ISCC EU Certified Supply Chain</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
