# Design: i18n-fix

## Technical Approach

Modificar `src/i18n/index.ts` para cambiar el idioma default a PT y hacer que `changeLanguage()` preserve la ruta actual del usuario añadiendo el prefijo de idioma a la URL.

**Nota**: Este cambio requiere que todas las rutas de la aplicación soporten prefijo de idioma (`/pt/foundation`, `/es/foundation`, `/en/foundation`).

## Architecture Decisions

### Decision: Locale prefix en todas las rutas

**Choice**: Las URLs tendrán formato `/{locale}/ruta` (ej: `/pt/foundation`, `/es/library`)

**Alternatives considered**:
- Mantener URLs simples sin prefijo y usar cookies/sessionStorage para idioma
- Subdominio por idioma (`pt.domain.com`)

**Rationale**: Más explícito para SEO y permite linking directo a versiones específicas de idioma.

### Decision: Fallback a defaultLocale

**Choice**: Si la URL no tiene prefijo de idioma, se usa `defaultLocale` (PT)

**Alternatives considered**: 404 para URLs sin prefijo

**Rationale**: backwards compatible con URLs existentes y mejor UX.

## Data Flow

```
Usuario accede a /foundation
    → getLocaleFromUrl() extrae locale de URL
    → Si no hay prefijo, usa defaultLocale ('pt')
    → Layout pasa locale a componentes
    → Navbar muestra idioma activo

Usuario hace click en "ES" en Navbar
    → changeLanguage('es') calcula nueva URL
    → current pathname = '/foundation'
    → retorna '/es/foundation'
    → navigate('/es/foundation')
```

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `src/i18n/index.ts` | Modify | Cambiar defaultLocale + update changeLanguage() |

## Interface Changes

### changeLanguage(locale, pathname?)

```typescript
// Antes
export function changeLanguage(lang: Locale): string {
  return `/${lang}`;
}

// Después
export function changeLanguage(lang: Locale, pathname?: string): string {
  const path = pathname ?? Astro.url.pathname;
  // Remove existing locale prefix if present
  const cleanPath = path.replace(/^\/(es|en|pt)/, '');
  return `/${lang}${cleanPath || '/'}`;
}
```

### getLocaleFromUrl(url: URL)

```typescript
// Ya existe, pero debe manejar caso sin prefijo
export function getLocaleFromUrl(url: URL): Locale {
  const segments = url.pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  if (locales.includes(firstSegment as Locale)) {
    return firstSegment as Locale;
  }
  return defaultLocale; // 'pt'
}
```

## Open Questions

- [ ] Las páginas existentes (Home, Library, etc.) ¿necesitan Route redirects para `/foundation` → `/pt/foundation`?
- [ ] ¿El navbar debe mostrar el prefijo de idioma actual en la URL?

## Rollback

```bash
git checkout -- src/i18n/index.ts
```

No se requiere migración de datos.