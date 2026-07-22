'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { IMAGES, CONTACT_INFO } from '@/config/constants';

export default function HeroSection() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef?.current) return;
    textRef.current.style.opacity = '0';
    textRef.current.style.transform = 'translateY(24px)';
    setTimeout(() => {
      if (!textRef?.current) return;
      textRef.current.style.transition =
        'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)';
      textRef.current.style.opacity = '1';
      textRef.current.style.transform = 'translateY(0)';
    }, 150);
  }, []);

  return (
    <section className="pt-20 pb-12 overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[80vh]">
          {/* Left: Text Content */}
          <div ref={textRef} className="space-y-7 py-8">
            {/* Badge */}
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{ backgroundColor: 'rgba(157,196,14,0.12)', color: '#9DC40E' }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#9DC40E' }} />
              {CONTACT_INFO.wkoPartnerLabel}
            </span>

            {/* Headline */}
            <h1 className="text-hero-xl font-extrabold leading-tight" style={{ color: '#040404' }}>
              Ihr Wegweiser in der <span style={{ color: '#9DC40E' }}>Gastronomie.</span>
            </h1>

            <p
              className="text-base md:text-lg leading-relaxed max-w-md"
              style={{ color: '#575757' }}
            >
              Von der Standortsuche bis zum laufenden Betrieb — strukturiert. kompetent. exklusiv.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#kontakt" className="btn-primary text-sm px-7 py-3.5">
                <Icon name="ChatBubbleLeftRightIcon" size={18} />
                Jetzt Beratung anfragen
              </a>
              <a
                href="#leistungen"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border-2 font-semibold text-sm transition-all duration-200"
                style={{ borderColor: '#d8dac4', color: '#040404' }}
              >
                Unsere Leistungen
                <Icon name="ArrowRightIcon" size={16} />
              </a>
            </div>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['9+ Leistungsbereiche', '100+ Partnerbetriebe', 'Wien & Österreich']?.map(
                (item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: '#eef0d8', color: '#575757' }}
                  >
                    <Icon
                      name="CheckCircleIcon"
                      size={13}
                      style={{ color: '#9DC40E' }}
                      variant="solid"
                    />
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right: Photo Grid */}
          <div className="relative grid grid-cols-2 gap-3 h-[520px] lg:h-[580px]">
            {/* Large top-left image */}
            <div className="relative rounded-2xl overflow-hidden row-span-1 img-hover-zoom">
              <AppImage
                src={IMAGES.heroImage1}
                alt="Elegant restaurant interior with warm lighting and set tables in Vienna"
                fill
                className="object-cover"
                sizes="300px"
                priority
              />
              <div
                className="absolute bottom-3 left-3 rounded-xl px-3 py-2 shadow-sm"
                style={{ backgroundColor: 'rgba(245,247,228,0.95)' }}
              >
                <p className="text-xs font-bold" style={{ color: '#040404' }}>
                  Gastronomie-Experten
                </p>
                <p className="text-xs" style={{ color: '#575757' }}>
                  Wien & Österreich
                </p>
              </div>
            </div>

            {/* Top-right: green accent card */}
            <div
              className="relative rounded-2xl overflow-hidden flex flex-col justify-between p-5"
              style={{ backgroundColor: '#9DC40E' }}
            >
              <div>
                <p className="text-white/80 text-xs font-bold uppercase tracking-widest mb-2">
                  Orientierung
                </p>
                <h3 className="text-white font-extrabold text-xl leading-tight">
                  Entlastung.
                  <br />
                  Wachstum.
                </h3>
              </div>
              <div className="space-y-2">
                {['Bürokratie-Entlastung', 'Starke Partner', 'WKO-zertifiziert']?.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(255,255,255,0.25)' }}
                    >
                      <Icon name="CheckIcon" size={10} className="text-white" />
                    </div>
                    <span className="text-white/90 text-xs font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom-left: stats card */}
            <div
              className="relative rounded-2xl p-5 flex flex-col justify-between"
              style={{ backgroundColor: '#9DC40E' }}
            >
              <p
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: 'rgba(255,255,255,0.7)' }}
              >
                Unsere Bilanz
              </p>
              <div className="grid grid-cols-2 gap-3 mt-3">
                <div>
                  <p className="text-3xl font-extrabold text-white">9+</p>
                  <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    Leistungs­bereiche
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-white">100+</p>
                  <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    Partner­betriebe
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom-right: photo */}
            <div className="relative rounded-2xl overflow-hidden img-hover-zoom">
              <AppImage
                src={IMAGES.heroImage2}
                alt="Professional chef in modern restaurant kitchen preparing gourmet dishes"
                fill
                className="object-cover"
                sizes="300px"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div
                className="absolute top-3 right-3 rounded-lg px-2.5 py-1.5"
                style={{ backgroundColor: '#9DC40E' }}
              >
                <p className="text-white text-xs font-bold">{CONTACT_INFO.wkoPartnerLabel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
