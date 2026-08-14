"use client";

import { useEffect, useState } from "react";
import type { Language, Theme } from "@/types/portfolio";

const LANGUAGE_KEY = "portfolio-language";
const THEME_KEY = "portfolio-theme";

export function usePortfolioPreferences() {
  const [preferences, setPreferences] = useState<{
    language: Language;
    theme: Theme;
    isReady: boolean;
  }>({ language: "en", theme: "dark", isReady: false });

  const { language, theme, isReady } = preferences;

  useEffect(() => {
    try {
      const savedLanguage = window.localStorage.getItem(LANGUAGE_KEY);
      const savedTheme = window.localStorage.getItem(THEME_KEY);

      const language =
        savedLanguage === "en" || savedLanguage === "fa" ? savedLanguage : "en";
      const theme =
        savedTheme === "dark" || savedTheme === "light" ? savedTheme : "dark";

      // Browser preferences are an external source and are restored after hydration.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPreferences({ language, theme, isReady: true });
    } catch {
      setPreferences({ language: "en", theme: "dark", isReady: true });
    }
  }, []);

  useEffect(() => {
    if (!isReady) return;

    const root = document.documentElement;
    root.lang = language;
    root.dir = language === "fa" ? "rtl" : "ltr";
    root.dataset.theme = theme;
    root.style.colorScheme = theme;

    try {
      window.localStorage.setItem(LANGUAGE_KEY, language);
      window.localStorage.setItem(THEME_KEY, theme);
    } catch {
      // Preferences remain active for the current session.
    }
  }, [isReady, language, theme]);

  const toggleTheme = () => {
    setPreferences((current) => ({
      ...current,
      theme: current.theme === "dark" ? "light" : "dark",
    }));
  };

  const setLanguage = (nextLanguage: Language) => {
    setPreferences((current) => ({ ...current, language: nextLanguage }));
  };

  return { language, setLanguage, theme, toggleTheme };
}
