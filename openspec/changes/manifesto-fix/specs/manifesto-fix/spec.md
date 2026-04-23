# Specs: manifesto-fix

## Requirements

### Requirement: Manifesto loads from JSON by locale

- GIVEN user visits `/pt/`
- WHEN Manifesto component renders
- THEN content should load from `src/i18n/content/home/content-pt.json`
- AND render `manifesto.title` and `manifesto.body` in Portuguese only

- GIVEN user visits `/es/`
- WHEN Manifesto component renders
- THEN content should load from `src/i18n/content/home/content-es.json`
- AND render all content in Spanish only

- GIVEN user visits `/en/`
- WHEN Manifesto component renders
- THEN content should load from `src/i18n/content/home/content-en.json`
- AND render all content in English only

### Requirement: No mixed content

- GIVEN manifesto renders in any locale
- THEN all visible text must be in that locale
- AND no sentences from other languages appear

### Requirement: Fallback to PT

- GIVEN content file for locale doesn't exist
- WHEN Manifesto renders
- THEN use content-pt.json as fallback

## Test Scenarios

| Scenario | URL | Expected |
|----------|-----|----------|
| PT home | /pt/ | Manifesto in Portuguese only |
| ES home | /es/ | Manifesto in Spanish only |
| EN home | /en/ | Manifesto in English only |