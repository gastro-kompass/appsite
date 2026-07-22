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
import ScrollReveal from '@/components/ScrollReveal';

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />

      <ScrollReveal>
        <StatsSection />
      </ScrollReveal>

      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>

      <ScrollReveal>
        <CompassSection />
      </ScrollReveal>

      <ScrollReveal>
        <ServicesSection />
      </ScrollReveal>

      <ScrollReveal>
        <ProcessSection />
      </ScrollReveal>

      <ScrollReveal>
        <PartnersSection />
      </ScrollReveal>

      <ScrollReveal>
        <TestimonialSection />
      </ScrollReveal>

      <ScrollReveal>
        <CtaBanner />
      </ScrollReveal>

      <ScrollReveal>
        <ContactSection />
      </ScrollReveal>

      <Footer />
    </main>
  );
}
