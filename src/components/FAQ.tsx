import { faqs } from "@/lib/faqs";

export default function FAQ() {
  return (
    <section id="faq" className="py-20 px-5" style={{ background: "var(--color-dark-bg)" }}>
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-[44px] text-white text-center mb-14">
          Frequently Asked <span className="text-[#fb8f2c]">Questions</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="border border-white/10 rounded-lg overflow-hidden bg-[#15213a]/20 group"
            >
              <summary className="flex items-center justify-between px-6 py-5 text-left bg-[#15213a]/40 hover:bg-[#15213a]/70 transition-colors cursor-pointer">
                <span className="text-white text-[17px] font-medium pr-4">{faq.q}</span>
                <span className="text-[#fb8f2c] text-2xl flex-shrink-0 group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <div className="px-6 py-5 bg-[#15213a]/20">
                <p className="text-white/75 text-[15px] leading-[1.8]">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
