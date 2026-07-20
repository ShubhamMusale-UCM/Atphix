'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';

interface TextRevealProps {
  text: string;
  className?: string;
}

export const TextReveal: React.FC<TextRevealProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = text.split(' ');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.9', 'start 0.4'],
  });

  return (
    <div ref={containerRef} className={`flex flex-wrap gap-x-1.5 gap-y-1 ${className}`}>
      {words.map((word, idx) => {
        const start = idx / words.length;
        const end = start + 1 / words.length;

        // Opacity transition per word based on scroll
        // eslint-disable-next-react-hooks/rules-of-hooks
        const opacity = useTransform(scrollYProgress, [start, end], [0.25, 1]);
        // eslint-disable-next-react-hooks/rules-of-hooks
        const blur = useTransform(scrollYProgress, [start, end], [4, 0]);

        return (
          <motion.span
            key={idx}
            style={{
              opacity,
              filter: `blur(${blur}px)`,
            }}
            className="inline-block text-white font-medium transition-all duration-200"
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
};

export const WordRevealContainer: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={containerVariants}
      className={className}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={itemVariants}>{child}</motion.div>
      ))}
    </motion.div>
  );
};
