import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { CAL_DISCOVERY_URL } from "@/lib/constants";
import { spotlightSection } from "@/lib/content";

export function Spotlight() {
  return (
    <section className="relative z-[2] py-16 md:py-24">
      <div className="padding-global">
        <div className="container-large">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeader
                title={spotlightSection.title}
                highlight={spotlightSection.titleHighlight}
              />
              <p className="mt-4 text-lg">{spotlightSection.description}</p>
              <p className="mt-2 text-grey-2">{spotlightSection.subtext}</p>
              <div className="mt-8">
                <Button href={CAL_DISCOVERY_URL} external>
                  Book a Discovery Call
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-[#424242] p-2">
              <VideoEmbed src={spotlightSection.video} aspectRatio="16/9" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
