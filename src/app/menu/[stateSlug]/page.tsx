import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getMenuState, menuStates } from "@/lib/menu-states";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { stateMenuStructuredData } from "@/lib/structured-data";

const proteins = ["Chicken", "Shrimp", "Steak", "Salmon", "Tofu & Veggies"];

const appetizers = [
  { name: "Edamame", price: "$8" },
  { name: "Veg Gyoza (6 pcs)", price: "$10" },
  { name: "Pork Gyoza (6 pcs)", price: "$10" },
  { name: "Shrimp Shumai (6 pcs)", price: "$10" },
];

type StateMenuPageProps = {
  params: Promise<{
    stateSlug: string;
  }>;
};

export function generateStaticParams() {
  return menuStates.map((state) => ({
    stateSlug: state.slug,
  }));
}

export async function generateMetadata({
  params,
}: StateMenuPageProps): Promise<Metadata> {
  const { stateSlug } = await params;
  const state = getMenuState(stateSlug);

  if (!state) {
    return {};
  }

  const title = `${state.name} Hibachi Menu & Pricing`;
  const description = state.metaDescription;
  const path = `/menu/${state.slug}`;

  return {
    title,
    description,
    keywords: [
      `${state.name} hibachi menu`,
      `${state.name} hibachi catering`,
      `${state.name} private hibachi chef`,
      "mobile hibachi catering",
      "hibachi at home",
      ...state.markets.map((market) => `${market} hibachi catering`),
    ],
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${state.name} hibachi catering`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
  };
}

export default async function StateMenuPage({ params }: StateMenuPageProps) {
  const { stateSlug } = await params;
  const state = getMenuState(stateSlug);

  if (!state) {
    notFound();
  }

  const structuredData = stateMenuStructuredData(state);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main className="pt-[72px]" style={{ background: "var(--color-surface)" }}>
        {/* Hero */}
        <section
          className="py-20 px-6"
          style={{ background: "var(--color-surface-container-low)" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block py-1 px-4 rounded-full bg-[#29344e] text-[#ffb786] text-xs font-bold tracking-widest mb-6">
                {state.name.toUpperCase()} MENU
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                {state.name}{" "}
                <span className="text-[#ffb786] italic">Hibachi Menu</span>
              </h1>
              <p className="text-[#ddc1b0] text-lg mb-4">
                Private hibachi chef catering for your home, backyard, Airbnb, or vacation rental.
              </p>
              <p className="text-[#ddc1b0]/70 text-base max-w-3xl mx-auto leading-relaxed">
                {state.overview} Popular service areas include {state.markets.join(", ")} and nearby
                communities.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  src: "/images/menu-hibachi-table-1.png",
                  alt: `${state.name} backyard hibachi chef serving food at the grill`,
                  position: "center center",
                },
                {
                  src: "/images/menu-hibachi-table-2.png",
                  alt: `${state.name} private hibachi dinner with chef cooking on the grill`,
                  position: "center center",
                },
                {
                  src: "/images/gallery5.jpg",
                  alt: `${state.name} hibachi fried rice and grill setup outdoors`,
                  position: "center 70%",
                },
                {
                  src: "/images/gallery8.jpg",
                  alt: `${state.name} backyard hibachi grill with food and guests`,
                  position: "center center",
                },
              ].map((img) => (
                <div key={img.alt} className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    style={{ objectPosition: img.position }}
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Book */}
        <section className="py-24 px-6" style={{ background: "var(--color-surface)" }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-14">
              Why {state.name} Events Book Hibachi
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#131f38] rounded-lg p-8 hover:bg-[#1e2a43] transition-all">
                <h3 className="text-lg font-bold mb-4">Popular Event Style</h3>
                <p className="text-[#ddc1b0] text-sm leading-relaxed">{state.eventFocus}</p>
              </div>
              <div className="bg-[#131f38] rounded-lg p-8 hover:bg-[#1e2a43] transition-all">
                <h3 className="text-lg font-bold mb-4">Local Planning Notes</h3>
                <p className="text-[#ddc1b0] text-sm leading-relaxed">{state.travelNote}</p>
              </div>
              <div className="bg-[#131f38] rounded-lg p-8 hover:bg-[#1e2a43] transition-all">
                <h3 className="text-lg font-bold mb-4">Common Service Areas</h3>
                <p className="text-[#ddc1b0] text-sm leading-relaxed">
                  We regularly serve {state.markets.join(", ")} and nearby neighborhoods for
                  birthdays, family dinners, vacation rentals, and backyard celebrations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Standard Package */}
        <section className="py-24 px-6" style={{ background: "var(--color-surface-container-low)" }}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Standard Package
              </h2>
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-6xl text-[#ffb786] font-bold font-serif">$50</span>
                <span className="text-[#ddc1b0]/60 text-lg">per person</span>
              </div>
              <p className="text-[#ddc1b0]/60 text-sm">Choose 2 proteins · Minimum booking $500</p>
              <p className="text-[#ddc1b0]/40 text-xs mt-2">Gratuity is not included; travel fees may apply based on distance</p>
            </div>

            <div className="bg-[#131f38] rounded-lg p-8 md:p-10 mb-8">
              <h3 className="text-2xl font-bold mb-8 text-center">
                What&apos;s Included in Every Hibachi Combo
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { icon: "nutrition", label: "Fresh Salad" },
                  { icon: "eco", label: "Hibachi Vegetables" },
                  { icon: "rice_bowl", label: "Fried Rice" },
                  { icon: "local_fire_department", label: "Live Grill Performance" },
                ].map((item) => (
                  <div key={item.label}>
                    <span className="material-symbols-outlined text-[#e9c400] text-4xl mb-3 block">{item.icon}</span>
                    <p className="text-sm">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#131f38] rounded-lg p-8 md:p-10 mb-8">
              <h3 className="text-2xl font-bold mb-8 text-center">Protein Choices</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {proteins.map((protein) => (
                  <span
                    key={protein}
                    className="bg-[#29344e]/40 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium"
                  >
                    {protein}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#131f38] rounded-lg p-8 text-center">
                <h3 className="text-lg font-bold mb-3">Additional Protein</h3>
                <p className="text-[#ffb786] text-4xl font-bold font-serif">+$10</p>
                <p className="text-[#ddc1b0]/50 text-xs mt-2">per person · add 1 more protein</p>
              </div>
              <div className="bg-[#131f38] rounded-lg p-8 text-center">
                <h3 className="text-lg font-bold mb-3">Kids Menu</h3>
                <p className="text-[#ffb786] text-4xl font-bold font-serif">$25</p>
                <p className="text-[#ddc1b0]/50 text-xs mt-2">per person · ages 12 and under</p>
              </div>
            </div>
          </div>
        </section>

        {/* Appetizers */}
        <section className="py-24 px-6" style={{ background: "var(--color-surface)" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Appetizers
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {appetizers.map((appetizer) => (
                <div
                  key={appetizer.name}
                  className="bg-[#131f38] rounded-lg p-6 flex items-center justify-between"
                >
                  <span className="text-sm font-medium">{appetizer.name}</span>
                  <span className="text-[#e9c400] text-lg font-bold">{appetizer.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Notes */}
        <section className="py-24 px-6" style={{ background: "var(--color-surface-container-low)" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              {state.name} Booking Notes
            </h2>
            <div className="space-y-4">
              <div className="bg-[#131f38] rounded-lg p-8">
                <h3 className="text-lg font-bold mb-3">Dietary Accommodations</h3>
                <p className="text-[#ddc1b0] text-sm leading-relaxed">
                  Vegetarian options are available, and we can accommodate many allergy-friendly
                  and gluten-free requests when noted ahead of time.
                </p>
              </div>
              <div className="bg-[#131f38] rounded-lg p-8">
                <h3 className="text-lg font-bold mb-3">Service Coverage</h3>
                <p className="text-[#ddc1b0] text-sm leading-relaxed">
                  {state.travelNote} We regularly serve {state.markets.join(", ")} and surrounding
                  areas. If your event is outside these markets, contact us for a travel quote.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="py-20 px-6 text-center"
          style={{
            background: "linear-gradient(135deg, #0f1b34 0%, #131f38 50%, #1e2a43 100%)",
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold italic mb-6">
            Ready to Book in {state.name}?
          </h2>
          <p className="text-[#ddc1b0]/60 text-sm mb-2">Service Hours: Daily 11:00 AM – 10:30 PM</p>
          <p className="text-[#ffb786] text-5xl font-bold font-serif mb-10">
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
