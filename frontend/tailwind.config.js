/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow:{
        "box":"rgba(0, 0, 0, 0.1) 0px 4px 12px;"
      },
      colors:{
        "secondary":"#ECEEEF"
      },
      fontFamily:{
        "roboto":['Roboto', 'sans-serif'],
        "sans":['Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}