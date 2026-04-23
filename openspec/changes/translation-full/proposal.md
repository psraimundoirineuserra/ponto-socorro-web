# Proposal: translation-full

## Intent

Implementar sistema de traducción completo para toda la navegación y páginas de contenido del sitio web protosocorro. Los himnos permanecen solo en PT (contenido cultural/religioso original). La navegación y UI funcionan en PT/ES/EN.

## Scope

### In Scope
- Traducción de UI labels (navbar, footer, botones) → 3 idiomas
- Traducción de contenido de Foundation (biografía Wilson) → 3 idiomas
- Traducción de contenido de Home (Hero, Manifesto, Coordinates, HinarioPreview) → 3 idiomas
- Traducción de contenido de Archive → 3 idiomas
- Traducción de contenido de Shop (productos) → 3 idiomas
- Sistema de carga que detecta locale y carga JSON correspondiente

### Out of Scope
- Himnos (solo PT, no traducir)
- Nombres propios de himnos
- Contenido generado dinámicamente

## Approach

### API de traducción: Gemini Flash 2.0
- **Más barata**: $0.075/1M tokens (input) + $0.30/1M tokens (output)
- **Velocidad**: Rápida, buena para textos largos
- **Alternativas**: 1.5 Flash ($0.075) vs 2.0 Flash ($0.075) - mismo precio, 2.0 es mejor modelo

### Estructura de archivos
```
src/i18n/
├── es.json, en.json, pt.json     (UI labels - existen)
└── content/
    ├── foundation/content-{pt|es|en}.json
    ├── home/{component}-{pt|es|en}.json
    ├── archive/content-{pt|es|en}.json
    └── shop/products-{pt|es|en}.json
```

### Sistema de carga
- Componente `PageContent` que acepta `page` y `locale`
- Importa JSON según locale
- Fallback a PT si no existe traducción

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/i18n/*.json` | No change | UI labels ya existen |
| `src/i18n/content/` | Create | Nueva estructura para contenido |
| `src/pages/foundation.astro` | Modify | Cargar contenido desde JSON |
| `src/pages/archive.astro` | Modify | Cargar contenido desde JSON |
| `src/pages/index.astro` | Modify | Cargar componentes desde JSON |
| `src/components/` | Modify | Recibir locale y pasar a contenido |

## API Selection

**Gemini 2.0 Flash** - Recomendada por:
- Mejor calidad que 1.5
- Mismo precio ($0.075/1M input)
- Contexto 1M tokens
- Funciones native JSON output

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Traducciones inexactas de términos técnicos | Medium | Revisar manualmente después |
| Contenido muy largo = alto costo | Low | Controlar tokens |

## Rollback Plan

```bash
git checkout -- src/i18n/
# Reversión completa de cambios
```

## Success Criteria

- [ ] Navegación funciona en PT/ES/EN
- [ ] Foundation muestra contenido según locale
- [ ] Home muestra contenido según locale
- [ ] Archive muestra contenido según locale
- [ ] Shop muestra productos según locale
- [ ] Himnos permanecen solo en PT
- [ ] Fallback a PT si traducción no existe