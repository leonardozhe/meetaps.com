'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, ArrowRight } from 'lucide-react';
import { useContactModal } from '@/lib/ContactModalContext';

export default function Footer() {
  const { openContactModal } = useContactModal();

  return (
    <footer className="bg-slate-900 text-white">
      {/* CTA Section */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Ready to get started?</h2>
              <p className="text-slate-400 mt-2">Let's discuss how we can help your business grow.</p>
            </div>
            <button
              onClick={openContactModal}
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-xl transition-colors"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo and Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/meetaps-logo-light.png"
                alt="MEETAPS"
                width={180}
                height={52}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Enterprise AI & Cross-Border Tech Services. We bridge China AI infrastructure with global enterprise needs.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/ai-compute" className="text-slate-400 hover:text-white text-sm transition-colors">
                  AI Compute Tokens
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Cross-Border E-Commerce
                </Link>
              </li>
              <li>
                <Link href="/services/geo" className="text-slate-400 hover:text-white text-sm transition-colors">
                  GEO Optimization
                </Link>
              </li>
              <li>
                <Link href="/services/openclaw" className="text-slate-400 hover:text-white text-sm transition-colors">
                  OpenClaw Customization
                </Link>
              </li>
              <li>
                <Link href="/services/ai-consulting" className="text-slate-400 hover:text-white text-sm transition-colors">
                  AI Architecture Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                <a href="mailto:hello@meetaps.com" className="text-slate-400 hover:text-white text-sm transition-colors">
                  hello@meetaps.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">Chengdu, China</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-slate-500">
              © {new Date().getFullYear()} Meetaps Media Chengdu Tech Ltd., Co. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/legal/privacy-policy" className="text-slate-500 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/legal/terms-of-service" className="text-slate-500 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/legal/cookie-policy" className="text-slate-500 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}