'use client';

import React from 'react';
import { Sparkles, Zap, Shield, Cpu, Code2, Bot, Smartphone } from 'lucide-react';

export const TechMarquee: React.FC = () => {
  const items = [
    { label: 'Autonomous AI Agents', icon: <Bot className="w-4 h-4 text-[--atphix-accent-1]" /> },
    { label: 'Next.js 15 Web Platforms', icon: <Code2 className="w-4 h-4 text-[--atphix-accent-2]" /> },
    { label: 'React Native Mobile Apps', icon: <Smartphone className="w-4 h-4 text-[--atphix-accent-1]" /> },
    { label: '<30ms RAG Latency', icon: <Zap className="w-4 h-4 text-emerald-400" /> },
    { label: '60fps WebGL Shaders', icon: <Sparkles className="w-4 h-4 text-purple-400" /> },
    { label: 'Enterprise Automation Pipelines', icon: <Cpu className="w-4 h-4 text-[--atphix-accent-2]" /> },
    { label: '100% IP Ownership', icon: <Shield className="w-4 h-4 text-[--atphix-accent-1]" /> },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[--atphix-void] border-y border-[--atphix-border]/60 py-4 z-10 select-none">
      {/* Left/Right Fade Gradient Masks */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[--atphix-void] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[--atphix-void] to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Track */}
      <div className="flex w-max animate-marquee space-x-8">
        {[...items, ...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[--atphix-surface]/40 border border-[--atphix-border]/60 text-xs font-mono text-white shrink-0 hover:border-[--atphix-accent-1]/50 transition-colors"
          >
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
