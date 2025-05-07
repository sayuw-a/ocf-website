/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cozy-purple': '#e6e6fa',
        'cozy-lavender': '#d8bfd8',
        'cozy-blue': '#b0c4de',
        'cozy-dark': '#4b0082',
        'cozy-gradient-start': '#9370db',
        'cozy-gradient-end': '#483d8b',
      },
      boxShadow: {
        'retro': '2px 2px 0px 0px rgba(0, 0, 0, 0.2)',
        'retro-lg': '4px 4px 0px 0px rgba(0, 0, 0, 0.2)',
        'bevel': 'inset -2px -2px 0px 0px rgba(0, 0, 0, 0.2), inset 2px 2px 0px 0px rgba(255, 255, 255, 0.8)',
      },
      fontFamily: {
        'retro': ['VT323', 'monospace'],
        'sans': ['IBM Plex Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-retro': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 