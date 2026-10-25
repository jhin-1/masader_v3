"use client";

import React, { useState } from "react";
import {
    motion,
    AnimatePresence,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";

interface HotspotSpec {
    id: string;
    label: string;
    metric: string;
    value: string;
    description: string;
    xPercent: number;
    yPercent: number;
}

const HOTSPOTS: HotspotSpec[] = [
    {
        id: "drum",
        label: "01 / B100 PURE DRUM",
        metric: "B100 Pure Biodiesel",
        value: "EN 14214",
        description:
            "ISCC EU mass-balance certified FAME and UCOME shipped Ex-Works Alexandria.",
        xPercent: 28,
        yPercent: 48,
    },
    {
        id: "cylinder",
        label: "02 / UCOME STREAM",
        metric: "12,000 MTPA Capacity",
        value: "85–95% GHG",
        description:
            "Refined from used cooking oil and recovered fatty-acid oils through CARBON-engineered distillation.",
        xPercent: 56,
        yPercent: 42,
    },
    {
        id: "beaker",
        label: "03 / LAB VERIFIED",
        metric: "Three Certified Lines",
        value: "100% Traceable",
        description:
            "Every batch of biodiesel, glycerine, and soap-stock derivatives is produced to strict specification.",
        xPercent: 78,
        yPercent: 62,
    },
];

const CYLINDER_BUBBLES = [
    { cx: 310, r: 2.2, duration: 3.8, delay: 0.2 },
    { cx: 318, r: 1.5, duration: 4.5, delay: 1.1 },
    { cx: 304, r: 1.8, duration: 3.2, delay: 2.0 },
    { cx: 322, r: 2.5, duration: 5.0, delay: 0.7 },
    { cx: 314, r: 1.3, duration: 3.6, delay: 2.6 },
];

const BEAKER_BUBBLES = [
    { cx: 416, r: 2.0, duration: 3.2, delay: 0.4 },
    { cx: 432, r: 2.8, duration: 4.1, delay: 1.3 },
    { cx: 448, r: 1.6, duration: 2.9, delay: 0.9 },
    { cx: 424, r: 1.9, duration: 3.7, delay: 2.1 },
    { cx: 440, r: 2.3, duration: 4.4, delay: 1.7 },
];

export default function LivingLabIllustration() {
    const uid = "masader-lab";
    const [activeSpot, setActiveSpot] = useState<HotspotSpec>(HOTSPOTS[1]);

    // 3D Tilt Motion Values for Desktop Interactivity
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 160, mass: 0.6 };
    const rotateX = useSpring(
        useTransform(mouseY, [-0.5, 0.5], [6, -6]),
        springConfig
    );
    const rotateY = useSpring(
        useTransform(mouseX, [-0.5, 0.5], [-8, 8]),
        springConfig
    );
    const glowX = useSpring(
        useTransform(mouseX, [-0.5, 0.5], [-20, 20]),
        springConfig
    );
    const glowY = useSpring(
        useTransform(mouseY, [-0.5, 0.5], [-20, 20]),
        springConfig
    );

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <div
            className="relative w-full max-w-[580px] mx-auto select-none"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: "1200px" }}
        >
            {/* خلفية الإضاءة المحيطية (Ambient Bio-Gold & Emerald Glow) */}
            <motion.div
                style={{ x: glowX, y: glowY }}
                className="pointer-events-none absolute -inset-4 rounded-full bg-gradient-to-tr from-[#154632]/40 via-[#E5A93C]/15 to-transparent blur-3xl"
            />

            {/* حاوية الرسم التفاعلي ثلاثي الأبعاد */}
            <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="relative rounded-3xl border border-[#1E4635]/80 bg-[#071D14]/70 backdrop-blur-md p-4 sm:p-6 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.75)] overflow-hidden"
            >
                {/* شريط الحالة العلوي (Live Telemetry Header) */}
                <div className="flex items-center justify-between border-b border-[#1E4635]/60 pb-3 mb-2 text-xs text-[#B8D0C5]">
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-75" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22C55E]" />
                        </span>
                        <span className="font-mono tracking-wider uppercase text-[11px] text-[#E5A93C]">
                            LAB TELEMETRY // ACTIVE
                        </span>
                    </div>
                    <span className="font-mono text-[11px] text-[#B8D0C5]/80">
                        EN 14214 / ISCC EU
                    </span>
                </div>

                {/* منطقة الـ SVG والنقاط التفاعلية */}
                <div className="relative w-full aspect-[560/420]">
                    <svg
                        viewBox="0 0 560 420"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full overflow-visible"
                        role="img"
                        aria-label="Interactive illustration of export barrel, graduated cylinder, and laboratory beaker filled with refined golden biofuel"
                    >
                        <defs>
                            {/* تدرج الخلفية الدائرية */}
                            <radialGradient
                                id={`${uid}-bg-orb`}
                                cx="50%"
                                cy="50%"
                                r="50%"
                            >
                                <stop offset="0%" stopColor="#E5A93C" stopOpacity="0.22" />
                                <stop offset="55%" stopColor="#1E563B" stopOpacity="0.18" />
                                <stop offset="100%" stopColor="#061A12" stopOpacity="0" />
                            </radialGradient>

                            {/* تدرج جسم البرميل المعدني */}
                            <linearGradient
                                id={`${uid}-barrel-body`}
                                x1="80"
                                y1="0"
                                x2="230"
                                y2="0"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0%" stopColor="#091D15" />
                                <stop offset="22%" stopColor="#1C3D2E" />
                                <stop offset="45%" stopColor="#2A5743" />
                                <stop offset="75%" stopColor="#11281E" />
                                <stop offset="100%" stopColor="#07140E" />
                            </linearGradient>

                            {/* تدرج الحزام الأخضر المضيء على البرميل */}
                            <linearGradient
                                id={`${uid}-barrel-band`}
                                x1="80"
                                y1="0"
                                x2="230"
                                y2="0"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0%" stopColor="#0F5338" />
                                <stop offset="35%" stopColor="#279368" />
                                <stop offset="65%" stopColor="#34B380" />
                                <stop offset="100%" stopColor="#0D4730" />
                            </linearGradient>

                            {/* تدرج الزيت الذهبي الحي */}
                            <linearGradient
                                id={`${uid}-liquid-gold`}
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop offset="0%" stopColor="#F9D976" />
                                <stop offset="35%" stopColor="#E5A93C" />
                                <stop offset="85%" stopColor="#B87614" />
                                <stop offset="100%" stopColor="#7C4B08" />
                            </linearGradient>

                            {/* تدرج زجاج المعمل */}
                            <linearGradient
                                id={`${uid}-glass-body`}
                                x1="0"
                                y1="0"
                                x2="1"
                                y2="0"
                            >
                                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.22" />
                                <stop offset="20%" stopColor="#FFFFFF" stopOpacity="0.06" />
                                <stop offset="80%" stopColor="#FFFFFF" stopOpacity="0.03" />
                                <stop offset="100%" stopColor="#4ADE80" stopOpacity="0.18" />
                            </linearGradient>

                            {/* قناع قص السائل داخل المخبار المدرج */}
                            <clipPath id={`${uid}-cylinder-clip`}>
                                <rect x="290" y="95" width="48" height="245" rx="6" />
                            </clipPath>

                            {/* قناع قص السائل داخل الكأس الزجاجي */}
                            <clipPath id={`${uid}-beaker-clip`}>
                                <rect x="386" y="210" width="92" height="130" rx="10" />
                            </clipPath>
                        </defs>

                        {/* 1. الهالة الخلفية المدارية (Background Orbital Aura) */}
                        <circle
                            cx="315"
                            cy="220"
                            r="165"
                            fill={`url(#${uid}-bg-orb)`}
                        />
                        <motion.circle
                            cx="315"
                            cy="220"
                            r="145"
                            stroke="#E5A93C"
                            strokeOpacity="0.16"
                            strokeWidth="1"
                            strokeDasharray="6 8"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            style={{ transformOrigin: "315px 220px" }}
                        />

                        {/* الظل الأرضي للأدوات الثلاثة */}
                        <ellipse
                            cx="290"
                            cy="352"
                            rx="215"
                            ry="16"
                            fill="#020B07"
                            opacity="0.85"
                        />
                        <ellipse
                            cx="365"
                            cy="352"
                            rx="115"
                            ry="10"
                            fill="#E5A93C"
                            opacity="0.15"
                        />

                        {/* =========================================================
                2. البرميل الصناعي المعتمد (Export Barrel - Left)
               ========================================================= */}
                        <g>
                            {/* جسم البرميل الرئيسي */}
                            <rect
                                x="84"
                                y="128"
                                width="144"
                                height="214"
                                rx="10"
                                fill={`url(#${uid}-barrel-body)`}
                                stroke="#2E5C46"
                                strokeWidth="1"
                            />

                            {/* الحزام الأخضر الأوسط للعلامة التجارية */}
                            <rect
                                x="84"
                                y="196"
                                width="144"
                                height="62"
                                fill={`url(#${uid}-barrel-band)`}
                            />

                            {/* شعار وبيانات البرميل */}
                            <rect
                                x="118"
                                y="217"
                                width="76"
                                height="20"
                                rx="4"
                                fill="#061A12"
                                fillOpacity="0.65"
                                stroke="#4ADE80"
                                strokeOpacity="0.5"
                            />
                            <text
                                x="156"
                                y="230"
                                textAnchor="middle"
                                fill="#F8FAFC"
                                fontSize="8.5"
                                fontWeight="700"
                                letterSpacing="1.8"
                            >
                                B100 PURE
                            </text>

                            {/* الحلقات المعدنية البارزة للبرميل (Barrel Ribs) */}
                            {[130, 194, 258, 336].map((yPos, idx) => (
                                <g key={idx}>
                                    <rect
                                        x="80"
                                        y={yPos}
                                        width="152"
                                        height="8"
                                        rx="4"
                                        fill={`url(#${uid}-barrel-body)`}
                                        stroke="#3B7257"
                                        strokeWidth="0.8"
                                    />
                                    <line
                                        x1="88"
                                        y1={yPos + 2}
                                        x2="224"
                                        y2={yPos + 2}
                                        stroke="#FFFFFF"
                                        strokeOpacity="0.18"
                                        strokeWidth="1"
                                    />
                                </g>
                            ))}

                            {/* لمعة الإضاءة الرأسية على البرميل */}
                            <rect
                                x="104"
                                y="136"
                                width="14"
                                height="198"
                                fill="#FFFFFF"
                                fillOpacity="0.07"
                            />

                            {/* فوهة البرميل العلوية */}
                            <rect
                                x="102"
                                y="120"
                                width="20"
                                height="8"
                                rx="2"
                                fill="#2A5743"
                                stroke="#4ADE80"
                                strokeOpacity="0.4"
                            />
                        </g>

                        {/* =========================================================
                3. المخبار المدرج الطويل (Graduated Cylinder - Center)
               ========================================================= */}
                        <g>
                            {/* السائل الذهبي المتحرك داخل المخبار */}
                            <g clipPath={`url(#${uid}-cylinder-clip)`}>
                                {/* موجة خلفية */}
                                <motion.path
                                    d="M 240 168 Q 265 160 290 168 T 340 168 T 390 168 L 390 350 L 240 350 Z"
                                    fill="#B87614"
                                    opacity="0.65"
                                    animate={{ x: [-50, 0] }}
                                    transition={{
                                        duration: 3.5,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                />

                                {/* موجة أمامية ذهبية */}
                                <motion.path
                                    d="M 240 170 Q 265 178 290 170 T 340 170 T 390 170 L 390 350 L 240 350 Z"
                                    fill={`url(#${uid}-liquid-gold)`}
                                    animate={{ x: [0, -50] }}
                                    transition={{
                                        duration: 2.8,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                />

                                {/* سطح السائل المضيء (Meniscus Highlight) */}
                                <motion.ellipse
                                    cx="314"
                                    cy="170"
                                    rx="23"
                                    ry="3.5"
                                    fill="#FFF3C4"
                                    opacity="0.65"
                                    animate={{ cy: [169, 172, 169] }}
                                    transition={{
                                        duration: 2.8,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />

                                {/* فقاعات الزيت الدقيقة الصاعدة */}
                                {CYLINDER_BUBBLES.map((b, i) => (
                                    <motion.circle
                                        key={i}
                                        cx={b.cx}
                                        r={b.r}
                                        fill="#FFFbeb"
                                        initial={{ cy: 335, opacity: 0 }}
                                        animate={{
                                            cy: [335, 178],
                                            opacity: [0, 0.75, 0],
                                        }}
                                        transition={{
                                            duration: b.duration,
                                            delay: b.delay,
                                            repeat: Infinity,
                                            ease: "easeOut",
                                        }}
                                    />
                                ))}
                            </g>

                            {/* الزجاج الخارجي للمخبار المدرج */}
                            <rect
                                x="290"
                                y="88"
                                width="48"
                                height="252"
                                rx="6"
                                fill={`url(#${uid}-glass-body)`}
                                stroke="#A7F3D0"
                                strokeOpacity="0.4"
                                strokeWidth="1.5"
                            />

                            {/* فوهة المخبار العلوية */}
                            <rect
                                x="286"
                                y="84"
                                width="56"
                                height="6"
                                rx="3"
                                fill="#D1FAE5"
                                fillOpacity="0.25"
                                stroke="#A7F3D0"
                                strokeOpacity="0.45"
                            />

                            {/* علامات التدريج المعملية (Graduation Ticks) */}
                            {Array.from({ length: 18 }).map((_, idx) => {
                                const y = 110 + idx * 12;
                                const isMajor = idx % 3 === 0;
                                return (
                                    <line
                                        key={idx}
                                        x1={isMajor ? 320 : 326}
                                        y1={y}
                                        x2="336"
                                        y2={y}
                                        stroke="#F8FAFC"
                                        strokeOpacity={isMajor ? "0.55" : "0.28"}
                                        strokeWidth={isMajor ? "1.4" : "1"}
                                    />
                                );
                            })}

                            {/* انعكاس الضوء الطولي على الزجاج */}
                            <rect
                                x="295"
                                y="94"
                                width="5"
                                height="238"
                                rx="2.5"
                                fill="#FFFFFF"
                                fillOpacity="0.28"
                            />

                            {/* قاعدة المخبار الزجاجية */}
                            <rect
                                x="276"
                                y="340"
                                width="76"
                                height="8"
                                rx="4"
                                fill="#1E4635"
                                stroke="#4ADE80"
                                strokeOpacity="0.4"
                            />
                        </g>

                        {/* =========================================================
                4. الكأس الزجاجي المعملي (Laboratory Beaker - Right)
               ========================================================= */}
                        <g>
                            {/* السائل الذهبي المتحرك داخل الكأس */}
                            <g clipPath={`url(#${uid}-beaker-clip)`}>
                                <motion.path
                                    d="M 330 256 Q 360 248 390 256 T 450 256 T 510 256 L 510 350 L 330 350 Z"
                                    fill="#B87614"
                                    opacity="0.7"
                                    animate={{ x: [0, -60] }}
                                    transition={{
                                        duration: 4.0,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                />
                                <motion.path
                                    d="M 330 258 Q 360 266 390 258 T 450 258 T 510 258 L 510 350 L 330 350 Z"
                                    fill={`url(#${uid}-liquid-gold)`}
                                    animate={{ x: [-60, 0] }}
                                    transition={{
                                        duration: 3.2,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                />

                                {/* سطح السائل المضيء في الكأس */}
                                <motion.ellipse
                                    cx="432"
                                    cy="258"
                                    rx="44"
                                    ry="4.5"
                                    fill="#FFF3C4"
                                    opacity="0.6"
                                    animate={{ cy: [257, 260, 257] }}
                                    transition={{
                                        duration: 3.2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />

                                {/* فقاعات الكأس الزجاجي */}
                                {BEAKER_BUBBLES.map((b, i) => (
                                    <motion.circle
                                        key={i}
                                        cx={b.cx}
                                        r={b.r}
                                        fill="#FFFbeb"
                                        initial={{ cy: 335, opacity: 0 }}
                                        animate={{
                                            cy: [335, 264],
                                            opacity: [0, 0.7, 0],
                                        }}
                                        transition={{
                                            duration: b.duration,
                                            delay: b.delay,
                                            repeat: Infinity,
                                            ease: "easeOut",
                                        }}
                                    />
                                ))}
                            </g>

                            {/* جسم الكأس الزجاجي */}
                            <rect
                                x="386"
                                y="206"
                                width="92"
                                height="136"
                                rx="10"
                                fill={`url(#${uid}-glass-body)`}
                                stroke="#A7F3D0"
                                strokeOpacity="0.4"
                                strokeWidth="1.5"
                            />

                            {/* حافة الكأس العلوية */}
                            <rect
                                x="381"
                                y="202"
                                width="102"
                                height="6"
                                rx="3"
                                fill="#D1FAE5"
                                fillOpacity="0.25"
                                stroke="#A7F3D0"
                                strokeOpacity="0.45"
                            />

                            {/* تدريجات الكأس الزجاجي */}
                            {[230, 255, 280, 305].map((yPos, idx) => (
                                <g key={idx}>
                                    <line
                                        x1="454"
                                        y1={yPos}
                                        x2="472"
                                        y2={yPos}
                                        stroke="#F8FAFC"
                                        strokeOpacity="0.45"
                                        strokeWidth="1.2"
                                    />
                                </g>
                            ))}

                            {/* لمعة الزجاج الأمامية للكأس */}
                            <rect
                                x="394"
                                y="214"
                                width="8"
                                height="118"
                                rx="4"
                                fill="#FFFFFF"
                                fillOpacity="0.24"
                            />
                        </g>
                    </svg>

                    {/* أزرار الـ Hotspots التفاعلية فوق الرسم */}
                    {HOTSPOTS.map((spot) => {
                        const isSelected = activeSpot.id === spot.id;
                        return (
                            <button
                                key={spot.id}
                                type="button"
                                onClick={() => setActiveSpot(spot)}
                                onMouseEnter={() => setActiveSpot(spot)}
                                style={{
                                    left: `${spot.xPercent}%`,
                                    top: `${spot.yPercent}%`,
                                }}
                                aria-label={`Inspect ${spot.metric}`}
                                className="group absolute -translate-x-1/2 -translate-y-1/2 p-2 focus:outline-none"
                            >
                                <span className="relative flex h-6 w-6 items-center justify-center">
                                    <span
                                        className={`absolute inline-flex h-full w-full rounded-full transition-all duration-300 ${isSelected
                                                ? "animate-ping bg-[#E5A93C] opacity-80"
                                                : "bg-[#4ADE80]/40 group-hover:bg-[#E5A93C]/60"
                                            }`}
                                    />
                                    <span
                                        className={`relative inline-flex h-3.5 w-3.5 rounded-full border-2 transition-transform duration-300 ${isSelected
                                                ? "scale-125 bg-[#E5A93C] border-[#061A12] shadow-[0_0_15px_#E5A93C]"
                                                : "bg-[#0B261C] border-[#4ADE80] group-hover:scale-110"
                                            }`}
                                    />
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* بطاقة عرض البيانات التفاعلية السفلية (Responsive Spec HUD) */}
                <div className="mt-3 rounded-2xl border border-[#1E4635] bg-[#061A12]/90 p-4 transition-colors">
                    {/* أزرار التبديل السريع للموبايل والديسكتوب */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                        {HOTSPOTS.map((spot) => {
                            const isSelected = activeSpot.id === spot.id;
                            return (
                                <button
                                    key={spot.id}
                                    type="button"
                                    onClick={() => setActiveSpot(spot)}
                                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${isSelected
                                            ? "bg-[#E5A93C] text-[#061A12] font-semibold shadow-[0_0_15px_rgba(229,169,60,0.35)]"
                                            : "bg-[#0B261C] text-[#B8D0C5] hover:text-white border border-[#1E4635]"
                                        }`}
                                >
                                    {spot.metric}
                                </button>
                            );
                        })}
                    </div>

                    {/* محتوى النقطة المختارة مع أنيميشن ناعم */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeSpot.id}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                        >
                            <div className="space-y-1">
                                <div className="text-[11px] font-mono uppercase tracking-widest text-[#E5A93C]">
                                    {activeSpot.label}
                                </div>
                                <p
                                    className="text-xs sm:text-sm text-[#B8D0C5] leading-relaxed"
                                >
                                    {activeSpot.description}
                                </p>
                            </div>

                            <div className="shrink-0 self-start sm:self-center rounded-xl border border-[#E5A93C]/40 bg-[#E5A93C]/10 px-3.5 py-2 text-right">
                                <div className="text-[10px] uppercase tracking-wider text-[#B8D0C5]">
                                    Verified Spec
                                </div>
                                <div className="text-base sm:text-lg font-bold text-[#F8FAFC] font-mono">
                                    {activeSpot.value}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
}