import { FiArrowUpRight, FiCheck } from "react-icons/fi";
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
      <div className="projectGrid">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <article
              className="projectCard fadeUp"
              key={project.title.en}
            >
              <div className="projectCardHeader">
                <span className="rowIcon" aria-hidden="true">
                  <Icon />
                </span>
                <span className="projectType">{project.type[language]}</span>
              </div>
              <h3>{project.title[language]}</h3>
              <p>{project.description[language]}</p>
              <ul className="projectHighlights">
                {project.highlights.map((highlight) => (
                  <li key={highlight.en}>
                    <FiCheck aria-hidden="true" />
                    <span>{highlight[language]}</span>
                  </li>
                ))}
              </ul>
              <div
                className="projectStack"
                aria-label={
                  language === "fa" ? "فناوری‌های پروژه" : "Technology stack"
                }
              >
                {project.stack.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
              <div className="projectLinks">
                {project.links.map((link) => (
                  <a
                    href={link.href}
                    key={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label[language]}
                    <FiArrowUpRight aria-hidden="true" />
                  </a>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
