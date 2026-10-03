"use client";

import Image from "next/image";
import { useState } from "react";
import { PlayIcon, XMarkIcon } from "@heroicons/react/24/outline";

const imageCount = 59;
const videoCount = 33;
type MediaItem = { type: "image" | "video"; src: string };

export default function ProjectGallery({ cloudName }: { cloudName?: string }) {
  const [open, setOpen] = useState(false);
  if (!cloudName) {
    throw new Error("CLOUDINARY_CLOUD_NAME is not configured.");
  }

  const media: MediaItem[] = [
    ...Array.from({ length: imageCount }, (_, index) => ({
      type: "image" as const,
      src: `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto,w_1400/sunspectrum/project-gallery/media-${String(index + 1).padStart(3, "0")}`,
    })),
    ...Array.from({ length: videoCount }, (_, index) => ({
      type: "video" as const,
      src: `https://res.cloudinary.com/${cloudName}/video/upload/q_auto/sunspectrum/project-gallery/media-${String(imageCount + index + 1).padStart(3, "0")}`,
    })),
  ];

  return (
    <>
      <div className="mb-6 border border-[#dce2dc] bg-[#f8f8f4] p-3 sm:mb-8 sm:p-4">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <span className="text-[8px] font-extrabold tracking-[.16em] text-[#718078] uppercase">
              PROJECT GALLERY
            </span>
            <h3 className="mt-1 text-[24px] font-bold tracking-[-.045em] text-[#073d2d] sm:text-[30px]">
              SunSpectrum project work
            </h3>
            <p className="mt-1 max-w-[560px] text-[11px] leading-[1.55] text-[#68736d] sm:text-[12px]">
              Photos and videos from our completed installations, all in one
              gallery.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex min-h-10 items-center justify-center bg-[#073d2d] px-4 text-[9px] font-extrabold tracking-[.08em] text-white uppercase transition hover:bg-[#0b4b38]"
          >
            View all {media.length} items
          </button>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {media.slice(0, 8).map((item, index) => (
            <MediaPreview key={item.src} item={item} index={index} />
          ))}
        </div>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="SunSpectrum project gallery"
          className="fixed inset-0 z-[90] overflow-y-auto bg-[#073d2d]/95 p-3 sm:p-6"
        >
          <div className="mx-auto max-w-[1320px]">
            <div className="sticky top-0 z-10 flex items-center justify-between bg-[#073d2d] py-3">
              <div>
                <span className="text-[8px] font-extrabold tracking-[.16em] text-[#d6ad58] uppercase">
                  PROJECT GALLERY
                </span>
                <p className="mt-1 text-[12px] text-white/70">
                  {media.length} photos and videos
                </p>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close project gallery"
                className="grid h-9 w-9 place-items-center border border-white/20 text-white transition hover:bg-white/10"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 py-3 sm:grid-cols-3 lg:grid-cols-4">
              {media.map((item, index) => (
                <MediaPreview key={item.src} item={item} index={index} expanded />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function MediaPreview({
  item,
  index,
  expanded = false,
}: {
  item: MediaItem;
  index: number;
  expanded?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-[#eef1ed] ${
        expanded ? "aspect-square" : "aspect-[4/3]"
      }`}
    >
      {item.type === "image" ? (
        <Image
          src={item.src}
          alt={`SunSpectrum project gallery item ${index + 1}`}
          fill
          sizes={expanded ? "(max-width: 640px) 50vw, 25vw" : "25vw"}
          className="object-cover"
          loading={index < 8 ? "eager" : "lazy"}
        />
      ) : (
        <video
          src={item.src}
          controls={expanded}
          preload="none"
          className="h-full w-full object-cover"
        />
      )}

      {item.type === "video" && !expanded && (
        <span className="pointer-events-none absolute inset-0 grid place-items-center">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[#073d2d]/85 text-white">
            <PlayIcon className="h-4 w-4" />
          </span>
        </span>
      )}
    </div>
  );
}
