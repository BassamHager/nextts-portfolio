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
      animation: {
        "spin-233": "spin 233s linear infinite",
        "spin-144": "spin 144s linear infinite",
        "spin-89": "spin 89s linear infinite",
        "spin-55": "spin 55s linear infinite",
        "spin-34": "spin 34s linear infinite",
        "spin-30": "spin 30s linear infinite",
        "spin-21": "spin 21s linear infinite",
        "spin-20": "spin 20s linear infinite",
        "spin-15": "spin 15s linear infinite",
        "spin-13": "spin 13s linear infinite",
        "spin-10": "spin 10s linear infinite",
        "spin-8": "spin 8s linear infinite",
        "spin-5": "spin 5s linear infinite",
        "spin-3": "spin 3s linear infinite",
        "spin-2": "spin 2s linear infinite",
        "spin-1": "spin 1s linear infinite",

        "bounce-10": "bounce 10s linear infinite",
        "ping-10": "ping 10s linear infinite",
        "pulse-10": "pulse 10s linear infinite",

        "bounce-9": "bounce 9s linear infinite",
        "ping-9": "ping 9s linear infinite",
        "pulse-9": "pulse 9s linear infinite",

        "bounce-7": "bounce 7s linear infinite",
        "ping-7": "ping 7s linear infinite",
        "pulse-7": "pulse 7s linear infinite",

        "bounce-5": "bounce 5s linear infinite",
        "ping-5": "ping 5s linear infinite",
        "pulse-5": "pulse 5s linear infinite",

        "bounce-3": "bounce 3s linear infinite",
        "ping-3": "ping 3s linear infinite",
        "pulse-3": "pulse 3s linear infinite",

        "bounce-1": "bounce 1s linear infinite",
        "ping-1": "ping 1s linear infinite",
        "pulse-1": "pulse 1s linear infinite",
      },
    },
  },
  plugins: [],
};
