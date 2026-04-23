# Proposal: manifesto-fix

## Intent

Fix Manifesto.astro component which has hardcoded mixed-content (PT+ES+EN) instead of loading translated content from JSON files. The component should use locale-aware i18n loading.

## Scope

### Included
- Fix `src/components/home/Manifesto.astro` to load from JSON
- Update `src/i18n/content/home/content-pt.json` with full manifesto text
- Re-translate with DeepSeek to ES and EN
- Ensure locale prop is passed from parent page

### Excluded
- Other components (Hero, Coordinates) - already checked they work
- Foundation/Archive content - already working

## Approach

1. Modify Manifesto.astro to accept `locale` prop and load from `content-{locale}.json`
2. Update content-pt.json with complete manifesto HTML
3. Re-run translate script for ES and EN
4. Verify in dev server

## Risks

- DeepSeek may produce mixed translations again
- Manual correction may be needed

## Success Criteria

- `/pt/` shows manifesto in Portuguese only
- `/es/` shows manifesto in Spanish only
- `/en/` shows manifesto in English only
- No mixed content on any locale