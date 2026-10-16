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
    title: "Reliable Job Systems: Backpressure, Idempotency, Retries, and Leases",
    summary: "A practical guide to the guarantees behind dependable background work: bounded load, safe repetition, controlled recovery, and ownership that can expire.",
    readTime: "9 min read",
    tags: ["System design", "Queues", "Reliability", "Distributed systems"],
    sections: [
      { heading: "Define invariants before choosing infrastructure", body: "A reliable job system begins with rules that must remain true: accepted work is not silently lost, concurrency never exceeds a known limit, a job has at most one valid owner at a time, and completion can be recorded more than once without corrupting state. These invariants are more useful than starting with a queue product or worker framework because they tell you what must be atomic, durable, and observable." },
      { heading: "Backpressure converts overload into a policy", body: "Throughput and latency are connected: the number of jobs in a system is approximately the arrival rate multiplied by the time each job spends there. If arrivals exceed service capacity, an unbounded queue only postpones failure while memory use and waiting time grow. A bounded queue forces an explicit decision: block producers, reject new work, shed low-priority work, or spill to durable storage. The correct choice depends on whether freshness, completeness, or producer latency matters most." },
      { heading: "Retries create traffic, so budget them", body: "A retry is a new request and therefore additional load on a dependency that may already be unhealthy. Use per-attempt timeouts, exponential backoff, random jitter, and a maximum attempt or elapsed-time budget. Retry only failures likely to be transient; validation errors and permanent authorization failures should fail immediately. A retry budget also prevents one failing operation from consuming all worker capacity." },
      { heading: "Idempotency makes at-least-once delivery usable", body: "Most practical queues provide at-least-once delivery, so the same job may run twice after a timeout or worker crash. Give each logical operation an idempotency key and enforce it at the side-effect boundary with a unique constraint, compare-and-set update, or transactional outbox. Deduplicating only in worker memory is insufficient because the process that remembers the key can disappear." },
      { heading: "Leases need fencing, not only heartbeats", body: "A lease lets ownership expire when a worker stops renewing it, but an old worker may resume after a long pause and still write stale results. Attach a monotonically increasing fencing token to every claim and reject writes from older tokens. Renew well before expiry, recover only after the lease is certainly stale, and make the claim-and-token update atomic. Heartbeats detect liveness; fencing protects correctness." },
      { heading: "Test transitions and failure windows", body: "Test the job state machine rather than only the happy-path handler. Important cases include a crash after the side effect but before acknowledgement, cancellation during backoff, lease expiry during a long task, duplicate delivery, clock skew, queue saturation, and shutdown with work in flight. A controllable clock and fault-injectable storage adapter make these cases deterministic instead of flaky integration tests." },
    ],
  },
  {
    slug: "accessible-jalali-datepicker",
    index: "NOTE / 002",
    title: "Accessible Date Pickers: State Machines, Focus Models, and Calendar Math",
    summary: "A technical guide to separating calendar rules from interface state, designing predictable selection modes, and making grid navigation work for keyboard and screen-reader users.",
    readTime: "8 min read",
    tags: ["Accessibility", "State machines", "Date handling", "UI architecture"],
    sections: [
      { heading: "Use one canonical date model", body: "A date picker may display Jalali fields, accept localized digits, and return a JavaScript Date, but its internal comparisons need one canonical representation. A calendar-only value is safest as a tuple such as calendar, year, month, and day, converted to an absolute day number for ordering and range checks. Introduce time zones only when a time-of-day is present; treating local midnight as a universal instant creates off-by-one-day bugs around offsets and daylight-saving changes." },
      { heading: "Model selection as explicit transitions", body: "Single, range, and multiple selection have different legal transitions. A range picker, for example, moves from empty to start-selected to complete; choosing a date before the start must either restart the range or normalize the endpoints according to a documented rule. Represent these states explicitly and derive visual flags such as selected, range-start, in-range, and range-end from state instead of storing duplicate booleans on each cell." },
      { heading: "Choose a stable keyboard focus model", body: "A calendar grid should expose one tab stop, not forty-two. Use roving tabindex or aria-activedescendant so arrow keys move by day, Home and End move within a week, Page Up and Page Down change months, Enter or Space selects, and Escape closes a popover. When navigation changes the visible month, move focus to the corresponding date and announce the new month without forcing screen-reader users to traverse the grid again." },
      { heading: "Parsing is not validation", body: "Text input has intermediate states such as an incomplete year or a trailing separator. Parsing should describe what the user typed; validation should decide whether the completed value exists, is inside the allowed range, and satisfies business rules. Keep the draft string separate from the committed date so typing does not constantly rewrite the input. On commit, return structured errors such as invalid format, nonexistent date, or unavailable date instead of a single false value." },
      { heading: "Express availability as composable rules", body: "Disabled dates, minimum and maximum bounds, holidays, and booking availability should be pure predicates over the canonical date. Compose them in a documented order and expose the reason a date is unavailable so the UI can explain it. For ranges, decide whether unavailable dates block the whole interval or merely cannot be endpoints; leaving that rule implicit produces surprising selections." },
      { heading: "Test behavior as a matrix", body: "Calendar correctness is the product of several dimensions: calendar system, locale, digit set, selection mode, keyboard path, boundary month, disabled rule, and rendering mode. Build a compact matrix that covers the intersections most likely to fail, then add property tests for conversion round trips and date ordering. Accessibility tests should verify focus movement and accessible names, while browser tests cover popover focus return and interaction with real assistive semantics." },
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
      <aside className="educationCard"><span className="seal">UT</span><div><small>EDUCATION</small><h4>University of Tehran</h4><p>Master’s student in Computer Science</p></div></aside>
      <section className="experienceShelf">
        <div className="shelfHeading"><FiBriefcase /> Selected experience</div>
        {experience.map((item) => (
          <article key={`${item.company.en}-${item.date.en}`}><time>{item.date.en}</time><div><h4>{item.displayTitle?.en ?? item.role.en}</h4><p>{item.displayTitle ? item.context?.en : item.company.en}</p>{item.teamNote ? <span>{item.teamNote.en}</span> : null}{item.systems ? <div className="experienceSystems" aria-label="Related systems">{item.systems.map((system) => <span key={system.en}>{system.en}</span>)}</div> : null}<ul>{item.highlights.map((highlight) => <li key={highlight.en}>{highlight.en}</li>)}</ul></div></article>
        ))}
      </section>
    </div>
  );
}

function ArchivePanel() {
  const records = useMemo(() => [
    ...projects.map((project, index) => ({ year: "PROJECT", ref: `P-${String(index + 1).padStart(3, "0")}`, title: project.title.en, text: project.type.en, tags: project.stack.slice(0, 3) })),
    ...experience.map((item, index) => ({ year: item.date.en, ref: `E-${String(index + 1).padStart(3, "0")}`, title: item.displayTitle?.en ?? item.role.en, text: item.context?.en ?? item.company.en, tags: item.systems?.map((system) => system.en) ?? ["Experience"] })),
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
        <span>TECHNICAL GUIDES · {articles.length} ENTRIES</span>
        <h3>Concepts, explained<br />for practice.</h3>
        <p>Focused technical guides that turn system-design and interface principles into decisions you can apply.</p>
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
        <footer>A practical reference: principles, failure modes, and implementation choices that can be applied beyond a single project.</footer>
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
      <button className="sceneObject articleStack" onClick={() => onSelect("articles")} aria-label="Open technical articles on the reading desk"><span className="objectHint">Reading desk <small>Technical articles</small></span><i>TECH<br />GUIDES</i><b>02</b></button>
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
        <div className="heroCopy"><span className="heroIndex">ARCHIVE OF / MOHSEN NOURI</span><h1>Software,<br />considered deeply.</h1><p>Software Engineer &amp; Web Developer exploring backend systems, Golang, modern web technologies, and the architecture behind reliable software.</p><div className="heroMeta"><span>MASTER’S STUDENT</span><strong>Computer Science · University of Tehran</strong></div><button className="enterButton" type="button" onClick={() => openPanel("projects")}>Enter the archive <FiArrowRight /></button></div>
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
          {experience.map((item) => <article key={`${item.company.en}-fallback`}><h4>{item.displayTitle?.en ?? item.role.en}</h4><p>{item.context?.en ?? item.company.en} · {item.date.en}</p>{item.teamNote ? <p>{item.teamNote.en}</p> : null}{item.systems ? <p>Systems: {item.systems.map((system) => system.en).join(" · ")}</p> : null}<ul>{item.highlights.map((highlight) => <li key={highlight.en}>{highlight.en}</li>)}</ul>{item.links?.map((link) => <a href={link.href} key={link.href}>{link.label.en}</a>)}</article>)}
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
