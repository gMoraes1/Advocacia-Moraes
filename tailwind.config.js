/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2f7',
          100: '#d0dbe8',
          200: '#b1c4d9',
          300: '#92acca',
          400: '#7395bb',
          500: '#547eac',
          600: '#3a6493',
          700: '#2a4b7a',
          800: '#1a365d', // Main primary color
          900: '#0d1f3c',
        },
        gold: {
          50: '#fcf9ed',
          100: '#f8efcb',
          200: '#f3e5a9',
          300: '#ecda87',
          400: '#e5cf65',
          500: '#d9be43',
          600: '#c9a227', // Main gold color
          700: '#a67f1f',
          800: '#835f17',
          900: '#60400f',
        },
        neutral: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#868e96',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};