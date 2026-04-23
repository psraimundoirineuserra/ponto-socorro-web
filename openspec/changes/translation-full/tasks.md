# Tasks: translation-full

## Phase 1: Estructura base y extracción de contenido

- [x] 1.1 Crear estructura `src/i18n/content/{page}/{locale}.json`
- [x] 1.2 Extraer contenido actual de `foundation.astro` → `foundation/content-pt.json`
- [x] 1.3 Extraer contenido actual de `archive.astro` → `archive/content-pt.json`
- [ ] 1.4 Extraer contenido de componentes home → `home/{component}-pt.json`
- [x] 1.5 Modificar `foundation.astro` para importar desde JSON
- [x] 1.6 Modificar `archive.astro` para importar desde JSON

## Phase 2: Componentes de contenido

- [ ] 2.1 Crear componente `PageContent.astro` que acepta `page` y `locale`
- [ ] 2.2 Implementar fallback a PT si traducción no existe
- [ ] 2.3 Modificar `pages/index.astro` para usar componentes de contenido
- [ ] 2.4 Conectar components home (Hero, Manifesto, Coordinates, HinarioPreview) al sistema

## Phase 3: Traducción con DeepSeek

- [x] 3.1 Instalar SDK de DeepSeek (usando fetch API directo)
- [x] 3.2 Crear script `scripts/translate.ts` con modelo `deepseek-chat`
- [x] 3.3 Configurar API key en `.env` (DEEPSEEK_API_KEY)
- [x] 3.4 Traducir Foundation: PT → ES, PT → EN
- [x] 3.5 Traducir Archive: PT → ES, PT → EN
- [ ] 3.6 Traducir Home components: PT → ES, PT → EN
- [ ] 3.7 Traducir Shop: PT → ES, PT → EN

## Phase 4: Testing

- [ ] 4.1 Probar GET /pt/foundation → contenido PT
- [ ] 4.2 Probar GET /es/foundation → contenido ES
- [ ] 4.3 Probar GET /en/foundation → contenido EN
- [ ] 4.4 Probar GET /pt/archive → contenido PT
- [ ] 4.5 Probar GET /es/archive → contenido ES
- [ ] 4.6 Probar GET /en/archive → contenido EN
- [ ] 4.7 Probar GET /pt/ → home PT
- [ ] 4.8 Probar GET /es/ → home ES
- [ ] 4.9 Probar GET /en/ → home EN
- [ ] 4.10 Verificar himnos NO se traducen en /library

## Phase 5: Cleanup y commit

- [ ] 5.1 Eliminar contenido hardcoded de páginas (reemplazado por JSON)
- [ ] 5.2 Commit cambios a develop
- [ ] 5.3 Actualizar TASKS.md con estado final

## Nota de implementación

- API: DeepSeek con modelo `deepseek-chat`
- Temperatura: 0.3 para traducciones consistentes
- Fallback: Si traducción no existe, usar PT