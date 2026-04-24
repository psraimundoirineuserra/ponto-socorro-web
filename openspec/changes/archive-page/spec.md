# Spec: archive-page

## Overview

Página de archivo `/pt/arquivo` que preserva y presenta la historia del CEPSERIS con Timeline interactivo, 4 Dimensiones organizadas y Video Grid.

## Structure

```
/pt/arquivo
├── Header: "Arquivo" + "Preservação e Memória"
├── Timeline: "O Fio da Memória" (6 nodos)
├── Dimensões: 4 tabs (I, II, III, IV)
└── Videos: Grid de 18 videos con thumbnails
```

## Components

### Timeline Component
- Línea vertical con nodos 2007-2025
- Scroll-triggered expand/collapse
- 6 nodos: 2007, 2011, 2012, 2016, 2022, 2023-2025

### DimensionTabs Component
- 4 tabs: I (Académico), II (Memória Viva), III (Olhar da Floresta), IV (Bitácora Digital)
- Contenido: Grid de VideoCards
- Filtro por dimensión

### VideoCard Component
```tsx
interface Props {
  video: ArchiveVideo;
  showThumbnail: boolean; // true = YouTube thumbnail
}
```
- Thumbnail de YouTube (URL: `img.youtube.com/vi/{id}/maxresdefault.jpg`)
- Título (serif, text-primary)
- Metadata: views + year
- Duration badge
- Link a YouTube (opens in new tab)
- Hover: scale 1.02 + shadow

### GalleryPlaceholder Component
- Placeholder para galería de fotos (POSTPONED)
- Mensaje: "Galería de fotos en desarrollo"

## Data Model

### ArchiveVideo (ya definido en data/archive-videos.ts)
- 18 videos del canal @pd.raimundononato3780
- Dimensiones: II (hinarios), III (memoria/homenagens)
- Featured: 5 videos destacados

### Timeline Nodes
| Year | Title | Featured Videos |
|------|-------|-----------------|
| 2007 | Fundação e Relato | - |
| 2011 | Expansão Doutrinal | - |
| 2012 | Ano Acadêmico | - |
| 2016 | Crescimento Digital | - |
| 2022 | Consolidação Territorial | - |
| 2023-2025 | Presente/Evolução | 5 videos destacados |

## Layout

### Desktop (>768px)
- Timeline: columna izquierda, sticky
- Content: columna derecha
- Videos: 3 columnas grid

### Mobile (<768px)
- Timeline: full width, colapsado
- Videos: 1 columna
- Tabs: scroll horizontal

## Content (PT only)

```json
{
  "archive": {
    "title": "Arquivo",
    "subtitle": "Preservação e Memória",
    "timeline": {
      "title": "O Fio da Memória"
    },
    "dimensions": {
      "I": "O Trono do Saber",
      "II": "A Memória Viva",
      "III": "O Olhar da Floresta",
      "IV": "A Bitácora Digital"
    },
    "videos": {
      "title": "Videos",
      "views": "visualizações",
      "watchOn": "Ver no YouTube"
    },
    "gallery": {
      "title": "A Arca das Imagens",
      "placeholder": "Galeria de fotos em desenvolvimento"
    }
  }
}
```

## Technical Approach

- **Framework**: Astro (static, SSG)
- **Styling**: Tailwind CSS v4
- **Components**: Astro + React (para interactividad)
- **Icons**: Lucide React
- **Data**: Static TS files (archive-videos.ts)

## State Management

- No client-side state needed (static page)
- URL params not used (single page)

## Performance

- Lazy load thumbnails con `loading="lazy"`
- Image optimization via YouTube CDN
- Build time: ~2s

## Dependencies

- `lucide-react`: Iconos (Play, Eye, Calendar)
- YouTube thumbnails via CDN (no API key needed)

## Edge Cases

- Thumbnail no carga: fallback a placeholder SVG
- Video sin ID: no renderizar
- Views > 1000: format como "1.3K"

## Accessibility

- Alt text en thumbnails: título del video
- Links con `target="_blank"` y `rel="noopener noreferrer"`
- Focus visible en cards

## Postponed

- Galería de fotos FB/IG (pendiente definición del usuario)
- Implementación Payload CMS (futuro)