import Script from "next/script";

export default function GiftCardsPage() {
  return (
    <section className="bg-white px-4 pb-10 pt-24 md:pb-14 md:pt-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Gift Cards</p>
          <h1 className="display mt-3 text-4xl md:text-6xl">Give the gift of better golf.</h1>
          <p className="lead mx-auto mt-4 max-w-2xl">
            Purchase a Discover Your Swing gift card for golf coaching with Christie Quinn.
          </p>
        </div>
        <div className="mx-auto mt-6 max-w-5xl">
          <div className="overflow-hidden rounded-lg border border-line bg-white p-3 shadow-2xl shadow-steel/8 md:p-5">
            <div
              className="gift-up-target min-h-[640px]"
              data-site-id="f3fa540b-4ffc-40cf-e1e2-08dd55b44a32"
              data-platform="Next.js"
            />
            <Script src="https://cdn.giftup.app/dist/gift-up.js" strategy="afterInteractive" />
          </div>
        </div>
      </div>
    </section>
  );
}
