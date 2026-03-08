import Link from 'next/link';
import { ArrowRight, Building2, TrendingUp, DollarSign } from 'lucide-react';

const caseStudies = [
  {
    title: 'Global FinTech AI Infrastructure',
    client: 'Series B FinTech Startup',
    industry: 'Financial Services',
    challenge: 'Needed access to Chinese GPU infrastructure for model training at scale.',
    solution: 'Deployed AI compute token solution with full compliance documentation.',
    results: [
      { label: 'Cost Savings', value: '60%' },
      { label: 'Training Speed', value: '3x faster' },
      { label: 'Compliance', value: 'Full' }
    ]
  },
  {
    title: 'Cross-Border E-Commerce Expansion',
    client: 'US Consumer Brand',
    industry: 'Retail',
    challenge: 'Wanted to enter China market without setting up local entity.',
    solution: 'Built headless commerce platform with WeChat mini-program and Tmall integration.',
    results: [
      { label: 'Revenue', value: '$2M+' },
      { label: 'Market Entry', value: '3 months' },
      { label: 'Channels', value: '5 platforms' }
    ]
  },
  {
    title: 'AI Visibility Optimization',
    client: 'Enterprise SaaS Company',
    industry: 'Technology',
    challenge: 'Not being cited by AI search engines despite strong traditional SEO.',
    solution: 'Implemented comprehensive GEO strategy with entity optimization.',
    results: [
      { label: 'AI Citations', value: '+200%' },
      { label: 'Traffic', value: '+45%' },
      { label: 'Leads', value: '+30%' }
    ]
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 border-b border-slate-200">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <span className="label mb-4">Case Studies</span>
            <h1 className="display-xl text-slate-900 mb-6">
              Success Stories
            </h1>
            <p className="body-lg text-slate-600">
              See how we've helped businesses scale with AI infrastructure and cross-border solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-container">
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="card hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                    <Building2 className="w-4 h-4" />
                    {study.industry}
                  </div>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-2">{study.title}</h2>
                  <p className="text-slate-600 mb-4">{study.client}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-medium text-slate-900 mb-1">Challenge</h3>
                      <p className="text-slate-600 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900 mb-1">Solution</h3>
                      <p className="text-slate-600 text-sm">{study.solution}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-50 rounded-xl p-6">
                  <h3 className="font-semibold text-slate-900 mb-4">Results</h3>
                  <div className="space-y-4">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-slate-600 text-sm">{result.label}</span>
                        <span className="font-bold text-blue-600">{result.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white">
        <div className="section-container text-center">
          <h2 className="display-md mb-4">Ready to Write Your Success Story?</h2>
          <p className="body-lg text-slate-400 max-w-2xl mx-auto mb-8">
            Let's discuss how we can help your business achieve similar results.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-xl transition-colors"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}