import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-24"
      style={{ background: "var(--color-surface-container-low)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">
              What To Expect
            </h2>

            <p className="text-lg text-[#ddc1b0] leading-relaxed mb-12">
              Hibachi CU brings a private hibachi chef directly to your backyard, patio, vacation
              rental, or Airbnb. We arrive with the grill, ingredients, and cooking setup needed
              to serve your group on-site from start to finish.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-[#ffb786] font-bold tracking-widest text-xs mb-6 flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-[#ffb786]" /> SERVICES PROVIDED
                </h3>
                <ul className="space-y-4">
                  {[
                    "Private hibachi chef",
                    "Portable hibachi grill & cooking setup",
                    "Fresh meats, seafood, vegetables & fried rice",
                    "Live fire show & chef entertainment",
                    "On-site cooking, serving & basic cleanup",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#e9c400] text-sm mt-0.5">check_circle</span>
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-[#ffb786] font-bold tracking-widest text-xs mb-6 flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-[#ffb786]" /> PERFECT FOR
                </h3>
                <ul className="space-y-4">
                  {[
                    "Birthday parties",
                    "Family gatherings",
                    "Backyard parties",
                    "Airbnb / vacation rentals",
                    "Bachelor & bachelorette parties",
                    "Corporate events",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#e9c400] text-sm mt-0.5">check_circle</span>
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Image side */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/gallery20.jpg"
                alt="Hibachi chef performing at private event"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#332a26] rounded-lg p-6 max-w-[280px] hidden lg:block">
              <p className="text-[#ffb786] text-sm italic font-serif">
                &ldquo;The grill is our stage, and you&rsquo;re in the front row.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
