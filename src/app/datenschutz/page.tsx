'use client';

import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import Footer from '@/components/Footer';

const sections = [
  {
    id: 1,
    title: 'Verantwortlicher',
    content: `Verantwortlich für die Verarbeitung Ihrer personenbezogenen Daten auf dieser Website ist:

LA Entertainment & Consulting e.U.
Inhaber: Lulzim Asanoski
Döblinger Hauptstraße 82/2A
1190 Wien
Österreich

E-Mail: info@business2love.at
Website: business2love.at`,
  },
  {
    id: 2,
    title: 'Allgemeines',
    content: `Der Schutz Ihrer personenbezogenen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen der Datenschutz-Grundverordnung (DSGVO), des österreichischen Datenschutzgesetzes (DSG) sowie des Telekommunikationsgesetzes (TKG), soweit dieses anwendbar ist.`,
  },
  {
    id: 3,
    title: 'Erhebung und Verarbeitung personenbezogener Daten',
    content: `Personenbezogene Daten werden nur verarbeitet, wenn Sie uns diese freiwillig mitteilen, beispielsweise durch eine Kontaktaufnahme per E-Mail oder über ein Kontaktformular.

Dabei können insbesondere folgende Daten verarbeitet werden:

• Name
• E-Mail-Adresse
• Telefonnummer (falls angegeben)
• Inhalt Ihrer Nachricht

Die Verarbeitung erfolgt ausschließlich zur Bearbeitung Ihrer Anfrage sowie zur Durchführung vorvertraglicher Maßnahmen oder zur Erfüllung eines Vertrages.`,
  },
  {
    id: 4,
    title: 'Rechtsgrundlagen',
    content: `Die Verarbeitung Ihrer personenbezogenen Daten erfolgt gemäß Art. 6 Abs. 1 DSGVO, insbesondere auf Grundlage:

lit. a - Einwilligung
lit. b - Vertragserfüllung oder Durchführung vorvertraglicher Maßnahmen
lit. c - Erfüllung gesetzlicher Verpflichtungen
lit. f - Berechtigtes Interesse an einer sicheren und funktionierenden Website sowie einer effizienten Kommunikation.`,
  },
  {
    id: 5,
    title: 'Server-Logfiles',
    content: `Beim Besuch dieser Website werden durch den Hosting-Anbieter automatisch Informationen erhoben und in Server-Logfiles gespeichert. Hierzu zählen insbesondere:

• IP-Adresse
• Datum und Uhrzeit des Zugriffs
• Browsertyp und Browserversion
• Betriebssystem
• besuchte Seiten
• Referrer-URL

Diese Daten dienen ausschließlich der Gewährleistung eines sicheren und störungsfreien Betriebs der Website sowie der Fehleranalyse.`,
  },
  {
    id: 6,
    title: 'Cookies',
    content: `Diese Website verwendet ausschließlich technisch notwendige Cookies, soweit dies für den Betrieb der Website erforderlich ist.

Sollten künftig weitere Cookies (z. B. Analyse- oder Marketing-Cookies) eingesetzt werden, erfolgt dies ausschließlich nach Ihrer ausdrücklichen Einwilligung über ein Cookie-Banner gemäß den gesetzlichen Bestimmungen.`,
  },
  {
    id: 7,
    title: 'Speicherdauer',
    content: `Ihre personenbezogenen Daten werden nur so lange gespeichert, wie dies zur Erfüllung der jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.`,
  },
  {
    id: 8,
    title: 'Weitergabe personenbezogener Daten',
    content: `Eine Übermittlung Ihrer personenbezogenen Daten an Dritte erfolgt nur, wenn:

• Sie ausdrücklich eingewilligt haben,
• dies zur Vertragserfüllung erforderlich ist,
• eine gesetzliche Verpflichtung besteht oder
• ein berechtigtes Interesse gemäß Art. 6 Abs. 1 lit. f DSGVO vorliegt.`,
  },
  {
    id: 9,
    title: 'Ihre Rechte',
    content: `Sie haben jederzeit das Recht auf:

• Auskunft,
• Berichtigung,
• Löschung,
• Einschränkung der Verarbeitung,
• Datenübertragbarkeit,
• Widerspruch gegen die Verarbeitung sowie
• Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft.

Zur Ausübung Ihrer Rechte können Sie uns jederzeit unter der oben angegebenen E-Mail-Adresse kontaktieren.`,
  },
  {
    id: 10,
    title: 'Beschwerderecht',
    content: `Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen datenschutzrechtliche Vorschriften verstößt, haben Sie das Recht, Beschwerde bei der zuständigen Aufsichtsbehörde einzulegen.

Zuständige Aufsichtsbehörde in Österreich ist die Österreichische Datenschutzbehörde (DSB).`,
  },
  {
    id: 11,
    title: 'Änderungen dieser Datenschutzerklärung',
    content: `Wir behalten uns vor, diese Datenschutzerklärung bei Änderungen unserer Website oder aufgrund gesetzlicher Vorgaben anzupassen. Es gilt jeweils die auf dieser Website veröffentlichte aktuelle Fassung.`,
  },
];

export default function DatenschutzPage() {
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
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Datenschutzerklärung</h1>
          <p className="text-white/50 mt-3 text-base">
            Gemäß DSGVO (Datenschutz-Grundverordnung) und DSG (Datenschutzgesetz)
          </p>
        </div>
      </div>
      {/* Intro */}
      <div className="mx-auto max-w-4xl px-6 pt-12 pb-4">
        <div className="bg-[#8DC21F]/8 border border-[#8DC21F]/20 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#8DC21F]/15 flex items-center justify-center shrink-0 mt-0.5">
              <Icon name="ShieldCheckIcon" size={20} className="text-[#8DC21F]" />
            </div>
            <div>
              <h2 className="font-bold text-[#1A1A1A] mb-1">Ihr Datenschutz ist uns wichtig</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Der Schutz Ihrer personenbezogenen Daten ist uns ein besonderes Anliegen. Wir
                verarbeiten Ihre Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Sections */}
      <div className="mx-auto max-w-4xl px-6 py-8 space-y-6">
        {sections.map((section) => (
          <div key={section.id} className="bg-[#F5F5F5] rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-extrabold text-[#1A1A1A] mb-4">{section.title}</h2>
            <div className="text-gray-700 leading-relaxed text-sm whitespace-pre-line">
              {section.content}
            </div>
          </div>
        ))}

        {/* Contact for data requests */}
        <div className="bg-[#1A1A1A] rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-extrabold text-white mb-3">Datenschutzanfragen</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-5">
            Für Anfragen zum Datenschutz, zur Auskunft über gespeicherte Daten oder zur
            Geltendmachung Ihrer Rechte wenden Sie sich bitte direkt an uns:
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:info@business2love.at"
              className="inline-flex items-center gap-2 bg-[#8DC21F] text-white px-5 py-3 rounded-xl font-semibold text-sm hover:bg-[#7ab01a] transition-colors"
            >
              <Icon name="EnvelopeIcon" size={16} />
              info@business2love.at
            </a>
          </div>
        </div>

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
