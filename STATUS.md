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
| Footer redes sociales | ✅ | Facebook, Instagram, Google, YouTube |
| **SEO Implementation** | ✅ | ReligiousOrganization schema, BaseSeo, MetaSocial, sitemap, robots.txt |
| **Home Coordinates (2026-04-24)** | ✅ | 4 columns with Lucide icons |
| **Home Manifesto (2026-04-24)** | ✅ | New CEPSERIS founding story text |
| **Archive 28 videos** | ✅ | 18 canal + 10 outro (data only, filter pending) |

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

## Archive Page (2026-04-24)

| Feature | Status | Notes |
|---------|--------|-------|
| Timeline (30 events) | ✅ | 3 fases: 1892-1971, 1972-2006, 2007-2026 |
| 28 videos data | ✅ | 18 canal + 10 outro con datos reales |
| Filter tabs | ✅ | Canal (18) / Outras Fontes (10) / Todos (28) - ordered |
| Sort by views | ✅ | Descendente, videos con 0 views al final |
| Footer YouTube icon | ✅ | Icono junto a Google Maps |
| Red button removed | ✅ | Botón rojo del canal eliminado |
| **4 Dimensões tabs** | ⏳ Pendente | Plan guardado en `openspec/changes/archive-dimensions-tabs/` |

**Files:**
- `src/data/archive-videos.ts` - 28 videos
- `src/pages/pt/arquivo/index.astro` - Page con filtro (NO funciona)
- `openspec/changes/archive-page/` - SDD artifacts

**Video adicional pendiente:**
- "QUE FORÇA É ESTA - LUCIANO SANCHES" - ID duplicado con centro-pronto-socorro-ris

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
- YouTube: https://www.youtube.com/@pd.raimundononato3780
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
| develop | c274918 | 4 commits ahead of origin |

**Pending push to origin/develop**

---

## Vercel Deploy (2026-04-24)

| Environment | URL | Status |
|-------------|-----|--------|
| Preview | https://protosocorro-hce7jir8i-calderonjosue.vercel.app | ✅ |
| Production | https://cepseris.org | ✅ Live |
| Alias | https://protosocorro-1pyp41och-calderonjosue.vercel.app | ✅ |

**Commits pending deploy (after git push):**
- `c274918` - fix(archive): filter works + 28 videos (NOT YET - filter NOT working)
- `293ad85` - feat(archive): add 10 external videos with source filter tabs
- `fbe5e3e` - feat(archive): add youtube icon to footer
- `c9c014c` - feat(archive): add timeline to arquivo page

---

## Notes

- **Coordinates consistency:** Column 3 has subtitle "Acre, Brasil" but columns 1,2,4 don't. Future task to review.
- **pt.json cleanup:** `community` and `languages` keys were removed from coordinates (were unused after changes).
- **Archive filter:** JS click handler in index.astro needs fix - currently not filtering videos on click.
- **Video duplicate:** "QUE FORÇA É ESTA" uses same YouTube ID as "Centro e Pronto Socorro R.I.S." - necesita confirmación.