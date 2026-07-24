'use client';

import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import { IMAGES } from '@/config/constants';

const navLinks = [
  { label: 'Leistungen', href: '/#leistungen' },
  { label: 'Über uns', href: '/#ueber-uns' },
  { label: 'Partner', href: '/#partner' },
  { label: 'Kontakt', href: '/#kontakt' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'backdrop-blur-md shadow-sm border-b' : 'backdrop-blur-sm border-b'
        }`}
        style={{
          backgroundColor: scrolled ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.92)',
          borderColor: '#e2e8cc',
        }}
      >
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <AppLogo
              src={IMAGES.logo}
              size={60}
              className="rounded-full overflow-hidden transition-transform group-hover:scale-105"
            />
            <span
              className="font-extrabold text-base tracking-tight hidden sm:block"
              style={{ color: '#040404' }}
            >
              GASTRO<span style={{ color: '#9DC40E' }}>KOMPASS</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                className="text-sm font-semibold transition-colors relative group"
                style={{ color: '#575757' }}
              >
                {link?.label}
                <span
                  className="absolute -bottom-0.5 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 rounded-full"
                  style={{ backgroundColor: '#9DC40E' }}
                />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/#kontakt" className="btn-primary text-sm">
              Beratung anfragen
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2"
            style={{ color: '#040404' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
          >
            <Icon name={menuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={24} />
          </button>
        </div>
      </header>
      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col pt-20 px-6 md:hidden"
          style={{ backgroundColor: '#ffffff' }}
        >
          <nav className="flex flex-col gap-2 mt-4">
            {navLinks?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                onClick={() => setMenuOpen(false)}
                className="text-xl font-bold transition-colors py-3 border-b"
                style={{ color: '#040404', borderColor: '#d8dac4' }}
              >
                {link?.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8">
            <Link
              href="/#kontakt"
              onClick={() => setMenuOpen(false)}
              className="btn-primary w-full justify-center text-base"
            >
              Beratung anfragen
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
