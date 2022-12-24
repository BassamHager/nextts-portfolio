/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        chakraPetch: ["var(--font-chakraPetch)"],
        kalam: ["var(--font-kalam)"],
      },
    },
  },
  plugins: [],
};
