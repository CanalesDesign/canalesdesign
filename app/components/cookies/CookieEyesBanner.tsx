import Script from 'next/script';

export default function CookieEyesBanner() {
  return (
    <Script
      id="cookies__eyes--script"
      src={`https://cdn-cookieyes.com/client_data/a340b124c2c84dfdf9263c17/script.js`}
      strategy="beforeInteractive"
    />
  );
}
