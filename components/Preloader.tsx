"use client";

import Image from "next/image";

export function Preloader() {
  return (
    <div className="fixed inset-0 z-[300] grid place-items-center bg-paper" style={{ animation: "preloader-out 1.8s ease 0.45s forwards" }}>
      <div className="relative grid place-items-center">
        <div className="absolute h-44 w-44 rounded-full border border-orange/20" />
        <div className="absolute h-32 w-32" style={{ animation: "atom-spin 1.25s linear infinite" }}>
          <span className="atom-ring left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          <span className="atom-ring left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          <span className="atom-ring left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
        <Image src="/images/logo-mark.png" alt="Discover Your Swing logo" width={104} height={122} priority />
      </div>
    </div>
  );
}
