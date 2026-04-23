# Design: i18n-urls-translate

## Approach

We need to restructure the routes. The easiest way in Astro is to use multiple getStaticPaths entries.

## Structure

### New routes using Astro's getStaticPaths

Instead of modifying the current [lang]/ pages, we keep them as fallback and create new route aliases.

Actually, Astro doesn't support multiple route paths easily. The better approach is:

### Option: Create index.astro files in subdirectories

```
src/pages/
├── [lang]/
│   ├── index.astro       # /pt/, /es/, /en/
│   ├── loja/           # Portuguese
│   │   └── index.astro  # /pt/loja
│   ├── tienda/          # Spanish
│   │   └── index.astro # /es/tienda
│   ├── shop/           # English
│   │   └── index.astro # /en/shop and /shop
│   ├── fundacao/        # Portuguese
│   │   └── index.astro # /pt/fundacao
│   ├── fundacion/      # Spanish
│   │   └── index.astro # /es/fundacion
│   ├── foundation/     # English
│   │   └── index.astro # /en/foundation and /foundation
│   ├── hinarios/       # Portuguese
│   │   └── index.astro # /pt/hinarios
│   ├── himnarios/      # Spanish
│   │   └── index.astro # /es/himnarios
│   ├── library/        # English
│   │   └── index.astro # /en/library and /library
│   ├── arquivo/        # Portuguese
│   │   └── index.astro # /pt/arquivo
│   ├── archivo/        # Spanish
│   │   └── index.astro # /es/archivo
│   └── archive/        # English
│       └── index.astro # /en/archive and /archive
```

This is complex. Alternative approach:

### Simpler Option: Use Navbar links that navigate to correct paths

But maintain current [lang]/ pages with same content. The URLs would stay:
- /pt/shop (shows shop in PT)
- /es/shop (shows shop in ES)
- /en/shop (shows shop in EN)

User wants the URLs translated. Let me reconsider...

### Final Decision: Create route aliases

Create symlinks or use getStaticPaths to generate multiple paths per page:

```astro
// [lang]/loja/index.astro - same as [lang]/shop/index.astro but locale=pt
```

Actually the simplest is to create new index files that render the same components.

Let me create the directories:
- src/pages/[lang]/loja/index.astro → copy of src/pages/[lang]/shop/index.astro
- src/pages/[lang]/tienda/index.astro → copy of src/pages/[lang]/shop/index.astro
- etc.