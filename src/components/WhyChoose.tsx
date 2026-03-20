import Image from "next/image";

export default function WhyChoose() {
  const reasons = [
    {
      image: "/images/gallery3.jpg",
      title: "Unforgettable Hibachi Party",
      desc: "Live chef performance, fire show, jokes and interaction that keep guests engaged.",
    },
    {
      image: "/images/gallery4.jpg",
      title: "Why Hibachi Works at Home",
      desc: "No restaurant wait, no travel hassle. Enjoy a private dining experience in your own space.",
    },
    {
      image: "/images/gallery5.jpg",
      title: "Fresh & Customizable Menu",
      desc: "Choose from chicken, steak, shrimp, salmon, lobster, and vegetarian options — all cooked to order.",
    },
    {
      image: "/images/gallery6.jpg",
      title: "Zero Setup, Zero Cleanup",
      desc: "We bring everything and handle the cleanup. All you have to do is enjoy the show and the food.",
    },
  ];

  return (
    <section className="py-24" style={{ background: "var(--color-surface)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Why Choose Hibachi CU?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="bg-[#131f38] rounded-lg overflow-hidden hover:bg-[#1e2a43] transition-all duration-300 group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={r.image}
                  alt={r.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-3">{r.title}</h3>
                <p className="text-[#ddc1b0] text-sm leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
