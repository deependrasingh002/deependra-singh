/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6", // modern blue
        secondary: "#F8FAFC", // near white text
        secondaryLight: "#CBD5E1", // soft gray text
        third: "#64748B", // muted blue-gray
      },
    },
  },
  plugins: [],
};
