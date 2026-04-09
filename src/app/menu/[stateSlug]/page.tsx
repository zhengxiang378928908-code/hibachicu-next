import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import AcuityLink from "@/components/AcuityLink";
import BookNowLink from "@/components/BookNowLink";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getMenuCitiesForState } from "@/lib/menu-cities";
import { getMenuState, menuStates } from "@/lib/menu-states";
import { siteConfig } from "@/lib/site";
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

export const dynamicParams = false;

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
  const localMarkets = getMenuCitiesForState(state.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main className="pt-[72px]" style={{ background: "var(--color-surface)" }}>
        <section
          className="px-6 py-20"
          style={{ background: "var(--color-surface-container-low)" }}
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-4xl text-center">
              <span className="mb-6 inline-block rounded-full bg-[#29344e] px-4 py-1 text-xs font-bold tracking-widest text-[#ffb786]">
                {state.name.toUpperCase()} MENU
              </span>
              <h1 className="mb-6 text-5xl font-bold md:text-6xl">
                {state.name} <span className="italic text-[#ffb786]">Hibachi Menu</span>
              </h1>
              <p className="mb-4 text-lg text-[#ddc1b0]">
                Private hibachi chef catering for your home, backyard, Airbnb, or vacation rental.
              </p>
              <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#ddc1b0]/70">
                {state.overview} {state.serviceAreaIntro}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {state.photoGallery.map((photo) => (
                <div key={photo.alt} className="overflow-hidden rounded-2xl bg-[#131f38]">
                  <div className="relative aspect-[5/4]">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                      style={{ objectPosition: photo.position ?? "center center" }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <p className="px-5 py-4 text-sm leading-relaxed text-[#ddc1b0]">
                    {photo.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24" style={{ background: "var(--color-surface)" }}>
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <h2 className="mb-5 text-4xl font-bold">Where We Serve in {state.name}</h2>
              <p className="text-base leading-relaxed text-[#ddc1b0]">
                Popular service areas include {state.markets.join(", ")}. Each market books a little
                differently, so we plan around the property style, access, and guest flow instead of
                treating the whole state the same.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {state.serviceAreas.map((area) => {
                const cityPage = localMarkets.find((city) => city.cityName === area.name);

                return (
                  <div key={area.name} className="rounded-2xl bg-[#131f38] p-8">
                    <h3 className="mb-4 text-2xl font-bold">{area.name}</h3>
                    <p className="mb-5 text-sm leading-relaxed text-[#ddc1b0]">
                      {area.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {area.venues.map((venue) => (
                        <span
                          key={venue}
                          className="rounded-full bg-[#29344e]/50 px-3 py-1.5 text-xs font-medium text-[#ffd2ad]"
                        >
                          {venue}
                        </span>
                      ))}
                    </div>
                    {cityPage ? (
                      <Link
                        href={cityPage.path}
                        className="mt-6 inline-block text-sm font-semibold tracking-wide text-[#ffb786] hover:text-[#f58220]"
                      >
                        View {area.name} local page →
                      </Link>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section
          className="px-6 py-24"
          style={{ background: "var(--color-surface-container-low)" }}
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <h2 className="mb-8 text-4xl font-bold">How {state.name} Hosts Usually Plan</h2>
                <div className="grid gap-5 md:grid-cols-3">
                  {state.hostingHighlights.map((highlight) => (
                    <div key={highlight.title} className="rounded-2xl bg-[#131f38] p-7">
                      <h3 className="mb-3 text-lg font-bold">{highlight.title}</h3>
                      <p className="text-sm leading-relaxed text-[#ddc1b0]">
                        {highlight.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-[#131f38] p-8">
                <h2 className="mb-4 text-3xl font-bold">{state.name} Booking Checklist</h2>
                <p className="mb-6 text-sm leading-relaxed text-[#ddc1b0]">
                  {state.eventFocus} {state.travelNote}
                </p>
                <ul className="space-y-4">
                  {state.planningChecklist.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="material-symbols-outlined mt-0.5 text-[#e9c400] text-sm">
                        check_circle
                      </span>
                      <span className="text-sm leading-relaxed text-[#ddc1b0]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          className="px-6 py-24"
          style={{ background: "var(--color-surface)" }}
        >
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold">Standard Package</h2>
              <div className="mb-4 flex items-center justify-center gap-4">
                <span className="font-serif text-6xl font-bold text-[#ffb786]">$50</span>
                <span className="text-lg text-[#ddc1b0]/60">per person</span>
              </div>
              <p className="text-sm text-[#ddc1b0]/60">
                Choose 2 proteins · Most events have a $500 minimum booking
              </p>
              <p className="mt-2 text-xs text-[#ddc1b0]/40">
                If your guest total prices below the minimum, the event is quoted at $500.
                Gratuity is not included; travel fees may apply based on location.
              </p>
            </div>

            <div className="mb-8 rounded-2xl bg-[#131f38] p-8 md:p-10">
              <h3 className="mb-8 text-center text-2xl font-bold">
                What&apos;s Included in Every Hibachi Combo
              </h3>
              <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
                {[
                  { icon: "nutrition", label: "Fresh Salad" },
                  { icon: "eco", label: "Hibachi Vegetables" },
                  { icon: "rice_bowl", label: "Fried Rice" },
                  { icon: "local_fire_department", label: "Live Grill Performance" },
                ].map((item) => (
                  <div key={item.label}>
                    <span className="material-symbols-outlined mb-3 block text-4xl text-[#e9c400]">
                      {item.icon}
                    </span>
                    <p className="text-sm">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8 rounded-2xl bg-[#131f38] p-8 md:p-10">
              <h3 className="mb-8 text-center text-2xl font-bold">Protein Choices</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {proteins.map((protein) => (
                  <span
                    key={protein}
                    className="rounded-full bg-[#29344e]/40 px-6 py-3 text-sm font-medium backdrop-blur-sm"
                  >
                    {protein}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-[#131f38] p-8 text-center">
                <h3 className="mb-3 text-lg font-bold">Additional Protein</h3>
                <p className="font-serif text-4xl font-bold text-[#ffb786]">+$10</p>
                <p className="mt-2 text-xs text-[#ddc1b0]/50">
                  per person · add 1 more protein
                </p>
              </div>
              <div className="rounded-2xl bg-[#131f38] p-8 text-center">
                <h3 className="mb-3 text-lg font-bold">Kids Menu</h3>
                <p className="font-serif text-4xl font-bold text-[#ffb786]">$25</p>
                <p className="mt-2 text-xs text-[#ddc1b0]/50">
                  per person · ages 12 and under
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="px-6 py-24"
          style={{ background: "var(--color-surface-container-low)" }}
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center text-4xl font-bold">Appetizers</h2>
            <div className="grid grid-cols-2 gap-4">
              {appetizers.map((appetizer) => (
                <div
                  key={appetizer.name}
                  className="flex items-center justify-between rounded-2xl bg-[#131f38] p-6"
                >
                  <span className="text-sm font-medium">{appetizer.name}</span>
                  <span className="text-lg font-bold text-[#e9c400]">{appetizer.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24" style={{ background: "var(--color-surface)" }}>
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <h2 className="mb-5 text-4xl font-bold">{state.name} FAQ</h2>
              <p className="text-base leading-relaxed text-[#ddc1b0]">
                These are the planning questions we get most often for {state.name} bookings.
              </p>
            </div>

            <div className="space-y-4">
              {state.localFaqs.map((faq) => (
                <div key={faq.question} className="rounded-2xl bg-[#131f38] p-8">
                  <h3 className="mb-3 text-lg font-bold">{faq.question}</h3>
                  <p className="text-sm leading-relaxed text-[#ddc1b0]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="px-6 py-20 text-center"
          style={{
            background: "linear-gradient(135deg, #0f1b34 0%, #131f38 50%, #1e2a43 100%)",
          }}
        >
          <h2 className="mb-6 text-4xl font-bold italic md:text-5xl">
            Ready to Book in {state.name}?
          </h2>
          <p className="mb-2 text-sm text-[#ddc1b0]/60">
            Service Hours: Daily 11:00 AM - 10:30 PM
          </p>
          <p className="mb-10 font-serif text-5xl font-bold text-[#ffb786]">
            <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
          </p>
          <BookNowLink className="btn-primary" ctaName="state_page_book_now">
            BOOK NOW
          </BookNowLink>
          <p className="mt-4 text-xs text-[#ddc1b0]/50">
            Prefer Acuity directly?{" "}
            <AcuityLink
              target="_blank"
              rel="noopener noreferrer"
              ctaName="state_page_open_acuity"
              className="text-[#ffb786] underline underline-offset-2 hover:text-[#f58220]"
            >
              Open Acuity
            </AcuityLink>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
