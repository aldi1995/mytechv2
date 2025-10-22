/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  darkMode: "class", // 🌙 Aktifkan dark mode berbasis class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          light: "#7b5cff",  // warna ungu terang khas MYTECH
          DEFAULT: "#5b21b6", // ungu utama
          dark: "#3b0d91",   // ungu gelap
        },
        background: {
          light: "#ffffff",
          dark: "#0f172a",   // abu tua keunguan
        },
      },
    },
  },
  plugins: [],
};
