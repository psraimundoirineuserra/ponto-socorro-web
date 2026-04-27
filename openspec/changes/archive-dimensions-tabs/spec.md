# Spec: archive-dimensions-tabs

## Overview

Navegação por 4 dimensões em `/pt/arquivo`. Cada dimensão tem sub-filtros específicos e conteúdo diferente. Click num tab mostra conteúdo sem reload (single-page).

---

## Structure

```
/pt/arquivo
├── Header: "Arquivo" + "Preservação e Memória"
├── Timeline (sidebar esquerdo) - SEMPRE visível
├── Tabs: [I - Tron...] [II - Mem...] [III - Olhar...] [IV - Bitácora]
├── Sub-filtros (variam por dimensão ativa)
└── Conteúdo (cards/placeholder)
```

---

## Dimensions

### Dim I - O Trono do Saber (Artigos acadêmicos)

| Sub-filtro | Label | Count |
|------------|-------|-------|
| articles | Artigos | 2 |
| theses | Teses | 4 |
| books | Livros | 2 |

**Items (8 total):**

| ID | Title | Type | Source | Year |
|----|-------|------|--------|------|
| art-marupiara | As origens de uma casa de cura do Daime | article | Marupiara (UEA) | 2018 |
| art-kalagatos | Processos de saúde, doença e cura no Santo Daime | article | Kalágatos (UECE) | - |
| thesis-usp | Controvérsia pública da ayahuasca no Brasil | thesis | USP/NEIP | 2012 |
| thesis-antunes-cura | Cura, religião e cultura | article | NEIP | 2019 |
| thesis-ufpr | O despertar da consciência | thesis | UFPR | - |
| thesis-cetad | As Religiões da Ayahuasca | thesis | CETAD | - |
| doc-censo | Censo comunitário Colônia Cinco Mil 2022 | document | UFAC | 2022 |
| profile-julia | Perfil de Julia Moura (UFAC) | profile | Academia.edu | - |

---

### Dim II - A Memória Viva (Videos)

| Sub-filtro | Label | Count |
|------------|-------|-------|
| canal | Canal | 18 |
| outro | Outras Fontes | 10 |
| todos | Todos | 28 |

**Items (28 total):** Ya implementado em `archive-videos.ts`

---

### Dim III - Olhar da Floresta (Blogs/Crónicas)

| Sub-filtro | Label | Count |
|------------|-------|-------|
| blogs | Blogs | 2 |
| chronicles | Crónicas | 2 |
| articles | Artigos | 1 |

**Items (5 total):**

| ID | Title | Type | Source |
|----|-------|------|--------|
| blog-ceu-boa-palavra | Padrinho Nonato | blog | ceudaboapalavra.blogspot.com |
| blog-hinarios-peregrino | O Peregrino na residência do Padrinho Nonato | chronicle | hinarios.blogspot.com |
| blog-hinarios-sao-francisco | São Francisco bem louvado na Vila Carneiro | chronicle | hinarios.blogspot.com |
| article-santodaime | A Doutrina da Floresta (Seminário) | article | SantoDaime.org |

---

### Dim IV - A Bitácora Digital (placeholder)

- Mensaje: "Em desenvolvimento"
- Sin sub-filtros
- Sin items

---

## UI Components

### Tab Component
- 4 tabs horizontais
- Tab ativo: bg-primary/10, text-primary
- Tab inativo: text-secondary
- Badge com count no final

```html
<button data-dim="II" class="dim-tab active">
  II - A Memória Viva
  <span class="badge">28</span>
</button>
```

### Sub-Filter Component
- Pills horizontais
- Aparece apenas quando dimensão tem sub-filtros
- Click filtra items da dimensão

```html
<div class="sub-filters">
  <button data-filter="canal" class="sub-tab active">Canal (18)</button>
  <button data-filter="outro" class="sub-tab">Outras (10)</button>
  <button data-filter="todos" class="sub-tab">Todos (28)</button>
</div>
```

### Content Card (Articles/Blogs)
```html
<a href="{url}" target="_blank" class="content-card">
  <h4>{title}</h4>
  <p class="type-badge">{type}</p>
  <p class="source">{source}</p>
</a>
```

### Content Card (Videos)
- Ya existente - mantener igual

### Placeholder Component
```html
<div class="placeholder">
  <p>🔧 Em desenvolvimento</p>
  <p>Esta dimensão ainda não possui conteúdo.</p>
</div>
```

---

## Layout

### Desktop (>768px)
```
┌──────────────────────────────────────────────────────┐
│ Timeline (sidebar)     │  Tabs [I][II][III][IV]     │
│                        │  Sub-filtros               │
│                        │  Content Grid              │
└──────────────────────────────────────────────────────┘
```

### Mobile (<768px)
```
┌─────────────────────┐
│ Timeline (colapsado) │
├─────────────────────┤
│ Tabs (scroll horiz)  │
├─────────────────────┤
│ Sub-filtros          │
├─────────────────────┤
│ Content              │
└─────────────────────┘
```

---

## Technical Approach

- **Framework**: Astro (static, SSG)
- **Styling**: Tailwind CSS v4
- **Interatividade**: Vanilla JS (show/hide tabs)
- **Data**: Static TS files

---

## JavaScript Logic

```javascript
// Ao clicar num tab de dimensão:
1. Remover 'active' de todos os tabs
2. Adicionar 'active' ao tab clicado
3. Esconder todos os conteúdos
4. Mostrar conteúdo da dimensão clicada
5. Mostrar/ocultar sub-filtros conforme dimensão

// Ao clicar num sub-filtro:
1. Aplicar filter aos items da dimensão ativa
2. Ocultar items que não correspondem ao filtro
3. Ordenar por views/date se aplicável
```

---

## Content Visibility Matrix

| Dimensão | Timeline | Tab Ativo | Sub-filtros | Conteúdo |
|----------|----------|-----------|-------------|----------|
| I | ✅ | ✅ | ✅ (Artigos/Teses/Livros) | Artigos |
| II | ✅ | ✅ | ✅ (Canal/Outras/Todos) | Videos |
| III | ✅ | ✅ | ✅ (Blogs/Crónicas/Artigos) | Blogs |
| IV | ✅ | ✅ | ❌ (nenhum) | Placeholder |

---

## Accessibility

- Tab buttons: `aria-selected`, `role="tab"`
- Sub-filters: `role="group"`, `aria-label`
- Links: `target="_blank"`, `rel="noopener noreferrer"`

---

## Edge Cases

- Dim IV sem conteúdo → mostrar placeholder
- Sub-filtro sem items → mostrar "Nenhum item"
- Links quebrados → verificar URLs antes de renderizar