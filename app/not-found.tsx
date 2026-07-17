import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid min-h-screen place-items-center px-4 pt-24">
      <div className="max-w-xl text-center">
        <p className="eyebrow">404</p>
        <h1 className="display mt-4 text-5xl">This page is out of bounds.</h1>
        <p className="lead mt-5">Head back to Discover Your Swing® and keep moving toward better golf.</p>
        <Link href="/" className="cta cta-primary mt-8">
          Back Home
        </Link>
      </div>
    </section>
  );
}
