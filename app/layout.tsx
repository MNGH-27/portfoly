import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohsen Nouri — Software Engineer & Developer",
  description:
    "The developer archive of Mohsen Nouri — software engineer, web developer, and Computer Engineering master's student at the University of Tehran.",
  openGraph: {
    title: "Mohsen Nouri — The Developer’s Sanctuary",
    description: "Projects, engineering notes, and the development archive of Mohsen Nouri.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr" data-theme="dark" style={{ colorScheme: "dark" }}>
      <body>{children}</body>
    </html>
  );
}
