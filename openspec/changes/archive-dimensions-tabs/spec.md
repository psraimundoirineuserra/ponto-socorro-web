# Spec: archive-dimensions-tabs (RENOMEAR)

## Context

5 dimensões com nomes em português. Estrutura de tabs atualizada.

## Dimension Names

| Dim | ID | Name (PT) | Subtitle |
|-----|----|-----------|----------|
| I | 'I' | Acadêmico | Artigos acadêmicos e teses |
| II | 'II' | Visual | Videos do canal e outras fontes |
| III | 'III' | Crônicas | Blogs, crónicas e biografias |
| IV | 'IV' | Redes sociais | Posts de redes sociais |
| V | 'V' | Fotografia | Encontronocc |

## Tab Bar

- 5 botones en fila: **Acadêmico** | **Visual** | **Crônicas** | **Redes sociais** | **Fotografia**
- Estado activo: `bg-primary/10 text-primary`
- Estado inactivo: `text-secondary`

## Content per Dimension

### Dim I — Acadêmico
Items existentes (artigos, teses, livros).

### Dim II — Visual
Videos YouTube existentes (28 videos, sub-filtros canal/outro/todos).

### Dim III — Crônicas
Items existentes (blogs, crónicas, biografias).

### Dim IV — Redes sociais
Items existentes (facebook, instagram).

### Dim V — Fotografia
Placeholder "Em desenvolvimento" ou items de Encontronocc.

## Acceptance Criteria

- [ ] AC1: 5 tabs con nuevos nombres
- [ ] AC2: Tab "Fotografia" aparece en la posición 5
- [ ] AC3: Content de Dim V muestra placeholder o contenido
- [ ] AC4: Build exitoso
