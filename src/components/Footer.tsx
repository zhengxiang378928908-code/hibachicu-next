import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-surface-container)" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Hibachi CU"
              width={107}
              height={52}
              className="mb-4 object-contain drop-shadow-[0_4px_12px_rgba(245,130,32,0.3)]"
            />
            <p className="text-[#ddc1b0]/60 text-sm leading-relaxed">
              Private hibachi catering for birthdays, backyard parties, family events, and
              corporate gatherings.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#ffb786] font-bold tracking-widest text-xs mb-6">
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
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
                    className="text-[#ddc1b0]/60 text-sm hover:text-[#ffb786] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[#ffb786] font-bold tracking-widest text-xs mb-6">
              SUPPORT
            </h4>
            <ul className="space-y-3 text-[#ddc1b0]/60 text-sm">
              <li>
                <a href={siteConfig.phoneHref} className="hover:text-[#ffb786] transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">call</span>
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[#ffb786] transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">mail</span>
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-[#ffb786] font-bold tracking-widest text-xs mb-6">
              FOLLOW US
            </h4>
            <p className="text-[#ddc1b0]/60 text-sm leading-relaxed">
              Stay connected for the latest events, behind-the-scenes content, and special offers.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#574843]/50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-3 md:flex-row md:justify-between md:items-center text-[#ddc1b0]/40 text-xs">
          <p>&copy; {new Date().getFullYear()} Hibachi CU. All rights reserved.</p>
          <Link
            href="/privacy-policy"
            className="transition-colors hover:text-[#ffb786]"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
