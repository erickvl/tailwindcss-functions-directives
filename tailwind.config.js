/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./src/**/*.{html,js}*" watch any tailwind/html files
    "./src/**/*.{html,js}*"
  ],
  theme: {
    extend: {
      spacing: {
        128: '32rem',
      }
    },
  },
  plugins: [],
}
