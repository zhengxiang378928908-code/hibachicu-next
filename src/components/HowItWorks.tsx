export default function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Book Online",
      desc: "Fill out our simple booking form with your event details, date, and guest count.",
    },
    {
      num: "2",
      title: "Confirmation Text & Email",
      desc: "You'll receive a confirmation via text and email with all the details of your booking.",
    },
    {
      num: "3",
      title: "Choose Your Menu",
      desc: "Select from our menu options including chicken, steak, shrimp, salmon, lobster, and more.",
    },
    {
      num: "4",
      title: "Receive Your Invoice",
      desc: "We'll send you a detailed invoice based on your menu selections and guest count.",
    },
    {
      num: "5",
      title: "Event Day",
      desc: "Our chef arrives with everything needed — grill, ingredients, and setup. Sit back and enjoy!",
    },
    {
      num: "6",
      title: "Payment",
      desc: "Pay after the service is complete. We accept all major payment methods.",
    },
  ];

  return (
    <section
      className="py-20 px-5"
      style={{ background: "var(--color-dark-bg-alt)" }}
    >
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-[44px] text-white text-center mb-14">
          How It <span className="text-[#fb8f2c]">Works</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="flex gap-5">
              <div className="flex-shrink-0 w-[50px] h-[50px] rounded-full bg-[#fb8f2c] flex items-center justify-center text-white text-[22px] font-bold font-['Libre_Baskerville',serif]">
                {step.num}
              </div>
              <div>
                <h3 className="text-[20px] text-white mb-2">{step.title}</h3>
                <p className="text-white/70 text-[15px] leading-[1.7]">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
