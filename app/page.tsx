import { PortfolioPage } from "@/components/portfolio/PortfolioPage";

export default function Home() {
  return <PortfolioPage threadnoteHref={(process.env.PAGES_BASE_PATH ?? "") + "/threadnote/"} />;
}
