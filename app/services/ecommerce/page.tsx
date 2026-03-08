import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShoppingCart, Globe, CreditCard, Truck } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/Accordion';

const features = [
  {
    icon: ShoppingCart,
    title: 'Headless Architecture',
    description: 'Custom Next.js storefronts with Medusa, Shopify, or custom backends for maximum flexibility.'
  },
  {
    icon: Globe,
    title: 'Multi-Region Ready',
    description: 'Multi-currency, multi-language, and multi-region support out of the box.'
  },
  {
    icon: CreditCard,
    title: 'Global Payments',
    description: 'Integrate with Alipay, WeChat Pay, Stripe, and other global payment providers.'
  },
  {
    icon: Truck,
    title: 'Logistics Integration',
    description: 'Connect with global logistics providers and customs brokers for seamless cross-border shipping.'
  }
];

const platforms = [
  { name: 'Medusa', description: 'Open-source headless commerce' },
  { name: 'Shopify Plus', description: 'Enterprise e-commerce platform' },
  { name: 'Custom', description: 'Bespoke solutions for unique needs' }
];

const faqs = [
  {
    question: 'What e-commerce platforms do you support?',
    answer: 'We specialize in headless architectures using Medusa, Shopify Plus, and custom-built solutions. We can help you migrate from legacy systems or build from scratch.'
  },
  {
    question: 'How do you handle cross-border payments?',
    answer: 'We integrate with Alipay, WeChat Pay for China, and Stripe, PayPal, and local payment methods for global markets. Multi-currency support is built-in.'
  },
  {
    question: 'Can you help with China market entry?',
    answer: 'Yes, we provide end-to-end China e-commerce solutions including platform setup, WeChat mini-programs, Tmall/ JD store management, and local payment integration.'
  },
  {
    question: 'What about compliance and regulations?',
    answer: 'All our solutions are GDPR compliant and we ensure compliance with local regulations in China and target markets. We work with legal partners for ICP filing and data localization.'
  }
];

export default function EcommercePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-50 border-b border-slate-200">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-emerald-50 text-emerald-600 border-emerald-200">Cross-Border E-Commerce</Badge>
              <h1 className="display-xl text-slate-900 mb-6">
                Enterprise Storefronts for Global Expansion
              </h1>
              <p className="body-lg text-slate-600 mb-8">
                Build high-performance e-commerce platforms optimized for cross-border trade. Multi-currency, multi-language, and integrated with global payment and logistics providers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="#platforms" className="btn-secondary">
                  View Platforms
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-large border border-slate-200 p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">50+</div>
                  <div className="text-sm text-slate-600">Stores Launched</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">$10M+</div>
                  <div className="text-sm text-slate-600">GMV Processed</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">15+</div>
                  <div className="text-sm text-slate-600">Countries</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">99.9%</div>
                  <div className="text-sm text-slate-600">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-container">
        <div className="text-center mb-12">
          <span className="label mb-4">Features</span>
          <h2 className="display-md text-slate-900">Built for Cross-Border Commerce</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="card">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Platforms Section */}
      <section id="platforms" className="bg-slate-50 border-y border-slate-200">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="label mb-4">Platforms</span>
            <h2 className="display-md text-slate-900 mb-4">Technologies We Work With</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We partner with leading e-commerce platforms to deliver the best solution for your business.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {platforms.map((platform, index) => (
              <div key={index} className="card text-center">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{platform.name}</h3>
                <p className="text-slate-600 text-sm">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="label mb-4">Services</span>
            <h2 className="display-md text-slate-900 mb-6">What We Deliver</h2>
            <ul className="space-y-4">
              {[
                'Custom storefront design and development',
                'Headless commerce architecture',
                'China market entry (Tmall, JD, WeChat)',
                'Multi-currency and multi-language setup',
                'Payment gateway integration',
                'Logistics and customs integration',
                'Performance optimization',
                'Ongoing maintenance and support'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-large border border-slate-200 p-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">China Market Entry</h3>
            <p className="text-slate-600 mb-6">
              Expand your e-commerce business to China with our specialized services including platform setup, local payment integration, and logistics optimization.
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Tmall & JD Global store setup
              </li>
              <li className="flex items-center gap-2 text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                WeChat Mini Program development
              </li>
              <li className="flex items-center gap-2 text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Alipay & WeChat Pay integration
              </li>
              <li className="flex items-center gap-2 text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Cross-border logistics setup
              </li>
            </ul>
          </div>
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
          <h2 className="display-md mb-4">Ready to Expand Globally?</h2>
          <p className="body-lg text-slate-400 max-w-2xl mx-auto mb-8">
            Let's discuss your cross-border e-commerce strategy and build a solution that scales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Schedule Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services" className="btn-secondary bg-white/10 border-white/20 text-white hover:bg-white/20">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}