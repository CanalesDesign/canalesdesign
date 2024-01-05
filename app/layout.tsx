import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import CookieBanner from './components/cookies/CookieBanner';
import GoogleAnalytics from './components/analytics/GoogleAnalytics';
import { GoogleTagManager } from '@next/third-parties/google';

const camphor = localFont({
  src: [
    { path: './assets/fonts/camphor_light.woff2', weight: '300' },
    { path: './assets/fonts/camphor_regular.woff2', weight: '400' },
    { path: './assets/fonts/camphor_medium.woff2', weight: '500' },
    { path: './assets/fonts/camphor_bold.woff2', weight: '700' },
  ],
  variable: '--font-camphor',
  fallback: ['system-ui', 'sans-serif'],
});

export const metadata: Metadata = {
  title: 'Canales Design',
  description: 'Transforme sua marca com uma Identidade Visual profissional',
  keywords: [
    'Identidade Visual',
    'Design',
    'Design Gráfico',
    'Design Digital',
    'Logotipo',
    'Logo',
    'Web Design',
    'Sites',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${camphor.variable}`}>
      <GoogleAnalytics GA_MEASUREMENT_ID="G-JFSET3TREL" />
      <GoogleTagManager gtmId="GTM-NJS3R648" />
      <body className="font-sans bg-neutrals-500 lp__body">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
