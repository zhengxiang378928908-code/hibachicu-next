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

type AcuityLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  children: ReactNode;
  ctaName?: string;
};

export default function AcuityLink({
  children,
  onClick,
  ctaName,
  target,
  ...props
}: AcuityLinkProps) {
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
    trackBookingEvent("open_acuity", {
      cta_name: ctaName,
      cta_path: pathname,
      target: target === "_blank" ? "new_tab" : "same_tab",
    });
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      target={target}
      suppressHydrationWarning
      {...props}
    >
      {children}
    </a>
  );
}
