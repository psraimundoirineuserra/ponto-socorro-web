# Proposal: Fix SEO 301 Redirect

## Intent

Fix Google Search Console "noindex" error on root URL (cepseris.org) caused by redirect page without meta tags.

## Scope

### In Scope
- Remove manual redirect from `src/pages/index.astro`
- Configure server-side redirect via `astro.config.mjs`

### Out of Scope
- Changes to i18n routing logic

## Approach

Replace `Astro.redirect('/pt/', 301)` in index.astro with `redirects` config in astro.config.mjs.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/pages/index.astro` | Modified | Removed redirect code |
| `astro.config.mjs` | Modified | Added redirects config |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| None | Low | Simple redirect config |

## Rollback Plan

1. Remove redirects from astro.config.mjs
2. Restore redirect code to index.astro

## Success Criteria

- [ ] Root URL (/) returns HTTP 301 (no HTML page)
- [ ] GSC noindex error disappears