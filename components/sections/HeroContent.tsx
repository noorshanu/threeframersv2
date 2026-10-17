import { Button } from "@/components/ui/Button";
import { CAL_DISCOVERY_URL } from "@/lib/constants";
import { heroContent } from "@/lib/content";

export function HeroContent() {
  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-[52rem] flex-col items-center px-[5%] py-16 text-center md:mr-8 md:py-20 lg:ml-[5vw] lg:py-28">
        <div className="mb-6 inline-block text-center">
          <h1 className="hero-title text-[1.875rem] font-semibold leading-[1.2] tracking-[-1px] min-[768px]:text-[2.25rem] min-[1024px]:text-[3.25rem] min-[1024px]:tracking-[-3px] min-[1440px]:text-[3.5rem]">
            {heroContent.headlineBefore}{" "}
            <span className="text-accent">{heroContent.headlineHighlight}</span>
          </h1>
        </div>

        <div className="hero-copy max-w-[40rem]">
          <p className="text-base text-grey-2 min-[768px]:text-lg">
            {heroContent.description}
          </p>
        </div>

        <div className="hero-cta mt-8">
          <Button href={CAL_DISCOVERY_URL} external>
            {heroContent.ctaLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
