# TODO: Future Improvements

## Completed

- [x] VideoHero Component - Immersive video hero with YouTube background
  - Implemented in `src/components/home/VideoHero.astro`
  - Sound toggle with glassmorphism design
  - Grid stacking CSS for icon transitions (no ghosting)
- [x] Navbar Logo Update
  - Logo image + "CEPSERIS" brand name
  - Static alt text for accessibility
- [x] Design System V2 - Enhanced with Linear-inspired structure

## Known Issues (Low Priority)

### 1. Himnarios hardcoded
- `src/pages/pt/hinarios/index.astro` has hardcoded locale='pt'
- `src/pages/es/himnarios/index.astro` has hardcoded locale='es'
- Should use dynamic locale like other [lang]/ pages

### 2. Shop - Need to update [lang]/shop/index.astro
- Currently uses getStaticPaths with `*` wildcard - need to verify it works
- May need to remove duplicates if both paths work

### 3. Foundation and Archive pages
- Should verify existing [lang]/foundation.astro and [lang]/archive.astro still work

### 4. Duplicate route pages
- Consider removing duplicated pages: pt/loja, es/tienda, pt/fundacao, es/fundacion, etc.
- Keep only [lang]/ dynamic routes after verifying they work
- Lower priority - works fine as-is

## Future Features

- [ ] Footer component with full navigation
- [ ] Mobile menu polish
- [ ] Product pages with cart integration

## Architecture Notes

### URL Structure
| Page | PT | ES | EN |
|------|----|----|-----|
| Home | / | / | / |
| Shop | /loja | /tienda | /shop |
| Foundation | /fundacao | /fundacion | /foundation |
| Library | /hinarios | /himnarios | /library |
| Archive | /arquivo | /arquivo | /archive |

### i18n Navigation
- Navbar.astro maps locale → translated path name
- Footer.astro same mapping
- changeLanguage() handles URL switching

### Brand Update (2026-04-23)
- Project renamed from "Ponto Socorro" to "CEPSERIS"
- Logo and brand name updated in Navbar
- VideoHero component for homepage background