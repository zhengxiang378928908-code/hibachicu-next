import Image from "next/image";

export default function Testimonials() {
  const reviews = [
    {
      name: "Olivia R.",
      location: "Stamford, CT",
      text: "Amazing hibachi at home experience. The chef brought the full hibachi setup, cooked everything fresh, and put on a fun fire show that made the night unforgettable.",
    },
    {
      name: "James T.",
      location: "Greenwich, CT",
      text: "We booked Hibachi CU for a birthday party and it was the highlight of the event. The chef was entertaining, the food was delicious, and our guests loved every moment.",
    },
    {
      name: "Sarah M.",
      location: "Miami, FL",
      text: "Best catering experience we've ever had! The hibachi chef was incredible, the food was amazing, and the whole experience was completely stress-free for our group.",
    },
  ];

  return (
    <section
      className="py-24"
      style={{ background: "var(--color-surface-container-low)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 italic">
          &ldquo;A Night We&rsquo;ll Never Forget&rdquo;
        </h2>
        <p className="text-center text-[#ddc1b0] mb-16 text-lg">
          Real guest reviews from past hibachi events
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-[#131f38] rounded-lg p-8 hover:bg-[#1e2a43] transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-[#e9c400] text-lg">★</span>
                ))}
              </div>
              <p className="text-[#ddc1b0] text-[15px] leading-relaxed mb-8 italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src="/images/google-logo.png"
                  alt="Google"
                  width={20}
                  height={20}
                />
                <div>
                  <p className="text-[#ffb786] font-semibold text-sm">- {review.name}</p>
                  <p className="text-[#ddc1b0]/60 text-xs">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
