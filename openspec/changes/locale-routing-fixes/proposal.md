# Proposal: locale-routing-fixes

## Intent

Fix getStaticPaths errors in old dynamic route pages that need redirects.

## Scope

- Fix src/pages/shop/[product].astro - needs getStaticPaths + redirect
- Fix src/pages/library/[slug].astro - needs getStaticPaths + redirect

## Approach

1. Add getStaticPaths() to shop/[product].astro using products data
2. Add getStaticPaths() to library/[slug].astro using hymns data
3. Test all routes

## Success Criteria

- No getStaticPaths errors on old routes
- Redirects work