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

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16 relative">
          {/* Background glow effects */}
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#f58220]/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#ffb786]/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Menu Items */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-2 transition-transform duration-500">
            <div className="flex items-center gap-3 mb-8">
               <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">Our Menu</h3>
            </div>
            <ul className="space-y-6">
              {menuItems.map((item) => (
                <li key={item.name} className="flex items-center justify-between border-b border-white/5 pb-4 group">
                  <span className="text-base font-medium text-white/90 group-hover:text-white transition-colors">{item.name}</span>
                  <span className="text-[#ffb786] text-xs font-bold tracking-widest bg-[#ffb786]/10 px-3 py-1 rounded-full border border-[#ffb786]/20">{item.tag}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[#ddc1b0]/70 text-sm italic border-l-2 border-[#ffb786]/30 pl-4 leading-relaxed">
              * All entrees served with Fried Rice, Sauteed Vegetables,
              and Our House Dipping Sauces.
            </p>
          </div>

          {/* Pricing Info */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-2 transition-transform duration-500">
            <div className="flex items-center gap-3 mb-8">
               <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">Pricing Details</h3>
            </div>
            <ul className="space-y-6">
              {[
                {
                  icon: "check_circle",
                  text: "Adults $50/person, kids $25/person, extra protein +$10/person.",
                },
                {
                  icon: "check_circle",
                  text: "Most events have a $500 minimum booking before travel fees.",
                },
                {
                  icon: "check_circle",
                  text: "Gratuity is not included; travel fees may apply based on location.",
                },
                { icon: "check_circle", text: "No setup fee." },
                { icon: "check_circle", text: "A deposit is required to secure your date." },
                {
                  icon: "check_circle",
                  text: "The remaining balance is collected after the event.",
                },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-4 group">
                  <div className="min-w-[28px] h-7 rounded-full bg-[#ffb786]/10 flex items-center justify-center mt-0.5 group-hover:bg-[#ffb786]/20 transition-colors border border-[#ffb786]/20">
                    <span className="material-symbols-outlined text-[#ffb786] text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                  </div>
                  <span className="text-base text-white/80 leading-relaxed group-hover:text-white transition-colors">{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 text-center">
              <Link
                href="/menu"
                className="btn-primary w-full"
              >
                VIEW FULL MENU
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/menu"
            className="inline-block text-[#ffb786] text-sm font-semibold hover:text-[#f58220] transition-all tracking-wide"
          >
            View Menu →
          </Link>
        </div>
      </div>
    </section>
  );
}
