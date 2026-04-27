# Design: archive-slug-pages

## Decision 1: Route Structure

**Option A:** `/pt/arquivo/academico/[id]`
**Option B:** `/pt/arquivo/academico/[slug]` (slugified title)

**Decision:** Option A (`[id]`) — más simple, el id já existe en los datos.

## Decision 2: Content Source

**Acadêmico:**
- Resumen: campo `description` já existente
- PDF link: campo `url` ya aponta ao PDF

**Crônicas:**
- Contenido: placeholder "Em desenvolvimento" por ora
- Fuente: campo `url` ya apunta ao blog/origem

## Decision 3: Layout

Usar layout consistente con el resto del site:
- Same header/footer
- Same typography (Newsreader serif para títulos)
- Same color tokens

## Architecture

```
src/pages/pt/arquivo/
├── index.astro              # Ya existente
├── academico/
│   └── [slug].astro         # Nueva ruta dinámica
└── cronicas/
    └── [slug].astro         # Nueva ruta dinámica
```

## Component Inventory

### Breadcrumb
```html
<nav class="text-sm text-secondary mb-6">
  <a href="/pt/arquivo">Arquivo</a>
  <span class="mx-2">›</span>
  <a href="/pt/arquivo#academico">Acadêmico</a>
  <span class="mx-2">›</span>
  <span class="text-primary">Título</span>
</nav>
```

### Badge
```html
<span class="inline-block px-2 py-0.5 text-xs font-medium rounded bg-accent-nature/20 text-accent-nature">
  Article
</span>
```

### Download Button
```html
<a href="[url]" target="_blank" class="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:opacity-90">
  Baixar PDF
  <svg>...</svg>
</a>
```

## Files to Create

| File |
|------|
| `src/pages/pt/arquivo/academico/[slug].astro` |
| `src/pages/pt/arquivo/cronicas/[slug].astro` |

## No Changes Required

| File | Reason |
|------|--------|
| `src/data/archive-dimensions.ts` | Datos já existem |
| `src/pages/pt/arquivo/index.astro` | No cambiar |
