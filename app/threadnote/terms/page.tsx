import type { Metadata } from "next";
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Threadnote Terms of Use",
  description: "Terms for using the Threadnote desktop app and optional Google integrations.",
  alternates: { canonical: "https://mngh-27.github.io/portfoly/threadnote/terms/" },
};
const base = process.env.PAGES_BASE_PATH ?? "";
export default function ThreadnoteTerms() {
  return <main id="threadnote-content" className="tn-legal tn-wrap"><p className="tn-eyebrow">THREADNOTE / TERMS</p><h1>A few clear<br /><em>ground rules.</em></h1><p className="tn-legal-date">Effective October 19, 2026</p><p className="tn-lead">These terms apply to the Threadnote desktop application developed by Mohsen Nouri and the information pages about that application.</p>
    <section><h2>1. The service</h2><p>Threadnote is a local-first Windows workspace for notes and optional Gmail, Google Calendar, and Google Tasks connections. The app is in development; features may change and service availability is not guaranteed. Google verification and account permissions may limit access to connected services.</p></section>
    <section><h2>2. Your accounts and content</h2><p>Connect only accounts you own or are authorized to use. You remain responsible for the information you add, the websites you open, and actions you take through the app. You retain ownership of your notes, images, and other content.</p><p>Keep backups of important information. Local storage can be affected by device failure, software errors, removal of application data, or your own backup and synchronization tools.</p></section>
    <section><h2>3. Acceptable use</h2><p>Do not use Threadnote to access another person&apos;s account without authorization, violate applicable laws or third-party rights, abuse connected services, or interfere with the security of other systems. Do not distribute versions that impersonate the developer or misrepresent their access to Google data.</p></section>
    <section><h2>4. Google and other third parties</h2><p>Google services are supplied by Google and remain subject to Google&apos;s terms, policies, account restrictions, and availability. Threadnote is an independent application, not a Google product. Adding a live website does not imply that its operator endorses Threadnote or permits every use of its content.</p><p>Review the <a href={base + "/threadnote/privacy/"}>Threadnote Privacy Policy</a> for the app&apos;s data handling and instructions for disconnecting Google. Disconnecting the app does not delete content held in your Google account.</p></section>
    <section><h2>5. Development software and limitations</h2><p>Threadnote is provided as available, without a promise of uninterrupted operation, compatibility with every website, or error-free synchronization. Review important changes before relying on them. To the extent permitted by applicable law, the developer disclaims implied warranties and liability for indirect losses arising from use of the app. Nothing in these terms limits rights or liabilities that cannot lawfully be limited.</p></section>
    <section><h2>6. Updates, source code, and contact</h2><p>These terms may be updated as the app develops, with the effective date shown above. Any rights to copy, modify, or redistribute published source code are governed by the license accompanying that source; these terms do not replace or grant a separate source-code license.</p><p>Questions or support: <a href="mailto:mnq13800831@gmail.com">mnq13800831@gmail.com</a><br />Developer: Mohsen Nouri</p></section>
  </main>;
}
