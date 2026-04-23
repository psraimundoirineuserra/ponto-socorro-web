# Tasks: manifesto-fix

## Phase 1: Fix Manifesto.astro

- [ ] 1.1 Modify Manifesto.astro to accept `locale` prop
- [ ] 1.2 Update Manifesto.astro to load content from JSON based on locale
- [ ] 1.3 Add fallback to PT if content file missing

## Phase 2: Update PT content with full manifesto

- [ ] 2.1 Add `manifesto.body` to content-pt.json with full HTML content

## Phase 3: Re-translate with DeepSeek

- [ ] 3.1 Re-run translate script for home content (PT → ES, PT → EN)
- [ ] 3.2 Verify content-es.json has full Spanish translation
- [ ] 3.3 Verify content-en.json has full English translation

## Phase 4: Verify

- [ ] 4.1 Test /pt/ shows Portuguese manifesto only
- [ ] 4.2 Test /es/ shows Spanish manifesto only
- [ ] 4.3 Test /en/ shows English manifesto only