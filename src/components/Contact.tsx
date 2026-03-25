import Link from "next/link";

import { siteConfig } from "@/lib/site";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24"
      style={{
        background: "linear-gradient(135deg, #0f1b34 0%, #131f38 50%, #1e2a43 100%)",
      }}
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold italic mb-6">
          Ready to Ignite the Night?
        </h2>
        <p className="text-[#ddc1b0] text-lg mb-8">
          Our booking specialists are ready to help you plan the perfect private hibachi event.
        </p>
        <p className="text-[#ffb786] text-5xl md:text-6xl font-bold mb-10 font-serif">
          <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/#booking" className="btn-primary text-center">
            BOOK NOW
          </Link>
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-center"
          >
            BOOK ON ACUITY
          </a>
        </div>
      </div>
    </section>
  );
}
