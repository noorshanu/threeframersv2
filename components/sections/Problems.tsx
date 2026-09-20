import Image from "next/image";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { problemsSection } from "@/lib/content";

export function Problems() {
  const leftRoles = problemsSection.roles.slice(0, 3);
  const rightRoles = problemsSection.roles.slice(3);

  return (
    <section
      id="section_solutions"
      className="bg-cover bg-center py-16 md:py-24"
      style={{
        backgroundImage:
          "url('https://cdn.prod.website-files.com/6778043699a2f913f47628dd/68ce5f7fbf72d4300ecf5d59_Clip path group (1).avif')",
      }}
    >
      <div className="padding-global">
        <div className="container-large">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.5fr_1fr] lg:gap-12">
            <div className="flex flex-col gap-6">
              {leftRoles.map((role) => (
                <RoleCard key={role.label} {...role} />
              ))}
            </div>

            <div className="text-center">
              <SectionHeader
                title={problemsSection.title}
                highlight={problemsSection.titleHighlight}
                className="justify-center"
              />
              <p className="mx-auto mt-4 max-w-md text-grey-2">
                {problemsSection.description}
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {rightRoles.map((role) => (
                <RoleCard key={role.label} {...role} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RoleCard({
  label,
  icon,
  rotation,
}: {
  label: string;
  icon: string;
  rotation: string;
}) {
  return (
    <div data-card-reveal className={`transform ${rotation}`}>
      <div className="rounded-lg bg-surface-muted p-4 text-center text-accent-purple">
        <div className="mb-2 flex justify-center">
          <Image src={icon} alt="" width={80} height={80} className="h-16 w-16" />
        </div>
        <p className="text-lg font-medium text-white">{label}</p>
      </div>
    </div>
  );
}
