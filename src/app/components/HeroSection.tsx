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
              {['Wien & Österreich', '9+ Leistungsbereiche', '100+ Partnerbetriebe']?.map(
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
            className="relative grid grid-cols-2 gap-4 sm:gap-6 h-auto sm:h-[540px] lg:h-[600px]"
          >
            {/* Large top-left image */}
            <motion.div
              variants={cardVariants}
              className="relative rounded-2xl sm:rounded-[2.25rem] overflow-hidden img-hover-zoom h-48 sm:h-auto shadow-md"
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
                className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 rounded-lg sm:rounded-[20px] px-3 sm:px-6 py-1.5 sm:py-2.5 shadow-xl text-center w-[90%] sm:w-[85%] backdrop-blur-md"
                style={{ backgroundColor: 'rgba(255,255,255,0.95)' }}
              >
                <p className="text-[10px] sm:text-sm font-bold text-[#040404] tracking-tight">
                  Gastronomie-Experten
                </p>
                <p className="text-[9px] sm:text-xs text-[#575757] font-medium mt-0.5">
                  Wien & Österreich
                </p>
              </div>
            </motion.div>

            {/* Top-right: green accent card */}
            <motion.div
              variants={cardVariants}
              className="relative rounded-2xl sm:rounded-[2.25rem] flex flex-col justify-between p-4 sm:p-8 h-48 sm:h-auto shadow-md text-white"
              style={{ backgroundColor: '#9DC40E' }}
            >
              <div>
                <p className="text-white/70 text-[9px] sm:text-xs font-bold uppercase tracking-widest mb-1 sm:text-xs">
                  Orientierung
                </p>
                <h3 className="text-white font-extrabold text-lg sm:text-3xl lg:text-4xl leading-tight">
                  Entlastung.
                  <br />
                  Wachstum.
                </h3>
              </div>
              <div className="space-y-1 sm:space-y-2.5 pt-2">
                {['Bürokratie-Entlastung', 'Starke Partner', 'WKO-zertifiziert']?.map((item) => (
                  <div key={item} className="flex items-center gap-1.5 sm:gap-2.5">
                    <div
                      className="w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
                    >
                      <Icon
                        name="CheckIcon"
                        size={8}
                        className="text-white sm:hidden"
                        variant="solid"
                      />
                      <Icon
                        name="CheckIcon"
                        size={12}
                        className="text-white hidden sm:block"
                        variant="solid"
                      />
                    </div>
                    <span className="text-white/90 text-[10px] sm:text-sm font-medium leading-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Bottom-left: stats card */}
            <motion.div
              variants={cardVariants}
              className="relative rounded-2xl sm:rounded-[2.25rem] p-4 sm:p-8 flex flex-col justify-between h-48 sm:h-auto shadow-md text-white"
              style={{ backgroundColor: '#9DC40E' }}
            >
              <p className="text-white/70 text-[9px] sm:text-xs font-bold uppercase tracking-widest">
                Unsere Bilanz
              </p>
              <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-auto">
                <div>
                  <p className="text-xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-none">
                    9+
                  </p>
                  <p className="text-[10px] sm:text-xs lg:text-sm mt-1 sm:mt-2 text-white/80 font-medium leading-tight">
                    Leistungs­bereiche
                  </p>
                </div>
                <div>
                  <p className="text-xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-none">
                    100+
                  </p>
                  <p className="text-[10px] sm:text-xs lg:text-sm mt-1 sm:mt-2 text-white/80 font-medium leading-tight">
                    Partner­betriebe
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bottom-right: photo */}
            <motion.div
              variants={cardVariants}
              className="relative rounded-2xl sm:rounded-[2.25rem] overflow-hidden img-hover-zoom h-48 sm:h-auto shadow-md"
            >
              <AppImage
                src={IMAGES.heroImage2}
                alt="Professional chef in modern restaurant kitchen preparing gourmet dishes"
                fill
                className="object-cover"
                sizes="300px"
              />
              <div className="absolute inset-0 bg-black/10" />
              <div
                className="absolute top-3 sm:top-4 right-3 sm:right-4 rounded-full px-2.5 sm:px-4 py-1 sm:py-1.5 shadow-md"
                style={{ backgroundColor: '#9DC40E' }}
              >
                <p className="text-white text-[9px] sm:text-xs font-bold tracking-wide">
                  WKO Partner
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
