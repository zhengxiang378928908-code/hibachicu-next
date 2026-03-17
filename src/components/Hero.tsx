export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center pt-[80px]"
      style={{
        background: "linear-gradient(135deg, #0b1214 0%, #15213a 50%, #0e1c21 100%)",
      }}
    >
      {/* Background video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="/videos/73_1767297969.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 max-w-[900px] mx-auto px-5">
        <h1 className="text-[64px] md:text-[80px] text-white mb-4 leading-[1.1]">
          hibachi <span className="text-[#fb8f2c]">CU</span>
        </h1>

        <h2 className="text-[24px] md:text-[32px] text-white/90 mb-6 font-normal">
          Mobile Hibachi Catering & Private Hibachi Chef at Home
        </h2>

        <p className="text-[18px] text-white/70 mb-4">
          Private Chef · Live Fire Show · Perfect for Parties, Backyards & Vacation Rentals
        </p>

        <p className="text-[20px] text-[#fb8f2c] italic mb-10 font-['Libre_Baskerville',serif]">
          Whenever, Wherever · Ignite the Night!
        </p>

        <a href="https://app.acuityscheduling.com/schedule/f65e453b/appointment/88159880/calendar/13406740?appointmentTypeIds%5B%5D=88159880" target="_blank" rel="noopener noreferrer" className="btn-primary text-[20px] px-12 py-5">
          BOOK NOW
        </a>

        <p className="mt-10 text-white/60 text-[17px] max-w-[600px] mx-auto">
          We bring the grill, fresh ingredients, and full setup — you just enjoy the show!
        </p>
      </div>
    </section>
  );
}
