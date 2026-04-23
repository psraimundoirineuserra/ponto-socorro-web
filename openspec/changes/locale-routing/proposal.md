# Proposal: locale-routing

## Intent

Implement proper locale-prefixed URL routing for protosocorro. Currently pages exist at `/`, `/foundation`, `/archive`, etc. but locale-prefixed URLs (`/pt/`, `/es/`, `/en/`) return 404. The i18n system exists (locales: es, en, pt) but there's no routing infrastructure to serve locale-specific versions of pages.

## Scope

### In Scope
- Create `[lang]/` route structure for all pages
- Default locale (pt) accessible at root `/` OR redirect to `/pt/`
- Navigation components (Navbar, Footer) update links to use current locale
- Language switcher preserves current page path when switching languages
- Handle dynamic routes: shop/[product], library/[slug]

### Out of Scope
- Content translations (already done in `translation-full`)
- Himnos/Library content (per spec: always in PT, no routing prefix needed)
- New translation content creation

## Approach

### Route Structure: Option A — `[lang]/` prefix
```
src/pages/[lang]/
├── index.astro        → /pt/, /es/, /en/
├── foundation.astro   → /pt/foundation, /es/foundation, /en/foundation
├── archive.astro      → /pt/archive, /es/archive, /en/archive
├── shop/
│   ├── index.astro    → /pt/shop, /es/shop, /en/shop
│   └── [product].astro → /pt/shop/[product], etc.
└── library/           → NO prefix (always PT)
```

### Default Locale Handling
- Option A: Redirect `/` → `/pt/` (cleaner URLs, explicit locale in path)
- Option B: Keep `/` as pt, `/pt/` as alias
- **Decision**: Redirect `/` → `/pt/` to have consistent locale-prefixed URLs

### Navigation Integration
- Navbar receives current `lang` prop
- `t()` translation function already exists in `src/i18n/index.ts`
- `changeLanguage(lang, pathname)` utility preserves page when switching
- Update all `<a href="...">` to include `/{lang}/` prefix

### Library/Himnos Exclusion
- Library remains at `/library/`, `/library/[slug]` (no locale prefix)
- Content always loads from PT JSON (no translation loading)
- Navigation still shows library link in all locales

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/pages/` | Restructure | Move pages to `src/pages/[lang]/` |
| `src/components/layout/Navbar.astro` | Modify | Add lang-aware links |
| `src/components/layout/Footer.astro` | Modify | Add lang-aware links |
| `src/i18n/index.ts` | No change | Already has `getLocaleFromUrl`, `changeLanguage` |
| `src/layouts/Layout.astro` | Modify | Detect lang from URL, pass to components |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| SEO impact from URL changes | High | Set up 301 redirects from old paths to new `/pt/` paths |
| Broken external links | Medium | Document changes, monitor in analytics |
| Library route conflict | Low | Library stays at root level, no lang prefix |

## Rollback Plan

```bash
git checkout HEAD -- src/pages/
# Restores original page structure
# Note: Any added redirects would also need manual removal
```

## Dependencies

- Previous SDD `translation-full` completed (i18n system exists)

## Success Criteria

- [ ] `/pt/`, `/es/`, `/en/` serve correct locale pages
- [ ] `/pt/foundation`, `/es/foundation`, `/en/foundation` work
- [ ] Root `/` redirects to `/pt/`
- [ ] Navbar links update per locale (e.g., on `/es/foundation` → foundation link goes to `/es/foundation`)
- [ ] Language switcher maintains current page (switch from `/pt/foundation` to `/es/` → `/es/foundation`)
- [ ] Library/Himnos remain accessible at `/library/` without locale prefix
- [ ] Build succeeds with new route structure