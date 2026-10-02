import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-white py-12 sm:py-[64px] lg:py-[78px]"
    >
      <div className="mx-auto w-[calc(100%-28px)] max-w-[1320px] sm:w-[calc(100%-32px)]">
        <Heading />

        <div className="space-y-3.5 sm:space-y-4">
          {projects.map((project, index) => {
            const featured = index === 0;

            return (
              <article
                key={project.title}
                className={`group overflow-hidden border border-[#dce2dc] bg-[#f8f8f4] ${
                  featured
                    ? "lg:grid lg:grid-cols-[1.1fr_.9fr]"
                    : "lg:grid lg:grid-cols-[.72fr_1.28fr]"
                }`}
              >
                <div
                  className={`relative overflow-hidden ${
                    featured
                      ? "aspect-[4/3] sm:aspect-video lg:aspect-auto lg:min-h-[450px]"
                      : "aspect-[4/3] sm:aspect-video lg:aspect-[1.35/1]"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes={
                      featured
                        ? "(max-width: 1024px) 100vw, 55vw"
                        : "(max-width: 1024px) 100vw, 40vw"
                    }
                    className={`${project.image.includes("softener") ? "bg-[#eef1ed] object-contain" : "object-cover"} transition duration-700 group-hover:scale-[1.035]`}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                  <span className="absolute left-3 top-3 grid h-7 min-w-7 place-items-center bg-[#073d2d] px-1.5 text-[8px] font-extrabold tracking-[.08em] text-white sm:left-4 sm:top-4 sm:h-8 sm:min-w-8">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="absolute bottom-3 left-3 text-[8px] font-extrabold tracking-[.14em] text-white/80 uppercase sm:bottom-4 sm:left-4 sm:text-[9px]">
                    {project.location}
                  </span>
                </div>

                <div
                  className={`flex flex-col ${
                    featured
                      ? "justify-center p-4 sm:p-6 lg:p-8 xl:p-9"
                      : "p-4 sm:p-6 lg:p-7"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[8px] font-extrabold tracking-[.14em] text-[#718078] uppercase sm:text-[9px]">
                      {project.client}
                    </span>

                    <span className="text-[7px] font-bold tracking-[.1em] text-[#929d96] uppercase sm:text-[8px]">
                      PROJECT {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3
                    className={`font-bold leading-[1.02] tracking-[-.045em] text-[#073d2d] ${
                      featured
                        ? "mt-3 text-[28px] sm:text-[36px] lg:text-[43px]"
                        : "mt-2.5 text-[24px] sm:text-[28px] lg:text-[31px]"
                    }`}
                  >
                    {project.title}
                  </h3>

                  <div className="mt-5 grid grid-cols-1 gap-4 border-t border-[#dce2dc] pt-4 sm:grid-cols-2 sm:gap-5">
                    <Detail
                      label="Challenge"
                      text={project.problem}
                    />

                    <Detail
                      label="Solution"
                      text={project.solution}
                    />
                  </div>

                  <div className="mt-4 border-t border-[#dce2dc] pt-4">
                    <span className="text-[8px] font-extrabold tracking-[.14em] text-[#929d96] uppercase">
                      Technical scope
                    </span>

                    <p className="mt-1 text-[11px] leading-[1.55] text-[#68736d] sm:text-[12px]">
                      {project.tech}
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-1.5">
                    <Tag>{project.measure}</Tag>
                    <Tag>{project.result}</Tag>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-[#dce2dc] pt-4">
                    <span className="text-[8px] font-extrabold tracking-[.14em] text-[#0b4b38] uppercase sm:text-[9px]">
                      Completed project
                    </span>

                    <span className="grid h-7 w-7 place-items-center border border-[#dce2dc] text-[#073d2d] transition group-hover:border-[#073d2d] group-hover:bg-[#073d2d] group-hover:text-white sm:h-8 sm:w-8">
                      <ArrowUpRightIcon className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Heading() {
  return (
    <div className="mb-6 grid gap-4 sm:mb-7 lg:mb-8 lg:grid-cols-[1fr_.65fr] lg:items-end lg:gap-14">
      <div>
        <Eyebrow>SELECTED PROJECTS</Eyebrow>

        <h2 className="mt-3 max-w-[700px] text-[36px] font-bold leading-[.98] tracking-[-.06em] text-[#073d2d] sm:mt-3.5 sm:text-[clamp(42px,5vw,62px)]">
          Work that performs.
        </h2>
      </div>

      <p className="max-w-[520px] text-[13px] leading-[1.6] text-[#68736d] sm:text-[14px] sm:leading-[1.7]">
        A selection of solar, water and pumping systems delivered for
        different operating environments.
      </p>
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 text-[9px] font-extrabold tracking-[.20em] text-[#718078] uppercase sm:text-[10px]">
      <span className="h-px w-7 bg-current" />
      {children}
    </span>
  );
}

function Detail({
  label,
  text,
}: {
  label: string;
  text: string;
}) {
  return (
    <div>
      <span className="text-[8px] font-extrabold tracking-[.14em] text-[#929c96] uppercase sm:text-[9px]">
        {label}
      </span>

      <p className="mt-1 text-[11px] leading-[1.55] text-[#68736d] sm:text-[12px]">
        {text}
      </p>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="border border-[#dce2dc] bg-white px-2 py-1.5 text-[8px] font-bold leading-[1.3] text-[#68736d] sm:px-2.5 sm:py-1.5 sm:text-[9px]">
      {children}
    </span>
  );
}