import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { IMAGES } from '@/config/constants';

export default function TestimonialSection() {
  return (
    <section className="py-20 overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Large photo */}
          <div className="relative rounded-2xl overflow-hidden h-[400px] img-hover-zoom">
            <AppImage
              src={IMAGES.testimonialOwner}
              alt="Happy restaurant owner in Vienna gastronomy setting, warm welcoming atmosphere"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div
              className="absolute bottom-5 left-5 right-5 rounded-xl p-4 shadow-lg"
              style={{ backgroundColor: 'rgba(245,247,228,0.95)' }}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full overflow-hidden border-2 flex-shrink-0"
                    style={{ borderColor: 'rgba(157,196,14,0.4)' }}
                  >
                    <AppImage
                      src={IMAGES.testimonialHeadshot}
                      alt="Mustafa K., restaurant owner in Vienna, professional headshot"
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: '#040404' }}>
                      Mustafa K.
                    </p>
                    <p className="text-xs" style={{ color: '#575757' }}>
                      Restaurantbesitzer, Wien 1030
                    </p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)]?.map((_, i) => (
                    <Icon
                      key={i}
                      name="StarIcon"
                      size={14}
                      className="text-[#9DC40E]"
                      variant="solid"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Quote content */}
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="section-label">Kundenstimme</span>
              <h2
                className="text-section-title font-extrabold leading-tight"
                style={{ color: '#040404' }}
              >
                Was unsere Kunden <span style={{ color: '#9DC40E' }}>sagen</span>
              </h2>
            </div>

            {/* Quote card */}
            <div
              className="rounded-2xl p-7 border relative"
              style={{ backgroundColor: '#ffffff', borderColor: '#d8dac4' }}
            >
              <div
                className="text-6xl font-serif leading-none absolute top-4 left-6 select-none"
                style={{ color: 'rgba(157,196,14,0.2)' }}
              >
                "
              </div>
              <blockquote
                className="text-base leading-relaxed font-medium pt-4 relative z-10"
                style={{ color: '#040404' }}
              >
                Der GASTRO-KOMPASS hat uns von Anfang an begleitet — von der Suche nach dem
                perfekten Lokal bis zur Eröffnung.
              </blockquote>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { value: '24h', label: 'Reaktionszeit' },
                { value: '100+', label: 'Betriebe' },
                { value: '5.0', label: 'Bewertung', isRating: true },
              ]?.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#f8faf2] rounded-xl p-3 border text-center"
                  style={{ borderColor: '#d8dac4' }}
                >
                  <div className="flex items-center justify-center gap-1">
                    <p className="text-2xl font-extrabold" style={{ color: '#040404' }}>
                      {stat?.value}
                    </p>
                    {stat.isRating && (
                      <Icon
                        name="StarIcon"
                        size={18}
                        className="text-[#9DC40E]"
                        variant="solid"
                        style={{ marginTop: '-2px' }}
                      />
                    )}
                  </div>
                  <p className="text-xs mt-0.5 font-medium" style={{ color: '#575757' }}>
                    {stat?.label}
                  </p>
                </div>
              ))}
            </div>

            <a href="#kontakt" className="btn-primary text-sm inline-flex">
              <Icon name="ChatBubbleLeftRightIcon" size={16} />
              Jetzt Beratung anfragen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
