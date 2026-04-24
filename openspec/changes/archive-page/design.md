# Design: archive-page

## Concept

Una galería viva de preservación histórica que combina la solemnidad de un archivo académico con la calidez espiritual de la floresta amazónica. El diseño utiliza ingeniería boutique: interfaces limpias, contenido优先级, y tecnología al servicio de la memoria.

## Design Principles

1. **Minimalismo sagrado**: Cada elemento ocupa espacio intencionalmente
2. **Jerarquía clara**: Timeline → Dimensiones → Videos
3. **Glassmorphism sutil**: Tarjetas con transparencias en hover
4. **Tipografía dual**: Serif (títulos) + Sans-serif (UI/metadata)

## Color Palette

Usar del design system existente:
- `--color-primary`: #1A1A1A (títulos, texto principal)
- `--color-secondary`: #737373 (metadata, descripciones)
- `--color-accent-nature`: #2C4C3B (acento verde, categorías)
- `--color-surface`: #F5F5F0 (fondo tarjetas)
- `--color-canvas`: #FAFAF8 (fondo página)
- `--color-subtle`: #E5E5E0 (bordes)

## Typography

| Element | Font | Size | Weight |
|---------|------|------|--------|
| Page Title | Serif | 3rem | 600 |
| Section Title | Serif | 2rem | 600 |
| Video Title | Serif | 1.125rem | 500 |
| Metadata | Sans-serif | 0.875rem | 400 |
| Tab Labels | Sans-serif | 0.75rem | 500 |

## Spacing

- Page padding: `px-6 py-24`
- Section gap: `gap-12`
- Card gap: `gap-6`
- Card padding: `p-6`

## Components

### TimelineSection
- Línea vertical `border-l border-subtle` 1px
- Nodos: círculos `w-3 h-3 bg-primary rounded-full`
- Nodo activo: escala 1.5 + glow
- Labels: uppercase, tracking-wider, text-xs

### DimensionTabs
```
┌─────┬─────┬─────┬─────┐
│  I  │ II  │ III │ IV  │
└─────┴─────┴─────┴─────┘
```
- Tabs: `px-4 py-2 border-b-2 border-transparent`
- Tab activo: `border-accent-nature text-accent-nature`
- Transición: 200ms ease

### VideoCard
```
┌─────────────────────────────┐
│  [Thumbnail 16:9]     [▶]  │
│                             │
│  Título del video           │
│  1.3K visualizaciones · 5y  │
│  3:42                       │
└─────────────────────────────┘
```
- Aspect ratio: 16:9 para thumbnail
- Play button overlay: centrado, opacity 0→1 hover
- Shadow en hover: `shadow-lg`
- Scale: `hover:scale-[1.02]`

### GalleryPlaceholder
- Background: `bg-surface`
- Icon: `Image` de Lucide
- Mensaje centrado: "Galeria de fotos em desenvolvimento"

## Animations

| Element | Animation | Duration |
|---------|-----------|----------|
| Tab switch | opacity 0→1 | 200ms |
| VideoCard hover | scale + shadow | 150ms |
| Timeline node | pulse glow | 2s infinite |

## Responsive Breakpoints

| Breakpoint | Layout |
|------------|--------|
| < 640px | 1 columna videos, tabs scroll |
| 640-1024px | 2 columnas videos |
| > 1024px | 3 columnas videos, timeline sticky |

## Shadow System

- Card default: `shadow-sm`
- Card hover: `shadow-lg`
- Timeline line: `shadow-[0_0_8px_rgba(26,26,26,0.1)]`

## Border Radius

- Cards: `rounded-lg` (0.5rem)
- Thumbnails: `rounded-t-lg`
- Badges: `rounded-full`

## Iconography (Lucide)

- `Play`: Overlay en video thumbnail
- `Eye`: Indicador de visualizaciones
- `Calendar`: Año del video
- `Clock`: Duración
- `Image`: Placeholder galería
- `ExternalLink`: Indicar link externo

## Background

- Page: `bg-canvas`
- Section: `bg-surface`
- Cards: `bg-white/50 backdrop-blur-sm`

## Interaction States

| State | Visual |
|-------|--------|
| Default | border-subtle, shadow-sm |
| Hover | border-accent-nature/30, shadow-lg, scale-[1.02] |
| Active (tab) | border-accent-nature, text-accent-nature |
| Focus | outline-2 outline-offset-2 |

## Loading States

- Thumbnails: `loading="lazy"`
- Fallback: placeholder SVG con gradiente verde

## Accessibility

- `role="tablist"` para tabs
- `aria-selected` para tab activo
- `aria-label` en enlaces externos
- Focus visible con outline