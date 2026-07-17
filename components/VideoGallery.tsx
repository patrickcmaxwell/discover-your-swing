"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type Video = { id: string; title: string };

export function VideoGallery({ videos }: { videos: Video[] }) {
  const [active, setActive] = useState<number | null>(null);
  const isOpen = active !== null;

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(() => setActive((i) => (i === null ? i : (i + 1) % videos.length)), [videos.length]);
  const prev = useCallback(() => setActive((i) => (i === null ? i : (i - 1 + videos.length) % videos.length)), [videos.length]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close, next, prev]);

  const current = active === null ? null : videos[active];

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video, index) => (
          <button key={video.id} onClick={() => setActive(index)} className="group text-left" aria-label={`Play ${video.title}`}>
            <div className="relative aspect-video overflow-hidden rounded-lg border border-line bg-ink shadow-lg">
              <Image
                src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/25 transition group-hover:bg-ink/10" />
              <div className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-orange text-white shadow-xl transition group-hover:scale-110">
                <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7" aria-hidden="true">
                  <path d="M8 5v14l11-7z" fill="currentColor" />
                </svg>
              </div>
            </div>
            <p className="headline mt-3 text-lg text-ink transition group-hover:text-steel">{video.title}</p>
          </button>
        ))}
      </div>

      {isOpen && current ? (
        <div className="fixed inset-0 z-[400] flex flex-col bg-ink/92 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={current.title}>
          <div className="flex shrink-0 items-center justify-between gap-4 px-4 py-4 text-white md:px-8">
            <p className="headline text-lg md:text-xl">{current.title}</p>
            <button aria-label="Close" onClick={close} className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20">
              <svg viewBox="0 0 20 20" className="h-5 w-5" aria-hidden="true">
                <path d="M5 5l10 10M15 5 5 15" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center px-4 pb-6 md:px-8">
            <div className="flex w-full max-w-5xl items-center gap-3 md:gap-5">
              <button aria-label="Previous video" onClick={prev} className="hidden h-12 w-12 shrink-0 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:grid">
                <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                  <path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black shadow-2xl">
                <iframe
                  key={current.id}
                  title={current.title}
                  src={`https://www.youtube.com/embed/${current.id}?autoplay=1&rel=0`}
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <button aria-label="Next video" onClick={next} className="hidden h-12 w-12 shrink-0 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:grid">
                <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                  <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex shrink-0 items-center justify-center gap-6 pb-6 text-white">
            <button aria-label="Previous video" onClick={prev} className="grid h-11 w-11 place-items-center rounded-full bg-white/10 transition hover:bg-white/20 sm:hidden">
              <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                <path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </button>
            <span className="text-sm font-bold text-white/70">
              {active + 1} / {videos.length}
            </span>
            <button aria-label="Next video" onClick={next} className="grid h-11 w-11 place-items-center rounded-full bg-white/10 transition hover:bg-white/20 sm:hidden">
              <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
