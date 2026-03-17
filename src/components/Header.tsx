"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Locations & Menu", href: "/menu" },
    { label: "Photos & Videos", href: "/#gallery" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact Us", href: "/#contact" },
  ];

  return (
    <header
      style={{ background: "var(--color-header-bg)" }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="max-w-[1200px] mx-auto px-5 flex items-center justify-between h-[80px]">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Hibachi CU"
            width={107}
            height={52}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white text-[15px] font-medium hover:text-[#fb8f2c] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden px-5 pb-6" style={{ background: "var(--color-header-bg)" }}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block py-3 text-white text-[16px] border-b border-white/10 hover:text-[#fb8f2c] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
