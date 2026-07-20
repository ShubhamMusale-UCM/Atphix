'use client';

import React from 'react';
import Image from 'next/image';
import { Mail, Phone } from 'lucide-react';
import { useLegalStore } from '@/store/useLegalStore';

export const Footer: React.FC = () => {
  const { openModal } = useLegalStore();

  return (
    <footer className="relative border-t border-[--atphix-border] bg-[--atphix-void] py-16 px-6 z-10">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-[--atphix-border]/60">
          {/* Brand Identity & Founder Info */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="relative w-8 h-8 flex items-center justify-center rounded-lg bg-black/60 border border-[--atphix-border]">
                <Image
                  src="/logo/atphix-fragments.svg"
                  alt="Atphix Logo"
                  width={20}
                  height={20}
                  className="w-4 h-4"
                />
              </div>
              <span className="font-heading font-extrabold text-lg tracking-wider text-white">
                ATPHIX
              </span>
            </div>
            <p className="text-xs text-[--atphix-text-mid] max-w-sm">
              Custom AI, Mobile Apps, Full-Stack Web Platforms & Enterprise Workflow Automation.
            </p>
          </div>

          {/* Contact Quick Info */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-xs font-mono text-[--atphix-text-mid]">
            <a
              href="tel:+918485856618"
              className="flex items-center gap-2 hover:text-[--atphix-accent-1] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[--atphix-accent-1]" />
              <span>+91 8485856618</span>
            </a>
            <a
              href="mailto:musaleshubham7@gmail.com"
              className="flex items-center gap-2 hover:text-[--atphix-accent-2] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[--atphix-accent-2]" />
              <span>musaleshubham7@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[--atphix-text-mid]">
          <div>
            © {new Date().getFullYear()} Atphix. Engineered by <span className="text-white font-medium">Shubham Musale</span>. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => openModal('privacy')}
              className="hover:text-white transition-colors cursor-pointer focus:outline-none"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => openModal('terms')}
              className="hover:text-white transition-colors cursor-pointer focus:outline-none"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
