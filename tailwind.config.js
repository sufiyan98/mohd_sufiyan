/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          dark: '#17181D',
          light: '#292C35',
        },
        accent: {
          DEFAULT: '#E09145',
          light: '#FCD9B8',
        },
      },
    },
  },
  plugins: [],
};
