"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We will contact you shortly to confirm your booking.");
  };

  return (
    <section id="contact" className="py-20 px-5" style={{ background: "var(--color-dark-bg)" }}>
      <div className="max-w-[700px] mx-auto">
        <h2 className="text-[44px] text-white text-center mb-4">
          Contact <span className="text-[#fb8f2c]">Us</span>
        </h2>
        <p className="text-center text-white/70 mb-4">
          Ready to book your hibachi experience? Fill out the form below or give us a call!
        </p>
        <p className="text-center text-[#fb8f2c] text-[22px] font-semibold mb-10">
          <a href="tel:6462093470">(646) 209-3470</a>
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full bg-[#15213a]/60 border border-white/10 rounded-lg px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#fb8f2c] transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-[#15213a]/60 border border-white/10 rounded-lg px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#fb8f2c] transition-colors"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full bg-[#15213a]/60 border border-white/10 rounded-lg px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#fb8f2c] transition-colors"
            />
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full bg-[#15213a]/60 border border-white/10 rounded-lg px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#fb8f2c] transition-colors"
            />
          </div>
          <input
            type="number"
            name="guests"
            placeholder="Number of Guests"
            value={form.guests}
            onChange={handleChange}
            className="w-full bg-[#15213a]/60 border border-white/10 rounded-lg px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#fb8f2c] transition-colors"
          />
          <textarea
            name="message"
            placeholder="Tell us about your event..."
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="w-full bg-[#15213a]/60 border border-white/10 rounded-lg px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#fb8f2c] transition-colors resize-none"
          />
          <div className="text-center">
            <a href="https://app.acuityscheduling.com/schedule/f65e453b/appointment/88159880/calendar/13406740?appointmentTypeIds%5B%5D=88159880" target="_blank" rel="noopener noreferrer" className="btn-primary w-full md:w-auto text-center">
              BOOK NOW
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
