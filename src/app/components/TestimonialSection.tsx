import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function TestimonialSection() {
  return (
    <section className="py-20 overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Large photo */}
          <div className="relative rounded-2xl overflow-hidden h-[400px] img-hover-zoom">
            <AppImage
              src="https://img.rocket.new/generatedImages/rocket_gen_img_1d3fa3725-1763299793911.png"
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
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full overflow-hidden border-2 flex-shrink-0"
                  style={{ borderColor: 'rgba(157,196,14,0.4)' }}
                >
                  <AppImage
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_13891276a-1763300968836.png"
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
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)]?.map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5" fill="#9DC40E" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
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
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '24h', label: 'Reaktionszeit' },
                { value: '100+', label: 'Betriebe' },
                { value: '5★', label: 'Bewertung' },
              ]?.map((stat) => (
                <div
                  key={stat?.label}
                  className="text-center p-4 rounded-xl border"
                  style={{ backgroundColor: '#ffffff', borderColor: '#d8dac4' }}
                >
                  <p className="text-2xl font-extrabold" style={{ color: '#040404' }}>
                    {stat?.value}
                  </p>
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
