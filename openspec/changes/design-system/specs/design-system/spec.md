# Specs: design-system

## Requirements

### Requirement: Document color palette

The design system must document:
- `--color-canvas: #FAFAFA` - Background principal
- `--color-surface: #FFFFFF` - Cards, elevated surfaces
- `--color-primary: #1A1A1A` - Headings, primary text
- `--color-secondary: #737373` - Body text, descriptions
- `--color-accent-nature: #2C4C3B` - CTAs, highlights (verde bosque)
- `--color-border-subtle: rgba(0,0,0,0.06)` - Subtle borders

For each color include:
- Token name
- Hex value
- Usage (where it's applied)
- CSS variable reference

### Requirement: Document typography system

- Headings: `'Newsreader', 'Cormorant', Georgia, serif`
- Body: `'Inter', 'Geist', system-ui, sans-serif`
- Font scale (text-sm, text-base, text-lg, text-xl, text-2xl, etc.)
- Font weights used

### Requirement: Document spacing system

- Current Tailwind spacing tokens
- Custom spacing from global.css: `--spacing-18: 4.5rem`, `--spacing-88: 22rem`, `--spacing-128: 32rem`

### Requirement: Document component patterns

Document visual patterns for:
- **Buttons**: Primary (bg-primary text-surface), Secondary (border subtle)
- **Cards**: bg-surface border border-subtle, hover:border-accent-nature/30
- **Pills/CategoryPills**: rounded-full, active state bg-accent-nature
- **Forms**: Input styles (if any)
- **Navigation**: Link styles, active states

### Requirement: Document motion principles

- Transition durations: `duration-200`, `duration-300`, `duration-500`
- Hover effects: `hover:opacity-80`, `hover:scale-105`
- State changes: `transition-colors`, `transition-transform`

## Test Scenarios

| Check | Expected |
|-------|----------|
| Color tokens documented | All 6 colors with hex and usage |
| Typography documented | Both font families with fallbacks |
| Spacing documented | Scale documented |
| Components documented | All key patterns documented |
| Motion documented | Transition principles documented |