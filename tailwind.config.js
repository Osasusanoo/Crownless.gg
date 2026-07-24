/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f4f2ff",
          100: "#e9e3ff",
          500: "#7c3aed",
          600: "#6d28d9",
          700: "#5b21b6",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(124, 58, 237, 0.35), 0 10px 40px rgba(15, 23, 42, 0.35)",
      },
    },
  },
  plugins: [],
};
