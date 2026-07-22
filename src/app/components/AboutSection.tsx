'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { VISION_ITEMS, IMAGES, CONTACT_INFO } from '@/config/constants';

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
                src={IMAGES.aboutOwner}
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
                  {CONTACT_INFO.wkoPartnerLabel}
                </span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden img-hover-zoom">
              <AppImage
                src={IMAGES.aboutOffice}
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
                  <Icon key={i} name="StarIcon" size={14} className="text-white" variant="solid" />
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
              {VISION_ITEMS.map((item) => (
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
