import type { Metadata } from "next";
import { siteConfig, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Hibachi CU | Booking Help, Availability & Support",
  description:
    "Contact Hibachi CU for private hibachi booking help, availability, travel questions, and event planning support.",
  alternates: {
    canonical: absoluteUrl("/contact"),
  },
  openGraph: {
    title: "Contact Hibachi CU",
    description:
      "Reach Hibachi CU for booking help, event planning questions, and private hibachi availability.",
    url: absoluteUrl("/contact"),
    siteName: siteConfig.name,
    type: "website",
  },
};

const contactLinks = [
  {
    label: "Call or Text",
    value: siteConfig.phoneDisplay,
    href: siteConfig.phoneHref,
  },
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
];

const supportTopics = [
  "Date availability and booking help",
  "Travel zone and event-location questions",
  "Menu guidance for adults, kids, and upgrades",
  "Outdoor setup, weather, and access planning",
];

export default function ContactPage() {
  return (
    <main className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:px-8 md:pt-28">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#ffb786]">
            Contact Hibachi CU
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
            Booking help, event questions, and quick support.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#ddc1b0] md:text-lg">
            Reach out for availability, travel questions, menu guidance, or
            event planning support. If you are ready to lock in your date, you
            can also book directly online.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              className="btn-primary"
              href={siteConfig.bookingUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              Book Online
            </a>
            <a className="btn-secondary" href={siteConfig.phoneHref}>
              Call or Text
            </a>
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <section
            className="rounded-3xl p-8 md:p-10"
            style={{ background: "var(--color-surface-container-low)" }}
          >
            <h2 className="text-2xl font-semibold">
              How We Can Help
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#ddc1b0]">
              Most guests reach out before booking to confirm service area,
              timing, guest count, or setup details for a backyard, patio,
              driveway, or vacation rental.
            </p>

            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {supportTopics.map((topic) => (
                <li
                  key={topic}
                  className="rounded-2xl px-5 py-4 text-sm leading-6"
                  style={{ background: "var(--color-surface-container)" }}
                >
                  {topic}
                </li>
              ))}
            </ul>

            <div
              className="mt-10 rounded-2xl px-6 py-5"
              style={{ background: "var(--color-surface-container)" }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb786]">
                Service Hours
              </p>
              <p className="mt-3 text-lg font-semibold">
                Daily · 11:00 AM - 10:30 PM
              </p>
              <p className="mt-2 text-sm leading-6 text-[#ddc1b0]">
                We reply fastest by text for date checks, travel questions, and
                last-minute availability.
              </p>
            </div>
          </section>

          <aside
            className="rounded-3xl p-8 md:p-10"
            style={{ background: "var(--color-surface-container-low)" }}
          >
            <h2 className="text-2xl font-semibold">
              Direct Contact
            </h2>

            <div className="mt-8 space-y-5">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  className="block rounded-2xl px-5 py-4 transition-colors hover:bg-[#443833]"
                  style={{ background: "var(--color-surface-container)" }}
                  href={item.href}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ffb786]">
                    {item.label}
                  </p>
                  <p className="mt-2 text-lg font-semibold">
                    {item.value}
                  </p>
                </a>
              ))}
            </div>

            <div
              className="mt-8 rounded-2xl px-5 py-5"
              style={{ background: "var(--color-surface-container)" }}
            >
              <p className="text-sm font-semibold">
                Booking tip
              </p>
              <p className="mt-2 text-sm leading-6 text-[#ddc1b0]">
                Send your event date, city, guest count, and whether the setup
                is for a backyard, patio, driveway, or vacation rental. That
                helps us quote faster and more accurately.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
