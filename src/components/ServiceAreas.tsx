import Image from "next/image";

export default function ServiceAreas() {
  const areas = [
    "Pennsylvania",
    "New York",
    "Vermont",
    "New Hampshire",
    "Massachusetts",
    "Connecticut",
    "Rhode Island",
    "New Jersey",
    "Delaware",
    "Maryland",
    "Washington D.C.",
    "Florida — Miami, Orlando, Tampa, West Palm Beach",
  ];

  return (
    <section
      id="areas"
      className="py-20 px-5"
      style={{ background: "var(--color-dark-bg-alt)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[44px] text-white text-center mb-14">
          Service <span className="text-[#fb8f2c]">Areas</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Map Image */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/images/map.png"
              alt="Service areas map"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Areas List */}
          <div>
            <h3 className="text-[28px] text-white mb-6">We Come to You!</h3>
            <p className="text-white/70 mb-6 leading-[1.8]">
              Hibachi CU provides mobile hibachi catering services across multiple states.
              Check if we serve your area:
            </p>
            <div className="grid grid-cols-2 gap-3">
              {areas.map((area) => (
                <div key={area} className="flex items-center gap-2 text-white/85">
                  <span className="text-[#fb8f2c]">📍</span>
                  <span className="text-[15px]">{area}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a href="https://app.acuityscheduling.com/schedule/f65e453b/appointment/88159880/calendar/13406740?appointmentTypeIds%5B%5D=88159880" target="_blank" rel="noopener noreferrer" className="btn-primary">
                BOOK ONLINE NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
