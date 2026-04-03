<!-- BEGIN:nextjs-agent-rules -->
# AGENTS.md - Grove Vista Properties

## Project Mission
Build a clean, scalable, SEO-first web experience for Grove Vista Properties using Next.js App Router.

## Critical Framework Rule
This project may use a Next.js version with breaking changes.
Before modifying framework behavior (routing, metadata, caching, image handling, layouts, or data fetching), read the relevant docs under:

`node_modules/next/dist/docs/`

Always follow deprecation guidance from that documentation.

## Tech Stack
- Next.js (App Router)
- React 19
- Tailwind CSS
- JavaScript (ES6+)

## Engineering Standards

### 1) Components
- Use functional components only.
- Prefer Server Components by default.
- Add `"use client"` only when interactivity or browser APIs are required.
- Keep components small, reusable, and single-purpose.
- Do not mix server-only logic into client components.

### 2) Styling
- Use Tailwind CSS for all styling.
- Avoid inline styles unless there is a clear, unavoidable reason.
- Keep spacing, typography, and color usage consistent.
- Build mobile-first responsive layouts.

### 3) File Structure
- Use `src/app` for routing and layout hierarchy.
- Use `src/components` for reusable UI.
- Use `src/lib` or `src/utils` for helpers.
- Keep domain-specific UI grouped in feature folders when appropriate.

### 4) Imports
- Use alias imports with `@/`.

```js
import Navbar from "@/components/Navbar";
```

### 5) Routing
- Use Next.js file-based routing only.
- Do not use `react-router-dom`.
- Use route groups and nested layouts when they improve clarity.

### 6) Images
- Use `next/image` instead of `<img>`.
- Provide meaningful `alt` text.
- Set `sizes` correctly for responsive images.
- Prioritize above-the-fold hero images when needed.

### 7) Performance
- Avoid unnecessary re-renders.
- Use dynamic imports for heavy client-only modules when useful.
- Keep client component boundaries minimal.
- Favor server rendering and server data fetching when possible.

### 8) SEO
- Use `metadata` exports in `layout` and `page` files.
- Ensure each page has unique title and description.
- Include Open Graph and Twitter metadata for shareability.
- Keep heading structure semantic and accessible.
- Prefer server rendering for crawl-critical content.

### 9) Code Quality
- Keep code clean and readable.
- Use meaningful names for variables, functions, and components.
- Avoid unnecessary complexity.
- Remove dead code and unused imports.

## Domain Expectations (Grove Vista Properties)
- Prioritize content clarity for property discovery.
- Keep listing pages fast, indexable, and easy to scan.
- Ensure contact and inquiry paths are obvious on every key page.

## Do Not
- Do not use Vite or CRA patterns.
- Do not use `react-router-dom`.
- Do not mix client/server logic incorrectly.
- Do not add large monolithic components when composition is possible.
- Do not introduce framework patterns without validating against local Next docs.

## Definition of Done
- Linting passes.
- App Router conventions are followed.
- SEO metadata is present for changed pages.
- Images use `next/image` where applicable.
- UI is responsive and accessible on mobile and desktop.
<!-- END:nextjs-agent-rules -->
