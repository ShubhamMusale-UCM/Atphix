'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { ChromaticLetter } from '@/components/ui/ChromaticLetter';
import { Button } from '@/components/ui/Button';

export const Hero: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const brandLetters = 'Atphix'.split('');

  const scrollToContact = () => {
    const target = document.querySelector('#contact');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const target = document.querySelector('#services');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Radial Background Orbs */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_60%_40%,#6C63FF18_0%,transparent_70%)] animate-orb-drift pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-[radial-gradient(ellipse_at_30%_70%,#00D4AA10_0%,transparent_70%)] pointer-events-none" />

      {/* Dot Grid Background Mask */}
      <div className="absolute inset-0 bg-dot-grid opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 flex flex-col items-center">
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[--atphix-surface] border border-[--atphix-border] text-xs font-mono text-[--atphix-accent-2] uppercase tracking-widest shadow-inner"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[--atphix-accent-2] animate-pulse" />
          Next-Gen Intelligence & Automation
        </motion.div>

        {/* Chromatic Headline "Atphix" */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="display-hero text-white tracking-tight flex items-center justify-center py-2"
        >
          {brandLetters.map((char, index) => (
            <ChromaticLetter
              key={index}
              char={char}
              index={index}
              hoveredIndex={hoveredIndex}
              onHover={setHoveredIndex}
              logoFragment="/logo/atphix-fragments.svg"
            />
          ))}
        </motion.h1>

        {/* Sharp Precision Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="body-lg text-[--atphix-text-mid] max-w-2xl text-center leading-relaxed"
        >
          We architect the invisible — the automated systems, integrated intelligence, and operational infrastructure
          that lets ambitious companies run at machine speed.
        </motion.p>

        {/* CTA Button Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center gap-4 pt-4"
        >
          <Button variant="primary" onClick={scrollToContact} className="gap-2">
            Begin Your Build
            <ArrowRight className="w-4 h-4" />
          </Button>

          <Button variant="secondary" onClick={scrollToServices}>
            View Our Work
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="pt-16"
        >
          <button
            onClick={scrollToServices}
            aria-label="Scroll to services"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-[--atphix-border] text-[--atphix-text-mid] hover:text-[--atphix-accent-1] hover:border-[--atphix-accent-1] transition-all cursor-pointer"
          >
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
