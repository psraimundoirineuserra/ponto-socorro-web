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

### ArchiveVideo (actualizado - 28 videos)
- **28 videos totales**: 18 del canal + 10 de otras fuentes
- **Source filter**: 'canal' (18 videos) | 'outro' (10 videos)
- **Sin dimensión** - solo filter por source
- **Featured**: 5 videos destacados (todos del canal)

### Source Filter Tabs
| Tab | Count | Videos |
|-----|-------|--------|
| Todos | 28 | Todos |
| Canal | 18 | Videos del canal @pd.raimundononato3780 |
| Outras Fontes | 10 | Videos de otras fuentes (Jagube, etc.) |

### Video Data (28 items)

**Canal (18 videos):**
1-13: Hinário O Peregrino/Aconteceu (hinario)
14-18: Memória/Homenagens

**Outras Fontes (10 videos):**
19-28: Videos externos con datos reales proporcionados por usuario

| ID | Title | Views | Year |
|----|-------|-------|------|
| histories-de-papai | Histórias de Papai (PD Wilson Carneiro) | 5.621 | hace 5 años |
| hinario-aconteceu-nonato | ACONTECEU - Hinário do Padrinho Nonato | 3.169 | hace 10 años |
| live-centenario-wilson | Live Centenário do Padrinho Wilson Carneiro | 3.055 | hace 5 años |
| cura-linha-arrochim | Cura – Linha de Arrochim | 1.566 | hace 2 años |
| pronto-socorro-acre-2012 | PRONTO SOCORRO - ACRE em 18 de julho de 2012 | 688 | 2012 |
| hinario-chave-ouro | Hinário Chave de Ouro, Pad. Wilson Carneiro | 299 | hace 9 meses |
| hinario-peregrino-nonato | Hinário O Peregrino do Padrinho Nonato | 202 | hace 2 años |
| pronto-socorro-reportaje | Pronto-Socorro Raimundo Irineu Serra | 139 | hace 1 año |
| hinos-novos-presidente | Hinos Novos com nosso Presidente | 124 | hace 10 meses |
| centro-pronto-socorro-ris | Centro e Pronto Socorro de Cura Espiritual R.I.S. | - | - |

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