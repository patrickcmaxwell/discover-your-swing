"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { bookingUrl, email, navItems, phone } from "@/lib/site-data";

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[200] border-b border-line bg-paper/86 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <Image src="/images/logo-mark.png" alt="Discover Your Swing" width={48} height={57} className="h-12 w-auto" priority />
          </Link>
          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.slice(1).map((item) => (
              <div className="group relative" key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 rounded-md text-sm font-bold leading-none text-graphite transition hover:text-steel focus:outline-none focus-visible:ring-2 focus-visible:ring-orange/50 group-focus-within:text-steel group-hover:text-steel"
                >
                  <span>{item.label}</span>
                  {item.children ? (
                    <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 text-steel transition group-hover:rotate-180">
                      <path d="M5.5 7.5 10 12l4.5-4.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" />
                    </svg>
                  ) : null}
                </Link>
                {item.children ? (
                  <div className="pointer-events-none absolute left-1/2 top-full z-50 w-[21rem] -translate-x-1/2 pt-5 opacity-0 transition duration-150 group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:opacity-100">
                    <div className="relative overflow-hidden rounded-lg border border-white/15 bg-steel p-2 text-white shadow-2xl shadow-steel/25">
                      <div className="pointer-events-none absolute -right-10 -top-16 h-32 w-32 rounded-full border border-orange/40" />
                      <div className="pointer-events-none absolute -right-2 -top-14 h-32 w-12 rotate-45 rounded-full border border-red/40" />
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="relative flex items-center justify-between gap-4 rounded-md px-4 py-3 text-base font-bold leading-tight text-white/88 transition hover:bg-white/10 hover:text-white"
                        >
                          <span>{child.label}</span>
                          <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
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
            className="relative z-[250] ml-auto grid h-12 w-12 place-items-center rounded-full bg-orange shadow-[0_16px_34px_rgba(242,140,34,0.28)] lg:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="relative h-4 w-6">
              <span className={`absolute left-0 h-0.5 w-6 bg-white transition ${open ? "top-2 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-2 h-0.5 w-6 bg-white transition ${open ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute left-0 h-0.5 w-6 bg-white transition ${open ? "top-2 -rotate-45" : "top-4"}`} />
            </span>
          </button>
        </div>
      </header>
      {open ? (
        <div className="fixed inset-0 z-[190] overflow-y-auto bg-paper px-6 pb-8 pt-24 lg:hidden" style={{ animation: "menu-in 240ms ease both" }}>
          <Image src="/images/logo-mark.png" alt="Discover Your Swing" width={52} height={62} className="absolute left-6 top-5 h-14 w-auto" priority />
          <div className="mx-auto flex min-h-[calc(100dvh-8rem)] max-w-3xl flex-col justify-between">
            <nav className="grid">
              {navItems.map((item, index) => (
                <div key={item.href} className="border-b border-line py-5">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-start justify-between gap-4 text-4xl font-black leading-none text-ink"
                  >
                    <span>{item.label}</span>
                    <span className="text-base text-orange">{String(index + 1).padStart(2, "0")}</span>
                  </Link>
                  {item.children ? (
                    <div className="mt-5 grid gap-3 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="text-2xl font-bold text-steel"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </nav>
            <div className="grid gap-3 pt-10">
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
    </>
  );
}
