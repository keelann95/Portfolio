/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#E5F2FF',
          100: '#CCE4FF',
          200: '#99CAFF',
          300: '#66AFFF',
          400: '#3395FF',
          500: '#0A84FF', // Primary blue
          600: '#0064D0',
          700: '#0040A1',
          800: '#002873',
          900: '#001440',
        },
        secondary: {
          50: '#E7FBF0',
          100: '#D0F7E0',
          200: '#A1EFC2',
          300: '#73E7A3',
          400: '#44DF85',
          500: '#30D158', // Secondary green
          600: '#27A846',
          700: '#1E7F35',
          800: '#155523',
          900: '#0B2C12',
        },
        accent: {
          50: '#FFF5E5',
          100: '#FFEACC',
          200: '#FFD699',
          300: '#FFC166',
          400: '#FFAD33',
          500: '#FF9F0A', // Accent orange
          600: '#D17F00',
          700: '#A36000',
          800: '#744000',
          900: '#462700',
        },
        success: '#34C759',
        warning: '#FF9500',
        error: '#FF3B30',
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
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
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};