# Plan: Archive - Dimensões Navigation (PENDENTE)

**Created**: 2026-04-24
**Status**: PENDENTE - Não implementar ainda
**Change**: archive-dimensions-tabs

---

## Objetivo

Adicionar navegação por 4 dimensões à página `/pt/arquivo`.

---

## Estrutura Proposta

### Tabs de Navegação (4 dimensões)

```
O Trono do Saber (I) | A Memória Viva (II) | Olhar da Floresta (III) | A Bitácora (IV)
```

| Dimensão | Nome | Conteúdo | Status |
|----------|------|----------|--------|
| I | O Trono do Saber | Artigos acadêmicos, teses | ⏳ Pendente |
| II | A Memória Viva | 28 vídeos (Canal + Outras Fontes) | ✅ Implementado |
| III | Olhar da Floresta | Blogs, crónicas | ⏳ Pendente |
| IV | A Bitácora Digital | Posts Facebook/Instagram | ⏳ Pendente |

---

## Implementação Detalhada

### 1. Novos Tabs (替换 atual)

**Antes (atual):**
```
Canal (18) | Outras Fontes (10) | Todos (28)
```

**Depois (proposto):**
```
I - O Trono do Saber | II - A Memória Viva | III - Olhar da Floresta | IV - A Bitácora
```

### 2. Sub-filtros em Dim II

Dentro de Dim II, manter filtros actuales:
```
Canal (18) | Outras Fontes (10) | Todos (28)
```

### 3. Badges Visuais

Agregar badge "Dim. II" nos cards de video (visual, sem filtro).

### 4. Placeholder para Dimensões Vazias

Para I, III, IV (sem conteúdo):
```
"Em desenvolvimento" + mensagem explicativa
```

---

## Arquivos a Modificar

```
src/pages/pt/arquivo/index.astro    → Novos tabs + sub-filtros
src/data/archive-videos.ts         → Badge info (opcional)
openspec/changes/archive-dimensions-tabs/
├── proposal.md
├── spec.md
├── design.md
└── tasks.md
```

---

## URL (sem mudança)

```
/pt/arquivo  → Una página con tabs de dimensão
```

---

## Alternativa Futura (quando houver conteúdo)

Migrar para sub-páginas:
```
/pt/arquivo              → Visão geral
/pt/arquivo/trono        → Dim I
/pt/arquivo/memoria      → Dim II (atual)
/pt/arquivo/floresta     → Dim III
/pt/arquivo/bitacora     → Dim IV
```

---

## Status

- [ ] proposal.md
- [ ] spec.md
- [ ] design.md
- [ ] tasks.md
- [ ] implementar

**Nota**: Aguardar usuário confirmar antes de implementar.