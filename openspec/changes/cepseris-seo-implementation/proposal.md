# Proposal: CEPSERIS SEO Implementation

## Intent

Implement technical SEO for CEPSERIS website - a ReligiousOrganization (Santo Daime church) website. This includes structured data (JSON-LD), meta tags optimization, sitemap generation, and robots.txt.

## Scope

### In Scope
- ReligiousOrganization schema (JSON-LD) in `<head>`
- BreadcrumbList schema for navigation
- MetaSocial tags (Open Graph + Twitter)
- BaseSeo component with title, description, canonical
- Sitemap auto-generation via @astrojs/sitemap
- Robots.txt configuration
- Update Layout.astro to integrate SEO components

### Out of Scope
- Google Search Console verification
- Analytics integration
- Product schema (no e-commerce)
- Service schema

## Approach

Create SEO components in `src/components/seo/` adapted from reference projects (Astro-Ecommerce, Octavo-fuego):

1. **BaseSeo.astro** - Primary meta tags (title, description, canonical, keywords, robots)
2. **ReligiousOrganizationSchema.astro** - JSON-LD schema for ReligiousOrganization
3. **BreadcrumbJsonLd.astro** - BreadcrumbList schema component
4. **MetaSocial.astro** - Open Graph + Twitter Card meta tags

Integration via Layout.astro + astro.config.mjs update for sitemap.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/layouts/Layout.astro` | Modified | Integrate SEO components |
| `src/components/seo/*.astro` | New | 4 new SEO components |
| `astro.config.mjs` | Modified | site URL + sitemap config |
| `public/robots.txt` | New | SEO robots.txt |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Duplicate meta tags | Low | BaseSeo replaces existing, ensure no conflicts |
| Schema validation | Low | JSON-LD is static, validated before commit |

## Rollback Plan

1. Remove SEO component imports from Layout.astro
2. Restore original title/description meta tags
3. Delete `src/components/seo/` directory
4. Revert astro.config.mjs site URL
5. Delete public/robots.txt

## Dependencies

- @astrojs/sitemap (already installed)
- Site URL must be https://cepseris.org

## Success Criteria

- [ ] ReligiousOrganization schema present in all pages
- [ ] Meta tags render correctly (OG, Twitter, canonical)
- [ ] Sitemap generated at build time
- [ ] robots.txt accessible at /robots.txt
- [ ] No duplicate meta tags in rendered HTML