# Proposal: archive-slug-pages

## Intent

Crear páginas internas de detalle para Acadêmico y Crônicas. Cada entrada abre en `/pt/arquivo/academico/[slug]` o `/pt/arquivo/cronicas/[slug]` con contenido completo.

## Scope

### In
- Crear ruta `/pt/arquivo/academico/[slug].astro`
- Crear ruta `/pt/arquivo/cronicas/[slug].astro`
- Añadir resúmenes em portugués (basados em description existente)
- Contenido placeholder para Crônicas (enquanto não temos el texto completo)

### Out
- No modificar la página principal `/pt/arquivo`
- No modificar Visual (videos) ni Redes sociais
- No modificar Fotografia

---

## Approach

### Estructura de datos

```typescript
// Para Académico - ya tiene description que sirve de resumen
interface AcademicItem {
  id: string;
  title: string;
  type: 'article' | 'thesis' | 'book';
  source: string;
  url: string;
  year?: string;
  description: string; // Usado como resumen
}
```

### Rutas

```
src/pages/pt/arquivo/
├── index.astro                    # Página principal (no cambiar)
├── academico/
│   └── [slug].astro               # Detalle académico
└── cronicas/
    └── [slug].astro               # Detalle crónica
```

### Template para Académico
- Header con título
- Tipo (article/thesis/book) como badge
- Fuente/año
- Resumen (del campo `description`)
- Botón "Baixar PDF" → link url

### Template para Crônicas
- Header con título
- Tipo (blog/chronicle/biography) como badge
- Fuente/URL al final
- Contenido placeholder: "Em desenvolvimento"

---

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/pages/pt/arquivo/academico/[slug].astro` | Create | Nueva ruta |
| `src/pages/pt/arquivo/cronicas/[slug].astro` | Create | Nueva ruta |
| `src/data/archive-dimensions.ts` | No Change | Datos ya existem |

---

## Success Criteria

- [ ] `/pt/arquivo/academico/art-marupiara` muestra artículo con resumen
- [ ] `/pt/arquivo/cronicas/cronica-peregrino` muestra crónica con badge
- [ ] Click en card de Acadêmico navega a la página de detalle
- [ ] Click en card de Crônicas navega a la página de detalle
- [ ] Build exitoso
