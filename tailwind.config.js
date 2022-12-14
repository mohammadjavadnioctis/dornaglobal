/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8B5CF6",
          50: "#FFFFFF",
          100: "#F9F7FF",
          200: "#DED0FC",
          300: "#C2A9FA",
          400: "#A783F8",
          500: "#8B5CF6",
          600: "#6527F3",
          700: "#4A0CD6",
          800: "#3709A1",
          900: "#25066C",
        },
        accent: {
          DEFAULT: "#E9C46A",
          50: "#FFFFFF",
          100: "#FEFCF8",
          200: "#F9EED5",
          300: "#F3E0B1",
          400: "#EED28E",
          500: "#E9C46A",
          600: "#E2B139",
          700: "#C6951D",
          800: "#957016",
          900: "#644B0F",
        },
        subtitleColor: {
          DEFAULT: "#7A7A7A",
        },
        titleColors: {
          DEFAULT: "#222222",
        },
      },
      fontFamily: {
        playfair: ["Playfair Display", ...defaultTheme.fontFamily.sans],
        sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
      },
    },
    animation: {
      "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    // ...
  ],
};
