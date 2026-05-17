---
name: "Claude Worktree Merge Rules"
description: "Use when merging code from .claude/worktrees/dazzling-blackwell-db65b7 into the main Angular app, mapping worktree pages into src/app/landing-page/features, updating app.routes.ts, or aligning imported layouts to the main app structure and styling."
applyTo: "src/app/landing-page/features/**, src/app/app.routes.ts"
---

# Claude Worktree Merge Rules

## Source and Destination

- **Source**: `.claude/worktrees/dazzling-blackwell-db65b7/src/app/pages/`
- **Destination**: `src/app/landing-page/features/`

## Core Rules

1. Content: Do not hallucinate, forge, or invent new text, imagery, or sections. Only use content that already exists in the source worktree.
2. Shell: Preserve the main app shell. The navbar and footer live in the landing-page layout component only. Never copy, add, or edit navbar or footer components during a merge.
3. Structure: Follow the main app's existing file structure, naming conventions, and styling patterns. Do not copy the worktree's page shell structure verbatim.
4. Shared styles: Use the existing button mixins from `src/styles/_mixins.scss` instead of writing local button styles.
5. Shared badges: Use the main app's existing shared badge styles, such as `.section-badge` from `src/styles.scss`, before adding any local badge styling.
6. Color tokens: If a required color is missing from `src/styles/_variables.scss`, add a named token there first, then reference it. Never hardcode a hex or rgba value that belongs in the token file.
7. Flattening: Inline all source section HTML, SCSS, and TS into the destination feature component files. Do not recreate or preserve worktree child section sub-components.
8. Feature boundaries: Do not introduce `<main>`, `<app-navbar>`, or `<app-footer>` tags inside any destination feature component.
9. Validation: Check responsiveness after every merge.

## Page Mapping

| Worktree page | Main app feature | Notes |
|---|---|---|
| `home` | `about` | Skip `<app-hero>` and `<app-about-section>` |
| `events` | `event` | Full merge |
| `impact` | `impact` | Inline `hero`, `milestones`, `cta` sections |
| `sponsorship` | `sponsorship` | Full merge |
| `get-involved` | `get-involved` | Full merge |
| `contact` | `contact` | Create component and lazy route if missing |
| `membership` | — | **Skip** |
| `news` | — | **Skip** |

## For the `about` Feature

- Source: worktree `home` page sections.
- Skip these sections: `<app-hero>`, `<app-about-section>`, `<app-membership-section>`, `<app-news-section>`.
- Merge remaining sections — `<app-impact-section>`, `<app-events-section>`, `<app-testimonials-section>`, `<app-contact-section>` — inlined into the `about` component.

## For the `impact` Feature

- Source sections: `<app-impact-hero>`, `<app-milestones>`, `<app-impact-cta>`.
- Inline all three into `src/app/landing-page/features/impact/`.
- The worktree renders `<app-footer variant="impact" />` — do not copy this variant prop or a footer instance into the feature component.

## Route Creation

- When a destination feature does not have a route in `src/app/app.routes.ts`, add one using the same lazy-loaded pattern as existing routes.
- The `contact` route and component are not yet created; create them following the conventions of existing features.

## What Not To Do

- Do not rewrite or refactor any file that is not part of the active merge target.
- Do not add content from `membership` or `news` worktree pages anywhere, even as supporting sections.
- Do not edit the navbar or footer at any point during a merge task.
