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
        navy: {
          dark: '#1a1a2e',
          medium: '#16213e',
          light: '#0f3460',
        },
        cream: '#f8f6f2',
        'warm-white': '#fffefb',
        gold: {
          accent: '#e8c547',
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
