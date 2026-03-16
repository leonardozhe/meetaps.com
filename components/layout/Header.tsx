'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useContactModal } from '@/lib/ContactModalContext';

type ValidHref =
  | '/'
  | '/about'
  | '/case-studies'
  | '#';

type ValidSubHref =
  | '/services/ai-compute'
  | '/services/ecommerce'
  | '/services/geo'
  | '/services/openclaw'
  | '/services/ai-consulting'
  | '/solutions/enterprise'
  | '/solutions/ecommerce'
  | '/solutions/saas'
  | '/services';

interface NavItem {
  title: string;
  href: ValidHref;
  dropdown?: Array<{
    title: string;
    href: ValidSubHref;
    description?: string;
  }>;
}

const navItems: NavItem[] = [
  {
    title: 'Services',
    href: '#',
    dropdown: [
      { title: 'AI Compute Tokens', href: '/services/ai-compute', description: 'China AI infrastructure to global markets' },
      { title: 'Cross-Border E-Commerce', href: '/services/ecommerce', description: 'Enterprise storefronts for global expansion' },
      { title: 'GEO Optimization', href: '/services/geo', description: 'AI-era search visibility' },
      { title: 'OpenClaw Customization', href: '/services/openclaw', description: 'Enterprise AI platform deployment' },
      { title: 'AI Architecture Consulting', href: '/services/ai-consulting', description: 'Cost reduction, LLM integration, training' },
    ]
  },
  {
    title: 'Solutions',
    href: '#',
    dropdown: [
      { title: 'Enterprise', href: '/solutions/enterprise' },
      { title: 'E-Commerce', href: '/solutions/ecommerce' },
      { title: 'SaaS', href: '/solutions/saas' },
    ]
  },
  { title: 'Case Studies', href: '/case-studies' },
  { title: 'About', href: '/about' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { openContactModal } = useContactModal();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/meetaps-logo.png"
                alt="MEETAPS"
                width={180}
                height={52}
                className="h-10 lg:h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.dropdown ? (
                  <>
                    <button
                      className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                      {item.title}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.title ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown Menu */}
                    {activeDropdown === item.title && (
                      <div className="absolute top-full left-0 pt-2 w-80">
                        <div className="bg-white rounded-xl shadow-large border border-slate-200/50 p-2 animate-scale-in">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-4 py-3 rounded-lg hover:bg-slate-50 transition-colors group"
                            >
                              <div className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                                {subItem.title}
                              </div>
                              {subItem.description && (
                                <div className="text-sm text-slate-500 mt-0.5">
                                  {subItem.description}
                                </div>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="primary"
              className="gap-2"
              onClick={openContactModal}
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200/50">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.title}>
                  {item.dropdown ? (
                    <div className="py-1">
                      <div className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        {item.title}
                      </div>
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 mt-2 border-t border-slate-200/50">
                <Button
                  variant="primary"
                  className="w-full gap-2"
                  onClick={() => {
                    setIsMenuOpen(false);
                    openContactModal();
                  }}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}