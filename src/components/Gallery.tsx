"use client";

import { useState } from "react";
import Image from "next/image";

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");

  const images = [
    { src: "/images/gallery1.jpg", alt: "Hibachi event 1" },
    { src: "/images/gallery2.jpg", alt: "Hibachi event 2" },
    { src: "/images/gallery3.jpg", alt: "Hibachi event 3" },
    { src: "/images/gallery4.jpg", alt: "Hibachi event 4" },
    { src: "/images/gallery5.jpg", alt: "Hibachi event 5" },
    { src: "/images/gallery6.jpg", alt: "Hibachi event 6" },
    { src: "/images/gallery7.jpg", alt: "Hibachi event 7" },
    { src: "/images/gallery8.jpg", alt: "Hibachi event 8" },
    { src: "/images/gallery9.jpg", alt: "Hibachi event 9" },
    { src: "/images/gallery10.jpg", alt: "Hibachi event 10" },
    { src: "/images/gallery11.jpg", alt: "Hibachi event 11" },
  ];

  // TODO: 把这里替换成你自己的视频链接（支持 YouTube / 本地 mp4）
  const videos = [
    {
      // 示例：YouTube 嵌入链接
      type: "youtube" as const,
      src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      title: "Hibachi Fire Show",
    },
    {
      // 示例：本地 mp4 文件（放到 public/videos/ 目录下）
      type: "mp4" as const,
      src: "/videos/hibachi-demo.mp4",
      title: "Hibachi Party Highlights",
    },
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((video, i) => (
              <div
                key={i}
                className="relative aspect-video overflow-hidden rounded-lg bg-[#15213a]/40"
              >
                {video.type === "youtube" ? (
                  <iframe
                    src={video.src}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video
                    src={video.src}
                    controls
                    className="w-full h-full object-cover"
                    playsInline
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
                <p className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center py-2 text-[14px]">
                  {video.title}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
