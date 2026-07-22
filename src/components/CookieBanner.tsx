'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('gastro_cookie_consent');
    if (!consent) {
      // Small delay to make the entry animation feel smooth and premium
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('gastro_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('gastro_cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-[#1A1A1A]/95 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl text-white">
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-extrabold text-base tracking-wide flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#9DC40E]" />
              Cookie-Einstellungen
            </h4>
            <p className="text-white/70 text-xs leading-relaxed">
              Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. Einige
              sind technisch notwendig, während andere uns helfen, diese Website zu optimieren.
              Weitere Informationen finden Sie in unserer{' '}
              <Link href="/datenschutz" className="text-[#9DC40E] hover:underline font-semibold">
                Datenschutzerklärung
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
            <button
              onClick={handleAccept}
              className="flex-1 px-4 py-2.5 rounded-xl font-bold text-xs bg-[#9DC40E] text-white hover:bg-[#8bb00b] transition-all duration-200 shadow-lg shadow-[#9DC40E]/20 text-center"
            >
              Alle akzeptieren
            </button>
            <button
              onClick={handleDecline}
              className="flex-1 px-4 py-2.5 rounded-xl font-bold text-xs bg-white/10 text-white hover:bg-white/20 border border-white/10 transition-all duration-200 text-center"
            >
              Ablehnen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
