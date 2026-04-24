# STATUS.md - CEPSERIS Project Tracker

**Project**: CEPSERIS - Centro e Pronto Socorro Espiritual Raimundo Irineu Serra
**Path**: /Users/calderonjosue_/clientes/ponto-socorro/protosocorro/
**Stack**: Astro 6.x + Tailwind v4 + Nanostores + i18n PT/ES/EN
**Updated**: 2026-04-24

---

## Stack

- **Framework:** Astro 6.x
- **Styling:** Tailwind CSS v4
- **State:** Nanostores (c/ localStorage persistence)
- **UI:** React 19 + Lucide Icons
- **Languages:** PT (default) / ES / EN
- **Repo:** psraimundoirineuserra/ponto-socorro-web
- **Domains**: cepseris.org (prod), protosocorro.vercel.app (preview)

---

## Completed

| Feature | Status | Notes |
|---------|--------|-------|
| VideoHero | ✅ | YouTube background + audio toggle glassmorphism |
| Audio toggle CSS | ✅ | Grid stacking - no ghosting |
| Audio toggle scaling | ✅ | 1.85rem, asymmetric 0.8/1.05/1.3 |
| Navbar logo + CEPSERIS | ✅ | Image + brand name static |
| Design System V2 | ✅ | Linear-inspired structure |
| Navbar c/ URLs simples | ✅ | /foundation, /library, etc. |
| Mobile menu JS | ✅ | transition:persist working |
| favicon.svg | ✅ | Created |
| Placeholder SVG images | ✅ | 10 products |
| CartDrawer | ✅ | Slide-out cart |
| AddToCart | ✅ | Connected to cartStore |
| ProductGrid | ✅ | 10 products |
| nanostores c/ localStorage | ✅ | Persistence active |
| i18n URLs PT/ES/EN | ✅ | All pages translated |
| SDD configured | ✅ | openspec + engram (hybrid) |
| Footer con dirección | ✅ | Rio Branco - AC, Brasil |
| Footer redes sociales | ✅ | Facebook, Instagram, Google |
| **SEO Implementation** | ✅ | ReligiousOrganization schema, BaseSeo, MetaSocial, sitemap, robots.txt |
| **Home Coordinates (2026-04-24)** | ✅ | 4 columns with Lucide icons |
| **Home Manifesto (2026-04-24)** | ✅ | New CEPSERIS founding story text |

---

## Home Coordinates (Final - 2026-04-24)

| Column | Icon | Value | Label |
|--------|------|-------|-------|
| 1 | ⭐ Star | 1966 | Mandato do Mestre |
| 2 | ⛪ Church | 1997 | Fundação da Sede |
| 3 | 📍 MapPin | Rio Branco, Acre, Brasil | Localização |
| 4 | 🌺 Flower2 | Linha de Arrochim | Método de Cura |

**Files changed:**
- `src/components/home/Coordinates.astro` - Icons and layout
- `src/i18n/pt.json` - Labels (mandato, founded, location, cura)
- `src/i18n/content/home/content-pt.json` - Manifesto body text

**Note (for future review):** Column 3 has subtitle "Acre, Brasil" but other columns don't have subtitles. Inconsistency to address later.

---

## Problems Known

| Problem | Severity | Status |
|---------|----------|--------|
| Audio player not connected to store | 🔴 Alta | Pending |
| Shop filters not implemented | 🟡 Media | Pending |
| Measurement form not created | 🟡 Media | Pending |
| Hymn counts incorrect (40 vs 10) | 🟢 Baja | Pending |
| Manifesto text mixed ES/EN | 🟢 Baja | Pending |

---

## Future Features

| Feature | Priority |
|---------|----------|
| Foundation content expansion | 🟡 Media |
| Archive external resources | 🟡 Media |
| Mobile menu polish | 🟢 Baja |
| Coordinates column 3 subtitle consistency | 🟢 Baja |

---

## SEO Implementation (2026-04-23)

| Component | Status | File |
|-----------|--------|------|
| BaseSeo.astro | ✅ | Meta tags base, canonical, keywords |
| MetaSocial.astro | ✅ | Open Graph tags (no Twitter) |
| ReligiousOrganizationSchema | ✅ | JSON-LD ReligiousOrganization |
| BreadcrumbJsonLd | ✅ | BreadcrumbList schema |
| sitemap.xml | ✅ | Auto-generated via @astrojs/sitemap |
| sitemap-index.xml | ✅ | https://cepseris.org/sitemap-index.xml |
| robots.txt | ✅ | Configured with sitemap reference |
| Google Search Console | 🔄 | Indexación solicitada /en/ /pt/ /es/ |

**SEO Data:**
- Name: Centro e Pronto Socorro Espiritual Raimundo Irineu Serra
- Alias: CEPSERIS, Pronto Socorro
- Keywords: Santo Daime, Centro Espiritual, Himnarios, etc.
- Address: Rio Branco - AC, Brasil

---

## Contact Info (Private)

See `redes-sociais-cepseris.md` for:
- Dirección: 010, KM04, Ramal 5, R. da Vila dos Carneiros, 000, Rio Branco - AC, Brasil
- Facebook: https://www.facebook.com/ProntoSocorrroEspiritual/
- Instagram: https://www.instagram.com/ps.raimundoirineuserra/
- Google: https://share.google/8FMQmaWrE8rfLZFtu

---

## Translations Status

| Page | PT | ES | EN |
|------|----|----|-----|
| Home | ✅ | ✅ | ✅ |
| Foundation | ✅ | ❌ | ❌ |
| Archive | ❌ | ❌ | ❌ |
| Library | ✅ | ✅ | ✅ |
| Shop | ✅ | ✅ | ✅ |

---

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

---

## Current Branches

| Branch | Commit | Status |
|--------|--------|--------|
| main | fe92d0d | Al día |
| develop | fe92d0d | Al día |

**Sync**: main and develop are synchronized.

---

## Schema Zero Errors (2026-04-23)

| Fix | Details |
|-----|---------|
| @type | Removed ReligiousOrganization → ["Organization", "Church"] |
| URL cleaning | .replace(/\/$/, '') → .slice(0, -1) for robust trailing slash removal |
| Deploy | Vercel production ✅ cepseris.org |

---

## Vercel Deploy (2026-04-24)

| Environment | URL | Status |
|-------------|-----|--------|
| Preview | https://protosocorro-hce7jir8i-calderonjosue.vercel.app | ✅ |
| Production | https://cepseris.org | ✅ Live |
| Alias | https://protosocorro-1pyp41och-calderonjosue.vercel.app | ✅ |

**Commits in last deploy:**
- `9713c1b` - update manifesto body and final icon selections
- `fe92d0d` - fix AC → Acre in coordinates column 3
- `697b993` - update coordinates labels and Mandato icon
- `67afd5e` - add Star icon to Mandato column
- `2e0bdb0` - coordinates with 4 icon options for Cura selection
- `9c5603c` - fix: remove singular from manifesto, add Music icon
- `7a56cca` - feat: update home with real CEPSERIS data

---

## Notes

- **Coordinates consistency:** Column 3 has subtitle "Acre, Brasil" but columns 1,2,4 don't. Future task to review.
- **pt.json cleanup:** `community` and `languages` keys were removed from coordinates (were unused after changes).