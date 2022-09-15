/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      screens: {
        'phone': '425px',
        // => @media (min-width: 640px) { ... }

        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }

        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}
