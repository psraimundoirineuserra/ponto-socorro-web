# Design: design-system

## Output Location

`DESIGN_SYSTEM.md` at project root:
```
protosocorro/
├── DESIGN_SYSTEM.md  ← This document
├── src/
├── public/
└── ...
```

## Document Structure

```markdown
# Design System - Protosocorro

## 1. Identity
- Name: Ponto Socorro
- Full name: Centro Eclético da Fluente Luz Universal Wilson Carneiro de Souza (CEFLUWCS)
- Description: Religious/spiritual community website

## 2. Color Palette
[Table with token, hex, usage]

## 3. Typography
[Font families, scale]

## 4. Spacing
[Spacing scale]

## 5. Components
[Card, Button, Pill, Navigation patterns]

## 6. Motion
[Transitions, animations]

## 7. Iconography
[SVG icons used]

## 8. Layout
[Grid, container patterns]
```

## Data Sources

Extract from:
- `src/styles/global.css` - colors, fonts
- `src/components/**/*.astro` - component patterns
- `src/components/*/` - existing component styles

## Validation

The document should match the actual implementation. Any discrepancies should be noted.