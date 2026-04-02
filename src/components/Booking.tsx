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
          <div className="relative group mx-auto max-w-lg mb-10">
            {/* Animated glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#ffb786] via-[#f58220] to-[#ffb786] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-[pulse_3s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
            
            <div className="relative bg-[#131f38]/90 backdrop-blur-md rounded-2xl p-8 border border-[#ffb786]/20 flex flex-col items-center text-center shadow-2xl">
              <span className="material-symbols-outlined text-[#ffb786] text-4xl mb-3" style={{ animation: 'bounce 2s infinite' }}>support_agent</span>
              <p className="text-white/90 text-lg mb-2 font-semibold tracking-wide">
                Have questions or special requests?
              </p>
              <p className="text-[#ffb786]/80 text-sm mb-8 font-medium">
                Call or text us — we reply in minutes.
              </p>
              <a
                href={siteConfig.phoneHref}
                className="btn-primary w-full shadow-[0_0_20px_rgba(245,130,32,0.3)]"
              >
                <span className="material-symbols-outlined text-xl mr-1">call</span>
                {siteConfig.phoneDisplay}
              </a>
            </div>
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
