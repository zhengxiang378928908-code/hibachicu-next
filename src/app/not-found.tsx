import Link from "next/link";

import BookNowLink from "@/components/BookNowLink";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function NotFound() {
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
        <section className="mx-auto flex min-h-[calc(100vh-72px)] max-w-4xl flex-col items-center justify-center px-6 py-24 text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#ffb786]">
            Link moved
          </p>
          <h1 className="mb-6 text-4xl font-bold italic md:text-6xl">
            Let&apos;s Get You to the Right Hibachi Page
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-[#ddc1b0] md:text-xl">
            The page you opened may be from an older menu or location link. Our current pricing,
            service areas, and booking options are still available.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/menu" className="btn-primary text-center">
              VIEW MENU
            </Link>
            <BookNowLink className="btn-secondary text-center" ctaName="not_found_book_now">
              BOOK NOW
            </BookNowLink>
            <Link href="/contact" className="btn-secondary text-center">
              CONTACT US
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
