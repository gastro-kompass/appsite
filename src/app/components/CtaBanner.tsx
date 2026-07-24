import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import { CONTACT_INFO } from '@/config/constants';

export default function CtaBanner() {
  return (
    <section
      className="py-16 border-y overflow-hidden"
      style={{ backgroundColor: '#ffffff', borderColor: '#e2e8cc' }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="rounded-3xl p-10 md:p-14 relative overflow-hidden"
          style={{ backgroundColor: '#9DC40E' }}
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/10 translate-y-1/2 -translate-x-1/4" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left">
              <span
                className="inline-block px-3 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-widest"
                style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
              >
                Kostenlose Erstberatung
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Bereit, Ihr Gastronomie-
                <br className="hidden md:block" />
                Projekt zu starten?
              </h2>
              <p className="text-white/80 text-sm font-light max-w-md">
                Unverbindlich & persönlich. Wir sind für Sie da.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                href="#kontakt"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 shadow-sm hover:opacity-90"
                style={{ backgroundColor: '#ffffff', color: '#040404' }}
              >
                <Icon name="ArrowRightCircleIcon" size={18} />
                Jetzt anfragen
              </Link>
              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-white/30 text-white font-bold text-sm hover:bg-white/10 transition-all duration-200"
              >
                <Icon name="ChatBubbleOvalLeftEllipsisIcon" size={18} />
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
