# Proposal: archive-page

## Intent

Crear la página `/pt/arquivo` para preservar y展示 la historia del CEPSERIS. Combinar documentos académicos, crónicas, contenido audiovisual y presencia en redes sociales en una experiencia inmersiva tipo "galería viva".

## Scope

### In Scope
- Timeline interactivo "O Fio da Memória" (scroll-triggered)
- 4 Dimensiones organizadas (Académica, Crónicas, Audiovisual, Social)
- Galería de fotos (Masonry grid)
- Bitácora Digital: Videos YouTube con thumbnails reales + metadata
- Unificación de archivos de enlaces existentes
- Integración de canal YouTube @pd.raimundononato3780

### Out of Scope
- Backend Payload CMS (usar Astro estático)
- Traducciones ES/EN (PT only por ahora)
- Sistema de comentarios o interacciones de usuario
- Reproducción de audio en página

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/pages/pt/arquivo/index.astro` | New | Página principal del archivo |
| `src/components/archive/` | New | Components: Timeline, DimensionTabs, Gallery, VideoCard |
| `src/i18n/content/pt/arquivo/` | New | Traducciones PT |
| `src/data/archive-links.ts` | New | Data unificada de enlaces |
| `src/data/archive-videos.ts` | New | Data de videos YouTube (18 videos) |
| `src/styles/archive.css` | New | Estilos específicos del archivo |
| `cepsesis-pronto-socorro-links.md.md` | Modified | Unificado con links de links-wilson-pronto-socorro.md |

## Approach

### Fase 1: Timeline + 4 Dimensiones
1. Crear componente Timeline con nodos 2007-2025
2. Crear tabs para las 4 dimensiones
3. Implementar grid de items por dimensión
4. Incluir items P1 prioritarios primero

### Fase 2: Galería de Fotos
1. Configurar Masonry grid (POSTPONED - user will define later)
2. Placeholder para future integration
3. Component listo pero sin datos reales

### Fase 3: Bitácora Digital (Videos)
1. Integrar 18 videos del canal @pd.raimundononato3780
2. Cada video: thumbnail YouTube + título + visualizaciones + año
3. Grid responsive de video cards
4. Links externos a YouTube

### Fase 4: Unificación de Enlaces
1. Fusionar `links-wilson-pronto-socorro.md` en `cepsesis-pronto-socorro-links.md.md`
2. Agregar canal YouTube y nuevos videos proporcionados

## Data Structure

### Videos (18 items)
```typescript
interface ArchiveVideo {
  id: string;
  youtubeId: string;          // e.g., "CYlTJPG2vK0"
  title: string;               // e.g., "Hino do padrinho Wilson"
  views: number;               // e.g., 1023
  year: string;                // e.g., "hace 4 años"
  duration: string;           // e.g., "2:42"
  dimension: 'I' | 'II' | 'III' | 'IV';  // Clasificación
  featured: boolean;          // Destacado en timeline
}
```

### Timeline Nodes
```typescript
interface TimelineNode {
  year: number;
  title: string;
  description: string;
  featuredItems: string[];    // IDs de items destacados
  dimension: 'I' | 'II' | 'III' | 'IV';
}
```

## Design Language

- **Estética**: Ingeniería Boutique - minimalismo sagrado
- **Tipografía**: Serif (títulos/datos importantes) + Sans-serif (UI)
- **Iconos**: Lucide React
- **Glassmorphism**: Tarjetas con transparencias sutiles
- **Animaciones**: Framer Motion o CSS transitions suaves

## Video Thumbnails

Los thumbnails se obtienen de YouTube via URL:
```
https://img.youtube.com/vi/{youtubeId}/maxresdefault.jpg
```

Fallback: placeholder si no carga.

## Dependencies

- YouTube Data API o scraping para thumbnails
- Acceso a álbum de fotos FB/IG (requires tokens o scraping)
- Datos unificados de `cepsesis-pronto-socorro-links.md.md`

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Fotos FB/IG requieren tokens/auth | Medium | Usar screenshots estáticos o embeds |
| Videos YouTube sin thumbnails públicos | Low | Placeholder con logo |
| Contenido muy extenso (35+ items) | Low | Lazy loading + pagination |

## Success Criteria

- [x] Timeline funcional con 6 nodos (2007-2025)
- [x] 4 dimensiones navegables con tabs
- [x] Grid de videos con thumbnails de YouTube (los 18 videos)
- [x] Galería de fotos - placeholder listo (implementación posterior)
- [x] Archive links unificados en un solo archivo .md (~67 enlaces)
- [x] Build successful (107+ páginas)
- [ ] Deploy preview en Vercel (pendiente push)

## Timeline del Proyecto

| Fase | Descripción | Estimado |
|------|-------------|----------|
| 1 | Timeline + 4 Dimensiones | 2-3 horas |
| 2 | Galería de Fotos | 1-2 horas |
| 3 | Bitácora Digital (Videos) | 1-2 horas |
| 4 | Unificación de enlaces | 30 min |
| 5 | Testing + Deploy | 30 min |

**Total estimado**: 5-7 horas

## Notes

El usuario proporcionó 18 videos específicos del canal @pd.raimundononato3780 con títulos, visualizaciones y duraciones. Incluir todos con thumbnails reales de YouTube.

Videos proporcionados:
1. "O Mestre nós ensina - Hinário O Peregrino" - 276 views
2. "Caboclo Guerreiro - Hinário O Peregrino" - 572 views
3. "Sino bateu" - 898 views
4. "É meio dia" - 451 views
5. "Bandeira limpa" - 523 views
6. "Lembrança Céu do Paraná" - 663 views
7. "limpando maracujá e maxixe peruano!" - 217 views
8. "Hino do padrinho Wilson" - 1K views
9. "42- Meu Juramidam" - 1.3K views
10. "43- Prenda Divina" - 1.2K views
11. "Enxotando os maus fazejos" - 7K views
12. "Os Pastorinhos" - 1.4K views
13. "Comemoração Centenário Vô Wilson" - 3.5K views
14. "Homenagem ao Padrinho Wilson Carneiro" - 799 views
15. "Homenagem Padrinho Wilson Centenário" - 848 views
16. "Deus é meu pai" - 2.3K views
17. "38. Amor no Coração (Aconteceu)" - 571 views
18. "Academia do Mestre Irineu - Obedece ao mestre" - 276 views