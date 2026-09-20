import { ScrollAnimations } from "@/components/animations/ScrollAnimations";
import { FAQ } from "@/components/sections/FAQ";
import { Goal } from "@/components/sections/Goal";
import { Hero } from "@/components/sections/Hero";
import { LongForm } from "@/components/sections/LongForm";
import { Pricing } from "@/components/sections/Pricing";
import { Problems } from "@/components/sections/Problems";
import { Repurposing } from "@/components/sections/Repurposing";
import { Spotlight } from "@/components/sections/Spotlight";
import { SpotlightReviews } from "@/components/sections/SpotlightReviews";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { ViralEdits } from "@/components/sections/ViralEdits";
import { Work } from "@/components/sections/Work";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <TrustedBy showMarquee={false} /> */}
      <Work />
      <Repurposing />
      <ViralEdits />
      <LongForm />
      <Spotlight />
      <SpotlightReviews />
      <Pricing />
      <Problems />
      <Goal />
      <Testimonials />
      <FAQ />
      <ScrollAnimations />
    </>
  );
}
