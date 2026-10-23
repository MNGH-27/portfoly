"use client";

import { useEffect, useMemo, useState } from "react";
import {
  FiArrowRight, FiArrowUpRight, FiBookOpen, FiBox, FiBriefcase, FiCode,
  FiCommand, FiCpu, FiDatabase, FiDownload, FiFileText, FiGithub, FiGrid,
  FiLayers, FiLinkedin, FiMail, FiMapPin, FiServer, FiTerminal, FiX, FiZap,
} from "react-icons/fi";
import { CONTACT, documents, experience, projects } from "@/data/portfolio";
import type { Project } from "@/types/portfolio";

type PanelId = "projects" | "engineering" | "about" | "recommendation" | "archive" | "contact";

const navigation: Array<{ id: PanelId; label: string; detail: string; icon: typeof FiGrid }> = [
  { id: "projects", label: "Project systems", detail: "Computer", icon: FiCpu },
  { id: "engineering", label: "Engineering notes", detail: "Notebook", icon: FiBookOpen },
  { id: "about", label: "Profile & education", detail: "Bookshelf", icon: FiGrid },
  { id: "recommendation", label: "Recommendation", detail: "LinkedIn reference", icon: FiLinkedin },
  { id: "archive", label: "Development archive", detail: "Desk files", icon: FiBox },
  { id: "contact", label: "Open a channel", detail: "Contact", icon: FiMail },
];

const recommendation = {
  author: "Salar Sari Navaii",
  role: "Senior Frontend Developer",
  date: "October 22, 2026",
  relationship: "Salar managed Mohsen directly",
  source: "Received on LinkedIn",
  paragraphs: [
    "I really enjoyed working with Mohsen. He’s a great Senior Front-End Developer with strong experience in React and Next.js. He’s quick to understand problems, find the right solutions, and get things done without overcomplicating them.",
    "One thing that always stood out to me was how fast and efficiently he worked, even when dealing with complex tasks. He has a good eye for code quality and knows how to balance speed with building things the right way.",
    "Beyond his technical skills, Mohsen is someone you can count on. He’s easy to work with, takes his work seriously, and brings a lot of value to the team.",
    "I’d happily work with him again and recommend him to any team looking for a strong Senior Front-End Developer.",
  ],
};

/* Article publishing is intentionally paused; the portfolio no longer exposes this section.
const articles = [
  {
    slug: "reliable-task-scheduler-go",
    index: "ESSAY / 001",
    title: "How to Design Background Jobs That Survive Real Failure",
    summary: "Queues move work out of the request path. Reliability begins when we decide what should happen after duplicates, crashes, overload, and uncertain outcomes.",
    published: "October 2026",
    readTime: "12 min read",
    tags: ["System design", "Queues", "Reliability", "Distributed systems"],
    opening: [
      "A background job looks simple when drawn as three boxes: a producer writes to a queue, a worker receives a message, and the worker performs the task. The diagram hides the difficult part. Networks time out, processes stop between two writes, dependencies recover slowly, and the same message can arrive more than once.",
      "The useful question is therefore not “Which queue should I use?” It is “Which guarantees must remain true when every step can fail?” Once those guarantees are explicit, implementation choices become easier to evaluate.",
    ],
    callout: "Queues do not create correctness. They create time and distance in which correctness must be designed.",
    sections: [
      { heading: "Start with invariants, not infrastructure", body: ["An invariant is a rule the system must preserve even when execution is interrupted. Useful examples are: accepted work is not silently lost, no more than N expensive jobs run at once, only the newest owner may commit a result, and repeating a completed operation does not duplicate its effect.", "These rules reveal where atomicity is required. If creating an order and publishing its event must succeed together, a queue product alone cannot close the gap. A transactional outbox can: store the business change and an outgoing event in one database transaction, then publish the event asynchronously."] },
      { heading: "Backpressure is a product decision", body: ["When work arrives faster than workers can complete it, waiting time grows. An unbounded queue makes the system appear healthy while latency and storage quietly accumulate. Eventually the queue becomes a record of demand the service can no longer satisfy.", "A bounded system makes overload visible and forces a policy. Producers can wait, low-priority work can be rejected, requests can be sampled, or jobs can move to durable overflow storage. The right choice depends on what the product values most: freshness, completeness, or immediate acceptance."] },
      { heading: "Treat retries as new traffic", body: ["A retry is another request sent to a dependency that may already be unhealthy. Immediate retries synchronize workers into a second traffic spike, sometimes called a retry storm. Exponential backoff spreads attempts over time; jitter prevents every worker from waking at the same moment.", "Every retry policy also needs a budget. Limit attempts or total elapsed time, use a timeout for each attempt, and retry only failures likely to be temporary. Invalid input and permanent authorization errors should fail immediately. Exhausted jobs belong in a dead-letter path with enough context to diagnose and replay them safely."] },
      { heading: "Idempotency belongs at the side-effect boundary", body: ["Most practical queues provide at-least-once delivery. A worker may finish charging a card and crash before acknowledging the message, so the queue delivers it again. The second execution is not an edge case; it is part of the delivery contract.", "Give each logical operation an idempotency key and enforce it where the effect becomes durable. A database unique constraint, compare-and-set update, or provider-supported idempotency key can turn a repeated request into the same recorded result. An in-memory set is insufficient because the process holding that memory can disappear."] },
      { heading: "A lease needs a fencing token", body: ["A lease allows ownership to expire when a worker stops sending heartbeats. But expiry does not stop an old worker from resuming after a long pause and writing a stale result. Two workers can temporarily believe they own the same job.", "Attach a monotonically increasing fencing token to each claim. Every protected write carries the token, and storage rejects tokens older than the most recently accepted value. Heartbeats answer whether an owner appears alive; fencing decides whether that owner is still allowed to write."] },
      { heading: "Test the gaps between steps", body: ["Happy-path tests prove the handler works. Reliability tests prove the protocol survives interruption. Crash the worker after the side effect but before acknowledgement. Expire a lease during a long operation. Deliver the same message twice. Fill the queue. Cancel during backoff. Shut down with work in flight.", "A controllable clock and fault-injectable storage adapter make these situations deterministic. The goal is to test state transitions and recovery rules, not to hope that a slow integration test happens to fail at the interesting millisecond."] },
    ],
    code: { label: "A minimal state model", body: `pending → running(token: 41) → completed\n             ↘ retryable → pending\n             ↘ exhausted → dead-letter\n\nwrite(result, token) only if token >= latest_token` },
    checklist: ["Define the delivery guarantee", "Bound concurrency and queue growth", "Budget retries with backoff and jitter", "Enforce idempotency in durable storage", "Fence stale owners", "Observe queue age, failures, and dead letters"],
    conclusion: "A dependable job system is not one that never fails. It is one that makes failure an ordinary, bounded state transition. Once overload, duplication, and ownership are explicit parts of the model, the system becomes easier to operate—and much harder to surprise.",
  },
  {
    slug: "accessible-jalali-datepicker",
    index: "ESSAY / 002",
    title: "A Date Picker Is Three Systems Wearing One Interface",
    summary: "Reliable date pickers separate calendar mathematics, selection rules, and interaction behavior. Mixing them is how small UI bugs become data bugs.",
    published: "October 2026",
    readTime: "11 min read",
    tags: ["Accessibility", "State machines", "Date handling", "UI architecture"],
    opening: [
      "A date picker is often treated as a formatted text field with a calendar attached. In reality it combines three different systems: a calendar model, a selection state machine, and an accessible interaction model. Each has its own rules and failure modes.",
      "The component becomes easier to reason about when those concerns meet through small, explicit interfaces. Calendar math answers what a date means. Selection logic answers which transitions are legal. The view answers how a person can perceive and operate those transitions.",
    ],
    callout: "A date is domain data. A focused cell is interface state. A formatted string is presentation. They should not be the same variable.",
    sections: [
      { heading: "Choose a canonical calendar value", body: ["A calendar-only value is not an instant in time. If the user selects 1405/07/24, converting it immediately to local midnight in a JavaScript Date introduces a time zone that the user never chose. Serialization in another zone can then move the value to the previous day.", "Represent calendar dates explicitly—calendar, year, month, and day—and convert them to an absolute day number when ordering or range comparison is required. Add time zones only when the domain includes a time of day. Formatting should sit at the edge, not define the stored value."] },
      { heading: "Make selection a state machine", body: ["Single, range, and multiple selection are different protocols. A range picker moves from empty, to start selected, to complete. If the second date precedes the first, the product must deliberately restart the range, swap the endpoints, or reject the transition.", "Store the selection state and derive cell appearance from it. Flags such as selected, range-start, in-range, and range-end should not be independent mutable booleans. Derived state removes combinations that should never exist, such as a cell marked both outside and inside the selected range."] },
      { heading: "Design one predictable focus path", body: ["A six-week calendar may render forty-two day buttons, but it should not add forty-two stops to the Tab key. Use roving tabindex or aria-activedescendant so the grid contributes one tab stop and arrow keys move within it.", "Arrow keys move by day, Home and End move within the week, Page Up and Page Down change months, Enter or Space selects, and Escape closes the popover. When the month changes, keep focus on the corresponding date when possible and announce the new month through a polite live region."] },
      { heading: "Separate parsing from validation", body: ["People type incomplete values: a year with two digits, a trailing separator, or localized numerals that have not yet formed a date. Parsing should describe the current text. Validation should decide whether a completed value exists and satisfies the domain rules.", "Keep the draft string separate from the committed date. Validate on an intentional boundary such as blur, Enter, or form submission, then return a structured reason: invalid format, nonexistent date, outside allowed range, or unavailable date. A single false value cannot produce a useful message."] },
      { heading: "Treat availability as policy", body: ["Minimum and maximum dates, weekends, holidays, and server-provided availability are business rules. Express them as composable predicates over the canonical date, and return both the decision and a reason the interface can communicate.", "Ranges require one more policy: can an interval cross an unavailable date, or must every day inside it be available? A component cannot infer the product’s answer. Put the rule in the selection layer so mouse, keyboard, and text entry all behave consistently."] },
      { heading: "Test combinations, not isolated features", body: ["Calendar bugs live at intersections: the last day of a month in a right-to-left locale, a disabled date reached by keyboard, a range crossing a year boundary, or a conversion performed near a daylight-saving transition.", "Build a compact test matrix across calendar, locale, digit set, selection mode, navigation method, and boundary dates. Property tests are especially useful for conversion round trips and ordering. Browser tests should verify focus return when the popover closes and accessible names as the visible month changes."] },
    ],
    code: { label: "Keep the boundaries explicit", body: `CalendarValue  → comparison and conversion\nSelectionState → legal transitions\nFocusState     → keyboard navigation\nDraftText      → parsing and feedback\n\nView = derive(CalendarValue, SelectionState, FocusState)` },
    checklist: ["Store calendar dates without accidental time zones", "Make selection transitions explicit", "Expose one stable tab stop", "Keep draft text separate from committed data", "Return reasons for unavailable dates", "Test locale, boundary, and input combinations"],
    conclusion: "The best date picker is not the one with the most options. It is the one whose rules stay coherent across typing, clicking, keyboard navigation, localization, and serialization. Clear boundaries make that coherence possible.",
  },
];
*/

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

function RecommendationPanel() {
  return (
    <div className="recommendationPanel">
      <section className="recommendationCard" aria-labelledby="recommendation-heading">
        <header className="recommendationHeader"><span><FiLinkedin aria-hidden="true" /> {recommendation.source}</span><time>{recommendation.date}</time></header>
        <div className="recommender"><span className="recommenderMark" aria-hidden="true">SS</span><div><h4 id="recommendation-heading">{recommendation.author}</h4><p>{recommendation.role}</p><small>{recommendation.relationship}</small></div></div>
        <blockquote>{recommendation.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</blockquote>
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

/*
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
          <div><span>{article.index}</span><span>{article.published}</span></div>
          <h3>{article.title}</h3>
          <p className="articleDek">{article.summary}</p>
          <div className="articleByline"><span className="authorMark">MN</span><div><strong>Mohsen Nouri</strong><small>Software Engineer · {article.readTime}</small></div></div>
          <div className="articleTags">{article.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        </header>
        <div className="articleOpening">{article.opening.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <blockquote>{article.callout}</blockquote>
        {article.sections.map((section, index) => (
          <section key={section.heading}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div><h4>{section.heading}</h4>{section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          </section>
        ))}
        <figure className="articleCode"><figcaption>{article.code.label}</figcaption><pre><code>{article.code.body}</code></pre></figure>
        <section className="articleChecklist"><span>✓</span><div><h4>Practical checklist</h4><ul>{article.checklist.map((item) => <li key={item}>{item}</li>)}</ul></div></section>
        <footer><strong>The takeaway</strong><p>{article.conclusion}</p></footer>
      </article>
    </div>
  );
}
*/

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
    projects: ["Computer terminal", "Project systems"], engineering: ["Technical notebook", "Engineering notes"], about: ["Library index", "Profile & education"], recommendation: ["Professional reference", "Recommendation"], archive: ["Desk archive", "Development journey"], contact: ["Secure channel", "Contact"],
  };
  return (
    <div className="panelLayer" role="dialog" aria-modal="true" aria-labelledby="panel-title">
      <button className="panelBackdrop" onClick={onClose} aria-label="Close panel" />
      <section className={`archivePanel panel-${panel}`}>
        <header className="panelHeader"><div><span>{labels[panel][0]}</span><h2 id="panel-title">{labels[panel][1]}</h2></div><button type="button" onClick={onClose} aria-label="Close panel"><FiX /></button></header>
        <div className="panelBody">{panel === "projects" ? <ProjectsPanel /> : null}{panel === "engineering" ? <EngineeringPanel /> : null}{panel === "about" ? <AboutPanel /> : null}{panel === "recommendation" ? <RecommendationPanel /> : null}{panel === "archive" ? <ArchivePanel /> : null}{panel === "contact" ? <ContactPanel /> : null}</div>
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
      <button className="sceneObject referenceLetter" onClick={() => onSelect("recommendation")} aria-label="Open professional recommendation"><span className="objectHint">Reference letter <small>LinkedIn recommendation</small></span><i>RECOMMENDATION</i><b>SSN</b></button>
      <button className="sceneObject archiveDrawers" onClick={() => onSelect("archive")} aria-label="Open the development archive"><span className="objectHint">Desk archive <small>Development journey</small></span><i><b /></i><i><b /></i><i><b /></i></button>
      <div className="keyboard" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><div className="coffee" aria-hidden="true"><span /></div><div className="roomFloor" aria-hidden="true" />
    </div>
  );
}

export function PortfolioPage({ threadnoteHref = "/threadnote/" }: { threadnoteHref?: string }) {
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
          <h3>Recommendation</h3>
          <article><h4>{recommendation.author}</h4><p>{recommendation.role} · {recommendation.date} · {recommendation.relationship}</p><blockquote>{recommendation.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</blockquote></article>
          <h3>Resume and professional documents</h3>
          <a href={documents[0].href}>{documents[0].title.en} · {documents[0].meta.en}</a>
        </section>
      </noscript>
      <footer className="sanctuaryFooter"><span>© 2026 MOHSEN NOURI</span><p>Curiosity in. Useful software out.</p><div><a href={threadnoteHref}>THREADNOTE</a><a href={CONTACT.github} target="_blank" rel="noreferrer">GH</a><a href={CONTACT.linkedin} target="_blank" rel="noreferrer">IN</a><a href={`mailto:${CONTACT.email}`}>MAIL</a></div></footer>
      {activePanel ? <Panel panel={activePanel} onClose={() => setActivePanel(null)} /> : null}{paletteOpen ? <CommandPalette onSelect={openPanel} onClose={() => setPaletteOpen(false)} /> : null}
    </main>
  );
}
