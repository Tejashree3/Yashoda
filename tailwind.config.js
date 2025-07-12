/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",
        shadow: "rgba(var(--shadow))",
        secondary_background: "rgba(var(--secondary_background))",
        border_normal: "rgba(var(--border_normal))",
        border_highlighter: "rgba(var(--border_highlighter))",
        text_highlighter: "rgba(var(--text_highlighter))",
        text_navbar: "rgba(var(--text_navbar))",
        text_heading: "rgba(var(--text_heading))",
        text_secondary: "rgba(var(--text_secondary))",
        hover: "rgba(var(--hover))",
        orange_color: "rgba(var(--orange_color))"
      }
    },
  },
  plugins: [],
}
