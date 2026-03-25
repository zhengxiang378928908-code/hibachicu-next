import Link from "next/link";

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
          className="w-full h-full object-cover opacity-40"
        >
          <source src="/videos/73_1767297969.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#06132b] via-[#06132b]/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
        <div className="max-w-3xl">
          <span className="inline-block py-1 px-4 rounded-full bg-[#29344e] text-[#ffb786] text-xs font-bold tracking-widest mb-6">
            ESTABLISHED LUXURY CATERING
          </span>

          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-6">
            Mobile Hibachi{" "}
            <br />
            <span className="text-[#ffb786] italic">Catering</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#ddc1b0] font-light mb-4 max-w-2xl">
            Private Hibachi Chef at Home. Bringing the excitement and
            flavor of a high-end hibachi lounge directly to your backyard or dining room.
          </p>

          <p className="text-lg text-[#ddc1b0]/70 mb-10">
            Private Chef · Live Fire Show · Perfect for Parties, Backyards & Vacation Rentals
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/#booking" className="btn-primary text-center">
              BOOK YOUR EVENT NOW
            </Link>
            <Link
              href="/menu"
              className="btn-secondary text-center"
            >
              VIEW OUR MENU
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
