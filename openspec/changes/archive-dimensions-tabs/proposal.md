# Proposal: archive-dimensions-tabs

## Intent

Implementar navegación por 4 dimensões na página `/pt/arquivo`. Cada dimensão tem conteúdo diferente e sub-filtros específicos. Click num tab mostra conteúdo da dimensão correspondente (single-page, sem reload).

## Scope

### In Scope
- 4 tabs de dimensões ARRIBA (I, II, III, IV)
- Sub-filtros ABAJO de tabs (variam por dimensão)
- Conteúdo de Dim I (Artigos acadêmicos) - datos extraídos de links.md
- Conteúdo de Dim II (Videos) - já implementado
- Conteúdo de Dim III (Blogs/Crónicas) - dados extraídos de links.md
- Dim IV placeholder ("Em desenvolvimento")
- JavaScript para show/hide contenido sin reload

### Out of Scope
- Backend / database (Astro estático)
- Conteúdo real para Dim IV (FB/IG posts)
- Traduções ES/EN (PT only)
- Autenticação / comentários

---

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/pages/pt/arquivo/index.astro` | Modify | Reestruturar tabs + conteúdo dinâmico |
| `src/data/archive-dimensions.ts` | Create | Data para Dim I, II, III, IV |

---

## Content per Dimensão

### Dim I - O Trono do Saber (Artigos acadêmicos)

**Dados extraídos de `cepsesis-pronto-socorro-links.md.md`:**

| # | Título | Type | Source |
|---|--------|------|--------|
| 1 | As origens de uma casa de cura do Daime | Artigo | Marupiara (UEA) |
| 2 | Processos de saúde, doença e cura no Santo Daime | Artigo | Kalágatos (UECE) |
| 3 | Controvérsia pública da ayahuasca no Brasil | Tese | USP/NEIP |
| 4 | Cura, religião e cultura (Antunes) | Artigo | NEIP |
| 5 | O despertar da consciência (UFPR) | Tese | UFPR |
| 6 | As Religiões da Ayahuasca | Tese/Livro | CETAD |
| 7 | Censo comunitário Colônia Cinco Mil 2022 | Documento | UFAC |
| 8 | Perfil de Julia Moura (UFAC) | Perfil | Academia.edu |

**Sub-filtros:** [Artigos] [Teses] [Livros]

### Dim II - A Memória Viva (Videos)

**Ya implementado:**
- 28 videos (18 canal + 10 outras fontes)
- Sub-filtros: [Canal (18)] [Outras (10)] [Todos (28)]

### Dim III - Olhar da Floresta (Blogs/Crónicas)

**Dados extraídos de `cepsesis-pronto-socorro-links.md.md`:**

| # | Título | Type | Source |
|---|--------|------|--------|
| 1 | Padrinho Nonato (céu da Boa Palavra) | Blog | ceudaboapalavra.blogspot.com |
| 2 | O Peregrino na residência do Padrinho Nonato | Crônica | hinarios.blogspot.com |
| 3 | São Francisco bem louvado na Vila Carneiro | Crônica | hinarios.blogspot.com |
| 4 | A Doutrina da Floresta (Seminário) | Artigo | SantoDaime.org |

**Sub-filtros:** [Blogs] [Crónicas] [Artigos]

### Dim IV - A Bitácora Digital (placeholder)

- Mensaje: "Em desenvolvimento"
- Sin conteúdo real (FB/IG posts não extraídos)

---

## Approach

### Fase 1: Data
1. Extrair dados de Dim I e III de `cepsesis-pronto-socorro-links.md.md`
2. Criar `src/data/archive-dimensions.ts`

### Fase 2: UI
1. Reestruturar tabs em `index.astro`
2. Adicionar sub-filtros dinâmicos
3. Implementar show/hide con JavaScript

### Fase 3: Content
1. Renderizar cards de articles/blogs
2. Manter videos existentes (ya funcionan)
3. Placeholder para Dim IV

---

## Data Structure

```typescript
interface Dimension {
  id: 'I' | 'II' | 'III' | 'IV';
  name: string;
  subtitle: string;
  subfilters: SubFilter[];
  items: ContentItem[];
}

interface SubFilter {
  id: string;
  label: string;
  count: number;
}

interface ContentItem {
  id: string;
  title: string;
  type: 'article' | 'thesis' | 'book' | 'blog' | 'chronicle';
  source: string;
  url: string;
  year?: string;
  views?: number; // only for videos
}
```

---

## Tab Order

```
[I - Tron o Saber] [II - A Memória Viva] [III - Olhar da Floresta] [IV - A Bitácora]
```

**Sub-filtros (apenas visibles quando dimensão ativa):**

| Dimensão | Sub-filtros |
|----------|-------------|
| I | [Artigos] [Teses] [Livros] |
| II | [Canal] [Outras Fontes] [Todos] |
| III | [Blogs] [Crónicas] [Artigos] |
| IV | (nenhum - placeholder) |

---

## Dependencies

- Design System V2 tokens
- Tailwind CSS v4
- Astro static build
- links.md data extraído

---

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Conteúdo Dim I/III incompleto | Low | Datos de links.md já organizados |
| JS não funciona em produção | Low | Testar com preview Vercel |
| muitas categorías | Low | Limitar a 3 sub-filtros por dimensão |

---

## Success Criteria

- [ ] 4 tabs de dimensão renderizados ARRIBA
- [ ] Sub-filtros vary por dimensão
- [ ] Click em tab mostra conteúdo correspondente
- [ ] Dim I (artigos) renderizados com 8 items
- [ ] Dim II (videos) mantém funcionalidad existente
- [ ] Dim III (blogs) renderizados com 4 items
- [ ] Dim IV mostra placeholder "Em desenvolvimento"
- [ ] Build exitoso (107+ páginas)
- [ ] Deploy preview Vercel