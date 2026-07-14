import Image from "next/image";
import Link from "next/link";
import { CtaBand, Partners, Testimonials } from "@/components/Sections";
import { bookingUrl } from "@/lib/site-data";

const paths = [
  {
    title: "Adult Golf Lessons",
    copy: "For golfers of all skill levels, work one-on-one with Christie Quinn to refine mechanics, consistency, and on-course confidence.",
    href: "/adult-coaching",
    image: "/images/adult.jpg",
  },
  {
    title: "Junior Golf Coaching",
    copy: "Programs designed to build confidence, skill, and a lasting love for the game in a supportive coaching environment.",
    href: "/junior-golf",
    image: "/images/junior.jpg",
  },
  {
    title: "Tournament Player Coaching",
    copy: "Competitive players sharpen strategy, mental toughness, scoring, and performance habits for tournament play.",
    href: "/performance-coaching",
    image: "/images/performance.jpg",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-[92vh] overflow-hidden px-4 pb-16 pt-28 md:pt-32">
        <Image src="/images/hero-christie.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/76 via-white/38 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/42 via-transparent to-transparent" />
        <div className="absolute bottom-5 left-5 hidden h-40 w-40 md:block">
          <span className="atom-ring left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          <span className="atom-ring left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          <span className="atom-ring left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container relative flex min-h-[calc(92vh-8rem)] items-center">
          <div className="max-w-3xl rise" style={{ maxWidth: "min(calc(100vw - 2rem), 44rem)" }}>
            <p className="eyebrow">Palm Springs Golf Lessons</p>
            <h1 className="display mt-5 text-5xl md:text-7xl">Welcome to Discover Your Swing!</h1>
            <p className="lead mt-6 max-w-2xl">
              Whether you’re new to the game or striving to compete at the highest level, Discover Your Swing is your premier destination for golf instruction and player development.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="cta cta-primary" href={bookingUrl} target="_blank" rel="noreferrer">
                Book Online
              </a>
              <Link className="cta cta-secondary" href="/adult-coaching">
                New Students Start Here
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container">
          <div className="max-w-2xl">
            <p className="eyebrow">A Roadmap for Golfers at Every Level</p>
            <h2 className="headline mt-3 text-4xl md:text-5xl">Discover the swing that works with the body and game you have today.</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {paths.map((item) => (
              <Link href={item.href} className="group orbit-card overflow-hidden" key={item.title}>
                <div className="image-shell h-80">
                  <Image src={item.image} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="headline text-2xl">{item.title}</h3>
                  <p className="copy mt-3">{item.copy}</p>
                  <p className="mt-5 font-black text-orange">Learn More</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container grid items-center gap-10 lg:grid-cols-[0.9fr_1fr]">
          <div className="grid grid-cols-2 gap-4">
            <div className="image-shell h-80">
              <Image src="/images/on-course.jpg" alt="" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
            </div>
            <div className="image-shell mt-12 h-80">
              <Image src="/images/coach-action.jpg" alt="" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
            </div>
          </div>
          <div>
            <p className="eyebrow">Why Choose Discover Your Swing?</p>
            <h2 className="headline mt-3 text-4xl md:text-5xl">Personalized coaching, proven methods, measurable progress.</h2>
            <p className="lead mt-6">
              Golf is a journey, and Discover Your Swing is here to guide you every step of the way. Programs combine technical expertise, fitness, strategy, and a coaching style built around each player’s unique goals.
            </p>
            <div className="mt-8 grid gap-3">
              {["Personalized coaching tailored to your unique goals", "Access to world-class facilities in the Palm Springs area", "A holistic approach that blends mechanics, fitness, and mindset"].map((item) => (
                <div className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm" key={item}>
                  <Image src="/images/accent-ball.png" alt="" width={28} height={28} />
                  <span className="font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Partners />
      <Testimonials />
      <CtaBand />
    </>
  );
}
