'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Code2, Smartphone, Cpu, Layers, Sparkles } from 'lucide-react';
import { ServiceCard, ServiceItem } from '../ui/ServiceCard';
import { TextReveal } from '../ui/TextReveal';

const SERVICES: ServiceItem[] = [
  {
    id: 'ai-engineering',
    title: 'Autonomous AI & LLM Systems',
    subtitle: 'RAG · Fine-Tuning · Agentic Workflows',
    description: 'Custom AI agents, private enterprise knowledge graphs, and sub-30ms RAG search tuned to your operational data.',
    icon: <Bot className="w-6 h-6 text-[--atphix-accent-1]" />,
    metricLabel: 'RAG Search Latency',
    metricValue: '<30ms RAG',
    features: ['Multi-Agent Swarms', 'Sub-30ms Vector RAG', 'Local Llama & GPT-4o'],
    techStack: ['Python', 'LangChain', 'Pinecone', 'vLLM', 'FastAPI'],
    gradient: 'from-[--atphix-accent-1]/15 to-transparent',
    deepDive: {
      architecturalApproach: 'Stateful agent orchestration with hybrid semantic search and zero external telemetry leak.',
      keyDeliverables: ['Custom Guardrails', 'LangSmith Tracing', 'Local Model Deployment'],
    },
  },
  {
    id: 'web-engineering',
    title: 'Next.js 15 Web Platforms',
    subtitle: 'App Router · Server Actions · Edge Engine',
    description: 'High-speed, SEO-optimized web applications with micro-interactions, 100/100 Lighthouse scores, and server-side streaming.',
    icon: <Code2 className="w-6 h-6 text-[--atphix-accent-2]" />,
    metricLabel: 'Lighthouse Score',
    metricValue: '100/100 Perf',
    features: ['Next.js 15 App Router', 'Dynamic Micro-Animations', 'Edge Caching'],
    techStack: ['React 19', 'Next.js 15', 'TypeScript', 'Tailwind', 'Framer Motion'],
    gradient: 'from-[--atphix-accent-2]/15 to-transparent',
    deepDive: {
      architecturalApproach: 'Server-driven partial pre-rendering (PPR) with isolated client islands for instantaneous state sync.',
      keyDeliverables: ['100 Lighthouse Score', 'SEO Schema Metadata', 'Global CDN Setup'],
    },
  },
  {
    id: 'mobile-engineering',
    title: 'Cross-Platform Mobile Apps',
    subtitle: 'React Native · iOS & Android · Offline First',
    description: '60fps native performance mobile apps with offline sync, biometric security, and clean modular state management.',
    icon: <Smartphone className="w-6 h-6 text-purple-400" />,
    metricLabel: 'Native Frame Rate',
    metricValue: '60 FPS Native',
    features: ['React Native Expo', 'Offline Database Sync', 'Biometric Auth'],
    techStack: ['React Native', 'Expo', 'WatermelonDB', 'Zustand', 'Reanimated'],
    gradient: 'from-purple-500/15 to-transparent',
    deepDive: {
      architecturalApproach: 'Single unified TypeScript codebase with custom native bridges for hardware-accelerated features.',
      keyDeliverables: ['App Store & Play Store Submissions', 'Push Notification Engine', 'OTA Updates'],
    },
  },
  {
    id: 'workflow-automation',
    title: 'Enterprise Workflow Engines',
    subtitle: 'Event-Driven · API Integration · Zero Downtime',
    description: 'Automate complex manual operations, webhook pipelines, and legacy database synchronizations with retry fault tolerance.',
    icon: <Cpu className="w-6 h-6 text-emerald-400" />,
    metricLabel: 'Process Acceleration',
    metricValue: '10x Speed',
    features: ['Temporal Orchestration', 'Custom Webhooks', 'Automated ETL'],
    techStack: ['Temporal.io', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    gradient: 'from-emerald-500/15 to-transparent',
    deepDive: {
      architecturalApproach: 'Durable event sourcing ensuring state consistency even during complete infrastructure restart.',
      keyDeliverables: ['Durable Workflows', 'Dashboard Monitoring', 'Failover Recovery'],
    },
  },
  {
    id: 'custom-saas',
    title: 'Tailored SaaS Architectures',
    subtitle: 'Multi-Tenant · Billing · RBAC Security',
    description: 'End-to-end custom software built for scale—complete with multi-tenancy, Stripe subscription billing, and fine-grained access control.',
    icon: <Layers className="w-6 h-6 text-cyan-400" />,
    metricLabel: 'Uptime Benchmark',
    metricValue: '99.99% Uptime',
    features: ['Stripe Billing Engine', 'Role-Based Access (RBAC)', 'Multi-Tenant DB'],
    techStack: ['Next.js', 'Prisma ORM', 'PostgreSQL', 'Stripe', 'Docker'],
    gradient: 'from-cyan-500/15 to-transparent',
    deepDive: {
      architecturalApproach: 'Isolated schema per tenant architecture for compliance and linear horizontal scaling.',
      keyDeliverables: ['Stripe Integration', 'Audit Trails', 'Auto Scaler Config'],
    },
  },
  {
    id: 'webgl-animations',
    title: 'WebGL & Interactive Visuals',
    subtitle: '3D Graphics · Canvas · Shader Magic',
    description: 'Captivate users with dynamic WebGL particle streams, 3D product visualizers, and interactive visual storytelling.',
    icon: <Sparkles className="w-6 h-6 text-amber-400" />,
    metricLabel: 'Visual Engagement',
    metricValue: 'High Impact',
    features: ['Three.js & Canvas', 'Custom GLSL Shaders', 'Scroll Animations'],
    techStack: ['Three.js', 'GLSL', 'Canvas API', 'Framer Motion', 'GSAP'],
    gradient: 'from-amber-500/15 to-transparent',
    deepDive: {
      architecturalApproach: 'GPU-accelerated rendering pipelines optimized for low memory footprint across mobile & desktop.',
      keyDeliverables: ['3D Canvas Models', 'Interactive Particle Physics', 'Scroll Storytelling'],
    },
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[--atphix-surface] border border-[--atphix-border] text-xs font-mono text-[--atphix-accent-1]">
          <span className="w-2 h-2 rounded-full bg-[--atphix-accent-1] animate-ping" />
          <span>CAPABILITIES & DOMAINS</span>
        </div>

        <h2 className="display-title font-heading text-white">
          Architectural Solutions We Engineer
        </h2>

        <div className="text-sm md:text-base text-[--atphix-text-mid] max-w-xl mx-auto">
          <TextReveal text="From autonomous AI agents to high-speed Next.js platforms and cross-platform mobile apps, we construct production-grade digital assets." />
        </div>
      </div>

      {/* Grid of 6 Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export const Services = ServicesSection;

