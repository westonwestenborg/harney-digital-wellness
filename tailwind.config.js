/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'flexoki-blue': {
          50: '#E1ECEB',
          100: '#C6DDE8',
          200: '#92BFDB',
          300: '#66A0C8',
          400: '#4385BE',
          500: '#3171B2',
          600: '#205EA6',
          700: '#1A4F8C',
          800: '#163B66',
          900: '#12253B',
        },
        'flexoki-green': {
          50: '#EDEECF',
          100: '#DDE2B2',
          200: '#BEC97E',
          300: '#A0AF54',
          400: '#879A39',
          500: '#768D21',
          600: '#66800B',
          700: '#536907',
          800: '#3D4C07',
          900: '#252D09',
        },
        'flexoki-magenta': {
          50: '#FEE4E5',
          100: '#FCCFDA',
          200: '#F4A4C2',
          300: '#E47DA8',
          400: '#CE5D97',
          500: '#B84F87',
          600: '#A02F6F',
          700: '#882659',
          800: '#6B1D44',
          900: '#4F1533',
        },
        'flexoki-paper': {
          50: '#FFFCF0',
          100: '#F2F0E5',
          200: '#E6E4D9',
          300: '#D3D0C1',
          400: '#BFBBA9',
          500: '#ABA591',
          600: '#968F79',
          700: '#827A61',
          800: '#6D6449',
          900: '#585031',
        }
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      "light",
      {
        flexoki: {
          // Core brand colors - semantic meaning for digital wellness
          "primary": "oklch(47.47% 0.222 255.56)", // Flexoki Blue - Trust, professional guidance
          "secondary": "oklch(52.47% 0.196 106.26)", // Flexoki Green - Growth, wellness, balance
          "accent": "oklch(41.47% 0.250 336.41)", // Flexoki Magenta - Gentle urgency, important actions
          
          // Neutral tones - warm, approachable foundation
          "neutral": "oklch(38.47% 0.110 82.31)",
          "base-100": "oklch(99.47% 0.015 102.11)", // Flexoki Paper - warm, comforting background
          "base-200": "oklch(94.47% 0.020 102.11)", // Subtle sections
          "base-300": "oklch(90.47% 0.025 102.11)", // Borders, dividers
          
          // Content colors - high contrast for accessibility
          "base-content": "oklch(25.47% 0.110 82.31)", // Darker for better readability
          "primary-content": "oklch(99.47% 0.015 102.11)",
          "secondary-content": "oklch(99.47% 0.015 102.11)",
          "accent-content": "oklch(99.47% 0.015 102.11)",
          "neutral-content": "oklch(99.47% 0.015 102.11)",
          
          // Semantic state colors - meaningful for parent guidance
          "info": "oklch(59.47% 0.190 255.56)", // Information, tips
          "success": "oklch(61.47% 0.210 106.26)", // Positive outcomes, healthy habits
          "warning": "oklch(70.47% 0.090 82.31)", // Caution, attention needed
          "error": "oklch(56.47% 0.270 336.41)", // Problems, crisis indicators
        },
      },
    ],
  },
}