/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0c0d0f",
        darkLight: "#1a1b1f",
        darkBorder: "#2c2d32",
      }
    },
  },
  plugins: [],
}