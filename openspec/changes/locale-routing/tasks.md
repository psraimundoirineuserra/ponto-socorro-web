# Tasks: locale-routing

## Phase 1: Create [lang] structure

- [x] 1.1 Create `src/pages/[lang]/` directory
- [x] 1.2 Create `src/pages/[lang]/index.astro` with `getStaticPaths()` for pt, es, en
- [x] 1.3 Move content from `src/pages/index.astro` to `[lang]/index.astro` with locale prop
- [x] 1.4 Create `src/pages/[lang]/foundation.astro` from existing foundation.astro
- [x] 1.5 Create `src/pages/[lang]/archive.astro` from existing archive.astro

## Phase 2: Shop and Library with locale

- [x] 2.1 Create `src/pages/[lang]/shop/index.astro` from existing shop/index.astro
- [x] 2.2 Create `src/pages/[lang]/shop/[product].astro` from existing shop/[product].astro
- [x] 2.3 Create `src/pages/[lang]/library/index.astro` from existing library/index.astro
- [x] 2.4 Create `src/pages/[lang]/library/[slug].astro` from existing library/[slug].astro

## Phase 3: Navigation updates

- [x] 3.1 Update `src/components/layout/Navbar.astro` to receive `locale` prop
- [x] 3.2 Update all `<a href>` in Navbar to use `/{locale}/` prefix
- [x] 3.3 Update `src/components/layout/Footer.astro` to use locale-aware links
- [x] 3.4 Ensure `src/layouts/Layout.astro` passes `locale` to Navbar/Footer

## Phase 4: Redirects

- [x] 4.1 Modify `src/pages/index.astro` to add `return Astro.redirect('/pt/', 301)`
- [x] 4.2 Add 301 redirect from `/foundation` → `/pt/foundation`
- [x] 4.3 Add 301 redirect from `/archive` → `/pt/archive`
- [x] 4.4 Add 301 redirects for `/shop`, `/library`, and their sub-routes

## Phase 5: Testing

- [ ] 5.1 Test `/pt/` serves Portuguese home page
- [ ] 5.2 Test `/es/` serves Spanish home page
- [ ] 5.3 Test `/en/` serves English home page
- [ ] 5.4 Test `/pt/foundation`, `/es/foundation`, `/en/foundation`
- [ ] 5.5 Test `/pt/shop`, `/pt/shop/[product]`
- [ ] 5.6 Test `/pt/library`, `/pt/library/[slug]`
- [ ] 5.7 Test language switcher preserves current page (e.g., `/pt/foundation` → switch to `/es/foundation`)
- [ ] 5.8 Verify `/` redirects to `/pt/` with 301
- [ ] 5.9 Verify `/foundation` redirects to `/pt/foundation` with 301

## Phase 6: Cleanup

- [ ] 6.1 Remove old `src/pages/foundation.astro`
- [ ] 6.2 Remove old `src/pages/archive.astro`
- [ ] 6.3 Remove old `src/pages/shop/index.astro` and `shop/[product].astro`
- [ ] 6.4 Remove old `src/pages/library/index.astro` and `library/[slug].astro`
- [ ] 6.5 Verify build succeeds with `npm run build`
- [ ] 6.6 Commit changes to feature branch

## Phase 7: Home translations and i18n fixes

- [x] 7.1 Re-run DeepSeek translate script for `src/i18n/content/home/` (PT → ES, PT → EN)
- [x] 7.2 Change "Biblioteca" → "Hinários" in `src/i18n/pt.json` (nav.library and library.title)
- [x] 7.3 Change "Biblioteca" → "Himnarios" in `src/i18n/es.json`
- [x] 7.4 Change "Library" → "Hymnals" in `src/i18n/en.json`