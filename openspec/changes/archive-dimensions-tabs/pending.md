# Plan: Archive - Dimensões Navigation (SDD COMPLETO)

**Created**: 2026-04-24
**Updated**: 2026-04-24
**Status**: SDD COMPLETO - Aguardando apply

---

## SDD Artifacts Created

| Artifact | Path | Status |
|----------|------|--------|
| Proposal | `openspec/changes/archive-dimensions-tabs/proposal.md` | ✅ |
| Spec | `openspec/changes/archive-dimensions-tabs/spec.md` | ✅ |
| Design | `openspec/changes/archive-dimensions-tabs/design.md` | ✅ |
| Tasks | `openspec/changes/archive-dimensions-tabs/tasks.md` | ✅ |
| State | `openspec/changes/archive-dimensions-tabs/state.yaml` | ✅ |

---

## Estrutura Proposta

```
┌────────────────────────────────────────────────────┐
│ [I - Tron...] [II - Mem...] [III - Olhar] [IV - Bitácora] │
├────────────────────────────────────────────────────┤
│ SUB-FILTROS VARÍAN según dimensão:                  │
│                                                    │
│ Dim I (Artigos acadêmicos):                         │
│ [Artigos (2)] [Teses (4)] [Livros (2)]             │
│                                                    │
│ Dim II (Videos - YouTube):                         │
│ [Canal (18)] [Outras (10)] [Todos (28)]           │
│                                                    │
│ Dim III (Blogs/Crónicas):                          │
│ [Blogs (2)] [Crónicas (2)] [Artigos (1)]          │
│                                                    │
│ Dim IV (placeholder)                               │
│ "Em desenvolvimento"                               │
└────────────────────────────────────────────────────┘
```

---

## Content Data

### Dim I - O Trono do Saber (8 items)

| ID | Title | Type | Source |
|----|-------|------|--------|
| art-marupiara | As origens de uma casa de cura do Daime | article | Marupiara (UEA) |
| art-kalagatos | Processos de saúde, doença e cura no Santo Daime | article | Kalágatos (UECE) |
| thesis-usp | Controvérsia pública da ayahuasca no Brasil | thesis | USP/NEIP |
| thesis-antunes-cura | Cura, religião e cultura | article | NEIP |
| thesis-ufpr | O despertar da consciência | thesis | UFPR |
| thesis-cetad | As Religiões da Ayahuasca | thesis | CETAD |
| doc-censo | Censo comunitário Colônia Cinco Mil 2022 | document | UFAC |
| profile-julia | Perfil de Julia Moura (UFAC) | profile | Academia.edu |

### Dim III - Olhar da Floresta (5 items)

| ID | Title | Type | Source |
|----|-------|------|--------|
| blog-ceu-boa-palavra | Padrinho Nonato | blog | ceudaboapalavra.blogspot.com |
| blog-hinarios-peregrino | O Peregrino na residência do Padrinho Nonato | chronicle | hinarios.blogspot.com |
| blog-hinarios-sao-francisco | São Francisco bem louvado na Vila Carneiro | chronicle | hinarios.blogspot.com |
| article-santodaime | A Doutrina da Floresta (Seminário) | article | SantoDaime.org |

---

## Files to Create/Modify

```
src/data/archive-dimensions.ts     (create)
src/pages/pt/arquivo/index.astro   (modify)
openspec/changes/archive-dimensions-tabs/
  proposal.md ✅
  spec.md      ✅
  design.md   ✅
  tasks.md    ✅
  state.yaml   ✅
```

---

## Next Step

`sdd-apply` - Implementar según tasks.md