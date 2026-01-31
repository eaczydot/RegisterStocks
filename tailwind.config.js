/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      colors: {
        "night-sky": "#05070d",
        "deep-space": "#0b1220",
        "ice-blue": "#7cccff",
      },
      boxShadow: {
        glow: "0 0 40px rgba(124, 204, 255, 0.15)",
      },
    },
  },
  plugins: [],
};
