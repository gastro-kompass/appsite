'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import ScrollRevealGrid from '@/components/ScrollRevealGrid';
import { STATS_ITEMS as stats, STATS_CATEGORIES as categories } from '@/config/constants';

function CountUp({
  target,
  suffix,
  isText,
  textValue,
}: {
  target: number;
  suffix: string;
  isText?: boolean;
  textValue?: string;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started || isText) return;
    let startTimestamp: number | null = null;
    const duration = 2000; // 2 seconds duration
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Quadratic ease-out formula
      const easeProgress = progress * (2 - progress);
      setCount(Math.floor(easeProgress * target));
      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [started, target, isText]);

  return (
    <span ref={ref} className="text-3xl sm:text-4xl font-extrabold" style={{ color: '#040404' }}>
      {isText ? textValue : `${count}${suffix}`}
    </span>
  );
}

export default function StatsSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section
      className="py-16 border-y"
      style={{ backgroundColor: '#ffffff', borderColor: '#e8edcc' }}
    >
      <div className="mx-auto max-w-7xl px-6 space-y-10">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat, i) => (
            <a
              key={cat.label}
              href={cat.href}
              onClick={() => setActiveCategory(i)}
              className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
              style={
                activeCategory === i
                  ? { backgroundColor: '#9DC40E', color: '#ffffff' }
                  : { backgroundColor: '#ffffff', color: '#575757', border: '1px solid #d8dac4' }
              }
            >
              {cat.label}
            </a>
          ))}
        </div>

        {/* Stats Grid */}
        <ScrollRevealGrid className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl p-4 sm:p-6 border text-center space-y-3 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg h-full"
              style={{ backgroundColor: '#ffffff', borderColor: '#d8dac4' }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto"
                style={{ backgroundColor: 'rgba(157,196,14,0.12)' }}
              >
                <Icon name={stat.icon} size={20} style={{ color: '#9DC40E' }} />
              </div>
              <CountUp
                target={stat.value}
                suffix={stat.suffix}
                isText={stat.isText}
                textValue={stat.textValue}
              />
              <div>
                <p className="text-sm font-bold" style={{ color: '#040404' }}>
                  {stat.label}
                </p>
                <p className="text-xs mt-0.5" style={{ color: '#575757' }}>
                  {stat.desc}
                </p>
              </div>
            </div>
          ))}
        </ScrollRevealGrid>
      </div>
    </section>
  );
}
