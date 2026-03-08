import Link from 'next/link';
import type { Route } from 'next';
import { ArrowRight, Building2, ShoppingCart, Cloud } from 'lucide-react';

const solutions = [
  {
    icon: Building2,
    title: 'Enterprise',
    description: 'AI infrastructure and digital transformation solutions for large organizations.',
    features: ['AI Compute Infrastructure', 'Custom AI Solutions', 'Enterprise Integration', 'Compliance & Security'],
    href: '/solutions/enterprise',
    color: 'blue'
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    description: 'Cross-border commerce solutions for brands expanding into new markets.',
    features: ['Headless Storefronts', 'China Market Entry', 'Multi-Region Operations', 'Global Payments'],
    href: '/solutions/ecommerce',
    color: 'emerald'
  },
  {
    icon: Cloud,
    title: 'SaaS',
    description: 'Scalable SaaS solutions with AI-powered features and global infrastructure.',
    features: ['AI Feature Integration', 'Multi-tenant Architecture', 'Global Deployment', 'Cost Optimization'],
    href: '/solutions/saas',
    color: 'violet'
  }
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 border-b border-slate-200">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <span className="label mb-4">Solutions</span>
            <h1 className="display-xl text-slate-900 mb-6">
              Solutions for Every Business
            </h1>
            <p className="body-lg text-slate-600">
              Tailored solutions designed for your industry and scale. From startups to enterprises, we have the right solution for your AI and cross-border needs.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-container">
        <div className="grid gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="card hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-2xl bg-${solution.color}-50 text-${solution.color}-600 flex items-center justify-center`}>
                    <solution.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-900">{solution.title}</h2>
                    <p className="text-slate-600 text-sm">{solution.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {solution.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-sm font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end">
                  <Link
                    href={solution.href as Route}
                    className="btn-primary"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white">
        <div className="section-container text-center">
          <h2 className="display-md mb-4">Not Sure Which Solution Fits?</h2>
          <p className="body-lg text-slate-400 max-w-2xl mx-auto mb-8">
            Our team can help you identify the right approach for your specific needs and goals.
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