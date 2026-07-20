'use client';

import React from 'react';
import { BackgroundEffects } from '@/components/ui/BackgroundEffects';
import { ScrollProgress } from '@/components/shared/ScrollProgress';
import { Navbar } from '@/components/shared/Navbar';
import { Hero } from '@/components/sections/Hero';
import { TechMarquee } from '@/components/ui/TechMarquee';
import { ImpactStats } from '@/components/sections/ImpactStats';
import { Services } from '@/components/sections/Services';
import { SolutionPlayground } from '@/components/sections/SolutionPlayground';
import { TechStack } from '@/components/sections/TechStack';
import { Process } from '@/components/sections/Process';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/shared/Footer';
import { LegalModal } from '@/components/overlays/LegalModal';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[--atphix-void] text-[--atphix-text-hi] overflow-x-hidden selection:bg-[--atphix-accent-1]/30 selection:text-[--atphix-accent-1]">
      <BackgroundEffects />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <TechMarquee />
      <ImpactStats />
      <Services />
      <SolutionPlayground />
      <TechStack />
      <Process />
      <Contact />
      <Footer />
      <LegalModal />
    </main>
  );
}
