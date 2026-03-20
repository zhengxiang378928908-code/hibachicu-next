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
      <main className="pt-[72px]" style={{ background: "var(--color-surface)" }}>
        {/* Hero */}
        <section
          className="py-24 px-6 text-center"
          style={{ background: "var(--color-surface-container-low)" }}
        >
          <div className="max-w-3xl mx-auto">
            <span className="inline-block py-1 px-4 rounded-full bg-[#29344e] text-[#ffb786] text-xs font-bold tracking-widest mb-6">
              MENUS & PRICING
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hibachi Menus &{" "}
              <span className="text-[#ffb786] italic">Pricing by State</span>
            </h1>
            <p className="text-[#ddc1b0] text-lg leading-relaxed mb-4">
              We offer professional private hibachi chef services with menus and pricing
              that vary by state and location.
            </p>
            <p className="text-[#ddc1b0]/70 text-base leading-relaxed">
              Most at-home hibachi parties start at a{" "}
              <span className="text-[#e9c400] font-semibold">$500 minimum</span> for
              your home, backyard, Airbnb, or vacation rental, depending on guest count and travel distance.
            </p>
          </div>
        </section>

        {/* State Listings */}
        <section className="py-24 px-6" style={{ background: "var(--color-surface)" }}>
          <div className="max-w-5xl mx-auto">
            {Object.entries(statesByRegion).map(([region, locations]) => (
              <div key={region} className="mb-16">
                <h2 className="text-3xl font-bold mb-8 pb-3">
                  {region}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {locations.map((loc) => (
                    <Link
                      key={loc.name}
                      href={`/menu/${loc.slug}`}
                      className="flex items-center gap-3 bg-[#131f38] rounded-lg px-6 py-5 hover:bg-[#1e2a43] transition-all duration-300 group"
                    >
                      <span className="material-symbols-outlined text-[#ffb786] text-xl">location_on</span>
                      <span className="text-base group-hover:text-[#ffb786] transition-colors">
                        {loc.name}
                      </span>
                      <span className="ml-auto text-[#ddc1b0]/30 group-hover:text-[#ffb786] transition-colors">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Bar */}
        <section
          className="py-16 px-6 text-center"
          style={{
            background: "linear-gradient(135deg, #0f1b34 0%, #131f38 50%, #1e2a43 100%)",
          }}
        >
          <p className="text-[#ddc1b0]/60 text-sm mb-2">Service Hours: Daily 11:00 AM – 10:30 PM</p>
          <p className="text-[#ffb786] text-4xl font-bold font-serif mb-8">
            <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
          </p>
          <a href="/#booking" className="btn-primary">
            BOOK NOW
          </a>
          <p className="mt-4 text-xs text-[#ddc1b0]/50">
            Prefer Acuity directly?{" "}
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ffb786] underline underline-offset-2 hover:text-[#f58220]"
            >
              Open in a new tab
            </a>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
