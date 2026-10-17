import { SectionHeader } from "@/components/ui/SectionHeader";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { workSection } from "@/lib/content";

export function Work() {
  return (
    <section
      id="section_work"
      className="overflow-hidden bg-gradient-to-b from-surface to-background py-16 md:py-20"
    >
      <div className="padding-global">
        <div className="container-large">
          <div className="mb-10 max-w-3xl">
            <SectionHeader
              title={workSection.title}
              highlight={workSection.titleHighlight}
            />
            <p className="mt-4 text-lg text-grey-2">{workSection.description}</p>
            {workSection.closing ? (
              <p className="mt-4 text-lg italic text-foreground">
                {workSection.closing}
              </p>
            ) : null}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {workSection.videos.map((video) => (
              <div
                key={video}
                data-card-reveal
                className="rounded-2xl border border-[#424242] p-2"
              >
                <VideoEmbed src={video} aspectRatio="16/9" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
