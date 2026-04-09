import type { Metadata } from "next";
import Link from "next/link";

import BookingCompletionTracker from "@/components/BookingCompletionTracker";
import { absoluteUrl, siteConfig } from "@/lib/site";

type BookingConfirmedPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

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

function getParam(
  params: Record<string, string | string[] | undefined>,
  key: string,
) {
  const value = params[key];

  if (Array.isArray(value)) {
    return value[0] ?? "";
  }

  return value ?? "";
}

export default async function BookingConfirmedPage({
  searchParams,
}: BookingConfirmedPageProps) {
  const resolvedSearchParams = await searchParams;
  const payload = {
    appointmentId: getParam(resolvedSearchParams, "appointmentId"),
    value: getParam(resolvedSearchParams, "value"),
    currency: getParam(resolvedSearchParams, "currency") || "USD",
    appointmentType: getParam(resolvedSearchParams, "appointmentType"),
    calendar: getParam(resolvedSearchParams, "calendar"),
    clientDate: getParam(resolvedSearchParams, "clientDate"),
    clientTime: getParam(resolvedSearchParams, "clientTime"),
  };

  return (
    <main className="px-6 py-24">
      <BookingCompletionTracker payload={payload} />

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

        <div className="mt-10 grid gap-4 text-left md:grid-cols-2">
          <div
            className="rounded-2xl px-5 py-4"
            style={{ background: "var(--color-surface-container)" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ffb786]">
              Appointment
            </p>
            <p className="mt-3 text-lg font-semibold">
              {payload.appointmentType || "Private Hibachi Experience"}
            </p>
          </div>

          <div
            className="rounded-2xl px-5 py-4"
            style={{ background: "var(--color-surface-container)" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ffb786]">
              Scheduled For
            </p>
            <p className="mt-3 text-lg font-semibold">
              {[payload.clientDate, payload.clientTime].filter(Boolean).join(" · ") || "Check your confirmation email"}
            </p>
          </div>
        </div>

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
