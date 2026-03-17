import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

const proteins = ["Chicken", "Shrimp", "Steak", "Salmon", "Tofu & Veggies"];

const sushiPlatters = [
  {
    name: "Maki Platter A",
    price: "$110",
    pieces: "51 pcs",
    items: [
      "California Roll (12 pcs)",
      "Shrimp Tempura Roll (5 pcs)",
      "Eel Cucumber Roll (6 pcs)",
      "Tuna Avocado Roll (6 pcs)",
      "Salmon Avocado Roll (6 pcs)",
      "Pink Lady Special Roll (8 pcs)",
      "Volcano Special Roll (8 pcs)",
    ],
  },
  {
    name: "Spicy Maki Platter B",
    price: "$110",
    pieces: "52 pcs",
    items: [
      "Spicy California Roll (12 pcs)",
      "Spicy Kani Roll (12 pcs)",
      "Spicy Tuna Roll (12 pcs)",
      "Spicy Salmon Roll (6 pcs)",
      "Phoenix Special Roll (8 pcs)",
      "Green Dragon Special Roll (8 pcs)",
    ],
  },
  {
    name: "Vegetable Platter C",
    price: "$70",
    pieces: "48 pcs",
    items: [
      "Vegetable Roll (12 pcs)",
      "Avocado Roll (12 pcs)",
      "Cucumber Roll (12 pcs)",
      "Sweet Potato Roll (12 pcs)",
    ],
  },
];

const appetizers = [
  { name: "Edamame", price: "$8" },
  { name: "Veg Gyoza (6 pcs)", price: "$10" },
  { name: "Pork Gyoza (6 pcs)", price: "$10" },
  { name: "Shrimp Shumai (6 pcs)", price: "$10" },
];

export default function ConnecticutMenuPage() {
  return (
    <>
      <Header />
      <main className="pt-[80px]" style={{ background: "var(--color-dark-bg)" }}>
        {/* Hero Images */}
        <section className="py-16 px-5" style={{ background: "linear-gradient(135deg, #0b1214 0%, #15213a 50%, #0e1c21 100%)" }}>
          <div className="max-w-[1100px] mx-auto">
            <h1 className="text-[42px] md:text-[52px] text-white text-center mb-6">
              Connecticut <span className="text-[#fb8f2c]">Hibachi Menu</span>
            </h1>
            <p className="text-center text-white/60 mb-12 text-[17px]">
              Private hibachi chef catering for your home, backyard, Airbnb, or vacation rental
            </p>

            {/* Food Images */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { src: "/images/menu-gyoza.webp", alt: "Hibachi Gyoza" },
                { src: "/images/menu-shumai.webp", alt: "Hibachi Shumai" },
                { src: "/images/menu-combination.webp", alt: "Hibachi Combination" },
                { src: "/images/menu-sushi.webp", alt: "Sushi Platters" },
              ].map((img, i) => (
                <div key={i} className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Standard Package */}
        <section className="py-20 px-5" style={{ background: "var(--color-dark-bg-alt)" }}>
          <div className="max-w-[900px] mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-[40px] text-white mb-4">
                Standard <span className="text-[#fb8f2c]">Package</span>
              </h2>
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-[56px] text-[#fb8f2c] font-bold font-['Libre_Baskerville',serif]">$50</span>
                <span className="text-white/60 text-[18px]">per person</span>
              </div>
              <p className="text-white/50 text-[15px]">Choose 2 proteins · Minimum booking $500</p>
              <p className="text-white/40 text-[13px] mt-2">Gratuity is not included; travel fees may apply based on distance</p>
            </div>

            {/* What's Included */}
            <div className="bg-[#15213a]/50 rounded-xl p-8 md:p-10 mb-10">
              <h3 className="text-[24px] text-white mb-6 text-center">
                What&apos;s Included in Every Hibachi Combo
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[
                  { icon: "🥗", label: "Fresh Salad" },
                  { icon: "🥦", label: "Hibachi Vegetables" },
                  { icon: "🍚", label: "Fried Rice" },
                  { icon: "🔥", label: "Live Grill Performance" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <p className="text-white/80 text-[15px]">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Protein Choices */}
            <div className="bg-[#15213a]/50 rounded-xl p-8 md:p-10 mb-10">
              <h3 className="text-[24px] text-white mb-6 text-center">Protein Choices</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {proteins.map((p) => (
                  <span
                    key={p}
                    className="bg-[#fb8f2c]/15 border border-[#fb8f2c]/30 rounded-full px-6 py-3 text-white text-[16px]"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* Upgrades */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-[#15213a]/50 rounded-xl p-8 text-center">
                <h3 className="text-[20px] text-white mb-3">Additional Protein</h3>
                <p className="text-[#fb8f2c] text-[32px] font-bold font-['Libre_Baskerville',serif]">+$10</p>
                <p className="text-white/50 text-[14px] mt-2">per person · add 1 more protein</p>
              </div>
              <div className="bg-[#15213a]/50 rounded-xl p-8 text-center">
                <h3 className="text-[20px] text-white mb-3">Kids Menu</h3>
                <p className="text-[#fb8f2c] text-[32px] font-bold font-['Libre_Baskerville',serif]">$25</p>
                <p className="text-white/50 text-[14px] mt-2">per person · ages 12 and under</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sushi Platters */}
        <section className="py-20 px-5" style={{ background: "var(--color-dark-bg)" }}>
          <div className="max-w-[1100px] mx-auto">
            <h2 className="text-[40px] text-white text-center mb-4">
              Sushi <span className="text-[#fb8f2c]">Platters</span>
            </h2>
            <p className="text-center text-white/50 text-[15px] mb-14">Add-on options — not included in base dinner</p>

            <div className="grid md:grid-cols-3 gap-8">
              {sushiPlatters.map((platter) => (
                <div
                  key={platter.name}
                  className="bg-[#15213a]/50 rounded-xl p-8 border border-white/5 hover:border-[#fb8f2c]/30 transition-all duration-300"
                >
                  <h3 className="text-[22px] text-white mb-2">{platter.name}</h3>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[#fb8f2c] text-[28px] font-bold font-['Libre_Baskerville',serif]">
                      {platter.price}
                    </span>
                    <span className="text-white/40 text-[14px]">{platter.pieces}</span>
                  </div>
                  <ul className="space-y-2">
                    {platter.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-white/70 text-[14px]">
                        <span className="text-[#fb8f2c] mt-0.5">◆</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Appetizers */}
        <section className="py-20 px-5" style={{ background: "var(--color-dark-bg-alt)" }}>
          <div className="max-w-[700px] mx-auto">
            <h2 className="text-[40px] text-white text-center mb-12">
              <span className="text-[#fb8f2c]">Appetizers</span>
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {appetizers.map((app) => (
                <div
                  key={app.name}
                  className="bg-[#15213a]/50 rounded-xl p-6 flex items-center justify-between"
                >
                  <span className="text-white text-[16px]">{app.name}</span>
                  <span className="text-[#fb8f2c] text-[20px] font-semibold">{app.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-5" style={{ background: "var(--color-dark-bg)" }}>
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-[36px] text-white text-center mb-10">
              Menu <span className="text-[#fb8f2c]">FAQ</span>
            </h2>
            <div className="space-y-6">
              <div className="bg-[#15213a]/40 rounded-lg p-6">
                <h3 className="text-[18px] text-white mb-3">Dietary Accommodations</h3>
                <p className="text-white/65 text-[15px] leading-[1.8]">
                  Vegetarian options available (including tofu and veggies), and we can accommodate
                  many allergy-friendly and gluten-free requests.
                </p>
              </div>
              <div className="bg-[#15213a]/40 rounded-lg p-6">
                <h3 className="text-[18px] text-white mb-3">Are sushi platters included?</h3>
                <p className="text-white/65 text-[15px] leading-[1.8]">
                  Sushi platters are typically offered as an add-on and are not included in the base dinner.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-5 text-center" style={{ background: "var(--color-dark-bg-alt)" }}>
          <h2 className="text-[36px] text-white mb-4">Ready to Book?</h2>
          <p className="text-white/60 text-[16px] mb-3">Service Hours: Daily 11:00 AM – 10:30 PM</p>
          <p className="text-[#fb8f2c] text-[24px] font-semibold mb-8">
            <a href="tel:9292062056">(929) 206-2056</a>
          </p>
          <a
            href="https://app.acuityscheduling.com/schedule/f65e453b/appointment/88159880/calendar/13406740?appointmentTypeIds%5B%5D=88159880"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-[18px] px-12"
          >
            BOOK NOW
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
