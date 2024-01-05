import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-camphor)', 'system-ui'],
    },
    fontWeight: {
      light: '300',
      regular: '400',
      medium: '500',
      bold: '700',
    },
    fontSize: {
      'x-sm': '0.75rem',
      'sm-mobile': '0.85rem',
      sm: '0.875',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '3.25rem',
      '3xl-mobile': '2rem',
      '4xl': '4.25rem',
      '4xl-mobile': '2.5rem',
    },
    lineHeight: {
      tight: '105%',
      loose: '120%',
      'x-loose': '140%',
      'xx-loose': '160%',
    },
    letterSpacing: {
      tightest: '-.065em',
      tighter: '-.040em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.20em',
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
        400: '#383838',
        500: '#252525',
        600: '#1A1A1A',
      },
      extend: {},
    },
  },
  plugins: [],
};
export default config;
