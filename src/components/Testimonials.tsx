import Image from "next/image";

export default function Testimonials() {
  const reviews = [
    {
      name: "Olivia R.",
      text: "Amazing hibachi at home experience. The chef brought the full hibachi setup, cooked everything fresh, and put on a fun fire show that made the night unforgettable.",
    },
    {
      name: "James T.",
      text: "We booked Hibachi CU for a birthday party and it was the highlight of the event. The chef was entertaining, the food was delicious, and our guests loved every moment.",
    },
    {
      name: "Sarah M.",
      text: "Best catering experience we've ever had! The hibachi chef was incredible — great food, amazing entertainment, and zero stress for us. Highly recommend!",
    },
  ];

  return (
    <section
      className="py-20 px-5"
      style={{ background: "var(--color-dark-bg-alt)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[44px] text-white text-center mb-14">
          What Our <span className="text-[#fb8f2c]">Customers</span> Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-[#15213a]/50 rounded-lg p-8 border border-white/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/images/google-logo.png"
                  alt="Google"
                  width={24}
                  height={24}
                />
                <span className="text-[#fb8f2c] text-lg">★★★★★</span>
              </div>
              <p className="text-white/80 text-[16px] leading-[1.8] mb-6 italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="text-white font-semibold text-[16px]">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
