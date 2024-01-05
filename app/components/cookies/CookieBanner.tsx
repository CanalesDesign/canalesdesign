'use client';
import { getLocalStorage, setLocalStorage } from '@/lib/storageHelper';
import { useState, useEffect } from 'react';
import Balancer from 'react-wrap-balancer';

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage('cookie_consent', null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? 'granted' : 'denied';

    window.gtag('consent', 'update', {
      analytics_storage: newValue,
    });

    setLocalStorage('cookie_consent', cookieConsent);

    //For Testing
    console.log('Cookie Consent: ', cookieConsent);
  }, [cookieConsent]);

  return (
    <div className="cookie__banner--contanier w-[80%] md:max-w-4xl mx-auto mb-6 mt-6 fixed bottom-0 left-0 right-0 flex px-6 md:px-8 py-4 justify-between md:items-center flex-col sm:flex-row gap-4 md:gap-0 bg-neutrals-600 rounded-xl">
      <div className="text__wrapper md:max-w-[60%]">
        <Balancer>
          <p className="body__x-sm text-primary-400">
            Utilizamos <strong className="text-primary-200">cookies</strong>{' '}
            para aprimorar sua experiência. Ao continuar, você concorda com
            nossa Política de Cookies. Seu dados estão seguros e nunca serão
            divulgados.
          </p>
        </Balancer>
      </div>

      <div className="flex gap-2 md:max-w-[40%] justify-start md:justify-between">
        <button
          className="px-5 py-2 text-primary-300 rounded-lg tracking-wider body__x-sm border-gray-900 uppercase bg-neutrals-400 hover:opacity-80 transition-all ease-in-out duration-[400ms]"
          onClick={() => setCookieConsent(false)}
        >
          Recusar
        </button>
        <button
          className="bg-gray-900 px-5 py-2 text-primary-300 rounded-lg tracking-wider body__x-sm bg-neutrals-400 uppercase hover:opacity-80 transition-all ease-in-out duration-[400ms]"
          onClick={() => setCookieConsent(true)}
        >
          Permitir Cookies
        </button>
      </div>
    </div>
  );
}
