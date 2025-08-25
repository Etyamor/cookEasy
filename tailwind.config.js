/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    colors: {
      blue: {
        100: "#EAF2FF",
        200: "#B4DBFF",
        300: "#6FBAFF",
        400: "#2897FF",
        500: "#006FFD"
      },
      light: {
        100: "#FFFFFF",
        200: "#F8F9FE",
        300: "#E8E9F1",
        400: "#D4D6DD",
        500: "#C5C6CC"
      },
      dark: {
        100: "#8F9098",
        200: "#71727A",
        300: "#494A50",
        400: "#2F3036",
        500: "#1F2024"
      },
      success: {
        100: "#E7F4E8",
        200: "#3AC0A0",
        300: "#298267"
      },
      warning: {
        100: "#FFF4E4",
        200: "#FFB37C",
        300: "#E86339"
      },
      error: {
        100: "#FFE2E5", 200: "#FF616D", 300: "#ED3241"
      }
    },
    extend: {
      fontFamily: {
        inter: ['Inter_400Regular'],
        interBold: ['Inter_700Bold'],
      },
    },
  },
  plugins: [],
}
