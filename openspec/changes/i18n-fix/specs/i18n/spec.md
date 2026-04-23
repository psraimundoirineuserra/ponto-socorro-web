# Delta for i18n

## Purpose

Arreglar el sistema de idiomas para que PT sea el idioma default y los cambios de idioma preserven la ruta actual del usuario.

## MODIFIED Requirements

### Requirement: defaultLocale

El idioma por defecto de la aplicación DEBE ser `'pt'` (portugués).

- GIVEN el usuario accede a `/`
- WHEN la página carga sin параметр de idioma en la URL
- THEN el contenido DEBE mostrarse en portugués

(Previously: `'es'`)

### Requirement: changeLanguage()

La función `changeLanguage()` DEBE aceptar el idioma target y retornar la ruta completa preservando la URL actual.

- GIVEN el usuario está en `/foundation`
- WHEN hace click para cambiar a español
- THEN la función DEBE retornar `'/es/foundation'`
- AND la URL DEBE cambiar a `domain.com/es/foundation`

- GIVEN el usuario está en `/library/hinos-da-cura`
- WHEN hace click para cambiar a inglés
- THEN la función DEBE retornar `'/en/library/hinos-da-cura'`

### Requirement: getLocaleFromUrl()

La función `getLocaleFromUrl()` DEBE extraer el idioma de la URL actual correctamente.

- GIVEN el usuario accede a `/pt/foundation`
- WHEN se llama `getLocaleFromUrl()`
- THEN DEBE retornar `'pt'`

- GIVEN el usuario accede a `/es/library`
- WHEN se llama `getLocaleFromUrl()`
- THEN DEBE retornar `'es'`

- GIVEN el usuario accede a `/`
- WHEN se llama `getLocaleFromUrl()`
- THEN DEBE retornar el defaultLocale (`'pt'`)

### Requirement: Navbar locale selection

El navbar DEBE mostrar el idioma activo y permitir cambiar entre PT/ES/EN.

- GIVEN el usuario accede a `/`
- WHEN el navbar renderiza
- THEN DEBE mostrar `'PT'` como activo (porque es el default)
- AND `'ES'` y `'EN'` como inactivos

- GIVEN el usuario está en `/foundation` (sin prefijo de idioma)
- WHEN hace click en `'ES'` en el navbar
- THEN DEBE navegar a `/es/foundation`
- AND el navbar DEBE mostrar `'ES'` como activo