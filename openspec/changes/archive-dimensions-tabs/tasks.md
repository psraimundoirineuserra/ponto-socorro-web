# Tasks: archive-dimensions-tabs (RENOMEAR)

## 1. Update archive-dimensions.ts

- [ ] **1.1** Cambiar interface: `id: 'I' | 'II' | 'III' | 'IV' | 'V'`
- [ ] **1.2** Renomear Dim I: "Acadêmico"
- [ ] **1.3** Renomear Dim II: "Visual"
- [ ] **1.4** Renomear Dim III: "Crônicas"
- [ ] **1.5** Renomear Dim IV: "Redes sociais"
- [ ] **1.6** Adicionar Dim V: "Fotografia" (encontronocc placeholder)

## 2. Update Frontend

- [ ] **2.1** Verificar que 5 tabs se renderizan
- [ ] **2.2** Testar click en cada tab

## 3. Build & Verify

- [ ] **3.1** `npm run build`
- [ ] **3.2** Verificar 107+ páginas

## Rollback

```bash
cd /Users/calderonjosue_/clientes/ponto-socorro/protosocorro
git checkout HEAD -- src/data/archive-dimensions.ts src/pages/pt/arquivo/index.astro
```
