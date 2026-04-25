# Tasks: archive-page (Update - Fix Filtro + Completar 28 Videos)

## Status: IN PROGRESS

---

## New Tasks (v2)

### Phase Fix: Filtro JS ❌ PENDIENTE - NO FUNCIONA

- [ ] 1.1 Fix filtro en `src/pages/pt/arquivo/index.astro` - **NO FUNCIONA ACTUALMENTE**
- [ ] 1.2 Verificar que el script cargue correctamente
- [ ] 1.3 Test clicks en tabs "Canal" y "Outras Fontes"
- [ ] 1.4 Debug: ¿Por qué el click handler no oculta los cards?

### Phase Data: Completar 28 Videos ✅ COMPLETADO

- [x] 2.1.1 Agregar `lembranca-ceu-parana` (Na4Rhm2wl-8, 663 views, 1:17)
- [x] 2.1.2 Agregar `limpando-maracuja` (I8dpdJGzODI, 217 views, 2:17)
- [x] 2.1.3 Agregar `centenario-vo-wilson` (swsy42l9Yg4, 3500 views, 11:04, featured)
- [x] 2.1.4 Agregar `homenagem-wilson-carneiro` (SMo8SX02erE, 799 views, 2:27)
- [x] 2.1.5 Agregar `homenagem-wilson-centenario` (wXo3InKr_DI, 848 views, 3:10)

- [x] 2.2.1 `historias-de-papai` → views: 5621, year: "hace 5 años"
- [x] 2.2.2 `hinario-aconteceu-nonato` → views: 3169, year: "hace 10 años"
- [x] 2.2.3 `live-centenario-wilson` → views: 3055, year: "hace 5 años"
- [x] 2.2.4 `cura-linha-arrochim` → views: 1566, year: "hace 2 años"
- [x] 2.2.5 `pronto-socorro-acre-2012` → views: 688, year: "2012"
- [x] 2.2.6 `hinario-chave-ouro` → views: 299, year: "hace 9 meses"
- [x] 2.2.7 `hinario-peregrino-nonato` → views: 202, year: "hace 2 años"
- [x] 2.2.8 `pronto-socorro-reportaje` → views: 139, year: "hace 1 año"
- [x] 2.2.9 `hinos-novos-presidente` → views: 124, year: "hace 10 meses"
- [x] 2.2.10 `centro-pronto-socorro-ris` → views: 0 (mantener "-"), year: "-"

### Phase UI: Thumbnail Fallback ✅ COMPLETADO

- [x] 3.1 Cambiar `getVideoThumbnailUrl` de `maxresdefault` a `hqdefault`
- [x] 3.2 Mantener fallback SVG para thumbnails unavailable

### Phase Build ✅ COMPLETADO

- [x] 4.1 `npm run build` - verificar 107+ páginas
- [x] 4.2 Commit listo para push
- [ ] 4.3 Deploy preview Vercel (pendiente git push)

---

## Video Adicional Pendiente

**QUE FORÇA É ESTA - LUCIANO SANCHES**
- YouTube ID: vP57ECXK6mc
- Views: 365, Year: hace 7 meses
- **Problema:** ID ya usado en `centro-pronto-socorro-ris`
- **Acción requerida:** Usuario debe confirmar ID correcto o descartar

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
src/data/archive-videos.ts    ✅ Actualizado (28 videos)
src/pages/pt/arquivo/index.astro  ❌ Filtro NO funciona - necesita fix
```

## Estimated Time

- Fase Fix: 30 min (debugging)
- Fase Build: 10 min
- **Total pendientes: ~40 min**