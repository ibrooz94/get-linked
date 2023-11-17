/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-purple': 'rgb(var(--color-dark-purple) / <alpha-value>)',
        'bright-purple': 'rgb(var(--color-bright-purple) / <alpha-value>)',
        'purple': 'rgb(var(--color-purple) / <alpha-value>)',

        // 'dark-purple':'rgb(21 14 40 / <alpha-value>)', // #150e28
        // 'bright-purple': '#903AFF',
        // 'purple': 'rgb(212 52 254 / <alpha-value>)' // #D434FE 
      },
      fontFamily: {
        'clash': ['Clash Display', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 100s linear infinite',
      },
      backgroundPosition: {
        'mobile': "8% 10%, 100% 100%", // header background image postions
        'large': "10% -40%, 100% 100%"
      }
    },
  },
  plugins: [],
}

