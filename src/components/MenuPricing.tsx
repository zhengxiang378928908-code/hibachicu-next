export default function MenuPricing() {
  return (
    <section id="menu" className="py-20 px-5" style={{ background: "var(--color-dark-bg)" }}>
      <div className="max-w-[1000px] mx-auto text-center">
        <h2 className="text-[44px] text-white mb-8">
          Menu & <span className="text-[#fb8f2c]">Pricing</span>
        </h2>

        <p className="text-white/80 text-[17px] mb-12 max-w-[700px] mx-auto leading-[1.8]">
          We offer a variety of fresh, high-quality ingredients cooked teppanyaki-style
          right in front of you. Transparent per-person pricing with no hidden fees.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
          {/* Menu Items */}
          <div className="bg-[#15213a]/60 rounded-lg p-8">
            <h3 className="text-[24px] text-white mb-6">Our Menu</h3>
            <ul className="space-y-3 text-white/80">
              {[
                "Fresh fried rice & vegetables",
                "Chicken hibachi",
                "Steak hibachi",
                "Shrimp hibachi",
                "Salmon hibachi",
                "Lobster upgrade available",
                "Kids plates available",
                "Vegetarian options available",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="text-[#fb8f2c]">◆</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing Info */}
          <div className="bg-[#15213a]/60 rounded-lg p-8">
            <h3 className="text-[24px] text-white mb-6">Pricing</h3>
            <ul className="space-y-3 text-white/80">
              {[
                "Per-person pricing",
                "Minimum guest count required",
                "No setup fee",
                "Travel fee may apply based on location",
                "Pay after service is complete",
                "All major payment methods accepted",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="text-[#fb8f2c]">◆</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <a href="/connecticut-hibachi-menu" className="btn-primary">
          Get a Menu & Price Quote
        </a>

        <div className="mt-6">
          <a
            href="/menu"
            className="inline-block text-[#fb8f2c] text-[17px] font-semibold hover:underline transition-all"
          >
            View Full Hibachi Menu →
          </a>
        </div>
      </div>
    </section>
  );
}
