import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)'],
        mono: ['var(--font-dm-mono)']
      },
      colors: {
        'primary': '#4eb7F9',
        'accent': '#06639d',
        'black': '#090e15',
        'white': '#ffffff',
        'light-gray': '#f0f0f0',
        'gray': '#c9c9c9',
        'dark-gray': '#848282',
        'blue-gray': '#475160',
        'paper': '#fafafa',
        'green': '#0dab76',
        'red': '#db5461',
        'orange': '#ee7600',
      },

    },
  },
  plugins: [],
}
export default config
