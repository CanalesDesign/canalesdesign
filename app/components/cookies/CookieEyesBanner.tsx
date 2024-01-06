'use client';
import { useEffect, useState } from 'react';
import Script from 'next/script';

export default function CookieEyesBanner() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="cookei__eyes--wrapper">
      {isClient ? 'This is never prerendered' : 'Prerendered'}
      <Script
        id="cookies__eyes--script"
        src={`https://cdn-cookieyes.com/client_data/a340b124c2c84dfdf9263c17/script.js`}
        strategy="beforeInteractive"
      />
    </div>
  );
}
