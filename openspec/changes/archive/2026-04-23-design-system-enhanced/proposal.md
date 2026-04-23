# Proposal: Design System Enhanced v2

## Intent

Actualizar el DESIGN_SYSTEM.md del proyecto Protosocorro para reflejar una estructura profesional inspirada en Linear, preservando el 100% del contenido existente y enriqueciéndolo con secciones de Concept & Vision, Do's and Don'ts, y ejemplos de componentes funcionales.

## Scope

### In Scope
- Crear documento `DESIGN_SYSTEM_V2.md` (NUEVO - no borrar el actual)
- Mantener todos los tokens, colores, tipografía, componentes existentes
- Agregar Concept & Vision basado en la historia de Wilson Carneiro y CEFLUWCS
- Agregar Visual Theme (light/dark atmosphere)
- Agregar Color Roles mejorados (background surfaces, text hierarchy)
- Agregar Depth & Elevation system para light theme
- Agregar Do's and Don'ts guidelines
- Agregar Component Examples con código copiable
- Incluir referencias a Padrinho Wilson Carneiro y la linhagem de Raimundo Nonato

### Out of Scope
- Modificar código fuente del proyecto
- Crear nuevos componentes
- Cambiar tokens existentes

## Approach

1. Copiar contenido actual del DESIGN_SYSTEM.md
2. Reorganizar estructura con nuevos secciones (Concept, Vision, Visual Theme)
3. Agregar contenido basado en docs de Padrinho Wilson (Downloads)
4. Agregar ejemplos de código funcionales
5. Mantener backward compatibility con tokens existentes

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `DESIGN_SYSTEM.md` | Preserved (not modified) | Documento actual intacto |
| `DESIGN_SYSTEM_V2.md` | New | Nueva versión enriquecida |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Contenido duplicado | Low | V2 es claramente diferenciado, extensión del original |
| Pérdida de tokens | Low | Copia sistemática de todos los tokens existentes |

## Rollback Plan

No aplicar. Documento nuevo no afecta el existente.

## Dependencies

- `DESIGN_SYSTEM.md` actual (copia)
- `Padrinho Wilson Carneiro...md` de Downloads (referencia)
- `ponto-socorro-plan-*.md` (referencia institucional)

## Success Criteria

- [ ] V2 contiene 100% del contenido de DESIGN_SYSTEM.md original
- [ ] Nueva estructura inspirada en Linear con Concept & Vision
- [ ] Referencias a CEFLUWCS, Wilson Carneiro, Raimundo Nonato
- [ ] Do's and Don'ts claros
- [ ] Component examples funcionales