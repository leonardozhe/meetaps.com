'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Service, SERVICES } from '@/lib/constants/services';
import type { Route } from 'next';

export default function ServicesGrid() {
  return (
    <section className="section-container">
      <div className="text-center mb-16">
        <span className="label mb-4">Our Services</span>
        <h2 className="display-lg text-slate-900 mb-4">
          Enterprise Solutions for Global Growth
        </h2>
        <p className="body-lg text-slate-600 max-w-2xl mx-auto">
          From AI infrastructure to cross-border commerce, we provide comprehensive solutions to help your business scale.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service: Service, index: number) => {
          const IconComponent = service.iconComponent;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={(service.href || '/services') as Route}
                className="group block h-full"
              >
                <div className="card h-full hover:border-blue-300 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  {service.capabilities && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.capabilities.slice(0, 3).map((capability, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded"
                        >
                          {capability}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex items-center text-blue-600 font-medium text-sm mt-auto pt-4 border-t border-slate-100">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/services"
          className="btn-secondary"
        >
          View All Services
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}