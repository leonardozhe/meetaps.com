import { Shield, Globe, Zap, Users, Award, Building2, Rocket, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const values = [
  {
    icon: Shield,
    title: 'Trust & Compliance',
    description: 'We prioritize regulatory compliance and transparency in all our operations, ensuring secure and legitimate access to AI resources.'
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'We understand the unique challenges of cross-border technology adoption and provide solutions tailored to diverse markets.'
  },
  {
    icon: Zap,
    title: 'Performance Focus',
    description: 'We deliver measurable results and optimize for performance across all our services and solutions.'
  }
];

const highlights = [
  { label: 'Enterprise Background', value: 'IBM, AWS, Alibaba' },
  { label: 'Project Experience', value: 'Fortune 500 Clients' },
  { label: 'Cross-Border Commerce', value: 'Multiple Years Expertise' }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 border-b border-slate-200">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <span className="label mb-4">About Us</span>
            <h1 className="display-xl text-slate-900 mb-6">
              Bridging China's AI Infrastructure with Global Markets
            </h1>
            <p className="body-lg text-slate-600">
              We help businesses access cutting-edge AI technologies and expand into new markets with enterprise-grade solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="label mb-4">Our Mission</span>
            <h2 className="display-md text-slate-900 mb-6">
              Making AI Infrastructure Accessible Globally
            </h2>
            <p className="body-lg text-slate-600 mb-6">
              At Meetaps, we believe that geography shouldn't be a barrier to accessing cutting-edge AI infrastructure and technology solutions. Our mission is to seamlessly connect global enterprises with China's advanced AI capabilities while ensuring full compliance with international regulations.
            </p>
            <p className="body-lg text-slate-600">
              We specialize in helping businesses scale intelligently across borders, whether that's accessing affordable compute power, expanding e-commerce operations, optimizing for AI search engines, or architecting sustainable AI solutions.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-large border border-slate-200 p-8">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
              <Globe className="w-16 h-16 text-blue-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="label mb-4">Our Values</span>
            <h2 className="display-md text-slate-900">What We Stand For</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-container">
        <div className="text-center mb-12">
          <span className="label mb-4">Our Team</span>
          <h2 className="display-md text-slate-900 mb-4">World-Class Expertise</h2>
          <p className="body-lg text-slate-600 max-w-3xl mx-auto">
            Our core team brings together exceptional talent from world-leading technology companies.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-large border border-slate-200 p-8 lg:p-10 mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">Enterprise Background</h3>
          </div>
          <p className="body-lg text-slate-600 mb-8">
            With alumni from <span className="font-semibold text-blue-600">IBM</span>, <span className="font-semibold text-blue-600">Alibaba Group</span>, and <span className="font-semibold text-blue-600">Amazon Web Services (AWS)</span>, we possess deep expertise in enterprise technology, cloud infrastructure, and cross-border commerce.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{item.value}</p>
                  <p className="text-sm text-slate-500">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white">
        <div className="section-container text-center">
          <h2 className="display-md mb-4">Ready to Work Together?</h2>
          <p className="body-lg text-slate-400 max-w-2xl mx-auto mb-8">
            We're always looking for talented individuals and businesses who share our vision of connecting global enterprises with advanced AI technologies.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-xl transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}