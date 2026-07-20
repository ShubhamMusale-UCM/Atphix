◈ PROJECT MANDATE

You are a senior full-stack engineer and UI/UX director at an elite digital product studio — the kind that wins Awwwards, FWA, and CSS Design Awards. Your client is Atphix, a next-generation automation and AI systems company. Your singular mandate: deliver a website so viscerally premium that a visitor knows within 0.3 seconds they are dealing with an elite operator. There must be zero compromise between aesthetic ambition and technical discipline.

This is not a template. This is not a scaffold. This is a living, breathing digital identity built from first principles.

◈ TECHNOLOGY STACK (NON-NEGOTIABLE)
Framework:        Next.js 14+ (App Router, RSC-aware)
Language:         TypeScript (strict mode, no `any`)
Styling:          Tailwind CSS v3 (JIT, custom theme extension)
Animation:        Framer Motion v11 (AnimatePresence, layout animations, useMotionValue, useSpring, useTransform)
Icons:            Lucide React (custom-styled, never default size/color)
Fonts:            next/font (Google Fonts — Syne for display, Inter for body)
Form Handling:    React Hook Form + Zod validation
State:            Zustand (modal/overlay state only)

Architecture Rules:

All pages under /app — use page.tsx, layout.tsx, loading.tsx
Components under /components/ with subdirectories: ui/, sections/, overlays/, shared/
Custom hooks under /hooks/
Design tokens under /lib/tokens.ts
All animation variants exported from /lib/animations.ts
Zero any types. Zero eslint-disable comments. Zero console.log left in production code.
◈ DESIGN SYSTEM & TOKEN ARCHITECTURE

Define the following in /lib/tokens.ts and extend into tailwind.config.ts:

COLOR TOKENS:
  --atphix-void:       #060608      ← True background (deeper than black)
  --atphix-surface:    #0D0D12      ← Card / Section backgrounds
  --atphix-border:     #1A1A2E      ← Subtle borders, grid lines
  --atphix-muted:      #2A2A40      ← Disabled states, tertiary
  --atphix-accent-1:   #6C63FF      ← Primary violet (hover glows, CTAs)
  --atphix-accent-2:   #00D4AA      ← Secondary teal (success states, accents)
  --atphix-accent-glow:#6C63FF33    ← Glow blur overlay (use sparingly)
  --atphix-text-hi:    #F2F2F7      ← Headlines
  --atphix-text-mid:   #8E8EA0      ← Body copy
  --atphix-text-lo:    #45455A      ← Captions, fine print

TYPOGRAPHY SCALE (Syne Display / Inter Body):
  display-hero:   clamp(64px, 8vw, 120px) / Syne ExtraBold / tracking: -0.04em
  display-title:  clamp(36px, 4vw, 56px)  / Syne Bold      / tracking: -0.03em
  heading-1:      32px / Inter SemiBold
  heading-2:      24px / Inter SemiBold
  body-lg:        18px / Inter Regular    / leading: 1.75
  body:           16px / Inter Regular    / leading: 1.7
  caption:        13px / Inter Medium     / tracking: 0.06em / uppercase
  mono:           14px / JetBrains Mono   / (for code snippets / metrics)

SPACING SYSTEM: base-4 (4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160)
BORDER RADIUS: none=0, sm=4px, md=8px, lg=16px, xl=24px, full=9999px
ANIMATION EASING: [0.16, 1, 0.3, 1] (custom spring-feel cubic-bezier)

Design Signature (The One Memorable Thing):
A chromatic-aberration letter-split effect on the word "Atphix" in the hero. Each letter has a 1–2px RGB channel offset on hover that creates a subtle glitch/prismatic fringe — referencing the precision of the company while suggesting the edge of digital possibility. This is the soul of the page.

◈ PAGE ARCHITECTURE & COMPONENT SPECS
1. ROOT LAYOUT (/app/layout.tsx)
Inject Google Fonts via next/font/google: Syne (weights: 700, 800) + Inter (weights: 400, 500, 600)
Meta: full Open Graph, Twitter Card, structured JSON-LD for Organization schema
Apply bg-[--atphix-void] at the root, text-[--atphix-text-hi], antialiased, overflow-x-hidden
Include <ScrollProgress /> — a 1px height fixed top bar that fills left→right in --atphix-accent-1 as user scrolls
2. NAVIGATION (/components/shared/Navbar.tsx)

Behavior:

Fixed, full-width, z-50
Initial state: Fully transparent, no border
Scrolled state (after 60px): backdrop-blur-xl, bg-[--atphix-void]/70, 1px bottom border in --atphix-border, subtle shadow
Transition between states: Framer Motion animate on scroll position with a 300ms ease

Left: Atphix wordmark in Syne ExtraBold, 22px, with a 6px glowing dot ● prefixed in --atphix-accent-1 that pulses with @keyframes pulse (opacity 1→0.3, 2s infinite)

Center (desktop): Anchor scroll links — Services, Process, Contact — in Inter 14px Medium, text-[--atphix-text-mid], hover: text-[--atphix-text-hi] with a 2px underline that slides in from left (Framer Motion scaleX from 0→1, originX: 0)

Right: A Get Started button — ghost style, 1px border in --atphix-accent-1, hover: filled with --atphix-accent-1, background glow using box-shadow: 0 0 20px --atphix-accent-glow. Framer Motion whileHover and whileTap states defined.

Mobile: Hamburger button (3 lines → X morphing via SVG path animation). Full-screen menu overlay slides in from right with AnimatePresence, staggered link reveal (each link: translateX from +40px, opacity 0→1, staggerChildren: 0.07s)

3. HERO SECTION (/components/sections/Hero.tsx)

Layout: Full viewport height (min-h-screen), flex column, centered, with subtle dot-grid background pattern using an SVG background-image repeating pattern (2px dots, --atphix-border color, 28px spacing). The grid fades out at edges using a radial gradient mask.

Background FX: A large, abstract gradient orb — radial-gradient(ellipse at 60% 40%, #6C63FF18 0%, transparent 70%) — that slowly drifts using a CSS keyframe animation (20s infinite, alternating position). A second, smaller orb in --atphix-accent-2 at 10% opacity at bottom-left.

Entry Animation Sequence (orchestrated with useAnimation and useInView):

t=0ms: Caption label fades + slides up
t=150ms: First letter of "Atphix" snaps in
t=150ms + n*80ms: Each subsequent letter staggers in (scale from 0.8, opacity 0→1, translateY from +20px)
t=700ms: Subtitle fades in
t=900ms: CTA buttons slide up
t=1100ms: Scroll indicator appears

The Chromatic Letter-Hover Mechanic (/components/ui/ChromaticLetter.tsx):

typescript
// Behavior spec for each individual letter component:

interface ChromaticLetterProps {
  char: string;         // The individual character
  index: number;        // Position index for stagger
  logoFragment?: string // Optional: path to SVG logo fragment revealed behind this letter
}

// ON HOVER:
// 1. Letter itself: scale(1.08), color shifts from --atphix-text-hi → --atphix-accent-1
// 2. Chromatic aberration: CSS text-shadow creates RGB channel split:
//    red channel: translateX(-2px), blue channel: translateX(+2px)
//    Animate these offsets from 0 → 2px on hover with a spring (stiffness: 400, damping: 20)
// 3. Logo fragment reveal: if logoFragment provided, it fades in (opacity 0→0.15) 
//    behind the letter with a subtle scale(0.9→1) — like the brand mark "bleeding through"
// 4. Neighboring letters: Apply a diminishing magnetic pull effect.
//    Adjacent letters (±1): translateX ±4px
//    Next neighbors (±2): translateX ±2px
//    Use useMotionValue + useSpring for organic feel
// 5. On mouse leave: all values spring back to origin (no jarring snaps)

// IMPLEMENTATION NOTE: Use a shared MotionValue for mouse X position within the 
// hero headline container and derive per-letter offsets via useTransform

Subtitle: One line, sharp and precise (NOT generic filler):

"We architect the invisible — the automated systems, integrated intelligence, and operational infrastructure that lets ambitious companies run at machine speed."

CTA Block:

Primary: Begin Your Build → — filled --atphix-accent-1, hover glow pulse
Secondary: View Our Work — text-only with an animated underline
Both use <motion.button> with whileHover={{ scale: 1.02 }} and whileTap={{ scale: 0.97 }}

Scroll Indicator: Centered bottom, a ↓ icon in a 40px circle with a border-[--atphix-border] border, that bobs with animate={{ y: [0, 6, 0] }} at 1.8s repeat

4. SERVICES SECTION (/components/sections/Services.tsx) — id="services"

Layout: Bento-grid. One large card (spanning 2 cols on desktop) + two standard cards. On tablet: 2-col. On mobile: single-col stacked.

Section Header:

Eyebrow caption: WHAT WE BUILD in caption style, --atphix-accent-1, letter-spacing: 0.12em
Title: Precision-engineered capabilities — display-title scale, max 10 words
Reveal: Framer Motion whileInView, once, with a 40px translateY + opacity reveal, viewport: { margin: "-100px" }

Service Cards (/components/ui/ServiceCard.tsx):

Each card has:

Background: --atphix-surface, 1px border --atphix-border, border-radius: 16px
Hover state: border color transitions to --atphix-accent-1 (40% opacity), a box-shadow: 0 0 40px rgba(108, 99, 255, 0.1) appears, and a subtle background gradient sweeps in: linear-gradient(135deg, --atphix-accent-glow 0%, transparent 60%)
All hover transitions: transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1)
Icon: Lucide icon in a 48px container, --atphix-accent-1 color, with a subtle circular glow backdrop on hover
Animated canvas or SVG background element (subtle, non-distracting) — e.g., slowly rotating hex grid or particle field using a <canvas> with requestAnimationFrame

The Three Services:

Card 1 (LARGE) — Advanced Workflow Automation
  Icon: Lucide <Workflow /> or <GitBranch />
  Headline: "Eliminate the Manual"
  Body: "We replace repetitive, error-prone human processes with intelligent 
  automation pipelines. From multi-step API orchestration to conditional logic 
  systems that scale without supervision — your team works on what matters."
  Metric badge: "10× throughput on average" — styled in mono font

Card 2 — Custom AI Integrations  
  Icon: Lucide <BrainCircuit /> or <Cpu />
  Headline: "Intelligence, Built In"
  Body: "Bespoke LLM integrations, retrieval-augmented systems, and custom model 
  fine-tuning that embed intelligence directly into your core product and operations."

Card 3 — Enterprise Architecture
  Icon: Lucide <Network /> or <Server />
  Headline: "Infrastructure That Holds"
  Body: "We design and build scalable, fault-tolerant system architecture — 
  from microservice decomposition to deployment pipelines — built to grow 
  with your ambition."
5. PROCESS / HOW WE WORK SECTION (/components/sections/Process.tsx)

Layout: Horizontal timeline on desktop (scroll-snapped steps), stacked on mobile.

Steps (4 total): Discovery → Architecture → Build → Deploy & Iterate

For each step:

A numbered marker (01, 02...) in a 2px circle, --atphix-accent-1 stroke, with a connecting animated line between steps that fills left→right as the section scrolls into view (use useScroll, useTransform, scaleX on a pseudo-element)
Step title and 2-sentence description
Small icon illustration or abstract SVG glyph per step
6. CONTACT SECTION (/components/sections/Contact.tsx) — id="contact"

Layout: Two-column (60/40). Left: a bold statement + trust signals. Right: the form.

Left Copy:

"Ready to build something that doesn't exist yet? Tell us what you're trying to solve. We respond within one business day."

Trust signals (3 items): Response < 24hrs · NDA on request · No lock-in contracts (use Lucide <Clock />, <ShieldCheck />, <Unlock />)

The Form (/components/ui/ContactForm.tsx):

Built with react-hook-form + zod schema:

typescript
const schema = z.object({
  name:    z.string().min(2, "Name must be at least 2 characters"),
  email:   z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  budget:  z.enum(["<$5k", "$5k–$20k", "$20k–$50k", "$50k+", "Not sure"]),
  message: z.string().min(20, "Please tell us a bit more (20 chars min)")
})

Field Behavior:

All fields: floating label pattern — label sits inside input, floats up and shrinks on focus or when filled (CSS transition + Framer Motion)
Input style: bg-[--atphix-surface], border-[--atphix-border], on focus: border becomes --atphix-accent-1, subtle inner glow
Budget: custom styled <select> or segmented button group (not a native ugly dropdown)
Submit button: full-width, --atphix-accent-1, with a loading spinner (Framer Motion rotate animation) during submission
Success state: AnimatePresence exit the form, enter a success card: large <CheckCircle /> icon in --atphix-accent-2, message: "We've got your message. Expect us in your inbox within 24 hours.", with a confetti-like particle burst (CSS keyframe, 8–12 dots expanding from center)
Error state: Inline field-level errors with a red --color-error: #FF4D6D, <AlertCircle /> icon prefix
7. FOOTER (/components/shared/Footer.tsx)
Full-width, --atphix-surface background, 1px top border --atphix-border
Left: Wordmark + one-line company descriptor + © 2025 Atphix. All rights reserved.
Right: Nav links + Privacy Policy + Terms of Service triggers (open modal overlays)
Centered bottom: social icons (Lucide <Twitter />, <Linkedin />, <Github />) with hover color-shift to --atphix-accent-1
8. LEGAL MODAL SYSTEM (/components/overlays/LegalModal.tsx)

State managed via Zustand: useLegalStore with { modal: 'privacy' | 'terms' | null, open: fn, close: fn }

Modal Design:

Full-screen overlay: bg-[--atphix-void]/90 backdrop-blur-2xl
Inner panel: max-w-3xl, max-h-[80vh], overflow-y-scroll, custom scrollbar (thin, --atphix-accent-1 thumb)
AnimatePresence: overlay fades in, panel slides up from translateY(+60px) → translateY(0), spring easing
Close button: top-right X with whileHover={{ rotate: 90 }} micro-interaction
Escape key closes, click-outside closes

Privacy Policy Content (Real, Complete — Tailored for Atphix):

Last updated: [Current Date] | Effective: [Current Date]

1. INTRODUCTION
   Atphix ("Company", "we", "our") operates as an automation and AI systems 
   consultancy. This Privacy Policy explains how we collect, use, disclose, 
   and safeguard information when you visit atphix.com or engage our services.

2. INFORMATION WE COLLECT
   a) Information You Provide: Name, email, company name, project scope details 
      submitted via our contact form.
   b) Automatically Collected: IP address, browser type, referring URLs, pages 
      visited, time on site, device identifiers — via server logs and analytics.
   c) Cookies & Tracking: We use essential cookies (session management), 
      analytical cookies (site usage patterns), and no advertising/third-party 
      tracking cookies. Cookie consent is obtained prior to non-essential 
      cookie activation.

3. HOW WE USE YOUR INFORMATION
   - To respond to inquiries and deliver requested services
   - To improve website functionality and user experience
   - To comply with legal obligations
   - We do NOT sell, rent, or trade personal information to third parties

4. AUTOMATED PROCESSING
   Our platform may employ automated systems for: inquiry routing, spam 
   detection, and response triage. No automated decisions with legal or 
   significant effect are made solely on automated processing without human 
   review. You have the right to request human review of any automated 
   assessment.

5. USER RIGHTS (GDPR / CCPA / PDPA COMPLIANT)
   You have the right to: Access your data · Correct inaccuracies · 
   Request deletion · Data portability · Withdraw consent at any time · 
   Lodge a complaint with a supervisory authority.
   Exercise rights by emailing: privacy@atphix.com

6. DATA RETENTION
   Contact form submissions: retained for 24 months or until project 
   conclusion. Analytics data: retained for 14 months. We do not retain 
   sensitive data beyond operational necessity.

7. DATA SECURITY
   We implement AES-256 encryption at rest, TLS 1.3 in transit, access 
   controls, and regular security audits. No transmission method is 100% 
   secure; we take every commercially reasonable precaution.

8. COOKIE MANAGEMENT
   Manage cookie preferences at any time via the Cookie Preferences link 
   in our footer. Withdrawing consent does not affect prior lawful processing.

9. UPDATES
   We may update this policy. Material changes will be communicated via 
   website notice 30 days prior to taking effect.

10. CONTACT
    Atphix Privacy Team · privacy@atphix.com

Terms of Service Content (Real, Complete):

Last updated: [Current Date]

1. ACCEPTANCE OF TERMS
   By accessing atphix.com, you agree to these Terms. If you do not agree, 
   please discontinue use immediately.

2. SERVICES
   Atphix provides automation consulting, AI integration architecture, and 
   custom software development services. Service scope is defined in 
   individual Statements of Work (SOW) agreed upon between Atphix and Client.

3. INTELLECTUAL PROPERTY
   a) Client-Owned: All deliverables produced under an SOW become Client 
      property upon full payment.
   b) Atphix-Retained: Pre-existing methodologies, frameworks, tooling, and 
      general know-how remain Atphix intellectual property.
   c) Website Content: All content on atphix.com — copy, design, code, brand 
      marks — are © Atphix. Reproduction without written consent is prohibited.

4. LIMITATION OF LIABILITY
   Atphix shall not be liable for indirect, incidental, or consequential 
   damages. Our total liability shall not exceed the fees paid in the 3 months 
   prior to the claim.

5. CONFIDENTIALITY
   Both parties agree to maintain confidentiality of non-public information 
   shared during engagement. NDAs available on request.

6. GOVERNING LAW
   These Terms are governed by the laws of [Jurisdiction]. Disputes shall 
   be resolved via binding arbitration before litigation.

7. MODIFICATIONS
   We reserve the right to modify these Terms at any time. Continued use 
   after modifications constitutes acceptance.

8. CONTACT
   legal@atphix.com
◈ GLOBAL ANIMATION ARCHITECTURE (/lib/animations.ts)

Export standardized variants used across all components:

typescript
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
}

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
}

export const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
}

// All section entry animations use: whileInView="visible" initial="hidden"
// viewport={{ once: true, margin: "-80px" }}
// ALWAYS wrap staggered lists in <motion.div variants={staggerContainer}>

Reduced Motion: Every animation must be gated:

typescript
const { prefersReducedMotion } = useReducedMotion() // custom hook wrapping window.matchMedia
// If true: disable all transitions, use instant state changes
◈ RESPONSIVE BREAKPOINTS
Mobile:   < 640px  — Single column, large tap targets (min 44px), no hover states
Tablet:   640–1024px — 2-col grids, condensed nav
Desktop:  > 1024px — Full layout as designed
Wide:     > 1440px — Max content width: 1280px, centered with auto margins

Mobile-specific rules:

Hero letter effect: simplified (no magnetic neighbors, only direct hover letter reacts)
Service cards: full-width stacked
Contact form: single column
Navigation: hamburger menu (no desktop nav links visible)
All font sizes: clamp() to prevent overflow
No horizontal scroll permitted anywhere
◈ PERFORMANCE & PRODUCTION STANDARDS
Core Web Vitals targets: LCP < 2.5s, CLS < 0.05, FID < 100ms
All images: next/image with explicit width, height, priority on above-fold assets
Heavy Framer Motion features: lazy-loaded with dynamic(() => import(...), { ssr: false })
Canvas animations: useRef + useEffect + proper cleanup on unmount (cancelAnimationFrame)
No layout shift: all animated elements use transform and opacity only (compositor-only properties)
will-change: transform applied conservatively only on actively animated elements
Tree-shake Lucide: import only used icons (never import * from 'lucide-react')
◈ ACCESSIBILITY STANDARDS (WCAG 2.1 AA)
All interactive elements: visible focus-visible ring (outline: 2px solid --atphix-accent-1, offset: 3px)
All icons: either aria-hidden="true" (decorative) or aria-label (interactive)
Form inputs: htmlFor linked <label> elements (not placeholder-as-label)
Modal: role="dialog", aria-modal="true", aria-labelledby, focus trap on open, returns focus on close
Heading hierarchy: H1 (hero) → H2 (section titles) → H3 (card titles) — never skipped
Color contrast: all text on backgrounds must meet 4.5:1 ratio minimum
Keyboard navigation: full tab flow works without a mouse
◈ FILE STRUCTURE (DELIVER IN THIS EXACT SHAPE)
atphix/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Composes all sections
│   └── globals.css         # CSS variables, base resets, scrollbar styles
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Process.tsx
│   │   └── Contact.tsx
│   ├── shared/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── ScrollProgress.tsx
│   ├── ui/
│   │   ├── ChromaticLetter.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── ContactForm.tsx
│   │   └── Button.tsx
│   └── overlays/
│       └── LegalModal.tsx
├── hooks/
│   ├── useReducedMotion.ts
│   ├── useScrollY.ts
│   └── useMagneticEffect.ts
├── lib/
│   ├── tokens.ts
│   ├── animations.ts
│   └── legalContent.ts     # Privacy + ToS as typed constants
├── store/
│   └── useLegalStore.ts    # Zustand store for modal state
├── public/
│   └── logo/   
│       └── atphix-fragments.svg  # Logo broken into per-letter SVG fragments
├── tailwind.config.ts
└── tsconfig.json            # strict: true
◈ DELIVERY CHECKLIST (Every Item Must Pass Before Handing Off)
 tsc --noEmit passes with zero errors
 eslint passes with zero warnings
 All sections render correctly at 375px, 768px, 1280px, 1920px viewport widths
 Tab-key navigation works through entire page without mouse
 Escape key closes legal modals
 Contact form shows validation errors on empty submit
 Contact form shows success state on valid submit
 Letter hover effect is fluid at 60fps (test with Chrome DevTools Performance tab)
 prefers-reduced-motion: reduce disables all animations gracefully
 No console.error or console.warn in browser console on any page state
 Privacy Policy and Terms of Service contain complete, real legal text (no lorem ipsum)
 Scroll progress bar fills correctly from 0% to 100% on full page scroll