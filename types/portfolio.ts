import type { IconType } from "react-icons";

export type Language = "en" | "fa";
export type Theme = "dark" | "light";
export type Localized = Record<Language, string>;

export interface Skill {
  name: Localized;
  category: Localized;
  icon: IconType;
  color: string;
}

export interface Project {
  title: Localized;
  type: Localized;
  description: Localized;
  highlights: Localized[];
  stack: string[];
  links: Array<{
    label: Localized;
    href: string;
  }>;
  downloads?: Localized;
  icon: IconType;
}

export interface DocumentItem {
  title: Localized;
  description: Localized;
  meta: Localized;
  href: string;
}

export interface Experience {
  company: Localized;
  role: Localized;
  context?: Localized;
  teamNote?: Localized;
  date: Localized;
  highlights: Localized[];
  links?: Array<{
    label: Localized;
    href: string;
  }>;
}
