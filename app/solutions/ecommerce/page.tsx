import Link from 'next/link';
import { ArrowRight, ShoppingCart, Globe, CreditCard, Truck, BarChart3, Users, Zap, CheckCircle2 } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/Accordion';

const features = [
  {
    icon: Globe,
    title: 'Global Market Access',
    description: 'Expand into new markets with localized storefronts, multi-currency support, and regional payment methods.'
  },
  {
    icon: ShoppingCart,
    title: 'Platform Integration',
    description: 'Seamless integration with major e-commerce platforms including Shopify, WooCommerce, and custom solutions.'
  },
  {
    icon: CreditCard,
    title: 'Payment Solutions',
    description: 'Cross-border payment processing with support for 100+ payment methods and currencies.'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Real-time dashboards and AI-powered insights to optimize conversion and customer lifetime value.'
  }
];

const capabilities = [
  { name: 'Multi-Store Management', desc: 'Manage multiple storefronts across regions from a single dashboard' },
  { name: 'Cross-Border Logistics', desc: 'Integrated shipping solutions for international fulfillment' },
  { name: 'Localization Engine', desc: 'Automatic translation, currency conversion, and cultural adaptation' },
  { name: 'Inventory Sync', desc: 'Real-time inventory management across all channels and warehouses' },
  { name: 'Customer Data Platform', desc: 'Unified customer profiles for personalized experiences' },
  { name: 'Marketplace Integration', desc: 'Connect with Amazon, Tmall, JD, and other global marketplaces' }
];

const platforms = [
  { name: 'Shopify', description: 'Enterprise-grade storefronts with custom functionality' },
  { name: 'WooCommerce', description: 'Flexible WordPress-based e-commerce solutions' },
  { name: 'Custom Builds', description: 'Headless commerce with modern frontend frameworks' },
  { name: 'Medusa', description: 'Open-source Node.js commerce engine' },
  { name: 'BigCommerce', description: 'SaaS platform with robust API capabilities' },
  { name: 'Magento', description: 'Enterprise e-commerce with extensive customization' }
];

const faqs = [
  {
    question: 'What e-commerce platforms do you support?',
    answer: 'We work with all major e-commerce platforms including Shopify, WooCommerce, Magento, BigCommerce, Medusa, and custom-built solutions. Our team can help you choose the right platform based on your specific requirements, or build a custom solution tailored to your needs.'
  },
  {
    question: 'How do you handle cross-border payments?',
    answer: 'We integrate with leading payment providers to support 100+ payment methods and currencies. Our solutions include fraud prevention, tax compliance, and optimized routing to minimize transaction fees while ensuring high approval rates across different regions.'
  },
  {
    question: 'Can you help with marketplace integration?',
    answer: 'Yes, we provide comprehensive marketplace integration services for Amazon, Tmall, JD.com, eBay, and other global marketplaces. This includes product listing synchronization, inventory management, order consolidation, and unified reporting.'
  },
  {
    question: 'What is the typical implementation timeline?',
    answer: 'Implementation timelines vary based on complexity. A standard Shopify store setup takes 4-6 weeks, while multi-region enterprise solutions with custom integrations typically require 8-16 weeks. We provide detailed project timelines during the discovery phase.'
  }
];

export default function EcommerceSolutionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-50 border-b border-slate-200">
        <div className="section-container">
          <div className="max-w-4xl">
            <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 mb-6">E-Commerce Solutions</span>
            <h1 className="display-xl text-slate-900 mb-6">
              Cross-Border E-Commerce for Global Growth
            </h1>
            <p className="body-lg text-slate-600 mb-8 max-w-2xl">
              End-to-end e-commerce solutions that help brands expand internationally with seamless localization, payment processing, and logistics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="#platforms" className="btn-secondary inline-flex items-center gap-2">
                View Platforms
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-container">
        <div className="text-center mb-12">
          <span className="label mb-4">Why Choose Us</span>
          <h2 className="display-md text-slate-900">Complete E-Commerce Solutions</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="card group hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="bg-slate-50 border-y border-slate-200">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="label mb-4">Capabilities</span>
              <h2 className="display-md text-slate-900 mb-6">Everything You Need to Scale</h2>
              <p className="body-lg text-slate-600 mb-8">
                From storefront development to cross-border logistics, we provide comprehensive solutions that remove the barriers to international e-commerce success.
              </p>
              <div className="space-y-4">
                {capabilities.map((cap, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-slate-900">{cap.name}</p>
                      <p className="text-sm text-slate-600">{cap.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-large border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <BarChart3 className="w-6 h-6 text-emerald-600" />
                <h3 className="text-xl font-semibold text-slate-900">Proven Results</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-600">Average Revenue Increase</span>
                    <span className="font-semibold text-emerald-600">+45%</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-600">Conversion Rate Improvement</span>
                    <span className="font-semibold text-emerald-600">+32%</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '32%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-600">Cart Abandonment Reduction</span>
                    <span className="font-semibold text-emerald-600">-28%</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '28%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="platforms" className="section-container">
        <div className="text-center mb-12">
          <span className="label mb-4">Platforms</span>
          <h2 className="display-md text-slate-900 mb-4">Platform Expertise</h2>
          <p className="body-lg text-slate-600 max-w-2xl mx-auto">
            We work with all major e-commerce platforms to deliver solutions that fit your technology stack and business requirements.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, index) => (
            <div key={index} className="card hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{platform.name}</h3>
              <p className="text-slate-600 text-sm">{platform.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="label mb-4">FAQ</span>
              <h2 className="display-md text-slate-900">Frequently Asked Questions</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="card">
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-emerald-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white">
        <div className="section-container text-center">
          <h2 className="display-md mb-4">Ready to Go Global?</h2>
          <p className="body-lg text-slate-400 max-w-2xl mx-auto mb-8">
            Let's discuss how our e-commerce solutions can help you expand into new markets and grow your international sales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Get Started Today
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services/ecommerce" className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-xl transition-colors inline-flex items-center gap-2">
              View E-Commerce Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}