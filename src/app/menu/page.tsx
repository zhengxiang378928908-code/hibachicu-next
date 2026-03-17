import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { menuStates } from "@/lib/menu-states";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hibachi Menus & Pricing by State",
  description:
    "Browse hibachi catering menus and starting pricing by state. Explore private hibachi chef service areas for Connecticut, Massachusetts, New York, Florida, and more.",
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    title: "Hibachi Menus & Pricing by State | Hibachi CU",
    description:
      "Browse hibachi catering menus and starting pricing by state for private hibachi chef events, backyard parties, and vacation rentals.",
    url: "/menu",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Hibachi menus and pricing by state",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hibachi Menus & Pricing by State | Hibachi CU",
    description:
      "Browse hibachi catering menus and starting pricing by state for private hibachi chef events, backyard parties, and vacation rentals.",
    images: [siteConfig.ogImage],
  },
};

const statesByRegion = menuStates.reduce<Record<string, typeof menuStates>>((groups, state) => {
  groups[state.region] ??= [];
  groups[state.region].push(state);
  return groups;
}, {});

export default function MenuPage() {
  return (
    <>
      <Header />
      <main className="pt-[80px]" style={{ background: "var(--color-dark-bg)" }}>
        {/* Hero */}
        <section className="py-20 px-5 text-center" style={{ background: "linear-gradient(135deg, #0b1214 0%, #15213a 50%, #0e1c21 100%)" }}>
          <div className="max-w-[800px] mx-auto">
            <h1 className="text-[48px] md:text-[56px] text-white mb-6">
              Hibachi Menus & <span className="text-[#fb8f2c]">Pricing by State</span>
            </h1>
            <p className="text-white/75 text-[18px] leading-[1.8] mb-4">
              We offer professional private hibachi chef services with menus and pricing
              that vary by state and location.
            </p>
            <p className="text-white/60 text-[16px] leading-[1.8]">
              Most at-home hibachi parties start at a <span className="text-[#fb8f2c] font-semibold">$500 minimum</span> for
              your home, backyard, Airbnb, or vacation rental, depending on guest count and travel distance.
            </p>
          </div>
        </section>

        {/* State Listings */}
        <section className="py-20 px-5" style={{ background: "var(--color-dark-bg-alt)" }}>
          <div className="max-w-[1000px] mx-auto">
            {Object.entries(statesByRegion).map(([region, locations]) => (
              <div key={region} className="mb-14">
                <h2 className="text-[32px] text-white mb-8 pb-3 border-b border-white/10">
                  {region}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {locations.map((loc) => (
                    <Link
                      key={loc.name}
                      href={`/menu/${loc.slug}`}
                      className="flex items-center gap-3 bg-[#15213a]/50 rounded-lg px-6 py-5 hover:bg-[#15213a] transition-all duration-300 hover:-translate-y-0.5 group"
                    >
                      <span className="text-[#fb8f2c] text-xl">📍</span>
                      <span className="text-white text-[17px] group-hover:text-[#fb8f2c] transition-colors">
                        {loc.name}
                      </span>
                      <span className="ml-auto text-white/30 group-hover:text-[#fb8f2c] transition-colors">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Bar */}
        <section className="py-14 px-5 text-center" style={{ background: "var(--color-dark-bg)" }}>
          <p className="text-white/60 text-[16px] mb-2">Service Hours: Daily 11:00 AM – 10:30 PM</p>
          <p className="text-[#fb8f2c] text-[24px] font-semibold mb-6">
            <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
          </p>
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            BOOK NOW
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
