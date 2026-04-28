import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Hibachi CU",
  description:
    "Read how Hibachi CU collects, uses, and protects information submitted through our website, booking links, analytics tools, and customer support channels.",
  alternates: {
    canonical: absoluteUrl("/privacy-policy"),
  },
  openGraph: {
    title: "Privacy Policy | Hibachi CU",
    description:
      "How Hibachi CU handles booking information, contact details, analytics data, and website privacy.",
    url: absoluteUrl("/privacy-policy"),
    siteName: siteConfig.name,
    type: "website",
  },
};

const sections = [
  {
    title: "Information We Collect",
    body: [
      "We may collect information you provide directly, including your name, phone number, email address, event date, event location, guest count, menu preferences, and other details you share when requesting information or booking a private hibachi event.",
      "We may also collect technical information about how visitors use our website, such as pages viewed, device type, browser type, referring pages, approximate location, and interactions with booking or contact links.",
    ],
  },
  {
    title: "How We Use Information",
    body: [
      "We use information to respond to inquiries, confirm availability, manage bookings, plan event service, provide customer support, improve our website, measure advertising performance, and communicate about services or updates related to your request.",
      "We do not sell your personal information. We only use it for business purposes related to Hibachi CU services, website operations, analytics, advertising measurement, and customer communication.",
    ],
  },
  {
    title: "Booking and Third-Party Tools",
    body: [
      "Our booking links may direct you to Acuity Scheduling or other service providers that help us manage appointments and event requests. Information submitted through those tools is handled according to their policies as well as our use of the information for booking and customer service.",
      "Our website may use Google Tag Manager, Google Analytics, advertising pixels, Cloudflare, and similar tools to understand website traffic, protect the site, improve performance, and measure marketing results.",
    ],
  },
  {
    title: "Cookies and Tracking",
    body: [
      "We and our service providers may use cookies, pixels, tags, and similar technologies to keep the website working, analyze traffic, remember preferences, and understand how visitors interact with our pages and ads.",
      "You can adjust cookie settings through your browser. Some features may not work correctly if cookies are disabled.",
    ],
  },
  {
    title: "How We Share Information",
    body: [
      "We may share information with vendors and service providers who help us operate the website, process booking requests, provide analytics, host content, protect the site, or support customer communication.",
      "We may also disclose information if required by law, to protect our rights, to prevent fraud or security issues, or in connection with a business transfer.",
    ],
  },
  {
    title: "Data Security and Retention",
    body: [
      "We use reasonable administrative, technical, and organizational measures to protect information. However, no website, email, or online service can be guaranteed to be completely secure.",
      "We retain information for as long as needed to provide services, manage bookings, maintain business records, resolve disputes, comply with legal obligations, and improve our operations.",
    ],
  },
  {
    title: "Your Choices",
    body: [
      "You may contact us to request access, correction, or deletion of personal information you have provided, subject to legal, operational, and recordkeeping requirements.",
      "You may opt out of marketing communications by contacting us or following any unsubscribe instructions included in a message.",
    ],
  },
  {
    title: "Children's Privacy",
    body: [
      "Our website and services are intended for adults planning private events. We do not knowingly collect personal information from children under 13.",
    ],
  },
  {
    title: "Updates to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised effective date.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="pt-[72px]" style={{ background: "var(--color-surface)" }}>
        <section
          className="px-6 py-20"
          style={{ background: "var(--color-surface-container-low)" }}
        >
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#ffb786]">
              Privacy Policy
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
              How Hibachi CU handles your information.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-[#ddc1b0] md:text-lg">
              This Privacy Policy explains how {siteConfig.name} collects, uses, and shares
              information when you visit our website, contact us, or use our booking links.
            </p>
            <p className="mt-4 text-sm text-[#ddc1b0]/60">
              Effective date: April 25, 2026
            </p>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-4xl space-y-6">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-2xl p-7 md:p-8"
                style={{ background: "var(--color-surface-container-low)" }}
              >
                <h2 className="text-2xl font-bold">{section.title}</h2>
                <div className="mt-4 space-y-4">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-sm leading-7 text-[#ddc1b0] md:text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}

            <article
              className="rounded-2xl p-7 md:p-8"
              style={{ background: "var(--color-surface-container-low)" }}
            >
              <h2 className="text-2xl font-bold">Contact Us</h2>
              <p className="mt-4 text-sm leading-7 text-[#ddc1b0] md:text-base">
                If you have questions about this Privacy Policy or your information, contact
                Hibachi CU by email at{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-[#ffb786] underline underline-offset-4 hover:text-[#f58220]"
                >
                  {siteConfig.email}
                </a>{" "}
                or by phone at{" "}
                <a
                  href={siteConfig.phoneHref}
                  className="text-[#ffb786] underline underline-offset-4 hover:text-[#f58220]"
                >
                  {siteConfig.phoneDisplay}
                </a>
                .
              </p>
              <p className="mt-4 text-sm leading-7 text-[#ddc1b0] md:text-base">
                You can also visit our{" "}
                <Link
                  href="/contact"
                  className="text-[#ffb786] underline underline-offset-4 hover:text-[#f58220]"
                >
                  contact page
                </Link>{" "}
                for booking help or support.
              </p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
