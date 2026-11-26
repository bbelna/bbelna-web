# Brandon Belna's Website

This repo holds the code for my personal website hosted at
https://www.bbelna.com. Built using Angular 22.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to
`http://localhost:4200/`.

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/`
directory. Content pages are prerendered to static HTML; unknown URLs are
server-rendered with a 404.

Requires Node.js 22.22.3+, 24.15+, or 26+.

## Project structure

```
src/app/
├── content/        Site content (profile, projects, publications, posts)
├── core/
│   ├── layout/     Header, footer
│   ├── models/     Content types
│   ├── seo/        Page title + meta description strategy
│   └── services/   ContentService, ThemeService
├── shared/
│   ├── math/       KaTeX: `tex` pipe and <app-math> component
│   └── ui/         Reusable UI, imported from '@shared/ui': appButton,
│                   app-card, app-tag, app-icon, app-section-heading,
│                   app-empty-state, appExternal
└── features/       One folder per page (home, projects, research, writing)
```

Lines are limited to 80 characters (`.prettierrc`, `.editorconfig`). Format with
`npx prettier --write .`; for long Tailwind class lists use
`[class]="'… ' + '…'"`, since Prettier won't wrap a `class` attribute.

Path aliases: `@core/*`, `@shared/*`, `@features/*`, `@content/*`.

Theme colors are CSS variables in `src/styles.css`, exposed as Tailwind
utilities (`bg-surface`, `text-ink`, `text-muted`, `border-line`, `text-accent`,
…).

### Adding content

- **Post:** add an entry to `content/posts.ts`. It's prerendered at
  `/writing/<slug>` automatically.
- **Project / publication:** add to `content/projects.ts` /
  `content/publications.ts`. Set `featured: true` to show it on the home page.
- **Math:** write `$inline$` or `$$display$$` TeX in any bio, abstract, summary,
  or post text. Use `\$` for a literal dollar sign.
- **Icon:** add path data to `shared/ui/icon/icons.ts`.

---

Copyright 2026 Brandon Belna. All rights reserved.
