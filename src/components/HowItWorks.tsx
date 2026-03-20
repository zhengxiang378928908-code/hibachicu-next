export default function HowItWorks() {
  const steps = [
    {
      icon: "calendar_today",
      title: "Book Online",
      desc: "Submit your date, time, and headcount via our online booking form.",
    },
    {
      icon: "restaurant_menu",
      title: "Select Your Menu",
      desc: "Choose your proteins, sides, and any premium upgrades — completely customizable.",
    },
    {
      icon: "verified",
      title: "Confirmation",
      desc: "Receive your event itinerary and final details via text and email.",
    },
    {
      icon: "outdoor_grill",
      title: "Chef Arrives",
      desc: "Our chef arrives 30-45 minutes early to set up your private hibachi station.",
    },
    {
      icon: "local_fire_department",
      title: "The Show",
      desc: "Enjoy the spectacular culinary performance, live fire show, and freshly cooked dishes.",
    },
    {
      icon: "payments",
      title: "Payment",
      desc: "Payment expected ready on our secure payment link after the event.",
    },
  ];

  return (
    <section
      className="py-24"
      style={{ background: "var(--color-surface-container-low)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          The Journey to Your Table
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#ffb786] to-[#f58220] flex items-center justify-center">
                <span className="material-symbols-outlined text-[#502400] text-xl">{step.icon}</span>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-[#ddc1b0] text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
