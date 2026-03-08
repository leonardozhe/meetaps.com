// lib/constants/services.ts
import { Zap, Globe, Search, Wrench, Lightbulb } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  href?: string;
  color: string;
  iconComponent: React.ComponentType<{ className?: string }>;
  capabilities?: string[];
}

export const SERVICES: Service[] = [
  {
    id: 'ai-compute',
    title: 'AI Compute Tokens',
    description: 'China AI infrastructure to global markets',
    href: '/services/ai-compute',
    color: 'bg-[--color-accent]',
    iconComponent: Zap,
    capabilities: [
      'Access to tier-1 Chinese AI cloud platforms',
      'Global payment methods accepted',
      'Full compliance documentation provided',
      'Enterprise-grade GPU tokens'
    ]
  },
  {
    id: 'ecommerce',
    title: 'Cross-Border E-Commerce',
    description: 'Enterprise storefronts for global expansion',
    href: '/services/ecommerce',
    color: 'bg-emerald-500',
    iconComponent: Globe,
    capabilities: [
      'Custom Next.js headless architecture',
      'Multi-currency and multi-language',
      'Global logistics API integration',
      'GDPR compliance built-in'
    ]
  },
  {
    id: 'geo',
    title: 'GEO Optimization',
    description: 'AI-era search visibility',
    href: '/services/geo',
    color: 'bg-violet-500',
    iconComponent: Search,
    capabilities: [
      'Optimized for ChatGPT, Perplexity, Claude',
      'Structured data implementation',
      'Entity authority building',
      'Monthly performance reporting'
    ]
  },
  {
    id: 'openclaw',
    title: 'OpenClaw Customization',
    description: 'Enterprise AI platform deployment',
    href: '/services/openclaw',
    color: 'bg-[--color-copper]',
    iconComponent: Wrench,
    capabilities: [
      'White-label deployment options',
      'Custom UI and workflow integration',
      'On-premise or cloud deployment',
      'Enterprise security features'
    ]
  },
  {
    id: 'ai-consulting',
    title: 'AI Architecture Consulting',
    description: 'Cost reduction, LLM integration, training',
    href: '/services/ai-consulting',
    color: 'bg-rose-500',
    iconComponent: Lightbulb,
    capabilities: [
      'AI cost reduction audit',
      'Architecture design & LLM selection',
      'Team enablement & training',
      '90-day implementation roadmap'
    ]
  }
];