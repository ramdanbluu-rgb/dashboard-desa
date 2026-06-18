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
        // Brand Colors - dari TECHNICAL_STYLING_GUIDE.md
        brand: {
          primary: "#005A9C", // Biru profesional
          secondary: "#27AE60", // Hijau transparansi
          alert: "#E74C3C", // Merah kendala
          neutral: "#F4F6F7", // Background
          text: "#2C3E50", // Text utama
        },
        // Status Colors
        status: {
          completed: "#27AE60", // Hijau
          "in-progress": "#F39C12", // Kuning
          planned: "#95A5A6", // Abu-abu
        },
      },
      borderRadius: {
        DEFAULT: "8px", // Card default radius
      },
      fontFamily: {
        sans: ["Inter", "Roboto", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        soft: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        card: "0 2px 8px 0 rgba(0, 0, 0, 0.08)",
      },
      spacing: {
        safe: "env(safe-area-inset-bottom)",
      },
    },
  },
  plugins: [],
};
export default config;
