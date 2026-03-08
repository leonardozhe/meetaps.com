import Link from 'next/link';
import { ArrowRight, Cloud, Zap, Shield, Users, BarChart3, Code, Rocket, CheckCircle2 } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/Accordion';

const features = [
  {
    icon: Cloud,
    title: 'Cloud-Native Architecture',
    description: 'Built for scale with microservices, containers, and serverless technologies for optimal performance.'
  },
  {
    icon: Zap,
    title: 'Rapid Deployment',
    description: 'Accelerated time-to-market with pre-built components and automated CI/CD pipelines.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2 compliant infrastructure with role-based access, encryption, and audit logging.'
  },
  {
    icon: BarChart3,
    title: 'Built-in Analytics',
    description: 'Real-time dashboards, user behavior tracking, and AI-powered insights out of the box.'
  }
];

const capabilities = [
  { name: 'Multi-tenant Architecture', desc: 'Design and build scalable multi-tenant SaaS applications' },
  { name: 'Subscription Billing', desc: 'Flexible pricing models with Stripe, Paddle, and custom integrations' },
  { name: 'User Management', desc: 'SSO, OAuth, and enterprise identity provider integrations' },
  { name: 'API-First Design', desc: 'RESTful and GraphQL APIs with comprehensive documentation' },
  { name: 'DevOps Automation', desc: 'Infrastructure as code, monitoring, and automated deployments' },
  { name: 'Performance Optimization', desc: 'CDN, caching strategies, and database optimization' }
];

const technologies = [
  { name: 'React & Next.js', category: 'Frontend' },
  { name: 'Node.js & TypeScript', category: 'Backend' },
  { name: 'PostgreSQL & Redis', category: 'Database' },
  { name: 'AWS & GCP', category: 'Cloud' },
  { name: 'Kubernetes', category: 'Infrastructure' },
  { name: 'Stripe & Paddle', category: 'Payments' }
];

const faqs = [
  {
    question: 'Do you build custom SaaS applications or use existing platforms?',
    answer: 'We specialize in custom SaaS development tailored to your specific business requirements. This approach gives you full control over features, user experience, and intellectual property. We can also work with no-code/low-code platforms for faster time-to-market when appropriate.'
  },
  {
    question: 'How do you handle multi-tenant architecture?',
    answer: 'We implement proven multi-tenant patterns including database-per-tenant, schema-per-tenant, or row-level security based on your scalability needs and compliance requirements. Our architectures support both B2B and B2C use cases with proper data isolation.'
  },
  {
    question: 'What is your approach to SaaS pricing and billing?',
    answer: 'We integrate with leading billing platforms like Stripe Billing and Paddle to support subscription management, usage-based pricing, and enterprise contracts. Our solutions handle complex pricing scenarios including tiered plans, add-ons, and volume discounts.'
  },
  {
    question: 'How long does it take to build a SaaS application?',
    answer: 'Timeline varies based on complexity. An MVP typically takes 8-12 weeks, while a full-featured SaaS platform with enterprise capabilities may require 4-6 months. We follow agile methodologies with regular releases to get your product in users\' hands quickly.'
  }
];

export default function SaasSolutionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-violet-50/30 to-slate-50 border-b border-slate-200">
        <div className="section-container">
          <div className="max-w-4xl">
            <span className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm font-medium text-violet-700 mb-6">SaaS Solutions</span>
            <h1 className="display-xl text-slate-900 mb-6">
              Build and Scale Your SaaS Platform
            </h1>
            <p className="body-lg text-slate-600 mb-8 max-w-2xl">
              From MVP to enterprise scale—full-stack SaaS development with modern architecture, subscription billing, and global infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Discuss Your Project
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
          <span className="label mb-4">Why SaaS</span>
          <h2 className="display-md text-slate-900">Modern SaaS Development</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="card group hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4 group-hover:bg-violet-100 transition-colors">
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
              <h2 className="display-md text-slate-900 mb-6">Complete SaaS Development</h2>
              <p className="body-lg text-slate-600 mb-8">
                We handle every aspect of SaaS development—from architecture design and frontend development to backend services, billing integration, and ongoing DevOps support.
              </p>
              <div className="space-y-4">
                {capabilities.map((cap, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-violet-500 mt-0.5 flex-shrink-0" />
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
                <Code className="w-6 h-6 text-violet-600" />
                <h3 className="text-xl font-semibold text-slate-900">Technology Stack</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech, index) => (
                  <div key={index} className="p-3 bg-slate-50 rounded-lg">
                    <p className="font-medium text-slate-900">{tech.name}</p>
                    <p className="text-xs text-slate-500">{tech.category}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-container">
        <div className="text-center mb-12">
          <span className="label mb-4">Process</span>
          <h2 className="display-md text-slate-900 mb-4">From Idea to Launch</h2>
          <p className="body-lg text-slate-600 max-w-2xl mx-auto">
            Our proven development process ensures your SaaS product is built right the first time.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Discovery', desc: 'Define requirements, user stories, and technical architecture' },
            { step: '02', title: 'Design', desc: 'UI/UX design, database schema, and API specifications' },
            { step: '03', title: 'Development', desc: 'Agile sprints with regular demos and continuous integration' },
            { step: '04', title: 'Launch', desc: 'Deployment, monitoring setup, and ongoing support' }
          ].map((item, index) => (
            <div key={index} className="card">
              <span className="text-4xl font-bold text-violet-200 mb-4 block">{item.step}</span>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.desc}</p>
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
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-violet-600">
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
          <h2 className="display-md mb-4">Ready to Build Your SaaS?</h2>
          <p className="body-lg text-slate-400 max-w-2xl mx-auto mb-8">
            Let's discuss your SaaS idea and create a roadmap to bring it to life. Our team is ready to help you build and scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Start the Conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services/ai-consulting" className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-xl transition-colors inline-flex items-center gap-2">
              View Consulting Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}