"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

import { useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";

import { trackBookingEvent } from "@/lib/analytics";
import {
  buildAcuityBookingUrl,
  persistBookingAttribution,
  persistLastBookingCta,
} from "@/lib/booking-attribution";
import { siteConfig } from "@/lib/site";

type BookNowLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  children: ReactNode;
  ctaName?: string;
};

export default function BookNowLink({
  children,
  onClick,
  ctaName,
  ...props
}: BookNowLinkProps) {
  const pathname = usePathname();
  const search = typeof window === "undefined" ? "" : window.location.search;
  const href = useMemo(() => {
    if (typeof window === "undefined") {
      return siteConfig.bookingUrl;
    }

    return buildAcuityBookingUrl(siteConfig.bookingUrl, {
      pathname,
      search,
      referrer: document.referrer,
    });
  }, [pathname, search]);

  useEffect(() => {
    persistBookingAttribution({
      pathname,
      search: window.location.search,
      referrer: document.referrer,
    });
  }, [pathname]);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (event.defaultPrevented) {
      return;
    }

    persistLastBookingCta(pathname, ctaName);

    if (pathname !== "/") {
      trackBookingEvent("open_acuity", {
        cta_name: ctaName,
        cta_path: pathname,
        target: "same_tab",
      });
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
      trackBookingEvent("open_booking_section", {
        cta_name: ctaName,
        cta_path: pathname,
      });
      return;
    }

    trackBookingEvent("open_acuity", {
      cta_name: ctaName,
      cta_path: pathname,
      target: "same_tab",
    });
  };

  return (
    <a href={href} onClick={handleClick} suppressHydrationWarning {...props}>
      {children}
    </a>
  );
}
