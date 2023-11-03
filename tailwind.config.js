/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      border: {
        '1': '1px',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/component/images/bground.png')",
        'herotwo-pattern': "url('/src/component/images/footerbg.png')",
      }
    },
  },
  plugins: [],
}
