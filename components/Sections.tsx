import Image from "next/image";
import Link from "next/link";
import { bookingUrl, testimonials } from "@/lib/site-data";

export function PageHero({
  eyebrow,
  title,
  copy,
  image,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
}) {
  return (
    <section className="px-4 pb-16 pt-32 md:pb-20 md:pt-36">
      <div className="container grid items-end gap-8 lg:grid-cols-[1fr_0.86fr]">
        <div className="rise">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display mt-4 text-5xl md:text-7xl">{title}</h1>
          <p className="lead mt-6 max-w-2xl">{copy}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="cta cta-primary" href={bookingUrl} target="_blank" rel="noreferrer">
              Book Online
            </a>
            <Link className="cta cta-secondary" href="/about">
              Meet Christie
            </Link>
          </div>
        </div>
        <div className="image-shell min-h-[440px] rise rise-delay">
          <Image src={image} alt="" fill sizes="(max-width: 1024px) 100vw, 46vw" className="object-cover" priority />
        </div>
      </div>
    </section>
  );
}

export function ProgramGrid({
  title,
  intro,
  programs,
}: {
  title: string;
  intro: string;
  programs: Array<{ title: string; price: string; meta: string; details: string[] }>;
}) {
  return (
    <section className="section-pad bg-white">
      <div className="container">
        <div className="max-w-3xl">
          <p className="eyebrow">Programs & Packages</p>
          <h2 className="headline mt-3 text-4xl md:text-5xl">{title}</h2>
          <p className="lead mt-5">{intro}</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <article className="orbit-card p-6" key={program.title}>
              <div className="flex items-start justify-between gap-5">
                <h3 className="headline text-2xl">{program.title}</h3>
                <span className="rounded-full bg-orange px-3 py-1 text-sm font-black text-white">{program.price}</span>
              </div>
              <p className="mt-2 font-bold text-green">{program.meta}</p>
              <ul className="mt-5 grid gap-2 text-sm leading-6 text-graphite/76">
                {program.details.map((detail) => (
                  <li className="flex gap-2" key={detail}>
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <a className="cta cta-secondary mt-6 w-full" href={bookingUrl} target="_blank" rel="noreferrer">
                Get Started
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="section-pad bg-cloud">
      <div className="container">
        <p className="eyebrow">Our Testimonials</p>
        <h2 className="headline mt-3 text-4xl md:text-5xl">What Students Say</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <article className="orbit-card p-6" key={item.name}>
              <div className="text-xl text-orange">★★★★★</div>
              <p className="mt-5 text-base leading-7 text-graphite/78">{item.quote}</p>
              <p className="mt-6 font-black text-green">{item.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Partners() {
  const partners = [
    ["/images/lpga-logo.png", "LPGA"],
    ["/images/flightscope-logo.png", "FlightScope"],
    ["/images/titleist-logo.png", "Titleist"],
    ["/images/girls-golf-logo.png", "LPGA Girls Golf"],
  ];

  return (
    <section className="px-4 py-10">
      <div className="container grid items-center gap-5 border-y border-line py-8 md:grid-cols-[0.7fr_1fr]">
        <div>
          <p className="eyebrow">Trusted Tools & Associations</p>
          <h2 className="headline mt-2 text-3xl">Performance coaching with real player-development context.</h2>
        </div>
        <div className="grid grid-cols-2 items-center gap-5 md:grid-cols-4">
          {partners.map(([src, alt]) => (
            <div className="grid h-24 place-items-center rounded-lg bg-white p-4 shadow-sm" key={src}>
              <Image src={src} alt={alt} width={170} height={80} className="max-h-16 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="bg-ink px-4 py-16 text-white">
      <div className="container flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="eyebrow text-orange">Ready to get started?</p>
          <h2 className="headline mt-3 max-w-3xl text-4xl md:text-5xl">Let’s discover your swing together.</h2>
        </div>
        <a className="cta cta-primary" href={bookingUrl} target="_blank" rel="noreferrer">
          Book Now
        </a>
      </div>
    </section>
  );
}
