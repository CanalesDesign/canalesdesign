import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-camphor), ui-sans-serif'],
    },
    fontWeight: {
      light: '300',
      regular: '400',
      medium: '500',
      bold: '700',
    },
    fontSize: {
      sm: '0.75rem',
      'sm-mobile': '0.85rem',
      base: '1rem',
      lg: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '3.25rem',
      '4xl': '4.25rem',
      '4xl-mobile': '2.5rem',
    },
    lineHeight: {
      tight: '4.5rem',
      'tight-mobile': '2.75rem',
      loose: '1.75rem',
      'loose-mobile': '1.5rem',
      'x-loose': '1.275rem',
    },
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
      extend: {},
    },
  },
  plugins: [],
};
export default config;
