import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Closer to original: white-dominant + orange accent
        ink: "#1F1F1F",
        body: "#3A3A3A",
        cream: "#FFFFFF",
        offwhite: "#F8F6F2",
        beige: "#F0EBE2",
        orange: "#D4602E",      // hero highlight color from original
        orangeLight: "#E8854F",
        orangeDark: "#A84818",
        ochre: "#E0A044",       // soleil du logo (lighter)
        sea: "#3A8AA8",         // vagues du logo
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        marquee: "marquee 50s linear infinite",
        rise: "rise 1s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      borderRadius: {
        "4xl": "2.5rem",
        "5xl": "3rem",
      },
    },
  },
  plugins: [],
};

export default config;
