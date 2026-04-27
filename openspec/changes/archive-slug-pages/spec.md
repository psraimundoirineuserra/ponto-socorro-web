# Spec: archive-slug-pages

## Context

Páginas internas de detalle para las dimensiones Acadêmico y Crônicas.

## Pages

### /pt/arquivo/academico/[slug]

**Propósito:** Mostrar detalle de cada artículo académico.

**Layout:**
```
┌─────────────────────────────────────────────────┐
│ [Header padrão]                                 │
├─────────────────────────────────────────────────┤
│ <nav class="breadcrumb">                        │
│   Arquivo > Acadêmico > [título]                │
│ </nav>                                          │
├─────────────────────────────────────────────────┤
│ <article>                                       │
│   <span class="badge">Article</span>            │
│   <h1>Título do artigo</h1>                     │
│   <p class="source">Fonte • Ano</p>             │
│   <div class="resumo">                          │
│     Resumo do artigo...                         │
│   </div>                                        │
│   <a href="[url]" class="btn-download" target>  │
│     Baixar PDF →                                │
│   </a>                                          │
│ </article>                                      │
├─────────────────────────────────────────────────┤
│ [Footer]                                        │
└─────────────────────────────────────────────────┘
```

### /pt/arquivo/cronicas/[slug]

**Propósito:** Mostrar contenido completo de cada crónica.

**Layout:**
```
┌─────────────────────────────────────────────────┐
│ [Header padrão]                                 │
├─────────────────────────────────────────────────┤
│ <nav class="breadcrumb">                        │
│   Arquivo > Crônicas > [título]                 │
│ </nav>                                          │
├─────────────────────────────────────────────────┤
│ <article>                                       │
│   <span class="badge">Crónica</span>           │
│   <h1>Título da crónica</h1>                    │
│   <p class="source">Fonte</p>                   │
│   <div class="conteudo">                        │
│     [Contenido completo]                        │
│     ou "Em desenvolvimento"                     │
│   </div>                                        │
│   <a href="[url]" class="source-link" target>   │
│     Fonte original →                           │
│   </a>                                          │
│ </article>                                      │
├─────────────────────────────────────────────────┤
│ [Footer]                                        │
└─────────────────────────────────────────────────┘
```

## Data Flow

1. `[slug].astro` receives `slug` param
2. Look up item in `archive-dimensions.ts` by `id`
3. Render template with item data

## Acceptance Criteria

- [ ] AC1: `/pt/arquivo/academico/[id]` muestra artículo con resumen
- [ ] AC2: `/pt/arquivo/cronicas/[id]` muestra crónica
- [ ] AC3: Botón "Baixar PDF" abre link en nueva pestaña
- [ ] AC4: Link "Fonte original" muestra fuente
- [ ] AC5: Breadcrumb navegación funciona
- [ ] AC6: Build exitoso
