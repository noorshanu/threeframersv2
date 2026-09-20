import { FlywheelClient } from "@/components/sections/FlywheelClient";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CAL_DISCOVERY_URL } from "@/lib/constants";
import { repurposingSection } from "@/lib/content";

export function Repurposing() {
  return (
    <section id="flywheel-section" className="py-16 md:py-20">
      <div className="padding-global">
        <div className="container-large">
          <div className="mb-12 max-w-3xl">
            <SectionHeader
              title={repurposingSection.title}
              highlight={repurposingSection.titleHighlight}
            />
            <p className="mt-4 text-lg text-grey-2">
              {repurposingSection.description}
            </p>
          </div>
        </div>
      </div>

      <FlywheelClient />

      <div className="padding-global">
        <div className="container-large relative z-10 mt-14 flex justify-center md:mt-20">
          <Button href={CAL_DISCOVERY_URL} external className="px-8 py-4 text-lg">
            Book a Discovery Call
          </Button>
        </div>
      </div>
    </section>
  );
}
