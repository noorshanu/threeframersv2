import { SectionHeader } from "@/components/ui/SectionHeader";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { longFormSection } from "@/lib/content";

export function LongForm() {
  return (
    <section className="py-16 md:py-20">
      <div className="padding-global">
        <div className="container-large">
          <div className="mb-10 max-w-3xl">
            <SectionHeader
              title={longFormSection.title}
              highlight={longFormSection.titleHighlight}
              sticker={longFormSection.sticker}
            />
            <p className="mt-4 text-lg text-grey-2">
              {longFormSection.description}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {longFormSection.videos.map((video) => (
              <div
                key={video}
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
