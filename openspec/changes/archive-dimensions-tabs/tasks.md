# Tasks: archive-dimensions-tabs

## Status: COMPLETADO

---

## Implementation Tasks

### Phase 1: Data ✅ COMPLETADO

- [x] 1.1 Criar `src/data/archive-dimensions.ts`
  - [x] 1.1.1 Extrair artigos de links.md (Dim I - 9 items)
  - [x] 1.1.2 Extrair blogs/crónicas de links.md (Dim III - 6 items)
  - [x] 1.1.3 Mover biografias para Dim III (3 items)
  - [x] 1.1.4 Incluir posts de redes sociais (Dim IV - 9 items)
  - [x] 1.1.5 Definir estrutura de dimensões com sub-filtros
  - [x] 1.1.6 Guardar 7.2 (Doctrina) para depois (doctrina-pendente.md)

### Phase 2: UI - Tabs ✅ COMPLETADO

- [x] 2.1 Modificar `index.astro` - estructura tabs
  - [x] 2.1.1 Crear container para 4 tabs (I, II, III, IV)
  - [x] 2.1.2 Aplicar estilos de tab ativo/inativo
  - [x] 2.1.3 Agregar badge com count (los tabs muestran el nombre)

### Phase 3: UI - Sub-Filtros ✅ COMPLETADO

- [x] 3.1 Implementar sub-filtros dinâmicos
  - [x] 3.1.1 Dim I: [Artigos (2)] [Teses (6)] [Livros (1)]
  - [x] 3.1.2 Dim II: [Canal (18)] [Outras (10)] [Todos (28)]
  - [x] 3.1.3 Dim III: [Blogs (2)] [Crónicas (4)] [Biografias (3)]
  - [x] 3.1.4 Dim IV: [Facebook (4)] [Instagram (5)]

### Phase 4: UI - Content ✅ COMPLETADO

- [x] 4.1 Renderizar cards de artigos (Dim I) - 9 items
- [x] 4.2 Manter cards de videos existentes (Dim II) - 28 videos
- [x] 4.3 Renderizar cards de blogs/crónicas/biografias (Dim III) - 9 items
- [x] 4.4 Renderizar cards de posts (Dim IV) - 9 items

### Phase 5: JavaScript ✅ COMPLETADO

- [x] 5.1 Tab switching logic - funciona
- [x] 5.2 Sub-filter logic - funciona

### Phase 6: Build ✅ COMPLETADO

- [x] 6.1 `npm run build` - 107 páginas
- [ ] 6.2 Commit + push (pendiente)
- [ ] 6.3 Deploy preview Vercel (pendiente)

---

## Content Data (Actualizado)

### Dim I - O Trono do Saber (9 items)

| Type | Count | Items |
|------|-------|-------|
| Artigo | 2 | Marupiara, Kalágatos |
| Tese | 6 | USP/NEIP, Antunes Cura, Paper UFAL, UFPR, CETAD, Censo |
| Livro | 1 | El uso religioso de la ayahuasca |

### Dim II - A Memória Viva (28 videos)

| Type | Count | Items |
|------|-------|-------|
| Video (Canal) | 18 | Já implementado |
| Video (Outras) | 10 | Já implementado |

### Dim III - Olhar da Floresta (9 items)

| Type | Count | Items |
|------|-------|-------|
| Blog | 2 | Céu da Boa Palavra (2) |
| Crónica | 4 | Peregrino, São Francisco, Seminário, Julia Moura |
| Biografia | 3 | Wilson (santodaime), Wilson (nextohm), Irineu (nextohm) |

### Dim IV - A Bitácora Digital (9 items)

| Type | Count | Items |
|------|-------|-------|
| Facebook | 4 | Página oficial, Álbum, Calendário 2016, Post doctrinal |
| Instagram | 5 | Perfil, Location, Post 22/11, Reel Daime TV, Reel trabalho |

---

## Doctrina Pendente (não implementado)

Ver arquivo: `openspec/changes/archive-dimensions-tabs/doctrina-pendente.md`

Contém:
- PDF Hinário Linha de Arrochim
- Blog História do Hinário
- Scribd traducción
- Hinos do Santo Daime
- Gráfica Rainha
- ICP Apologética
- SoundCloud playlist

---

## Dependencies

- Design System V2 tokens
- Tailwind CSS v4
- archive-videos.ts (existente)
- archive-dimensions.ts (criado)

---

## Files Created/Modified

```
src/data/archive-dimensions.ts           ✅ Created/Updated
src/pages/pt/arquivo/index.astro       ✅ Updated
openspec/changes/archive-dimensions-tabs/
  proposal.md                         ✅
  spec.md                              ✅
  design.md                            ✅
  tasks.md                             ✅ (this file)
  state.yaml                           ✅
  pending.md                           ✅
  doctrina-pendente.md                 ✅ (new)
```

---

## Pending

- [ ] git commit
- [ ] git push
- [ ] Deploy Vercel