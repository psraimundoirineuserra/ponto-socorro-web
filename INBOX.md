# INBOX.md - Tareas Pendientes y Nuevas Ideas

**Project**: CEPSERIS
**Created**: 2026-04-23
**Updated**: 2026-04-24

---

## Tareas Nuevas (Por Evaluar)

| # | Task | Severity | Notes |
|---|------|----------|-------|
| 1 | Audio player connection | 🔴 Alta | Conectar UI del player al audioStore |
| 2 | Audio player tapa footer | 🔴 Alta | z-index o margin-bottom para evitar solapamiento |
| 3 | Shop filters | 🟡 Media | Category pills + URL params |
| 4 | Measurement form | 🟡 Media | Para fardas (requiresMeasurement) |
| 5 | Coordinates column 3 subtitle | 🟢 Baja | Inconsistencia: columna 3 tiene subtitle pero otras no |

---

## Bugs Reportados

| # | Bug | Severity | Notes |
|---|-----|----------|-------|
| 1 | Manifesto text mixed ES/EN | 🟢 Baja | Texto inconsistente |
| 2 | Hymn counts incorrect | 🟢 Baja | Cadernos dicen 40, hay 10 |

---

## Ideas / Features Futuros

| # | Idea | Priority |
|---|------|----------|
| 1 | Foundation expand | Contenido completo de Wilson |
| 2 | Archive external resources | YouTube, redes, docs externos |
| 3 | Star icon David (6 puntas) | 🟢 Baja | Lucide no tiene, investigar alternativas |

---

## Descartados / Resueltos (No borrar - historial)

| # | Task | Resolved | Date |
|---|------|----------|------|
| 1 | VideoHero ghosting | ✅ Grid stacking CSS | 2026-04-23 |
| 2 | Navbar logo + CEPSERIS | ✅ Logo image + brand name | 2026-04-23 |
| 3 | Mobile menu JS | ✅ transition:persist | 2026-04-23 |
| 4 | VideoHero audio toggle | ✅ Glassmorphism + is-active class | 2026-04-23 |
| 5 | Audio toggle scaling | ✅ 1.85rem, asymmetric 0.8/1.05/1.3 | 2026-04-23 |
| 6 | Footer address + redes | ✅ Rio Branco, FB/IG/Google | 2026-04-23 |
| 7 | Task files consolidation | ✅ STATUS.md + INBOX.md + ARCHIVE.md | 2026-04-23 |
| 8 | Brand name CEPSERIS | ✅ Static text in navbar | 2026-04-23 |
| 9 | SEO Implementation | ✅ ReligiousOrganization + BaseSeo + MetaSocial + sitemap + robots | 2026-04-23 |
| 10 | robots.txt fix | ✅ Removed Disallow: /_astro/ | 2026-04-23 |
| 11 | Schema @id linking | ✅ Added @id for cross-schema reference | 2026-04-23 |
| 12 | MetaSocial no Twitter | ✅ Removed Twitter tags (CEPSERIS no usa) | 2026-04-23 |
| 13 | Schema validator error | ✅ Removed ReligiousOrganization, .slice URL cleaning | 2026-04-23 |
| 14 | **Home Coordinates (2026-04-24)** | ✅ | 4 columns: Mandato/Fundação/Localização/Método de Cura |
| 15 | **Home Manifesto (2026-04-24)** | ✅ | New CEPSERIS founding story text |
| 16 | **Mandato icons** | ✅ | Flame + Star + Sun → solo Star (⭐) |
| 17 | **Cura icons** | ✅ | 4 options → solo Flower2 (🌺) |
| 18 | **AC → Acre** | ✅ | Column 3 location subtitle fix |
| 19 | **pt.json cleanup** | ✅ | Removed unused `community` y `languages` keys |
| 20 | **Vercel deploy (2026-04-24)** | ✅ | Preview + Production (cepseris.org) |

---

## Home Coordinates - Decisions Log

| Date | Decision | Notes |
|------|----------|-------|
| 2026-04-24 | Mandato: solo Star (⭐) | User chose star only over Flame+Star+Sun |
| 2026-04-24 | Fundação da Sede | Label for column 2 (1997) |
| 2026-04-24 | Localização | Label for column 3 (Rio Branco, Acre, Brasil) |
| 2026-04-24 | Método de Cura | Label for column 4 (Linha de Arrochim) |
| 2026-04-24 | Cura icon: Flower2 (🌺) | User chose flower over Leaf/Bird/Feather |
| 2026-04-24 | Church icon for Fundação | Replaced Home with Church (⛪) |
| 2026-04-24 | AC → Acre | Column 3 subtitle updated |
| 2026-04-24 | **NOTE: Inconsistency** | Column 3 has subtitle "Acre, Brasil" but others don't. Future review needed. |

---

## pt.json - Keys Borradas (para historial)

Las siguientes keys fueron eliminadas de `coordinates` en `pt.json`:

```json
// ELIMINADAS (2026-04-24):
// "community": "Comunidade Global"  // ← No se usaba
// "languages": "Idiomas"            // ← No se usaba
```

**Razón:** Después de reorganizar las coordenadas, estas keys quedaron sin uso.

---

## Notes

- Audio player: play/pause → store, progress bar, current hymn info
- Measurement form: Pecho, Cintura, Largo (cm) para fardas
- Shop filters: ?category=textil style URL params
- Contact info privado en: `redes-sociais-cepseris.md`
- Star icon (6 puntas / Estrella de David): Lucide no tiene. Investigar si se necesita custom SVG.

---

## Documentation Reference

- `links-wilson-pronto-socorro.md` - 50 enlaces organizados
- `Padrinho Wilson Carneiro...md` - Ensayo 306 líneas
- `reference/palafit-hero-astro.md` - Video hero pattern
- `redes-sociais-cepseris.md` - Contacto y redes (privado)
- `openspec/changes/archive/2026-04-23-cepseris-seo-implementation/` - SDD archive
- Video: "Histórias de Papai" - https://youtube.com/embed/CYlTJPG2vK0
- `openspec/changes/foundation-content-refresh/` - SDD para refresh de contenido
- `openspec/changes/archive/foundation-content-pt/` - Contenido anterior archivado