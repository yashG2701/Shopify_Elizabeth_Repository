/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/customer/*.liquid',
    './templates/*.liquid'
  ],  
  theme: {
    extend: {},
  },
  plugins: [],
}