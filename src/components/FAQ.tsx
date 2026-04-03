import { faqs } from "@/lib/faqs";

export default function FAQ() {
  return (
    <section id="faq" className="py-24" style={{ background: "var(--color-surface)" }}>
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="rounded-lg overflow-hidden bg-[#332a26] group"
            >
              <summary className="flex items-center justify-between px-6 py-5 text-left hover:bg-[#443833] transition-colors cursor-pointer">
                <span className="text-[15px] font-medium pr-4">{faq.q}</span>
                <span className="material-symbols-outlined text-[#ffb786] text-xl flex-shrink-0 group-open:rotate-180 transition-transform duration-300">
                  expand_more
                </span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-[#ddc1b0] text-sm leading-relaxed">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
