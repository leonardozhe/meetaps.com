import Link from 'next/link';
import { ArrowRight, Cpu, ShoppingCart, Search, Boxes, Lightbulb } from 'lucide-react';
import { Service, SERVICES } from '@/lib/constants/services';
import type { Route } from 'next';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'Zap': Cpu,
  'Globe': ShoppingCart,
  'Search': Search,
  'Boxes': Boxes,
  'Lightbulb': Lightbulb,
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 border-b border-slate-200">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <span className="label mb-4">Our Services</span>
            <h1 className="display-xl text-slate-900 mb-6">
              Enterprise Solutions for Global Growth
            </h1>
            <p className="body-lg text-slate-600">
              From AI infrastructure to cross-border commerce, we provide comprehensive solutions to help your business scale across borders.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-6">
          {SERVICES.map((service: Service) => {
            const IconComponent = service.iconComponent;
            return (
              <Link
                key={service.id}
                href={(service.href || '/services') as Route}
                className="group block"
              >
                <div className="card h-full hover:border-blue-300 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {service.capabilities && (
                    <div className="space-y-2 mb-6">
                      {service.capabilities.map((capability, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                          <span>{capability}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center text-blue-600 font-medium text-sm pt-4 border-t border-slate-100">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white">
        <div className="section-container text-center">
          <h2 className="display-md mb-4">Need a Custom Solution?</h2>
          <p className="body-lg text-slate-400 max-w-2xl mx-auto mb-8">
            Our team can help you design and implement a tailored solution for your specific business needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-xl transition-colors"
          >
            Schedule Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}