# Agents Guide

This file is for agentic coding assistants working in this repository.

## Project Overview
- Stack: Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, shadcn/ui
- Package manager: npm (package-lock.json present)
- Output: static export (see next.config.js)
- Aliases: see components.json and tsconfig paths

## Commands

### Install
- `npm ci` (CI) or `npm install` (local)

### Dev
- `npm run dev` (Next.js dev server)

### Build
- `npm run build` (Next.js build)
- Build output: `out/` (static export)

### Start
- `npm run start` (production server, if using non-export)

### Lint
- `npm run lint` (Next.js lint)

### Tests
- No test runner configured in `package.json`
- If you add tests later, document single-test commands here

### Single Test Guidance
- Not applicable (no Jest/Vitest/Playwright configured)

## Repo-Specific Notes
- Deployment: GitHub Pages via `.github/workflows/deploy.yml`
- Build uses `NEXT_PUBLIC_BASE_PATH=/portafolio` and adds `out/.nojekyll`
- Static export is enabled (`output: "export"`)
- Images are unoptimized; remotePatterns configured in `next.config.js`

## Cursor/Copilot Rules
- No `.cursorrules`, `.cursor/rules/`, or `.github/copilot-instructions.md` found

## TypeScript
- Strict mode enabled (`tsconfig.json`)
- Module resolution: `bundler`
- JSX: `preserve`
- Path alias: `@/*` -> project root
- `allowJs: true` (JS files allowed)
- `noEmit: true` (typecheck only)

## Next.js Conventions
- App Router structure under `app/`
- Root layout at `app/layout.tsx`
- Global styles in `app/globals.css`
- Client components marked with `"use client"`
- Metadata configured in `app/layout.tsx`

## Imports
- Prefer absolute imports via alias (e.g. `@/components/...`, `@/lib/...`)
- Use relative imports for local sibling files in the same folder
- Shadcn utils are in `lib/utils.ts` (use `cn` for class merges)
- Third-party imports first, then local, then styles

## Formatting
- No Prettier config in repo; follow existing formatting
- Indentation appears to be 2 spaces in most TS/TSX files
- Keep JSX attributes and className strings readable; avoid reformatting unrelated code

## Naming Conventions
- Components: PascalCase (files and exports)
- Hooks: `useX` naming (see `components/ui/use-mobile.tsx`)
- Utility functions: camelCase (see `lib/utils.ts`)
- Types/Interfaces: PascalCase (see `types/`)

## Styling Conventions
- Tailwind CSS is primary styling mechanism
- Custom utilities defined in `app/globals.css`
- Use CSS variables for colors and theming (`--background`, `--foreground`, etc.)
- Dark mode uses `class` strategy (see `tailwind.config.ts`)
- Prefer `cn()` from `lib/utils.ts` for conditional classNames
- Use shadcn/ui components under `components/ui/`

## Error Handling
- No explicit error handling patterns documented in repo
- Prefer explicit error states in UI rather than silent failures
- Avoid empty catch blocks

## Accessibility
- Use semantic HTML and proper ARIA attributes when needed
- Ensure `alt` text on images (see `components/Hero.tsx`)

## Environment
- `NEXT_PUBLIC_SITE_URL` is used for metadata and JSON-LD
- `NEXT_PUBLIC_BASE_PATH` is used for GitHub Pages builds

## Files to Check Before Editing
- `package.json` for scripts
- `tsconfig.json` for TypeScript rules
- `next.config.js` and `next.config.mjs` for build behavior
- `app/globals.css` for Tailwind utilities and CSS variables
- `components.json` for shadcn/ui settings and aliases

## Agent Behavior
- Prefer small, focused changes
- Do not introduce new dependencies without a clear need
- Keep changes aligned with existing shadcn/ui patterns
- Avoid refactors when fixing a single bug

## Lint/Typecheck Caveat
- `next.config.mjs` sets:
  - `eslint.ignoreDuringBuilds = true`
  - `typescript.ignoreBuildErrors = true`
- This means builds may succeed even with lint/type errors
- Still aim to keep lint/type errors at zero

## Suggested Verification
- Run `npm run lint` after logic changes
- Run `npm run build` before release changes
- If adding tests in the future, document how to run a single test
