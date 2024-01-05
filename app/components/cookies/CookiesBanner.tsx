'use client ';
import React from 'react';
import { useState } from 'react';
import { hasCookie, setCookie } from 'cookies-next';

export default function CookiesBanner() {
  const [showConsent, setShowConsent] = useState(true);

  React.useEffect(() => {
    setShowConsent(hasCookie('localConsent'));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie('localConsent', 'true', {});
  };

  const rejectCookie = () => {
    setShowConsent(true);
    setCookie('localConsent', 'true', {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-slate-700 bg-opacity-70">
      <div className="fixed bottom-0 left-0 right-0 flex flex-col md:flex-row md:items-center md:justify-around px-6 py-10 lg:py-6 lg:px-12  bg-primary-700">
        <span className="body__sm leading-x-loose text-primary-200 md:mr-16">
          Utilizamos cookies para aprimorar sua experiência. Ao continuar, você
          concorda com nossa Política de Cookies. Seu dados estão seguros e
          nunca serão divulgados.
        </span>
        <button
          className="btn__secondary mt-6 md:mt-0"
          onClick={() => acceptCookie()}
        >
          Aceitar
        </button>
      </div>
    </div>
  );
}
