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
          dark: 'var(--color-primary-dark)',
          light: 'var(--color-primary-light)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          light: 'var(--color-accent-light)',
        },
        'text-main': 'var(--color-text-main)',
        'card-bg': 'var(--color-card-bg)',
        'button-bg': 'var(--color-button-bg)',
        'button-text': 'var(--color-button-text)',
      },
    },
  },
  plugins: [],
};
