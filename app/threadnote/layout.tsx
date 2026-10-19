import type { Metadata } from "next";
import "./threadnote.css";
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Threadnote — Desktop notes, Google Tasks & Calendar",
  description: "Threadnote by Mohsen Nouri: a local-first Windows workspace for notes, Gmail, Google Tasks, and Google Calendar.",
  openGraph: { title: "Threadnote", description: "Your notes and Google workspace, together on your desktop.", type: "website" },
};

const base = process.env.PAGES_BASE_PATH ?? "";
export default function ThreadnoteLayout({ children }: { children: React.ReactNode }) {
  return <div className="tn-site">
    <a className="tn-skip" href="#threadnote-content">Skip to content</a>
    <header className="tn-header"><a className="tn-brand" href={base + "/threadnote/"} aria-label="Threadnote home"><span aria-hidden="true">T</span>Threadnote</a><nav aria-label="Threadnote navigation"><a href={base + "/threadnote/#features"}>Features</a><a href={base + "/threadnote/privacy/"}>Privacy</a><a href={base + "/threadnote/terms/"}>Terms</a></nav></header>
    {children}
    <footer className="tn-footer"><div><strong>Threadnote</strong><p>A desktop project by Mohsen Nouri.</p></div><nav aria-label="Footer navigation"><a href={base + "/"}>Portfolio</a><a href={base + "/threadnote/privacy/"}>Privacy policy</a><a href={base + "/threadnote/terms/"}>Terms of use</a><a href="mailto:mnq13800831@gmail.com">Contact</a></nav></footer>
  </div>;
}
