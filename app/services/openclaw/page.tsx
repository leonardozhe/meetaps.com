import Link from 'next/link';
import { ArrowRight, CheckCircle2, Boxes, Settings, Shield, Users } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/Accordion';

const features = [
  {
    icon: Boxes,
    title: 'Custom Deployment',
    description: 'Deploy OpenClaw on your infrastructure or cloud provider of choice.'
  },
  {
    icon: Settings,
    title: 'Feature Customization',
    description: 'Tailor OpenClaw features to match your specific business requirements.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Enterprise-grade security with SSO, RBAC, and audit logging.'
  },
  {
    icon: Users,
    title: 'Training & Support',
    description: 'Comprehensive training for your team and ongoing technical support.'
  }
];

const capabilities = [
  'Custom workflow automation',
  'Integration with existing systems',
  'Multi-tenant deployment',
  'White-label options',
  'API customization',
  'Custom AI model fine-tuning',
  'Data migration services',
  '24/7 enterprise support'
];

const faqs = [
  {
    question: 'What is OpenClaw?',
    answer: 'OpenClaw is an enterprise AI platform for workflow automation and business process optimization. It combines AI capabilities with customizable workflows to help businesses automate complex processes.'
  },
  {
    question: 'Can you deploy on our infrastructure?',
    answer: 'Yes, we offer on-premise deployment, private cloud deployment, and hybrid options. We work with your security and compliance requirements.'
  },
  {
    question: 'What customization options are available?',
    answer: 'We can customize workflows, integrate with your existing systems, add custom AI models, white-label the interface, and build custom features specific to your needs.'
  },
  {
    question: 'Do you provide training?',
    answer: 'Yes, we provide comprehensive training for administrators and end-users, including documentation, video tutorials, and hands-on workshops.'
  }
];

export default function OpenClawPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-orange-50/30 to-slate-50 border-b border-slate-200">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-orange-50 text-orange-600 border-orange-200">Enterprise AI Platform</Badge>
              <h1 className="display-xl text-slate-900 mb-6">
                OpenClaw Customization
              </h1>
              <p className="body-lg text-slate-600 mb-8">
                Enterprise AI platform deployment and customization. Deploy OpenClaw on your infrastructure with custom workflows, integrations, and AI models tailored to your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="#capabilities" className="btn-secondary">
                  View Capabilities
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-large border border-slate-200 p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <div className="text-3xl font-bold text-orange-600 mb-1">100+</div>
                  <div className="text-sm text-slate-600">Deployments</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <div className="text-3xl font-bold text-orange-600 mb-1">99.9%</div>
                  <div className="text-sm text-slate-600">Uptime SLA</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <div className="text-3xl font-bold text-orange-600 mb-1">24/7</div>
                  <div className="text-sm text-slate-600">Enterprise Support</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <div className="text-3xl font-bold text-orange-600 mb-1">SOC2</div>
                  <div className="text-sm text-slate-600">Compliant</div>
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
          <h2 className="display-md text-slate-900">Enterprise-Grade Customization</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="card">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="label mb-4">Capabilities</span>
              <h2 className="display-md text-slate-900 mb-6">What We Deliver</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-slate-700">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-large border border-slate-200 p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Deployment Options</h3>
              <div className="space-y-4">
                {[
                  { name: 'Cloud (SaaS)', desc: 'Managed by us on our cloud infrastructure' },
                  { name: 'Private Cloud', desc: 'Your AWS, Azure, or GCP environment' },
                  { name: 'On-Premise', desc: 'Your own servers and infrastructure' },
                  { name: 'Hybrid', desc: 'Combination of cloud and on-premise' }
                ].map((option, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{option.name}</h4>
                      <p className="text-sm text-slate-600">{option.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-orange-600">
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
          <h2 className="display-md mb-4">Ready to Deploy OpenClaw?</h2>
          <p className="body-lg text-slate-400 max-w-2xl mx-auto mb-8">
            Let's discuss your enterprise AI platform requirements and build a solution that fits your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Schedule Demo
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