import type { Metadata } from "next";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import HowItWorks from "@/components/HowItWorks";
import MenuPricing from "@/components/MenuPricing";
import ServiceAreas from "@/components/ServiceAreas";
import FAQ from "@/components/FAQ";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site";
import { homeStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: `Book Mobile Hibachi Catering | Top Private Hibachi Chef at Home`,
  description:
    "Book mobile hibachi catering for birthdays, backyard dinners, vacation rentals, and private events. Hibachi CU brings a private hibachi chef, live fire show, and on-site cooking to your home.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} | Mobile Hibachi Catering & Private Hibachi Chef at Home`,
    description:
      "Book mobile hibachi catering for birthdays, backyard dinners, vacation rentals, and private events with a private hibachi chef at home.",
    url: "/",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} mobile hibachi catering`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Mobile Hibachi Catering & Private Hibachi Chef at Home`,
    description:
      "Book mobile hibachi catering for birthdays, backyard dinners, vacation rentals, and private events with a private hibachi chef at home.",
    images: [siteConfig.ogImage],
  },
};

export default function Home() {
  const structuredData = homeStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main>
        <Hero />
        <About />
        <WhyChoose />
        <Testimonials />
        <Gallery />
        <HowItWorks />
        <MenuPricing />
        <ServiceAreas />
        <FAQ />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
