import { Suspense } from 'react';
import Hero from '@/components/sections/Hero';
import AIPartners from '@/components/sections/AIPartners';
import StatsBar from '@/components/sections/StatsBar';
import ServicesGrid from '@/components/sections/ServicesGrid';
import { OrganizationSchema } from '@/components/ui/StructuredData';

export default function HomePage() {
  return (
    <>
      <OrganizationSchema
        name="Meetaps Media Chengdu Tech Ltd., Co"
        url="https://meetaps.com"
        logo="https://meetaps.com/logo.png"
        description="Enterprise AI & Cross-Border Tech Services. We bridge China AI infrastructure with global enterprise needs. Services include AI compute tokens, cross-border e-commerce, GEO optimization, OpenClaw customization, and AI architecture consulting."
        contactPoint={{
          telephone: "+86-186-2812-9700",
          contactType: "customer service",
          areaServed: "Global",
          availableLanguage: ["English", "Chinese"]
        }}
      />

      <Hero />
      <AIPartners />
      <Suspense fallback={<div>Loading stats...</div>}>
        <StatsBar />
      </Suspense>
      <Suspense fallback={<div>Loading services...</div>}>
        <ServicesGrid />
      </Suspense>
    </>
  );
}