import Link from 'next/link';
import { ArrowRight, CheckCircle2, Search, Bot, BarChart3, FileText } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/Accordion';

const features = [
  {
    icon: Bot,
    title: 'AI Search Optimization',
    description: 'Optimize for ChatGPT, Claude, Perplexity, and other AI-powered search engines.'
  },
  {
    icon: Search,
    title: 'Traditional SEO',
    description: 'Comprehensive SEO strategies for Google, Bing, Baidu, and other traditional search engines.'
  },
  {
    icon: FileText,
    title: 'Structured Data',
    description: 'Implement Schema.org markup and entity optimization for better AI understanding.'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Monthly performance reports with actionable insights and recommendations.'
  }
];

const aiPlatforms = [
  { name: 'ChatGPT', description: 'OpenAI\'s conversational AI' },
  { name: 'Perplexity', description: 'AI-powered answer engine' },
  { name: 'Claude', description: 'Anthropic\'s AI assistant' },
  { name: 'Google SGE', description: 'Google\'s generative search' }
];

const faqs = [
  {
    question: 'What is GEO (Generative Engine Optimization)?',
    answer: 'GEO is the practice of optimizing your content for AI-powered search engines and answer engines. Unlike traditional SEO which focuses on ranking in search results, GEO focuses on being cited and referenced by AI systems like ChatGPT and Perplexity.'
  },
  {
    question: 'How is GEO different from traditional SEO?',
    answer: 'Traditional SEO optimizes for search engine algorithms that rank pages. GEO optimizes for AI systems that synthesize information to generate answers. It requires different strategies around entity building, structured data, and authority signals.'
  },
  {
    question: 'How long does it take to see results?',
    answer: 'Traditional SEO typically shows results in 3-6 months. GEO is newer and results vary, but most clients see improved AI citations within 2-4 months of implementation.'
  },
  {
    question: 'Do you offer both GEO and traditional SEO?',
    answer: 'Yes, we provide comprehensive optimization services covering both traditional search engines (Google, Bing, Baidu) and AI-powered platforms. Our strategies are designed to work together for maximum visibility.'
  }
];

export default function GEOPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-violet-50/30 to-slate-50 border-b border-slate-200">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-violet-50 text-violet-600 border-violet-200">GEO Optimization</Badge>
              <h1 className="display-xl text-slate-900 mb-6">
                AI-Era Search Visibility
              </h1>
              <p className="body-lg text-slate-600 mb-8">
                Optimize your presence for the next generation of search. Be discovered and cited by ChatGPT, Perplexity, Claude, and other AI-powered platforms your customers use.
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
                  <div className="text-3xl font-bold text-violet-600 mb-1">200%</div>
                  <div className="text-sm text-slate-600">Avg AI Citation Increase</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <div className="text-3xl font-bold text-violet-600 mb-1">4</div>
                  <div className="text-sm text-slate-600">AI Platforms Covered</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <div className="text-3xl font-bold text-violet-600 mb-1">3mo</div>
                  <div className="text-sm text-slate-600">Avg Time to Results</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl">
                  <div className="text-3xl font-bold text-violet-600 mb-1">Monthly</div>
                  <div className="text-sm text-slate-600">Performance Reports</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-container">
        <div className="text-center mb-12">
          <span className="label mb-4">Services</span>
          <h2 className="display-md text-slate-900">Comprehensive Search Optimization</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="card">
              <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4">
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
            <h2 className="display-md text-slate-900 mb-4">AI Platforms We Optimize For</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Your customers are using AI to find answers. Make sure they find you.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiPlatforms.map((platform, index) => (
              <div key={index} className="card text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{platform.name}</h3>
                <p className="text-slate-600 text-sm">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="label mb-4">Process</span>
            <h2 className="display-md text-slate-900 mb-6">Our GEO Methodology</h2>
            <div className="space-y-6">
              {[
                { step: '01', title: 'Audit & Analysis', desc: 'Comprehensive analysis of your current AI visibility and traditional SEO performance.' },
                { step: '02', title: 'Entity Optimization', desc: 'Build and optimize your brand entity across authoritative sources and knowledge graphs.' },
                { step: '03', title: 'Content Strategy', desc: 'Create content optimized for AI citation while maintaining traditional SEO value.' },
                { step: '04', title: 'Monitor & Iterate', desc: 'Track AI citations and search rankings, adjusting strategy based on performance data.' }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-large border border-slate-200 p-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">What's Included</h3>
            <ul className="space-y-4">
              {[
                'AI citation tracking and reporting',
                'Schema.org structured data implementation',
                'Knowledge graph optimization',
                'Entity authority building',
                'Content optimization for AI',
                'Traditional SEO (Google, Bing, Baidu)',
                'Monthly performance reports',
                'Quarterly strategy reviews'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-violet-500 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
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
          <h2 className="display-md mb-4">Ready to Be Found by AI?</h2>
          <p className="body-lg text-slate-400 max-w-2xl mx-auto mb-8">
            Let's discuss how GEO can improve your visibility in the AI-powered search landscape.
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