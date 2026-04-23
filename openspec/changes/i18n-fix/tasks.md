# Tasks: i18n-fix

## Phase 1: Modify i18n/index.ts

- [ ] 1.1 Actualizar `defaultLocale` de `'es'` a `'pt'`
- [ ] 1.2 Modificar `changeLanguage()` para aceptar `pathname` opcional
- [ ] 1.3 Implementar lógica de limpiar prefijo de idioma existente de la URL
- [ ] 1.4 Verificar `getLocaleFromUrl()` maneja caso sin prefijo

## Phase 2: Testing

- [ ] 2.1 Verificar que `http://localhost:4321` muestra PT por defecto
- [ ] 2.2 Verificar que `/es/foundation` muestra contenido en español
- [ ] 2.3 Verificar que `/en/library` muestra contenido en inglés
- [ ] 2.4 Probar cambio de idioma en navbar desde `/` → `/es`
- [ ] 2.5 Probar cambio de idioma en navbar desde `/foundation` → `/es/foundation`
- [ ] 2.6 Verificar navbar muestra "PT" activo al cargar sin prefijo