const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Override Tailwind’s modern color functions with RGB fallbacks
        background: "rgb(255, 255, 255)",
        foreground: "rgb(0, 0, 0)",

        // Force Tailwind to use rgb-based palette
        ...colors,
      },
    },
  },
  plugins: [],
};
