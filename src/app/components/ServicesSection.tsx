'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import ScrollRevealGrid from '@/components/ScrollRevealGrid';
import { SERVICES_LIST as services } from '@/config/constants';

export default function ServicesSection() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <section
      id="leistungen"
      className="py-20 overflow-hidden"
      style={{ backgroundColor: '#f8faf2' }}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 space-y-3">
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: '#9DC40E' }}
          >
            — Leistungen
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-[#040404]">
            Was wir für Sie <span style={{ color: '#9DC40E' }}>bereitstellen</span>
          </h2>
          <p className="text-sm leading-relaxed text-[#575757] max-w-xl">
            9 spezialisierte Bereiche — alles aus einer Hand.
          </p>
        </div>

        {/* Gallery Grid */}
        <ScrollRevealGrid className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Card 1: Large card - spans 2 cols on mobile, and spans 2 cols + 2 rows on desktop */}
          <div
            ref={(el) => {
              cardsRef.current[0] = el;
            }}
            className="col-span-2 md:col-span-2 md:row-span-2 relative rounded-[2rem] overflow-hidden group cursor-pointer h-[320px] sm:h-[420px] shadow-sm"
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
            <span
              className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold text-white shadow-sm"
              style={{ backgroundColor: '#9DC40E' }}
            >
              {services[0].tag}
            </span>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="flex items-center gap-2 mb-1">
                <Icon name={services[0].icon} size={16} className="text-white" variant="solid" />
                <h3 className="font-extrabold text-white text-lg sm:text-xl">
                  {services[0].title}
                </h3>
              </div>
              <Link
                href="/#kontakt"
                className="inline-flex items-center gap-1.5 text-xs font-bold mt-1 text-white hover:gap-2.5 transition-all duration-200"
              >
                Mehr erfahren <Icon name="ArrowLongRightIcon" size={14} />
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div
            ref={(el) => {
              cardsRef.current[1] = el;
            }}
            className="col-span-1 relative rounded-2xl overflow-hidden group cursor-pointer h-[170px] sm:h-[200px] shadow-sm"
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
              className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-[9px] sm:text-xs font-bold text-white shadow-sm"
              style={{ backgroundColor: '#9DC40E' }}
            >
              {services[1].tag}
            </span>
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
              <div className="flex items-center gap-1.5">
                <Icon name={services[1].icon} size={13} className="text-white" variant="solid" />
                <h3 className="font-bold text-white text-xs sm:text-sm">{services[1].title}</h3>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            ref={(el) => {
              cardsRef.current[2] = el;
            }}
            className="col-span-1 relative rounded-2xl overflow-hidden group cursor-pointer h-[170px] sm:h-[200px] shadow-sm"
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
              className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-[9px] sm:text-xs font-bold text-white shadow-sm"
              style={{ backgroundColor: '#9DC40E' }}
            >
              {services[2].tag}
            </span>
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
              <div className="flex items-center gap-1.5">
                <Icon name={services[2].icon} size={13} className="text-white" variant="solid" />
                <h3 className="font-bold text-white text-xs sm:text-sm">{services[2].title}</h3>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div
            ref={(el) => {
              cardsRef.current[3] = el;
            }}
            className="col-span-1 relative rounded-2xl overflow-hidden group cursor-pointer h-[170px] sm:h-[200px] shadow-sm"
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
              className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-[9px] sm:text-xs font-bold text-white shadow-sm"
              style={{ backgroundColor: '#9DC40E' }}
            >
              {services[3].tag}
            </span>
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
              <div className="flex items-center gap-1.5">
                <Icon name={services[3].icon} size={13} className="text-white" variant="solid" />
                <h3 className="font-bold text-white text-xs sm:text-sm">{services[3].title}</h3>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div
            ref={(el) => {
              cardsRef.current[4] = el;
            }}
            className="col-span-1 relative rounded-2xl overflow-hidden group cursor-pointer h-[170px] sm:h-[200px] shadow-sm"
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
              className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-[9px] sm:text-xs font-bold text-white shadow-sm"
              style={{ backgroundColor: '#9DC40E' }}
            >
              {services[4].tag}
            </span>
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
              <div className="flex items-center gap-1.5">
                <Icon name={services[4].icon} size={13} className="text-white" variant="solid" />
                <h3 className="font-bold text-white text-xs sm:text-sm">{services[4].title}</h3>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div
            ref={(el) => {
              cardsRef.current[5] = el;
            }}
            className="col-span-1 relative rounded-2xl overflow-hidden group cursor-pointer h-[170px] sm:h-[200px] shadow-sm"
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
              className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-[9px] sm:text-xs font-bold text-white shadow-sm"
              style={{ backgroundColor: '#9DC40E' }}
            >
              {services[5].tag}
            </span>
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
              <div className="flex items-center gap-1.5">
                <Icon name={services[5].icon} size={13} className="text-white" variant="solid" />
                <h3 className="font-bold text-white text-xs sm:text-sm">{services[5].title}</h3>
              </div>
            </div>
          </div>

          {/* Card 7 */}
          <div
            ref={(el) => {
              cardsRef.current[6] = el;
            }}
            className="col-span-1 relative rounded-2xl overflow-hidden group cursor-pointer h-[170px] sm:h-[200px] shadow-sm"
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
              className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-[9px] sm:text-xs font-bold text-white shadow-sm"
              style={{ backgroundColor: '#9DC40E' }}
            >
              {services[6].tag}
            </span>
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
              <div className="flex items-center gap-1.5">
                <Icon name={services[6].icon} size={13} className="text-white" variant="solid" />
                <h3 className="font-bold text-white text-xs sm:text-sm">{services[6].title}</h3>
              </div>
            </div>
          </div>

          {/* Card 8 */}
          <div
            ref={(el) => {
              cardsRef.current[7] = el;
            }}
            className="col-span-1 relative rounded-2xl overflow-hidden group cursor-pointer h-[170px] sm:h-[200px] shadow-sm"
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
              className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-[9px] sm:text-xs font-bold text-white shadow-sm"
              style={{ backgroundColor: '#9DC40E' }}
            >
              {services[7].tag}
            </span>
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
              <div className="flex items-center gap-1.5">
                <Icon name={services[7].icon} size={13} className="text-white" variant="solid" />
                <h3 className="font-bold text-white text-xs sm:text-sm">{services[7].title}</h3>
              </div>
            </div>
          </div>

          {/* Card 9: final green card */}
          <div
            ref={(el) => {
              cardsRef.current[8] = el;
            }}
            className="col-span-1 relative rounded-2xl overflow-hidden group cursor-pointer h-[170px] sm:h-[200px] shadow-sm"
            style={{ backgroundColor: '#9DC40E' }}
          >
            <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-5 text-white">
              <div>
                <span className="inline-block px-2 py-0.5 rounded-full text-[9px] sm:text-xs font-bold bg-white/20 text-white mb-2 shadow-sm">
                  {services[8].tag}
                </span>
                <div className="flex items-center gap-2">
                  <Icon name={services[8].icon} size={16} className="text-white" variant="solid" />
                  <h3 className="font-extrabold text-white text-xs sm:text-sm">
                    {services[8].title}
                  </h3>
                </div>
                <p className="text-white/80 text-[10px] sm:text-xs mt-1 sm:mt-2 leading-relaxed">
                  Alle Leistungen — modular oder als Paket.
                </p>
              </div>
              <Link
                href="/#kontakt"
                className="inline-flex items-center gap-1.5 text-white text-[10px] sm:text-xs font-bold hover:gap-3 transition-all duration-200 mt-2"
              >
                Anfragen <Icon name="ArrowLongRightIcon" size={14} />
              </Link>
            </div>
          </div>
        </ScrollRevealGrid>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/#kontakt"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90 shadow-md"
            style={{ backgroundColor: '#9DC40E' }}
          >
            Jetzt anfragen
            <Icon name="ArrowLongRightIcon" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
