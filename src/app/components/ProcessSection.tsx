'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

import { PROCESS_STEPS as steps, IMAGES } from '@/config/constants';

export default function ProcessSection() {
  return (
    <section className="py-20 overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
                style={{ color: '#9DC40E' }}
              >
                <span className="w-6 h-0.5 inline-block" style={{ backgroundColor: '#9DC40E' }} />
                So funktioniert es
              </span>
              <h2
                className="text-section-title font-extrabold leading-tight"
                style={{ color: '#040404' }}
              >
                Warum sollten Sie uns <span style={{ color: '#9DC40E' }}>wählen?</span>
              </h2>
              <p className="text-base leading-relaxed max-w-md" style={{ color: '#575757' }}>
                In vier Schritten von der Idee zum laufenden Betrieb.
              </p>
            </div>

            {/* 2x2 Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {steps.map((step, i) => (
                <div key={step.number} className="group">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <span
                        className="text-5xl font-extrabold leading-none transition-colors duration-300"
                        style={{ color: 'rgba(157,196,14,0.25)' }}
                      >
                        {step.number}
                      </span>
                    </div>
                    <div className="pt-1 space-y-1.5">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: 'rgba(157,196,14,0.15)' }}
                        >
                          <Icon name={step.icon} size={14} style={{ color: '#9DC40E' }} />
                        </div>
                        <h3 className="font-bold text-sm" style={{ color: '#040404' }}>
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-xs leading-relaxed" style={{ color: '#575757' }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link href="#kontakt" className="btn-primary text-sm inline-flex">
              Jetzt starten
              <Icon name="ArrowRightIcon" size={16} />
            </Link>
          </div>

          {/* Right: Photo collage */}
          <div className="grid grid-cols-2 gap-3 h-[380px] sm:h-[460px]">
            <div className="relative rounded-2xl overflow-hidden img-hover-zoom row-span-2">
              <AppImage
                src={IMAGES.processImage1}
                alt="Business consultation meeting with gastronomy entrepreneur and advisor"
                fill
                className="object-cover"
                sizes="300px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div className="relative rounded-2xl overflow-hidden img-hover-zoom">
              <AppImage
                src={IMAGES.processImage2}
                alt="Successful business handshake after consulting agreement"
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>
            <div
              className="relative rounded-2xl p-5 flex flex-col justify-center"
              style={{ backgroundColor: '#9DC40E' }}
            >
              <p className="text-white font-extrabold text-2xl">4</p>
              <p className="text-white/80 text-xs font-semibold mt-1">Klare Schritte zum Erfolg</p>
              <div className="mt-3 flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="h-1 flex-1 rounded-full"
                    style={{ backgroundColor: 'rgba(255,255,255,0.4)' }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
