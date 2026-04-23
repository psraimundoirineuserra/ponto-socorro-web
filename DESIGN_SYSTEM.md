# Design System - Protosocorro

## 1. Identity

| Element | Value |
|---------|-------|
| **Name** | Ponto Socorro |
| **Full Name** | Centro Eclético da Fluente Luz Universal Wilson Carneiro de Souza (CEFLUWCS) |
| **Description** | Website institucional de comunidad religiosa/spiritual basada en la tradición del Santo Daime |
| **Founded** | 1987 |
| **Location** | Brasil |

---

## 2. Color Palette

### Core Colors

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `--color-canvas` | `#FAFAFA` | rgb(250, 250, 250) | Background principal. Superficie base de toda la página. |
| `--color-surface` | `#FFFFFF` | rgb(255, 255, 255) | Cards, elementos elevados, drawer, modales. Color de fondo para componentes. |
| `--color-primary` | `#1A1A1A` | rgb(26, 26, 26) | Títulos, texto primario, elementos que requieren máximo contraste. |
| `--color-secondary` | `#737373` | rgb(115, 115, 115) | Texto secundario, descripciones, labels. |
| `--color-accent-nature` | `#2C4C3B` | rgb(44, 76, 59) | CTAs principales, highlights, estados activos de pills. Verde bosque profundo. |
| `--color-border-subtle` | `rgba(0, 0, 0, 0.06)` | rgba(0,0,0,0.06) | Bordes sutiles en cards, inputs, elementos delimitadores. |

### Extended Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `text-primary` | `#1A1A1A` | Alias for primary |
| `text-secondary` | `#737373` | Alias for secondary |
| `bg-canvas` | `#FAFAFA` | Canvas background |
| `bg-surface` | `#FFFFFF` | Surface background |
| `bg-accent-nature` | `#2C4C3B` | Accent background |
| `border-subtle` | `rgba(0,0,0,0.06)` | Border color |

---

## 3. Typography

### Font Families

| Role | Font | Fallbacks |
|------|------|-----------|
| **Headings** | `'Newsreader'` | `'Cormorant', Georgia, serif` |
| **Body** | `'Inter'` | `'Geist', system-ui, sans-serif` |
| **Mono** | (none currently) | — |

### Type Scale

| Class | Font Size | Line Height | Font Weight | Usage |
|-------|-----------|-------------|-------------|-------|
| `text-xs` | 0.75rem / 12px | 1rem | 400 | Labels pequeños, metadata |
| `text-sm` | 0.875rem / 14px | 1.25rem | 400/500 | Texto secundario, descriptions |
| `text-base` | 1rem / 16px | 1.5rem | 400 | Cuerpo de texto |
| `text-lg` | 1.125rem / 18px | 1.75rem | 400 | Texto destacado |
| `text-xl` | 1.25rem / 20px | 1.75rem | 400 | Subtítulos |
| `text-2xl` | 1.5rem / 24px | 2rem | 600 | Títulos de sección |
| `text-3xl` | 1.875rem / 30px | 2.25rem | 600 | Títulos principales |
| `text-4xl` | 2.25rem / 36px | 2.5rem | 600 | Headlines grandes |
| `text-5xl` | 3rem / 48px | 1.1 | 600 | Hero titles |
| `text-7xl` | 4.5rem / 72px | 1 | 600 | Hero titles (desktop) |

### Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| Regular | 400 | Body text, descriptions |
| Medium | 500 | Labels, emphasis |
| Semibold | 600 | Headings, titles |

### Text Styles

| Style | Classes | Usage |
|-------|---------|-------|
| Heading 1 | `font-serif text-4xl font-semibold` | Page titles |
| Heading 2 | `font-serif text-3xl font-semibold` | Section titles |
| Heading 3 | `font-serif text-xl font-medium` | Card titles |
| Body | `text-base text-secondary` | Paragraph text |
| Label | `text-xs uppercase tracking-wider` | Category labels |
| Link | `text-sm text-secondary hover:text-primary` | Navigation links |

---

## 4. Spacing

### Tailwind Scale

| Token | Value | Usage |
|-------|-------|-------|
| `px-6` | 24px | Padding horizontal típico |
| `py-16` | 64px | Padding vertical secciones |
| `py-24` | 96px | Secciones con más espacio |
| `py-32` | 128px | Secciones hero/manifesto |
| `gap-3` | 12px | Espaciado pequeño |
| `gap-4` | 16px | Espaciado entre elementos |
| `gap-6` | 24px | Espaciado mediano |
| `gap-8` | 32px | Espaciado grande (nav items) |
| `gap-12` | 48px | Espaciado entre columnas |

### Custom Spacing

| Token | Value | Usage |
|-------|-------|-------|
| `--spacing-18` | 4.5rem / 72px | Spacing personalizado |
| `--spacing-88` | 22rem / 352px | Spacing grande |
| `--spacing-128` | 32rem / 512px | Spacing máximo |

### Container

| Class | Max Width | Usage |
|-------|----------|-------|
| `max-w-6xl` | 1152px | Contenedor principal de secciones |
| `max-w-4xl` | 896px | Contenedor de contenido estrecho (textos, artículos) |
| `max-w-2xl` | 672px | Contenedor máximo para lecturas |
| `max-w-md` | 448px | Cart drawer width |

---

## 5. Components

### 5.1 Buttons

#### Primary Button
```html
<button class="bg-primary text-surface py-3 px-6 font-medium hover:opacity-80 transition-opacity">
```
- Background: `bg-primary` (#1A1A1A)
- Text: `text-surface` (blanco)
- Padding: `py-3 px-6`
- Font: `font-medium`
- Hover: `hover:opacity-80`
- Transition: `transition-opacity`

#### Secondary Button
```html
<a class="border border-subtle px-6 py-3 rounded-full hover:bg-surface transition-colors">
```
- Border: `border border-subtle`
- Padding: `py-3 px-6`
- Border radius: `rounded-full` (pill shape)
- Hover: `hover:bg-surface`
- Transition: `transition-colors`

#### Ghost Button
```html
<button class="text-secondary hover:text-primary transition-colors">
```
- No background/border
- Hover: text color change

### 5.2 Cards

#### Product Card
```html
<div class="bg-surface border border-border-subtle hover:border-accent-nature/30 transition-colors">
```
- Background: `bg-surface`
- Border: `border border-border-subtle`
- Hover: `hover:border-accent-nature/30` (verde con 30% opacity)
- Transition: `transition-colors`

#### Archive/Document Card
```html
<div class="p-6 bg-surface border border-subtle">
```
- Similar a ProductCard pero sin hover effect

### 5.3 Pills / Category Pills

```html
<!-- Inactive -->
<div class="px-5 py-2.5 text-sm font-medium rounded-full bg-surface border border-border-subtle hover:border-accent-nature/30">

<!-- Active -->
<div class="px-5 py-2.5 text-sm font-medium rounded-full bg-accent-nature text-white">
```
- Padding: `px-5 py-2.5`
- Border radius: `rounded-full`
- Active state: `bg-accent-nature text-white`
- Inactive: `bg-surface border border-border-subtle`
- Count badge: `(N)` inline después del nombre

### 5.4 Navigation

#### Navbar Links
```html
<a class="text-sm font-medium text-secondary hover:text-primary transition-colors">
```
- Font: `text-sm font-medium`
- Color: `text-secondary`
- Hover: `hover:text-primary`
- Active: `text-primary` (when current page)

#### Language Switcher
```html
<a class="text-xs uppercase text-secondary hover:text-primary transition-colors">
```
- Size: `text-xs`
- Transform: `uppercase`
- Spacing: `gap-2` between items

### 5.5 Inputs

```html
<input class="w-full px-4 py-3 bg-surface border border-border-subtle rounded-lg focus:border-accent-nature focus:outline-none">
```
- Height: `py-3` (48px)
- Border: `border border-border-subtle`
- Focus: `focus:border-accent-nature`
- Border radius: `rounded-lg`

### 5.6 Drawer (Cart)

```html
<div class="fixed inset-y-0 right-0 w-full max-w-md bg-surface shadow-xl transform translate-x-full transition-transform duration-300">
```
- Position: `fixed inset-y-0 right-0`
- Width: `max-w-md` (448px)
- Background: `bg-surface`
- Shadow: `shadow-xl`
- Animation: `transform translate-x-full` (slide from right)
- Transition: `transition-transform duration-300`

### 5.7 Overlays

```html
<div class="fixed inset-0 z-40 bg-black/50 opacity-0 pointer-events-none transition-opacity duration-300">
```
- Background: `bg-black/50` (50% black overlay)
- Opacity: `opacity-0` (hidden), `opacity-100` (visible)
- Pointer events: `pointer-events-none` (when hidden)
- Z-index: `z-40`
- Transition: `transition-opacity duration-300`

---

## 6. Motion & Animation

### Transition Durations

| Class | Duration | Usage |
|-------|----------|-------|
| `duration-200` | 200ms | Quick hover states, color changes |
| `duration-300` | 300ms | Drawer open/close, overlays |
| `duration-500` | 500ms | Image scale on hover |

### Hover Effects

| Effect | Classes | Usage |
|--------|---------|-------|
| Opacity change | `hover:opacity-80` | Buttons, images |
| Scale image | `group-hover:scale-105` | Product card images |
| Border color | `hover:border-accent-nature/30` | Cards |
| Background | `hover:bg-surface` | Buttons, pills |
| Transform | `hover:-translate-y-1` | Cards (future) |

### State Transitions

| Pattern | Classes | Usage |
|---------|---------|-------|
| Color transition | `transition-colors` | Links, buttons |
| Transform transition | `transition-transform` | Drawers, modals |
| Opacity transition | `transition-opacity` | Overlays, buttons |
| All | `transition-all` | General purpose |

### Scroll Behavior

```css
scrollbar-width: none; /* Firefox */
::-webkit-scrollbar { display: none; } /* Chrome/Safari */
```
Used on horizontal scrolling elements (CategoryPills).

---

## 7. Iconography

### Icon Approach

- Use inline SVG for simple icons
- Icon size: `w-6 h-6` (24px) for navigation, `w-5 h-5` (20px) for inline
- Stroke width: `2` for most icons
- CurrentColor for all icons (inherits text color)

### Icons Used

| Icon | Usage | Example |
|------|-------|---------|
| Arrow (→) | CTAs, links | `→` text |
| Close (X) | Modals, drawers | `d="M6 18L18 6M6 6l12 12"` |
| Menu | Mobile nav | `d="M4 6h16M4 12h16M4 18h16"` |
| Cart | Shopping cart | `d="M3 3h2l.4 2M7 13h10l4-8H5.4..."` |
| Heart | Favorites (future) | `d="M12 21.35l-1.45-1.32..."` |

### Music Notes

Used in HymnCard: `♪` (text character, not SVG)

---

## 8. Layout & Structure

### Page Structure

```
<body class="min-h-screen flex flex-col bg-canvas text-primary antialiased">
  <Navbar />        <!-- h-16 + backdrop-blur -->
  <main class="flex-1">
    [Page content]
  </main>
  <Footer />
  <CartDrawer />    <!-- Fixed overlay -->
  <PersistentPlayer /> <!-- Fixed bottom -->
</body>
```

### Section Spacing

| Section | Padding | Purpose |
|---------|---------|---------|
| Standard | `py-16 px-6` | Default content sections |
| Large | `py-24 px-6` | Coordinates, HinarioPreview |
| Hero/Manifesto | `py-32 px-6` | Full-height hero, manifesto |
| Compact | `py-8 px-6` | Headers, footers |

### Grid System

- Main content: `max-w-6xl mx-auto`
- 2-column grid: `grid grid-cols-1 md:grid-cols-2 gap-12`
- 3-column grid: `grid grid-cols-1 md:grid-cols-3 gap-6`
- 4-column (coordinates): `grid grid-cols-2 md:grid-cols-4 gap-12`

### Responsive Breakpoints

| Breakpoint | Prefix | Usage |
|------------|--------|-------|
| Mobile | (default) | < 768px |
| Medium | `md:` | ≥ 768px |
| Large | `lg:` | ≥ 1024px |

---

## 9. Shadows & Elevation

| Class | Usage |
|-------|-------|
| `shadow-xl` | Cart drawer, modals |
| `shadow-sm` | Subtle elevation (future) |

---

## 10. Z-Index Scale

| Value | Element |
|-------|---------|
| `z-10` | Decorative elements |
| `z-40` | Cart backdrop |
| `z-50` | Cart drawer, fixed elements |
| `z-50` | Navbar |

---

## Appendix: CSS Variables Reference

```css
/* Colors */
--color-canvas: #FAFAFA;
--color-surface: #FFFFFF;
--color-primary: #1A1A1A;
--color-secondary: #737373;
--color-accent-nature: #2C4C3B;
--color-border-subtle: rgba(0, 0, 0, 0.06);

/* Fonts */
--font-serif: 'Newsreader', 'Cormorant', Georgia, serif;
--font-sans: 'Inter', 'Geist', system-ui, sans-serif;

/* Spacing */
--spacing-18: 4.5rem;
--spacing-88: 22rem;
--spacing-128: 32rem;
```

---

## Usage Guidelines

### Do

- Use `--color-*` tokens for colors in components
- Use `font-serif` for headings, `font-sans` for body
- Use `text-secondary` for descriptions and metadata
- Use `transition-colors` for interactive elements
- Use `border border-border-subtle` for card borders
- Use `bg-accent-nature` for primary CTAs

### Don't

- Use hardcoded hex colors (use tokens)
- Use font weights outside 400/500/600
- Use `duration` values outside 200/300/500
- Use z-index values above 50 without reason
- Hardcode font families (use Tailwind classes)