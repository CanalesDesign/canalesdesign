import Script from 'next/script';

export default function CookieEyesBanner() {
  return (
    <div className="cookieeyes__banner--wrapper">
      <Script
        src={`https://cdn-cookieyes.com/client_data/a340b124c2c84dfdf9263c17/script.js`}
        strategy="beforeInteractive"
      />
    </div>
  );
}
