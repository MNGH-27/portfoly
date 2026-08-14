import { FiArrowUpRight } from "react-icons/fi";
import { projects, type PortfolioCopy } from "@/data/portfolio";
import type { Language } from "@/types/portfolio";
import { SectionTitle } from "./SectionTitle";

interface ProjectsSectionProps {
  language: Language;
  copy: PortfolioCopy;
}

export function ProjectsSection({ language, copy }: ProjectsSectionProps) {
  return (
    <section className="section shell" id="projects">
      <SectionTitle label={copy.projectsLabel}>
        {copy.projectsHeading}
      </SectionTitle>
      <div className="projectList">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <a
              className="projectRow fadeUp"
              href={project.href}
              key={project.title.en}
              target="_blank"
              rel="noreferrer"
            >
              <span className="rowIcon" aria-hidden="true">
                <Icon />
              </span>
              <div className="projectName">
                <h3>{project.title[language]}</h3>
                <span>{project.type[language]}</span>
              </div>
              <p>{project.description[language]}</p>
              <FiArrowUpRight className="arrow" aria-hidden="true" />
            </a>
          );
        })}
      </div>
    </section>
  );
}
