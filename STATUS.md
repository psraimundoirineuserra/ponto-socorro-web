# STATUS.md - CEPSERIS Project Tracker

**Project**: CEPSERIS - Centro Eclético da Fluente Luz Universal Wilson Carneiro de Souza
**Path**: /Users/calderonjosue_/clientes/ponto-socorro/protosocorro/
**Stack**: Astro 6.x + Tailwind v4 + Nanostores + i18n PT/ES/EN
**Updated**: 2026-04-23

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

| Branch | Commit |
|--------|--------|
| main | 17b1a5f |
| develop | 17b1a5f |

**Sync**: main and develop are synchronized.