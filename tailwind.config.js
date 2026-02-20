/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF0000", // 🔴 Change this anytime
        secondary: "#111111", // ⚫ Dark background
        accent: "#1A1A1A", // Card background
        textLight: "#E5E5E5",
        textMuted: "#9CA3AF",
      },
    },
  },
  plugins: [],
};
