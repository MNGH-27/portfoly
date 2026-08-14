import { FiArrowUpRight, FiBriefcase } from "react-icons/fi";
import { experience, type PortfolioCopy } from "@/data/portfolio";
import type { Language } from "@/types/portfolio";
import { SectionTitle } from "./SectionTitle";

interface ExperienceSectionProps {
  language: Language;
  copy: PortfolioCopy;
}

export function ExperienceSection({ language, copy }: ExperienceSectionProps) {
  return (
    <section className="section experience shell" id="experience">
      <SectionTitle label={copy.experienceLabel}>
        {copy.experienceHeading}
      </SectionTitle>
      <div className="experienceList">
        {experience.map((item) => (
          <article
            className="experienceItem fadeUp"
            key={`${item.company.en}-${item.date.en}`}
          >
            <div className="experienceRow">
              <span className="rowIcon subtle" aria-hidden="true">
                <FiBriefcase />
              </span>
              <div className="experienceIdentity">
                <h3>{item.company[language]}</h3>
                <span className="experienceRole">{item.role[language]}</span>
                {item.context ? (
                  <span className="experienceContext">
                    {item.context[language]}
                  </span>
                ) : null}
                {item.teamNote ? (
                  <span className="experienceTeamNote">
                    {item.teamNote[language]}
                  </span>
                ) : null}
              </div>
              <time>{item.date[language]}</time>
            </div>
            <div className="experienceDetails">
              <ul>
                {item.highlights.map((highlight) => (
                  <li key={highlight.en}>{highlight[language]}</li>
                ))}
              </ul>
              {item.links?.length ? (
                <div className="experienceLinks">
                  {item.links.map((link) => (
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
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
