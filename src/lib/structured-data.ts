import { faqs } from "@/lib/faqs";
import type { MenuCity } from "@/lib/menu-cities";
import type { MenuState } from "@/lib/menu-states";
import { absoluteUrl, siteConfig } from "@/lib/site";

export function homeStructuredData() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      image: absoluteUrl(siteConfig.ogImage),
      telephone: siteConfig.phoneDisplay,
      email: siteConfig.email,
      priceRange: "$$",
      areaServed: siteConfig.serviceAreas,
      servesCuisine: "Japanese Hibachi",
      sameAs: [],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ];
}

export function stateMenuStructuredData(state: MenuState) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Menu",
          item: absoluteUrl("/menu"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: `${state.name} Hibachi Menu`,
          item: absoluteUrl(`/menu/${state.slug}`),
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Private Hibachi Chef Catering",
      name: `${state.name} Hibachi Menu`,
      description: state.metaDescription,
      provider: {
        "@type": "LocalBusiness",
        name: siteConfig.name,
        url: siteConfig.siteUrl,
      },
      areaServed: [state.name, ...state.markets],
      offers: {
        "@type": "Offer",
        price: "50",
        priceCurrency: "USD",
        description: "Starting price per person. Minimum booking applies.",
      },
      url: absoluteUrl(`/menu/${state.slug}`),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: state.localFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];
}

export function cityMenuStructuredData(city: MenuCity) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Menu",
          item: absoluteUrl("/menu"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: `${city.stateName} Hibachi Menu`,
          item: absoluteUrl(`/menu/${city.stateSlug}`),
        },
        {
          "@type": "ListItem",
          position: 4,
          name: `${city.cityName} Hibachi Catering`,
          item: absoluteUrl(city.path),
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Private Hibachi Chef Catering",
      name: `${city.cityName} Hibachi Catering`,
      description: city.metaDescription,
      provider: {
        "@type": "LocalBusiness",
        name: siteConfig.name,
        url: siteConfig.siteUrl,
      },
      areaServed: [city.cityName, city.stateLabel, ...city.nearbyMarkets],
      offers: {
        "@type": "Offer",
        price: "50",
        priceCurrency: "USD",
        description: "Starting price per person. Minimum booking applies.",
      },
      url: absoluteUrl(city.path),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: city.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];
}
