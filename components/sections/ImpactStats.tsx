'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Cpu, Code2 } from 'lucide-react';

export const ImpactStats: React.FC = () => {
  const stats = [
    {
      icon: <Zap className="w-5 h-5 text-[--atphix-accent-1]" />,
      value: '< 30ms',
      label: 'LLM RAG & Inference Latency',
      subtext: 'Optimized vector pipeline & caching',
    },
    {
      icon: <Cpu className="w-5 h-5 text-[--atphix-accent-2]" />,
      value: '10x',
      label: 'Automation Velocity',
      subtext: 'Autonomous agents replacing manual workflows',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[--atphix-accent-1]" />,
      value: '99.99%',
      label: 'Enterprise Uptime & SLA',
      subtext: 'Fault-tolerant microservices & retry queues',
    },
    {
      icon: <Code2 className="w-5 h-5 text-[--atphix-accent-2]" />,
      value: '100%',
      label: 'Custom IP Ownership',
      subtext: 'Clean codebases transferred directly to clients',
    },
  ];

  return (
    <section className="relative z-10 py-12 px-6 border-y border-[--atphix-border] bg-[--atphix-void]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative p-6 rounded-2xl bg-[--atphix-surface]/40 border border-[--atphix-border] hover:border-[--atphix-accent-1]/40 transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,240,255,0.1)]"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="p-2.5 rounded-xl bg-[--atphix-void] border border-[--atphix-border] group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <span className="text-[10px] font-mono text-[--atphix-accent-1] tracking-widest uppercase bg-[--atphix-accent-1]/10 px-2 py-0.5 rounded-full border border-[--atphix-accent-1]/20">
                BENCHMARK
              </span>
            </div>
            <div className="font-heading font-black text-3xl md:text-4xl text-white tracking-tight group-hover:text-[--atphix-accent-1] transition-colors">
              {stat.value}
            </div>
            <div className="text-sm font-semibold text-white mt-1">{stat.label}</div>
            <div className="text-xs text-[--atphix-text-mid] mt-0.5">{stat.subtext}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
