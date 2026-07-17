"use client";

import Image from "next/image";
import Script from "next/script";
import { useEffect, useState } from "react";

export function GiftCardModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="mt-8 flex justify-center">
        <button className="cta cta-primary" onClick={() => setOpen(true)}>
          Purchase a Gift Card
        </button>
      </div>

      {/* Full-screen purchase takeover. The GiftUp target stays mounted so its embed
          initializes at a stable width on page load; the overlay only toggles visibility. */}
      <div
        className={`fixed inset-0 z-[400] flex flex-col bg-paper transition-opacity duration-200 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="flex shrink-0 items-center justify-between gap-4 border-b border-line bg-paper/95 px-4 py-4 backdrop-blur md:px-8">
          <div className="flex items-center gap-3">
            <Image src="/images/logo-mark.png" alt="" width={44} height={52} className="h-9 w-auto" />
            <p className="headline text-lg md:text-xl">Discover Your Swing!® Gift Card</p>
          </div>
          <button
            aria-label="Close"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line bg-white text-ink transition hover:bg-cloud"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
          >
            <svg viewBox="0 0 20 20" className="h-5 w-5" aria-hidden="true">
              <path d="M5 5l10 10M15 5 5 15" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-3xl px-4 py-8 md:px-8 md:py-12">
            <div className="gift-up-target min-h-[640px]" data-site-id="f3fa540b-4ffc-40cf-e1e2-08dd55b44a32" data-platform="Next.js" />
          </div>
        </div>
      </div>

      <Script src="https://cdn.giftup.app/dist/gift-up.js" strategy="afterInteractive" />
    </>
  );
}
