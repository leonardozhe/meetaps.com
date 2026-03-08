import ConsultationForm from '@/components/forms/ConsultationForm';
import Image from 'next/image';
import { Mail, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 border-b border-slate-200">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <span className="label mb-4">Contact Us</span>
            <h1 className="display-xl text-slate-900 mb-6">
              Get in Touch
            </h1>
            <p className="body-lg text-slate-600">
              Have questions about our services? Want to discuss a project? Reach out to us via email or WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-container">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            {/* Email */}
            <div className="card mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Email Us</h3>
                  <p className="text-sm text-slate-500">We'll respond within 24 hours</p>
                </div>
              </div>
              <a
                href="mailto:leon@meetaps.com"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-colors w-full justify-center"
              >
                <Mail className="w-5 h-5" />
                leon@meetaps.com
              </a>
            </div>

            {/* WhatsApp */}
            <div className="card mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">WhatsApp</h3>
                  <p className="text-sm text-slate-500">Quick responses via chat</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 mb-4">
                Scan the QR code to connect with us on WhatsApp for quick responses.
              </p>
              <div className="bg-white p-4 rounded-xl border border-slate-200 inline-block">
                <Image
                  src="/whatsapp.jpg"
                  alt="WhatsApp QR Code"
                  width={160}
                  height={160}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="card">
              <h2 className="text-xl font-semibold text-slate-900 mb-2">Send Us a Message</h2>
              <p className="text-slate-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}