import Link from "next/link";

export default function MenuPricing() {
  const menuItems = [
    { name: "Hibachi Chicken", tag: "Signature" },
    { name: "New York Strip Steak", tag: "Premium" },
    { name: "Shrimp Hibachi", tag: "Popular" },
    { name: "Jumbo Shrimp", tag: "Fresh Catch" },
    { name: "Fresh Atlantic Salmon", tag: "Seasonal" },
    { name: "Grilled Winter Lobster Tail", tag: "Luxury Upgrade" },
  ];

  return (
    <section id="menu" className="py-24" style={{ background: "var(--color-surface)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our Menu
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Menu Items */}
          <div className="bg-[#131f38] rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-8">Our Menu</h3>
            <ul className="space-y-5">
              {menuItems.map((item) => (
                <li key={item.name} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{item.name}</span>
                  <span className="text-[#e9c400] text-xs font-bold tracking-wider">{item.tag}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[#ddc1b0]/60 text-xs italic">
              * All entrees served with Fried Rice, Sauteed Vegetables,
              and Our House Dipping Sauces.
            </p>
          </div>

          {/* Pricing Info */}
          <div className="bg-[#131f38] rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-8">Pricing Details</h3>
            <ul className="space-y-5">
              {[
                { icon: "check_circle", text: "Competitive per-person pricing fees." },
                { icon: "check_circle", text: "Minimum guest count applies (10+ guests)." },
                { icon: "check_circle", text: "Travel fees may vary based on your area." },
                { icon: "check_circle", text: "No setup fee." },
                { icon: "check_circle", text: "Deposit required to secure your date." },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#e9c400] text-sm mt-0.5">{item.icon}</span>
                  <span className="text-sm text-[#ddc1b0]">{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/menu"
                className="block text-center bg-gradient-to-br from-[#ffb786] to-[#f58220] text-[#502400] font-bold px-6 py-3 rounded-full text-xs tracking-widest hover:shadow-[0_0_20px_rgba(245,130,32,0.4)] transition-all"
              >
                VIEW LOCAL MENUS & PRICING
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/menu"
            className="inline-block text-[#ffb786] text-sm font-semibold hover:text-[#f58220] transition-all tracking-wide"
          >
            View Full Hibachi Menu →
          </Link>
        </div>
      </div>
    </section>
  );
}
