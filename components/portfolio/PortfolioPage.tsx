"use client";

import { copy } from "@/data/portfolio";
import { usePortfolioPreferences } from "@/hooks/usePortfolioPreferences";
import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";
import { ExperienceSection } from "./ExperienceSection";
import { HeroSection } from "./HeroSection";
import { ProjectsSection } from "./ProjectsSection";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function PortfolioPage() {
  const { language, setLanguage, theme, toggleTheme } =
    usePortfolioPreferences();
  const pageCopy = copy[language];

  return (
    <main>
      <SiteHeader
        language={language}
        theme={theme}
        copy={pageCopy}
        onLanguageChange={setLanguage}
        onThemeToggle={toggleTheme}
      />
      <HeroSection language={language} copy={pageCopy} />
      <ProjectsSection language={language} copy={pageCopy} />
      <AboutSection language={language} copy={pageCopy} />
      <ExperienceSection language={language} copy={pageCopy} />
      <ContactSection copy={pageCopy} />
      <SiteFooter copy={pageCopy} />
    </main>
  );
}
