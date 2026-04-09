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
    // Row 1: featured video + 3
    { type: "video", src: "/videos/62_1767297847.mp4", title: "Fire Performance" },
    { type: "video", src: "/videos/898_1775699151.mp4", title: "Big Fire Finish" },
    { type: "video", src: "/videos/853_1775698051.mp4", title: "LED Light Show" },
    { type: "video", src: "/videos/890_1775699098.mp4", title: "Night Flames" },
    // Row 2
    { type: "video", src: "/videos/865_1775698701.mp4", title: "Double Torch" },
    { type: "video", src: "/videos/845_1775697853.mp4", title: "Shrimp Sizzle" },
    { type: "video", src: "/videos/69_1767297925.mp4", title: "Flame Show" },
    { type: "video", src: "/videos/880_1775698911.mp4", title: "Egg Crack Show" },
    // Remaining videos — mixed old & new
    { type: "video", src: "/videos/60_1767297804.mp4", title: "Hibachi Grill Show" },
    { type: "video", src: "/videos/72_1767297956.mp4", title: "Chef Performance" },
    { type: "video", src: "/videos/849_1775697943.mp4", title: "Veggie Toss" },
    { type: "video", src: "/videos/64_1767297875.mp4", title: "Backyard Party" },
    { type: "video", src: "/videos/67_1767297908.mp4", title: "Hibachi Experience" },
    { type: "video", src: "/videos/851_1775697971.mp4", title: "Chef at the Grill" },
    { type: "video", src: "/videos/63_1767297857.mp4", title: "Chef in Action" },
    { type: "video", src: "/videos/860_1775698668.mp4", title: "Smoky Noodles" },
    { type: "video", src: "/videos/85_1767318146.mp4", title: "Outdoor Hibachi" },
    { type: "video", src: "/videos/855_1775698081.mp4", title: "Sauce Drizzle" },
    { type: "video", src: "/videos/61_1767297827.mp4", title: "Live Cooking" },
    { type: "video", src: "/videos/848_1775697883.mp4", title: "Egg Pour" },
    { type: "video", src: "/videos/68_1767297918.mp4", title: "Grill Highlights" },
    { type: "video", src: "/videos/858_1775698114.mp4", title: "Noodle Serve" },
    { type: "video", src: "/videos/71_1767297938.mp4", title: "Party Moments" },
    { type: "video", src: "/videos/889_1775699069.mp4", title: "Sauce Squirt Fun" },
    { type: "video", src: "/videos/83_1767318121.mp4", title: "Private Event" },
    { type: "video", src: "/videos/877_1775698880.mp4", title: "Porch Party" },
    { type: "video", src: "/videos/73_1767297969.mp4", title: "Hibachi Fun" },
    { type: "video", src: "/videos/896_1775699141.mp4", title: "Grill Prep" },
    // Photos (excluding ones already used on homepage: gallery1, 12, 14, 17, 20, 21)
    { type: "image", src: "/images/gallery2.jpg", alt: "hibachi catering guests seated around the grill at home" },
    { type: "image", src: "/images/gallery3.jpg", alt: "outdoor hibachi dinner setup for a backyard party" },
    { type: "image", src: "/images/gallery4.jpg", alt: "family photo at a backyard hibachi catering event" },
    { type: "image", src: "/images/gallery5.jpg", alt: "fried rice cooking on an outdoor hibachi grill" },
    { type: "image", src: "/images/gallery6.jpg", alt: "guest enjoying a private hibachi chef experience outdoors" },
    { type: "image", src: "/images/gallery7.jpg", alt: "group celebration during a mobile hibachi party" },
    { type: "image", src: "/images/gallery8.jpg", alt: "backyard hibachi setup with grill cart and guests" },
    { type: "image", src: "/images/gallery9.jpg", alt: "indoor hibachi catering setup with guests at the table" },
    { type: "image", src: "/images/gallery10.jpg", alt: "birthday hibachi party with fried rice cooking on the grill" },
    { type: "image", src: "/images/gallery11.jpg", alt: "outdoor birthday hibachi celebration in a backyard" },
    { type: "image", src: "/images/gallery13.jpg", alt: "hibachi chef having fun with props at an outdoor party" },
    { type: "image", src: "/images/gallery15.jpg", alt: "fresh vegetables sizzling on the hibachi grill" },
    { type: "image", src: "/images/gallery16.jpg", alt: "two hibachi chefs cooking noodles together at a night event" },
    { type: "image", src: "/images/gallery18.jpg", alt: "indoor hibachi catering event with fried rice on the grill" },
    { type: "image", src: "/images/gallery19.jpg", alt: "hibachi chef cooking fried rice at an outdoor night event" },
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

    if (Math.abs(deltaY) > 120 && Math.abs(deltaY) > Math.abs(deltaX) * 1.5) {
      closeLightbox();
    }
  };

  return (
    <section id="gallery" className="py-24" style={{ background: "var(--color-surface)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Photos & Videos
        </h2>

        <p className="text-center text-[#ddc1b0] mb-12 text-lg max-w-2xl mx-auto">
          See past hibachi parties, chef performances, and at-home event setups.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px]">
          {items.slice(0, 8).map((item, i) => {
            const isFeatured = i === 0;
            const containerClass = `relative overflow-hidden rounded-xl bg-stone-900 cursor-pointer group text-left shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_30px_rgba(255,90,0,0.25)] hover:scale-[1.02] transition-all duration-300 border-[6px] border-[#fdf8f5] ${i % 3 === 0 ? '-rotate-1' : (i % 2 === 0 ? 'rotate-1' : 'rotate-0')} ${
              isFeatured ? "sm:col-span-2 sm:row-span-2" : "col-span-1 row-span-1"
            }`;

            return item.type === "video" ? (
              <button
                key={i}
                type="button"
                className={containerClass}
                onClick={() => setSelectedIdx(i)}
                aria-label={`Open video: ${item.title}`}
              >
                <video
                  src={item.src}
                  preload="metadata"
                  poster={posters.get(i) || undefined}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  playsInline
                  loop
                  muted
                  onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
                  onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors duration-300">
                  <div className={`rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(0,0,0,0.3)] border border-white/10 ${isFeatured ? 'w-16 h-16' : 'w-12 h-12'}`}>
                    <svg className={`text-white ml-1 filter drop-shadow-md ${isFeatured ? 'w-8 h-8' : 'w-6 h-6'}`} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                  <span className={`${isFeatured ? 'text-lg' : 'text-sm'} font-bold text-white drop-shadow-md`}>{item.title}</span>
                </div>
                {i === 7 && (
                  <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center z-20 group-hover:bg-black/70 transition-colors backdrop-blur-[2px]">
                    <span className="text-4xl font-bold text-white mb-2">+{items.length - 8}</span>
                    <span className="text-xs font-bold tracking-[0.2em] text-[#ffb786] uppercase">View Gallery</span>
                  </div>
                )}
              </button>
            ) : (
              <button
                key={i}
                type="button"
                className={containerClass}
                onClick={() => setSelectedIdx(i)}
                aria-label={`Open image: ${item.alt}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes={isFeatured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 50vw, 25vw"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay for the 5th item to open the rest */}
                {i === 7 && (
                  <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center z-20 group-hover:bg-black/70 transition-colors backdrop-blur-[2px]">
                    <span className="text-4xl font-bold text-white mb-2">+{items.length - 8}</span>
                    <span className="text-xs font-bold tracking-[0.2em] text-[#ffb786] uppercase">View Gallery</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {selectedItem ? (
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={selectedItem.type === "video" ? selectedItem.title : selectedItem.alt}
            tabIndex={-1}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#020611]/95 backdrop-blur-2xl transition-all duration-300"
            onClick={closeLightbox}
          >
            {/* Top Bar Navigation (Desktop) */}
            <div className="absolute top-0 inset-x-0 z-[110] hidden md:flex items-center justify-between p-6 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
              <div className="pointer-events-auto flex items-center gap-4">
                <span className="rounded-full bg-white/10 backdrop-blur-md px-4 py-2 text-sm font-medium text-white/90 shadow-lg border border-white/10">
                  {selectedPosition} / {items.length}
                </span>
                <p className="max-w-xl truncate text-lg font-medium text-white/90 drop-shadow-lg">
                  {selectedItem.type === "video" ? selectedItem.title : selectedItem.alt}
                </p>
              </div>
              <button
                type="button"
                className="pointer-events-auto rounded-full bg-white/10 backdrop-blur-md px-5 py-2.5 text-sm font-semibold tracking-wider text-white shadow-lg transition-all hover:bg-white/20 hover:scale-105 border border-white/10 flex items-center gap-2 uppercase"
                onClick={closeLightbox}
                aria-label="Close gallery preview"
              >
                <span>Close</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Top Bar Navigation (Mobile) */}
            <div className="absolute top-4 right-4 z-[110] md:hidden">
              <button
                type="button"
                className="pointer-events-auto rounded-full bg-black/60 backdrop-blur-md p-3 text-white shadow-lg transition-all active:scale-95 border border-white/10"
                onClick={closeLightbox}
                aria-label="Close gallery preview"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Desktop Previous/Next Navigation */}
            <button
              type="button"
              className="absolute left-6 top-1/2 z-[110] -translate-y-1/2 rounded-full bg-white/10 backdrop-blur-md p-4 text-white hover:bg-white/20 transition-all shadow-lg border border-white/10 hidden md:block"
              onClick={(e) => { e.stopPropagation(); showPrev(); }}
              aria-label="Previous media"
            >
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              className="absolute right-6 top-1/2 z-[110] -translate-y-1/2 rounded-full bg-white/10 backdrop-blur-md p-4 text-white hover:bg-white/20 transition-all shadow-lg border border-white/10 hidden md:block"
              onClick={(e) => { e.stopPropagation(); showNext(); }}
              aria-label="Next media"
            >
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Media Container */}
            <div
              className="relative w-full h-full flex items-center justify-center md:p-24 pb-28 pt-16 md:pb-24 px-0"
              onClick={(event) => event.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="relative w-full h-full flex items-center justify-center max-w-7xl mx-auto">
                {selectedItem.type === "video" ? (
                  <video
                    key={`video-${selectedIdx}`}
                    src={selectedItem.src}
                    poster={selectedIdx === null ? undefined : posters.get(selectedIdx)}
                    className="max-h-full max-w-full w-auto h-auto object-contain md:rounded-xl shadow-2xl md:ring-1 ring-white/10"
                    controls
                    autoPlay
                    playsInline
                  />
                ) : (
                  <div className="relative w-full h-full flex items-center justify-center cursor-zoom-out" onClick={closeLightbox}>
                    <Image
                      key={`img-${selectedIdx}`}
                      src={selectedItem.src}
                      alt={selectedItem.alt}
                      fill
                      className="object-contain md:rounded-xl shadow-none md:shadow-2xl"
                      sizes="100vw"
                      quality={90}
                      priority
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Bottom Navigation */}
            <div className="md:hidden absolute bottom-0 inset-x-0 z-[110] px-4 pb-8 pt-12 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col items-center gap-4 pointer-events-none">
              <p className="text-center text-sm font-medium text-white/95 drop-shadow-lg px-2 line-clamp-2 pb-2">
                {selectedItem.type === "video" ? selectedItem.title : selectedItem.alt}
              </p>
              <div className="flex items-center justify-center gap-8 w-full pointer-events-auto">
                <button
                  type="button"
                  className="p-3.5 bg-white/10 backdrop-blur-md rounded-full text-white shadow-[0_8px_30px_rgba(0,0,0,0.5)] active:scale-95 transition-transform border border-white/5"
                  onClick={(e) => { e.stopPropagation(); showPrev(); }}
                  aria-label="Previous media"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <span className="text-white/90 text-xs font-bold tracking-widest bg-black/40 px-5 py-2 rounded-full backdrop-blur-md border border-white/10">
                  {selectedPosition} / {items.length}
                </span>
                <button
                  type="button"
                  className="p-3.5 bg-white/10 backdrop-blur-md rounded-full text-white shadow-[0_8px_30px_rgba(0,0,0,0.5)] active:scale-95 transition-transform border border-white/5"
                  onClick={(e) => { e.stopPropagation(); showNext(); }}
                  aria-label="Next media"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            
          </div>
        ) : null}
      </div>
    </section>
  );
}
