'use client';

import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import Footer from '@/components/Footer';

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#1A1A1A] py-16 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-[#8DC21F] transition-colors text-sm font-medium mb-8"
          >
            <Icon name="ArrowLeftIcon" size={16} />
            Zurück zur Startseite
          </Link>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Impressum
          </h1>
          <p className="text-white/50 mt-3 text-base">
            Angaben gemäß § 5 E-Commerce-Gesetz (ECG), § 14 Unternehmensgesetzbuch (UGB) sowie § 25
            Mediengesetz (MedienG)
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 space-y-12">
        {/* Unternehmensdaten */}
        <section>
          <h2 className="text-2xl font-extrabold text-[#1A1A1A] mb-6 pb-3 border-b border-gray-100">
            Unternehmensdaten
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 space-y-3">
              <div>
                <p className="text-xs font-bold text-[#8DC21F] uppercase tracking-widest mb-1">
                  Firmenname
                </p>
                <p className="text-[#1A1A1A] font-semibold">LA Entertainment & Consulting e.U.</p>
              </div>
              <div>
                <p className="text-xs font-bold text-[#8DC21F] uppercase tracking-widest mb-1">
                  Inhaber
                </p>
                <p className="text-[#1A1A1A] font-semibold">Lulzim Asanoski</p>
              </div>
              <div>
                <p className="text-xs font-bold text-[#8DC21F] uppercase tracking-widest mb-1">
                  Rechtsform
                </p>
                <p className="text-[#1A1A1A] font-semibold">Einzelunternehmen (e.U.)</p>
              </div>
            </div>
            <div className="bg-[#F5F5F5] rounded-2xl p-4 sm:p-6 space-y-3">
              <div>
                <p className="text-xs font-bold text-[#8DC21F] uppercase tracking-widest mb-1">
                  Adresse
                </p>
                <p className="text-[#1A1A1A] font-semibold break-words">
                  Döblinger Hauptstraße 82/2A
                  <br />
                  1190 Wien, Österreich
                </p>
              </div>
              <div>
                <p className="text-xs font-bold text-[#8DC21F] uppercase tracking-widest mb-1">
                  Sitz des Unternehmens
                </p>
                <p className="text-[#1A1A1A] font-semibold break-words">1190 Wien, Österreich</p>
              </div>
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section>
          <h2 className="text-2xl font-extrabold text-[#1A1A1A] mb-6 pb-3 border-b border-gray-100 break-words">
            Kontakt
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-[#F5F5F5] rounded-xl">
              <div className="w-10 h-10 rounded-xl bg-[#8DC21F]/10 flex items-center justify-center shrink-0">
                <Icon name="EnvelopeIcon" size={18} className="text-[#8DC21F]" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-gray-500 font-medium">E-Mail</p>
                <a
                  href="mailto:info@business2love.at"
                  className="text-[#1A1A1A] font-semibold hover:text-[#8DC21F] transition-colors break-all"
                >
                  info@business2love.at
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-[#F5F5F5] rounded-xl">
              <div className="w-10 h-10 rounded-xl bg-[#8DC21F]/10 flex items-center justify-center shrink-0">
                <Icon name="GlobeAltIcon" size={18} className="text-[#8DC21F]" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-gray-500 font-medium">Website</p>
                <a
                  href="https://business2love.at"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1A1A1A] font-semibold hover:text-[#8DC21F] transition-colors break-all"
                >
                  business2love.at
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Haftung & Urheberrecht */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#F5F5F5] rounded-2xl p-4 sm:p-6">
            <h3 className="font-bold text-[#1A1A1A] mb-2 text-lg break-words">
              Haftung für Inhalte
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm break-words">
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die
              Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird jedoch keine Haftung
              übernommen.
            </p>
          </div>
          <div className="bg-[#F5F5F5] rounded-2xl p-4 sm:p-6">
            <h3 className="font-bold text-[#1A1A1A] mb-2 text-lg break-words">Urheberrecht</h3>
            <p className="text-gray-700 leading-relaxed text-sm break-words">
              Sämtliche Inhalte dieser Website unterliegen dem Urheberrecht. Die Verwendung,
              Vervielfältigung oder Verbreitung von Inhalten bedarf der vorherigen schriftlichen
              Zustimmung des Rechteinhabers.
            </p>
          </div>
        </section>

        {/* Back link */}
        <div className="pt-4 border-t border-gray-100">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#8DC21F] hover:text-[#7ab01a] transition-colors font-semibold"
          >
            <Icon name="ArrowLeftIcon" size={16} />
            Zurück zur Startseite
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
