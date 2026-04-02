import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getReviewDestination, hasDirectReviewUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `Leave a Review | ${siteConfig.name}`,
  description:
    "Scan to leave a review for your Hibachi CU experience, or use our review page to find the right Google listing.",
  alternates: {
    canonical: "/reviews",
  },
};

export default function ReviewsPage() {
  if (hasDirectReviewUrl()) {
    redirect(getReviewDestination());
  }

  return (
    <>
      <Header />
      <main
        className="min-h-screen pt-[72px]"
        style={{
          background:
            "radial-gradient(circle at top, rgba(245,130,32,0.18), transparent 35%), linear-gradient(180deg, #06132b 0%, #0f1b34 100%)",
        }}
      >
        <section className="max-w-4xl mx-auto px-6 py-24 text-center">
          <p className="text-[#ffb786] text-xs tracking-[0.35em] uppercase mb-5">
            Review Hub
          </p>
          <h1 className="text-4xl md:text-6xl font-bold italic mb-6">
            Thanks for Dining With Hibachi CU
          </h1>
          <p className="text-[#ddc1b0] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            This QR code used to open our old locations page. We have restored the route and
            routed it here so existing printed QR codes still work while we reconnect the direct
            Google review link.
          </p>

          <div className="grid gap-5 md:grid-cols-2 max-w-3xl mx-auto text-left">
            <a
              href={siteConfig.reviewSearchUrl}
              className="rounded-[28px] border border-[#ffb786]/20 bg-[#131f38]/80 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-transform hover:scale-[1.01]"
            >
              <p className="text-[#ffb786] text-xs tracking-[0.28em] uppercase mb-3">
                Step 1
              </p>
              <h2 className="text-2xl font-bold mb-3">Open Google Results</h2>
              <p className="text-[#ddc1b0]/80 leading-relaxed">
                Search for Hibachi CU reviews on Google and open the correct business listing.
              </p>
            </a>

            <div className="rounded-[28px] border border-[#ffb786]/12 bg-[#101a31]/85 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.22)]">
              <p className="text-[#ffb786] text-xs tracking-[0.28em] uppercase mb-3">
                Step 2
              </p>
              <h2 className="text-2xl font-bold mb-3">Tap Write a Review</h2>
              <p className="text-[#ddc1b0]/80 leading-relaxed">
                Once the business profile opens, tap the review button in Google to leave your
                feedback.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <a href={siteConfig.reviewSearchUrl} className="btn-primary text-center">
              LEAVE A REVIEW
            </a>
            <Link href="/" className="btn-secondary text-center">
              BACK TO HOME
            </Link>
          </div>

          <p className="text-[#ddc1b0]/55 text-sm mt-8">
            To make this QR code jump directly into the review form, set{" "}
            <code>NEXT_PUBLIC_GOOGLE_REVIEW_URL</code> to your exact Google write-review link.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
