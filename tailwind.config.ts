import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Colors matched to logo
        navy: {
          dark: '#1E3A5F',
          medium: '#2A4A6E',
          light: '#3A5A7E',
        },
        slate: {
          accent: '#8896AA',
        },
        cream: '#F8F9FA',
        'warm-white': '#FEFEFE',
        gold: {
          accent: '#D4A84B',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        korean: ['Noto Sans KR', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'logo': '0.15em',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'soft': '0.75rem',
        'softer': '1rem',
      },
    },
  },
  plugins: [],
}

export default config
