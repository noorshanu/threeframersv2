import { Accordion } from "@/components/ui/Accordion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { faqs } from "@/lib/content";

export function FAQ() {
  return (
    <section id="section_faq" className="py-16 md:py-24">
      <div className="padding-global">
        <div className="container-large">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1fr] lg:gap-20">
            <div>
              <SectionHeader title="FAQs" />
            </div>
            <Accordion items={faqs} />
          </div>
        </div>
      </div>
    </section>
  );
}
