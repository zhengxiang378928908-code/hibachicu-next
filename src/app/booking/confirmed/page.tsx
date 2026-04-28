import type { Metadata } from "next";
import Link from "next/link";

import BookingConfirmedDetails from "@/components/BookingConfirmedDetails";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Booking Confirmed | Hibachi CU",
  description:
    "Your Hibachi CU booking request has been received. Review your confirmation details and reach out if you need help with timing, address notes, or menu questions.",
  alternates: {
    canonical: absoluteUrl("/booking/confirmed"),
  },
  openGraph: {
    title: "Booking Confirmed | Hibachi CU",
    description:
      "Your Hibachi CU booking request has been received. We will follow up if anything else is needed for your event.",
    url: absoluteUrl("/booking/confirmed"),
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function BookingConfirmedPage() {
  return (
    <main className="px-6 py-24">
      <section
        className="mx-auto max-w-3xl rounded-3xl p-8 text-center md:p-12"
        style={{ background: "var(--color-surface-container-low)" }}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#ffb786]">
          Booking Received
        </p>
        <h1 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
          Your hibachi date is in motion.
        </h1>
        <p className="mt-6 text-base leading-7 text-[#ddc1b0] md:text-lg">
          Your request was submitted through Acuity. Check your inbox for the
          confirmation email, and text us if you want to review headcount,
          travel, or setup details before the event.
        </p>

        <BookingConfirmedDetails />

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a className="btn-primary text-center" href={siteConfig.phoneHref}>
            Call or Text {siteConfig.phoneDisplay}
          </a>
          <Link className="btn-secondary text-center" href="/menu">
            Review Menu & Pricing
          </Link>
        </div>
      </section>
    </main>
  );
}
