"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";

type MediaItem =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; title: string };

export default function Gallery() {
  const [playingIdx, setPlayingIdx] = useState<number | null>(null);
  const [posters, setPosters] = useState<Map<number, string>>(new Map());
  const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map());

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

  const handleVideoToggle = (idx: number) => {
    const video = videoRefs.current.get(idx);
    if (!video) return;

    if (playingIdx === idx) {
      video.pause();
      setPlayingIdx(null);
    } else {
      if (playingIdx !== null) {
        const prev = videoRefs.current.get(playingIdx);
        prev?.pause();
      }
      video.play();
      setPlayingIdx(idx);
    }
  };

  return (
    <section id="gallery" className="py-24" style={{ background: "var(--color-surface)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          Our Culinary Gallery
        </h2>

        <p className="text-center text-[#ddc1b0] mb-12 text-lg">
          Where the fire, the products, and the memories live.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-auto">
          {items.map((item, i) =>
            item.type === "video" ? (
              <div
                key={i}
                className="relative aspect-[9/16] overflow-hidden rounded-lg bg-[#131f38] row-span-2 cursor-pointer group"
                onClick={() => handleVideoToggle(i)}
              >
                <video
                  ref={(el) => {
                    if (el) videoRefs.current.set(i, el);
                  }}
                  src={item.src + "#t=0.5"}
                  preload="metadata"
                  poster={posters.get(i) || undefined}
                  className="w-full h-full object-cover"
                  playsInline
                  muted
                  loop
                  onEnded={() => setPlayingIdx(null)}
                />
                {/* Play button overlay */}
                {playingIdx !== i && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all duration-300">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
                {/* Video title */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                  <span className="text-sm font-medium text-white/90">{item.title}</span>
                </div>
              </div>
            ) : (
              <div
                key={i}
                className="relative aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
