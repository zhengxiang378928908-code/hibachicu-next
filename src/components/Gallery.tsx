"use client";

import { useRef, useState, useEffect, useCallback, type TouchEvent } from "react";
import Image from "next/image";

type MediaItem =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; title: string };

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [posters, setPosters] = useState<Map<number, string>>(new Map());
  const dialogRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const items: MediaItem[] = [
    { type: "video", src: "/videos/62_1767297847.mp4", title: "Fire Performance" },
    { type: "image", src: "/images/gallery1.jpg", alt: "mobile hibachi chef performing at a private event" },
    { type: "image", src: "/images/gallery2.jpg", alt: "hibachi catering guests seated around the grill at home" },
    { type: "video", src: "/videos/69_1767297925.mp4", title: "Flame Show" },
    { type: "image", src: "/images/gallery3.jpg", alt: "outdoor hibachi dinner setup for a backyard party" },
    { type: "video", src: "/videos/60_1767297804.mp4", title: "Hibachi Grill Show" },
    { type: "image", src: "/images/gallery4.jpg", alt: "family photo at a backyard hibachi catering event" },
    { type: "image", src: "/images/gallery5.jpg", alt: "fried rice cooking on an outdoor hibachi grill" },
    { type: "video", src: "/videos/72_1767297956.mp4", title: "Chef Performance" },
    { type: "image", src: "/images/gallery6.jpg", alt: "guest enjoying a private hibachi chef experience outdoors" },
    { type: "video", src: "/videos/64_1767297875.mp4", title: "Backyard Party" },
    { type: "image", src: "/images/gallery7.jpg", alt: "group celebration during a mobile hibachi party" },
    { type: "image", src: "/images/gallery8.jpg", alt: "backyard hibachi setup with grill cart and guests" },
    { type: "video", src: "/videos/67_1767297908.mp4", title: "Hibachi Experience" },
    { type: "image", src: "/images/gallery9.jpg", alt: "indoor hibachi catering setup with guests at the table" },
    { type: "video", src: "/videos/63_1767297857.mp4", title: "Chef in Action" },
    { type: "image", src: "/images/gallery10.jpg", alt: "birthday hibachi party with fried rice cooking on the grill" },
    { type: "video", src: "/videos/85_1767318146.mp4", title: "Outdoor Hibachi" },
    { type: "image", src: "/images/gallery11.jpg", alt: "outdoor birthday hibachi celebration in a backyard" },
    { type: "video", src: "/videos/61_1767297827.mp4", title: "Live Cooking" },
    { type: "video", src: "/videos/68_1767297918.mp4", title: "Grill Highlights" },
    { type: "video", src: "/videos/71_1767297938.mp4", title: "Party Moments" },
    { type: "video", src: "/videos/83_1767318121.mp4", title: "Private Event" },
    { type: "video", src: "/videos/73_1767297969.mp4", title: "Hibachi Fun" },
  ];

  // Generate poster thumbnails from video first frame
  const generatePoster = useCallback((idx: number, src: string) => {
    const video = document.createElement("video");
    video.crossOrigin = "anonymous";
    video.muted = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.src = src + "#t=0.5";

    video.addEventListener("loadeddata", () => {
      video.currentTime = 0.5;
    });

    video.addEventListener("seeked", () => {
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(video, 0, 0);
        const dataUrl = canvas.toDataURL("image/jpeg", 0.7);
        setPosters((prev) => new Map(prev).set(idx, dataUrl));
      }
      video.remove();
    });
  }, []);

  useEffect(() => {
    items.forEach((item, i) => {
      if (item.type === "video") {
        generatePoster(i, item.src);
      }
    });
    // Run once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedIdx(null);
  }, []);

  const showPrev = useCallback(() => {
    setSelectedIdx((current) => {
      if (current === null) return current;
      return current === 0 ? items.length - 1 : current - 1;
    });
  }, [items.length]);

  const showNext = useCallback(() => {
    setSelectedIdx((current) => {
      if (current === null) return current;
      return current === items.length - 1 ? 0 : current + 1;
    });
  }, [items.length]);

  useEffect(() => {
    if (selectedIdx === null) {
      document.body.style.removeProperty("overflow");
      return;
    }

    dialogRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      } else if (event.key === "ArrowLeft") {
        showPrev();
      } else if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeLightbox, selectedIdx, showNext, showPrev]);

  const selectedItem = selectedIdx === null ? null : items[selectedIdx];
  const selectedPosition = selectedIdx === null ? null : selectedIdx + 1;

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (!touchStartRef.current) {
      return;
    }

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;

    touchStartRef.current = null;

    if (Math.abs(deltaX) > 60 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 0) {
        showPrev();
      } else {
        showNext();
      }
      return;
    }

    if (deltaY > 90 && Math.abs(deltaY) > Math.abs(deltaX)) {
      closeLightbox();
    }
  };

  return (
    <section id="gallery" className="py-24" style={{ background: "var(--color-surface)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          Photos & Videos
        </h2>

        <p className="text-center text-[#ddc1b0] mb-12 text-lg">
          See past hibachi parties, chef performances, and at-home event setups.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-auto">
          {items.map((item, i) =>
            item.type === "video" ? (
              <button
                key={i}
                type="button"
                className="relative aspect-[9/16] overflow-hidden rounded-lg bg-[#131f38] row-span-2 cursor-pointer group text-left"
                onClick={() => setSelectedIdx(i)}
                aria-label={`Open video: ${item.title}`}
              >
                <video
                  src={item.src}
                  preload="metadata"
                  poster={posters.get(i) || undefined}
                  className="w-full h-full object-cover"
                  playsInline
                  muted
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                  <span className="text-sm font-medium text-white/90">{item.title}</span>
                </div>
              </button>
            ) : (
              <button
                key={i}
                type="button"
                className="relative aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer"
                onClick={() => setSelectedIdx(i)}
                aria-label={`Open image: ${item.alt}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
              </button>
            )
          )}
        </div>

        {selectedItem ? (
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={
              selectedItem.type === "video" ? selectedItem.title : selectedItem.alt
            }
            tabIndex={-1}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020814]/92 px-4 py-8"
            onClick={closeLightbox}
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center justify-between px-4 pb-3 pt-4 md:px-6">
              <p className="pointer-events-auto rounded-full bg-[#ffffff12] px-4 py-2 text-sm font-semibold text-[#f5dcc8] shadow-[0_12px_30px_rgba(0,0,0,0.22)]">
                {selectedPosition} / {items.length}
              </p>
              <button
                type="button"
                className="pointer-events-auto rounded-full bg-[#ffffff16] px-4 py-3 text-sm font-semibold tracking-wide text-white shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition-colors hover:bg-[#ffffff24]"
                onClick={closeLightbox}
                aria-label="Close gallery preview"
              >
                CLOSE
              </button>
            </div>

            <button
              type="button"
              className="absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/12 p-3 text-white transition-colors hover:bg-white/20 md:left-6 md:block"
              onClick={(event) => {
                event.stopPropagation();
                showPrev();
              }}
              aria-label="Previous media"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div
              className="relative w-full max-w-5xl"
              onClick={(event) => event.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="overflow-hidden rounded-2xl bg-[#0b1323] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                {selectedItem.type === "video" ? (
                  <video
                    key={selectedItem.src}
                    src={selectedItem.src}
                    poster={selectedIdx === null ? undefined : posters.get(selectedIdx)}
                    className="max-h-[80vh] w-full bg-black object-contain"
                    controls
                    autoPlay
                    playsInline
                  />
                ) : (
                  <button
                    type="button"
                    className="relative block h-[80vh] w-full cursor-zoom-out"
                    onClick={closeLightbox}
                    aria-label="Close image preview"
                  >
                    <Image
                      src={selectedItem.src}
                      alt={selectedItem.alt}
                      fill
                      className="object-contain"
                      sizes="100vw"
                      priority
                    />
                  </button>
                )}
              </div>

              <div className="mt-4 flex items-center justify-between gap-4 text-sm text-[#ddc1b0]">
                <p className="max-w-3xl">
                  {selectedItem.type === "video" ? selectedItem.title : selectedItem.alt}
                </p>
                <p className="hidden whitespace-nowrap text-[#ffb786] md:block">
                  {selectedPosition} / {items.length}
                </p>
              </div>

              <div className="mt-4 flex items-center justify-center gap-3 md:hidden">
                <button
                  type="button"
                  className="rounded-full bg-white/12 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20"
                  onClick={showPrev}
                  aria-label="Previous media"
                >
                  Prev
                </button>
                <button
                  type="button"
                  className="rounded-full bg-white/12 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20"
                  onClick={showNext}
                  aria-label="Next media"
                >
                  Next
                </button>
              </div>
            </div>

            <button
              type="button"
              className="absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/12 p-3 text-white transition-colors hover:bg-white/20 md:right-6 md:block"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next media"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
