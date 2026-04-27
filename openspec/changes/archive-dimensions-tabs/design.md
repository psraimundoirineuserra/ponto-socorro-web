# Design: archive-dimensions-tabs (RENOMEAR)

## Decision 1: Number of Dimensions

**Problem**: 4 dims不够 para organizar todo el contenido.

**Solution**: Expandir a 5 dims, añadiendo "Fotografia".

## Decision 2: Dimension Names

| Old Name (PT) | New Name (PT) | Rationale |
|---------------|---------------|-----------|
| O Trono do Saber | Acadêmico | Más claro,直接 |
| A Memória Viva | Visual | Videos/imágenes |
| Olhar da Floresta | Crônicas | Textos narrativos |
| A Bitácora Digital | Redes sociais | Más claro |
| — | Fotografia | Nuevo, encontronocc |

## Decision 3: Dimension V Content

**Placeholder**: "Em desenvolvimento" o items de Encontronocc.

---

## Architecture

```
dimensions: Dimension[] = [
  { id: 'I', name: 'Acadêmico', ... },
  { id: 'II', name: 'Visual', ... },
  { id: 'III', name: 'Crônicas', ... },
  { id: 'IV', name: 'Redes sociais', ... },
  { id: 'V', name: 'Fotografia', items: [...] }
]
```

## Files Modified

| File | Change |
|------|--------|
| `src/data/archive-dimensions.ts` | Renomear dims + adicionar V |
| `src/pages/pt/arquivo/index.astro` | 5 tabs |
