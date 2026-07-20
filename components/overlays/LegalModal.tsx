'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useLegalStore } from '@/store/useLegalStore';
import { PRIVACY_POLICY, TERMS_OF_SERVICE } from '@/lib/legalContent';

export const LegalModal: React.FC = () => {
  const { modal, closeModal } = useLegalStore();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };

    if (modal) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [modal, closeModal]);

  const content = modal === 'privacy' ? PRIVACY_POLICY : modal === 'terms' ? TERMS_OF_SERVICE : null;

  return (
    <AnimatePresence>
      {modal && content && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-[--atphix-void]/90 backdrop-blur-2xl"
          />

          {/* Modal Panel */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="relative w-full max-w-3xl max-h-[80vh] rounded-2xl bg-[--atphix-surface] border border-[--atphix-border] shadow-2xl overflow-hidden flex flex-col z-10"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-[--atphix-border] bg-[--atphix-void]/50">
              <div>
                <h2 id="modal-title" className="font-syne text-2xl font-bold text-white">
                  {content.title}
                </h2>
                <p className="text-xs text-[--atphix-text-lo] pt-1">
                  Last updated: {content.lastUpdated} | Effective: {content.effectiveDate}
                </p>
              </div>

              <motion.button
                onClick={closeModal}
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.2 }}
                className="p-2 rounded-full bg-[--atphix-void] text-[--atphix-text-mid] hover:text-white border border-[--atphix-border] hover:border-[--atphix-accent-1] cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-[--atphix-text-mid] leading-relaxed custom-scrollbar">
              {content.sections.map((sec, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="font-semibold text-[--atphix-text-hi] tracking-wider uppercase text-xs">
                    {sec.heading}
                  </h3>
                  <p className="whitespace-pre-line">{sec.content}</p>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-[--atphix-border] bg-[--atphix-void]/50 flex justify-end">
              <button
                onClick={closeModal}
                className="px-6 py-2 rounded-lg bg-[--atphix-muted] hover:bg-[--atphix-accent-1] text-xs font-medium text-white transition-colors cursor-pointer"
              >
                Close Document
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
