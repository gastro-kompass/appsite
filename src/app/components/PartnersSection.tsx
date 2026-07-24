'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import ScrollRevealGrid from '@/components/ScrollRevealGrid';

import {
  INSURANCE_PARTNERS as insurancePartners,
  ENERGY_PARTNERS as energyPartners,
} from '@/config/constants';

export default function PartnersSection() {
  return (
    <section className="py-20 overflow-hidden" style={{ backgroundColor: '#f8faf2' }}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-label">Netzwerk</span>
          <h2 className="text-section-title font-extrabold mt-3 mb-3" style={{ color: '#040404' }}>
            Unsere <span style={{ color: '#9DC40E' }}>Partner</span>
          </h2>
          <p className="max-w-md mx-auto text-sm leading-relaxed" style={{ color: '#575757' }}>
            Exklusive Konditionen — ausgehandelte Sonderpreise bei führenden Versicherungen und
            Energieanbietern.
          </p>
        </div>

        {/* Insurance Partners */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: 'rgba(157,196,14,0.12)' }}
            >
              <Icon name="ShieldCheckIcon" size={16} style={{ color: '#9DC40E' }} />
            </div>
            <div>
              <h3 className="font-extrabold text-lg" style={{ color: '#040404' }}>
                Versicherungspartner
              </h3>
              <p className="text-xs" style={{ color: '#575757' }}>
                Gewerbe- & Betriebsversicherungen mit Gastro-Fokus
              </p>
            </div>
          </div>
          <ScrollRevealGrid className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {insurancePartners?.map((partner) => (
              <div
                key={partner?.name}
                className="group rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-lg h-full"
                style={{ backgroundColor: '#ffffff', borderColor: '#d8dac4' }}
              >
                <div className="relative h-24 overflow-hidden">
                  <AppImage
                    src={partner?.logo}
                    alt={partner?.logoAlt}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                    sizes="300px"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
                  <span className="absolute bottom-3 left-4 text-white font-extrabold text-lg tracking-tight drop-shadow-sm">
                    {partner?.name}
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-sm font-semibold mb-1" style={{ color: '#040404' }}>
                    {partner?.desc}
                  </p>
                  <div className="flex items-center gap-1.5 mt-2">
                    <Icon
                      name="CheckCircleIcon"
                      size={13}
                      style={{ color: '#9DC40E' }}
                      className="shrink-0"
                    />
                    <p className="text-xs" style={{ color: '#575757' }}>
                      {partner?.benefit}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </ScrollRevealGrid>
        </div>

        {/* Energy Partners */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: 'rgba(157,196,14,0.12)' }}
            >
              <Icon name="BoltIcon" size={16} style={{ color: '#9DC40E' }} />
            </div>
            <div>
              <h3 className="font-extrabold text-lg" style={{ color: '#040404' }}>
                Energiepartner
              </h3>
              <p className="text-xs" style={{ color: '#575757' }}>
                Strom zu Sonderkonditionen für Gastronomiebetriebe
              </p>
            </div>
          </div>
          <ScrollRevealGrid className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {energyPartners?.map((partner) => (
              <div
                key={partner?.name}
                className="group rounded-2xl overflow-hidden border text-center transition-all duration-300 hover:shadow-md h-full"
                style={{ backgroundColor: '#ffffff', borderColor: '#d8dac4' }}
              >
                <div className="relative h-20 overflow-hidden">
                  <AppImage
                    src={partner?.logo}
                    alt={partner?.logoAlt}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    sizes="200px"
                  />
                  <div className="absolute inset-0 bg-black/45 group-hover:bg-black/25 transition-colors duration-300" />
                </div>
                <div className="p-3">
                  <p className="font-extrabold text-sm" style={{ color: '#040404' }}>
                    {partner?.name}
                  </p>
                  <p className="text-xs mt-0.5 leading-tight" style={{ color: '#575757' }}>
                    {partner?.desc}
                  </p>
                </div>
              </div>
            ))}
          </ScrollRevealGrid>
        </div>

        {/* Trust strip */}
        <div
          className="rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ backgroundColor: '#9DC40E' }}
        >
          <div className="flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
            >
              <Icon name="StarIcon" size={22} className="text-white" variant="solid" />
            </div>
            <div>
              <p className="font-extrabold text-white text-lg">
                Exklusive Konditionen für GASTRO-KOMPASS Kunden
              </p>
              <p
                className="text-sm mt-1 leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.8)' }}
              >
                Sonderpreise — verfügbar nur über GASTRO-KOMPASS.
              </p>
            </div>
          </div>
          <Link
            href="#kontakt"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-colors whitespace-nowrap shrink-0 hover:opacity-90"
            style={{ backgroundColor: '#ffffff', color: '#040404' }}
          >
            Angebote anfragen
            <Icon name="ArrowRightIcon" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
