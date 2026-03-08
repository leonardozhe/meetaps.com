import Link from 'next/link';
import { ArrowRight, CheckCircle2, Lightbulb, TrendingDown, Brain, Users } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/Accordion';

const features = [
  {
    icon: TrendingDown,
    title: 'Cost Reduction',
    description: 'Optimize your AI infrastructure spend by up to 40% with strategic planning and resource allocation.'
  },
  {
    icon: Brain,
    title: 'LLM Integration',
    description: 'Integrate Large Language Models into your products and workflows with expert guidance.'
  },
  {
    icon: Lightbulb,
    title: 'AI Strategy',
    description: 'Develop a comprehensive AI roadmap aligned with your business objectives.'
  },
  {
    icon: Users,
    title: 'Team Training',
    description: 'Upskill your team with hands-on AI/ML training and best practices.'
  }
];

const services = [
  { name: 'AI Infrastructure Assessment', desc: 'Evaluate your current setup and identify optimization opportunities' },
  { name: 'LLM Integration Strategy', desc: 'Plan and implement LLM solutions for your business needs' },
  { name: 'Cost Optimization', desc: 'Reduce AI compute costs through better resource management' },
  { name: 'Model Selection & Fine-tuning', desc: 'Choose and customize the right models for your use cases' },
  { name: 'Team Training Programs', desc: 'Build internal AI capabilities with structured training' },
  { name: 'Ongoing Advisory', desc: 'Regular strategy sessions and technical guidance' }
];

const faqs = [
  {
    question: 'What does your AI consulting cover?',
    answer: 'We cover the full spectrum of AI consulting: infrastructure planning, LLM integration, cost optimization, model selection, team training, and ongoing advisory services. Whether you\'re just starting with AI or looking to optimize existing implementations, we can help.'
  },
  {
    question: 'How do you help with cost reduction?',
    answer: 'We analyze your current AI infrastructure spend, identify inefficiencies, recommend cost-effective alternatives, and help you negotiate better rates with providers. Most clients see 20-40% cost reduction.'
  },
  {
    question: 'Can you help us choose the right LLM?',
    answer: 'Yes, we help you evaluate options (GPT-4, Claude, open-source models, etc.) based on your use case, budget, latency requirements, and compliance needs. We can also help with fine-tuning and custom deployments.'
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes, we offer ongoing advisory retainer packages for continued guidance, regular strategy sessions, and access to our experts as questions arise.'
  }
];

export default function AIConsultingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-indigo-50/30 to-slate-50 border-b border-slate-200">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-indigo-50 text-indigo-600 border-indigo-200">AI Consulting</Badge>
              <h1 className="display-xl text-slate-900 mb-6">
                AI Architecture Consulting
              </h1>
              <p className="body-lg text-slate-600 mb-8">
                Expert guidance for your AI initiatives. From cost reduction to LLM integration and team training, we help you build and optimize your AI capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="#services" className="btn-secondary">
                  View Services
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-large border border-slate-200 p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <div className="text-3xl font-bold text-indigo-600 mb-1">40%</div>
                  <div className="text-sm text-slate-600">Avg Cost Reduction</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <div className="text-3xl font-bold text-indigo-600 mb-1">100+</div>
                  <div className="text-sm text-slate-600">Projects Delivered</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <div className="text-3xl font-bold text-indigo-600 mb-1">50+</div>
                  <div className="text-sm text-slate-600">Enterprise Clients</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <div className="text-3xl font-bold text-indigo-600 mb-1">10+</div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-container">
        <div className="text-center mb-12">
          <span className="label mb-4">Expertise</span>
          <h2 className="display-md text-slate-900">How We Help</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="card">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-slate-50 border-y border-slate-200">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="label mb-4">Services</span>
            <h2 className="display-md text-slate-900 mb-4">Our Consulting Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Comprehensive AI consulting tailored to your business needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="card">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 font-bold text-sm">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.name}</h3>
                <p className="text-slate-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="label mb-4">Engagement</span>
            <h2 className="display-md text-slate-900 mb-6">Flexible Engagement Models</h2>
            <div className="space-y-6">
              {[
                { name: 'One-Time Assessment', desc: 'Comprehensive review with actionable recommendations', price: 'Starting at $5,000' },
                { name: 'Project-Based', desc: 'Defined scope with clear deliverables and timeline', price: 'Custom quote' },
                { name: 'Retainer', desc: 'Ongoing advisory with regular check-ins and priority support', price: 'From $3,000/month' }
              ].map((model, index) => (
                <div key={index} className="card">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-slate-900">{model.name}</h3>
                    <span className="text-sm font-medium text-indigo-600">{model.price}</span>
                  </div>
                  <p className="text-slate-600 text-sm">{model.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-large border border-slate-200 p-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">Our Process</h3>
            <div className="space-y-4">
              {[
                { step: 'Discovery', desc: 'Understand your current state and objectives' },
                { step: 'Analysis', desc: 'Deep dive into your infrastructure and processes' },
                { step: 'Recommendations', desc: 'Detailed roadmap with prioritized actions' },
                { step: 'Implementation', desc: 'Hands-on support to execute the plan' },
                { step: 'Optimization', desc: 'Continuous improvement and monitoring' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900">{item.step}</h4>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
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
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-indigo-600">
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
          <h2 className="display-md mb-4">Ready to Accelerate Your AI Journey?</h2>
          <p className="body-lg text-slate-400 max-w-2xl mx-auto mb-8">
            Let's discuss your AI challenges and opportunities. Schedule a free initial consultation.
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