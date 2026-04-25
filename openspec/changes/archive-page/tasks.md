# Tasks: archive-page (Update - Fix Filtro + Completar 28 Videos)

## Status: IN PROGRESS

---

## New Tasks (v2)

### Phase Fix: Filtro JS

- [ ] 1.1 Fix filtro en `src/pages/pt/arquivo/index.astro` - cambiar `card as HTMLElement` a `card.style.display`
- [ ] 1.2 Verificar que el script cargue correctamente
- [ ] 1.3 Test clicks en tabs "Canal" y "Outras Fontes"

### Phase Data: Completar 28 Videos

#### 2.1 Agregar 5 videos faltantes del canal (Memória/Homenagens)

- [ ] 2.1.1 Agregar `lembranca-ceu-parana` (Na4Rhm2wl-8, 663 views, 1:17)
- [ ] 2.1.2 Agregar `limpando-maracuja` (I8dpdJGzODI, 217 views, 2:17)
- [ ] 2.1.3 Agregar `centenario-vo-wilson` (swsy42l9Yg4, 3500 views, 11:04, featured)
- [ ] 2.1.4 Agregar `homenagem-wilson-carneiro` (SMo8SX02erE, 799 views, 2:27)
- [ ] 2.1.5 Agregar `homenagem-wilson-centenario` (wXo3InKr_DI, 848 views, 3:10)

#### 2.2 Actualizar 10 videos externos con datos reales

- [ ] 2.2.1 `historias-de-papai` → views: 5.621, year: "hace 5 años"
- [ ] 2.2.2 `hinario-aconteceu-nonato` → views: 3.169, year: "hace 10 años"
- [ ] 2.2.3 `live-centenario-wilson` → views: 3.055, year: "hace 5 años"
- [ ] 2.2.4 `cura-linha-arrochim` → views: 1.566, year: "hace 2 años"
- [ ] 2.2.5 `pronto-socorro-acre-2012` → views: 688, year: "2012"
- [ ] 2.2.6 `hinario-chave-ouro` → views: 299, year: "hace 9 meses"
- [ ] 2.2.7 `hinario-peregrino-nonato` → views: 202, year: "hace 2 años"
- [ ] 2.2.8 `pronto-socorro-reportaje` → views: 139, year: "hace 1 año"
- [ ] 2.2.9 `hinos-novos-presidente` → views: 124, year: "hace 10 meses"
- [ ] 2.2.10 `centro-pronto-socorro-ris` → views: 0 (mantener "-"), year: "-"

### Phase UI: Thumbnail Fallback

- [ ] 3.1 Cambiar `getVideoThumbnailUrl` de `maxresdefault` a `hqdefault`
- [ ] 3.2 Mantener fallback SVG para thumbnails unavailable

### Phase Build

- [ ] 4.1 `npm run build` - verificar 107+ páginas
- [ ] 4.2 Commit + push (pendiente cuando usuario se reconecte)
- [ ] 4.3 Deploy preview Vercel

---

## Old Tasks (completados)

- [x] 1.1 Crear `src/data/archive-videos.ts` con 18 videos
- [x] 1.2 Crear translations
- [x] 2.1 Crear Timeline component
- [x] 2.2 Crear DimensionTabs component
- [x] 2.3 Crear VideoCard component
- [x] 2.4 Crear GalleryPlaceholder component
- [x] 3.1 Crear `/pt/arquivo/index.astro`
- [x] 4.1 Aplicar design system tokens
- [x] 5.1 Unificar links.md
- [x] 5.3 Agregar canal YouTube
- [x] 6.1 Build local exitoso

---

## Dependencies

- Design System V2 tokens
- Tailwind CSS v4
- Astro static build

## Files to Modify

```
src/data/archive-videos.ts    → Agregar 5 + actualizar 10
src/pages/pt/arquivo/index.astro  → Fix filtro JS
```

## Estimated Time

- Fase Fix: 15 min
- Fase Data: 30 min
- Fase Build: 10 min
- **Total: ~55 min**