import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

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
                { label: "Home", href: "/" },
                { label: "Locations & Menu", href: "/menu" },
                { label: "Photos & Videos", href: "/#gallery" },
                { label: "FAQ", href: "/#faq" },
                { label: "Contact Us", href: "/#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-[15px] hover:text-[#fb8f2c] transition-colors"
                  >
                    {link.label}
                  </Link>
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
                <a href={siteConfig.phoneHref} className="hover:text-[#fb8f2c] transition-colors">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#fb8f2c]">📧</span>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[#fb8f2c] transition-colors">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-5 py-5 flex flex-col md:flex-row justify-between items-center text-white/40 text-[13px]">
          <p>&copy; {new Date().getFullYear()} Hibachi CU. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
