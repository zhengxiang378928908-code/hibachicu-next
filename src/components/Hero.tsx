import Link from "next/link";

import BookNowLink from "@/components/BookNowLink";
import PromotionalOffer from "@/components/PromotionalOffer";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/gallery1.jpg"
          className="w-full h-full object-cover opacity-70"
        >
          <source src="/videos/73_1767297969.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1512] via-[#1a1512]/50 to-black/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#1a1512]/20 to-[#1a1512]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
        <div className="max-w-3xl">
          <span className="inline-block py-1.5 px-5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[#ffb786] text-xs md:text-sm font-bold tracking-widest mb-8 shadow-lg">
            🔥 THE ULTIMATE PRIVATE HIBACHI EXPERIENCE
          </span>

          <PromotionalOffer ctaName="hero_group_offer" className="mb-7" />

          <h1 className="text-6xl md:text-[5.5rem] font-bold leading-[1.1] mb-6 drop-shadow-2xl">
            Mobile Hibachi{" "}
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ffb786] via-[#ffdcb8] to-[#f58220] italic pr-2 drop-shadow-sm">Catering</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 font-light mb-6 max-w-2xl drop-shadow-md leading-relaxed">
            Book a private hibachi chef for your home, backyard, or vacation rental. Live
            cooking, fresh food, and a full at-home hibachi experience for your group.
          </p>

          <p className="text-sm md:text-base text-[#ffb786]/90 mb-12 tracking-wide font-medium bg-black/30 inline-block px-5 py-2.5 rounded-lg backdrop-blur-sm border border-white/10 shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
            ✨ Private Chef · Live Cooking · Backyard Parties · Vacation Rentals
          </p>

          <div className="flex items-center gap-6 mb-10 text-sm text-white/70">
            <span className="flex items-center gap-2"><span className="text-[#ffb786] font-bold text-lg">2000+</span> Events Served</span>
            <span className="w-px h-5 bg-white/20" />
            <span className="flex items-center gap-2"><span className="text-[#ffb786] font-bold text-lg">Est.</span> 2022</span>
            <span className="w-px h-5 bg-white/20" />
            <span className="flex items-center gap-2"><span className="text-[#e9c400]">★★★★★</span> Rated</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <BookNowLink className="btn-primary text-center">BOOK NOW</BookNowLink>
            <Link
              href="/menu"
              className="btn-secondary text-center"
            >
              VIEW MENU
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
