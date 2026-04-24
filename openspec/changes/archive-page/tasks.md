# Tasks: archive-page

## Deprecation Note

- **Mantener** `/pt/arquivo/index.astro` existente como placeholder inactivo
- **No eliminar** - el archivo existe pero no se usará para la nueva implementación

---

## Implementation Tasks

### Phase 1: Setup + Data

- [ ] 1.1 Crear `src/data/archive-videos.ts` con 18 videos (✅ Ya creado)
- [ ] 1.2 Crear translations `src/i18n/content/archive/pt.json`
- [ ] 1.3 Crear translations `src/i18n/content/archive/es.json` (placeholder)
- [ ] 1.4 Crear translations `src/i18n/content/archive/en.json` (placeholder)

### Phase 2: Components

- [ ] 2.1 Crear `src/components/archive/Timeline.astro`
- [ ] 2.2 Crear `src/components/archive/DimensionTabs.astro`
- [ ] 2.3 Crear `src/components/archive/VideoCard.astro`
- [ ] 2.4 Crear `src/components/archive/GalleryPlaceholder.astro`

### Phase 3: Page Implementation

- [ ] 3.1 Crear `src/pages/[lang]/archive/index.astro` (nueva página)
- [ ] 3.2 Implementar Timeline con 6 nodos
- [ ] 3.3 Implementar DimensionTabs con 4 tabs
- [ ] 3.4 Implementar VideoGrid con 18 videos
- [ ] 3.5 Implementar GalleryPlaceholder

### Phase 4: Styling

- [ ] 4.1 Aplicar design system tokens
- [ ] 4.2 Responsive breakpoints
- [ ] 4.3 Hover animations

### Phase 5: Content + Unificación

- [ ] 5.1 Unificar `links-wilson-pronto-socorro.md` → `cepsesis-pronto-socorro-links.md.md`
- [ ] 5.2 Agregar canal YouTube @pd.raimundononato3780
- [ ] 5.3 Agregar 18 videos a la lista de enlaces

### Phase 6: Build + Deploy

- [ ] 6.1 Build local - verificar 107+ páginas
- [ ] 6.2 Commit + push develop
- [ ] 6.3 Deploy preview Vercel

---

## Dependencies

- Design System V2 tokens
- Lucide React icons
- Tailwind CSS v4

## Estimated Time

- Phase 1-3: 3-4 horas
- Phase 4-5: 1 hora
- Phase 6: 30 min
- **Total: 4-5 horas**

---

## Files to Create/Modify

### New Files
```
src/data/archive-videos.ts           ✅ Created
src/components/archive/Timeline.astro
src/components/archive/DimensionTabs.astro
src/components/archive/VideoCard.astro
src/components/archive/GalleryPlaceholder.astro
src/pages/[lang]/archive/index.astro
src/i18n/content/archive/content-pt.json
src/i18n/content/archive/content-es.json
src/i18n/content/archive/content-en.json
openspec/changes/archive-page/tasks.md   ✅ Created
```

### Existing Files (Keep as-is)
```
src/pages/pt/arquivo/index.astro         ← Mantener, no usar
src/pages/es/archivo/index.astro         ← Mantener, no usar
src/pages/[lang]/archive.astro           ← Mantener, no usar
```