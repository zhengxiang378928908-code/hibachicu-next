"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

import { usePathname } from "next/navigation";

import { siteConfig } from "@/lib/site";

type BookNowLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  children: ReactNode;
};

export default function BookNowLink({
  children,
  onClick,
  ...props
}: BookNowLinkProps) {
  const pathname = usePathname();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (event.defaultPrevented || pathname !== "/") {
      return;
    }

    const bookingSection = document.getElementById("booking");

    if (!bookingSection) {
      return;
    }

    const top = bookingSection.getBoundingClientRect().top;
    const isNearBooking = top >= -140 && top <= 180;

    if (!isNearBooking) {
      event.preventDefault();
      bookingSection.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", "#booking");
    }
  };

  return (
    <a href={siteConfig.bookingUrl} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
