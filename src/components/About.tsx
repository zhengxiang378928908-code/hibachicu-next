export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-5"
      style={{ background: "var(--color-dark-bg-alt)" }}
    >
      <div className="max-w-[1000px] mx-auto text-center">
        <h2 className="text-[44px] text-white mb-8">
          What is <span className="text-[#fb8f2c]">Hibachi CU</span>?
        </h2>

        <p className="text-white/85 text-[17px] mb-8 leading-[1.8]">
          Hibachi CU is a mobile hibachi catering service that brings the excitement of
          teppanyaki-style cooking directly to your backyard, patio, vacation rental, or
          Airbnb property. Our skilled chefs arrive with everything needed to create an
          unforgettable dining experience right at your location.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-14 text-left">
          {/* Services Provided */}
          <div>
            <h3 className="text-[28px] text-white mb-6">Services Provided</h3>
            <ul className="space-y-3">
              {[
                "Private hibachi chef",
                "Portable hibachi grill & cooking setup",
                "Fresh meats, seafood, vegetables & fried rice",
                "Live fire show & chef entertainment",
                "On-site cooking, serving & basic cleanup",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/85">
                  <span className="text-[#fb8f2c] text-xl mt-0.5">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Perfect For */}
          <div>
            <h3 className="text-[28px] text-white mb-6">Perfect For</h3>
            <ul className="space-y-3">
              {[
                "Birthday parties",
                "Family gatherings",
                "Backyard dinners",
                "Airbnb / vacation rentals",
                "Bachelor & bachelorette parties",
                "Corporate events",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/85">
                  <span className="text-[#fb8f2c] text-xl mt-0.5">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
