# Proposal: i18n-home-fix

## Intent

Fix all home page components to properly use i18n with locale-aware loading. Currently components have hardcoded `useTranslations('es')` and don't receive locale prop from parent pages.

## Scope

### Included
- Fix `[lang]/index.astro` to pass `locale` prop to all child components
- Fix `Hero.astro` to accept and use `locale` prop
- Fix `Coordinates.astro` to accept and use `locale` prop
- Fix `HinarioPreview.astro` to accept and use `locale` prop
- Fix `Manifesto.astro` to accept locale prop and load from JSON (extends manifesto-fix)
- Update `content-pt.json` with full manifesto body
- Re-translate with DeepSeek for ES and EN

### Excluded
- Foundation/Archive pages (already fixed)
- Shop pages
- Library pages (himns always in PT)

## Approach

1. Modify `[lang]/index.astro` to pass `locale` to all components
2. Modify each component to accept `locale` prop and use it
3. Update Manifesto.astro to load from JSON with full body content
4. Re-run DeepSeek translation for complete content
5. Test all locales in dev server

## Risks

- DeepSeek may produce mixed translations
- Components may have hardcoded text not in JSON

## Success Criteria

- `/pt/` - All content in Portuguese
- `/es/` - All content in Spanish
- `/en/` - All content in English
- No hardcoded `useTranslations('es')` in any component
- All components receive locale from parent