import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const states = [
  {
    region: "New England",
    locations: [
      { name: "Connecticut", href: "/connecticut-hibachi-menu" },
      { name: "Massachusetts", href: "/connecticut-hibachi-menu" },
      { name: "Rhode Island", href: "/connecticut-hibachi-menu" },
      { name: "Vermont", href: "/connecticut-hibachi-menu" },
      { name: "New Hampshire", href: "/connecticut-hibachi-menu" },
    ],
  },
  {
    region: "Mid-Atlantic",
    locations: [
      { name: "New York", href: "/connecticut-hibachi-menu" },
      { name: "New Jersey", href: "/connecticut-hibachi-menu" },
      { name: "Pennsylvania", href: "/connecticut-hibachi-menu" },
      { name: "Delaware", href: "/connecticut-hibachi-menu" },
      { name: "Maryland", href: "/connecticut-hibachi-menu" },
      { name: "Washington D.C.", href: "/connecticut-hibachi-menu" },
    ],
  },
  {
    region: "Southeast",
    locations: [
      { name: "Florida — Miami", href: "/connecticut-hibachi-menu" },
      { name: "Florida — Orlando", href: "/connecticut-hibachi-menu" },
      { name: "Florida — Tampa", href: "/connecticut-hibachi-menu" },
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      <Header />
      <main className="pt-[80px]" style={{ background: "var(--color-dark-bg)" }}>
        {/* Hero */}
        <section className="py-20 px-5 text-center" style={{ background: "linear-gradient(135deg, #0b1214 0%, #15213a 50%, #0e1c21 100%)" }}>
          <div className="max-w-[800px] mx-auto">
            <h1 className="text-[48px] md:text-[56px] text-white mb-6">
              Hibachi Menus & <span className="text-[#fb8f2c]">Pricing by State</span>
            </h1>
            <p className="text-white/75 text-[18px] leading-[1.8] mb-4">
              We offer professional private hibachi chef services with menus and pricing
              that vary by state and location.
            </p>
            <p className="text-white/60 text-[16px] leading-[1.8]">
              Most at-home hibachi parties start at a <span className="text-[#fb8f2c] font-semibold">$500 minimum</span> for
              your home, backyard, Airbnb, or vacation rental, depending on guest count and travel distance.
            </p>
          </div>
        </section>

        {/* State Listings */}
        <section className="py-20 px-5" style={{ background: "var(--color-dark-bg-alt)" }}>
          <div className="max-w-[1000px] mx-auto">
            {states.map((group) => (
              <div key={group.region} className="mb-14">
                <h2 className="text-[32px] text-white mb-8 pb-3 border-b border-white/10">
                  {group.region}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.locations.map((loc) => (
                    <Link
                      key={loc.name}
                      href={loc.href}
                      className="flex items-center gap-3 bg-[#15213a]/50 rounded-lg px-6 py-5 hover:bg-[#15213a] transition-all duration-300 hover:-translate-y-0.5 group"
                    >
                      <span className="text-[#fb8f2c] text-xl">📍</span>
                      <span className="text-white text-[17px] group-hover:text-[#fb8f2c] transition-colors">
                        {loc.name}
                      </span>
                      <span className="ml-auto text-white/30 group-hover:text-[#fb8f2c] transition-colors">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Bar */}
        <section className="py-14 px-5 text-center" style={{ background: "var(--color-dark-bg)" }}>
          <p className="text-white/60 text-[16px] mb-2">Service Hours: Daily 11:00 AM – 10:30 PM</p>
          <p className="text-[#fb8f2c] text-[24px] font-semibold mb-6">
            <a href="tel:9292062056">(929) 206-2056</a>
          </p>
          <a
            href="https://app.acuityscheduling.com/schedule/f65e453b/appointment/88159880/calendar/13406740?appointmentTypeIds%5B%5D=88159880"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            BOOK NOW
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
