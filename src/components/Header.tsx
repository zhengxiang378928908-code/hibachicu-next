"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import BookNowLink from "@/components/BookNowLink";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  const navItems = useMemo(
    () => [
    { label: "Home", href: "/" },
    { label: "Locations & Menu", href: "/menu" },
    { label: "Photos & Videos", href: "/#gallery" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact Us", href: "/#contact" },
    ],
    []
  );

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const sectionIds = ["gallery", "faq", "booking", "contact"];

    const updateActiveSection = () => {
      const hash = window.location.hash.replace("#", "");

      if (hash && sectionIds.includes(hash)) {
        setActiveSection(hash);
        return;
      }

      const scrollPosition = window.scrollY + 160;
      let currentSection = "";

      for (const id of sectionIds) {
        const element = document.getElementById(id);

        if (!element) continue;

        if (
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          currentSection = id;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" && activeSection === "";
    }

    if (href === "/menu") {
      return pathname === "/menu" || pathname.startsWith("/menu/");
    }

    if (href.startsWith("/#")) {
      return pathname === "/" && activeSection === href.replace("/#", "");
    }

    return pathname === href;
  };

  const navLinkClass = (href: string) =>
    isActive(href)
      ? "rounded-full border border-[#ffb786]/60 bg-[#ffb786]/14 px-4 py-2 text-[#ffd2ad] shadow-[0_0_0_1px_rgba(255,183,134,0.15),0_10px_30px_rgba(245,130,32,0.14)] transition-colors text-sm tracking-wide font-semibold"
      : "rounded-full px-4 py-2 text-[#ddc1b0] hover:text-[#ffb786] hover:bg-[#ffffff0d] transition-colors text-sm tracking-wide font-medium";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#06132b]/80 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
        <Link href="/" className="block shrink-0 transition-transform duration-300 hover:scale-105">
          <Image
            src="/images/logo.png"
            alt="Hibachi CU"
            width={110}
            height={54}
            priority
            className="object-contain drop-shadow-[0_4px_12px_rgba(245,130,32,0.3)]"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={navLinkClass(item.href)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-6">
          <BookNowLink
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#ffb786] via-[#ffdcb8] to-[#f58220] text-[#3b1900] font-extrabold px-6 py-2.5 rounded-full text-[12px] tracking-[0.15em] shadow-[0_4px_15px_rgba(245,130,32,0.3)] hover:shadow-[0_8px_25px_rgba(245,130,32,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center">
              BOOK NOW
            </span>
          </BookNowLink>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#ffb786] p-2 -mr-2 active:scale-95 transition-transform"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden px-6 pb-6 bg-[#06132b]/95 backdrop-blur-xl">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={
                isActive(item.href)
                  ? "block py-3 text-[#ffd2ad] text-[16px] border-b border-[#29344e]/50 font-semibold bg-[#ffb786]/10 px-3 rounded-lg"
                  : "block py-3 text-[#ddc1b0] text-[16px] border-b border-[#29344e]/50 hover:text-[#ffb786] transition-colors"
              }
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <BookNowLink
            className="mt-4 w-full flex justify-center btn-primary"
            onClick={() => setMenuOpen(false)}
          >
            BOOK NOW
          </BookNowLink>
        </nav>
      )}
    </header>
  );
}
