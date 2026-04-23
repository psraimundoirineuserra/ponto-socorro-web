# Design System v2 — Protosocorro

> **Note**: This document coexists with `DESIGN_SYSTEM.md`. Both should be referenced — v1 for technical tokens, v2 for conceptual guidance and examples.

---

## 1. Concept & Vision

### Alma do Projeto

O website do **Centro Eclético da Fluente Luz Universal Wilson Carneiro de Souza (CEFLUWCS)** é mais que uma presença digital — é uma extensão virtual da missão espiritual que Padrinho Wilson Carneiro recebeu de Mestre Raimundo Irineu Serra em 1961.

**A origem**: Quando o filho de Wilson adoeceu gravemente e a medicina convencional não ofereceu resposta, ele buscou cura no Alto Santo. Ali, Mestre Irineu curou Wilson e seu filho, e posteriormente confiou a Wilson a missão de zelar por um **Pronto Socorro de Cura** — uma casa onde nenhum doente seria rejeitado.

**A missão continuadora**: Após o falecimento de Padrinho Wilson em 1998, seu filho **Padrinho Raimundo Nonato** (Nonato) assumiu a condução do Pronto Socorro, recebendo seus próprios hinários ("O Peregrino", "Aconteceu") e consolidando o que hoje conhecemos como CEPSERIS — Centro e Pronto Socorro Espiritual Raimundo Irineu Serra.

### Identidade Visual

A estética do Protosocorro reflete:

- **Serenidade** — espaços respidados, cores suaves, tipografia elegante
- **Profundidade espiritual** — sem ostentação, com reverência aos mestres
- **Conexão com a floresta amazônica** — tons terrosos e verdes natureza
- **Cura** — acolhimento, acolhimento, firmeza doutrinária

### Referências Doutrinais

- **Hinário**: "Linha de Arrochim" — hinário de cura de Padrinho Wilson
- **Linhagem**: Mestre Irineu → Padrinho Wilson → Padrinho Nonato
- **Centro**: CEFLUWCS / CEPSERIS — Pronto Socorro Espiritual Raimundo Irineu Serra

---

## 2. Visual Theme

### Atmosfera

O website evoca um espaço de **reflexão e cura** — não agressivo, não comercial. A luz é suave, os elementos têm respiro, a presença é firme mas acolhedora.

### Light Theme (Primário)

| Element | Value | Usage |
|---------|-------|-------|
| Background | `#FAFAFA` | Canvas base — suave, não-ofuscante |
| Surface | `#FFFFFF` | Cards, elementos elevados |
| Text Primary | `#1A1A1A` | Títulos, texto principal |
| Text Secondary | `#737373` | Descrições, metadata |

### Emotional Attributes

- **Sereno**: transições suaves, sem movimentos bruscos
- **Profundo**: hierarquia clara, informação bem organizada
- **Natural**: cor accent-nature evoca floresta amazônica
- **Acolhedor**: bordas sutis, sombras leves, radius generosos

---

## 3. Color Palette

### Core Colors

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `--color-canvas` | `#FAFAFA` | rgb(250, 250, 250) | Background principal. Superfície base de toda a página. |
| `--color-surface` | `#FFFFFF` | rgb(255, 255, 255) | Cards, elementos elevados, drawer, modais. |
| `--color-primary` | `#1A1A1A` | rgb(26, 26, 26) | Títulos, texto primario, elementos que requerem máximo contraste. |
| `--color-secondary` | `#737373` | rgb(115, 115, 115) | Texto secundário, descrições, labels. |
| `--color-accent-nature` | `#2C4C3B` | rgb(44, 76, 59) | CTAs principais, highlights, estados ativos de pills. Verde floresta profundo. |
| `--color-border-subtle` | `rgba(0, 0, 0, 0.06)` | rgba(0,0,0,0.06) | Bordas sutis em cards, inputs, elementos delimitadores. |

### Extended Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `text-primary` | `#1A1A1A` | Alias for primary |
| `text-secondary` | `#737373` | Alias for secondary |
| `bg-canvas` | `#FAFAFA` | Canvas background |
| `bg-surface` | `#FFFFFF` | Surface background |
| `bg-accent-nature` | `#2C4C3B` | Accent background |
| `border-subtle` | `rgba(0,0,0,0.06)` | Border color |

### Color Roles

| Role | Token | Usage |
|------|-------|-------|
| Background Base | `--color-canvas` | Página, seções de fundo |
| Elevated Surface | `--color-surface` | Cards, modais, drawers |
| Primary Text | `--color-primary` | Títulos, texto principal |
| Secondary Text | `--color-secondary` | Descrições, metadata |
| Brand Accent | `--color-accent-nature` | CTAs, links, destaques |
| Subtle Borders | `--color-border-subtle` | Delimitadores suaves |

---

## 4. Typography

### Font Families

| Role | Font | Fallbacks |
|------|------|-----------|
| **Headings** | `'Newsreader'` | `'Cormorant', Georgia, serif` |
| **Body** | `'Inter'` | `'Geist', system-ui, sans-serif` |
| **Mono** | (none currently) | — |

### Type Scale

| Class | Font Size | Line Height | Font Weight | Usage |
|-------|-----------|-------------|-------------|-------|
| `text-xs` | 0.75rem / 12px | 1rem | 400 | Labels pequenos, metadata |
| `text-sm` | 0.875rem / 14px | 1.25rem | 400/500 | Texto secundário, descriptions |
| `text-base` | 1rem / 16px | 1.5rem | 400 | Cuerpo de texto |
| `text-lg` | 1.125rem / 18px | 1.75rem | 400 | Texto destacado |
| `text-xl` | 1.25rem / 20px | 1.75rem | 400 | Subtítulos |
| `text-2xl` | 1.5rem / 24px | 2rem | 600 | Títulos de seção |
| `text-3xl` | 1.875rem / 30px | 2.25rem | 600 | Títulos principais |
| `text-4xl` | 2.25rem / 36px | 2.5rem | 600 | Headlines grandes |
| `text-5xl` | 3rem / 48px | 1.1 | 600 | Hero titles |
| `text-7xl` | 4.5rem / 72px | 1 | 600 | Hero titles (desktop) |

### Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| Regular | 400 | Body text, descriptions |
| Medium | 500 | Labels, emphasis |
| Semibold | 600 | Headings, titles |

---

## 5. Spacing

### Tailwind Scale

| Token | Value | Usage |
|-------|-------|-------|
| `px-6` | 24px | Padding horizontal típico |
| `py-16` | 64px | Padding vertical seções |
| `py-24` | 96px | Seções com mais espaço |
| `py-32` | 128px | Seções hero/manifesto |
| `gap-3` | 12px | Espaciado pequeno |
| `gap-4` | 16px | Espaciado entre elementos |
| `gap-6` | 24px | Espaciado médio |
| `gap-8` | 32px | Espaciado grande (nav items) |
| `gap-12` | 48px | Espaciado entre colunas |

### Custom Spacing

| Token | Value | Usage |
|-------|-------|-------|
| `--spacing-18` | 4.5rem / 72px | Spacing personalizado |
| `--spacing-88` | 22rem / 352px | Spacing grande |
| `--spacing-128` | 32rem / 512px | Spacing máximo |

### Container

| Class | Max Width | Usage |
|-------|----------|-------|
| `max-w-6xl` | 1152px | Contenedor principal de seções |
| `max-w-4xl` | 896px | Contenedor de conteúdo estreito (textos, artigos) |
| `max-w-2xl` | 672px | Contenedor máximo para leituras |
| `max-w-md` | 448px | Cart drawer width |

---

## 6. Components

### 6.1 Buttons

#### Primary Button
```html
<button class="bg-primary text-surface py-3 px-6 font-medium hover:opacity-80 transition-opacity">
  Primary Action
</button>
```
- Background: `bg-primary` (#1A1A1A)
- Text: `text-surface` (branco)
- Padding: `py-3 px-6`
- Font: `font-medium`
- Hover: `hover:opacity-80`
- Transition: `transition-opacity`

#### Secondary Button (Pill)
```html
<a class="border border-subtle px-6 py-3 rounded-full hover:bg-surface transition-colors">
  Secondary Action
</a>
```
- Border: `border border-subtle`
- Padding: `py-3 px-6`
- Border radius: `rounded-full` (formato pill)
- Hover: `hover:bg-surface`
- Transition: `transition-colors`

#### Ghost Button
```html
<button class="text-secondary hover:text-primary transition-colors">
  Text Link
</button>
```
- Sem background/border
- Hover: mudança de cor do texto

### 6.2 Cards

#### Product Card
```html
<div class="bg-surface border border-border-subtle hover:border-accent-nature/30 transition-colors">
  <!-- Card content -->
</div>
```
- Background: `bg-surface`
- Border: `border border-border-subtle`
- Hover: `hover:border-accent-nature/30` (verde com 30% opacity)
- Transition: `transition-colors`

#### Archive/Document Card
```html
<div class="p-6 bg-surface border border-subtle">
  <!-- Card content -->
</div>
```
- Similar ao ProductCard mas sem efeito hover

### 6.3 Pills / Category Pills

```html
<!-- Inactive -->
<div class="px-5 py-2.5 text-sm font-medium rounded-full bg-surface border border-border-subtle hover:border-accent-nature/30">
  Categoria (12)
</div>

<!-- Active -->
<div class="px-5 py-2.5 text-sm font-medium rounded-full bg-accent-nature text-white">
  Categoria Ativa
</div>
```
- Padding: `px-5 py-2.5`
- Border radius: `rounded-full`
- Estado ativo: `bg-accent-nature text-white`
- Inativo: `bg-surface border border-border-subtle`
- Count badge: `(N)` inline depois do nome

### 6.4 Navigation

#### Navbar Links
```html
<a class="text-sm font-medium text-secondary hover:text-primary transition-colors">
  Navegação
</a>
```
- Font: `text-sm font-medium`
- Color: `text-secondary`
- Hover: `hover:text-primary`
- Ativo: `text-primary` (quando página atual)

#### Language Switcher
```html
<div class="flex gap-2">
  <a class="text-xs uppercase text-secondary hover:text-primary transition-colors">PT</a>
  <a class="text-xs uppercase text-secondary hover:text-primary transition-colors">ES</a>
  <a class="text-xs uppercase text-primary">EN</a>
</div>
```
- Size: `text-xs`
- Transform: `uppercase`
- Spacing: `gap-2` entre items

### 6.5 Inputs

```html
<input
  type="text"
  class="w-full px-4 py-3 bg-surface border border-border-subtle rounded-lg focus:border-accent-nature focus:outline-none"
  placeholder="Digite seu nome"
>
```
- Height: `py-3` (48px)
- Border: `border border-border-subtle`
- Focus: `focus:border-accent-nature`
- Border radius: `rounded-lg`

### 6.6 Drawer (Cart)

```html
<div class="fixed inset-y-0 right-0 w-full max-w-md bg-surface shadow-xl transform translate-x-full transition-transform duration-300">
  <!-- Drawer content -->
</div>
```
- Position: `fixed inset-y-0 right-0`
- Width: `max-w-md` (448px)
- Background: `bg-surface`
- Shadow: `shadow-xl`
- Animation: `transform translate-x-full` (slide from right)
- Transition: `transition-transform duration-300`

### 6.7 Overlays

```html
<div class="fixed inset-0 z-40 bg-black/50 opacity-0 pointer-events-none transition-opacity duration-300">
</div>
```
- Background: `bg-black/50` (50% black overlay)
- Opacity: `opacity-0` (hidden), `opacity-100` (visible)
- Pointer events: `pointer-events-none` (quando hidden)
- Z-index: `z-40`
- Transition: `transition-opacity duration-300`

---

## 7. Motion & Animation

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
Usado em elementos de scroll horizontal (CategoryPills).

---

## 8. Iconography

### Icon Approach

- Use inline SVG para ícones simples
- Icon size: `w-6 h-6` (24px) para navegação, `w-5 h-5` (20px) para inline
- Stroke width: `2` para a maioria dos ícones
- CurrentColor para todos os ícones (herda cor do texto)

### Icons Used

| Icon | Usage | Example |
|------|-------|---------|
| Arrow (→) | CTAs, links | `→` text |
| Close (X) | Modals, drawers | `d="M6 18L18 6M6 6l12 12"` |
| Menu | Mobile nav | `d="M4 6h16M4 12h16M4 18h16"` |
| Cart | Shopping cart | `d="M3 3h2l.4 2M7 13h10l4-8H5.4..."` |
| Heart | Favorites (future) | `d="M12 21.35l-1.45-1.32..."` |

### Music Notes

Usado em HymnCard: `♪` (caractere de texto, não SVG)

---

## 9. Layout & Structure

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

## 10. Shadows & Elevation

| Class | Usage |
|-------|-------|
| `shadow-xl` | Cart drawer, modals |
| `shadow-sm` | Subtle elevation (future) |

---

## 11. Z-Index Scale

| Value | Element |
|-------|---------|
| `z-10` | Decorative elements |
| `z-40` | Cart backdrop |
| `z-50` | Cart drawer, fixed elements, Navbar |

---

## 12. Do's and Don'ts

### ✅ Do

- Usar `--color-*` tokens para cores em componentes
- Usar `font-serif` para headings, `font-sans` para body
- Usar `text-secondary` para descrições e metadata
- Usar `transition-colors` para elementos interativos
- Usar `border border-border-subtle` para bordas de cards
- Usar `bg-accent-nature` para CTAs primários
- Manter consistencia com escala de spacing
- Usar duration values 200/300/500ms para transições

### ❌ Don't

- Usar cores hex hardcoded (usar tokens CSS)
- Misturar roles de fonte serif/sans (headings DEVEM ser serif)
- Usar valores de z-index acima de 50 sem razão específica
- Usar duration values fora de 200/300/500ms
- Hardcodar font families (usar classes Tailwind)
- Usar cores fora da paleta definida
- Criar componentes sem seguir estrutura existente

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

## Histórico do Documento

| Versão | Data | Descrição |
|--------|------|-----------|
| v2 | 2026-04-23 | Versão enhanced com Concept & Vision, Do's/Don'ts, exemplos de componentes |
| v1 | 2024 | Design system original com tokens e componentes |