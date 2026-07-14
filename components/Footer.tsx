import Image from "next/image";
import Link from "next/link";
import { bookingUrl, email, navItems, phone } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-ink px-4 py-14 text-white">
      <div className="container grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Image src="/images/logo-wide.jpg" alt="Discover Your Swing" width={360} height={106} className="h-auto w-72 rounded bg-white" />
          <p className="mt-6 max-w-md text-base leading-7 text-white/72">
            Professional golf lessons and player development based in Palm Springs, Palm Desert, and San Diego.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase text-orange">Navigation</h2>
          <div className="mt-4 grid gap-2">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link className="text-white/76 hover:text-white" href={item.href}>
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="mt-2 grid gap-1 pl-3">
                    {item.children.map((child) => (
                      <Link className="text-sm text-white/54 hover:text-white" key={child.href} href={child.href}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase text-orange">Contact</h2>
          <div className="mt-4 grid gap-2 text-white/76">
            <a href={`tel:${phone.replaceAll("-", "")}`}>{phone}</a>
            <a href={`mailto:${email}`}>{email}</a>
            <a href={bookingUrl} target="_blank" rel="noreferrer">
              Book online
            </a>
          </div>
        </div>
      </div>
      <div className="container mt-12 border-t border-white/15 pt-6 text-sm text-white/54">© 2026 Discover Your Swing! All Rights Reserved.</div>
    </footer>
  );
}
