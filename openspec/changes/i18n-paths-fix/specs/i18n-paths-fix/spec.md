# Specs: i18n-paths-fix

## Requirements

### Requirement: Correct property path for languages

- GIVEN Coordinates.astro renders
- WHEN accessing languages translation
- THEN use `t.home.coordinates.languages`
- AND NOT `t.coordinates.languages`

### Requirement: Correct import path for Manifesto content

- GIVEN Manifesto.astro renders
- WHEN importing content JSON
- THEN use path `../../i18n/content/home/content-{locale}.json`
- AND NOT `../i18n/content/home/content-{locale}.json`

## Test Scenarios

| URL | Expected |
|-----|----------|
| /pt/ | Renders without errors |
| /es/ | Renders without errors |
| /en/ | Renders without errors |