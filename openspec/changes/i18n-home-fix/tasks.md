# Tasks: i18n-home-fix

## Phase 1: Update [lang]/index.astro

- [x] 1.1 Pass `locale={lang}` prop to Hero component
- [x] 1.2 Pass `locale={lang}` prop to Manifesto component
- [x] 1.3 Pass `locale={lang}` prop to Coordinates component
- [x] 1.4 Pass `locale={lang}` prop to HinarioPreview component

## Phase 2: Update Hero.astro

- [x] 2.1 Add `locale` prop interface
- [x] 2.2 Change `useTranslations('es')` to `useTranslations(locale)`
- [x] 2.3 Update link href to use locale-aware path

## Phase 3: Update Coordinates.astro

- [x] 3.1 Add `locale` prop interface
- [x] 3.2 Change `useTranslations('es')` to `useTranslations(locale)`
- [x] 3.3 Replace hardcoded "Idiomas" with `t.coordinates.languages`

## Phase 4: Update HinarioPreview.astro

- [x] 4.1 Add `locale` prop interface
- [x] 4.2 Change `useTranslations('es')` to `useTranslations(locale)`
- [x] 4.3 Replace hardcoded "Ver todos →" with `t.home.preview.seeAll`
- [x] 4.4 Update link href to use locale-aware path

## Phase 5: Update Manifesto.astro (extends manifesto-fix)

- [x] 5.1 Add `locale` prop interface
- [x] 5.2 Load content from `content-{locale}.json` with fallback to PT
- [x] 5.3 Render `manifesto.title` and `manifesto.body` (HTML)

## Phase 6: Update JSON files with missing keys

- [x] 6.1 Add `coordinates.languages` key to pt.json, es.json, en.json
- [x] 6.2 Add `home.preview.seeAll` key to pt.json, es.json, en.json
- [x] 6.3 Add full `manifesto.body` to content-pt.json (3 paragraphs HTML)

## Phase 7: Re-translate with DeepSeek

- [x] 7.1 Run translate script: `DEEPSEEK_API_KEY=... node scripts/translate.ts`
- [x] 7.2 Verify content-es.json has Spanish manifesto
- [x] 7.3 Verify content-en.json has English manifesto

## Phase 8: Testing

- [x] 8.1 Test /pt/ - all content in Portuguese
- [x] 8.2 Test /es/ - all content in Spanish
- [x] 8.3 Test /en/ - all content in English
- [x] 8.4 Verify no mixed languages on any page