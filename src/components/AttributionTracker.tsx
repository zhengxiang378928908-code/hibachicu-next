"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { persistBookingAttribution } from "@/lib/booking-attribution";

export default function AttributionTracker() {
  const pathname = usePathname();

  useEffect(() => {
    persistBookingAttribution({
      pathname,
      search: window.location.search,
      referrer: document.referrer,
    });
  }, [pathname]);

  return null;
}
