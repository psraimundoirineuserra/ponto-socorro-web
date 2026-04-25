# INBOX.md - Tareas Pendientes y Nuevas Ideas

**Project**: CEPSERIS
**Created**: 2026-04-23
**Updated**: 2026-04-24

---

## Tareas Nuevas (Por Evaluar)

| # | Task | Severity | Notes |
|---|------|----------|-------|
| 1 | **Archive filter JS NOT working** | 🔴 Alta | Click en tabs no filtra videos |
| 2 | Audio player connection | 🔴 Alta | Conectar UI del player al audioStore |
| 3 | Audio player tapa footer | 🔴 Alta | z-index o margin-bottom para evitar solapamiento |
| 4 | Shop filters | 🟡 Media | Category pills + URL params |
| 5 | Measurement form | 🟡 Media | Para fardas (requiresMeasurement) |
| 6 | Video "QUE FORÇA É ESTA" | 🟡 Media | ID duplicado con centro-pronto-socorro-ris |
| 7 | Coordinates column 3 subtitle | 🟢 Baja | Inconsistencia: columna 3 tiene subtitle pero otras no |

---

## Bugs Reportados

| # | Bug | Severity | Notes |
|---|-----|----------|-------|
| 1 | **Archive filter NOT working** | 🔴 Alta | JS click handler no filtra videos |
| 2 | Manifesto text mixed ES/EN | 🟢 Baja | Texto inconsistente |
| 3 | Hymn counts incorrect | 🟢 Baja | Cadernos dicen 40, hay 10 |

---

## Archive Page Tasks (2026-04-24)

| # | Task | Status |
|---|------|--------|
| 1 | Timeline (30 events) | ✅ Done |
| 2 | 28 videos data (18 canal + 10 outro) | ✅ Done |
| 3 | Source filter tabs | ❌ **PENDING - NO FUNCIONA** |
| 4 | Tab counts correct (28/18/10) | ✅ Done |
| 5 | Thumbnail hqdefault fallback | ✅ Done |
| 6 | YouTube channel link | ✅ Done |

**Files involved:**
- `src/pages/pt/arquivo/index.astro` - Script de filtro (NO funciona)
- `src/data/archive-videos.ts` - 28 videos con datos reales

**Fix requerido:** El script JS en index.astro necesita ser re-escrito o debugging para que filtre correctamente.

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
| 21 | **Archive 28 videos data** | ✅ | 18 canal + 10 outro con datos reales |
| 22 | **Footer YouTube icon** | ✅ | @pd.raimundononato3780 |
| 23 | **redes-sociais.md YouTube** | ✅ | Added canal link |

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

## Archive Page - Decisions Log

| Date | Decision | Notes |
|------|----------|-------|
| 2026-04-24 | 28 videos totales | 18 canal + 10 outro |
| 2026-04-24 | Source filter tabs | Todos/Canal/Outras Fontes |
| 2026-04-24 | Tab counts | Todos (28), Canal (18), Outras (10) |
| 2026-04-24 | Thumbnail fallback | hqdefault + SVG placeholder |
| 2026-04-24 | **Filter NOT working** | JS click handler no filtra videos |
| 2026-04-24 | Video "QUE FORÇA É ESTA" | ID vP57ECXK6mc ya usado - necesita confirmación |

---

## Video Data (28 videos)

### Canal @pd.raimundononato3780 (18)

| # | Title | Views | Year | Duration |
|---|-------|-------|------|----------|
| 1 | Academia do Mestre Irineu | 276 | hace 2 años | 2:04 |
| 2 | O Mestre nós ensina | 511 | hace 2 años | 1:13 |
| 3 | Caboclo Guerreiro | 572 | hace 2 años | 1:34 |
| 4 | Sino bateu | 898 | hace 3 años | 1:08 |
| 5 | É meio dia | 451 | hace 3 años | 1:08 |
| 6 | Bandeira limpa | 523 | hace 3 años | 3:02 |
| 7 | Hino do padrinho Wilson | 1000 | hace 4 años | 2:42 |
| 8 | 42- Meu Juramidam | 1300 | hace 5 años | 3:23 |
| 9 | 43- Prenda Divina | 1200 | hace 5 años | 1:52 |
| 10 | Enxotando os maus fazejos | 7000 | hace 5 años | 2:58 |
| 11 | Os Pastorinhos | 1400 | hace 5 años | 2:57 |
| 12 | Deus é meu pai | 2300 | hace 5 años | 1:46 |
| 13 | 38. Amor no Coração | 571 | hace 5 años | 1:19 |
| 14 | Lembrança Céu do Paraná | 663 | hace 4 años | 1:17 |
| 15 | limpando maracujá | 217 | hace 4 años | 2:17 |
| 16 | Comemoração Centenário Vô Wilson | 3500 | hace 5 años | 11:04 |
| 17 | Homenagem ao Padrinho Wilson Carneiro | 799 | hace 5 años | 2:27 |
| 18 | Homenagem Padrinho Wilson Centenário | 848 | hace 5 años | 3:10 |

### Outras Fontes (10)

| # | Title | Views | Year |
|---|-------|-------|------|
| 19 | Histórias de Papai – PD Wilson Carneiro | 5.6K | hace 5 años |
| 20 | ACONTECEU - Hinário do Padrinho Nonato | 3.2K | hace 10 años |
| 21 | Live Centenário do Padrinho Wilson Carneiro | 3.1K | hace 5 años |
| 22 | Cura – Linha de Arrochim | 1.6K | hace 2 años |
| 23 | PRONTO SOCORRO - ACRE em 18 de julho de 2012 | 688 | 2012 |
| 24 | Hinário Chave de Ouro, Pad. Wilson Carneiro | 299 | hace 9 meses |
| 25 | Hinário O Peregrino do Padrinho Nonato | 202 | hace 2 años |
| 26 | Pronto-Socorro Raimundo Irineu Serra | 139 | hace 1 año |
| 27 | Hinos Novos com nosso Presidente | 124 | hace 10 meses |
| 28 | Centro e Pronto Socorro de Cura Espiritual R.I.S. | - | - |

### Video Pendiente

| Title | Views | Year | YouTube ID | Status |
|-------|-------|------|------------|--------|
| QUE FORÇA É ESTA - LUCIANO SANCHES | 365 | hace 7 meses | vP57ECXK6mc | **DUPLICADO** - ID ya usado en #28 |

---

## Notes

- Audio player: play/pause → store, progress bar, current hymn info
- Measurement form: Pecho, Cintura, Largo (cm) para fardas
- Shop filters: ?category=textil style URL params
- Contact info privado en: `redes-sociais-cepseris.md`
- Star icon (6 puntas / Estrella de David): Lucide no tiene. Investigar si se necesita custom SVG.
- Archive filter: Debug JS en `src/pages/pt/arquivo/index.astro` - script no filtra

---

## Documentation Reference

- `links-wilson-pronto-socorro.md` - 50 enlaces organizados
- `Padrinho Wilson Carneiro...md` - Ensayo 306 líneas
- `reference/palafit-hero-astro.md` - Video hero pattern
- `redes-sociais-cepseris.md` - Contacto y redes (privado)
- Video: "Histórias de Papai" - https://youtube.com/embed/CYlTJPG2vK0
- `openspec/changes/foundation-content-refresh/` - SDD para refresh de contenido
- `openspec/changes/archive/foundation-content-pt/` - Contenido anterior archivado
- `openspec/changes/archive-page/` - SDD para página archivo (filter pending)