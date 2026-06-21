---
description: "ReactJS/TypeScript/NextJs/styling development standards and best practices for this project."
applyTo: "**/*.tsx, **/*.ts, **/*.jsx, **/*.js, **/*.css"
---

## Project structure

- `src/app/` — root layout, global CSS, page entry point
- `src/components/` — all UI components, each in its own folder with subfolders for `components/`, `hooks/`, and `types/` if it's not used outside of the component
- `src/data/` — JSON files that drive all content (projects, experiences, skills, contacts)
- `src/types/` — shared TypeScript interfaces
- `src/hooks/` — shared hooks
- `src/utils/` — utility functions

## Guidelines

- **Component Types:**
  - **Server Components** (default): For data fetching, heavy logic, and non-interactive UI.
  - **Client Components:** Add `'use client'` at the top. Use for interactivity, state, or browser APIs.
- **When to Create a Component:**
  - If a UI pattern is reused more than once.
  - If a section of a page is complex or self-contained.
  - If it improves readability or testability.
- **Naming Conventions:**
  - Use `PascalCase` for component files, folders and exports (e.g., `UserCard.tsx`).
  - Use `camelCase` for hooks (e.g., `useUser.ts`).
  - Use `snake_case` or `kebab-case` for static assets (e.g., `logo_dark.svg`).
- **File Naming:**
  - Match the component name to the file name,  if the component does not have sub folders.
  - Match the component name to the folder name if the component has sub folders.
  - For single-export files, default export the component.
  - For multiple related components, use an `index.ts` barrel file.
- **Component Location:**
  - Place shared components in `components/`.
  - Place route-specific components inside the relevant route folder.
- **Props:**
  - Use TypeScript interfaces for props.
  - Prefer explicit prop types and default values.
- **Data:**
  - Data lives in JSON files under `src/data/` — never hardcode content in components.
