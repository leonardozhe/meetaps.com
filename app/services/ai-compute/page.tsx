import Link from 'next/link';
import { ArrowRight, CheckCircle2, Cpu, Globe, Shield, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/Accordion';

const features = [
  {
    icon: Cpu,
    title: 'Enterprise GPU Access',
    description: 'Access to tier-1 Chinese AI cloud platforms with H100, A100, and other enterprise-grade GPUs.'
  },
  {
    icon: Globe,
    title: 'Global Payment',
    description: 'Pay with international credit cards, wire transfers, or crypto. No Chinese bank account required.'
  },
  {
    icon: Shield,
    title: 'Compliance Ready',
    description: 'Full documentation for audit trails, export compliance, and regulatory requirements.'
  },
  {
    icon: Zap,
    title: 'Fast Provisioning',
    description: 'Get started within 48 hours. Scale up or down based on your compute needs.'
  }
];

const pricing = [
  { tier: 'Starter', gpu: 'A100 40GB', price: 'Contact Us', features: ['10M tokens/month', 'Email support', 'Basic analytics'] },
  { tier: 'Professional', gpu: 'A100 80GB', price: 'Contact Us', features: ['100M tokens/month', 'Priority support', 'Advanced analytics', 'Custom integrations'] },
  { tier: 'Enterprise', gpu: 'H100 80GB', price: 'Custom', features: ['Unlimited tokens', '24/7 dedicated support', 'Custom SLA', 'On-premise options'] }
];

const faqs = [
  {
    question: 'How does token-based pricing work?',
    answer: 'You purchase compute tokens that can be used across our partner platforms. Tokens never expire and can be used for any AI workload including training, fine-tuning, and inference.'
  },
  {
    question: 'What compliance documentation do you provide?',
    answer: 'We provide full audit trails, export compliance certificates, and documentation for regulatory requirements in both China and your home jurisdiction.'
  },
  {
    question: 'How quickly can I get started?',
    answer: 'Most clients are onboarded within 48 hours. Enterprise clients with custom requirements may take up to 1 week.'
  },
  {
    question: 'Can I use my own models?',
    answer: 'Yes, you can deploy your own models or use pre-trained models available on our partner platforms. We support PyTorch, TensorFlow, and other major frameworks.'
  }
];

export default function AIComputePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 border-b border-slate-200">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">AI Infrastructure Services</Badge>
              <h1 className="display-xl text-slate-900 mb-6">
                AI Compute Tokens
              </h1>
              <p className="body-lg text-slate-600 mb-8">
                Access China's AI compute power from anywhere in the world. Enterprise-grade GPU tokens from leading Chinese AI infrastructure providers, with global payment methods and full compliance documentation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="#pricing" className="btn-secondary">
                  View Pricing
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-large border border-slate-200 p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-1">10M+</div>
                  <div className="text-sm text-slate-600">GPU Hours/Month</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-1">99.9%</div>
                  <div className="text-sm text-slate-600">Uptime SLA</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-1">48h</div>
                  <div className="text-sm text-slate-600">Setup Time</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-1">24/7</div>
                  <div className="text-sm text-slate-600">Support</div>
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
          <h2 className="display-md text-slate-900">Why Choose Our AI Compute Tokens</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="card">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-slate-50 border-y border-slate-200">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="label mb-4">Pricing</span>
            <h2 className="display-md text-slate-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Choose the plan that fits your compute needs. All plans include compliance documentation and global payment support.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((plan, index) => (
              <div key={index} className={`card ${index === 1 ? 'border-blue-300 shadow-lg shadow-blue-500/5' : ''}`}>
                {index === 1 && (
                  <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-4">Most Popular</div>
                )}
                <h3 className="text-xl font-semibold text-slate-900 mb-1">{plan.tier}</h3>
                <p className="text-sm text-slate-500 mb-4">{plan.gpu}</p>
                <div className="text-3xl font-bold text-slate-900 mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`w-full ${index === 1 ? 'btn-primary' : 'btn-secondary'}`}>
                  Contact Us
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="label mb-4">FAQ</span>
            <h2 className="display-md text-slate-900">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="card">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white">
        <div className="section-container text-center">
          <h2 className="display-md mb-4">Ready to Get Started?</h2>
          <p className="body-lg text-slate-400 max-w-2xl mx-auto mb-8">
            Contact us for a consultation and we'll set up your account with the appropriate compute resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Contact Us
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