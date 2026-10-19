# Mohsen Nouri — Portfolio

A bilingual, theme-aware portfolio for a full-stack software developer. Built
with React, TypeScript, and Vinext.

## Development

```bash
npm install
npm run dev
```

The local site is available at `http://localhost:3001` when the development
server is started with `npm run dev -- --port 3001`.

## Project structure

- `app/` contains the route, document metadata, and global styles.
- `components/portfolio/` contains the page shell and independent sections.
- `data/portfolio.ts` is the single source of truth for copy and resume data.
- `hooks/` contains browser preference behavior for language and theme.
- `types/` contains shared portfolio models.

## Validation

```bash
npm run lint
npm run build
npm test
```

## Deployment

Threadnote's public product and Google OAuth disclosure pages are available at
/threadnote/, /threadnote/privacy/, and /threadnote/terms/ (under the repository
base path on GitHub Pages). These are static information pages, not an online
Google sign-in service. Publishing them does not complete Google's OAuth review.

Pushes to `main` are automatically built and deployed to GitHub Pages by the
workflow in `.github/workflows/deploy-pages.yml`. The production build uses
Vinext's static export and applies the repository path supplied by GitHub
Pages, while local development remains available at `/`.
