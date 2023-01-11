/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        navy: "#0a192f",
        "dark-navy": "#020c1b",
        "light-navy": "#112240",
        "light-slate": "#a8b2d1",
        "lightest-slate": "#ccd6f6",
      },
      colors: {
        "light-slate": "#a8b2d1",
        "lightest-slate": "#ccd6f6",
      },
    },
  },
  plugins: [],
};
