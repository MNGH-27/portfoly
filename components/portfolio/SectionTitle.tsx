import type { ReactNode } from "react";

interface SectionTitleProps {
  label: string;
  children: ReactNode;
}

export function SectionTitle({ label, children }: SectionTitleProps) {
  return (
    <div className="sectionTitle fadeUp">
      <span>{label}</span>
      <h2>{children}</h2>
    </div>
  );
}
