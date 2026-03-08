import { inter, jetbrains } from '@/lib/fonts';
import type { Metadata } from 'next';
import '../styles/globals.css';
import ErrorBoundary from '@/components/ErrorBoundary';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://meetaps.com'),
  title: {
    template: '%s | Meetaps — Enterprise AI & Cross-Border Tech Services',
    default: 'Meetaps — Enterprise AI & Cross-Border Tech Services',
  },
  description: 'Meetaps bridges China AI infrastructure with global enterprise needs. Services include AI compute tokens, cross-border e-commerce, GEO optimization, OpenClaw customization, and AI architecture consulting.',
  keywords: ['enterprise AI', 'China AI compute', 'GEO optimization', 'cross-border ecommerce', 'AI consulting', 'AI infrastructure', 'international business', 'AI solutions'],
  authors: [{ name: 'Meetaps Technology Ltd.' }],
  creator: 'Meetaps Technology Ltd.',
  publisher: 'Meetaps Technology Ltd.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://meetaps.com',
    siteName: 'Meetaps',
    title: 'Meetaps — Enterprise AI & Cross-Border Tech Services',
    description: 'Meetaps bridges China AI infrastructure with global enterprise needs. Services include AI compute tokens, cross-border e-commerce, GEO optimization, OpenClaw customization, and AI architecture consulting.',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Meetaps - Enterprise AI & Cross-Border Tech Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meetaps — Enterprise AI & Cross-Border Tech Services',
    description: 'Meetaps bridges China AI infrastructure with global enterprise needs. Services include AI compute tokens, cross-border e-commerce, GEO optimization, OpenClaw customization, and AI architecture consulting.',
    images: ['/twitter-image.png'],
    creator: '@meetaps',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
    yahoo: process.env.NEXT_PUBLIC_YAHOO_SITE_VERIFICATION || '',
    yandex: process.env.NEXT_PUBLIC_YANDEX_SITE_VERIFICATION || '',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable}`}
    >
      <body className="bg-[--color-bg] text-[--color-text-primary] antialiased">
        <ErrorBoundary>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ErrorBoundary>
      </body>
    </html>
  );
}