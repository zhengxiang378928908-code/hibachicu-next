import AcuityEmbed from "@/components/AcuityEmbed";
import { siteConfig } from "@/lib/site";

export default function Booking() {
  return (
    <section
      id="booking"
      className="scroll-mt-28 py-24"
      style={{ background: "var(--color-surface-container-low)" }}
    >
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-4 rounded-full bg-[#29344e] text-[#ffb786] text-xs font-bold tracking-widest mb-6">
            RESERVE YOUR DATE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Book Your Event
          </h2>
          <p className="text-[#ddc1b0] text-lg mb-8">
            Select a date and time below to reserve your private hibachi experience.
          </p>

          {/* Quick contact option */}
          <div className="bg-[#131f38] rounded-lg p-6 mb-10">
            <p className="text-[#ddc1b0] text-sm mb-4">
              Have questions? Call or text us — we reply in minutes.
            </p>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-3 bg-gradient-to-br from-[#ffb786] to-[#f58220] text-[#502400] font-bold px-8 py-4 rounded-full text-sm tracking-widest hover:shadow-[0_0_20px_rgba(245,130,32,0.4)] transition-all"
            >
              <span className="material-symbols-outlined text-lg">call</span>
              CALL NOW: {siteConfig.phoneDisplay}
            </a>
          </div>

          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-[1px] bg-[#29344e]" />
            <span className="text-[#ddc1b0]/50 text-sm tracking-widest">OR BOOK ONLINE</span>
            <div className="flex-1 h-[1px] bg-[#29344e]" />
          </div>
        </div>

        <AcuityEmbed />
      </div>
    </section>
  );
}
