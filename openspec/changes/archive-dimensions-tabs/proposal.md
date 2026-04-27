# Proposal: archive-dimensions-tabs (RENOMEAR)

## Intent

Renomear as 4 dimensões e adicionar uma 5ª (Fotografia) para melhor refletir o conteúdo. Atualizar os labels das tabs mantendo a estrutura existing.

## Scope

### In
- Renomear Dim I: "O Trono do Saber" → "Acadêmico"
- Renomear Dim II: "A Memória Viva" → "Visual"
- Renomear Dim III: "Olhar da Floresta" → "Crônicas"
- Renomear Dim IV: "A Bitácora Digital" → "Redes sociais"
- Adicionar Dim V: "Fotografia" (encontronocc)

### Out
- Não mudar estructura de dados (items, subfilters, etc.)
- Não mudar funcionalidad JS

---

## Data Structure Change

```typescript
export interface Dimension {
  id: 'I' | 'II' | 'III' | 'IV' | 'V';  // Adicionar 'V'
  name: string;
  subtitle: string;
  subfilters: { id: string; label: string; count: number }[];
  items: DimensionItem[];
}
```

## New Dimension Names

| Dim | ID | Name (PT) | Subtitle | Content |
|-----|----|-----------|----------|---------|
| I | 'I' | Acadêmico | Artigos acadêmicos e teses | Artigos, teses, livros |
| II | 'II' | Visual | Videos do canal e outras fontes | Videos YouTube |
| III | 'III' | Crônicas | Blogs, crónicas e biografias | Blogs, crónicas, biografias |
| IV | 'IV' | Redes sociais | Posts de redes sociais | Facebook, Instagram |
| V | 'V' | Fotografia | Encontronocc | Placeholder |

## Approach

1. Atualizar `archive-dimensions.ts` com novos nomes
2. Adicionar tipo 'V' na interface
3. Adicionar 5ª dimensão com items placeholder
4. Atualizar frontend para soportar 5 tabs

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/data/archive-dimensions.ts` | Modify | Renomear dims + adicionar V |
| `src/pages/pt/arquivo/index.astro` | Modify | Atualizar tabs |

## Success Criteria

- [ ] 5 tabs exibidos com novos nomes
- [ ] Dim V "Fotografia" aparece como tab
- [ ] Build exitoso
