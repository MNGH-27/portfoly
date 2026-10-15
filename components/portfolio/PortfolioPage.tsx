"use client";

import { useEffect, useMemo, useState } from "react";
import {
  FiArrowRight, FiArrowUpRight, FiBookOpen, FiBox, FiBriefcase, FiCode,
  FiCommand, FiCpu, FiDatabase, FiDownload, FiEdit3, FiFileText, FiGithub, FiGrid,
  FiLayers, FiLinkedin, FiMail, FiMapPin, FiServer, FiTerminal, FiX, FiZap,
} from "react-icons/fi";
import { CONTACT, documents, experience, projects } from "@/data/portfolio";
import type { Project } from "@/types/portfolio";

type PanelId = "projects" | "engineering" | "about" | "archive" | "articles" | "contact";

const navigation: Array<{ id: PanelId; label: string; detail: string; icon: typeof FiGrid }> = [
  { id: "projects", label: "Project systems", detail: "Computer", icon: FiCpu },
  { id: "engineering", label: "Engineering notes", detail: "Notebook", icon: FiBookOpen },
  { id: "about", label: "Profile & education", detail: "Bookshelf", icon: FiGrid },
  { id: "archive", label: "Development archive", detail: "Desk files", icon: FiBox },
  { id: "articles", label: "Technical articles", detail: "Reading desk", icon: FiEdit3 },
  { id: "contact", label: "Open a channel", detail: "Contact", icon: FiMail },
];

const articles = [
  {
    slug: "reliable-task-scheduler-go",
    index: "NOTE / 001",
    title: "From Goroutines to Guarantees: Designing a Reliable Task Scheduler in Go",
    summary: "A practical look at the point where concurrent execution becomes a real scheduling system: priorities, backpressure, retries, leases, and recovery.",
    readTime: "8 min read",
    tags: ["Go", "Concurrency", "Redis", "Distributed systems"],
    sections: [
      { heading: "A worker pool is only the beginning", body: "Starting goroutines and feeding them jobs solves parallel execution, but it does not yet solve scheduling. A scheduler also needs explicit answers for capacity, priority, delayed work, cancellation, failure, and shutdown. The useful design shift is to stop thinking about ‘running functions later’ and start thinking about the lifecycle of a job." },
      { heading: "Backpressure is part of correctness", body: "An unbounded queue hides overload until memory or latency becomes the failure mode. Bounded capacity makes pressure visible. Producers can wait, reject work, or apply a policy deliberately. This turns overload from an accident into a behavior the system can explain and test." },
      { heading: "Retries need time and randomness", body: "Immediate retries can amplify a dependency failure. Exponential backoff creates breathing room, while jitter prevents many workers from retrying at the same instant. A retry policy should also preserve attempt counts, respect cancellation, and apply a timeout to each attempt rather than only to the whole job." },
      { heading: "Distribution changes ownership", body: "Once multiple processes can claim work, ownership must expire safely. Atomic claims, leases, and heartbeats let another worker recover a job when its owner disappears. The central lesson is that a distributed scheduler is not just a faster local scheduler; it is a protocol for transferring responsibility." },
      { heading: "The testable boundary", body: "Keep job semantics separate from storage and transport. The in-memory engine can exercise scheduling rules quickly, while the Redis-backed engine focuses on atomicity, recovery, and cross-process coordination. Clear boundaries make the difficult behavior observable without making every test a distributed test." },
    ],
  },
  {
    slug: "accessible-jalali-datepicker",
    index: "NOTE / 002",
    title: "Calendar UI Is a Systems Problem: Building an Accessible Jalali Datepicker",
    summary: "What a Jalali datepicker teaches about domain logic, state design, keyboard interaction, and building flexible UI without hiding complexity.",
    readTime: "7 min read",
    tags: ["React", "TypeScript", "WAI-ARIA", "UI architecture"],
    sections: [
      { heading: "Separate the calendar from the component", body: "Calendar conversion, month boundaries, disabled dates, holidays, and range rules are domain logic. Popovers, modals, inputs, and focus rings are interface concerns. Keeping those layers separate makes the core easier to test and lets different visual forms share the same behavior." },
      { heading: "Selection is a state machine", body: "Single, range, and multiple selection are not cosmetic variations. Each mode accepts different transitions and has different incomplete states. Modeling those transitions explicitly prevents event handlers from becoming a collection of special cases and gives consumers predictable callbacks." },
      { heading: "Accessibility changes the architecture", body: "Keyboard navigation and WAI-ARIA semantics work best when they are structural requirements, not a final checklist. The component needs a stable focus model, meaningful grid relationships, announced state changes, and a clear escape path. Those needs influence the public API as much as the markup." },
      { heading: "Inputs and calendars disagree", body: "A text field is linear; a calendar is spatial. Masked input, parsing, validation, and partial values therefore need their own controlled flow. Synchronizing that flow with a visual calendar is easier when both produce one canonical date representation instead of editing each other directly." },
      { heading: "Fewer dependencies, clearer decisions", body: "Avoiding a runtime date-library dependency reduces bundle weight and version coupling, but it also makes the project responsible for well-tested conversion and formatting behavior. The right lesson is not that dependencies are bad; it is that every dependency decision moves responsibility somewhere, and that destination should be intentional." },
    ],
  },
];

const engineeringNotes = [
  { title: "Backend development", code: "01 / SYSTEMS", icon: FiServer, body: "Designing services around explicit boundaries, predictable failure modes, and maintainable operational behavior.", details: ["Go & Node.js", "Validation and error design", "Testing and graceful shutdown"] },
  { title: "API design", code: "02 / INTERFACES", icon: FiCode, body: "Thinking about APIs as long-lived contracts: clear resources, useful errors, and deliberate compatibility decisions.", details: ["REST and GraphQL", "Schema clarity", "Documentation and versioning"] },
  { title: "Data & databases", code: "03 / STATE", icon: FiDatabase, body: "Exploring how data models, indexes, caching, and consistency choices shape the reliability of a product.", details: ["PostgreSQL and MySQL", "Redis", "SQL / NoSQL modeling"] },
  { title: "Software architecture", code: "04 / STRUCTURE", icon: FiLayers, body: "Building software whose structure explains itself, with boundaries that keep change local and intent visible.", details: ["Separation of concerns", "Distributed systems", "Evolutionary design"] },
  { title: "Performance", code: "05 / BEHAVIOR", icon: FiZap, body: "Measuring before optimizing, then working across queries, caching, concurrency, rendering, and delivery.", details: ["Profiling", "Caching strategies", "Web performance"] },
  { title: "Modern web", code: "06 / EXPERIENCE", icon: FiTerminal, body: "Treating frontend and backend as one product system, from accessible interfaces to dependable services.", details: ["React and Next.js", "TypeScript", "End-to-end delivery"] },
];

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noreferrer">{children}<FiArrowUpRight aria-hidden="true" /></a>;
}

function ProjectCaseStudy({ project }: { project: Project }) {
  return (
    <article className="caseStudy">
      <div className="caseStudyTopline"><span>{project.type.en}</span><span>CASE FILE / {project.title.en.slice(0, 3).toUpperCase()}</span></div>
      <h3>{project.title.en}</h3>
      {project.downloads ? <p className="projectSignal">{project.downloads.en}</p> : null}
      <p className="caseLead">{project.description.en}</p>
      <div className="caseGrid">
        <div><span>Architecture</span><p>{project.highlights[0]?.en}</p></div>
        <div><span>Technical challenge</span><p>{project.highlights[1]?.en}</p></div>
        <div><span>Engineering decision</span><p>{project.highlights[2]?.en}</p></div>
      </div>
      <div className="stackRow" aria-label="Technology stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
      <div className="caseLinks">{project.links.map((link) => <ExternalLink href={link.href} key={link.href}>{link.label.en}</ExternalLink>)}</div>
    </article>
  );
}

function ProjectsPanel() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="projectExplorer">
      <aside className="projectSidebar" aria-label="Project explorer">
        <div className="explorerLabel"><FiGrid /> PROJECT EXPLORER</div>
        {projects.map((project, index) => (
          <button type="button" className={selected === index ? "active" : ""} onClick={() => setSelected(index)} key={project.title.en} aria-pressed={selected === index}>
            <span>{String(index + 1).padStart(2, "0")}</span>{project.title.en}
          </button>
        ))}
      </aside>
      <div className="projectViewport">
        {projects.map((project, index) => <div className={selected === index ? "projectPane active" : "projectPane"} key={project.title.en}><ProjectCaseStudy project={project} /></div>)}
      </div>
    </div>
  );
}

function EngineeringPanel() {
  const [selected, setSelected] = useState(0);
  const note = engineeringNotes[selected];
  const NoteIcon = note.icon;
  return (
    <div className="notebookLayout">
      <div className="noteIndex">
        <p>CONTENTS</p>
        {engineeringNotes.map((item, index) => <button type="button" className={selected === index ? "active" : ""} key={item.title} onClick={() => setSelected(index)}><span>{item.code.split(" / ")[0]}</span>{item.title}</button>)}
      </div>
      <article className="notePage" key={note.title}>
        <span className="noteCode">{note.code}</span><NoteIcon aria-hidden="true" /><h3>{note.title}</h3><p>{note.body}</p>
        <ul>{note.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
        <small>Field note — an area of active interest, not a proficiency ranking.</small>
      </article>
    </div>
  );
}

function AboutPanel() {
  return (
    <div className="libraryProfile">
      <article className="profileEssay">
        <span className="eyebrow">PERSONAL INDEX / 001</span>
        <h3>Curious about the machinery behind useful software.</h3>
        <p>I’m Mohsen Nouri, a software engineer and web developer interested in backend systems, Golang, modern web technologies, and the architectural choices that make software easier to understand and trust.</p>
        <p>My working philosophy is simple: stay curious, make the important decisions visible, and build systems that remain humane for both their users and their maintainers.</p>
        <div className="identityMarks"><span><FiMapPin /> Tehran, Iran</span><span><FiTerminal /> Software engineer & web developer</span></div>
      </article>
      <aside className="educationCard"><span className="seal">UT</span><div><small>EDUCATION</small><h4>University of Tehran</h4><p>Master’s student in Computer Engineering</p></div></aside>
      <section className="experienceShelf">
        <div className="shelfHeading"><FiBriefcase /> Selected experience</div>
        {experience.map((item) => (
          <article key={`${item.company.en}-${item.date.en}`}><time>{item.date.en}</time><div><h4>{item.role.en}</h4><p>{item.company.en}</p>{item.teamNote ? <span>{item.teamNote.en}</span> : null}<ul>{item.highlights.map((highlight) => <li key={highlight.en}>{highlight.en}</li>)}</ul></div></article>
        ))}
      </section>
    </div>
  );
}

function ArchivePanel() {
  const records = useMemo(() => [
    ...projects.map((project, index) => ({ year: "PROJECT", ref: `P-${String(index + 1).padStart(3, "0")}`, title: project.title.en, text: project.type.en, tags: project.stack.slice(0, 3) })),
    ...experience.map((item, index) => ({ year: item.date.en, ref: `E-${String(index + 1).padStart(3, "0")}`, title: item.role.en, text: item.company.en, tags: ["Experience"] })),
  ], []);
  return (
    <div className="archiveCabinet">
      <div className="archiveIntro"><span>LIVE INDEX · {records.length} RECORDS</span><p>This archive is generated from the portfolio data file. Update the data once; the index follows.</p></div>
      <div className="archiveRecords">{records.map((record) => <article key={record.ref}><span className="recordRef">{record.ref}</span><time>{record.year}</time><div><h3>{record.title}</h3><p>{record.text}</p></div><div className="recordTags">{record.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div>
      <div className="archiveDocument"><FiFileText /><div><strong>{documents[0].title.en}</strong><span>{documents[0].meta.en}</span></div><a href={documents[0].href} target="_blank" rel="noreferrer">View <FiArrowUpRight /></a><a href={documents[0].href} download>Download <FiDownload /></a></div>
    </div>
  );
}

function ArticlesPanel() {
  const [selected, setSelected] = useState(0);
  const article = articles[selected];
  return (
    <div className="readingRoom">
      <aside className="articleIndex">
        <span>FIELD NOTES · {articles.length} ENTRIES</span>
        <h3>Ideas, examined<br />in writing.</h3>
        <p>Technical notes distilled from building and studying real software systems.</p>
        {articles.map((item, index) => (
          <button type="button" className={selected === index ? "active" : ""} onClick={() => setSelected(index)} key={item.slug}>
            <small>{item.index}</small><strong>{item.title}</strong><em>{item.readTime}</em>
          </button>
        ))}
      </aside>
      <article className="longformArticle" key={article.slug}>
        <header>
          <div><span>{article.index}</span><span>{article.readTime}</span></div>
          <h3>{article.title}</h3>
          <p>{article.summary}</p>
          <div className="articleTags">{article.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        </header>
        {article.sections.map((section, index) => (
          <section key={section.heading}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div><h4>{section.heading}</h4><p>{section.body}</p></div>
          </section>
        ))}
        <footer>Written as an engineering field note from the portfolio’s documented projects and areas of study.</footer>
      </article>
    </div>
  );
}

function ContactPanel() {
  return (
    <div className="contactTerminal">
      <div className="terminalPrompt"><span>sanctuary@mn</span>:~$ open-channel --professional</div>
      <h3>Let’s make something<br />thoughtful and useful.</h3><p>For collaborations, engineering conversations, or a simple hello.</p>
      <div className="contactRoutes">
        <a href={`mailto:${CONTACT.email}`}><FiMail /><span>Email<strong>{CONTACT.email}</strong></span><FiArrowRight /></a>
        <ExternalLink href={CONTACT.github}><FiGithub /><span>GitHub<strong>@MNGH-27</strong></span></ExternalLink>
        <ExternalLink href={CONTACT.linkedin}><FiLinkedin /><span>LinkedIn<strong>Professional profile</strong></span></ExternalLink>
      </div>
    </div>
  );
}

function Panel({ panel, onClose }: { panel: PanelId; onClose: () => void }) {
  const labels: Record<PanelId, [string, string]> = {
    projects: ["Computer terminal", "Project systems"], engineering: ["Technical notebook", "Engineering notes"], about: ["Library index", "Profile & education"], archive: ["Desk archive", "Development journey"], articles: ["Reading desk", "Technical articles"], contact: ["Secure channel", "Contact"],
  };
  return (
    <div className="panelLayer" role="dialog" aria-modal="true" aria-labelledby="panel-title">
      <button className="panelBackdrop" onClick={onClose} aria-label="Close panel" />
      <section className={`archivePanel panel-${panel}`}>
        <header className="panelHeader"><div><span>{labels[panel][0]}</span><h2 id="panel-title">{labels[panel][1]}</h2></div><button type="button" onClick={onClose} aria-label="Close panel"><FiX /></button></header>
        <div className="panelBody">{panel === "projects" ? <ProjectsPanel /> : null}{panel === "engineering" ? <EngineeringPanel /> : null}{panel === "about" ? <AboutPanel /> : null}{panel === "archive" ? <ArchivePanel /> : null}{panel === "articles" ? <ArticlesPanel /> : null}{panel === "contact" ? <ContactPanel /> : null}</div>
      </section>
    </div>
  );
}

function CommandPalette({ onSelect, onClose }: { onSelect: (panel: PanelId) => void; onClose: () => void }) {
  return (
    <div className="commandLayer" role="dialog" aria-modal="true" aria-label="Command palette"><button className="commandBackdrop" onClick={onClose} aria-label="Close command palette" /><div className="commandPalette"><div className="commandInput"><FiCommand /><span>Go to a room…</span><kbd>ESC</kbd></div>{navigation.map((item) => { const Icon = item.icon; return <button type="button" key={item.id} onClick={() => onSelect(item.id)}><Icon /><span>{item.label}<small>{item.detail}</small></span><FiArrowRight /></button>; })}</div></div>
  );
}

function Workspace({ onSelect }: { onSelect: (panel: PanelId) => void }) {
  return (
    <div className="workspace" aria-label="Interactive developer workspace">
      <div className="roomGlow" />
      <div className="windowScene" aria-hidden="true"><div className="moon" /><div className="city cityBack" /><div className="city cityFront" /><div className="windowBars" /></div>
      <button className="sceneObject bookshelf" onClick={() => onSelect("about")} aria-label="Open profile and education from the bookshelf"><span className="objectHint">Bookshelf <small>Profile & education</small></span><i /><i /><i /><i /><i /><i /><i /><i /></button>
      <div className="serverRack" aria-label="Server rack decoration"><span /><span /><span /><span /></div>
      <div className="deskLamp" aria-hidden="true"><i /><b /></div><div className="deskSurface" aria-hidden="true" />
      <button className="sceneObject monitor" onClick={() => onSelect("projects")} aria-label="Open project systems on the computer"><span className="objectHint">Computer <small>Project systems</small></span><div className="screen"><div className="screenBar"><i /><i /><i /><span>~/portfolio/systems</span></div><div className="screenCode"><small>01</small><span className="codeGold">package</span> main<br /><small>02</small><span className="codeTeal">func</span> build() System &#123;<br /><small>03</small>&nbsp;&nbsp;<span className="codeMuted">return</span> reliableSoftware<br /><small>04</small>&#125;<b>_</b></div><div className="screenStatus">6 systems indexed <span>● online</span></div></div><div className="monitorStand" /></button>
      <button className="sceneObject notebook" onClick={() => onSelect("engineering")} aria-label="Open engineering notes in the notebook"><span className="objectHint">Notebook <small>Engineering notes</small></span><div className="paperLines" /><strong>Systems<br />&amp; structure</strong><i /><i /><i /></button>
      <button className="sceneObject articleStack" onClick={() => onSelect("articles")} aria-label="Open technical articles on the reading desk"><span className="objectHint">Reading desk <small>Technical articles</small></span><i>FIELD<br />NOTES</i><b>02</b></button>
      <button className="sceneObject archiveDrawers" onClick={() => onSelect("archive")} aria-label="Open the development archive"><span className="objectHint">Desk archive <small>Development journey</small></span><i><b /></i><i><b /></i><i><b /></i></button>
      <div className="keyboard" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><div className="coffee" aria-hidden="true"><span /></div><div className="roomFloor" aria-hidden="true" />
    </div>
  );
}

export function PortfolioPage() {
  const [activePanel, setActivePanel] = useState<PanelId | null>(null);
  const [paletteOpen, setPaletteOpen] = useState(false);
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => { if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") { event.preventDefault(); setPaletteOpen((value) => !value); } if (event.key === "Escape") { setPaletteOpen(false); setActivePanel(null); } };
    window.addEventListener("keydown", onKeyDown); return () => window.removeEventListener("keydown", onKeyDown);
  }, []);
  useEffect(() => { document.body.style.overflow = activePanel || paletteOpen ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [activePanel, paletteOpen]);
  const openPanel = (panel: PanelId) => { setPaletteOpen(false); setActivePanel(panel); };

  return (
    <main className="sanctuary">
      <a className="skipLink" href="#navigation">Skip to navigation</a>
      <header className="sanctuaryHeader"><a href="#top" className="sanctuaryBrand"><span>MN</span><div>THE DEVELOPER’S<br />SANCTUARY</div></a><div className="headerSignal"><i /> SYSTEMS ONLINE <span>TEHRAN · IR</span></div><button className="commandButton" type="button" onClick={() => setPaletteOpen(true)}><FiCommand /> Command <kbd>Ctrl K</kbd></button></header>
      <section className="sanctuaryHero" id="top">
        <div className="heroCopy"><span className="heroIndex">ARCHIVE OF / MOHSEN NOURI</span><h1>Software,<br />considered deeply.</h1><p>Software Engineer &amp; Web Developer exploring backend systems, Golang, modern web technologies, and the architecture behind reliable software.</p><div className="heroMeta"><span>MASTER’S STUDENT</span><strong>Computer Engineering · University of Tehran</strong></div><button className="enterButton" type="button" onClick={() => openPanel("projects")}>Enter the archive <FiArrowRight /></button></div>
        <Workspace onSelect={openPanel} />
        <nav className="sanctuaryNav" id="navigation" aria-label="Portfolio rooms"><span>ROOM INDEX</span>{navigation.map((item, index) => { const Icon = item.icon; return <button type="button" onClick={() => openPanel(item.id)} key={item.id}><small>{String(index + 1).padStart(2, "0")}</small><Icon /><span>{item.label}<em>{item.detail}</em></span><FiArrowRight /></button>; })}</nav>
      </section>
      <noscript>
        <section className="noScriptArchive">
          <h2>Mohsen Nouri — Full-Stack Software Developer</h2>
          <p>Projects, experience, profile, education, and professional documents.</p>
          <h3>Project systems</h3>
          {projects.map((project) => <article key={project.title.en}><h4>{project.title.en}</h4><strong>{project.type.en}</strong><p>{project.description.en}</p><ul>{project.highlights.map((item) => <li key={item.en}>{item.en}</li>)}</ul><p>{project.stack.join(" · ")}</p>{project.links.map((link) => <a href={link.href} key={link.href}>{link.label.en}</a>)}</article>)}
          <h3>Selected experience</h3>
          {experience.map((item) => <article key={`${item.company.en}-fallback`}><h4>{item.role.en}</h4><p>{item.company.en} · {item.date.en}</p>{item.teamNote ? <p>{item.teamNote.en}</p> : null}<ul>{item.highlights.map((highlight) => <li key={highlight.en}>{highlight.en}</li>)}</ul>{item.links?.map((link) => <a href={link.href} key={link.href}>{link.label.en}</a>)}</article>)}
          <h3>Technical articles</h3>
          {articles.map((article) => <article key={`${article.slug}-fallback`}><h4>{article.title}</h4><p>{article.summary}</p>{article.sections.map((section) => <section key={section.heading}><h5>{section.heading}</h5><p>{section.body}</p></section>)}</article>)}
          <h3>Resume and professional documents</h3>
          <a href={documents[0].href}>{documents[0].title.en} · {documents[0].meta.en}</a>
        </section>
      </noscript>
      <footer className="sanctuaryFooter"><span>© 2026 MOHSEN NOURI</span><p>Curiosity in. Useful software out.</p><div><a href={CONTACT.github} target="_blank" rel="noreferrer">GH</a><a href={CONTACT.linkedin} target="_blank" rel="noreferrer">IN</a><a href={`mailto:${CONTACT.email}`}>MAIL</a></div></footer>
      {activePanel ? <Panel panel={activePanel} onClose={() => setActivePanel(null)} /> : null}{paletteOpen ? <CommandPalette onSelect={openPanel} onClose={() => setPaletteOpen(false)} /> : null}
    </main>
  );
}
