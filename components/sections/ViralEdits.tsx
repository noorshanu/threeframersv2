import { SectionHeader } from "@/components/ui/SectionHeader";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { viralSection } from "@/lib/content";

export function ViralEdits() {
  return (
    <section className="overflow-hidden py-16 md:py-20">
      <div className="padding-global">
        <div className="container-large">
          <div className="mb-10 max-w-3xl">
            <SectionHeader
              title={viralSection.title}
              highlight={viralSection.titleHighlight}
            />
            <p className="mt-4 text-lg text-grey-2">{viralSection.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {viralSection.videos.map((video) => (
              <div
                key={video}
                className="rounded-2xl border border-[#424242] p-2"
              >
                <VideoEmbed src={video} aspectRatio="9/16" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
