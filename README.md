# Jayanth Alapati Portfolio

Portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and interactive UI/3D sections.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Three.js / React Three Fiber

## Development

1. Install dependencies:

```bash
npm install
```

2. Start local development:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Scripts

- `npm run dev`: Run local dev server
- `npm run build`: Production build
- `npm run start`: Start production server
- `npm run lint`: Run ESLint
- `npm run lint:fix`: Auto-fix lint issues where possible
- `npm run typecheck`: Run TypeScript checks
- `npm run check`: Run typecheck + lint + build

## CI/CD

- `CI` workflow validates typecheck, lint, and build on pushes/PRs.
- `Deploy Next.js site to Pages` publishes `master` to GitHub Pages.

## Deployment

The app is configured for static export (`output: 'export'`) and GitHub Pages base path in production.
