"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

type ProjectGalleryProps = {
  images: string[];
  title: string;
};

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [previewIndex, setPreviewIndex] = useState(0);

  const close = useCallback(() => setIsOpen(false), []);
  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length]
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close, next, prev]);

  const openAt = (i: number) => {
    setIndex(i);
    setIsOpen(true);
  };

  return (
    <>
      {/* Cover image — crossfades to previewIndex on thumbnail hover */}
      <button
        type="button"
        onClick={() => openAt(previewIndex)}
        className="group relative block aspect-[4/3] w-full overflow-hidden outline-none"
        aria-label={`View photos for ${title}`}
      >
        {images.map((img, i) => (
          <Image
            key={img}
            src={img}
            alt={title}
            fill
            className={`object-cover transition-opacity duration-500 ease-out ${
              i === previewIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </button>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="flex flex-wrap border-t-2 border-gray-900/10 bg-white">
          {images.map((img, i) => (
            <button
              key={img + i}
              type="button"
              onMouseEnter={() => setPreviewIndex(i)}
              onFocus={() => setPreviewIndex(i)}
              onClick={() => openAt(i)}
              className="group relative h-[54px] w-[72px] shrink-0 overflow-hidden border-r border-gray-200 outline-none"
              aria-label={`Preview photo ${i + 1} of ${images.length} for ${title}`}
              aria-current={i === previewIndex}
            >
              <Image
                src={img}
                alt={`${title} — thumbnail ${i + 1}`}
                fill
                className={`object-cover transition-all duration-200 ${
                  i === previewIndex
                    ? "opacity-100 scale-105"
                    : "opacity-70 group-hover:opacity-100"
                }`}
              />
              <div
                className={`absolute inset-0 transition-all duration-200 ${
                  i === previewIndex
                    ? "ring-2 ring-inset ring-amber-600"
                    : ""
                }`}
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} photo gallery`}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-5 top-5 text-[13px] font-medium text-white/70 transition hover:text-white outline-none"
            aria-label="Close gallery"
          >
            Close ✕
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-sm bg-white/10 px-3 py-4 text-white transition hover:bg-white/20 sm:left-6 outline-none"
            aria-label="Previous photo"
          >
            ‹
          </button>

          <div
            className="relative h-[70vh] w-full max-w-[1000px]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[index]}
              alt={`${title} — photo ${index + 1} of ${images.length}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-sm bg-white/10 px-3 py-4 text-white transition hover:bg-white/20 sm:right-6 outline-none"
            aria-label="Next photo"
          >
            ›
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[12.5px] text-white/60">
            {index + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}