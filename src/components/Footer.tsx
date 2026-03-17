import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-header-bg)" }}>
      <div className="max-w-[1200px] mx-auto px-5 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Hibachi CU"
              width={107}
              height={52}
              className="mb-4 rounded-lg shadow-[0_0_12px_rgba(251,143,44,0.25)]"
            />
            <p className="text-white/60 text-[14px] leading-[1.8]">
              Mobile Hibachi Catering & Private Hibachi Chef at Home.
              We bring the grill, fresh ingredients, and full setup — you just enjoy the show!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-[18px] mb-5 font-['Libre_Baskerville',serif]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "#hero" },
                { label: "Locations & Menu", href: "#menu" },
                { label: "Photos & Videos", href: "#gallery" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact Us", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 text-[15px] hover:text-[#fb8f2c] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-[18px] mb-5 font-['Libre_Baskerville',serif]">
              Contact Us
            </h4>
            <ul className="space-y-3 text-white/60 text-[15px]">
              <li className="flex items-center gap-2">
                <span className="text-[#fb8f2c]">📞</span>
                <a href="tel:6462093470" className="hover:text-[#fb8f2c] transition-colors">
                  (646) 209-3470
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#fb8f2c]">📧</span>
                <a href="mailto:www.hibachicu@gmail.com" className="hover:text-[#fb8f2c] transition-colors">
                  www.hibachicu@gmail.com
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              {["Facebook", "Instagram", "TikTok"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-[#fb8f2c] hover:text-white transition-all"
                  aria-label={social}
                >
                  {social === "Facebook" && "f"}
                  {social === "Instagram" && "ig"}
                  {social === "TikTok" && "tk"}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-5 py-5 flex flex-col md:flex-row justify-between items-center text-white/40 text-[13px]">
          <p>&copy; {new Date().getFullYear()} Hibachi CU. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link href="#" className="hover:text-[#fb8f2c] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#fb8f2c] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
