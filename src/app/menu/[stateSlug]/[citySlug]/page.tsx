import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import AcuityLink from "@/components/AcuityLink";
import BookNowLink from "@/components/BookNowLink";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getMenuCity, getMenuCitiesForState, menuCities } from "@/lib/menu-cities";
import { siteConfig } from "@/lib/site";
import { cityMenuStructuredData } from "@/lib/structured-data";

const proteins = ["Chicken", "Shrimp", "Steak", "Salmon", "Tofu & Veggies"];

type CityMenuPageProps = {
  params: Promise<{
    stateSlug: string;
    citySlug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return menuCities.map((city) => ({
    stateSlug: city.stateSlug,
    citySlug: city.citySlug,
  }));
}

export async function generateMetadata({
  params,
}: CityMenuPageProps): Promise<Metadata> {
  const { stateSlug, citySlug } = await params;
  const city = getMenuCity(stateSlug, citySlug);

  if (!city) {
    return {};
  }

  return {
    title: `${city.cityName} Hibachi Catering & Pricing`,
    description: city.metaDescription,
    keywords: city.keywords,
    alternates: {
      canonical: city.path,
    },
    openGraph: {
      title: `${city.cityName} Hibachi Catering & Pricing`,
      description: city.metaDescription,
      url: city.path,
      type: "website",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${city.cityName} hibachi catering`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${city.cityName} Hibachi Catering & Pricing`,
      description: city.metaDescription,
      images: [siteConfig.ogImage],
    },
  };
}

export default async function CityMenuPage({ params }: CityMenuPageProps) {
  const { stateSlug, citySlug } = await params;
  const city = getMenuCity(stateSlug, citySlug);

  if (!city) {
    notFound();
  }

  const relatedMarkets = getMenuCitiesForState(city.stateSlug).filter(
    (relatedCity) => relatedCity.citySlug !== city.citySlug
  );
  const structuredData = cityMenuStructuredData(city);

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
            <div className="mb-5 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#ddc1b0]/55">
              <Link href="/menu" className="hover:text-[#ffb786]">
                Menu
              </Link>
              <span>/</span>
              <Link href={`/menu/${city.stateSlug}`} className="hover:text-[#ffb786]">
                {city.stateName}
              </Link>
              <span>/</span>
              <span className="text-[#ffb786]">{city.cityName}</span>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <span className="mb-6 inline-block rounded-full bg-[#29344e] px-4 py-1 text-xs font-bold tracking-widest text-[#ffb786]">
                  {city.cityName.toUpperCase()} HIBACHI
                </span>
                <h1 className="mb-6 text-5xl font-bold md:text-6xl">
                  {city.cityName} <span className="italic text-[#ffb786]">Hibachi Catering</span>
                </h1>
                <p className="mb-5 max-w-3xl text-lg leading-relaxed text-[#ddc1b0]">
                  {city.overview}
                </p>
                <p className="mb-8 max-w-3xl text-base leading-relaxed text-[#ddc1b0]/70">
                  {city.nearbyCoverage}
                </p>

                <div className="flex flex-wrap gap-3">
                  {city.venues.map((venue) => (
                    <span
                      key={venue}
                      className="rounded-full bg-[#131f38] px-4 py-2 text-sm font-medium text-[#ffd2ad]"
                    >
                      {venue}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {city.photoGallery.slice(0, 2).map((photo) => (
                  <div key={photo.alt} className="overflow-hidden rounded-2xl bg-[#131f38]">
                    <div className="relative aspect-[5/4]">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover"
                        style={{ objectPosition: photo.position ?? "center center" }}
                        sizes="(max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <p className="px-5 py-4 text-sm leading-relaxed text-[#ddc1b0]">
                      {photo.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24" style={{ background: "var(--color-surface)" }}>
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl bg-[#131f38] p-8">
              <h2 className="mb-5 text-3xl font-bold">Why {city.cityName} Hosts Book Hibachi</h2>
              <p className="mb-5 text-sm leading-relaxed text-[#ddc1b0]">{city.hostingFocus}</p>
              <p className="text-sm leading-relaxed text-[#ddc1b0]">{city.planningNote}</p>
            </div>

            <div className="rounded-2xl bg-[#131f38] p-8">
              <h2 className="mb-5 text-3xl font-bold">{city.cityName} Booking Checklist</h2>
              <ul className="space-y-4">
                {city.planningChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined mt-0.5 text-sm text-[#e9c400]">
                      check_circle
                    </span>
                    <span className="text-sm leading-relaxed text-[#ddc1b0]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          className="px-6 py-24"
          style={{ background: "var(--color-surface-container-low)" }}
        >
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold">{city.cityName} Pricing Snapshot</h2>
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
                Protein Choices for {city.cityName} Events
              </h3>
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

            <div className="mb-8 grid gap-6 md:grid-cols-2">
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

            <div className="rounded-2xl bg-[#131f38] p-8">
              <h3 className="mb-4 text-2xl font-bold">Service Areas Near {city.cityName}</h3>
              <p className="mb-6 text-sm leading-relaxed text-[#ddc1b0]">
                We use {city.cityName} as the local landing page, but we often coordinate nearby
                addresses in the same market when timing and property layout are a good fit.
              </p>
              <div className="flex flex-wrap gap-3">
                {city.nearbyMarkets.map((market) => (
                  <span
                    key={market}
                    className="rounded-full bg-[#29344e]/45 px-4 py-2 text-sm text-[#ffd2ad]"
                  >
                    {market}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24" style={{ background: "var(--color-surface)" }}>
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <h2 className="mb-5 text-4xl font-bold">{city.cityName} FAQ</h2>
              <p className="text-base leading-relaxed text-[#ddc1b0]">
                These are the local planning questions we answer most often for {city.cityName}
                hibachi bookings.
              </p>
            </div>

            <div className="space-y-4">
              {city.faqs.map((faq) => (
                <div key={faq.question} className="rounded-2xl bg-[#131f38] p-8">
                  <h3 className="mb-3 text-lg font-bold">{faq.question}</h3>
                  <p className="text-sm leading-relaxed text-[#ddc1b0]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="px-6 py-24"
          style={{ background: "var(--color-surface-container-low)" }}
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="mb-3 text-4xl font-bold">Explore Nearby Markets</h2>
                <p className="max-w-2xl text-base leading-relaxed text-[#ddc1b0]">
                  Explore nearby markets served by the same team across this state cluster.
                </p>
              </div>
              <Link
                href={`/menu/${city.stateSlug}`}
                className="text-sm font-semibold tracking-wide text-[#ffb786] hover:text-[#f58220]"
              >
                Back to {city.stateName} page →
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {relatedMarkets.map((relatedCity) => (
                <Link
                  key={relatedCity.citySlug}
                  href={relatedCity.path}
                  className="rounded-2xl bg-[#131f38] p-6 transition-all duration-300 hover:bg-[#1e2a43]"
                >
                  <p className="mb-2 text-xl font-bold">{relatedCity.cityName}</p>
                  <p className="text-sm leading-relaxed text-[#ddc1b0]">
                    {relatedCity.overview}
                  </p>
                </Link>
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
            Ready to Book in {city.cityName}?
          </h2>
          <p className="mb-2 text-sm text-[#ddc1b0]/60">
            Service Hours: Daily 11:00 AM - 10:30 PM
          </p>
          <p className="mb-10 font-serif text-5xl font-bold text-[#ffb786]">
            <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
          </p>
          <BookNowLink className="btn-primary" ctaName="city_page_book_now">
            BOOK NOW
          </BookNowLink>
          <p className="mt-4 text-xs text-[#ddc1b0]/50">
            Prefer Acuity directly?{" "}
            <AcuityLink
              target="_blank"
              rel="noopener noreferrer"
              ctaName="city_page_open_acuity"
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
