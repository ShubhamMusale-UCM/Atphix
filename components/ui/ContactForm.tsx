'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, Loader2, Send } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  budget: z.enum(['<$5k', '$5k–$20k', '$20k–$50k', '$50k+', 'Not sure']),
  message: z.string().min(20, 'Please tell us a bit more (minimum 20 characters)'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const budgetOptions = ['<$5k', '$5k–$20k', '$20k–$50k', '$50k+', 'Not sure'] as const;

export const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState<(typeof budgetOptions)[number]>('$5k–$20k');

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      budget: '$5k–$20k',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Submitted payload:', data);
    setIsSubmitted(true);
  };

  const handleBudgetSelect = (val: (typeof budgetOptions)[number]) => {
    setSelectedBudget(val);
    setValue('budget', val, { shouldValidate: true });
  };

  return (
    <div className="relative w-full rounded-2xl bg-[--atphix-surface] border border-[--atphix-border] p-8 md:p-10 shadow-2xl">
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center text-center py-12 space-y-6"
          >
            {/* Confetti Particle Burst FX */}
            <div className="relative flex items-center justify-center">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-[--atphix-accent-2]"
                  initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                  animate={{
                    x: Math.cos((i * 36 * Math.PI) / 180) * 60,
                    y: Math.sin((i * 36 * Math.PI) / 180) * 60,
                    opacity: 0,
                    scale: 0.5,
                  }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                />
              ))}
              <div className="w-20 h-20 rounded-full bg-[--atphix-accent-2]/10 flex items-center justify-center border border-[--atphix-accent-2]/40 text-[--atphix-accent-2]">
                <CheckCircle className="w-10 h-10" />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="heading-1 text-white">Message Received</h3>
              <p className="body-base text-[--atphix-text-mid] max-w-md">
                We&apos;ve got your inquiry. Our engineering lead will reach out to your inbox within 24 hours.
              </p>
            </div>

            <button
              onClick={() => setIsSubmitted(false)}
              className="text-xs uppercase tracking-wider text-[--atphix-accent-1] hover:underline cursor-pointer pt-4"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            {/* Name Input */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-xs uppercase tracking-wider text-[--atphix-text-mid]">
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                placeholder="Jane Doe"
                {...register('name')}
                className="w-full px-4 py-3 rounded-lg bg-[--atphix-void] border border-[--atphix-border] text-[--atphix-text-hi] placeholder-[--atphix-text-lo] focus:border-[--atphix-accent-1] focus:ring-1 focus:ring-[--atphix-accent-1] transition-all outline-none"
              />
              {errors.name && (
                <p className="flex items-center gap-1.5 text-xs text-[#FF4D6D] pt-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-xs uppercase tracking-wider text-[--atphix-text-mid]">
                Work Email *
              </label>
              <input
                id="email"
                type="email"
                placeholder="jane@company.com"
                {...register('email')}
                className="w-full px-4 py-3 rounded-lg bg-[--atphix-void] border border-[--atphix-border] text-[--atphix-text-hi] placeholder-[--atphix-text-lo] focus:border-[--atphix-accent-1] focus:ring-1 focus:ring-[--atphix-accent-1] transition-all outline-none"
              />
              {errors.email && (
                <p className="flex items-center gap-1.5 text-xs text-[#FF4D6D] pt-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Company Optional Input */}
            <div className="space-y-2">
              <label htmlFor="company" className="block text-xs uppercase tracking-wider text-[--atphix-text-mid]">
                Company / Organization (Optional)
              </label>
              <input
                id="company"
                type="text"
                placeholder="Acme Corp"
                {...register('company')}
                className="w-full px-4 py-3 rounded-lg bg-[--atphix-void] border border-[--atphix-border] text-[--atphix-text-hi] placeholder-[--atphix-text-lo] focus:border-[--atphix-accent-1] focus:ring-1 focus:ring-[--atphix-accent-1] transition-all outline-none"
              />
            </div>

            {/* Segmented Budget Selector */}
            <div className="space-y-2">
              <label className="block text-xs uppercase tracking-wider text-[--atphix-text-mid]">
                Project Budget Range
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                {budgetOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => handleBudgetSelect(opt)}
                    className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                      selectedBudget === opt
                        ? 'bg-[--atphix-accent-1] text-white border-[--atphix-accent-1] shadow-[0_0_12px_var(--atphix-accent-glow)]'
                        : 'bg-[--atphix-void] text-[--atphix-text-mid] border-[--atphix-border] hover:border-[--atphix-text-mid]'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Message Input */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-xs uppercase tracking-wider text-[--atphix-text-mid]">
                Project Details *
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Describe your current bottleneck, system requirements, or project goals..."
                {...register('message')}
                className="w-full px-4 py-3 rounded-lg bg-[--atphix-void] border border-[--atphix-border] text-[--atphix-text-hi] placeholder-[--atphix-text-lo] focus:border-[--atphix-accent-1] focus:ring-1 focus:ring-[--atphix-accent-1] transition-all outline-none resize-none"
              />
              {errors.message && (
                <p className="flex items-center gap-1.5 text-xs text-[#FF4D6D] pt-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-lg bg-[--atphix-accent-1] text-white font-medium text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_var(--atphix-accent-glow)] hover:shadow-[0_0_30px_rgba(108,99,255,0.4)] transition-all cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending Request...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Submit Project Scope
                </>
              )}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};
