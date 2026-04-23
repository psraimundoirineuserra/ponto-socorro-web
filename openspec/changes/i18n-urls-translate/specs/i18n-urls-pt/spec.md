# Specs: i18n-urls-translate

## Requirements

### Requirement: Each locale has translated URLs

| Locale | Home | Shop | Foundation | Library | Archive |
|--------|------|------|------------|---------|---------|
| PT | / | /loja | /fundacao | /hinarios | /arquivo |
| ES | / | /tienda | /fundacion | /himnarios | /archivo |
| EN | / | /shop | /foundation | /library | /archive |

### Requirement: Navbar links use correct translated URLs

- GIVEN user is on /pt/loja
- WHEN they see navbar links
- THEN "Loja" links to /pt/loja, "Fundação" to /pt/fundacao, etc.

- GIVEN user is on /es/tienda
- WHEN they see navbar links  
- THEN "Tienda" links to /es/tienda, "Fundación" to /es/fundacion

- GIVEN user is on /en/shop
- WHEN they see navbar links
- THEN "Shop" links to /en/shop, "Foundation" to /en/foundation

### Requirement: Old URLs redirect

- GIVEN user visits /es/shop (old URL)
- THEN redirect to /es/tienda (301)

## Test Scenarios

| URL | Expected |
|-----|----------|
| /pt/loja | Shop in Portuguese |
| /es/tienda | Shop in Spanish |
| /en/shop | Shop in English |
| /pt/fundacao | Foundation in Portuguese |
| /es/fundacion | Foundation in Spanish |
| /es/himnarios | Library in Spanish |
| /pt/arquivo | Archive in Portuguese |