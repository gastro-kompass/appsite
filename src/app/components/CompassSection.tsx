'use client';

import React, { useState } from 'react';
import { COMPASS_SEGMENTS as segments } from '@/config/constants';
import Icon from '@/components/ui/AppIcon';
import { ChefHat } from 'lucide-react';

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArc = endAngle - startAngle <= 180 ? '0' : '1';
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y}`;
}

function describeSegmentPath(
  cx: number,
  cy: number,
  innerR: number,
  outerR: number,
  startAngle: number,
  endAngle: number
) {
  const outerStart = polarToCartesian(cx, cy, outerR, startAngle);
  const outerEnd = polarToCartesian(cx, cy, outerR, endAngle);
  const innerStart = polarToCartesian(cx, cy, innerR, endAngle);
  const innerEnd = polarToCartesian(cx, cy, innerR, startAngle);
  const largeArc = endAngle - startAngle > 180 ? '1' : '0';
  return [
    `M ${outerStart.x} ${outerStart.y}`,
    `A ${outerR} ${outerR} 0 ${largeArc} 1 ${outerEnd.x} ${outerEnd.y}`,
    `L ${innerStart.x} ${innerStart.y}`,
    `A ${innerR} ${innerR} 0 ${largeArc} 0 ${innerEnd.x} ${innerEnd.y}`,
    'Z',
  ].join(' ');
}

export default function CompassSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const cx = 300;
  const cy = 300;
  const outerR = 270;
  const innerR = 130;
  const segmentCount = 9;
  const segmentAngle = 360 / segmentCount;

  const handleSegmentClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="kompass" className="py-20 overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: '#9DC40E' }}
          >
            <span className="w-6 h-0.5 inline-block" style={{ backgroundColor: '#9DC40E' }} />
            Navigation
            <span className="w-6 h-0.5 inline-block" style={{ backgroundColor: '#9DC40E' }} />
          </span>
          <h2
            className="text-section-title font-extrabold leading-tight"
            style={{ color: '#040404' }}
          >
            Ihr <span style={{ color: '#9DC40E' }}>Gastro-Kompass</span>
          </h2>
          <p className="mt-3 text-base max-w-xl mx-auto" style={{ color: '#575757' }}>
            Klicken Sie auf einen Bereich des Kompasses, um direkt zu den entsprechenden Leistungen
            zu gelangen.
          </p>
        </div>

        {/* Compass SVG */}
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-[620px] aspect-square">
            <svg
              viewBox="0 0 600 600"
              className="w-full h-full drop-shadow-2xl"
              style={{
                filter:
                  'drop-shadow(0 20px 60px rgba(157,196,14,0.18)) drop-shadow(0 4px 24px rgba(0,0,0,0.10))',
              }}
              suppressHydrationWarning
            >
              <defs>
                {/* Outer ring gradient */}
                <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#f0f4e8" />
                </radialGradient>
                {/* Green gradient for segments */}
                <linearGradient id="segGreen" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#b5d94a" />
                  <stop offset="100%" stopColor="#7ab80d" />
                </linearGradient>
                <linearGradient id="segGreenHover" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#c8e85a" />
                  <stop offset="100%" stopColor="#9DC40E" />
                </linearGradient>
                {/* Center gradient */}
                <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="70%" stopColor="#f5f7e4" />
                  <stop offset="100%" stopColor="#e8eccc" />
                </radialGradient>
                {/* Gold ring gradient */}
                <linearGradient id="goldRing" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#9DC40E" />
                  <stop offset="50%" stopColor="#c8e85a" />
                  <stop offset="100%" stopColor="#7ab80d" />
                </linearGradient>
                <filter id="segShadow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="rgba(0,0,0,0.15)" />
                </filter>
              </defs>

              {/* Outer background circle */}
              <circle cx={cx} cy={cy} r={outerR + 20} fill="url(#bgGrad)" />

              {/* Outer decorative ring */}
              <circle
                cx={cx}
                cy={cy}
                r={outerR + 18}
                fill="none"
                stroke="url(#goldRing)"
                strokeWidth="3"
                opacity="0.6"
              />
              <circle
                cx={cx}
                cy={cy}
                r={outerR + 10}
                fill="none"
                stroke="#9DC40E"
                strokeWidth="1"
                opacity="0.3"
              />

              {/* Outer ring text - top */}
              <path
                id="topArcText"
                d={describeArc(cx, cy, outerR + 6, -150, -30)}
                fill="none"
                suppressHydrationWarning
              />
              <text
                fontSize="11"
                fontWeight="700"
                letterSpacing="3"
                fill="#9DC40E"
                fontFamily="sans-serif"
              >
                <textPath href="#topArcText" startOffset="10%">
                  EINE RICHTUNG. ALLE LÖSUNGEN.
                </textPath>
              </text>

              {/* Outer ring text - bottom */}
              <path
                id="bottomArcText"
                d={describeArc(cx, cy, outerR + 6, 30, 150)}
                fill="none"
                suppressHydrationWarning
              />
              <text
                fontSize="11"
                fontWeight="700"
                letterSpacing="3"
                fill="#9DC40E"
                fontFamily="sans-serif"
              >
                <textPath href="#bottomArcText" startOffset="8%">
                  ORIENTIERUNG. ENTLASTUNG. WACHSTUM.
                </textPath>
              </text>

              {/* Dot decorations on outer ring */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
                const pt = polarToCartesian(cx, cy, outerR + 14, angle);
                return (
                  <circle key={angle} cx={pt.x} cy={pt.y} r="3.5" fill="#9DC40E" opacity="0.7" />
                );
              })}

              {/* Segments */}
              {segments.map((seg, i) => {
                const startAngle = i * segmentAngle - segmentAngle / 2;
                const endAngle = startAngle + segmentAngle;
                const midAngle = (startAngle + endAngle) / 2;
                const isHovered = hoveredId === seg.id;
                const segPath = describeSegmentPath(
                  cx,
                  cy,
                  innerR + 8,
                  outerR - 2,
                  startAngle,
                  endAngle
                );
                const midR = (innerR + outerR) / 2;
                // Center of the content group (icon + text) at the radial midpoint
                const contentPos = polarToCartesian(cx, cy, midR, midAngle);

                return (
                  <g
                    key={seg.id}
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleSegmentClick(seg.href)}
                    onMouseEnter={() => setHoveredId(seg.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    filter={isHovered ? 'url(#segShadow)' : undefined}
                  >
                    {/* Segment fill */}
                    <path
                      d={segPath}
                      fill={isHovered ? 'url(#segGreenHover)' : '#f8faf0'}
                      stroke={isHovered ? '#9DC40E' : '#d4e090'}
                      strokeWidth={isHovered ? '2' : '1'}
                      style={{ transition: 'all 0.2s ease' }}
                    />

                    {/* Icon + Label group — centered at segment midpoint */}
                    <g transform={`translate(${contentPos.x}, ${contentPos.y})`}>
                      {/* Icon box — centered horizontally, positioned above center */}
                      <g transform="translate(-12, -30)">
                        <rect
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                          rx="6"
                          fill={isHovered ? '#9DC40E' : '#eef5cc'}
                          style={{ transition: 'all 0.2s ease' }}
                        />
                        <g transform="translate(4, 4)">
                          <Icon
                            name={seg.icon}
                            size={16}
                            className={isHovered ? 'text-white' : 'text-[#7ab80d]'}
                            style={{ transition: 'all 0.2s ease' }}
                          />
                        </g>
                      </g>

                      {/* Label line 1 — below icon */}
                      <text
                        x="0"
                        y="6"
                        textAnchor="middle"
                        fontSize="8.5"
                        fontWeight="700"
                        fontFamily="sans-serif"
                        fill={isHovered ? '#040404' : '#575757'}
                        letterSpacing="0.3"
                        style={{ transition: 'all 0.2s ease', textTransform: 'uppercase' }}
                      >
                        {seg.label}
                      </text>
                      {seg.sublabel && (
                        <text
                          x="0"
                          y="18"
                          textAnchor="middle"
                          fontSize="8.5"
                          fontWeight="700"
                          fontFamily="sans-serif"
                          fill={isHovered ? '#040404' : '#575757'}
                          letterSpacing="0.3"
                          style={{ transition: 'all 0.2s ease', textTransform: 'uppercase' }}
                        >
                          {seg.sublabel}
                        </text>
                      )}
                    </g>
                  </g>
                );
              })}

              {/* Divider lines between segments */}
              {segments.map((_, i) => {
                const angle = i * segmentAngle - segmentAngle / 2;
                const inner = polarToCartesian(cx, cy, innerR + 8, angle);
                const outer = polarToCartesian(cx, cy, outerR - 2, angle);
                return (
                  <line
                    key={`div-${i}`}
                    x1={inner.x}
                    y1={inner.y}
                    x2={outer.x}
                    y2={outer.y}
                    stroke="#c8d880"
                    strokeWidth="1"
                    opacity="0.6"
                  />
                );
              })}

              {/* Inner ring border */}
              <circle
                cx={cx}
                cy={cy}
                r={innerR + 8}
                fill="none"
                stroke="url(#goldRing)"
                strokeWidth="2.5"
              />
              <circle
                cx={cx}
                cy={cy}
                r={innerR + 2}
                fill="none"
                stroke="#9DC40E"
                strokeWidth="1"
                opacity="0.4"
              />

              {/* Compass rose / center */}
              <circle cx={cx} cy={cy} r={innerR} fill="url(#centerGrad)" />
              <circle
                cx={cx}
                cy={cy}
                r={innerR - 2}
                fill="none"
                stroke="#9DC40E"
                strokeWidth="1.5"
                opacity="0.5"
              />

              {/* Compass arrow - North (top) */}
              <polygon
                points={`${cx},${cy - innerR + 16} ${cx - 14},${cy - 20} ${cx},${cy + 10} ${cx + 14},${cy - 20}`}
                fill="#9DC40E"
                opacity="0.9"
              />
              {/* Compass arrow - South (bottom) */}
              <polygon
                points={`${cx},${cy + innerR - 16} ${cx - 14},${cy + 20} ${cx},${cy - 10} ${cx + 14},${cy + 20}`}
                fill="#d4e090"
                opacity="0.7"
              />
              {/* Compass arrow - East */}
              <polygon
                points={`${cx + innerR - 16},${cy} ${cx + 20},${cy - 14} ${cx - 10},${cy} ${cx + 20},${cy + 14}`}
                fill="#d4e090"
                opacity="0.7"
              />
              {/* Compass arrow - West */}
              <polygon
                points={`${cx - innerR + 16},${cy} ${cx - 20},${cy - 14} ${cx + 10},${cy} ${cx - 20},${cy + 14}`}
                fill="#d4e090"
                opacity="0.7"
              />

              {/* Center circle overlay */}
              <circle cx={cx} cy={cy} r="52" fill="white" stroke="#9DC40E" strokeWidth="2" />
              <circle cx={cx} cy={cy} r="48" fill="none" stroke="#d4e090" strokeWidth="1" />

              {/* Chef hat icon in center */}
              <g transform={`translate(${cx - 14}, ${cy - 32})`} className="text-[#9DC40E]">
                <ChefHat size={28} strokeWidth={1.5} />
              </g>

              {/* Center text */}
              <text
                x={cx}
                y={cy + 8}
                textAnchor="middle"
                fontSize="13"
                fontWeight="900"
                fill="#040404"
                fontFamily="sans-serif"
                letterSpacing="1"
              >
                GASTRO
              </text>
              <text
                x={cx}
                y={cy + 23}
                textAnchor="middle"
                fontSize="13"
                fontWeight="900"
                fill="#9DC40E"
                fontFamily="sans-serif"
                letterSpacing="1"
              >
                KOMPASS
              </text>
              <text
                x={cx}
                y={cy + 36}
                textAnchor="middle"
                fontSize="9"
                fontWeight="600"
                fill="#575757"
                fontFamily="sans-serif"
                letterSpacing="2"
              >
                .AT
              </text>
            </svg>
          </div>
        </div>

        {/* Segment legend / quick links below compass — REMOVED */}
      </div>
    </section>
  );
}
