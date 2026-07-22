'use client';

import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#1A1A1A] py-16 px-6">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-[#8DC21F] transition-colors text-sm font-medium mb-8"
          >
            <Icon name="ArrowLeftIcon" size={16} />
            Zurück zur Startseite
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Impressum</h1>
          <p className="text-white/50 mt-3 text-base">Angaben gemäß § 5 ECG (E-Commerce-Gesetz)</p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-16 space-y-12">
        {/* Unternehmensangaben */}
        <section>
          <h2 className="text-2xl font-extrabold text-[#1A1A1A] mb-6 pb-3 border-b border-gray-100">
            Unternehmensangaben
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#F5F5F5] rounded-2xl p-6 space-y-3">
              <div>
                <p className="text-xs font-bold text-[#8DC21F] uppercase tracking-widest mb-1">
                  Firmenname
                </p>
                <p className="text-[#1A1A1A] font-semibold">GASTRO-KOMPASS</p>
              </div>
              <div>
                <p className="text-xs font-bold text-[#8DC21F] uppercase tracking-widest mb-1">
                  Rechtsform
                </p>
                <p className="text-[#1A1A1A] font-semibold">Einzelunternehmen</p>
              </div>
              <div>
                <p className="text-xs font-bold text-[#8DC21F] uppercase tracking-widest mb-1">
                  Unternehmensgegenstand
                </p>
                <p className="text-[#1A1A1A] font-semibold">Unternehmensberatung für Gastronomie</p>
              </div>
            </div>
            <div className="bg-[#F5F5F5] rounded-2xl p-6 space-y-3">
              <div>
                <p className="text-xs font-bold text-[#8DC21F] uppercase tracking-widest mb-1">
                  Adresse
                </p>
                <p className="text-[#1A1A1A] font-semibold">
                  Döblinger Straße 82/2a
                  <br />
                  1190 Wien, Österreich
                </p>
              </div>
              <div>
                <p className="text-xs font-bold text-[#8DC21F] uppercase tracking-widest mb-1">
                  Kammer / Berufsverband
                </p>
                <p className="text-[#1A1A1A] font-semibold">Wirtschaftskammer Wien (WKO Wien)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section>
          <h2 className="text-2xl font-extrabold text-[#1A1A1A] mb-6 pb-3 border-b border-gray-100">
            Kontakt
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-[#F5F5F5] rounded-xl">
              <div className="w-10 h-10 rounded-xl bg-[#8DC21F]/10 flex items-center justify-center shrink-0">
                <Icon name="PhoneIcon" size={18} className="text-[#8DC21F]" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Telefon</p>
                <a
                  href="tel:+436607676484"
                  className="text-[#1A1A1A] font-semibold hover:text-[#8DC21F] transition-colors"
                >
                  +43 660 7676484
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-[#F5F5F5] rounded-xl">
              <div className="w-10 h-10 rounded-xl bg-[#8DC21F]/10 flex items-center justify-center shrink-0">
                <Icon name="EnvelopeIcon" size={18} className="text-[#8DC21F]" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">E-Mail</p>
                <a
                  href="mailto:info@gastrokompass.at"
                  className="text-[#1A1A1A] font-semibold hover:text-[#8DC21F] transition-colors"
                >
                  info@gastrokompass.at
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-[#F5F5F5] rounded-xl">
              <div className="w-10 h-10 rounded-xl bg-[#8DC21F]/10 flex items-center justify-center shrink-0">
                <Icon name="GlobeAltIcon" size={18} className="text-[#8DC21F]" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Website</p>
                <a
                  href="https://gastrokomp5132.builtwithrocket.new"
                  className="text-[#1A1A1A] font-semibold hover:text-[#8DC21F] transition-colors"
                >
                  www.gastrokompass.at
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Aufsichtsbehörde */}
        <section>
          <h2 className="text-2xl font-extrabold text-[#1A1A1A] mb-6 pb-3 border-b border-gray-100">
            Aufsichtsbehörde & Berufsrecht
          </h2>
          <div className="bg-[#F5F5F5] rounded-2xl p-6 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-[#1A1A1A]">Aufsichtsbehörde:</span>{' '}
              Wirtschaftskammer Wien (WKO Wien), Stubenring 8–10, 1010 Wien
            </p>
            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-[#1A1A1A]">Anwendbare Rechtsvorschriften:</span>{' '}
              Gewerbeordnung (GewO 1994), abrufbar unter{' '}
              <a
                href="https://www.ris.bka.gv.at"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8DC21F] hover:underline font-medium"
              >
                www.ris.bka.gv.at
              </a>
            </p>
            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-[#1A1A1A]">Berufsbezeichnung:</span>{' '}
              Unternehmensberater (verliehen in Österreich)
            </p>
          </div>
        </section>

        {/* Haftungsausschluss */}
        <section>
          <h2 className="text-2xl font-extrabold text-[#1A1A1A] mb-6 pb-3 border-b border-gray-100">
            Haftungsausschluss
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <div className="bg-[#F5F5F5] rounded-2xl p-6">
              <h3 className="font-bold text-[#1A1A1A] mb-2">Haftung für Inhalte</h3>
              <p>
                Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die
                Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine
                Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 ECG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
              </p>
            </div>
            <div className="bg-[#F5F5F5] rounded-2xl p-6">
              <h3 className="font-bold text-[#1A1A1A] mb-2">Haftung für Links</h3>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
                keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
                Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
                Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </div>
            <div className="bg-[#F5F5F5] rounded-2xl p-6">
              <h3 className="font-bold text-[#1A1A1A] mb-2">Urheberrecht</h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </div>
        </section>

        {/* Online-Streitbeilegung */}
        <section>
          <h2 className="text-2xl font-extrabold text-[#1A1A1A] mb-6 pb-3 border-b border-gray-100">
            Online-Streitbeilegung
          </h2>
          <div className="bg-[#F5F5F5] rounded-2xl p-6">
            <p className="text-gray-700 leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
              bereit:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8DC21F] hover:underline font-medium"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              . Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder
              verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
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
    </main>
  );
}
