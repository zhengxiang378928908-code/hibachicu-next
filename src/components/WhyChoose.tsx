export default function WhyChoose() {
  const reasons = [
    {
      icon: "🔥",
      title: "Unforgettable Hibachi Party",
      desc: "Live chef performance, fire show, jokes and interaction that keep guests engaged.",
    },
    {
      icon: "🏠",
      title: "Why Hibachi Works at Home",
      desc: "No restaurant wait, no travel hassle. Enjoy a private dining experience in your own space.",
    },
    {
      icon: "🍽️",
      title: "Fresh & Customizable Menu",
      desc: "Choose from chicken, steak, shrimp, salmon, lobster, and vegetarian options — all cooked to order.",
    },
    {
      icon: "✨",
      title: "Zero Setup, Zero Cleanup",
      desc: "We bring everything and handle the cleanup. All you have to do is enjoy the show and the food.",
    },
  ];

  return (
    <section className="py-20 px-5" style={{ background: "var(--color-dark-bg)" }}>
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[44px] text-white text-center mb-14">
          Why Choose <span className="text-[#fb8f2c]">Hibachi CU</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="bg-[#15213a]/60 rounded-lg p-8 text-center hover:bg-[#15213a] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-5xl mb-5">{r.icon}</div>
              <h3 className="text-[20px] text-white mb-4">{r.title}</h3>
              <p className="text-white/70 text-[15px] leading-[1.7]">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
