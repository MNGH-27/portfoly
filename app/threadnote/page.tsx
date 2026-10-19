import type { Metadata } from "next";
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Threadnote — A calmer desktop workspace",
  alternates: { canonical: "https://mngh-27.github.io/portfoly/threadnote/" },
};
const base = process.env.PAGES_BASE_PATH ?? "";
export default function ThreadnotePage() {
  return <main id="threadnote-content">
    <section className="tn-hero tn-wrap">
      <div className="tn-hero-copy"><p className="tn-eyebrow">LOCAL-FIRST / WINDOWS DESKTOP</p><h1>A little space<br />for everything<br /><em>on your mind.</em></h1><p className="tn-lead">Notes, your inbox, tasks, and calendar. Threadnote brings them into a flexible desktop canvas, so your next thought has somewhere to land.</p><div className="tn-actions"><a className="tn-button" href="#features">Explore Threadnote <span aria-hidden="true">↗</span></a><a className="tn-text-link" href={base + "/threadnote/privacy/"}>Read our privacy policy</a></div><p className="tn-status"><span aria-hidden="true" />Development preview · Google access requires your consent</p></div>
      <div className="tn-preview" aria-label="Illustrative Threadnote workspace">
        <div className="tn-preview-toolbar"><span>MY WORKSPACE</span><span>72%</span></div>
        <div className="tn-preview-grid">
          <article className="tn-demo-note"><div className="tn-demo-bar" /><small>01 / NOTE</small><h2>Make room<br />for good ideas.</h2><p>One thought. A few connections.<br />A clearer place to start.</p><span className="tn-demo-colors" aria-hidden="true">● ● ● ●</span></article>
          <article className="tn-demo-tasks"><small>02 / TASKS</small><h3>Small steps, forward.</h3><p><span aria-hidden="true">✓</span> Capture an idea</p><p><span aria-hidden="true">○</span> Plan the next step</p><p><span aria-hidden="true">○</span> Leave space to think</p></article>
          <article className="tn-demo-calendar"><small>03 / CALENDAR</small><strong>A view of what comes next.</strong><p>Your upcoming events, close at hand.</p></article>
        </div>
        <p className="tn-preview-caption">Illustration only. No account is connected on this website.</p>
      </div>
    </section>
    <section className="tn-features tn-wrap" id="features"><div className="tn-section-heading"><p className="tn-eyebrow">ONE CANVAS, YOUR WAY</p><h2>Keep the context.<br /><em>Lose the clutter.</em></h2></div><div className="tn-feature-grid">
      <article><span>01</span><h3>Notes with room to grow</h3><p>Write freely. Add text cards, images, mind maps, or live websites. Move and resize cards, expand a card to the workspace, and connect related ideas.</p></article>
      <article><span>02</span><h3>Your Google workspace</h3><p>Connect your own Google account to read Gmail, view your calendars and upcoming events, and create or complete tasks in Google Tasks.</p></article>
      <article><span>03</span><h3>A place on your desktop</h3><p>Independent note windows remember their position, size, and color. Keep one on top or enable launch at Windows sign-in. Local notes and local tasks work without a Google account.</p></article>
    </div></section>
    <section className="tn-data tn-wrap"><div><p className="tn-eyebrow">CLEAR PERMISSIONS</p><h2>Your account.<br /><em>Your decision.</em></h2><p>Google sign-in happens in your browser. Threadnote never asks you to enter your Google password into the app. You can disconnect your account in settings.</p><a className="tn-text-link" href={base + "/threadnote/privacy/"}>How your data is handled →</a></div><dl><div><dt>Gmail</dt><dd>Read messages. No sending or deleting.</dd></div><div><dt>Google Calendar</dt><dd>View calendars and upcoming events. No event edits.</dd></div><div><dt>Google Tasks</dt><dd>View task lists, create tasks, and change completion status.</dd></div><div><dt>Local content</dt><dd>Notes and local tasks are stored on your device, not uploaded to a Threadnote server.</dd></div></dl></section>
    <section className="tn-cta tn-wrap"><p className="tn-eyebrow">A PROJECT BY MOHSEN NOURI</p><h2>A quieter corner of your desktop.</h2><p>Threadnote is in development. Google verification and account permissions determine service availability; this page does not claim Google approval.</p><a className="tn-button" href="mailto:mnq13800831@gmail.com?subject=Threadnote">Questions or feedback <span aria-hidden="true">↗</span></a></section>
  </main>;
}
