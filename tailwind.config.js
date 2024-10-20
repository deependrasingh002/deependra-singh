/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#64ffda",
        secondary:'#ccd6f6',
        secondaryLight:'#a8b2d1',
        third:'#495670'
      }
    },
  },
  plugins: [],
}