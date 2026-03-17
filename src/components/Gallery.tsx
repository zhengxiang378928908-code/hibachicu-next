"use client";

import { useState } from "react";
import Image from "next/image";

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");

  const images = [
    { src: "/images/gallery1.jpg", alt: "mobile hibachi chef performing at a private event" },
    { src: "/images/gallery2.jpg", alt: "hibachi catering guests seated around the grill at home" },
    { src: "/images/gallery3.jpg", alt: "outdoor hibachi dinner setup for a backyard party" },
    { src: "/images/gallery4.jpg", alt: "family photo at a backyard hibachi catering event" },
    { src: "/images/gallery5.jpg", alt: "fried rice cooking on an outdoor hibachi grill" },
    { src: "/images/gallery6.jpg", alt: "guest enjoying a private hibachi chef experience outdoors" },
    { src: "/images/gallery7.jpg", alt: "group celebration during a mobile hibachi party" },
    { src: "/images/gallery8.jpg", alt: "backyard hibachi setup with grill cart and guests" },
    { src: "/images/gallery9.jpg", alt: "indoor hibachi catering setup with guests at the table" },
    { src: "/images/gallery10.jpg", alt: "birthday hibachi party with fried rice cooking on the grill" },
    { src: "/images/gallery11.jpg", alt: "outdoor birthday hibachi celebration in a backyard" },
  ];

  const videos = [
    { src: "/videos/60_1767297804.mp4", title: "Hibachi Grill Show" },
    { src: "/videos/61_1767297827.mp4", title: "Live Cooking" },
    { src: "/videos/62_1767297847.mp4", title: "Fire Performance" },
    { src: "/videos/63_1767297857.mp4", title: "Chef in Action" },
    { src: "/videos/64_1767297875.mp4", title: "Backyard Party" },
    { src: "/videos/67_1767297908.mp4", title: "Hibachi Experience" },
    { src: "/videos/68_1767297918.mp4", title: "Grill Highlights" },
    { src: "/videos/69_1767297925.mp4", title: "Flame Show" },
    { src: "/videos/71_1767297938.mp4", title: "Party Moments" },
    { src: "/videos/72_1767297956.mp4", title: "Chef Performance" },
    { src: "/videos/73_1767297969.mp4", title: "Hibachi Fun" },
    { src: "/videos/83_1767318121.mp4", title: "Private Event" },
    { src: "/videos/85_1767318146.mp4", title: "Outdoor Hibachi" },
  ];

  return (
    <section id="gallery" className="py-20 px-5" style={{ background: "var(--color-dark-bg)" }}>
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[44px] text-white text-center mb-6">
          Photos & <span className="text-[#fb8f2c]">Videos</span>
        </h2>

        <p className="text-center text-white/60 mb-10">
          Browse real hibachi party photos and videos
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab("photos")}
            className={`px-8 py-3 rounded-full text-[16px] font-semibold transition-all duration-300 ${
              activeTab === "photos"
                ? "bg-[#fb8f2c] text-white"
                : "bg-[#15213a]/60 text-white/60 hover:text-white"
            }`}
          >
            PHOTOS
          </button>
          <button
            onClick={() => setActiveTab("videos")}
            className={`px-8 py-3 rounded-full text-[16px] font-semibold transition-all duration-300 ${
              activeTab === "videos"
                ? "bg-[#fb8f2c] text-white"
                : "bg-[#15213a]/60 text-white/60 hover:text-white"
            }`}
          >
            VIDEOS
          </button>
        </div>

        {/* Photos Grid */}
        {activeTab === "photos" && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
              </div>
            ))}
          </div>
        )}

        {/* Videos Grid */}
        {activeTab === "videos" && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {videos.map((video, i) => (
              <div
                key={i}
                className="relative aspect-[9/16] overflow-hidden rounded-lg bg-[#15213a]/40"
              >
                <video
                  src={video.src}
                  controls
                  preload="metadata"
                  className="w-full h-full object-cover"
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
