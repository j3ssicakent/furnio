import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5F5F5",
        brown: {
          100: "#FFF3E3",
          200: "#FCF8F3",
          500: "#B88E2F"
        },
        gray: {
          100: "#333333",
          200: "#616161",
          300: "#898989",
          400: "#B0B0B0",
          500: "#D8D8D8",
          600: "#E7E7E7"
        } 
      },
      backgroundColor: {
        base: "#F5F5F5"
      },
      backgroundImage: {
        'banner': "url('/images/banner.jpeg')",
      }
    },
  },
  plugins: [],
}
export default config
