import AcuityEmbed from "@/components/AcuityEmbed";

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
          <p className="text-[#ddc1b0] text-lg">
            Select a date and time below to reserve your private hibachi experience.
          </p>
        </div>

        <AcuityEmbed />
      </div>
    </section>
  );
}
