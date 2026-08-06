'use client';

import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';
import { CONTACT_INFO, IMAGES } from '@/config/constants';

export default function Footer() {
  return (
    <footer
      className="pt-14 pb-8 px-6 border-t"
      style={{ backgroundColor: '#f8faf2', borderColor: '#e2e8cc' }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Logo + Tagline */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <AppLogo src={IMAGES.logo} size={40} className="rounded-full overflow-hidden" />
              <span className="font-extrabold text-lg" style={{ color: '#040404' }}>
                GASTRO<span style={{ color: '#9DC40E' }}>KOMPASS</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: '#575757' }}>
              Orientierung. Entlastung. Wachstum.
              <br />
              Ihr Partner für die Gastronomie in Wien.
            </p>
            {/* <div className="flex gap-2 mt-4">
              <a
                href="#"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
                style={{ backgroundColor: 'rgba(157,196,14,0.12)', color: '#9DC40E' }}
                aria-label="Instagram"
              >
                <Icon name="GlobeAltIcon" size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
                style={{ backgroundColor: 'rgba(157,196,14,0.12)', color: '#9DC40E' }}
                aria-label="LinkedIn"
              >
                <Icon name="BuildingOfficeIcon" size={16} />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-semibold text-xs uppercase tracking-widest mb-5"
              style={{ color: '#040404' }}
            >
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Leistungen', href: '/#leistungen' },
                { label: 'Über uns', href: '/#ueber-uns' },
                { label: 'Partner', href: '/#partner' },
                { label: 'Kontakt', href: '/#kontakt' },
              ]?.map((link) => (
                <li key={link?.href}>
                  <Link
                    href={link?.href}
                    className="text-sm font-medium transition-colors hover:text-[#9DC40E]"
                    style={{ color: '#575757' }}
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-semibold text-xs uppercase tracking-widest mb-5"
              style={{ color: '#040404' }}
            >
              Kontakt
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2 text-sm" style={{ color: '#575757' }}>
                <Icon
                  name="MapPinIcon"
                  size={14}
                  style={{ color: '#9DC40E' }}
                  className="shrink-0 mt-0.5"
                />
                {CONTACT_INFO.address}
              </li>
              <li className="flex items-center gap-2 text-sm" style={{ color: '#575757' }}>
                <Icon
                  name="PhoneIcon"
                  size={14}
                  style={{ color: '#9DC40E' }}
                  className="shrink-0"
                />
                <a href={CONTACT_INFO.phoneLink} className="hover:text-[#9DC40E] transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm" style={{ color: '#575757' }}>
                <Icon
                  name="EnvelopeIcon"
                  size={14}
                  style={{ color: '#9DC40E' }}
                  className="shrink-0"
                />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-[#9DC40E] transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="border-t pt-7 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: '#e2e8cc' }}
        >
          <p className="text-xs" style={{ color: '#9aaa7a' }}>
            Betreuung durch{' '}
            <a
              href="https://rankskipper.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline font-semibold text-[#9DC40E]"
            >
              Rankskipper
            </a>
          </p>
          <div className="flex gap-5">
            <Link
              href="/impressum"
              className="text-xs font-medium transition-colors hover:text-[#9DC40E]"
              style={{ color: '#9aaa7a' }}
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-xs font-medium transition-colors hover:text-[#9DC40E]"
              style={{ color: '#9aaa7a' }}
            >
              Datenschutz
            </Link>
            <Link
              href="/#kontakt"
              className="text-xs font-medium transition-colors hover:text-[#9DC40E]"
              style={{ color: '#9aaa7a' }}
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
