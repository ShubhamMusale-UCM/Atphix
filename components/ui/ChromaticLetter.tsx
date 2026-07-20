'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ChromaticLetterProps {
  char: string;
  index: number;
  hoveredIndex: number | null;
  onHover: (index: number | null) => void;
  logoFragment?: string;
}

export const ChromaticLetter: React.FC<ChromaticLetterProps> = ({
  char,
  index,
  hoveredIndex,
  onHover,
  logoFragment,
}) => {
  const [isSelfHovered, setIsSelfHovered] = useState(false);

  // Calculate magnetic offset based on proximity to hovered letter
  let xOffset = 0;
  if (hoveredIndex !== null && hoveredIndex !== index) {
    const diff = index - hoveredIndex;
    if (Math.abs(diff) === 1) {
      xOffset = diff > 0 ? 4 : -4;
    } else if (Math.abs(diff) === 2) {
      xOffset = diff > 0 ? 2 : -2;
    }
  }

  const handleMouseEnter = () => {
    setIsSelfHovered(true);
    onHover(index);
  };

  const handleMouseLeave = () => {
    setIsSelfHovered(false);
    onHover(null);
  };

  return (
    <motion.span
      className="relative inline-block select-none cursor-pointer px-[2px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        x: xOffset,
        scale: isSelfHovered ? 1.08 : 1,
        color: isSelfHovered ? '#6C63FF' : '#F2F2F7',
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 20,
      }}
    >
      {/* Background Logo Fragment Bleed-Through */}
      {logoFragment && isSelfHovered && (
        <motion.img
          src={logoFragment}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none z-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.25, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.2 }}
        />
      )}

      {/* Chromatic Aberration Red/Blue Shadows when hovered */}
      <span
        className={`relative z-10 transition-all duration-200 ${
          isSelfHovered ? 'chromatic-active' : ''
        }`}
      >
        {char}
      </span>
    </motion.span>
  );
};
