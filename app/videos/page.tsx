import { PageHero } from "@/components/Sections";
import { videoIds } from "@/lib/site-data";

export default function VideosPage() {
  return (
    <>
      <PageHero
        eyebrow="DYS Videos"
        title="Coaching videos from Discover Your Swing."
        copy="A curated library of swing, performance, and player-development videos for golfers who want to keep learning between lessons."
        image="/images/on-course.jpg"
      />
      <section className="section-pad bg-white">
        <div className="container grid gap-5 md:grid-cols-2">
          {videoIds.map((id) => (
            <div className="overflow-hidden rounded-lg border border-line bg-ink shadow-xl" key={id}>
              <iframe
                title={`Discover Your Swing video ${id}`}
                src={`https://www.youtube.com/embed/${id}`}
                className="aspect-video w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
