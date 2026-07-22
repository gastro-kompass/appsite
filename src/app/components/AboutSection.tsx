'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const visionItems = [
  {
    icon: 'ShieldCheckIcon' as const,
    title: 'Bürokratie-Entlastung',
    text: 'Wir navigieren durch alle behördlichen Anforderungen.',
  },
  {
    icon: 'StarIcon' as const,
    title: 'Fokus auf Gastronomie',
    text: 'Ihr Kerngeschäft steht im Mittelpunkt.',
  },
  {
    icon: 'MapIcon' as const,
    title: 'Strukturierte Orientierung',
    text: 'Klare Schritte, starke Partner.',
  },
  {
    icon: 'BuildingStorefrontIcon' as const,
    title: 'Exklusiv für Gastro',
    text: 'Spezialisiert auf Wien & Österreich.',
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            entry.target.classList.remove('reveal-hidden');
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      sectionRef.current.classList.add('reveal-hidden');
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="ueber-uns"
      className="py-20 overflow-hidden"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div ref={sectionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Photo Grid */}
          <div className="grid grid-cols-2 gap-3 h-[480px]">
            <div className="relative rounded-2xl overflow-hidden row-span-2 img-hover-zoom col-span-1">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_11d99a589-1780463477375.png"
                alt="Confident restaurant owner standing in modern Vienna gastronomy setting"
                fill
                className="object-cover"
                sizes="300px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span
                  className="inline-block text-white text-xs font-bold px-3 py-1.5 rounded-lg"
                  style={{ backgroundColor: '#9DC40E' }}
                >
                  WKO Wien Partner
                </span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden img-hover-zoom">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_133b1e7cf-1768750078214.png"
                alt="Business consultation meeting in modern office environment"
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>
            <div
              className="relative rounded-2xl p-5 flex flex-col justify-center"
              style={{ backgroundColor: '#9DC40E' }}
            >
              <p className="text-4xl font-extrabold text-white">100+</p>
              <p className="text-sm mt-1 leading-snug" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Betriebe erfolgreich begleitet
              </p>
              <div className="flex gap-1 mt-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5" fill="white" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8 pt-4">
            <div className="space-y-4">
              <span className="section-label">Über uns</span>
              <h2
                className="text-section-title font-extrabold leading-tight"
                style={{ color: '#040404' }}
              >
                Was ist der <span style={{ color: '#9DC40E' }}>GASTRO&#8209;KOMPASS?</span>
              </h2>
              <p className="leading-relaxed text-base" style={{ color: '#575757' }}>
                Der GASTRO-KOMPASS ist die zentrale Anlaufstelle für Gastronomen in Wien. Wir helfen
                Ihnen durch Bürokratie, Steuern und rechtliche Anforderungen — damit Sie sich auf
                Ihr Lokal konzentrieren können.
              </p>
              <p className="leading-relaxed text-base" style={{ color: '#575757' }}>
                Als offizieller Partner der{' '}
                <strong style={{ color: '#040404' }}>Wirtschaftskammer Wien (WKO)</strong> verfügen
                wir über ein starkes Netzwerk aus Beratern und Dienstleistern.
              </p>
            </div>

            {/* Vision Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {visionItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl p-4 border transition-all duration-200 group"
                  style={{ backgroundColor: '#eef0d8', borderColor: '#d8dac4' }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-3 transition-colors"
                    style={{ backgroundColor: 'rgba(157,196,14,0.15)' }}
                  >
                    <Icon name={item.icon} size={18} style={{ color: '#9DC40E' }} variant="solid" />
                  </div>
                  <h4 className="font-bold text-sm mb-1" style={{ color: '#040404' }}>
                    {item.title}
                  </h4>
                  <p className="text-xs leading-relaxed" style={{ color: '#575757' }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a href="#kontakt" className="btn-primary text-sm">
                Beratung anfragen
                <Icon name="ArrowRightIcon" size={16} />
              </a>
              <span className="text-xs font-medium" style={{ color: '#575757' }}>
                Kostenlose Erstberatung
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
