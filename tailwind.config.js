/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': {
          '100': '#ceced2',
          '200': '#9d9da5',
          '300': '#6b6d77',
          '400': '#3a3c4a',
          DEFAULT: '#090B1D',
          '500': '#090B1D',
          '600': '#070917',
          '700': '#050711',
          '800': '#04040c',
          '900': '#020206',
        },
        'secondary': {
          '100': '#fffee5',
          '200': '#fffdcb',
          '300': '#fefdb1',
          '400': '#fefc97',
          DEFAULT: '#FEFB7D',
          '500': '#FEFB7D',
          '600': '#cbc964',
          '700': '#98974b',
          '800': '#666432',
          '900': '#333219',
        },
      },
    },
  },
  plugins: [],
}
