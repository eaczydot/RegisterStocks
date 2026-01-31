/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        // Primary backgrounds
        "night-sky": "#020202",
        "deep-space": "#0a0a0a",
        "card-bg": "#111111",
        // Legacy alias
        "night-sky-light": "#05070d",
        // Accents
        "ice-blue": "#7cccff",
        "ice-blue-hover": "#a3e0ff",
        "ice-blue-muted": "rgba(124, 204, 255, 0.15)",
        // Text colors
        "text-primary": "#ffffff",
        "text-secondary": "#a0a0a0",
        "text-tertiary": "#6d6e71",
        // Borders
        "border-subtle": "rgba(255, 255, 255, 0.08)",
        "border-default": "rgba(255, 255, 255, 0.12)",
        "border-hover": "rgba(255, 255, 255, 0.25)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(124, 204, 255, 0.15)",
        "glow-lg": "0 0 60px rgba(124, 204, 255, 0.2)",
        "card": "0 8px 30px rgba(0, 0, 0, 0.3)",
      },
      fontSize: {
        // Display sizes
        "display-xl": ["60px", { lineHeight: "1.067", letterSpacing: "-0.02em" }],
        "display-lg": ["48px", { lineHeight: "1.083", letterSpacing: "-0.02em" }],
        "display-md": ["36px", { lineHeight: "1.111" }],
        "display-sm": ["28px", { lineHeight: "1.143" }],
        // Body sizes
        "body-lg": ["20px", { lineHeight: "1.6" }],
        "body-md": ["18px", { lineHeight: "1.556" }],
        "body-sm": ["16px", { lineHeight: "1.5" }],
        // Labels
        "label": ["14px", { lineHeight: "1.429", letterSpacing: "0.1em" }],
        "caption": ["12px", { lineHeight: "1.5" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
        "128": "32rem",
      },
      maxWidth: {
        "container": "1440px",
      },
      borderRadius: {
        "subtle": "5px",
      },
    },
  },
  plugins: [],
};
