import type { Project } from "./ProjectList";
import ProjectSlider from "./ProjectSlider";

export default function Card({ project }: { project: Project }) {
  return (
    <article
      key={project.id}
      className="relative grid min-w-0 grid-cols-1 gap-y-6 border-b border-[#181717]/100 py-10 sm:gap-y-7 sm:py-14 lg:grid-cols-[1fr_minmax(0,540px)] xl:grid-cols-[1fr_minmax(0,660px)] lg:items-start lg:gap-x-10"
      style={{ borderBottomWidth: "1.5px" }}
    >
      <div className="order-2 min-w-0 lg:order-1">
        <p className="font-inter text-base font-medium tracking-[-0.03em] text-[#181717] sm:text-lg">
          {project.id} / {project.title}
        </p>

        <p className="mt-3 font-inter text-base leading-[1.55] tracking-[-0.025em] text-[#181717] sm:mt-4 sm:text-lg lg:text-[19px]">
          {project.description}
        </p>

        {project.subtext && (
          <p className="mt-3 max-w-xl font-inter text-sm leading-[1.6] tracking-[-0.02em] text-[#606060] sm:mt-4 sm:text-base">
            {project.subtext}
          </p>
        )}
        {project.link && (
          <div className="mt-6 flex items-center gap-2">
            <span className="text-[#606060]">↗</span>
            <a
              href={project.linkHref}
              className={`font-inter text-base font-medium tracking-[-0.03em] hover:underline ${
                project.linkGray ? "text-[#606060]" : "text-[#181717]"
              }`}
            >
              {project.link}
            </a>
          </div>
        )}

        {project.GitHub && (
          <p className="mt-3 font-inter text-sm text-[#606060] sm:text-base">
            <span className="font-normal">GitHub: </span>
            <a
              href={project.GitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium tracking-[-0.03em] text-[#181717] hover:underline"
            >
              View repository
            </a>
          </p>
        )}
      </div>

      <div className="relative order-1 aspect-video w-full min-w-0 overflow-hidden rounded-xl border border-[#181717]/20 bg-[#f4f4f4] lg:order-2 lg:aspect-[640/365] lg:h-[320px] xl:h-[380px]">
        {project.screenshots && project.screenshots.length > 0 ? (
          <ProjectSlider
            projectTitle={project.title}
            screenshots={project.screenshots}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="font-inter text-sm text-[#606060] sm:text-base">
              Add screenshots for {project.title}
            </span>
          </div>
        )}
      </div>
    </article>
  );
}
