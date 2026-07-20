'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  onClick,
  ...props
}) => {
  if (variant === 'primary') {
    return (
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className={`relative inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 text-white bg-[--atphix-accent-1] shadow-[0_0_20px_var(--atphix-accent-glow)] hover:shadow-[0_0_30px_rgba(108,99,255,0.5)] border border-[--atphix-accent-1] cursor-pointer ${className}`}
        {...props}
      >
        {children}
      </motion.button>
    );
  }

  if (variant === 'ghost') {
    return (
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className={`relative inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 text-[--atphix-text-hi] bg-transparent border border-[--atphix-accent-1] hover:bg-[--atphix-accent-1] hover:text-white hover:shadow-[0_0_20px_var(--atphix-accent-glow)] cursor-pointer ${className}`}
        {...props}
      >
        {children}
      </motion.button>
    );
  }

  // Secondary variant: text-only with sliding underline effect
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={`group relative inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-[--atphix-text-hi] hover:text-white transition-colors duration-300 cursor-pointer ${className}`}
      {...props}
    >
      <span>{children}</span>
      <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-[--atphix-accent-2] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.button>
  );
};
