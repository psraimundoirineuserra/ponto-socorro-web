# Design: archive-page (Update - Fix Filtro + Completar 28 Videos)

## Context

El cambio ya existe (`openspec/changes/archive-page/`). Este documento es una **actualización** que incluye:
1. Fix del filtro de tabs que no funciona
2. Completar 5 videos faltantes de Memória/Homenagens
3. Actualizar datos de 10 videos externos con información real

---

## Technical Approach

### Fix Filtro JavaScript

**Problema**: El script en `index.astro` usa TypeScript casts `card as HTMLElement` que pueden causar errores en Astro.

**Solución**: Simplificar el script para evitar TypeScript y usar vanilla JS puro:

```javascript
// ANTES (problemático):
cards.forEach(card => {
  const source = card.getAttribute('data-source');
  (card as HTMLElement).style.display = '';
});

// DESPUÉS (simple):
cards.forEach(card => {
  const source = card.getAttribute('data-source');
  card.style.display = '';
});
```

El atributo `style` existe en todos los elementos HTML nativamente - no necesita cast.

---

## Architecture Decisions

### Decision: Mantener filter logic en el template

**Choice**: El filtro se ejecuta en el cliente con JS vanilla inline
**Alternatives considered**: Componente Astro separado, módulo TS importado
**Rationale**: Simplicidad - el filtro es una interacción simple que no requiere estado global ni framework

### Decision: Thumbnails con fallback chain

**Choice**: Usar `hqdefault` como default, `maxresdefault` como fallback, SVG placeholder último
**Alternatives considered**: Solo `maxresdefault`, solo `hqdefault`
**Rationale**: `hqdefault` tiene mayor disponibilidad para videos externos; `maxresdefault` no siempre existe para todos los videos

---

## Data Flow

```
archive-videos.ts (data)
    │
    ├── canalVideos (18) ← Filter source === 'canal'
    │
    ├── outroVideos (10) ← Filter source === 'outro'
    │
    └── archiveVideos (28) ← Todos

index.astro (render)
    │
    ├── Tabs: [Todos (28)] [Canal (18)] [Outras (10)]
    │
    └── VideoGrid → cards con data-source attribute
```

---

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `src/data/archive-videos.ts` | Modify | Agregar 5 videosMemória + actualizar 10 externos con datos reales |
| `src/pages/pt/arquivo/index.astro` | Modify | Fix filtro JS, cambiar thumbnails a hqdefault |

---

## Videos to Add/Update

### Agregar (5 videos Memória/Homenagens del canal):

```typescript
// Después de video id 'amor-no-coracao'
{ id: 'lembranca-ceu-parana', youtubeId: 'Na4Rhm2wl-8', title: 'Lembrança Céu do Paraná', views: 663, year: 'hace 4 años', duration: '1:17', dimension: 'II', featured: false, category: 'memoria', source: 'canal' },
{ id: 'limpando-maracuja', youtubeId: 'I8dpdJGzODI', title: 'limpando maracujá e maxixe peruano!', views: 217, year: 'hace 4 años', duration: '2:17', dimension: 'II', featured: false, category: 'memoria', source: 'canal' },
{ id: 'centenario-vo-wilson', youtubeId: 'swsy42l9Yg4', title: 'Comemoração Centenário Vô Wilson', views: 3500, year: 'hace 5 años', duration: '11:04', dimension: 'II', featured: true, category: 'homenagem', source: 'canal' },
{ id: 'homenagem-wilson-carneiro', youtubeId: 'SMo8SX02erE', title: 'Homenagem ao Padrinho Wilson Carneiro', views: 799, year: 'hace 5 años', duration: '2:27', dimension: 'II', featured: false, category: 'homenagem', source: 'canal' },
{ id: 'homenagem-wilson-centenario', youtubeId: 'wXo3InKr_DI', title: 'Homenagem Padrinho Wilson Centenário', views: 848, year: 'hace 5 años', duration: '3:10', dimension: 'II', featured: false, category: 'homenagem', source: 'canal' },
```

### Actualizar (10 videos externos con datos reales):

| ID | Title | Views | Year | Duration |
|----|-------|-------|------|----------|
| histories-de-papai | Histórias de Papai | 5.621 | hace 5 años | ~ |
| live-centenario-wilson | Live Centenário | 3.055 | hace 5 años | ~ |
| cura-linha-arrochim | Cura – Linha de Arrochim | 1.566 | hace 2 años | ~ |
| hinario-chave-ouro | Hinário Chave de Ouro | 299 | hace 9 meses | ~ |
| pronto-socorro-reportaje | Pronto-Socorro Raimundo Irineu Serra | 139 | hace 1 año | ~ |
| hinario-peregrino-nonato | Hinário O Peregrino | 202 | hace 2 años | ~ |
| hinario-aconteceu-nonato | ACONTECEU - Hinário | 3.169 | hace 10 años | ~ |
| centro-pronto-socorro-ris | Centro e Pronto Socorro R.I.S. | - | - | ~ |
| pronto-socorro-acre-2012 | PRONTO SOCORRO ACRE 2012 | 688 | 2012 | ~ |
| hinos-novos-presidente | Hinos Novos com nosso Presidente | 124 | hace 10 meses | ~ |

**Nota**: "~" significa que no se proporcionó duration. Mantener "?" o buscar después.

---

## Open Questions

- [x] ¿Usar YouTube API o datos manuales? → Datos manuales proporcionados por usuario
- [x] ¿Agregar badges para videos externos? → No, usuario dijo que no le interesa
- [x] ¿El video "QUE FORÇA É ESTHA" es nuevo? → No, es `vP57ECXK6mc` que ya estaba

---

## Next Step

Ejecutar sdd-tasks para actualizar la lista de tareas, luego sdd-apply para implementar los cambios.