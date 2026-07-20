'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Code, Rocket, CheckCircle2 } from 'lucide-react';
import { fadeUp } from '@/lib/animations';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Discovery & Deep Audit',
      subtitle: 'DAY 1 - 3 // AUDIT & SCOPING',
      desc: 'We analyze your workflows, API dependencies, bottlenecks, and security rules to construct an actionable execution blueprint.',
      icon: <Search className="w-6 h-6 text-[--atphix-accent-1]" />,
      deliverables: ['System Bottleneck Assessment', 'API Security & Data Flow Map', 'Milestone SOW Roadmap'],
      duration: '48 Hours',
    },
    {
      num: '02',
      title: 'System Architecture Design',
      subtitle: 'DAY 4 - 7 // ARCHITECTURE & SCHEMAS',
      desc: 'Designing vector indexes, GraphQL/REST schemas, database ERDs, cloud infrastructure, and 60fps UI/UX design tokens.',
      icon: <Compass className="w-6 h-6 text-[--atphix-accent-2]" />,
      deliverables: ['Figma Design System Tokens', 'LLM RAG Vector Schema', 'Microservice Architecture Diagram'],
      duration: '4 Days',
    },
    {
      num: '03',
      title: 'Rapid Engineering & Sprints',
      subtitle: 'WEEK 2 - 4 // HIGH-VELOCITY BUILD',
      desc: 'Full-stack engineering in rapid 2-day cycles. Continuous integration, clean code architecture, and automated test coverage.',
      icon: <Code className="w-6 h-6 text-[--atphix-accent-1]" />,
      deliverables: ['Production Web & Mobile Builds', 'Autonomous AI Agent Integration', 'Asynchronous Task Pipelines'],
      duration: '2 - 3 Weeks',
    },
    {
      num: '04',
      title: 'Deployment & Continuous Tuning',
      subtitle: 'POST-LAUNCH // ZERO-DOWNTIME CI/CD',
      desc: 'Automated CI/CD deployment to AWS/GCP, real-time logging, vector memory tuning, and full IP ownership transfer.',
      icon: <Rocket className="w-6 h-6 text-[--atphix-accent-2]" />,
      deliverables: ['Complete Source Code Transfer', 'Deployment CI/CD Pipelines', 'Ongoing SLA Support'],
      duration: 'Continuous',
    },
  ];

  return (
    <section id="process" className="py-28 px-6 relative z-10 bg-[--atphix-surface]/20 border-t border-[--atphix-border]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <span className="caption-text text-[--atphix-accent-1] tracking-[0.12em] block">
            DETERMINISTIC METHODOLOGY
          </span>
          <h2 className="display-title text-white">How We Deliver Enterprise Solutions</h2>
          <p className="body-lg text-[--atphix-text-mid]">
            A structured, 4-phase engineering methodology guaranteeing rapid delivery without compromising reliability.
          </p>
        </motion.div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              onClick={() => setActiveStep(idx)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative p-8 rounded-3xl border transition-all duration-300 cursor-pointer space-y-5 ${
                activeStep === idx
                  ? 'bg-[--atphix-surface] border-[--atphix-accent-1] shadow-[0_0_30px_rgba(0,240,255,0.15)]'
                  : 'bg-[--atphix-surface]/40 border-[--atphix-border] hover:border-[--atphix-border]/80'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-heading font-black text-3xl text-[--atphix-accent-1]">
                  {step.num}
                </span>
                <div className="p-2.5 rounded-xl bg-[--atphix-void] border border-[--atphix-border]">
                  {step.icon}
                </div>
              </div>

              <div>
                <span className="text-[10px] font-mono text-[--atphix-accent-2] uppercase block tracking-wider">
                  {step.subtitle}
                </span>
                <h3 className="font-heading text-xl font-bold text-white mt-1">{step.title}</h3>
              </div>

              <p className="text-xs text-[--atphix-text-mid] leading-relaxed">{step.desc}</p>

              <div className="pt-4 border-t border-[--atphix-border]/60 space-y-2">
                <span className="text-[11px] font-semibold text-white block">Key Deliverables:</span>
                {step.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-1.5 text-[11px] text-[--atphix-text-mid]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[--atphix-accent-1] shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
