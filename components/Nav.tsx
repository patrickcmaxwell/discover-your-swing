"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { bookingUrl, email, navItems, phone } from "@/lib/site-data";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/86 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image src="/images/logo-mark.png" alt="Discover Your Swing" width={48} height={57} className="h-12 w-auto" priority />
          <span className="hidden max-w-56 text-xl font-black text-orange sm:block">Discover Your Swing!</span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.slice(1).map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-bold text-graphite transition hover:text-orange">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a className="cta cta-secondary" href={`tel:${phone.replaceAll("-", "")}`}>
            Call
          </a>
          <a className="cta cta-primary" href={bookingUrl} target="_blank" rel="noreferrer">
            Book Now
          </a>
        </div>
        <button
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          className="mobile-menu-trigger"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative h-4 w-6">
            <span className={`absolute left-0 h-0.5 w-6 bg-white transition ${open ? "top-2 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-2 h-0.5 w-6 bg-white transition ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-0 h-0.5 w-6 bg-white transition ${open ? "top-2 -rotate-45" : "top-4"}`} />
          </span>
        </button>
      </div>
      {open ? (
        <div className="fixed inset-0 top-20 z-40 bg-paper px-4 py-6 lg:hidden" style={{ animation: "menu-in 240ms ease both" }}>
          <div className="flex min-h-[calc(100dvh-7rem)] flex-col justify-between rounded-lg border border-line bg-white p-6 shadow-2xl">
            <nav className="grid gap-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-line py-4 text-3xl font-black text-ink"
                >
                  <span>{item.label}</span>
                  <span className="text-base text-orange">{String(index + 1).padStart(2, "0")}</span>
                </Link>
              ))}
            </nav>
            <div className="grid gap-3 pt-8">
              <a className="cta cta-primary w-full" href={bookingUrl} target="_blank" rel="noreferrer">
                Book a Lesson
              </a>
              <a className="cta cta-secondary w-full" href={`mailto:${email}`}>
                Email Christie
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
