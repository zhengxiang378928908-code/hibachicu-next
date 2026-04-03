import BookNowLink from "@/components/BookNowLink";
import { siteConfig } from "@/lib/site";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24"
      style={{
        background: "linear-gradient(135deg, #261f1c 0%, #332a26 50%, #443833 100%)",
      }}
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold italic mb-6">
          Ready to Book Your Hibachi Party?
        </h2>
        <p className="text-[#ddc1b0] text-lg mb-8">
          Call or text us to check availability, pricing, and travel for your event.
        </p>
        <p className="text-[#ffb786] text-5xl md:text-6xl font-bold mb-10 font-serif">
          <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <BookNowLink className="btn-primary text-center">BOOK NOW</BookNowLink>
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-center"
          >
            OPEN ACUITY
          </a>
        </div>
      </div>
    </section>
  );
}
