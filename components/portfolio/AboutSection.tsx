import { FiCheck } from "react-icons/fi";
import { moreSkills, type PortfolioCopy } from "@/data/portfolio";
import type { Language } from "@/types/portfolio";
import { SectionTitle } from "./SectionTitle";

interface AboutSectionProps {
  language: Language;
  copy: PortfolioCopy;
}

export function AboutSection({ language, copy }: AboutSectionProps) {
  return (
    <section className="section about shell" id="about">
      <SectionTitle label={copy.aboutLabel}>
        {copy.aboutHeadingOne}
        <br />
        {copy.aboutHeadingTwo}
      </SectionTitle>
      <div className="aboutGrid">
        <div className="aboutText fadeUp">
          <p>{copy.aboutOne}</p>
          <p>{copy.aboutTwo}</p>
        </div>
        <div className="facts fadeUp">
          <div>
            <strong>{language === "fa" ? "+۵" : "5+"}</strong>
            <span>{copy.experienceYears}</span>
          </div>
          <div>
            <strong>Go + Node</strong>
            <span>{copy.backendRuntimes}</span>
          </div>
          <div>
            <strong>{language === "fa" ? "رابط ← API" : "UI → API"}</strong>
            <span>{copy.fullStackScope}</span>
          </div>
        </div>
      </div>
      <div className="moreSkills fadeUp" aria-label={copy.additionalSkills}>
        {moreSkills.map((skill) => (
          <span key={skill.en}>
            <FiCheck aria-hidden="true" />
            {skill[language]}
          </span>
        ))}
      </div>
    </section>
  );
}
