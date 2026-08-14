import { FiMoon, FiSun } from "react-icons/fi";
import { CONTACT, type PortfolioCopy } from "@/data/portfolio";
import type { Language, Theme } from "@/types/portfolio";

interface SiteHeaderProps {
  language: Language;
  theme: Theme;
  copy: PortfolioCopy;
  onLanguageChange: (language: Language) => void;
  onThemeToggle: () => void;
}

export function SiteHeader({
  language,
  theme,
  copy,
  onLanguageChange,
  onThemeToggle,
}: SiteHeaderProps) {
  const themeLabel = theme === "dark" ? copy.lightMode : copy.darkMode;

  return (
    <header className="siteHeader shell">
      <a className="brand" href="#top" aria-label={copy.homeLabel}>
        {copy.brand}
      </a>
      <div className="headerRight">
        <nav aria-label={copy.navigationLabel}>
          <a href="#projects">{copy.projects}</a>
          <a href="#about">{copy.about}</a>
          <a href={`mailto:${CONTACT.email}`}>{copy.contact}</a>
        </nav>
        <div className="headerTools">
          <div
            className="languageSwitch"
            aria-label={copy.languageLabel}
            role="group"
          >
            <button
              className={language === "en" ? "active" : ""}
              type="button"
              onClick={() => onLanguageChange("en")}
              aria-pressed={language === "en"}
            >
              EN
            </button>
            <button
              className={language === "fa" ? "active" : ""}
              type="button"
              onClick={() => onLanguageChange("fa")}
              aria-pressed={language === "fa"}
            >
              فا
            </button>
          </div>
          <button
            className="themeToggle"
            type="button"
            onClick={onThemeToggle}
            aria-label={themeLabel}
            title={themeLabel}
          >
            {theme === "dark" ? (
              <FiSun aria-hidden="true" />
            ) : (
              <FiMoon aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
