import Script from 'next/script';

interface OrganizationSchemaProps {
  name: string;
  url: string;
  logo: string;
  description: string;
  contactPoint?: {
    telephone: string;
    contactType: string;
    areaServed?: string;
    availableLanguage?: string[];
  };
}

export function OrganizationSchema({ name, url, logo, description, contactPoint }: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": name,
    "url": url,
    "logo": logo,
    "description": description,
    ...(contactPoint && {
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": contactPoint.telephone,
        "contactType": contactPoint.contactType,
        ...(contactPoint.areaServed && { "areaServed": contactPoint.areaServed }),
        ...(contactPoint.availableLanguage && { "availableLanguage": contactPoint.availableLanguage })
      }
    })
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ServiceSchemaProps {
  serviceType: string;
  provider: {
    "@type": string;
    name: string;
    url: string;
  };
  areaServed?: {
    "@type": string;
    name: string;
  };
  offers?: {
    priceSpecification: {
      price: string;
      priceCurrency: string;
    };
  };
}

export function ServiceSchema({ serviceType, provider, areaServed, offers }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceType,
    "provider": provider,
    ...(areaServed && { "areaServed": areaServed }),
    ...(offers && { "offers": offers })
  };

  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ArticleSchemaProps {
  headline: string;
  author: {
    "@type": string;
    name: string;
  };
  publisher: {
    "@type": string;
    name: string;
    logo: string;
  };
  datePublished: string;
  dateModified: string;
  description: string;
}

export function ArticleSchema({ headline, author, publisher, datePublished, dateModified, description }: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "author": author,
    "publisher": publisher,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "description": description
  };

  return (
    <Script
      id="article-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}