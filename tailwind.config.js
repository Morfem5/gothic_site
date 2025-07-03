/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        vintageCream: '#f8f4e3',
        vintageGold: '#bfa053',
        vintageBurgundy: '#5c1a1a',
        vintageGreen: '#2a3d2e',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        vintage: '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
