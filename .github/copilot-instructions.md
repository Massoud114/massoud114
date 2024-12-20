# Copilot Instructions for this Repository

## Build, test, and lint commands

Use `pnpm` locally (the repo includes `pnpm-lock.yaml`).

| Task | Command | Notes |
| --- | --- | --- |
| Install dependencies | `pnpm install` | |
| Start dev server | `pnpm run dev` | Vite serves on port `5173` |
| Build production assets | `pnpm run build` | Outputs to `dist/` |
| Preview production build | `pnpm run preview` | Runs Vite preview server |
| Unit tests (all) | `pnpm run test:unit -- --run` | Uses Vitest in run mode |
| Unit test (single file) | `pnpm exec vitest run path/to/file.test.js` | Replace with target test file |
| E2E tests (headless) | `pnpm run test:e2e` | Starts preview server on `4173`, then runs Cypress |
| E2E tests (interactive) | `pnpm run test:e2e:dev` | Starts dev server on `4173`, then opens Cypress |
| Format source files | `pnpm run format` | Prettier on `src/` |

Current state: no committed test files were found, even though test scripts are configured.

## High-level architecture

This is a Vite-built static portfolio site (French-first content) with a single entry page:

1. `index.html` contains all page structure and section content (`home`, `about`, `services`, `projects`, `contact`).
2. `src/index.js` is the behavior layer: scroll interactions, typed text, project carousel, AOS animation setup, and dynamic age values.
3. `src/style.css` combines Tailwind v4 (`@import "tailwindcss"` + `@theme`) with extensive custom CSS for layout, sections, and responsive breakpoints.
4. Static assets are sourced from `/img` and `/doc` and are bundled into `dist/assets` during `vite build`.

Build/deploy flow in this repo:

- `vite build` generates `dist/`.
- `.gitlab-ci.yml` builds and copies `dist/.` to `public/` for Pages deployment on the default branch.
- `Dockerfile` starts the Vite dev server (`yarn run dev`) and exposes port `5173`.

## Key conventions specific to this codebase

- Keep `index.html`, `src/index.js`, and `src/style.css` in sync; JavaScript behavior depends on exact selectors and IDs (`.navbar`, `.scroll-up-btn`, `.typing`, `.typing2`, `#year`, `.xpAge`, `.carousel`).
- AOS is configured globally in `src/index.js`; section-level animation behavior is controlled through `data-aos*` attributes in `index.html`.
- Carousel content must follow the `.carousel > .card > .box` structure expected by `tiny-slider`.
- Theme colors are defined in CSS custom properties (`--color-primary`, `--color-secondary`) via Tailwind v4 `@theme`; reuse these tokens instead of introducing ad-hoc colors.
- Formatting convention uses tabs (`tabWidth: 4`, `useTabs: true`) from `.prettierrc`.
- `dist/` is generated output; make source edits in `index.html`, `src/index.js`, `src/style.css`, and asset folders, then rebuild.
