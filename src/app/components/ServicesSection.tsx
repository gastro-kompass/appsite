'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

import { SERVICES_LIST as services } from '@/config/constants';

export default function ServicesSection() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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
      { threshold: 0.06 }
    );
    cardsRef.current.forEach((card) => {
      if (card) {
        card.classList.add('reveal-hidden');
        observer.observe(card);
      }
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="leistungen"
      className="py-20 overflow-hidden"
      style={{ backgroundColor: '#f8faf2' }}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-2">
            <span
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
              style={{ color: '#9DC40E' }}
            >
              <span className="w-6 h-0.5 inline-block" style={{ backgroundColor: '#9DC40E' }} />
              Leistungen
            </span>
            <h2
              className="text-section-title font-extrabold leading-tight"
              style={{ color: '#040404' }}
            >
              Was wir für Sie <span style={{ color: '#9DC40E' }}>bereitstellen</span>
            </h2>
          </div>
          <p
            className="text-sm leading-relaxed md:text-right max-w-xs"
            style={{ color: '#575757' }}
          >
            9 spezialisierte Bereiche — alles aus einer Hand.
          </p>
        </div>

        {/* Gallery Grid */}
        {/* Row 1: 1 large + 2 medium */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
          {/* Large card - spans 2 cols, 2 rows */}
          <div
            ref={(el) => {
              cardsRef.current[0] = el;
            }}
            className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer"
            style={{ height: '420px' }}
          >
            <AppImage
              src={services[0].photo}
              alt={services[0].photoAlt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="600px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            {/* Tag */}
            <span
              className="absolute top-4 left-4 px-2.5 py-1 rounded-full text-xs font-bold text-white"
              style={{ backgroundColor: '#9DC40E' }}
            >
              {services[0].tag}
            </span>
            {/* Bottom content */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="flex items-center gap-2 mb-1">
                <Icon name={services[0].icon} size={16} className="text-white" variant="solid" />
                <h3 className="font-extrabold text-white text-xl">{services[0].title}</h3>
              </div>
              <a
                href="#kontakt"
                className="inline-flex items-center gap-1 text-xs font-bold mt-1 hover:gap-2.5 transition-all duration-200"
                style={{ color: '#9DC40E' }}
              >
                Mehr erfahren <Icon name="ArrowRightIcon" size={12} />
              </a>
            </div>
          </div>

          {/* Medium card 1 */}
          <div
            ref={(el) => {
              cardsRef.current[1] = el;
            }}
            className="col-span-1 relative rounded-2xl overflow-hidden group cursor-pointer"
            style={{ height: '200px' }}
          >
            <AppImage
              src={services[1].photo}
              alt={services[1].photoAlt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="300px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <span
              className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-xs font-bold text-white"
              style={{ backgroundColor: '#9DC40E' }}
            >
              {services[1].tag}
            </span>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex items-center gap-1.5">
                <Icon name={services[1].icon} size={13} className="text-white" variant="solid" />
                <h3 className="font-bold text-white text-sm">{services[1].title}</h3>
              </div>
            </div>
          </div>

          {/* Medium card 2 */}
          <div
            ref={(el) => {
              cardsRef.current[2] = el;
            }}
            className="col-span-1 relative rounded-2xl overflow-hidden group cursor-pointer"
            style={{ height: '200px' }}
          >
            <AppImage
              src={services[2].photo}
              alt={services[2].photoAlt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="300px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <span
              className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-xs font-bold text-white"
              style={{ backgroundColor: '#9DC40E' }}
            >
              {services[2].tag}
            </span>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex items-center gap-1.5">
                <Icon name={services[2].icon} size={13} className="text-white" variant="solid" />
                <h3 className="font-bold text-white text-sm">{services[2].title}</h3>
              </div>
            </div>
          </div>

          {/* Small card 1 */}
          <div
            ref={(el) => {
              cardsRef.current[3] = el;
            }}
            className="col-span-1 relative rounded-2xl overflow-hidden group cursor-pointer"
            style={{ height: '200px' }}
          >
            <AppImage
              src={services[3].photo}
              alt={services[3].photoAlt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="300px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <span
              className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-xs font-bold text-white"
              style={{ backgroundColor: '#9DC40E' }}
            >
              {services[3].tag}
            </span>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex items-center gap-1.5">
                <Icon name={services[3].icon} size={13} className="text-white" variant="solid" />
                <h3 className="font-bold text-white text-sm">{services[3].title}</h3>
              </div>
            </div>
          </div>

          {/* Small card 2 */}
          <div
            ref={(el) => {
              cardsRef.current[4] = el;
            }}
            className="col-span-1 relative rounded-2xl overflow-hidden group cursor-pointer"
            style={{ height: '200px' }}
          >
            <AppImage
              src={services[4].photo}
              alt={services[4].photoAlt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="300px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <span
              className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-xs font-bold text-white"
              style={{ backgroundColor: '#9DC40E' }}
            >
              {services[4].tag}
            </span>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex items-center gap-1.5">
                <Icon name={services[4].icon} size={13} className="text-white" variant="solid" />
                <h3 className="font-bold text-white text-sm">{services[4].title}</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: 3 medium + 1 large */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {/* Small card 3 */}
          <div
            ref={(el) => {
              cardsRef.current[5] = el;
            }}
            className="col-span-1 relative rounded-2xl overflow-hidden group cursor-pointer"
            style={{ height: '220px' }}
          >
            <AppImage
              src={services[5].photo}
              alt={services[5].photoAlt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="300px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <span
              className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-xs font-bold text-white"
              style={{ backgroundColor: '#9DC40E' }}
            >
              {services[5].tag}
            </span>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex items-center gap-1.5">
                <Icon name={services[5].icon} size={13} className="text-white" variant="solid" />
                <h3 className="font-bold text-white text-sm">{services[5].title}</h3>
              </div>
            </div>
          </div>

          {/* Medium card 3 */}
          <div
            ref={(el) => {
              cardsRef.current[6] = el;
            }}
            className="col-span-1 relative rounded-2xl overflow-hidden group cursor-pointer"
            style={{ height: '220px' }}
          >
            <AppImage
              src={services[6].photo}
              alt={services[6].photoAlt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="300px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <span
              className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-xs font-bold text-white"
              style={{ backgroundColor: '#9DC40E' }}
            >
              {services[6].tag}
            </span>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex items-center gap-1.5">
                <Icon name={services[6].icon} size={13} className="text-white" variant="solid" />
                <h3 className="font-bold text-white text-sm">{services[6].title}</h3>
              </div>
            </div>
          </div>

          {/* Medium card 4 */}
          <div
            ref={(el) => {
              cardsRef.current[7] = el;
            }}
            className="col-span-1 relative rounded-2xl overflow-hidden group cursor-pointer"
            style={{ height: '220px' }}
          >
            <AppImage
              src={services[7].photo}
              alt={services[7].photoAlt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="300px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <span
              className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-xs font-bold text-white"
              style={{ backgroundColor: '#9DC40E' }}
            >
              {services[7].tag}
            </span>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex items-center gap-1.5">
                <Icon name={services[7].icon} size={13} className="text-white" variant="solid" />
                <h3 className="font-bold text-white text-sm">{services[7].title}</h3>
              </div>
            </div>
          </div>

          {/* Large final card */}
          <div
            ref={(el) => {
              cardsRef.current[8] = el;
            }}
            className="col-span-1 relative rounded-2xl overflow-hidden group cursor-pointer"
            style={{ height: '220px', backgroundColor: '#9DC40E' }}
          >
            <div className="absolute inset-0 flex flex-col justify-between p-5">
              <div>
                <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold bg-white/20 text-white mb-3">
                  {services[8].tag}
                </span>
                <div className="flex items-center gap-2">
                  <Icon name={services[8].icon} size={18} className="text-white" variant="solid" />
                  <h3 className="font-extrabold text-white text-lg">{services[8].title}</h3>
                </div>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Alle Leistungen — modular oder als Paket.
                </p>
              </div>
              <a
                href="#kontakt"
                className="inline-flex items-center gap-1.5 text-white text-xs font-bold hover:gap-3 transition-all duration-200"
              >
                Anfragen <Icon name="ArrowRightIcon" size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: '#9DC40E', color: '#ffffff' }}
          >
            Jetzt anfragen
            <Icon name="ArrowRightIcon" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
