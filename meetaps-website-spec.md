# Meetaps.com — Official Website Development Specification
> Enterprise AI & Cross-Border Tech Services | Next.js Production Spec v1.0

---

## 1. Project Overview

**Domain**: meetaps.com  
**Positioning**: Premium B2B technology services company bridging China AI infrastructure with global enterprise markets  
**Target Audience**: CTOs, Digital Transformation leads, E-commerce directors, Enterprise IT decision-makers in North America & Europe  
**Tone**: Authoritative · Technical · International · Trustworthy — Think Vercel meets Palantir, not a startup landing page

---

## 2. Tech Stack

### Core Framework
```
Next.js 14+ (App Router)
TypeScript (strict mode)
React 18+
```

### Styling
```
Tailwind CSS v3.4+          — utility-first base
CSS Modules                  — component-level scoping when needed
Framer Motion v11+          — animations, page transitions, scroll effects
clsx + tailwind-merge       — conditional class composition
```

### UI Components
```
Radix UI (headless primitives) — accessible base components
shadcn/ui                       — pre-built, unstyled components on top of Radix
lucide-react                    — icon system
```

### Fonts (via next/font)
```
Display/Heading:  "DM Serif Display" or "Playfair Display"  — editorial gravitas
Body/UI:          "DM Sans" or "Sora"                        — modern, clean, tech-forward
Mono/Code:        "JetBrains Mono"                           — for technical accents
```

> ⚠️ **NEVER use Inter, Roboto, or system-ui as primary fonts** — they signal default/uncurated design

### Internationalization
```
next-intl                    — i18n routing (EN primary, ZH-CN secondary)
```

### Forms & Validation
```
React Hook Form + Zod        — type-safe form handling
```

### Analytics & Compliance
```
Vercel Analytics             — privacy-first, no cookie banner needed
PostHog (self-hosted option) — product analytics
Vercel Speed Insights        — Core Web Vitals
```

### Email
```
Resend + React Email         — transactional email
```

### Deployment
```
Vercel (Edge Network)        — global CDN, automatic HTTPS, Edge Functions
```

### SEO & GEO
```
Next.js Metadata API         — dynamic meta, OG images
next-sitemap                 — XML sitemap generation
Schema.org JSON-LD           — structured data
llms.txt                     — GEO (AI search engine) indexing file
```

---

## 3. Design System

### 3.1 Color Palette

```css
/* === PRIMARY PALETTE === */
--color-bg:           #080C14;   /* Near-black, deep navy — primary background */
--color-surface:      #0E1420;   /* Card / section backgrounds */
--color-surface-2:    #141B2D;   /* Elevated surfaces, hover states */
--color-border:       #1E2A42;   /* Subtle borders */
--color-border-glow:  #2A3F6F;   /* Active/focused borders */

/* === ACCENT — Electric Cerulean === */
--color-accent:       #0EA5E9;   /* sky-500 — primary CTA, highlights */
--color-accent-light: #38BDF8;   /* sky-400 — hover state */
--color-accent-glow:  rgba(14, 165, 233, 0.15); /* ambient glow effect */

/* === SECONDARY ACCENT — Warm Copper === */
--color-copper:       #F59E0B;   /* amber-500 — selective emphasis, badges */
--color-copper-dim:   #D97706;   /* amber-600 */

/* === TEXT === */
--color-text-primary:   #F0F4FF;  /* Near-white — headings */
--color-text-secondary: #94A3B8;  /* slate-400 — body copy */
--color-text-muted:     #475569;  /* slate-600 — captions, metadata */

/* === GRADIENTS === */
--gradient-hero:     linear-gradient(135deg, #080C14 0%, #0D1829 50%, #080C14 100%);
--gradient-accent:   linear-gradient(90deg, #0EA5E9, #6366F1);
--gradient-surface:  linear-gradient(180deg, #0E1420, #080C14);
--gradient-text:     linear-gradient(135deg, #F0F4FF 0%, #94A3B8 100%);
```

**Why this palette**: Dark-mode-first with a cool blue accent mirrors Vercel, Linear, and Stripe's enterprise credibility. Warm copper provides differentiation — it signals Asia-Pacific tech heritage without being stereotypical.

### 3.2 Typography Scale

```css
/* Tailwind config extension */
fontSize: {
  'display-2xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.04em', fontWeight: '400' }],
  'display-xl':  ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '400' }],
  'display-lg':  ['3rem',    { lineHeight: '1.15', letterSpacing: '-0.025em' }],
  'display-md':  ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
  'display-sm':  ['1.875rem',{ lineHeight: '1.25', letterSpacing: '-0.015em' }],
  'body-lg':     ['1.125rem',{ lineHeight: '1.75' }],
  'body-md':     ['1rem',    { lineHeight: '1.7' }],
  'body-sm':     ['0.875rem',{ lineHeight: '1.6' }],
  'label':       ['0.75rem', { lineHeight: '1', letterSpacing: '0.1em', fontWeight: '600', textTransform: 'uppercase' }],
}
```

### 3.3 Spacing & Layout Grid

```
Max content width:    1280px (with px-6 sm:px-8 padding)
Section vertical gap: 120px (desktop) / 80px (mobile)
Card gap:             24px
Border radius scale:  none | 4px | 8px | 12px | 16px | 24px
```

### 3.4 Visual Signature Elements

1. **Noise texture overlay** — subtle 3–5% grain on hero sections (`background-image: url('/noise.svg')`)
2. **Grid pattern background** — dot-grid or line-grid at 5% opacity for depth
3. **Glow orbs** — blurred radial gradients in accent color behind key UI elements
4. **Horizontal rule dividers** — `border-t border-[#1E2A42]` with fade-out gradients at edges
5. **Animated gradient borders** — on CTA buttons and feature cards (CSS `@keyframes`)
6. **Monospace accents** — JetBrains Mono for version numbers, API endpoints, stats

---

## 4. Site Architecture & Navigation

### 4.1 URL Structure

```
/                           — Homepage
/services/                  — Services overview
  /services/ai-compute      — China AI Compute Tokens (Global)
  /services/ecommerce       — Cross-Border E-Commerce Enterprise Sites
  /services/geo             — GEO Optimization
  /services/openclaw        — OpenClaw Enterprise Customization
  /services/ai-consulting   — Enterprise AI Cost Reduction & Architecture
/solutions/                 — By industry/use case
  /solutions/enterprise
  /solutions/ecommerce
  /solutions/saas
/case-studies/              — Client success stories
/blog/                      — Technical articles & insights
/about/                     — Company, team, mission
/contact/                   — Contact + consultation booking
/legal/privacy-policy       — GDPR compliant
/legal/terms-of-service
/legal/cookie-policy
```

### 4.2 Navigation Structure

```
Header (sticky, backdrop-blur):
├── Logo (left)
├── Nav links (center):
│   ├── Services ▾  (mega-dropdown)
│   ├── Solutions ▾
│   ├── Case Studies
│   ├── Blog
│   └── About
└── Actions (right):
    ├── Language toggle: EN / ZH
    └── CTA Button: "Book a Consultation" (filled accent)

Mobile: Hamburger → full-screen slide-over panel
```

#### Services Mega Dropdown Layout
```
┌─────────────────────────────────────────────────────────┐
│  Our Services                                           │
│  ─────────────────────────────────────────────────────  │
│  [Icon] AI Compute Tokens    [Icon] GEO Optimization    │
│  China AI infrastructure     AI-era search visibility   │
│  to global markets                                      │
│                                                         │
│  [Icon] Enterprise E-Commerce [Icon] OpenClaw Custom   │
│  Cross-border DTC storefronts  Enterprise AI platform   │
│                                                         │
│  [Icon] AI Architecture Consulting                      │
│  Cost reduction, LLM integration, training              │
│  ─────────────────────────────────────────────────────  │
│  → View all services                                    │
└─────────────────────────────────────────────────────────┘
```

---

## 5. Page-by-Page Specifications

### 5.1 Homepage `/`

#### Section 1 — Hero
```
Layout:    Full-viewport height (100vh), centered content
Background: Dark base + animated constellation/particle network (subtle, SVG-based)
           + two large blurred glow orbs (accent blue + deep purple)
           + noise texture overlay

Content:
  ┌──────────────────────────────────────────────────────┐
  │                                                      │
  │  [Label tag] "Enterprise AI Services"               │
  │                                                      │
  │  <h1> Bridge China's AI                             │
  │       Infrastructure                                │
  │       to Global Markets </h1>                       │
  │  (DM Serif Display, 72px, weight 400, line-h 1.05)  │
  │                                                      │
  │  <p> From compute access to full-stack AI           │
  │  transformation — we help enterprises scale         │
  │  intelligently across borders. </p>                 │
  │                                                      │
  │  [Book a Free Consultation] [View Services ↗]       │
  │   (filled accent btn)         (ghost btn)           │
  │                                                      │
  │  ─────────────────────────────────────────────────  │
  │  Trusted by teams at [Logo] [Logo] [Logo] [Logo]    │
  │                                                      │
  └──────────────────────────────────────────────────────┘

Animation: h1 words stagger-reveal (Framer Motion, 0.1s delay per word)
           p and buttons fade-up after h1 completes
```

#### Section 2 — Stats Bar
```
Layout:    Full-width, border-top + border-bottom, 5-column grid
Background: --color-surface with subtle gradient

Stats:
  500+        $2M+         48h         98%          5
  Enterprises  Compute      Integration  Client       Countries
  Served       Tokens Sold  Time Avg.    Retention    Served

Each stat: Large mono number (JetBrains Mono, 48px, accent color)
           + label (DM Sans, 14px, muted)
           + subtle counter animation on scroll-enter
```

#### Section 3 — Services Grid
```
Layout:    2-column on desktop, 1-column mobile
           Left: sticky label + description (1/3 width)
           Right: scrollable service cards (2/3 width)

Heading:   "What We Build"
Subtext:   "Five focused services. One integrated vision."

Cards (5 total, each with):
  - Service icon (custom SVG, accent color)
  - Service name (large, serif)
  - One-sentence value prop
  - 3 bullet capabilities
  - "Learn more →" link
  - Animated gradient border on hover
  - Background: surface-2 with slight glow

Card accent colors (each unique):
  1. AI Compute:       sky blue
  2. E-Commerce:       emerald green  
  3. GEO:              violet purple
  4. OpenClaw:         amber/copper
  5. AI Consulting:    rose/coral
```

#### Section 4 — How It Works
```
Layout:    Alternating left-right, 3 steps
Background: Dark with grid dot pattern

Steps:
  1. "Assess & Strategize"     — Discovery call, needs mapping
  2. "Architect & Integrate"  — Custom build, API connections
  3. "Deploy & Optimize"      — Go-live, ongoing support

Visual: Connected step numbers with animated line between them
        Screenshots/mockups float alongside each step (3D perspective tilt on hover)
```

#### Section 5 — Featured Case Studies
```
Layout:    3-column card grid (horizontal scroll on mobile)

Each card:
  - Client industry tag
  - Result headline ("↑ 340% organic AI traffic in 90 days")
  - Short description (2 lines max)
  - "Read case study →"
  - Background image with dark overlay gradient

CTA below: "See all case studies →"
```

#### Section 6 — Services Deep-Dive (Tabbed)
```
Layout:    Left tab list (vertical) + Right content panel
Tabs:      One per service

Content panel per service:
  - Large heading
  - 2-paragraph description
  - Feature list with icons
  - Pricing model (if public) or "Custom quote"
  - CTA: "Get started with [Service Name]"
```

#### Section 7 — Testimonials
```
Layout:    Horizontal auto-scrolling marquee (two rows, opposite directions)
Cards:     Quote + Name + Title + Company + Star rating
Animation: CSS infinite scroll animation (no JS dependency)
```

#### Section 8 — Blog Preview
```
Layout:    1 featured article (large, left) + 3 smaller articles (right column)

Featured:  Full card with cover image, category, title, excerpt, date
Small:     Title + category + date only

CTA:       "Read our insights →"
```

#### Section 9 — CTA Banner
```
Layout:    Full-width, centered
Background: Gradient from accent to deep violet, with noise overlay + light rays

Content:
  "Ready to transform your enterprise with AI?"
  "Book a free 30-minute strategy consultation"
  [Schedule Now] (large white button, dark text)
  
  Under button: "No commitment. Confidential. Response within 24h."
```

#### Section 10 — Footer
```
Layout:    4-column grid above + full-width bottom bar

Columns:
  1. Logo + tagline + social icons (LinkedIn, Twitter/X, GitHub)
  2. Services (5 links)
  3. Company (About, Blog, Case Studies, Careers, Contact)
  4. Legal & Contact (Privacy, Terms, Cookie Policy, hello@meetaps.com)

Bottom bar:
  © 2025 Meetaps Technology Ltd. All rights reserved.
  [Registered address] | [Company number] | EN / 中文
```

---

### 5.2 Services Pages (Template)

Each service page follows this pattern:

```
1. Hero Section
   - Service name + category label
   - Headline (benefit-focused, not feature-focused)
   - Subheading
   - Two CTAs: "Get Started" + "Download Brief" (PDF)
   - Hero visual: product mockup, diagram, or abstract 3D

2. Problem Statement
   - "The Challenge" — 3 pain points in card format

3. Our Approach
   - 4-step methodology with icons

4. Features / Deliverables
   - 6-card feature grid with detailed descriptions

5. Technical Specs (if applicable)
   - Table or spec list for technical buyers

6. Pricing (if public)
   - 3-tier pricing table or "Custom" single card

7. Case Study Callout
   - 1 related case study card

8. FAQ
   - Accordion, 5-7 questions (important for GEO/SEO)

9. CTA
   - "Book a consultation" form or Calendly embed
```

---

### 5.3 Service-Specific Content Briefs

#### `/services/ai-compute` — China AI Compute Tokens (Global)
```
Headline:   "Access China's AI Compute Power — From Anywhere in the World"
Subline:    "Enterprise-grade GPU tokens from leading Chinese AI infrastructure providers, 
             accessible with global payment methods and compliance documentation."

Key messaging:
  - Cheaper than AWS/Azure for comparable AI workloads
  - Procurement handled (invoicing, compliance, export docs)
  - Supported providers: mention category (e.g., "Tier-1 Chinese cloud AI platforms")
  - Use cases: LLM training, inference, image generation, video AI

Compliance note (visible on page):
  "All transactions are structured in accordance with applicable export regulations. 
   Enterprise compliance documentation provided on request."
```

#### `/services/ecommerce` — Cross-Border Enterprise E-Commerce
```
Headline:   "Enterprise-Grade Independent Stores for Cross-Border Commerce"
Subline:    "Custom DTC storefronts engineered for Chinese sellers entering global markets — 
             Shopify-free, conversion-optimized, and built to scale."

Key features to highlight:
  - Custom Next.js / headless architecture (no platform lock-in)
  - Multi-currency, multi-language (EN, ZH, DE, FR)
  - Payment gateway integration: Stripe, PayPal, Klarna, Afterpay
  - Logistics API integration: DHL, FedEx, 4PX, Yanwen
  - GDPR compliance built-in
  - Performance: Core Web Vitals target (LCP < 2.5s)
  - Post-launch support tiers
```

#### `/services/geo` — GEO Optimization (Generative Engine Optimization)
```
Headline:   "Be Found Where AI Answers Questions — GEO for the Post-SEO Era"
Subline:    "Optimize your brand and content to appear in ChatGPT, Perplexity, 
             Claude, and Google AI Overviews — the new front page of the internet."

Explain what GEO is (educational section):
  - Traditional SEO vs GEO
  - How LLMs surface brand mentions
  - Structured data, entity authority, citation building

Services:
  - GEO audit
  - Content restructuring for AI citation
  - Schema.org implementation
  - llms.txt configuration
  - Brand mention velocity campaigns
  - Monthly GEO performance reporting
```

#### `/services/openclaw` — OpenClaw Enterprise Customization
```
Headline:   "OpenClaw: Enterprise AI Platform, Built to Your Specifications"
Subline:    "Custom deployment, white-labeling, and workflow integration 
             for OpenClaw — the AI platform built for business scale."

Note: Brief explanation of what OpenClaw is (assume some visitors won't know)
Sections:
  - What is OpenClaw
  - Customization scope (UI, API, integrations, models)
  - Deployment options (cloud, on-premise, hybrid)
  - Enterprise security & compliance features
  - Integration partners
```

#### `/services/ai-consulting` — Enterprise AI Architecture Consulting
```
Headline:   "Build AI Into Your Business — Not Just Your Buzzwords"
Subline:    "Architecture design, LLM integration, cost optimization, and hands-on 
             training to make your enterprise genuinely AI-native."

Three tracks:
  1. AI Cost Reduction Audit  — identify and eliminate AI waste
  2. Architecture Design      — LLM selection, RAG, agents, infra
  3. Team Enablement          — custom training programs

Deliverables (tangible):
  - Current-state AI assessment report
  - Recommended architecture document
  - Vendor comparison analysis
  - ROI projection model
  - 90-day implementation roadmap
  - Team training curriculum
```

---

## 6. Component Library Specifications

### 6.1 Button Variants
```tsx
// Primary CTA
<Button variant="primary">
  Solid fill: --color-accent
  Text: white, DM Sans, 15px, font-semibold
  Padding: 12px 24px
  Border-radius: 8px
  Hover: lighten + slight scale(1.02) + glow shadow
  Active: scale(0.98)

// Ghost
<Button variant="ghost">
  Border: 1px solid --color-border
  Hover: border-color transition to accent, bg-accent/10

// Text link
<Button variant="link">
  No border/bg, accent color, underline on hover
  Arrow icon that translates right on hover
```

### 6.2 Card Component
```tsx
<Card>
  Background: --color-surface (0E1420)
  Border: 1px solid --color-border (1E2A42)
  Border-radius: 16px
  Padding: 32px
  
  Hover state:
    border-color → --color-border-glow
    box-shadow: 0 0 0 1px --color-border-glow, 0 20px 40px rgba(0,0,0,0.4)
    transform: translateY(-2px)
  
  Transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1)
```

### 6.3 Section Container
```tsx
<Section>
  max-width: 1280px
  margin: 0 auto
  padding: 120px 32px  (desktop)
           80px 24px   (tablet)
           60px 16px   (mobile)
```

### 6.4 Label/Tag Component
```tsx
<Label>
  Font: JetBrains Mono, 11px, uppercase, letter-spacing: 0.12em
  Color: --color-accent
  Background: rgba(14, 165, 233, 0.1)
  Border: 1px solid rgba(14, 165, 233, 0.25)
  Padding: 4px 10px
  Border-radius: 4px
  Display: inline-flex
```

### 6.5 Gradient Text
```css
.gradient-text {
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### 6.6 Animated Border Card
```css
.glow-border {
  position: relative;
  border-radius: 16px;
  background: linear-gradient(#0E1420, #0E1420) padding-box,
              linear-gradient(135deg, #0EA5E9, #6366F1, #0EA5E9) border-box;
  border: 1px solid transparent;
  animation: borderRotate 4s linear infinite;
}
```

---

## 7. Animation System

### 7.1 Scroll Animations (Framer Motion)
```tsx
// Standard fade-up for sections
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
}

// Stagger container for lists/grids
const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } }
}

// Card entrance
const cardReveal = {
  initial: { opacity: 0, y: 16, scale: 0.97 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
}
```

### 7.2 Page Transitions
```tsx
// Layout-level page transition
// Wrap page content in:
<motion.div
  initial={{ opacity: 0, y: 8 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -8 }}
  transition={{ duration: 0.35, ease: "easeInOut" }}
>
```

### 7.3 Hero Background Animation
```tsx
// Particle network: Use a lightweight canvas-based solution
// Library: tsparticles (tree-shakeable) OR pure CSS grid animation
// Config: 30-50 particles, low opacity (0.15), slow movement (1px/s)
// Color: accent color at 40% opacity
// Performance: requestAnimationFrame, will-change: transform
```

### 7.4 Counter Animation (Stats Section)
```tsx
// Animate numbers from 0 to target value on viewport entry
// Duration: 2s with ease-out curve
// Trigger: Intersection Observer, once: true
```

---

## 8. SEO & GEO Implementation

### 8.1 Metadata Strategy
```tsx
// app/layout.tsx — base metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://meetaps.com'),
  title: {
    default: 'Meetaps — Enterprise AI & Cross-Border Tech Services',
    template: '%s | Meetaps'
  },
  description: 'Meetaps bridges China AI infrastructure with global enterprise needs. Services include AI compute tokens, cross-border e-commerce, GEO optimization, OpenClaw customization, and AI architecture consulting.',
  keywords: ['enterprise AI', 'China AI compute', 'GEO optimization', 'cross-border ecommerce', 'AI consulting'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://meetaps.com',
    siteName: 'Meetaps',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@meetaps'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  }
}
```

### 8.2 Structured Data (JSON-LD)
```tsx
// On homepage: Organization schema
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Meetaps",
  "url": "https://meetaps.com",
  "logo": "https://meetaps.com/logo.png",
  "description": "Enterprise AI and cross-border technology services",
  "serviceArea": { "@type": "GeoShape", "name": "Global" },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Enterprise AI Services",
    "itemListElement": [/* service items */]
  }
}

// On each service page: Service schema
// On blog posts: Article schema
// On case studies: Case study / Review schema
```

### 8.3 llms.txt (GEO Optimization)
```
# /public/llms.txt

# Meetaps
> Enterprise AI & Cross-Border Technology Services

Meetaps helps global enterprises access China AI infrastructure, 
build cross-border e-commerce platforms, optimize for AI search engines (GEO),
deploy OpenClaw enterprise AI, and architect AI cost-reduction strategies.

## Services
- AI Compute Tokens: /services/ai-compute
- Cross-Border E-Commerce: /services/ecommerce  
- GEO Optimization: /services/geo
- OpenClaw Enterprise: /services/openclaw
- AI Consulting: /services/ai-consulting

## Optional
- Blog: /blog
- Case Studies: /case-studies
```

### 8.4 Sitemap
```tsx
// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://meetaps.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/legal/*'],
}
```

---

## 9. Compliance Requirements

### 9.1 GDPR (EU Users)
```
Required pages:
  ✓ /legal/privacy-policy
  ✓ /legal/terms-of-service
  ✓ /legal/cookie-policy

Cookie consent:
  - Use: @consent-manager/react or custom minimal implementation
  - Categories: Necessary | Analytics | Marketing
  - Style: Bottom banner, dark themed, non-intrusive
  - Default: Only necessary cookies active until consent
  - Store consent: localStorage + server-side cookie

Privacy policy must cover:
  - Data controller identity & contact (DPO email)
  - What data is collected (forms, analytics)
  - Legal basis for processing (Art. 6 GDPR)
  - Data retention periods
  - Third-party processors (Vercel, Resend, etc.)
  - User rights (access, erasure, portability)
  - Right to lodge complaint with supervisory authority
```

### 9.2 CCPA (California Users)
```
  - "Do Not Sell My Personal Information" link in footer
  - Opt-out mechanism in cookie settings
  - Privacy policy section covering CCPA rights
```

### 9.3 Business Registration & Transparency
```
Footer must display:
  - Legal company name
  - Registration number
  - Registered address
  - VAT/GST number (if applicable)

Recommended structure:
  Meetaps Technology Ltd.
  [Company Number]
  [Registered Address]
  
Contact page:
  - Physical address or registered agent
  - Email address
  - Response time commitment
```

### 9.4 Service Disclaimers
```
AI Compute page:
  - Export compliance statement
  - "Services subject to applicable international trade regulations"

E-Commerce page:
  - "Platform performance varies based on market and product category"

Consulting page:
  - "Results may vary. Past performance is not indicative of future results."
```

### 9.5 Accessibility (WCAG 2.1 AA)
```
Required:
  ✓ All images: meaningful alt text
  ✓ Color contrast: minimum 4.5:1 for body text, 3:1 for large text
  ✓ Keyboard navigation: full site navigable via keyboard
  ✓ Focus indicators: visible on all interactive elements
  ✓ ARIA labels: on icon buttons, navigation landmarks
  ✓ Skip-to-content link: first focusable element
  ✓ Form labels: all inputs properly labeled
  ✓ Error messages: descriptive, color-independent
  
Tools to validate:
  - axe DevTools (browser extension)
  - Lighthouse accessibility audit (target: 95+)
```

---

## 10. Performance Targets

```
Core Web Vitals (all pages):
  LCP  (Largest Contentful Paint):  < 2.5s
  FID  (First Input Delay):         < 100ms
  CLS  (Cumulative Layout Shift):   < 0.1
  INP  (Interaction to Next Paint): < 200ms

Lighthouse scores (target):
  Performance:    95+
  Accessibility:  95+
  Best Practices: 100
  SEO:            100

Implementation:
  - Images: next/image (WebP + AVIF, lazy loading, priority on hero)
  - Fonts: next/font (preload, font-display: swap)
  - Icons: SVG sprites or lucide-react (tree-shaken)
  - Animations: respect prefers-reduced-motion
  - Bundle: analyze with @next/bundle-analyzer
  - Third-party scripts: load with strategy="lazyOnload"
```

---

## 11. Internationalization Setup

```tsx
// Middleware-based routing
// /en/... (default)  
// /zh/...

// next-intl configuration
// messages/en.json — all English strings
// messages/zh.json — all Chinese strings

// Language toggle behavior:
// - Persists in cookie (next-intl recommended)
// - URL-based routing (not query param)
// - hreflang tags automatically generated

// Translation priority:
// Phase 1: EN only (launch)
// Phase 2: Add ZH (marketing pages)
// Phase 3: Full ZH coverage
```

---

## 12. Contact & Lead Forms

### 12.1 Consultation Booking Form
```tsx
Fields:
  - Full Name (required)
  - Work Email (required, validated)
  - Company Name (required)
  - Company Size (select: 1-50, 51-200, 201-1000, 1000+)
  - Service Interest (multi-select, checkboxes)
  - Brief Description (textarea, 500 char max)
  - How did you hear about us (select)
  - [ ] I agree to the Privacy Policy (required checkbox with link)

On submit:
  1. Client-side validation (Zod)
  2. API route: POST /api/contact
  3. Send notification email (Resend) to hello@meetaps.com
  4. Send confirmation email to prospect
  5. Success state: Thank you message + expected response time
  6. Optional: Calendly embed trigger after form submit

GDPR compliance:
  - Privacy checkbox required
  - Data minimization (no unnecessary fields)
  - Clear purpose statement above form
```

---

## 13. File & Directory Structure

```
meetaps.com/
├── app/
│   ├── layout.tsx                 # Root layout, fonts, metadata
│   ├── page.tsx                   # Homepage
│   ├── not-found.tsx              # 404 page
│   ├── error.tsx                  # Error boundary
│   ├── services/
│   │   ├── page.tsx               # Services overview
│   │   ├── ai-compute/page.tsx
│   │   ├── ecommerce/page.tsx
│   │   ├── geo/page.tsx
│   │   ├── openclaw/page.tsx
│   │   └── ai-consulting/page.tsx
│   ├── case-studies/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── legal/
│   │   ├── privacy-policy/page.tsx
│   │   ├── terms-of-service/page.tsx
│   │   └── cookie-policy/page.tsx
│   └── api/
│       ├── contact/route.ts
│       └── og/route.tsx           # Dynamic OG image generation
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileNav.tsx
│   │   └── MegaMenu.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── StatsBar.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── Testimonials.tsx
│   │   ├── BlogPreview.tsx
│   │   └── CTABanner.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Label.tsx
│   │   ├── Badge.tsx
│   │   ├── Accordion.tsx
│   │   ├── AnimatedCounter.tsx
│   │   ├── GlowOrb.tsx
│   │   └── NoiseTexture.tsx
│   └── forms/
│       └── ConsultationForm.tsx
│
├── lib/
│   ├── utils.ts                   # cn() helper, misc utils
│   ├── constants.ts               # Navigation, services data
│   └── validations.ts             # Zod schemas
│
├── content/
│   ├── case-studies/              # MDX files
│   └── blog/                      # MDX files
│
├── public/
│   ├── fonts/                     # Self-hosted fallbacks
│   ├── images/
│   ├── noise.svg
│   ├── llms.txt                   # GEO file
│   ├── robots.txt
│   └── sitemap.xml
│
├── styles/
│   └── globals.css                # CSS variables, base styles, animations
│
├── messages/
│   ├── en.json
│   └── zh.json
│
├── tailwind.config.ts
├── next.config.ts
├── next-sitemap.config.js
└── tsconfig.json
```

---

## 14. Content Strategy Notes

### Blog Topics (SEO + GEO targets)
```
Technical:
  - "What is GEO? The Complete Guide to Generative Engine Optimization"
  - "How to Access Chinese AI Compute Resources for Global Workloads"
  - "Building Headless E-Commerce for Cross-Border Markets: Architecture Guide"
  - "LLM Cost Optimization: How We Cut Enterprise AI Bills by 60%"
  - "OpenClaw vs ChatGPT Enterprise: What's Right for Your Business"

Thought leadership:
  - "Why SEO is Dead and GEO is What Matters in 2025"
  - "China's AI Infrastructure Advantage and What It Means for Global Enterprises"
  - "The Cross-Border E-Commerce Playbook: From China to Europe"
```

### Case Study Structure
```
Each case study should include:
  - Client: [Industry] company (anonymized if needed)
  - Challenge: 2-3 paragraph problem description
  - Solution: What Meetaps built/implemented
  - Results: 3 specific metrics (quantified)
  - Timeline: How long did it take
  - Technologies used: Tags
  - Quote: Client testimonial (if available)
  - CTA: Related service link
```

---

## 15. Launch Checklist

### Pre-Launch
```
Technical:
  [ ] All pages have unique title + meta description
  [ ] OG images generated for all key pages
  [ ] robots.txt configured
  [ ] sitemap.xml submitted to Google Search Console
  [ ] llms.txt published at /llms.txt
  [ ] SSL/HTTPS enforced (Vercel handles this)
  [ ] All forms tested end-to-end
  [ ] 404 and error pages styled
  [ ] Mobile responsive tested (360px, 768px, 1024px, 1440px)
  [ ] Cross-browser tested (Chrome, Safari, Firefox, Edge)
  [ ] Lighthouse scores verified
  [ ] Analytics tracking verified
  [ ] Cookie consent working

Legal:
  [ ] Privacy Policy live and linked in footer
  [ ] Terms of Service live and linked in footer
  [ ] Cookie Policy live and linked in footer
  [ ] GDPR consent mechanism working
  [ ] CCPA opt-out link in footer
  [ ] Contact information accurate and current
  [ ] Business registration info in footer
  [ ] All service disclaimer texts reviewed by counsel

Content:
  [ ] All copy proofread by native English speaker
  [ ] No placeholder/lorem ipsum text remaining
  [ ] All images have alt text
  [ ] Client testimonials have permission to publish
  [ ] Case studies approved by clients
  [ ] Blog at least 3 posts at launch
```

---

## 16. Recommended Third-Party Services

```
Analytics:     Vercel Analytics (privacy-first, no cookie consent needed)
Email:         Resend + React Email (transactional) + ConvertKit (newsletter)
Calendar:      Calendly (consultation booking embed)
Chat widget:   None at launch — reduces complexity; add later if needed
CMS (blog):    Contentlayer + MDX (developer-managed) OR Sanity (if non-dev editors)
Monitoring:    Vercel Speed Insights + Sentry (error tracking)
Domain/DNS:    Cloudflare (DNS + DDoS protection)
Payments:      N/A at launch (consultations are free first-touch)
```

---

*Specification version: 1.0 | Prepared for AI agent development handoff*  
*Domain: meetaps.com | Framework: Next.js 14 App Router | Design: Dark-mode enterprise*
