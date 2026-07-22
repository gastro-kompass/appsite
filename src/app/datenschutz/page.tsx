'use client';

import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import Footer from '@/components/Footer';

const sections = [
  {
    id: 1,
    title: '1. Verantwortlicher',
    content: `Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler Datenschutzgesetze sowie sonstiger datenschutzrechtlicher Bestimmungen ist:

GASTRO-KOMPASS
Döblinger Straße 82/2a
1190 Wien, Österreich
Telefon: +43 660 7676484
E-Mail: info@gastrokompass.at`,
  },
  {
    id: 2,
    title: '2. Allgemeines zur Datenverarbeitung',
    content: `Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung personenbezogener Daten unserer Nutzer erfolgt regelmäßig nur nach Einwilligung des Nutzers. Eine Ausnahme gilt in solchen Fällen, in denen eine vorherige Einholung einer Einwilligung aus tatsächlichen Gründen nicht möglich ist und die Verarbeitung der Daten durch gesetzliche Vorschriften gestattet ist.`,
  },
  {
    id: 3,
    title: '3. Rechtsgrundlage der Verarbeitung',
    content: `Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine Einwilligung der betroffenen Person einholen, dient Art. 6 Abs. 1 lit. a DSGVO als Rechtsgrundlage.

Bei der Verarbeitung von personenbezogenen Daten, die zur Erfüllung eines Vertrages, dessen Vertragspartei die betroffene Person ist, erforderlich ist, dient Art. 6 Abs. 1 lit. b DSGVO als Rechtsgrundlage.

Soweit eine Verarbeitung personenbezogener Daten zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist, der unser Unternehmen unterliegt, dient Art. 6 Abs. 1 lit. c DSGVO als Rechtsgrundlage.

Ist die Verarbeitung zur Wahrung eines berechtigten Interesses unseres Unternehmens oder eines Dritten erforderlich und überwiegen die Interessen, Grundrechte und Grundfreiheiten des Betroffenen das erstgenannte Interesse nicht, so dient Art. 6 Abs. 1 lit. f DSGVO als Rechtsgrundlage für die Verarbeitung.`,
  },
  {
    id: 4,
    title: '4. Datenlöschung und Speicherdauer',
    content: `Die personenbezogenen Daten der betroffenen Person werden gelöscht oder gesperrt, sobald der Zweck der Speicherung entfällt. Eine Speicherung kann darüber hinaus erfolgen, wenn dies durch den europäischen oder nationalen Gesetzgeber in unionsrechtlichen Verordnungen, Gesetzen oder sonstigen Vorschriften, denen der Verantwortliche unterliegt, vorgesehen wurde. Eine Sperrung oder Löschung der Daten erfolgt auch dann, wenn eine durch die genannten Normen vorgeschriebene Speicherfrist abläuft, es sei denn, dass eine Erforderlichkeit zur weiteren Speicherung der Daten für einen Vertragsabschluss oder eine Vertragserfüllung besteht.`,
  },
  {
    id: 5,
    title: '5. Bereitstellung der Website und Erstellung von Logfiles',
    content: `Bei jedem Aufruf unserer Internetseite erfasst unser System automatisiert Daten und Informationen vom Computersystem des aufrufenden Rechners. Folgende Daten werden hierbei erhoben:

• Informationen über den Browsertyp und die verwendete Version
• Das Betriebssystem des Nutzers
• Den Internet-Service-Provider des Nutzers
• Die IP-Adresse des Nutzers
• Datum und Uhrzeit des Zugriffs
• Websites, von denen das System des Nutzers auf unsere Internetseite gelangt
• Websites, die vom System des Nutzers über unsere Website aufgerufen werden

Die Daten werden in den Logfiles unseres Systems gespeichert. Eine Speicherung dieser Daten zusammen mit anderen personenbezogenen Daten des Nutzers findet nicht statt. Rechtsgrundlage für die vorübergehende Speicherung der Daten und der Logfiles ist Art. 6 Abs. 1 lit. f DSGVO.`,
  },
  {
    id: 6,
    title: '6. Kontaktformular und E-Mail-Kontakt',
    content: `Auf unserer Internetseite ist ein Kontaktformular vorhanden, welches für die elektronische Kontaktaufnahme genutzt werden kann. Nimmt ein Nutzer diese Möglichkeit wahr, so werden die in der Eingabemaske eingegeben Daten an uns übermittelt und gespeichert. Diese Daten sind:

• Name
• E-Mail-Adresse
• Telefonnummer (optional)
• Nachricht / Anliegen

Im Zeitpunkt der Absendung der Nachricht werden zudem folgende Daten gespeichert: Die IP-Adresse des Nutzers sowie Datum und Uhrzeit der Registrierung.

Für die Verarbeitung der Daten wird im Rahmen des Absendevorgangs Ihre Einwilligung eingeholt und auf diese Datenschutzerklärung verwiesen. Rechtsgrundlage für die Verarbeitung der Daten ist bei Vorliegen einer Einwilligung des Nutzers Art. 6 Abs. 1 lit. a DSGVO.`,
  },
  {
    id: 7,
    title: '7. Cookies',
    content: `Unsere Internetseite verwendet Cookies. Bei Cookies handelt es sich um Textdateien, die im Internetbrowser bzw. vom Internetbrowser auf dem Computersystem des Nutzers gespeichert werden. Ruft ein Nutzer eine Website auf, so kann ein Cookie auf dem Betriebssystem des Nutzers gespeichert werden. Dieser Cookie enthält eine charakteristische Zeichenfolge, die eine eindeutige Identifizierung des Browsers beim erneuten Aufrufen der Website ermöglicht.

Wir setzen Cookies ein, um unsere Website nutzerfreundlicher zu gestalten. Einige Elemente unserer Internetseite erfordern es, dass der aufrufende Browser auch nach einem Seitenwechsel identifiziert werden kann.

Die Rechtsgrundlage für die Verarbeitung personenbezogener Daten unter Verwendung technisch notwendiger Cookies ist Art. 6 Abs. 1 lit. f DSGVO.`,
  },
  {
    id: 8,
    title: '8. Rechte der betroffenen Person',
    content: `Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:

• Recht auf Auskunft (Art. 15 DSGVO)
• Recht auf Berichtigung (Art. 16 DSGVO)
• Recht auf Löschung (Art. 17 DSGVO)
• Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)
• Recht auf Datenübertragbarkeit (Art. 20 DSGVO)
• Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)

Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren. Die zuständige Aufsichtsbehörde in Österreich ist die Datenschutzbehörde (DSB), Barichgasse 40–42, 1030 Wien, www.dsb.gv.at.`,
  },
  {
    id: 9,
    title: '9. Datensicherheit',
    content: `Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird. In der Regel handelt es sich dabei um eine 256-Bit-Verschlüsselung. Falls Ihr Browser keine 256-Bit-Verschlüsselung unterstützt, greifen wir stattdessen auf 128-Bit-v3-Technologie zurück. Ob eine einzelne Seite unseres Internetauftrittes verschlüsselt übertragen wird, erkennen Sie an der geschlossenen Darstellung des Schüssel- beziehungsweise Schloss-Symbols in der unteren Statusleiste Ihres Browsers.`,
  },
  {
    id: 10,
    title: '10. Aktualität und Änderung dieser Datenschutzerklärung',
    content: `Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Juni 2026. Durch die Weiterentwicklung unserer Website und Angebote darüber oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf der Website unter dieser URL von Ihnen abgerufen und ausgedruckt werden.`,
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
                GASTRO-KOMPASS nimmt den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln
                Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
                Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Sections */}
      <div className="mx-auto max-w-4xl px-6 py-8 space-y-6">
        {sections?.map((section) => (
          <div key={section?.id} className="bg-[#F5F5F5] rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-extrabold text-[#1A1A1A] mb-4">{section?.title}</h2>
            <div className="text-gray-700 leading-relaxed text-sm whitespace-pre-line">
              {section?.content}
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
              href="mailto:info@gastrokompass.at"
              className="inline-flex items-center gap-2 bg-[#8DC21F] text-white px-5 py-3 rounded-xl font-semibold text-sm hover:bg-[#7ab01a] transition-colors"
            >
              <Icon name="EnvelopeIcon" size={16} />
              info@gastrokompass.at
            </a>
            <a
              href="tel:+436607676484"
              className="inline-flex items-center gap-2 bg-white/10 text-white px-5 py-3 rounded-xl font-semibold text-sm hover:bg-white/15 transition-colors"
            >
              <Icon name="PhoneIcon" size={16} />
              +43 660 7676484
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
