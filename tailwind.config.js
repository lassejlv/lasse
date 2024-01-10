/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#121213",
        darkLight: "#202120",
        darkBorder: "#282829"
      }
    },
  },
  plugins: [],
}