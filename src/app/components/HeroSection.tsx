'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { IMAGES, CONTACT_INFO } from '@/config/constants';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="pt-20 pb-12 overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[80vh]">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="space-y-7 py-8"
          >
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
              <Link href="#kontakt" className="btn-primary text-sm px-7 py-3.5">
                <Icon name="ChatBubbleLeftRightIcon" size={18} />
                Jetzt Beratung anfragen
              </Link>
              <Link
                href="#leistungen"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border-2 font-semibold text-sm transition-all duration-200"
                style={{ borderColor: '#d8dac4', color: '#040404' }}
              >
                Unsere Leistungen
                <Icon name="ArrowRightIcon" size={16} />
              </Link>
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
          </motion.div>

          {/* Right: Photo Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 h-auto sm:h-[520px] lg:h-[580px]"
          >
            {/* Large top-left image */}
            <motion.div
              variants={cardVariants}
              className="relative rounded-2xl overflow-hidden img-hover-zoom h-60 sm:h-auto"
            >
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
            </motion.div>

            {/* Top-right: green accent card */}
            <motion.div
              variants={cardVariants}
              className="relative rounded-2xl overflow-hidden flex flex-col justify-between p-5 h-56 sm:h-auto"
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
                  <div key={item} className="flex items-start gap-2">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: 'rgba(255,255,255,0.25)' }}
                    >
                      <Icon name="CheckIcon" size={10} className="text-white" />
                    </div>
                    <span className="text-white/90 text-xs font-medium leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Bottom-left: stats card */}
            <motion.div
              variants={cardVariants}
              className="relative rounded-2xl p-5 flex flex-col justify-between h-48 sm:h-auto"
              style={{ backgroundColor: '#9DC40E' }}
            >
              <p
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: 'rgba(255,255,255,0.7)' }}
              >
                Unsere Bilanz
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-3">
                <div>
                  <p className="text-3xl font-extrabold text-white leading-none">9+</p>
                  <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    Leistungs­bereiche
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-white leading-none">100+</p>
                  <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    Partner­betriebe
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bottom-right: photo */}
            <motion.div
              variants={cardVariants}
              className="relative rounded-2xl overflow-hidden img-hover-zoom h-60 sm:h-auto"
            >
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
