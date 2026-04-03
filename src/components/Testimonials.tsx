import Image from "next/image";

import { getReviewDestination } from "@/lib/site";

export default function Testimonials() {
  const reviews = [
    {
      name: "Olivia R.",
      location: "Stamford, CT",
      text: "Amazing hibachi at home experience. The chef brought the full hibachi setup, cooked everything fresh, and put on a fun fire show that made the experience unforgettable.",
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
      style={{ background: "#fdf8f5" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 italic text-[#1a1512]">
          &ldquo;An Experience We&rsquo;ll Never Forget&rdquo;
        </h2>
        <p className="text-center text-[#574843] mb-16 text-lg font-medium">
          Real guest reviews from past hibachi events
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-8 shadow-xl transition-all duration-300 hover:z-10 hover:scale-105 odd:-rotate-1 even:rotate-1 border border-[#e0d5cf]"
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-[#e9c400] text-lg">★</span>
                ))}
              </div>
              <p className="text-[#332a26] text-[15px] leading-relaxed mb-8 italic font-medium">
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
                  <p className="text-[#e64a00] font-bold text-sm">- {review.name}</p>
                  <p className="text-[#574843] text-xs font-semibold">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href={getReviewDestination()} className="btn-primary">
            LEAVE A REVIEW
          </a>
        </div>
      </div>
    </section>
  );
}
