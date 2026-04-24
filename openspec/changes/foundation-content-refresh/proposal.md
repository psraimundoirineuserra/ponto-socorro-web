# Proposal: foundation-content-refresh

## Intent

Actualizar contenido de la página `/fundacao` con texto completo (~4000 palabras) del documento `fundacao_cepseris.md` y optimizar calidad de video HD en hero. Incluye archivado del contenido anterior y ajustes de styling.

## Scope

### In Scope
- Contenido PT completo de Foundation (32 secciones)
- Negritas en keywords (personas, lugares, instituciones, fechas)
- Archivaco del contenido anterior (JSON + .md)
- Video hero: forzar calidad HD 1080p
- CSS: eliminar regla `.prose strong` (volver a estilo sutil original)

### Out of Scope
- Traducciones ES/EN
- Cambios en estructura HTML/CSS del componente
- Nuevo video source

## Approach

1. Reemplazar contenido JSON con texto completo de `fundacao_cepseris.md`
2. Aplicar negritas usando Opción B (solo nombres propios)
3. Archivar contenido anterior en `openspec/changes/archive/`
4. Modificar VideoHero.astro para quality push
5. Revertir regla CSS `.prose strong`

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/i18n/content/foundation/content-pt.json` | Modified | ~4000 palabras, 32 secciones |
| `src/components/home/VideoHero.astro` | Modified | +5 líneas JS para HD |
| `src/styles/global.css` | Modified | Eliminado .prose strong |
| `openspec/changes/archive/foundation-content-pt/` | Created | Contenido anterior archivado |
| `openspec/changes/video-hd-quality/` | Created | Proposals |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Contenido demasiado largo | Low | Scroll es esperado para esta página |
| Too many bold keywords | Low | Aplicado opción B (solo nombres propios) |

## Rollback Plan

```bash
git checkout <previous-commit> -- src/i18n/content/foundation/content-pt.json
git checkout <previous-commit> -- src/components/home/VideoHero.astro
git checkout <previous-commit> -- src/styles/global.css
```

## Dependencies

- Fuente: `/Users/calderonjosue_/Downloads/fundacao_cepseris.md`
- YouTube IFrame API (video existente)

## Success Criteria

- [x] Contenido PT completo (~4000 palabras)
- [x] Negritas en personas/lugares/instituciones/fechas
- [x] Sin negritas en "hinário", "curas", "Daime" (salvo "Santo Daime")
- [x] Contenido anterior archivado
- [x] Video HD quality push implementado
- [x] Build successful (107 páginas)
- [x] Commits en git (develop + main)
- [ ] Preview verificado en Vercel