import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import StatsSection from '@/app/components/StatsSection';
import AboutSection from '@/app/components/AboutSection';
import CompassSection from '@/app/components/CompassSection';
import ServicesSection from '@/app/components/ServicesSection';
import ProcessSection from '@/app/components/ProcessSection';
import PartnersSection from '@/app/components/PartnersSection';
import TestimonialSection from '@/app/components/TestimonialSection';
import CtaBanner from '@/app/components/CtaBanner';
import ContactSection from '@/app/components/ContactSection';

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <CompassSection />
      <ServicesSection />
      <ProcessSection />
      <PartnersSection />
      <TestimonialSection />
      <CtaBanner />
      <ContactSection />
      <Footer />
    </main>
  );
}
