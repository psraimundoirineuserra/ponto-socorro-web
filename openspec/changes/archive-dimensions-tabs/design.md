# Design: archive-dimensions-tabs

## Technical Approach

Single-page navigation com tabs ARRIBA e sub-filtros dinâmicos ABAJO. JavaScript vanilla para show/hide conteúdo sem reload. Data extraída de links.md para dims I e III.

---

## Architecture Decisions

### Decision: Tab Navigation

**Choice**: Tabs ARRIBA, conteúdo ABAJO (não sidebar)
**Alternatives considered**: Tabs no sidebar, URL params
**Rationale**: Simplicidade - tabs horizontais são padrão UX, não requer mudança de URL

### Decision: Vanilla JS (no framework)

**Choice**: JavaScript vanilla para tabs e filtros
**Alternatives considered**: React, nanostores
**Rationale**: Interatividade simples (show/hide), não justifica overhead de framework

### Decision: Data em arquivo .ts separado

**Choice**: Criar `src/data/archive-dimensions.ts` com dados de dims I, III
**Alternatives considered**: Embed data direto no Astro
**Rationale**: Separação de concerns, mais fácil manter e testar

### Decision: Sub-filtros only en dims con contenido

**Choice**: Sub-filtros aparecem apenas para dims I, II, III
**Alternatives considered**: Mostrar sempre sub-filtros
**Rationale**: Dim IV não tem conteúdo - placeholder não necesita sub-filtros

---

## Data Flow

```
links.md.md
    │
    ▼
src/data/archive-dimensions.ts (extract)
    │
    ├── dimI: articles, theses, books
    ├── dimII: videos (from archive-videos.ts)
    ├── dimIII: blogs, chronicles, articles
    └── dimIV: empty

index.astro (render)
    │
    ├── tabs.map(dimension => <Tab />)
    ├── activeDimension.subfilters.map(sub => <SubFilter />)
    └── activeDimension.items.map(item => <Card />)
```

---

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `src/pages/pt/arquivo/index.astro` | Modify | Reestructurar tabs + JS show/hide |
| `src/data/archive-dimensions.ts` | Create | Data para dims I, III |
| `openspec/changes/archive-dimensions-tabs/proposal.md` | Create | ✅ |
| `openspec/changes/archive-dimensions-tabs/spec.md` | Create | ✅ |
| `openspec/changes/archive-dimensions-tabs/design.md` | Create | ✅ |
| `openspec/changes/archive-dimensions-tabs/tasks.md` | Create | (pending) |

---

## JavaScript Structure

```javascript
// State
let activeDim = 'II';
let activeSubFilter = 'canal';

// Tab click handler
document.querySelectorAll('.dim-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const dim = tab.dataset.dim;
    activeDim = dim;
    updateTabs();
    updateSubFilters();
    updateContent();
  });
});

// Sub-filter click handler
document.querySelectorAll('.sub-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const filter = tab.dataset.filter;
    activeSubFilter = filter;
    updateSubFilters();
    filterItems();
  });
});
```

---

## CSS Classes (Tailwind)

```css
.dim-tab      /* Tab de dimensão */
.dim-tab.active  /* Tab ativo */

.sub-filters  /* Container de sub-filtros */
.sub-filters.hidden  /* Oculto quando dim IV */

.sub-tab      /* Pill de sub-filtro */
.sub-tab.active

.content-card /* Card genérico para articles/blogs */
.video-card   /* Card de video (existente) */
.placeholder  /* Placeholder para dims vazias */
```

---

## Component Hierarchy

```html
<Layout>
  <section>
    <header>  <!-- Título -->
    <div.grid>
      <aside>  <!-- Timeline - sempre visível -->
      <div.col-span-2>
        <div.tabs-container>
          [I] [II] [III] [IV]  <!-- Dims tabs -->
        </div>
        <div.sub-filters-container>
          [Sub-filtros]  <!-- Dinâmico por dimensão -->
        </div>
        <div.content-grid>
          [Cards]  <!-- Artigos/Videos/Blogs/Placeholder -->
        </div>
      </div>
    </div>
  </section>
  <script>  <!-- Vanilla JS para tabs/filtros -->
</Layout>
```

---

## Testing Strategy

| Layer | What to Test | Approach |
|-------|-------------|----------|
| Unit | filter logic | JS console.log tests |
| Integration | tab switching | Click en cada tab, verificar conteúdo |
| E2E | full flow | Build → preview → interact |

---

## Migration Notes

- Mantém timeline existente (sidebar)
- Mantém videos existentes de `archive-videos.ts`
- Agrega data para dims I e III de `links.md`
- Não quebra funcionalidad existente (videos funcionam)

---

## Open Questions

- [x] Dim IV content (FB/IG)? → Placeholder por agora
- [x] Sub-filter counts? → Dinâmicos basados en data
- [x] Ordenamiento? → Por views (videos), por date (articles)