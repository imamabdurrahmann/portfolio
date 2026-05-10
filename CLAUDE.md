# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project Overview

Personal portfolio website built with **Next.js 16** (App Router), **Tailwind CSS v4**, and **Framer Motion**. Features dark/light theme toggle with glass morphism design.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint check
```

## Architecture

### Tech Stack
- **Next.js 16** with App Router and React 19
- **Tailwind CSS v4** with PostCSS plugin (no tailwind.config.ts)
- **Framer Motion** for animations
- **Base UI** + shadcn/ui components
- **Formspree** for contact form

### Theming System
Theme uses CSS custom properties in `src/app/globals.css`:
- `.dark` class = purple theme (#a78bfa primary)
- `.light` class = indigo theme (#7c3aed primary)
- Controlled via `ThemeProvider` context with localStorage persistence
- Theme applied to `document.documentElement`

### Project Data
Projects defined in `src/lib/projects.ts` — an array of `Project` objects. Add/edit projects there.

### Component Structure
- `src/components/` — Section components (Banner, Experience, FeaturedProjects, etc.)
- `src/components/ui/` — shadcn/ui primitives
- `src/app/` — Pages using App Router
- Pages: `/` (home), `/projects`, `/contact`

## Styling Conventions

Custom utilities defined in globals.css:
- `.glass` / `.glass-card` — Glass morphism effect
- `.gradient-text` — Gradient text effect
- `.btn-primary` / `.btn-secondary` — Button styles
- `.tech-tag` — Tech stack pill badges
- `.social-icon` — Social media icon buttons

Use Tailwind's `@custom-variant` for theme-aware styling: `dark:` and `light:` prefixes.
