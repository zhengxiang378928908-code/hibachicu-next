"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { siteConfig } from "@/lib/site";

const EMBED_SRC = siteConfig.bookingUrl;

export default function AcuityEmbed() {
  const [loaded, setLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // The Acuity embed.js script auto-resizes iframes with the
    // class "acuity-embed-iframe" once loaded. We mark loaded
    // after the iframe fires its own load event so the skeleton
    // stays visible until content is ready.
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleLoad = () => setLoaded(true);
    iframe.addEventListener("load", handleLoad);
    return () => iframe.removeEventListener("load", handleLoad);
  }, []);

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
        src={EMBED_SRC}
        title="Book your private hibachi event"
        width="100%"
        height="800"
        frameBorder="0"
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
        <a
          href={siteConfig.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#ffb786] underline underline-offset-2 hover:text-[#f58220] transition-colors"
        >
          Open booking in a new tab
        </a>
      </p>
    </div>
  );
}
