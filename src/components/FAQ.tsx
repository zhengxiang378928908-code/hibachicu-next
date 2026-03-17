"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is hibachi at home?",
    a: "Hibachi at home is a private dining experience where a professional hibachi chef comes to your location with a portable grill and all fresh ingredients to cook a teppanyaki-style meal right in front of you and your guests.",
  },
  {
    q: "How many guests do you require?",
    a: "We typically require a minimum guest count to book. Contact us for the minimum in your area and for pricing details based on your party size.",
  },
  {
    q: "What do I need to provide?",
    a: "Just a flat outdoor space (backyard, patio, driveway) with enough room for the grill setup and your guests. We bring everything else — grill, ingredients, utensils, and setup.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Pennsylvania, New York, Vermont, New Hampshire, Massachusetts, Connecticut, Rhode Island, New Jersey, Delaware, Maryland, Washington D.C., and Florida (Miami, Orlando, Tampa, West Palm Beach).",
  },
  {
    q: "How far in advance should I book?",
    a: "We recommend booking at least 1-2 weeks in advance to secure your preferred date, especially during peak season. Last-minute bookings may be available depending on chef availability.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major payment methods. Payment is collected after the service is complete, so you can enjoy your experience worry-free.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-5" style={{ background: "var(--color-dark-bg)" }}>
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-[44px] text-white text-center mb-14">
          Frequently Asked <span className="text-[#fb8f2c]">Questions</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left bg-[#15213a]/40 hover:bg-[#15213a]/70 transition-colors"
              >
                <span className="text-white text-[17px] font-medium pr-4">
                  {faq.q}
                </span>
                <span className="text-[#fb8f2c] text-2xl flex-shrink-0">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <div className="px-6 py-5 bg-[#15213a]/20">
                  <p className="text-white/75 text-[15px] leading-[1.8]">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
