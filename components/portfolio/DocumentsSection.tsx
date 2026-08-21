import { FiArrowUpRight, FiDownload, FiFileText } from "react-icons/fi";
import { documents, type PortfolioCopy } from "@/data/portfolio";
import type { Language } from "@/types/portfolio";
import { SectionTitle } from "./SectionTitle";

interface DocumentsSectionProps {
  language: Language;
  copy: PortfolioCopy;
}

export function DocumentsSection({
  language,
  copy,
}: DocumentsSectionProps) {
  return (
    <section className="section documents shell" id="documents">
      <SectionTitle label={copy.documentsLabel}>
        {copy.documentsHeading}
      </SectionTitle>
      <div className="documentList">
        {documents.map((document) => (
          <article className="documentCard fadeUp" key={document.title.en}>
            <span className="documentIcon" aria-hidden="true">
              <FiFileText />
            </span>
            <div className="documentContent">
              <span className="documentMeta">{document.meta[language]}</span>
              <h3>{document.title[language]}</h3>
              <p>{document.description[language]}</p>
            </div>
            <div className="documentActions">
              <a href={document.href} target="_blank" rel="noreferrer">
                {copy.viewDocument}
                <FiArrowUpRight aria-hidden="true" />
              </a>
              <a href={document.href} download>
                {copy.downloadDocument}
                <FiDownload aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
