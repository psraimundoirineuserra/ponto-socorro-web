# Proposal: i18n-paths-fix

## Intent

Fix incorrect paths and property accesses in home components that are causing runtime errors.

## Scope

### Issues
1. Coordinates.astro uses `t.coordinates.languages` instead of `t.home.coordinates.languages`
2. Manifesto.astro uses wrong import path `../i18n/` instead of `../../i18n/`

## Approach

1. Fix Coordinates.astro path
2. Fix Manifesto.astro import path
3. Test in dev server

## Success Criteria

- No runtime errors on /pt/, /es/, /en/
- All content renders correctly