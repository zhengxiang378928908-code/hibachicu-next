"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";

import AcuityLink from "@/components/AcuityLink";
import { trackBookingEvent } from "@/lib/analytics";
import { buildAcuityBookingUrl, persistBookingAttribution } from "@/lib/booking-attribution";
import { siteConfig } from "@/lib/site";

export default function AcuityEmbed() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const trackedLoadRef = useRef(false);
  const pathname = usePathname();
  const search = typeof window === "undefined" ? "" : window.location.search;
  const [loadedSrc, setLoadedSrc] = useState("");
  const embedSrc =
    typeof window === "undefined"
      ? siteConfig.bookingUrl
      : buildAcuityBookingUrl(siteConfig.bookingUrl, {
          pathname,
          search,
          referrer: document.referrer,
        });
  const loaded = loadedSrc === embedSrc;

  useEffect(() => {
    persistBookingAttribution({
      pathname,
      search: window.location.search,
      referrer: document.referrer,
    });

    trackedLoadRef.current = false;
  }, [pathname]);

  useEffect(() => {
    // The Acuity embed.js script auto-resizes iframes with the
    // class "acuity-embed-iframe" once loaded. We mark loaded
    // after the iframe fires its own load event so the skeleton
    // stays visible until content is ready.
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleLoad = () => {
      setLoadedSrc(embedSrc);

      if (trackedLoadRef.current) {
        return;
      }

      trackedLoadRef.current = true;
      trackBookingEvent("acuity_embed_load", {
        cta_path: pathname,
      });
    };

    iframe.addEventListener("load", handleLoad);
    return () => iframe.removeEventListener("load", handleLoad);
  }, [embedSrc, pathname]);

  return (
    <div className="relative w-full">
      {!loaded && (
        <div
          className="flex items-center justify-center rounded-lg bg-[#332a26] animate-pulse"
          style={{ minHeight: 680 }}
        >
          <span className="material-symbols-outlined text-[#ffb786]/30 text-5xl animate-spin">
            progress_activity
          </span>
        </div>
      )}

      <iframe
        ref={iframeRef}
        src={embedSrc}
        title="Book your private hibachi event"
        width="100%"
        height="800"
        frameBorder="0"
        suppressHydrationWarning
        className={`acuity-embed-iframe rounded-lg transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0 absolute inset-0"
        }`}
      />

      {/* Acuity's official embed script – handles auto-resize */}
      <Script
        src="https://embed.acuityscheduling.com/js/embed.js"
        strategy="lazyOnload"
      />

      {/* Fallback link */}
      <p className="mt-6 text-center text-[#ddc1b0]/50 text-xs">
        Having trouble?{" "}
        <AcuityLink
          target="_blank"
          rel="noopener noreferrer"
          ctaName="booking_embed_fallback"
          className="text-[#ffb786] underline underline-offset-2 hover:text-[#f58220] transition-colors"
        >
          Open booking in a new tab
        </AcuityLink>
      </p>
    </div>
  );
}
