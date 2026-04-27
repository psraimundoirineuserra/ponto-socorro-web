# Tasks: archive-dimensions-tabs

## Status: PENDENTE - Aguardando implementação

---

## Implementation Tasks

### Phase 1: Data

- [ ] 1.1 Criar `src/data/archive-dimensions.ts`
  - [ ] 1.1.1 Extrair artigos de links.md (Dim I - 8 items)
  - [ ] 1.1.2 Extrair blogs/crónicas de links.md (Dim III - 5 items)
  - [ ] 1.1.3 Definir estrutura de dimensões com sub-filtros

- [ ] 1.2 Integrar com `archive-videos.ts` existente (Dim II)

### Phase 2: UI - Tabs

- [ ] 2.1 Modificar `index.astro` - структура tabs
  - [ ] 2.1.1 Crear container para 4 tabs (I, II, III, IV)
  - [ ] 2.1.2 Aplicar estilos de tab ativo/inativo
  - [ ] 2.1.3 Agregar badge com count

### Phase 3: UI - Sub-Filtros

- [ ] 3.1 Implementar sub-filtros dinâmicos
  - [ ] 3.1.1 Dim I: [Artigos] [Teses] [Livros]
  - [ ] 3.1.2 Dim II: [Canal] [Outras] [Todos]
  - [ ] 3.1.3 Dim III: [Blogs] [Crónicas] [Artigos]
  - [ ] 3.1.4 Dim IV: nenhum (placeholder)

### Phase 4: UI - Content

- [ ] 4.1 Renderizar cards de artigos (Dim I)
  - [ ] 4.1.1 Card com título, tipo, source, link
  - [ ] 4.1.2 Badge de tipo (Artigo/Tese/Livro)

- [ ] 4.2 Manter cards de videos existentes (Dim II)
  - [ ] 4.2.1 Já funciona - solo mantener

- [ ] 4.3 Renderizar cards de blogs (Dim III)
  - [ ] 4.3.1 Card com título, tipo, source, link
  - [ ] 4.3.2 Badge de tipo (Blog/Crónica/Artigo)

- [ ] 4.4 Implementar placeholder para Dim IV
  - [ ] 4.4.1 Mensaje "🔧 Em desenvolvimento"
  - [ ] 4.4.2 Descrição "Esta dimensão ainda não possui conteúdo"

### Phase 5: JavaScript

- [ ] 5.1 Tab switching logic
  - [ ] 5.1.1 Click tab → mostrar conteúdo da dimensão
  - [ ] 5.1.2 Ocultar conteúdo de outras dimensões
  - [ ] 5.1.3 Atualizar visual active state

- [ ] 5.2 Sub-filter logic
  - [ ] 5.2.1 Click sub-filter → filtrar items
  - [ ] 5.2.2 Mostrar/ocultar sub-filtros según dimensão
  - [ ] 5.2.3 Manter filter state por dimensão

### Phase 6: Build + Deploy

- [ ] 6.1 `npm run build` - verificar 107+ páginas
- [ ] 6.2 Commit + push
- [ ] 6.3 Deploy preview Vercel

---

## Dependencies

- Design System V2 tokens
- Tailwind CSS v4
- archive-videos.ts (existente)
- links.md data extraída

---

## Files to Create/Modify

```
src/data/archive-dimensions.ts     (create)
src/pages/pt/arquivo/index.astro   (modify)
openspec/changes/archive-dimensions-tabs/
  proposal.md ✅
  spec.md      ✅
  design.md   ✅
  tasks.md    ✅ (this file)
```

---

## Estimated Time

- Phase 1-3: 1-2 horas
- Phase 4: 1 hora
- Phase 5: 30 min
- Phase 6: 15 min
- **Total: 3-4 horas**

---

## Not Implemented (after apply)

- Content real para Dim IV (FB/IG posts)
- Traduções ES/EN
- Autenticação/comentários