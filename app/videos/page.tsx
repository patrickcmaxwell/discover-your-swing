import { PageHero } from "@/components/Sections";
import { VideoGallery } from "@/components/VideoGallery";
import { videos } from "@/lib/site-data";

export default function VideosPage() {
  return (
    <>
      <PageHero
        eyebrow="DYS Videos"
        title="Coaching videos from Discover Your Swing®."
        copy="A curated library of swing, performance, and player-development videos for golfers who want to keep learning between lessons."
        image="/images/on-course.jpg"
        imagePosition="center top"
      />
      <section className="section-pad bg-white">
        <div className="container">
          <VideoGallery videos={videos} />
        </div>
      </section>
    </>
  );
}
