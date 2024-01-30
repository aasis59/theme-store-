/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    
    './snippets/*.liquid',
    './templates/customers/*.liquid',
    './templates/*.liquid'
  ],
  theme: {
    extend: {
      fontFamily: {
        'twentieth-century': ['Twentieth Century', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

