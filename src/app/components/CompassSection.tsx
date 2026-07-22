'use client';

import React, { useState } from 'react';

interface CompassSegment {
  id: string;
  label: string;
  sublabel?: string;
  href: string;
  angle: number; // center angle in degrees (0 = top)
  iconPath: string;
  color: string;
}

const segments: CompassSegment[] = [
  {
    id: 'standort',
    label: 'Standort &',
    sublabel: 'Lokalfindung',
    href: '#leistungen',
    angle: -67.5,
    iconPath:
      'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
    color: '#9DC40E',
  },
  {
    id: 'gruendung',
    label: 'Gründung &',
    sublabel: 'Rechtsform',
    href: '#leistungen',
    angle: -22.5,
    iconPath: 'M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4zM2 3h20v18H2V3zm2 2v14h16V5H4z',
    color: '#7ab80d',
  },
  {
    id: 'foerderungen',
    label: 'Förderungen &',
    sublabel: 'Finanzierung',
    href: '#leistungen',
    angle: 22.5,
    iconPath:
      'M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z',
    color: '#5a9e0a',
  },
  {
    id: 'genehmigung',
    label: 'Betriebsanlagen-',
    sublabel: 'Genehmigung',
    href: '#leistungen',
    angle: 67.5,
    iconPath:
      'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z',
    color: '#9DC40E',
  },
  {
    id: 'kassensysteme',
    label: 'Kassensysteme',
    sublabel: '& Payment',
    href: '#leistungen',
    angle: 112.5,
    iconPath:
      'M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z',
    color: '#7ab80d',
  },
  {
    id: 'steuer',
    label: 'Steuerliche',
    sublabel: 'Betreuung',
    href: '#leistungen',
    angle: 157.5,
    iconPath:
      'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z',
    color: '#5a9e0a',
  },
  {
    id: 'ausstattung',
    label: 'Ausstattung',
    sublabel: '& Bau',
    href: '#leistungen',
    angle: 202.5,
    iconPath:
      'M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z',
    color: '#9DC40E',
  },
  {
    id: 'marketing',
    label: 'Marketing &',
    sublabel: 'Digitale Präsenz',
    href: '#leistungen',
    angle: 247.5,
    iconPath:
      'M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z',
    color: '#7ab80d',
  },
  {
    id: 'rundum',
    label: 'Rundum-',
    sublabel: 'Paket',
    href: '#leistungen',
    angle: 292.5,
    iconPath:
      'M20 6h-2.18c.07-.44.18-.88.18-1.36C18 2.53 15.47 0 12.36 0c-1.73 0-3.24.87-4.17 2.19L12 6H20zm-7.64 0H6L3.27 2.19C2.34.87.83 0-.9 0-4.01 0-6.54 2.53-6.54 4.64c0 .48.11.92.18 1.36H-8.54v14c0 1.1.9 2 2 2h17.08c1.1 0 2-.9 2-2V6h-2.18z',
    color: '#5a9e0a',
  },
];

// Extra segments for outer ring
const extraSegments = [
  {
    id: 'versicherungen',
    label: 'Versicherungen',
    sublabel: '(Best-Preis)',
    href: '#partner',
    angle: 270,
  },
  { id: 'strom', label: 'Stromanbieter', sublabel: '(Best-Preis)', href: '#partner', angle: 315 },
];

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
                        <svg viewBox="0 0 24 24" width="24" height="24">
                          <path
                            d={seg.iconPath}
                            fill={isHovered ? '#ffffff' : '#7ab80d'}
                            style={{ transition: 'all 0.2s ease' }}
                          />
                        </svg>
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
              <g transform={`translate(${cx - 14}, ${cy - 32})`}>
                <svg viewBox="0 0 28 28" width="28" height="28">
                  <path
                    d="M14 2C10.69 2 8 4.69 8 8c0 1.48.54 2.83 1.42 3.87L8 20h16l-1.42-8.13C23.46 10.83 24 9.48 24 8c0-3.31-2.69-6-6-6h-4z"
                    fill="#9DC40E"
                  />
                  <rect x="8" y="20" width="16" height="3" rx="1.5" fill="#7ab80d" />
                  <path
                    d="M11 8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5S11 9.33 11 8.5z"
                    fill="white"
                    opacity="0.6"
                  />
                </svg>
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
