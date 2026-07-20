'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { GlowCard } from './GlowCard';

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  metricLabel: string;
  metricValue: string;
  features: string[];
  techStack: string[];
  gradient: string;
  deepDive: {
    architecturalApproach: string;
    keyDeliverables: string[];
  };
}

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <GlowCard className="p-7 space-y-5">
      {/* Background Gradient Subtle Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
      />

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="p-3 rounded-2xl bg-[--atphix-void] border border-[--atphix-border] text-white shadow-md">
          {service.icon}
        </div>
        <span className="text-[10px] font-mono tracking-widest text-[--atphix-accent-1] uppercase bg-[--atphix-accent-1]/10 border border-[--atphix-accent-1]/20 px-2.5 py-1 rounded-full">
          {service.metricValue}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-2">
        <span className="text-[10px] font-mono text-[--atphix-accent-2] uppercase tracking-wider block">
          {service.subtitle}
        </span>
        <h3 className="font-heading text-xl font-bold text-white group-hover:text-[--atphix-accent-1] transition-colors">
          {service.title}
        </h3>
        <p className="text-xs leading-relaxed text-[--atphix-text-mid]">
          {service.description}
        </p>

        {/* Feature Pills */}
        <div className="pt-2 flex flex-wrap gap-1.5">
          {service.features.map((feat, idx) => (
            <span
              key={idx}
              className="text-[10px] px-2 py-0.5 rounded-md bg-[--atphix-void] border border-[--atphix-border] text-[--atphix-text-hi] font-mono flex items-center gap-1"
            >
              <span className="w-1 h-1 rounded-full bg-[--atphix-accent-1]" />
              {feat}
            </span>
          ))}
        </div>
      </div>

      {/* Toggle Drawer */}
      <div className="pt-4 border-t border-[--atphix-border]/60 flex items-center justify-between">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[--atphix-accent-1] hover:underline focus:outline-none cursor-pointer"
        >
          {isExpanded ? 'Less info' : 'Architecture breakdown'}
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
          />
        </button>
        <a
          href="#contact"
          className="p-1 rounded-lg bg-[--atphix-void] border border-[--atphix-border] text-[--atphix-text-mid] hover:text-white hover:border-[--atphix-accent-1] transition-colors"
        >
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Expandable Info */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="pt-3 border-t border-[--atphix-border]/40 space-y-3 text-[11px]"
          >
            <p className="text-[--atphix-text-mid] leading-relaxed">
              {service.deepDive.architecturalApproach}
            </p>
            <div className="flex flex-wrap gap-1 text-[10px] text-[--atphix-text-hi]">
              {service.deepDive.keyDeliverables.map((item, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded bg-[--atphix-surface] border border-[--atphix-border]">
                  ✓ {item}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </GlowCard>
  );
};
