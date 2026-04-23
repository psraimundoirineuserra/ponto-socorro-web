# Delta for translation-full

## Purpose

Implementar sistema de traducción completo para navegación y páginas de contenido. La web debe detectar el locale de la URL y cargar el contenido apropiado en PT/ES/EN. Himnos permanecen en PT.

## ADDED Requirements

### Requirement: locale detection

El sistema DEBE detectar el locale de la URL usando `getLocaleFromUrl()`.

- GIVEN usuario accede a `/pt/foundation`
- WHEN la página carga
- THEN `locale` DEBE ser `'pt'`
- AND el contenido DEBE cargarse desde `content-pt.json`

- GIVEN usuario accede a `/es/archive`
- WHEN la página carga
- THEN `locale` DEBE ser `'es'`
- AND el contenido DEBE cargarse desde `content-es.json`

### Requirement: content loading

El sistema DEBE cargar contenido desde archivos JSON según el locale detectado.

- GIVEN `locale = 'pt'`
- WHEN `PageContent` renderiza
- THEN DEBE importar `content-pt.json`
- AND renderizar el contenido en português

- GIVEN `locale = 'es'`
- WHEN `PageContent` renderiza
- THEN DEBE importar `content-es.json`
- AND renderizar el contenido en español

### Requirement: fallback to PT

Si la traducción para un locale no existe, el sistema DEBE fallback a PT.

- GIVEN `locale = 'en'` Y no existe `content-en.json`
- WHEN `PageContent` renderiza
- THEN DEBE cargar `content-pt.json`
- AND usar contenido en português como fallback

### Requirement: ihmnos no traducidos

Los himnos NUNCA deben traducirse.

- GIVEN el usuario cambia de idioma a cualquier locale
- WHEN visita `/library` o `/library/[slug]`
- THEN los nombres y letras de himnos DEBEN permanecer en português

## MODIFIED Requirements

### Requirement: UI labels localization

Las labels de UI (navbar, footer, botones) DEBEN usar traducciones existentes en los archivos JSON.

- GIVEN `locale = 'es'`
- WHEN Navbar renderiza
- THEN DEBE mostrar `'Biblioteca'` del archivo `es.json`
- AND no usar hardcoded strings

### Requirement: pages receive locale prop

Todas las páginas DEBEN recibir `locale` del Layout.

- GIVEN página `foundation.astro`
- WHEN se renderiza
- THEN DEBE recibir `locale` desde Layout
- AND pasar locale a componentes que muestran contenido traducible

## Configuration

### Environment Variables
```
DEEPSEEK_API_KEY=your_api_key_here
DEEPSEEK_MODEL=deepseek-chat
```

### API Configuration
- Model: DeepSeek Chat (deepseek-chat)
- Temperature: 0.3 (para traducciones consistentes)
- Max tokens: 4000
- Output format: JSON

## Testing Scenarios

### Localization Tests
- [ ] GET /pt/ → UI en português
- [ ] GET /es/ → UI en español
- [ ] GET /en/ → UI en inglés
- [ ] GET /pt/foundation → Contenido biografia en português
- [ ] GET /es/foundation → Contenido biografia en español
- [ ] GET /en/foundation → Contenido biografia en inglés

### Fallback Tests
- [ ] GET /fr/ → Fallback a PT, UI em português
- [ ] GET / nonexistent → Fallback a PT

### Hinos Tests
- [ ] GET /pt/library → Himnarios en português
- [ ] GET /es/library → Himnarios en português (no traduce)
- [ ] GET /en/library → Himnarios en português (no traduce)