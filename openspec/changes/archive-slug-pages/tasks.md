# Tasks: archive-slug-pages

## 1. Create Academic Detail Page ✅

- [x] **1.1** Crear directorio `src/pages/pt/arquivo/academico/`
- [x] **1.2** Crear archivo `[slug].astro` con:
  - getStaticPaths() para gerar rutas dos ids de Dim I
  - Layout con breadcrumb
  - Render de título, tipo, fuente, resumen
  - Botón "Baixar PDF"

## 2. Create Cronicas Detail Page ✅

- [x] **2.1** Crear directorio `src/pages/pt/arquivo/cronicas/`
- [x] **2.2** Crear archivo `[slug].astro` con:
  - getStaticPaths() para gerar rutas dos ids de Dim III
  - Layout con breadcrumb
  - Render de título, tipo, fuente
  - Link "Fonte original"

## 3. Update index.astro Links ✅

- [x] **3.1** Modificar links de cards Acadêmico para apontar a `/pt/arquivo/academico/[id]`
- [x] **3.2** Modificar links de cards Crônicas para apuntar a `/pt/arquivo/cronicas/[id]`

## 4. Hash Navigation ✅

- [x] **4.1** Implementar URL hash support (`#academico`, `#visual`, `#cronicas`, `#redes`, `#fotografia`)

## 5. Content Population (PENDIENTE)

- [ ] **5.1** Completar contenido de Académico:
  - [ ] 9 items de Académico necesitan resúmenes completos (actualmente usan `description` del data)
  - [ ] Mejorar resúmenes con más detalle

- [ ] **5.2** Completar contenido de Crônicas:
  - [ ] `blog-hinario-linha-arrochim` ✅ Completado
  - [ ] `blog-ceu-boa-palavra-padrinho-nonato` ✅ Completado
  - [ ] `cronica-peregrino` ✅ Completado
  - [ ] `cronica-sao-francisco` ✅ Completado
  - [ ] `art-seminario-santodaime` ❌ PENDIENTE (sin contenido)
  - [ ] `perfil-julia-moura` ❌ PENDIENTE (sin contenido)

## 6. Fix Filters & Details (PENDIENTE)

- [ ] **6.1** Verificar comportamento de `arquivo#cronicas` - el filtro debería funcionar correctamente
- [ ] **6.2** Revisar barra de título de los artículos en páginas de detalle
- [ ] **6.3** Posiblemente agregar más información a los resúmenes

## 7. Build & Verify ✅

- [x] **7.1** `npm run build` — 125 páginas
- [x] **7.2** Verificar nuevas páginas geradas
- [ ] **7.3** Probar navegación en browser

---

## Resumen de Estado

| Sección | Completado | Pendiente |
|---------|-----------|----------|
| Estructura de páginas | ✅ | — |
| Hash navigation | ✅ | — |
| Contenido Crônicas | 4/6 | 2 items |
| Contenido Académico | Placeholder | Mejorar resúmenes |
| Filtros/Details | — | Verificar |

---

## Rollback

```bash
cd /Users/calderonjosue_/clientes/ponto-socorro/protosocorro
git checkout HEAD -- src/pages/pt/arquivo/academico/ src/pages/pt/arquivo/cronicas/
```
