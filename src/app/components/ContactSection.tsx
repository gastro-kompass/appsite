'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const serviceOptions = [
  'Standort & Lokalfindung',
  'Gründung & Rechtsform',
  'Förderungen & Finanzierung',
  'Betriebsanlagengenehmigung',
  'Registrierkasse & Payment',
  'Steuerliche Expertise',
  'Ausstattung & Bau',
  'Marketing & Digitale Präsenz',
  'Das Rundum-Paket',
  'Sonstiges',
];

const officeHours = [
  { day: 'Mo – Do', hours: '09:00 – 18:00 Uhr' },
  { day: 'Fr', hours: '09:00 – 15:00 Uhr' },
  { day: 'Sa – So', hours: 'Geschlossen' },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    bereich: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-20 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <span className="section-label justify-center">Kontakt</span>
          <h2 className="text-section-title font-extrabold text-foreground">
            Kontakt <span className="text-primary">aufnehmen</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-base">
            Stellen Sie uns Ihre Fragen oder fordern Sie Ihre Erstberatung an. Wir melden uns
            innerhalb von 24 Stunden.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: Form (wider) */}
          <div className="lg:col-span-3 bg-accent rounded-2xl p-8 border border-border">
            {submitted ? (
              <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="CheckCircleIcon" size={32} className="text-primary" variant="solid" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Vielen Dank!</h3>
                <p className="text-muted-foreground text-sm max-w-xs">
                  Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns innerhalb von 24 Stunden
                  bei Ihnen.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-primary font-semibold text-sm hover:underline"
                >
                  Neue Anfrage stellen
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-bold text-foreground text-lg mb-2">Anfrage senden</h3>
                
                {/* Row 1: Firmenname & Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-foreground/60">
                      Firmenname
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Name Ihres Unternehmens"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-foreground/60">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Ihr vollständiger Name"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: E-Mail & Telefonnummer */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-foreground/60">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="ihre@email.at"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-foreground/60">
                      Telefonnummer
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+43 660 7676484"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                  </div>
                </div>

                {/* Row 3: Bereich */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-foreground/60">
                    Bereich
                  </label>
                  <select
                    name="bereich"
                    value={formData.bereich}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  >
                    <option value="">Bitte wählen...</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Row 4: Nachricht */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-foreground/60">
                    Nachricht *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Beschreiben Sie kurz Ihr Vorhaben oder Ihre Frage..."
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full justify-center py-3.5 text-sm font-bold"
                >
                  <Icon name="PaperAirplaneIcon" size={16} />
                  Jetzt Anfrage senden
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  Mit dem Absenden stimmen Sie unserer{' '}
                  <a href="/datenschutz" className="text-primary hover:underline">
                    Datenschutzerklärung
                  </a>{' '}
                  zu.
                </p>
              </form>
            )}
          </div>

          {/* Right: Info cards */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Contact info */}
            <div className="bg-accent rounded-2xl p-6 border border-border space-y-4">
              <h3 className="font-bold text-foreground text-base">Direkt erreichbar</h3>
              <ul className="space-y-3">
                {[
                  {
                    icon: 'MapPinIcon' as const,
                    label: 'Adresse',
                    value: 'Döblinger Straße 82/2a\n1190 Wien, Österreich',
                    href: undefined,
                  },
                  {
                    icon: 'PhoneIcon' as const,
                    label: 'Telefon',
                    value: '+43 660 7676484',
                    href: 'tel:+436607676484',
                  },
                  {
                    icon: 'EnvelopeIcon' as const,
                    label: 'E-Mail',
                    value: 'info@gastrokompass.at',
                    href: 'mailto:info@gastrokompass.at',
                  },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon name={item.icon} size={15} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-semibold text-xs">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-muted-foreground text-xs mt-0.5 whitespace-pre-line hover:text-primary transition-colors block"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-xs mt-0.5 whitespace-pre-line">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Office hours */}
            <div className="bg-accent rounded-2xl p-6 border border-border space-y-3">
              <h3 className="font-bold text-foreground text-base flex items-center gap-2">
                <Icon name="ClockIcon" size={16} className="text-primary" />
                Öffnungszeiten
              </h3>
              <ul className="space-y-2">
                {officeHours.map((h) => (
                  <li key={h.day} className="flex justify-between items-center text-xs">
                    <span className="text-foreground font-medium">{h.day}</span>
                    <span className="text-muted-foreground">{h.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/436607676484"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 px-5 py-4 rounded-2xl bg-primary text-white font-bold hover:bg-primary/90 transition-all duration-200 group"
            >
              <div>
                <p className="text-sm font-bold">WhatsApp Chat</p>
                <p className="text-white/70 text-xs font-normal mt-0.5">
                  Antwort meist innerhalb 1 Stunde
                </p>
              </div>
              <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all">
                <Icon name="ChatBubbleOvalLeftEllipsisIcon" size={20} className="text-white" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
