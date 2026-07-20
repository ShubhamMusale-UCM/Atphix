'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Smartphone, Cpu } from 'lucide-react';
import { fadeUp } from '@/lib/animations';

interface TechCategory {
  id: string;
  category: string;
  icon: React.ReactNode;
  description: string;
  technologies: { name: string; tag: string; desc: string }[];
}

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ai');

  const categories: TechCategory[] = [
    {
      id: 'ai',
      category: 'AI / ML & Agentic Systems',
      icon: <Cpu className="w-5 h-5 text-[--atphix-accent-1]" />,
      description: 'Cutting-edge LLM frameworks, vector databases, and multi-agent execution engines.',
      technologies: [
        { name: 'Python', tag: 'Core AI', desc: 'Primary language for model tuning and RAG pipelines.' },
        { name: 'LangChain & LlamaIndex', tag: 'Orchestration', desc: 'Frameworks for memory management and agent chains.' },
        { name: 'Pinecone / Qdrant', tag: 'Vector DB', desc: 'Sub-30ms similarity search & embedding storage.' },
        { name: 'PyTorch', tag: 'Deep Learning', desc: 'Custom neural network architectures and embeddings.' },
        { name: 'Ollama & Local LLMs', tag: 'Private AI', desc: 'On-premise zero-data-leak model hosting.' },
      ],
    },
    {
      id: 'web',
      category: 'Full-Stack & Web Engineering',
      icon: <Code className="w-5 h-5 text-[--atphix-accent-2]" />,
      description: 'High-speed web platforms built for SEO, zero latency, and responsive UI elegance.',
      technologies: [
        { name: 'Next.js 15', tag: 'Framework', desc: 'App router, server actions, and edge rendering.' },
        { name: 'TypeScript', tag: 'Language', desc: 'Strict type safety across full frontend and backend.' },
        { name: 'Tailwind CSS', tag: 'Styling', desc: 'Utility-first tokens and glassmorphism styling.' },
        { name: 'Framer Motion', tag: 'Animations', desc: 'Hardware-accelerated 60fps UI micro-interactions.' },
        { name: 'Three.js / WebGL', tag: '3D Shaders', desc: 'Generative canvas particle & GLSL shader effects.' },
      ],
    },
    {
      id: 'mobile',
      category: 'Cross-Platform Mobile Apps',
      icon: <Smartphone className="w-5 h-5 text-[--atphix-accent-1]" />,
      description: 'Fluid iOS and Android applications utilizing React Native and Expo.',
      technologies: [
        { name: 'React Native', tag: 'Core Mobile', desc: 'Unified codebase with native performance.' },
        { name: 'Expo Ecosystem', tag: 'Tooling', desc: 'Rapid build pipelines, OTA updates, and native bridges.' },
        { name: 'Reanimated 3', tag: 'Animations', desc: 'UI thread gesture and spring physics.' },
        { name: 'SQLite / WatermelonDB', tag: 'Local DB', desc: 'Offline-first database sync with backend.' },
      ],
    },
    {
      id: 'cloud',
      category: 'Cloud Infra & Workflow Automation',
      icon: <Server className="w-5 h-5 text-[--atphix-accent-2]" />,
      description: 'Distributed microservices, cloud deployments, and automated job queues.',
      technologies: [
        { name: 'Node.js & Go', tag: 'Backend APIs', desc: 'High-concurrency microservices and REST/gRPC.' },
        { name: 'PostgreSQL & Redis', tag: 'Databases', desc: 'Relational storage & high-speed memory caching.' },
        { name: 'Docker & Kubernetes', tag: 'DevOps', desc: 'Containerized microservices and automated scaling.' },
        { name: 'Temporal & N8N', tag: 'Workflows', desc: 'Durable execution engines and webhook pipelines.' },
        { name: 'AWS & GCP', tag: 'Cloud Native', desc: 'Serverless functions, S3, ECS, and Cloudflare Edge.' },
      ],
    },
  ];

  const currentCat = categories.find((c) => c.id === activeCategory) || categories[0];

  return (
    <section id="tech-stack" className="py-28 px-6 relative z-10 bg-[--atphix-void]">
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
            THE ATPHIX TECH MATRIX
          </span>
          <h2 className="display-title text-white">Modern Stack Built for Speed & Scale</h2>
          <p className="body-lg text-[--atphix-text-mid]">
            We select tools that offer maximum performance, security, and developer ergonomics.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[--atphix-surface] border border-[--atphix-accent-1] text-white shadow-[0_0_25px_rgba(0,240,255,0.2)]'
                  : 'bg-[--atphix-surface]/40 border border-[--atphix-border] text-[--atphix-text-mid] hover:text-white hover:border-[--atphix-border]/80'
              }`}
            >
              {cat.icon}
              {cat.category}
            </button>
          ))}
        </div>

        {/* Active Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCat.technologies.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="p-6 rounded-2xl bg-[--atphix-surface]/40 border border-[--atphix-border] hover:border-[--atphix-accent-1]/50 hover:bg-[--atphix-surface]/80 transition-all duration-300 space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-heading font-bold text-lg text-white group-hover:text-[--atphix-accent-1] transition-colors">
                  {tech.name}
                </h4>
                <span className="text-[10px] font-mono text-[--atphix-accent-2] uppercase bg-[--atphix-accent-2]/10 border border-[--atphix-accent-2]/20 px-2 py-0.5 rounded">
                  {tech.tag}
                </span>
              </div>
              <p className="text-xs text-[--atphix-text-mid] leading-relaxed">{tech.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
