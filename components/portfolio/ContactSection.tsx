import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { CONTACT, type PortfolioCopy } from "@/data/portfolio";

interface ContactSectionProps {
  copy: PortfolioCopy;
}

export function ContactSection({ copy }: ContactSectionProps) {
  return (
    <section className="contact shell fadeUp" id="contact">
      <span className="contactLabel">
        <FiMail aria-hidden="true" /> {copy.contactLabel}
      </span>
      <h2>{copy.contactHeading}</h2>
      <a className="button light" href={`mailto:${CONTACT.email}`}>
        {copy.startConversation}
        <FiArrowUpRight aria-hidden="true" />
      </a>
      <div className="socials">
        <a href={CONTACT.linkedin} target="_blank" rel="noreferrer">
          <FiLinkedin aria-hidden="true" /> LinkedIn
        </a>
        <a href={CONTACT.github} target="_blank" rel="noreferrer">
          <FiGithub aria-hidden="true" /> GitHub
        </a>
      </div>
    </section>
  );
}
