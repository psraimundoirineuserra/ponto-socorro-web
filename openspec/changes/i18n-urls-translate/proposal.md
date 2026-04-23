# Proposal: i18n-urls-translate

## Intent

Translate all page URLs to match the language of each locale. Each locale should have URLs in its own language.

## Scope

### Current URLs (all English)
- /shop → needs PT, ES, EN versions
- /foundation → needs PT, ES, EN versions
- /library → needs PT, ES, EN versions
- /archive → needs PT, ES, EN versions

### Target URLs (translated to each language)

| Page | Portuguese | Spanish | English |
|------|-------------|----------|----------|
| Home | / | / | / |
| Shop | /loja | /tienda | /shop |
| Foundation | /fundacao | /fundacion | /foundation |
| Library | /hinarios | /himnarios | /library |
| Archive | /arquivo | /archivo | /archive |

### Included
- Rename routes in [lang]/ pages to Portuguese
- Update Navbar/Footer links for each locale
- Add redirects from old URLs to new translated URLs
- Test all routes

## Approach

1. Create new route directories: /pt/loja, /pt/fundacao, /pt/hinarios, /pt/arquivo (and same for es, en)
2. Update Navbar to use translated paths
3. Add redirects from old paths to new paths
4. Test in dev server

## Success Criteria

- /pt/loja shows shop in Portuguese
- /es/tienda shows shop in Spanish
- /en/shop shows shop in English
- Same for all pages