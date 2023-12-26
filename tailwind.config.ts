import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  purge: {
    safelist: [{pattern: /bg-/}]
  },
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
      spacing: {
          "0.5": "4px",
          "1": "8px",
          "2": "16px",
          "3": "24px",
          "4": "32px",
          "5": "40px",
          "6": "48px",
          "7": "56px",
          "8": "64px",
          "9": "72px",
          "10": "80px",
          "11": "88px",
          "12": "96px",
          "13": "104px",
          "14": "112px",
          "15": "120px",
          "16": "128px",
          "17": "136px",
          "18": "144px",
          "19": "152px",
          "20": "160px",
          "21": "168px",
          "22": "176px",
          "23": "184px",
          "24": "192px",
          "25": "200px",
          "26": "208px",
          "27": "216px",
          "28": "224px",
          "29": "232px",
          "30": "240px",
          "31": "248px",
          "32": "256px",
          "33": "264px",
          "34": "272px",
          "35": "280px",
          "36": "288px",
          "37": "296px",
          "38": "304px",
          "39": "312px",
          "40": "320px",
      }
    },
  },
  plugins: [],
}
export default config
