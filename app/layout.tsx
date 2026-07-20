import type { Metadata } from 'next';
import { Syne, Inter } from 'next/font/google';
import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Atphix — Intelligent Systems Architecture & AI Engineering',
  description: 'Atphix designs and builds autonomous workflow engines, custom LLM integrations, and enterprise AI infrastructure for forward-thinking organizations.',
  keywords: ['AI Engineering', 'Workflow Automation', 'Enterprise AI', 'LLM Integration', 'Autonomous Agents', 'Atphix'],
  authors: [{ name: 'Atphix Engineering Team' }],
  openGraph: {
    title: 'Atphix — Intelligent Systems Architecture & AI Engineering',
    description: 'Custom AI integrations, autonomous workflow engines, and scalable enterprise architecture.',
    url: 'https://atphix.com',
    siteName: 'Atphix',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atphix — Intelligent Systems Architecture',
    description: 'Autonomous workflow engines and custom AI integrations.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable} dark scroll-smooth`}>
      <body className="bg-[--atphix-void] text-[--atphix-text-hi] font-sans antialiased selection:bg-[--atphix-accent-1]/30 selection:text-[--atphix-accent-1]">
        {children}
      </body>
    </html>
  );
}
