import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          200: '#E6E2DB',
          300: '#D9D3C9',
          400: '#C8BFB1',
          500: '#B7AB98',
          700: '#98876C',
          900: '#5A503F',
        },
        secondary: {
          500: '#EB6439',
        },
        neutrals: {
          500: '#252525',
        },
      },
      extend: {
        fontFamily: {
          sans: ['var(--font-camphor)'],
        },
        fontWeight: {
          regular: '400',
          medium: '500',
          bold: '700',
        },
      },
    },
  },
  plugins: [],
};
export default config;
