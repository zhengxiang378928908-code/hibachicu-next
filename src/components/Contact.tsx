import { siteConfig } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-5" style={{ background: "var(--color-dark-bg)" }}>
      <div className="max-w-[700px] mx-auto text-center">
        <h2 className="text-[44px] text-white mb-4">
          Contact <span className="text-[#fb8f2c]">Us</span>
        </h2>
        <p className="text-white/70 mb-4">
          Ready to book your hibachi experience? Give us a call!
        </p>
        <p className="text-[#fb8f2c] text-[22px] font-semibold mb-10">
          <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
        </p>
        <a
          href={siteConfig.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full md:w-auto text-center"
        >
          BOOK NOW
        </a>
      </div>
    </section>
  );
}
