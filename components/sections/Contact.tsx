'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageSquare, Clock, ShieldCheck, UserCheck, ExternalLink } from 'lucide-react';
import { ContactForm } from '@/components/ui/ContactForm';
import { fadeUp } from '@/lib/animations';

export const Contact: React.FC = () => {
  const trustSignals = [
    {
      icon: <Clock className="w-5 h-5 text-[--atphix-accent-1]" />,
      title: 'Response < 24 Hours',
      desc: 'Direct response from senior engineering lead within 1 business day.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[--atphix-accent-2]" />,
      title: 'NDA & IP Ownership',
      desc: '100% code property rights and enterprise confidentiality.',
    },
    {
      icon: <UserCheck className="w-5 h-5 text-[--atphix-accent-1]" />,
      title: 'Direct Founder Connect',
      desc: 'No middle managers — speak directly with lead solutions architect.',
    },
  ];

  return (
    <section id="contact" className="py-28 px-6 relative z-10 bg-[--atphix-void]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <span className="caption-text text-[--atphix-accent-1] tracking-[0.12em] block">
            DIRECT ENGAGEMENT
          </span>
          <h2 className="display-title text-white">Let&apos;s Build Your Custom Solution</h2>
          <p className="body-lg text-[--atphix-text-mid]">
            Have an AI agent, web platform, mobile app, or automation pipeline idea? Reach out directly to founder & lead developer Shubham Musale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Founder Contact Card & Trust Signals (5 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            className="lg:col-span-5 space-y-8"
          >
            {/* Founder Card */}
            <div className="p-8 rounded-3xl bg-[--atphix-surface]/60 border border-[--atphix-border] space-y-6 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[--atphix-accent-1]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[--atphix-accent-1] to-[--atphix-accent-2] p-0.5 flex items-center justify-center shadow-lg">
                  <div className="w-full h-full rounded-[14px] bg-[--atphix-void] flex items-center justify-center text-xl font-extrabold text-white">
                    SM
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-xl text-white">Shubham Musale</h3>
                  <span className="text-xs font-mono text-[--atphix-accent-1]">
                    Founder & Lead Solutions Architect
                  </span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                {/* Phone Link */}
                <a
                  href="tel:+918485856618"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-[--atphix-void]/80 border border-[--atphix-border] hover:border-[--atphix-accent-1]/50 text-xs font-mono text-white transition-all group"
                >
                  <Phone className="w-4 h-4 text-[--atphix-accent-1] group-hover:scale-110 transition-transform" />
                  <span>+91 8485856618</span>
                </a>

                {/* WhatsApp Direct Link */}
                <a
                  href="https://wa.me/918485856618?text=Hi%20Shubham,%20I'd%20like%20to%20discuss%20a%20project%20with%20Atphix."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 text-xs font-mono text-emerald-400 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <MessageSquare className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                    <span>Chat on WhatsApp</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {/* Email Link */}
                <a
                  href="mailto:musaleshubham7@gmail.com"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-[--atphix-void]/80 border border-[--atphix-border] hover:border-[--atphix-accent-2]/50 text-xs font-mono text-white transition-all group"
                >
                  <Mail className="w-4 h-4 text-[--atphix-accent-2] group-hover:scale-110 transition-transform" />
                  <span>musaleshubham7@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="space-y-4">
              {trustSignals.map((signal, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[--atphix-surface]/40 border border-[--atphix-border]/60"
                >
                  <div className="p-2.5 rounded-xl bg-[--atphix-void] border border-[--atphix-border]">
                    {signal.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{signal.title}</h4>
                    <p className="text-xs text-[--atphix-text-mid] pt-0.5">{signal.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
