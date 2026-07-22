'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealGridProps {
  children: React.ReactNode[];
  className?: string;
  staggerDelay?: number;
}

export default function ScrollRevealGrid({
  children,
  className = '',
  staggerDelay = 0.1,
}: ScrollRevealGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-5% 0px' }}
      className={className}
    >
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          const childClassName = (child.props as { className?: string }).className || '';
          const gridSpanClasses = childClassName
            .split(' ')
            .filter(
              (c) =>
                c.startsWith('col-span-') ||
                c.startsWith('row-span-') ||
                c.includes('col-span-') ||
                c.includes('row-span-')
            )
            .join(' ');

          return (
            <motion.div key={index} variants={itemVariants} className={`h-full ${gridSpanClasses}`}>
              {React.cloneElement(child, {
                className: childClassName
                  .split(' ')
                  .filter(
                    (c) =>
                      !c.startsWith('col-span-') &&
                      !c.startsWith('row-span-') &&
                      !c.includes('col-span-') &&
                      !c.includes('row-span-')
                  )
                  .join(' '),
              } as React.HTMLAttributes<HTMLElement>)}
            </motion.div>
          );
        }
        return (
          <motion.div key={index} variants={itemVariants} className="h-full">
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
