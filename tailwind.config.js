/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          light: '#FFD700',
        },
        royal: {
          DEFAULT: '#4B0082',
          light: '#6A0DAD',
        },
      },
      boxShadow: {
        'gold': '0 0 15px rgba(212, 175, 55, 0.3)',
        'gold-lg': '0 0 30px rgba(212, 175, 55, 0.4)',
      },
    },
  },
  plugins: [],
};