# Proposal: i18n-fix

## Intent

Arreglar el sistema de idiomas para que PT sea el idioma default y los cambios de idioma preserven la ruta actual del usuario.

## Scope

### In Scope
- Cambiar `defaultLocale` de `'es'` a `'pt'`
- Modificar `changeLanguage()` para preservar rutas
- Verificar que Layout passe `locale` correctamente a componentes
- Asegurar que todas las páginas rendericen en PT por defecto

### Out of Scope
- Traducción de contenido (el usuario creará los MDs)
- Cambios en la estructura de archivos de traducciones

## Approach

1. Modificar `src/i18n/index.ts`:
   - Cambiar `defaultLocale: 'pt'`
   - Actualizar `changeLanguage(locale)` para aceptar URL actual y retornar `/{locale}/ruta-actual`

2. El Layout ya tiene `locale` como prop y lo passa al Navbar/Footer

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/i18n/index.ts` | Modified | defaultLocale + changeLanguage() |
| `src/layouts/Layout.astro` | No change | Ya soporta locale prop |
| `src/components/layout/Navbar.astro` | No change | Ya recibe locale |
| `src/components/layout/Footer.astro` | No change | Ya recibe locale |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Contenido existente en ES hardcoded | Medium | Buscar y reemplazar 'es' hardcoded en componentes |

## Rollback Plan

```bash
git checkout -- src/i18n/index.ts
# Revierte a defaultLocale: 'es'
```

## Dependencies

- Ninguno

## Success Criteria

- [ ] http://localhost:4321 muestra contenido en PT
- [ ] http://localhost:4321/es muestra contenido en ES
- [ ] http://localhost:4321/en muestra contenido en EN
- [ ] Cambiar de /foundation a /es/foundation funciona correctamente
- [ ] Navbar muestra "PT" como activo al cargar página sin idioma en URL