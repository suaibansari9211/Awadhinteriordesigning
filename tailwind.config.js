/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
      },
      animation: {
        'slide-left': 'slideLeft 0.5s ease-in-out',
        'slide-right': 'slideRight 0.5s ease-in-out',
      },
      keyframes: {
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};