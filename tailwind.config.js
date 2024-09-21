/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FF6000",
        secondary: "#0042D6",
        tertiary: "#121212",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        breathe: {
          "0%, 100%": {
            fontVariationSettings: "'wght' 100, 'wdth' 85",
          },
          "50%": {
            fontVariationSettings: "'wght' 900, 'wdth' 100",
          },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        breathe: "breathe 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
