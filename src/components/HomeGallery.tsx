'use client';

import Image from 'next/image';
import { useRef } from 'react';

type GalleryPhoto = {
  image: string;
  alt: string;
};

export default function HomeGallery({
  eyebrow,
  title,
  photos,
}: {
  eyebrow: string;
  title: string;
  photos: GalleryPhoto[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const slide = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;

    const firstItem = track.firstElementChild as HTMLElement | null;
    const gap = parseFloat(getComputedStyle(track).columnGap || '20') || 20;
    const distance = (firstItem?.offsetWidth ?? track.clientWidth / 3) + gap;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const behavior: ScrollBehavior = reduceMotion ? 'auto' : 'smooth';

    if (direction === 1) {
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
      track.scrollTo({ left: atEnd ? 0 : track.scrollLeft + distance, behavior });
    } else {
      const atStart = track.scrollLeft <= 4;
      track.scrollTo({ left: atStart ? track.scrollWidth : track.scrollLeft - distance, behavior });
    }
  };

  return (
    <div className="bg-cozy-light rounded-[28px] border border-amber-200/60 p-6 sm:p-8 lg:p-10">
      <p className="home-eyebrow">{eyebrow}</p>
      <h2 className="home-section-title mb-8">{title}</h2>

      <div
        ref={trackRef}
        className="gallery-track flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth"
      >
        {photos.map((photo) => (
          <div
            key={photo.image}
            className="relative aspect-[4/3] w-[85%] flex-shrink-0 snap-start overflow-hidden rounded-[22px] border border-white/80 shadow-[0_10px_22px_rgba(90,68,38,0.08)] sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.835rem)]"
          >
            <Image src={`/images/${photo.image}`} alt={photo.alt} fill className="object-cover" />
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-4">
        <button
          type="button"
          onClick={() => slide(-1)}
          aria-label="Previous photos"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white/90 text-amber-700 shadow-[0_10px_20px_rgba(90,68,38,0.12)] transition-colors hover:border-amber-300 hover:bg-amber-50 hover:text-amber-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => slide(1)}
          aria-label="Next photos"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white/90 text-amber-700 shadow-[0_10px_20px_rgba(90,68,38,0.12)] transition-colors hover:border-amber-300 hover:bg-amber-50 hover:text-amber-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M8 4L14 10L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
