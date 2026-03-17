export default function Contact() {
  return (
    <section id="contact" className="py-20 px-5" style={{ background: "var(--color-dark-bg)" }}>
      <div className="max-w-[700px] mx-auto text-center">
        <h2 className="text-[44px] text-white mb-4">
          Contact <span className="text-[#fb8f2c]">Us</span>
        </h2>
        <p className="text-white/70 mb-4">
          Ready to book your hibachi experience? Give us a call!
        </p>
        <p className="text-[#fb8f2c] text-[22px] font-semibold mb-10">
          <a href="tel:6462093470">(646) 209-3470</a>
        </p>
        <a
          href="https://app.acuityscheduling.com/schedule/f65e453b/appointment/88159880/calendar/13406740?appointmentTypeIds%5B%5D=88159880"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full md:w-auto text-center"
        >
          BOOK NOW
        </a>
      </div>
    </section>
  );
}
