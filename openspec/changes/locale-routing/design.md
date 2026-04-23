# Design: locale-routing

## Technical Approach

Implement locale-prefixed routing using Astro's `[lang]` dynamic route parameter. All pages move under `src/pages/[lang]/`, with the default locale (pt) accessible at `/pt/` (canonical) and `/` (redirect). Old URLs without prefix redirect to their locale-prefixed equivalents.

## Architecture Decisions

### Decision: Directory Structure

**Choice**: Use `[lang]/` nested directory for all locale pages
**Alternatives considered**: Flat files with `getStaticPaths` filtering by locale, separate locale directories without dynamic route
**Rationale**: Astro's native `[param]` support provides automatic 404 for invalid locales. Clean separation between pages, SEO-friendly, and leverages built-in routing without custom middleware.

### Decision: Default Locale URL Format

**Choice**: `/pt/` is canonical home; `/` redirects to `/pt/`
**Alternatives considered**: `/` works for pt (no redirect), only non-pt locales get prefix
**Rationale**: Consistent URL structure across all locales. SEO best practice: no duplicate content. User can always expect `/{locale}/{page}` pattern. Redirect is a single line in `src/pages/index.astro`.

### Decision: Old URL Redirects

**Choice**: `301` redirects from old paths (`/foundation` → `/pt/foundation`)
**Alternatives considered**: Render same content at both URLs (duplicate content issues), 404
**Rationale**: Preserve SEO rankings and bookmarked links. 301 is cacheable and signals permanent move to search engines.

### Decision: Navbar Link Building

**Choice**: Pass `locale` prop to Navbar; links built as `/{locale}/{path}`
**Alternatives considered**: Store current locale in Nanostores, use `getLocaleFromUrl()` on each render
**Rationale**: Explicit prop is simpler, works with Astro's static generation, avoids client-side store synchronization. `changeLanguage()` in i18n/index.ts already handles this pattern.

## Data Flow

```
Request: /es/foundation
    │
    ▼
Astro [lang] param = 'es'
    │
    ▼
Layout receives locale='es' prop
    │
    ├─→ Navbar locale={locale} → links like /es/{path}
    └─→ Page uses useTranslations(locale) → correct translations
```

```
Request: /foundation (old URL)
    │
    ▼
301 Redirect → /pt/foundation (default locale)
```

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `src/pages/[lang]/index.astro` | Create | Home page — `/pt/`, `/es/`, `/en/` |
| `src/pages/[lang]/foundation.astro` | Create | Foundation page |
| `src/pages/[lang]/archive.astro` | Create | Archive page |
| `src/pages/[lang]/library/index.astro` | Create | Library index |
| `src/pages/[lang]/library/[slug].astro` | Create | Library hymn detail |
| `src/pages/[lang]/shop/index.astro` | Create | Shop index |
| `src/pages/[lang]/shop/[product].astro` | Create | Shop product detail |
| `src/pages/index.astro` | Modify | Add redirect to `/pt/` |
| `src/pages/foundation.astro` | Delete | Replaced by `[lang]/foundation.astro` |
| `src/pages/archive.astro` | Delete | Replaced by `[lang]/archive.astro` |
| `src/pages/library/index.astro` | Delete | Replaced by `[lang]/library/index.astro` |
| `src/pages/library/[slug].astro` | Delete | Replaced by `[lang]/library/[slug].astro` |
| `src/pages/shop/index.astro` | Delete | Replaced by `[lang]/shop/index.astro` |
| `src/pages/shop/[product].astro` | Delete | Replaced by `[lang]/shop/[product].astro` |
| `src/components/layout/Navbar.astro` | Modify | Use `Astro.props.locale` for link prefix |
| `src/layouts/Layout.astro` | Modify | Ensure `locale` prop flows correctly |

## Interfaces

```typescript
// src/i18n/index.ts - already has these functions
getLocaleFromUrl(url: URL): Locale  // extracts from /pt/path → 'pt'
changeLanguage(lang: Locale, pathname?: string): string  // /pt/foundation → /es/foundation
```

```astro
// All [lang] pages receive locale prop via getStaticPaths
export function getStaticPaths() {
  return locales.map(lang => ({ params: { lang }, props: { locale: lang } }));
}
```

## Testing Strategy

| Layer | What | Approach |
|-------|------|----------|
| E2E | All locale combinations work | Manual or Playwright: `/pt/`, `/es/`, `/en/`, `/pt/foundation`, `/es/foundation`, `/pt/library/hino-1`, redirects |
| E2E | Old URLs redirect | Check `/` → `/pt/`, `/foundation` → `/pt/foundation` |
| Integration | Navbar links correct | Click language switcher on each page |

## Migration Plan

1. Create `[lang]/` directory structure with new pages (parallel to existing)
2. Add redirect from `src/pages/index.astro` to `/pt/`
3. Update Navbar to use locale prefix in hrefs
4. Delete old pages once all locale routes verified working
5. Test all locale combinations and redirects

## Rollback Plan

1. Revert to old pages by restoring from git
2. Remove `[lang]/` directory
3. Redirects in `index.astro` can be removed (it's just `return Astro.redirect('/pt/')`)

**Risk**: SEO impact if redirects misconfigured. Mitigation: test redirects before deleting old pages.