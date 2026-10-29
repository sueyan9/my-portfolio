# Repository Instructions

## Project Overview

This repository contains a personal portfolio website built with React 19 and Vite. The application uses JavaScript and JSX with ES modules, React Router, CSS, Bootstrap, and animation libraries. Preserve the existing visual style and responsive behavior when making changes.

## Repository Map

- `src/main.jsx` and `src/App.jsx`: application entry point and routing.
- `src/Home.jsx`: portfolio home page.
- `src/components/`: UI components and their associated styles.
- `src/assets/` and `public/`: images, videos, and other static assets.
- `public/blogs/`: Markdown blog articles.
- `shared/portfolioData/`: structured portfolio knowledge shared by the assistant.
- `shared/portfolioAssistantData.js`: shared assistant data logic.
- `server/`: server-side assistant configuration and request handling.
- `netlify/functions/portfolio-assistant.js`: production assistant API entry point.
- `vite.config.js`: Vite configuration, the `@` alias for `src/`, and the local assistant API middleware.

## Development Commands

- `npm ci`: install dependencies from the committed lockfile.
- `npm run dev`: start the Vite development server.
- `npm run build`: build the production application into `dist/`.
- `npm run preview`: preview the production build locally.
- `npm run lint`: run ESLint.

There is currently no `npm test` script. Do not report tests as passing unless an actual test command was run successfully.

## Implementation Guidelines

- Read the relevant files before editing and follow their existing conventions.
- Keep changes focused on the requested task. Preserve unrelated local changes.
- Use functional React components and follow the Rules of Hooks.
- Reuse existing components, styles, and dependencies before adding new ones.
- Keep portfolio facts consistent with `shared/portfolioData/`; do not invent experience, skills, or contact details.
- Maintain keyboard accessibility, meaningful labels, image alternative text, and mobile layouts.
- Avoid editing generated `dist/` output or installed `node_modules/` files.
- Use npm and keep `package-lock.json` consistent when changing dependencies.

## Assistant API and Secrets

- Keep provider credentials and private configuration on the server. Never expose API keys through client code or `VITE_` variables.
- Use `.env.example` as the configuration reference. Never commit secrets or print local `.env` contents.
- Preserve the local knowledge fallback when the provider is unavailable or disabled.
- Preserve request limits, rate limiting, token limits, and the AI disable switch unless the task explicitly changes them.
- Keep the Vite development API and Netlify production function compatible with the shared server handler.
- Treat the in-memory rate limit and token counter as best-effort per-instance controls, not global quotas.

## Verification

- For code changes, run `npm run build` and `npm run lint` as appropriate. Distinguish existing failures from regressions introduced by the change.
- For UI changes, check relevant desktop and mobile layouts and interactions when a browser is available.
- For assistant changes, check the fallback behavior and relevant request validation without requiring live paid API calls.
- Documentation-only changes require a review for accuracy and a clean diff; a production build is unnecessary.
- Summarize the changes, verification performed, and any remaining limitations. Do not deploy or publish unless requested.

## Change and UI Design Tracking

- Use OpenSpec for feature changes, UI redesigns, and behavior changes. See `openspec/README.md` and `openspec/config.yaml`.
- Keep proposals, specs, design decisions, and tasks in `openspec/changes/<change-name>/`; update them when scope or design changes.
- For UI work, follow `openspec/templates/ui-design.md` and record responsive behavior, accessibility, and actual visual verification evidence.
- Small fixes and documentation edits may use a direct diff; do not require a proposal for every edit.
- Archive completed changes with the OpenSpec workflow and keep related code and planning artifacts together in Git.
