/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#150e28',
        'bright-purple': '#903AFF',
        'purple': '#D434FE',
      },
      fontFamily: {
        'clash': ['Clash Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

