import Link from 'next/link';
import { ArrowRight, Building2, Shield, Globe, Zap, Users, Database, Cloud, Lock, CheckCircle2, Landmark, Heart, Factory, ShoppingBag, Truck, Cpu } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/Accordion';

const features = [
  {
    icon: Building2,
    title: 'Enterprise Architecture',
    description: 'Scalable infrastructure designed for large organizations with complex requirements and global operations.'
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'SOC 2, GDPR, and industry-specific compliance with enterprise-grade security protocols.'
  },
  {
    icon: Globe,
    title: 'Global Deployment',
    description: 'Multi-region deployment strategies ensuring low latency and high availability worldwide.'
  },
  {
    icon: Database,
    title: 'Data Integration',
    description: 'Seamless integration with existing enterprise systems, databases, and data warehouses.'
  }
];

const capabilities = [
  { name: 'Custom AI Model Development', desc: 'Purpose-built AI models trained on your enterprise data' },
  { name: 'Cross-Border Infrastructure', desc: 'Optimized compute and storage across international boundaries' },
  { name: 'Enterprise API Gateway', desc: 'Secure, scalable API management for all your services' },
  { name: 'Data Pipeline Architecture', desc: 'Real-time data processing and analytics infrastructure' },
  { name: 'Multi-Cloud Strategy', desc: 'Hybrid and multi-cloud deployment for optimal performance' },
  { name: '24/7 Enterprise Support', desc: 'Dedicated technical team with guaranteed SLAs' }
];

const industries = [
  { name: 'Financial Services', icon: Landmark, description: 'Regulatory-compliant AI solutions for banking and fintech' },
  { name: 'Healthcare', icon: Heart, description: 'HIPAA-compliant infrastructure for healthtech innovation' },
  { name: 'Manufacturing', icon: Factory, description: 'Smart factory and supply chain optimization' },
  { name: 'Retail & E-commerce', icon: ShoppingBag, description: 'Omnichannel commerce and customer experience' },
  { name: 'Logistics', icon: Truck, description: 'Route optimization and predictive analytics' },
  { name: 'Technology', icon: Cpu, description: 'AI-native product development and infrastructure' }
];

const faqs = [
  {
    question: 'What enterprise compliance standards do you support?',
    answer: 'We support major compliance frameworks including SOC 2 Type II, ISO 27001, GDPR, CCPA, HIPAA, and industry-specific regulations. Our team works with your compliance and legal teams to ensure all deployments meet your organizational requirements.'
  },
  {
    question: 'How do you handle cross-border data transfers?',
    answer: 'We implement comprehensive data governance strategies that comply with international regulations. This includes data localization options, encrypted transfers, and processing agreements that meet GDPR, China\'s PIPL, and other regional requirements.'
  },
  {
    question: 'What is the typical implementation timeline?',
    answer: 'Enterprise implementations typically range from 4-12 weeks depending on complexity. We follow a phased approach: discovery and architecture design (2-3 weeks), proof of concept (2-4 weeks), and full deployment (2-5 weeks). Our team provides dedicated project management throughout.'
  },
  {
    question: 'Do you offer dedicated support?',
    answer: 'Yes, enterprise clients receive dedicated account management, 24/7 technical support with guaranteed response times, and access to our senior engineering team. SLA options include 99.9% uptime guarantees with compensation for any downtime.'
  }
];

export default function EnterpriseSolutionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 border-b border-slate-200">
        <div className="section-container">
          <div className="max-w-4xl">
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 mb-6">Enterprise Solutions</span>
            <h1 className="display-xl text-slate-900 mb-6">
              Enterprise-Grade AI Infrastructure for Global Organizations
            </h1>
            <p className="body-lg text-slate-600 mb-8 max-w-2xl">
              Secure, scalable, and compliant AI solutions designed for the unique challenges of large enterprises operating across borders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Schedule Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="#capabilities" className="btn-secondary inline-flex items-center gap-2">
                Explore Capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-container">
        <div className="text-center mb-12">
          <span className="label mb-4">Why Enterprise</span>
          <h2 className="display-md text-slate-900">Built for Scale and Security</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="card group hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
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
              <h2 className="display-md text-slate-900 mb-6">Comprehensive Enterprise Solutions</h2>
              <p className="body-lg text-slate-600 mb-8">
                From AI infrastructure to cross-border data management, we provide end-to-end solutions that transform how enterprises leverage technology.
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
                <Lock className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-slate-900">Enterprise Security</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <span className="text-slate-700">SOC 2 Type II</span>
                  <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-700">Certified</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <span className="text-slate-700">GDPR Compliant</span>
                  <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-700">Verified</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <span className="text-slate-700">ISO 27001</span>
                  <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-700">Certified</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <span className="text-slate-700">Uptime SLA</span>
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700">99.9%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-container">
        <div className="text-center mb-12">
          <span className="label mb-4">Industries</span>
          <h2 className="display-md text-slate-900 mb-4">Trusted Across Industries</h2>
          <p className="body-lg text-slate-600 max-w-2xl mx-auto">
            Our enterprise solutions power digital transformation across diverse sectors with industry-specific compliance and performance requirements.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div key={index} className="card hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <industry.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{industry.name}</h3>
              <p className="text-slate-600 text-sm">{industry.description}</p>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white">
        <div className="section-container text-center">
          <h2 className="display-md mb-4">Ready to Transform Your Enterprise?</h2>
          <p className="body-lg text-slate-400 max-w-2xl mx-auto mb-8">
            Let's discuss how our enterprise solutions can accelerate your digital transformation and global expansion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Contact Enterprise Team
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services" className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-xl transition-colors inline-flex items-center gap-2">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}