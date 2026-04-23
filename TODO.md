# TODO: Future Improvements

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

## Future Features

### PalafitHero Component Reference
- See reference/palafit-hero-astro.md for a video hero component with YouTube background
- Includes immersive video background with sound toggle
- Glassmorphism UI elements

## Architecture Notes

### URL Structure
| Page | PT | ES | EN |
|------|----|----|-----|
| Home | / | / | / |
| Shop | /loja | /tienda | /shop |
| Foundation | /fundacao | /fundacion | /foundation |
| Library | /hinarios | /himnarios | /library |
| Archive | /arquivo | /archivo | /archive |

### i18n Navigation
- Navbar.astro maps locale → translated path name
- Footer.astro same mapping
- changeLanguage() handles URL switching