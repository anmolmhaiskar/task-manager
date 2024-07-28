import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        arctik: ["Arctik", "sans-serif"],
      },
      colors: {
        primary: "#7368b7", // Add the custom primary color
        secondary: "#ae9df3",
        urgent: "#ff6b6b",
        medium: "#ffa235",
        low: "#0ecc5a",
        background: "#f5f5f5",
        violetGaze: {
          100: "#e8e5ff", // Very light
          200: "#dcd7ff", // Light
          300: "#cbc3ff", // Light variant, specified color
          400: "#b0a6ff", // Medium-light
          500: "#998eff", // Medium
          600: "#8477ff", // Slightly darker
          700: "#7368b7", // Base color, specified color
          800: "#574c89", // Very dark
          900: "#3e3260", // Almost black
          950: "#2c2242", // Darker
          1000: "#1e1233", // Very dark
          1100: "#140f27", // Darker still
          1200: "#0f0b1e", // Even darker
          1300: "#0a0715", // Darker
          1400: "#05030d", // Darker
          1500: "#03020a", // Darker
          1600: "#020107", // Darker
          1700: "#010105", // Darker
          1800: "#010103", // Darker
          1900: "#000101", // Darker
          2000: "#000000", // Darkest shade, effectively black
        },
      },
    },
  },
  plugins: [],
};

export default config;
