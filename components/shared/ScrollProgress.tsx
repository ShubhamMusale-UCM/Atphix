'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useScrollY } from '@/hooks/useScrollY';

export const ScrollProgress: React.FC = () => {
  const { scrollProgress } = useScrollY();

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[100] bg-transparent pointer-events-none">
      <motion.div
        className="h-full bg-[--atphix-accent-1] shadow-[0_0_8px_var(--atphix-accent-1)]"
        style={{ scaleX: scrollProgress, transformOrigin: '0%' }}
      />
    </div>
  );
};
