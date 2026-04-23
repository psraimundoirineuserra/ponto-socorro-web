# Delta for Design System Enhanced

## ADDED Requirements

### Requirement: Concept & Vision Section

The DESIGN_SYSTEM_V2.md document MUST include a "Concept & Vision" section that reflects the spiritual identity of CEFLUWCS (Centro Eclético da Fluente Luz Universal Wilson Carneiro de Souza).

The section SHALL reference:
- The origins with Mestre Raimundo Irineu Serra
- The mission of "Pronto Socorro de Cura" given to Wilson Carneiro
- The continuation through Padrinho Raimundo Nonato (Nonato)
- The hinário "Linha de Arrochim" as the doctrinal musical collection

### Requirement: Visual Theme Section

The document MUST include a "Visual Theme" section describing the atmospheric quality of the website.

The section MUST define:
- Light theme as the primary (based on current canvas #FAFAFA)
- Emotional attributes: serenity, spiritual depth, Amazonian nature connection
- Reference to "floresta" and "cura" through color and typography choices

### Requirement: Color Roles Enhancement

The document MUST expand color usage to include:
- Background surfaces layered (canvas, surface, elevated)
- Text hierarchy (primary, secondary, tertiary)
- Brand accent usage (accent-nature for CTAs and highlights)
- Status colors for future states (info, success, warning)

### Requirement: Do's and Don'ts Section

The document MUST include clear guidelines formatted as:

**Do:**
- Use Newsreader serif for all headings
- Use Inter sans-serif for body text
- Use accent-nature (#2C4C3B) for primary CTAs
- Maintain subtle borders with rgba(0,0,0,0.06)

**Don't:**
- Use hardcoded hex colors instead of CSS variables
- Mix serif/sans font roles (headings MUST be serif)
- Use z-index values above 50 without specific reason
- Use duration values outside 200/300/500ms

### Requirement: Component Examples Section

The document MUST include copy-ready code examples for:

1. Primary Button
2. Secondary Button (pill variant)
3. Card component
4. Category Pill (active/inactive states)
5. Form Input
6. Navigation link

Each example MUST include:
- Visual preview description
- Tailwind classes used
- CSS variables referenced

## REMOVED Requirements

None. This is purely additive - existing DESIGN_SYSTEM.md remains unchanged.

## Scenarios

### Scenario: Reading design system for new feature

- GIVEN a developer needs to implement a new page
- WHEN they consult DESIGN_SYSTEM_V2.md
- THEN they find Concept & Vision explaining the spiritual mission
- AND Color Palette with hex values and usage
- AND Typography with font choices and scale
- AND Component examples they can copy

### Scenario: Verifying design consistency

- GIVEN a designer or developer checking UI against design system
- WHEN they compare components to Do's and Don'ts
- THEN they can verify compliance with clear pass/fail criteria

### Scenario: Referencing institutional history

- GIVEN someone researching the Centro's background
- WHEN they read Concept & Vision
- THEN they understand Padrinho Wilson's mission and lineage to Nonato