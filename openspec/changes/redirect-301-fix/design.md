# Design: Redirect 301 Fix

## Technical Approach

Use Astro's built-in `redirects` config in `astro.config.mjs` instead of manual redirect in page component.

## Files Changed

| File | Change |
|------|--------|
| `astro.config.mjs` | Add `redirects: { '/': '/pt/' }` |
| `src/pages/index.astro` | Remove `Astro.redirect` code |

## How It Works

Astro handles redirect at **server level** (SSR or build), not via HTML meta refresh. Google receives HTTP 301 without reading HTML body.

## Key Decision

1. Keep `index.astro` minimal (empty frontmatter) - Astro will use config-based redirect