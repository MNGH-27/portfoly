import {
  FiArrowDown,
  FiArrowUpRight,
  FiGithub,
  FiMail,
} from "react-icons/fi";
import { CONTACT, coreSkills, type PortfolioCopy } from "@/data/portfolio";
import type { Language } from "@/types/portfolio";

interface HeroSectionProps {
  language: Language;
  copy: PortfolioCopy;
}

export function HeroSection({ language, copy }: HeroSectionProps) {
  return (
    <section className="hero shell" id="top">
      <div className="status reveal delayOne">
        <span /> {copy.status}
      </div>
      <h1 className="reveal delayTwo">
        {copy.name}
        <span>{copy.role}</span>
      </h1>
      <p className="heroIntro reveal delayThree">{copy.intro}</p>

      <a
        className="githubSpotlight reveal delayThree"
        href={CONTACT.github}
        target="_blank"
        rel="noreferrer"
      >
        <span className="githubSpotlightIcon" aria-hidden="true">
          <FiGithub />
        </span>
        <span className="githubSpotlightCopy">
          <small>{copy.githubEyebrow}</small>
          <strong>{copy.githubHeading}</strong>
          <span>{copy.githubDescription}</span>
        </span>
        <span className="githubSpotlightAction">
          {copy.githubAction}
          <FiArrowUpRight aria-hidden="true" />
        </span>
      </a>

      <div
        className="skillGrid reveal delayThree"
        aria-label={copy.coreSkillsLabel}
      >
        {coreSkills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div className="skillCard" key={skill.name.en}>
              <div className="skillTop">
                <Icon
                  className="skillIcon"
                  style={{ color: skill.color }}
                  aria-hidden="true"
                />
                <span>{skill.category[language]}</span>
              </div>
              <strong>{skill.name[language]}</strong>
            </div>
          );
        })}
      </div>

      <div className="heroActions reveal delayThree">
        <a className="button" href="#projects">
          {copy.explore}
          <FiArrowDown aria-hidden="true" />
        </a>
        <a className="textLink" href={`mailto:${CONTACT.email}`}>
          <FiMail aria-hidden="true" /> {copy.getInTouch}
          <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
