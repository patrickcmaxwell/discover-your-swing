import Script from "next/script";
import { PageHero } from "@/components/Sections";

export default function GiftCardsPage() {
  return (
    <>
      <PageHero
        eyebrow="Gift Cards"
        title="Give the gift of a better golf game."
        copy="Discover Your Swing gift cards make it easy to celebrate a golfer with coaching that helps them enjoy the game more."
        image="/images/hero-christie.jpg"
      />
      <section className="section-pad bg-white">
        <div className="container">
          <div className="orbit-card overflow-hidden p-4 md:p-8">
            <div
              className="gift-up-target min-h-[720px]"
              data-site-id="f3fa540b-4ffc-40cf-e1e2-08dd55b44a32"
              data-platform="Next.js"
            />
            <Script src="https://cdn.giftup.app/dist/gift-up.js" strategy="afterInteractive" />
          </div>
        </div>
      </section>
    </>
  );
}
