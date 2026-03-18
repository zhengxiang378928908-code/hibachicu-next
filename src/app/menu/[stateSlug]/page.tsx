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
      type: "article",
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
      <main className="pt-[80px]" style={{ background: "var(--color-dark-bg)" }}>
        <section
          className="py-16 px-5"
          style={{ background: "linear-gradient(135deg, #0b1214 0%, #15213a 50%, #0e1c21 100%)" }}
        >
          <div className="max-w-[1100px] mx-auto">
            <h1 className="text-[42px] md:text-[52px] text-white text-center mb-6">
              {state.name} <span className="text-[#fb8f2c]">Hibachi Menu</span>
            </h1>
            <p className="text-center text-white/75 mb-4 text-[17px]">
              Private hibachi chef catering for your home, backyard, Airbnb, or vacation rental.
            </p>
            <p className="text-center text-white/60 mb-12 text-[16px] max-w-[760px] mx-auto leading-[1.8]">
              {state.overview} Popular service areas include {state.markets.join(", ")} and nearby
              communities.
            </p>

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

        <section className="py-20 px-5" style={{ background: "var(--color-dark-bg)" }}>
          <div className="max-w-[1100px] mx-auto">
            <h2 className="text-[36px] text-white text-center mb-12">
              Why {state.name} <span className="text-[#fb8f2c]">Events Book Hibachi</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#15213a]/40 rounded-xl p-7 border border-white/5">
                <h3 className="text-[20px] text-white mb-4">Popular Event Style</h3>
                <p className="text-white/70 text-[15px] leading-[1.8]">{state.eventFocus}</p>
              </div>
              <div className="bg-[#15213a]/40 rounded-xl p-7 border border-white/5">
                <h3 className="text-[20px] text-white mb-4">Local Planning Notes</h3>
                <p className="text-white/70 text-[15px] leading-[1.8]">{state.travelNote}</p>
              </div>
              <div className="bg-[#15213a]/40 rounded-xl p-7 border border-white/5">
                <h3 className="text-[20px] text-white mb-4">Common Service Areas</h3>
                <p className="text-white/70 text-[15px] leading-[1.8]">
                  We regularly serve {state.markets.join(", ")} and nearby neighborhoods for
                  birthdays, family dinners, vacation rentals, and backyard celebrations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-5" style={{ background: "var(--color-dark-bg-alt)" }}>
          <div className="max-w-[900px] mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-[40px] text-white mb-4">
                Standard <span className="text-[#fb8f2c]">Package</span>
              </h2>
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-[56px] text-[#fb8f2c] font-bold font-['Libre_Baskerville',serif]">$50</span>
                <span className="text-white/60 text-[18px]">per person</span>
              </div>
              <p className="text-white/50 text-[15px]">Choose 2 proteins · Minimum booking $500</p>
              <p className="text-white/40 text-[13px] mt-2">Gratuity is not included; travel fees may apply based on distance</p>
            </div>

            <div className="bg-[#15213a]/50 rounded-xl p-8 md:p-10 mb-10">
              <h3 className="text-[24px] text-white mb-6 text-center">
                What&apos;s Included in Every Hibachi Combo
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[
                  { icon: "🥗", label: "Fresh Salad" },
                  { icon: "🥦", label: "Hibachi Vegetables" },
                  { icon: "🍚", label: "Fried Rice" },
                  { icon: "🔥", label: "Live Grill Performance" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <p className="text-white/80 text-[15px]">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#15213a]/50 rounded-xl p-8 md:p-10 mb-10">
              <h3 className="text-[24px] text-white mb-6 text-center">Protein Choices</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {proteins.map((protein) => (
                  <span
                    key={protein}
                    className="bg-[#fb8f2c]/15 border border-[#fb8f2c]/30 rounded-full px-6 py-3 text-white text-[16px]"
                  >
                    {protein}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-[#15213a]/50 rounded-xl p-8 text-center">
                <h3 className="text-[20px] text-white mb-3">Additional Protein</h3>
                <p className="text-[#fb8f2c] text-[32px] font-bold font-['Libre_Baskerville',serif]">+$10</p>
                <p className="text-white/50 text-[14px] mt-2">per person · add 1 more protein</p>
              </div>
              <div className="bg-[#15213a]/50 rounded-xl p-8 text-center">
                <h3 className="text-[20px] text-white mb-3">Kids Menu</h3>
                <p className="text-[#fb8f2c] text-[32px] font-bold font-['Libre_Baskerville',serif]">$25</p>
                <p className="text-white/50 text-[14px] mt-2">per person · ages 12 and under</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-5" style={{ background: "var(--color-dark-bg-alt)" }}>
          <div className="max-w-[700px] mx-auto">
            <h2 className="text-[40px] text-white text-center mb-12">
              <span className="text-[#fb8f2c]">Appetizers</span>
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {appetizers.map((appetizer) => (
                <div
                  key={appetizer.name}
                  className="bg-[#15213a]/50 rounded-xl p-6 flex items-center justify-between"
                >
                  <span className="text-white text-[16px]">{appetizer.name}</span>
                  <span className="text-[#fb8f2c] text-[20px] font-semibold">{appetizer.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-5" style={{ background: "var(--color-dark-bg)" }}>
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-[36px] text-white text-center mb-10">
              {state.name} <span className="text-[#fb8f2c]">Booking Notes</span>
            </h2>
            <div className="space-y-6">
              <div className="bg-[#15213a]/40 rounded-lg p-6">
                <h3 className="text-[18px] text-white mb-3">Dietary Accommodations</h3>
                <p className="text-white/65 text-[15px] leading-[1.8]">
                  Vegetarian options are available, and we can accommodate many allergy-friendly
                  and gluten-free requests when noted ahead of time.
                </p>
              </div>
              <div className="bg-[#15213a]/40 rounded-lg p-6">
                <h3 className="text-[18px] text-white mb-3">Service Coverage</h3>
                <p className="text-white/65 text-[15px] leading-[1.8]">
                  {state.travelNote} We regularly serve {state.markets.join(", ")} and surrounding
                  areas. If your event is outside these markets, contact us for a travel quote.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-5 text-center" style={{ background: "var(--color-dark-bg-alt)" }}>
          <h2 className="text-[36px] text-white mb-4">Ready to Book in {state.name}?</h2>
          <p className="text-white/60 text-[16px] mb-3">Service Hours: Daily 11:00 AM – 10:30 PM</p>
          <p className="text-[#fb8f2c] text-[24px] font-semibold mb-8">
            <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
          </p>
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-[18px] px-12"
          >
            BOOK NOW
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
