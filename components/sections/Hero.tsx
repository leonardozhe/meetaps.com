'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const features = [
  'Enterprise-grade AI infrastructure',
  'Cross-border commerce solutions',
  'Global compliance & support',
];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50"></div>
      
      {/* Mesh Gradient */}
      <div className="absolute inset-0 bg-mesh opacity-70"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-dots opacity-50"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="label mb-6">
                Enterprise AI Solutions
              </span>
            </motion.div>

            <motion.h1
              className="display-xl text-slate-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Bridge China's AI Infrastructure to{' '}
              <span className="gradient-text">Global Markets</span>
            </motion.h1>

            <motion.p
              className="body-lg text-slate-600 mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Access cutting-edge AI compute power, expand cross-border commerce, and optimize for the AI era with enterprise-grade solutions from Meetaps.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link href="/contact">
                <Button variant="primary" className="gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="secondary" className="gap-2">
                  <Play className="w-4 h-4" />
                  Explore Services
                </Button>
              </Link>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span className="text-sm text-slate-600">{feature}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Stats Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white rounded-3xl shadow-large border border-slate-200/50 p-8 lg:p-10">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2">50+</div>
                  <div className="text-slate-500">Enterprise Clients</div>
                </div>
                <div>
                  <div className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2">99.9%</div>
                  <div className="text-slate-500">Uptime SLA</div>
                </div>
                <div>
                  <div className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2">10M+</div>
                  <div className="text-slate-500">GPU Hours/Month</div>
                </div>
                <div>
                  <div className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2">24/7</div>
                  <div className="text-slate-500">Global Support</div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-slate-200">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 border-2 border-white flex items-center justify-center text-white text-xs font-medium"
                      >
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-900">Trusted by leading enterprises</div>
                    <div className="text-sm text-slate-500">From startups to Fortune 500</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}