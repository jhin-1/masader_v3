import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#061A12",
        foreground: "#F8FAFC",
        masader: {
          dark: "#061A12",
          surface: "#0B261C",
          border: "#1E4635",
          "border-hover": "rgba(229, 169, 60, 0.6)",
          gold: "#E5A93C",
          "gold-light": "#F3C66F",
          emerald: "#4ADE80",
          "emerald-dark": "#22C55E",
          subtext: "#B8D0C5",
          heading: "#F8FAFC",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        arabic: ["var(--font-arabic)", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-subtle": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
