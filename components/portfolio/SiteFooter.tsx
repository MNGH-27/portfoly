import { FiArrowUp, FiMapPin } from "react-icons/fi";
import type { PortfolioCopy } from "@/data/portfolio";

interface SiteFooterProps {
  copy: PortfolioCopy;
}

export function SiteFooter({ copy }: SiteFooterProps) {
  return (
    <footer className="footer shell">
      <span>{copy.copyright}</span>
      <span className="footerLocation">
        <FiMapPin aria-hidden="true" /> {copy.location}
      </span>
      <a href="#top">
        {copy.backToTop}
        <FiArrowUp aria-hidden="true" />
      </a>
    </footer>
  );
}
