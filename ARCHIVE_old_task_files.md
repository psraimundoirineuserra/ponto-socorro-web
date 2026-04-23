# ARCHIVE - Old Task Files Preserved (2026-04-23)

> These files were consolidated into STATUS.md + INBOX.md on 2026-04-23.
> Preserved here for historical reference. Total: 558 lines.

---

## FROM TASKS.md (160 lines)

```markdown
# Protosocorro - Projeto Web

## Meta Final
Website institucional do Centro Eclético da Fluente Luz Universal Wilson Carneiro de Souza (CEFLUWCS) - Ponto Socorro de Cura Raimundo Irineu Serra.

---

## Stack
- **Framework:** Astro 6.x
- **Estilização:** Tailwind CSS v4
- **Estado:** Nanostores
- **UI:** React 19 + Lucide Icons
- **Idiomas:** PT (default) / ES / EN
- **Repo:** psraimundoirineuserra/ponto-socorro-web
- **Ramos:** main ← develop ← tarefas

---

## PÁGINAS & FUNCIONALIDADES

### ✅ COMPLETADO
| Página/Feature | Estado | Notas |
|----------------|--------|-------|
| Navbar c/ logo | ✅ | URLs simples (/foundation, /library, etc.) |
| Footer | ✅ | Navegação + contato |
| todas as páginas | ✅ | Home, Library, Shop, Foundation, Archive |
| CartDrawer | ✅ | Slide-out cart funcional |
| AddToCart | ✅ | Conectado ao cartStore |
| produtos (10) | ✅ | ProductGrid renderiza |
| favicon.svg | ✅ | Criado |
| Placeholder images | ✅ | SVG para produtos |
| nanostores c/ localStorage | ✅ | Persistence ativo |
| Git inicializado | ✅ | main + develop + test |
| SDD configurado | ✅ | openspec + skill-registry |

### ❌ PENDIENTE

#### 1. i18n-fix (URGENTE)
**Descrição:** Arreglar sistema de idiomas
- defaultLocale de 'es' para 'pt'
- changeLanguage() debe preservar rutas
- Layout debe passar locale aos componentes

**Status:** SDD en proceso

#### 2. home-hero-video
**Descrição:** Hero com video embed de Canal Jagube
- Video: "Histórias de Papai (PD Wilson Carneiro)"
- URL: https://www.youtube.com/embed/CYlTJPG2vK0
- Inspirado em /donar.astro (bento grid)

**Status:** Pendiente

#### 3. logo-navbar
**Descrição:** Usar logo_prontosocorro.webp no Navbar
- Criar favicon.svg baseado no logo
- substituir texto "Ponto Socorro" por imagen

**Status:** Pendiente

#### 4. foundation-expand
**Descrição:** Expandir história completa de Wilson
- Conteúdo do ensayo de 306 linhas
- Formato: scroll longo ou acordeões
- 3 idiomas (PT/ES/EN) - usuário traduz

**Status:** Pendiente

#### 5. archive-resources
**Descrição:** Agregar seção "Recursos Externos" ao Archive
- YouTube (videos de Canal Jagube)
- Redes (Facebook, Instagram, SoundCloud)
- Documentação (PDFs, artigos)
- Conexões Doutrinais (Mestre Irineu, ICEFLU)

**Status:** Pendiente

#### 6. shop-filters
**Descrição:** Filtrar productos por categoría
- Category pills no shop index
- Filtrar via URL params (?category=textil)

**Status:** Pendiente

#### 7. audio-player-connection
**Descrição:** Conectar UI do player ao audioStore
- play/pause button → store
- Progress bar baseado em currentTime
- Mostrar info do hino atual

**Status:** Pendiente

#### 8. measurement-form
**Descrição:** Formulario de medidas para fardas
- Campos: Pecho (cm), Cintura (cm), Largo (cm)
- Validar antes de addToCart

**Status:** Pendiente

#### 9. manifesto-fix
**Descripción:** Asegurar texto consistente em español
- currently mixto ES/EN

**Status:** Pendiente

#### 10. hymn-counts-fix
**Descripción:** Cadernos dizem 40 himnos mas só hay 10 mock
- Opción A: agregar más himnos
- Opción B: corregir counts

**Status:** Pendiente

---

## TRADUÇÕES (TODO)

O usuário cria os .md, eu integro:

| Página | PT | ES | EN |
|--------|----|----|-----|
| Home (hero, manifesto, etc) | ✅ | ❌ | ❌ |
| Foundation (historia completa) | ✅ | ❌ | ❌ |
| Archive | ❌ | ❌ | ❌ |
| Library | ❌ | ❌ | ❌ |
| Shop | ❌ | ❌ | ❌ |

**Estrutura propuesta:**
```
src/i18n/content/
├── home/ (hero-pt.md, manifesto-pt.md, etc)
├── foundation/ (content-pt.md)
├── archive/
├── library/
└── shop/
```

---

## LINKS & RECURSOS

### Documentação do cliente
- `links-wilson-pronto-socorro.md` - 50 enlaces organizados
- `Padrinho Wilson Carneiro...md` - Ensayo académico 306 líneas

### Video para Hero
- "Histórias de Papai (PD Wilson Carneiro)" - Canal Jagube
- https://www.youtube.com/embed/CYlTJPG2vK0

### Logo
- `public/images/logo_prontosocorro.webp` (1600x1600)
- `public/images/logo_prontosocorro.jpeg` (1600x1600)

---

## NOTAS

- Sempre desarrolar em `develop`
- Merge a `main` só quando usuário confirmar
- SDD formal para cada cambio
- Engram + openspec como persistence (hybrid)
```

---

## FROM TODO-TODAY.md (303 lines)

```markdown
# Protosocorro - Plan para Terminar Hoy

**Fecha**: 15 Abril 2026  
**Proyecto**: /Users/calderonjosue_/clientes/ponto-socorro/protosocorro/  
**Dev Server**: http://localhost:4321 (ya corriendo)  
**Stack**: Astro 6.x + Tailwind v4 + Nanostores + i18n ES/EN/PT

---

## Auditoría del Estado Actual

### FUNCIONANDO ✅
| Página/Componente | Estado | Notas |
|-------------------|--------|-------|
| Home (Hero, Manifesto, Coordinates, HinarioPreview) | ✅ | Renderiza correctamente |
| Library Index | ✅ | CategoryPills + HymnsGrid funcionan |
| Library [slug] | ✅ | Rutas dinámicas funcionan |
| Shop Index | ✅ | ProductGrid muestra productos |
| Shop [product] | ✅ | Página de detalle funciona |
| Foundation | ✅ | Contenido real de Padrinho Wilson |
| Archive | ✅ | Contenido básico presente |
| i18n (ES/EN/PT) | ✅ | Traducciones cargan |
| Stores (cart, audio) | ✅ | Nanostores definidos |
| Layout (Navbar, Footer, Player) | ✅ | Componentes globales renderizan |
| Styling | ✅ | Tailwind v4 con tokens personalizados |

### PROBLEMAS ENCONTRADOS ❌

| Problema | Severidad | Archivo(s) |
|----------|-----------|------------|
| Imágenes de productos no existen (referencia /images/*) | 🔴 Alta | products.ts, ProductCard.astro |
| Menú móvil no funciona (JS existe pero toggle no persiste) | 🔴 Alta | Navbar.astro |
| i18n con URLs localizeadas no funciona (changeLanguage hardcoded) | 🔴 Alta | Navbar.astro, Footer.astro |
| Filtro de categorías en Shop no funciona (usa strings hardcoded ES) | 🟡 Media | shop/index.astro |
| Carrito no conectado al botón "Añadir al carrito" | 🟡 Media | shop/[product].astro |
| Audio player no conectado al audioStore | 🟡 Media | PersistentPlayer.astro |
| LRC Sync viewer solo muestra placeholder | 🟡 Media | LRCSyncViewer.astro |
| Formulario de medidas no existe (productos con requiresMeasurement) | 🟡 Media | shop/[product].astro |
| Manifesto tiene texto mixto ES/EN | 🟡 Media | Manifesto.astro |
| Favicon no existe | 🟢 Baja | Layout.astro |
| Conteo de himnos incorrecto (cadernos dice 40, hay 10) | 🟢 Baja | hymns.ts, cadernos.ts |
| Layout no pasa locale a Navbar/Footer | 🟢 Baja | Layout.astro |

---

## Tareas Críticas (Primeras 2 horas)

### 1. Crear imágenes placeholder para productos ⏱️ 15 min
**Archivos a crear**: public/images/
```bash
# Crear placeholder SVG para cada producto
```
**Archivos específicos**:
- /public/images/farda-blanca.jpg
- /public/images/farda-azul.jpg
- /public/images/farda-negra.jpg
- /public/images/kuripe.jpg
- /public/images/rape.jpg
- /public/images/himnario.jpg
- /public/images/estrella-1.jpg
- /public/images/estrella-2.jpg
- /public/images/estrella-3.jpg
- /public/images/maraca.jpg

### 2. Crear favicon.svg ⏱️ 5 min
**Archivo**: /public/favicon.svg
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="45" fill="#2C4C3B"/>
  <text x="50" y="65" text-anchor="middle" font-size="40" fill="white">☽</text>
</svg>
```

### 3. Arreglar menú móvil en Navbar ⏱️ 15 min
**Archivo**: /src/components/layout/Navbar.astro

Problema: El script de toggle no persiste entre páginas con View Transitions.

Solución: Usar `transition:persist="mobile-menu"` y mejorar el script:
```javascript
// Cambiar el script para manejar persistencia
const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn?.addEventListener('click', () => {
  mobileMenu?.classList.toggle('hidden');
});

// Cerrar menú al hacer click en un link
mobileMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu?.classList.add('hidden');
  });
});
```

### 4. Simplificar i18n - Quitar URLs localizeadas ⏱️ 15 min
**Archivos**: /src/components/layout/Navbar.astro, /src/components/layout/Footer.astro

Problema: `changeLanguage('/es')` genera /es/fundacion pero las páginas no existen en esas rutas.

Solución: Cambiar los href de los links a rutas simples sin prefijo de idioma:
```javascript
const navLinks = [
  { key: 'home', href: '/' },
  { key: 'foundation', href: '/foundation' },
  { key: 'library', href: '/library' },
  { key: 'archive', href: '/archive' },
  { key: 'shop', href: '/shop' },
];
```

Y cambiar `changeLanguage` en i18n/index.ts para que retorne '/' o mantener solo ES como default.

### 5. Crear placeholders SVG para productos ⏱️ 20 min
**Script**: Generar 10 SVGs mínimos como placeholders.

---

## Tareas Importantes (Siguientes 3 horas)

### 6. Implementar filtro de categorías en Shop ⏱️ 30 min
**Archivo**: /src/pages/shop/index.astro

Problema: Las categorías están hardcoded en español y no hay lógica de filtrado.

Solución:
1. Definir categorías en products.ts
2. Obtener category de URL params
3. Filtrar productos antes de renderizar

### 7. Conectar botón "Añadir al carrito" con cartStore ⏱️ 30 min
**Archivo**: /src/pages/shop/[product].astro

Solución: Agregar script que llame a `addToCart()` del cartStore.

### 8. Conectar Audio Player con audioStore ⏱️ 45 min
**Archivo**: /src/components/audio/PersistentPlayer.astro

Problema: El player tiene la UI pero no está conectado al store.

Solución:
1. Importar useStore de nanostores/react (o usar script vanilla)
2. Conectar play/pause button al store
3. Actualizar progress bar basado en currentTime
4. Mostrar info del himno actual

### 9. Crear formulario de medidas para Fardas ⏱️ 30 min
**Archivo**: /src/pages/shop/[product].astro

Productos con `requiresMeasurement: true` necesitan un formulario con campos:
- Pecho (cm)
- Cintura (cm)
- Largo total (cm)

### 10. Arreglar Manifesto (todo en español) ⏱️ 15 min
**Archivo**: /src/components/home/Manifesto.astro

Cambiar texto mixto a español consistente.

### 11. Corregir conteo de himnos en cadernos ⏱️ 15 min
**Archivos**: /src/data/cadernos.ts, /src/data/hymns.ts

Opción A: Agregar más himnos para coincidir con los counts (40 total)
Opción B: Cambiar los counts a 2, 2, 2, 2 para coincidir con 10 himnos

---

## Mock Products - Datos Ficticios Mejorados

### Productos Actuales (9 productos)
```typescript
// Fardas (Textiles) - REQUIEREN MEDIDAS
{ id: 'farda-blanca', slug: 'farda-blanca', name: 'Farda Blanca', category: 'textil', price: 150, requiresMeasurement: true }
{ id: 'farda-azul', slug: 'farda-azul', name: 'Farda Azul', category: 'textil', price: 150, requiresMeasurement: true }
{ id: 'farda-negra', slug: 'farda-negra', name: 'Farda Negra', category: 'textil', price: 150, requiresMeasurement: true }

// Instrumentos (No requieren medidas)
{ id: 'kuripe-curupira', slug: 'kuripe-curupira', name: 'Kuripe Curupira', category: 'instrumento', price: 45 }
{ id: 'rapé-tapir', slug: 'rapé-tapir', name: 'Rapé Tapir', category: 'instrumento', price: 35 }
{ id: 'maraca-sagrada', slug: 'maraca-sagrada', name: 'Maraca Sagrada', category: 'instrumento', price: 65 }

// Libros
{ id: 'himnario-impreso', slug: 'himnario-impreso', name: 'Himnario Impreso', category: 'libro', price: 45 }

// Estrellas (Insignias de grado)
{ id: 'estrella-grado-1', slug: 'estrella-grado-1', name: 'Estrella Grado 1', category: 'star', price: 25 }
{ id: 'estrella-grado-2', slug: 'estrella-grado-2', name: 'Estrella Grado 2', category: 'star', price: 30 }
{ id: 'estrella-grado-3', slug: 'estrella-grado-3', name: 'Estrella Grado 3', category: 'star', price: 35 }
```

### Productos Sugeridos para Añadir (Contexto Santo Daime)
```typescript
// Más himnarios
{ id: 'hinario-pequeno', slug: 'hinario-pequeno', name: 'Hinário Pequeno', category: 'libro', price: 35 }
{ id: 'hinario-grande', slug: 'hinario-grande', name: 'Hinário Grande', category: 'libro', price: 65 }

// Cuadernos de lyrics
{ id: 'caderno-letras', slug: 'caderno-letras', name: 'Caderno de Letras', category: 'libro', price: 25 }

// Artesanías
{ id: 'bufanda-sagrada', slug: 'bufanda-sagrada', name: 'Bufanda Sagrada', category: 'instrumento', price: 55 }
{ id: 'poncho-daime', slug: 'poncho-daime', name: 'Poncho de Daime', category: 'textil', price: 120, requiresMeasurement: true }
{ id: 'shaker-ritual', slug: 'shaker-ritual', name: 'Shaker Ritual', category: 'instrumento', price: 40 }
```

---

## Ajustes Visuales Necesarios

### 1. ProductCard - Hover effect
Actualmente: `hover:border-accent-nature/30`
Cambiar a: `hover:border-accent-nature hover:shadow-lg`

### 2. Hero - CTA button
Actualmente: `border border-subtle`
Mejorar: `border border-primary/10 hover:border-primary/30`

### 3. Footer - Logo link
Actualmente: `href="/"`
Cambiar a: `href={navLinks[0].href}` para mantener consistencia

### 4. HymnCard - Indicador de audio
Añadir icono de play al hover para indicar que es clickeable.

### 5. CategoryPills - Scroll behavior
Ya tiene scroll horizontal, pero falta indicador visual de más contenido.

---

## Nice-to-Have (Si queda tiempo)

### 1. Mejorar LRCSyncViewer ⏱️ 30 min
Aunque no hay archivos de audio reales, podemos:
- Mostrar lyrics placeholder con timestamps
- Preparar la UI para cuando haya datos reales

### 2. Añadir más himnos a mock data ⏱️ 20 min
Expandir hymns.ts de 10 a 20-30 himnos con datos más realistas.

### 3. Badges de categoría en ProductCard ⏱️ 15 min
- Textil: badge verde
- Instrumento: badge коричневый
- Libro: badge azul
- Estrella: badge dorado

### 4. Animación sutil en Coordinates ⏱️ 15 min
Los números pueden tener un count-up animation al entrar en viewport.

---

## Prioridad de Archivos a Modificar

| Prioridad | Archivo | Cambio |
|-----------|---------|--------|
| 1 | /public/favicon.svg | Crear |
| 2 | /src/components/layout/Navbar.astro | Mobile menu + URLs |
| 3 | /src/components/layout/Footer.astro | URLs simplificadas |
| 4 | /src/pages/shop/index.astro | Filtro de categorías |
| 5 | /src/pages/shop/[product].astro | addToCart + form medidas |
| 6 | /src/components/audio/PersistentPlayer.astro | Conectar audioStore |
| 7 | /src/components/home/Manifesto.astro | Texto consistente ES |
| 8 | /src/data/cadernos.ts | Corregir counts |
| 9 | /src/data/hymns.ts | Añadir más himnos (opcional) |
| 10 | /src/components/shop/ProductCard.astro | Hover effects |

---

## Tiempo Total Estimado

| Fase | Tarea | Tiempo |
|------|-------|--------|
| 1 | Setup + Imágenes + Favicon | 40 min |
| 2 | Navbar Mobile + i18n URLs | 30 min |
| 3 | Shop Filtro + Carrito | 60 min |
| 4 | Audio Player + Manifesto | 60 min |
| 5 | Form Medidas + Fix Counts | 45 min |
| **TOTAL** | | **~4 horas** |

---

## Notas de Ejecución

1. El dev server YA está corriendo en puerto 4321
2. Trabajar en batches para no perder contexto
3. Después de cada batch, verificar con curl o刷新 navegador
4. Los cambios en .astro no requieren reiniciar el server (hot reload)
5. Si algo rompe, revisar la consola del browser y los logs del terminal

---

## Comando de Verificación Rápida

```bash
# Verificar que el server responde
curl -s http://localhost:4321 | grep -o '<title>.*</title>'

# Ver todos los endpoints
curl -s http://localhost:4321/library
curl -s http://localhost:4321/shop
curl -s http://localhost:4321/foundation
curl -s http://localhost:4321/archive
```

---

## FROM TODO.md (58 lines)

```markdown
# TODO: Future Improvements

## Completed

- [x] VideoHero Component - Immersive video hero with YouTube background
  - Implemented in `src/components/home/VideoHero.astro`
  - Sound toggle with glassmorphism design
  - Grid stacking CSS for icon transitions (no ghosting)
- [x] Navbar Logo Update
  - Logo image + "CEPSERIS" brand name
  - Static alt text for accessibility
- [x] Design System V2 - Enhanced with Linear-inspired structure

## Known Issues (Low Priority)

### 1. Himnarios hardcoded
- `src/pages/pt/hinarios/index.astro` has hardcoded locale='pt'
- `src/pages/es/himnarios/index.astro` has hardcoded locale='es'
- Should use dynamic locale like other [lang]/ pages

### 2. Shop - Need to update [lang]/shop/index.astro
- Currently uses getStaticPaths with `*` wildcard - need to verify it works
- May need to remove duplicates if both paths work

### 3. Foundation and Archive pages
- Should verify existing [lang]/foundation.astro and [lang]/archive.astro still work

### 4. Duplicate route pages
- Consider removing duplicated pages: pt/loja, es/tienda, pt/fundacao, es/fundacion, etc.
- Keep only [lang]/ dynamic routes after verifying they work
- Lower priority - works fine as-is

## Future Features

- [ ] Footer component with full navigation
- [ ] Mobile menu polish
- [ ] Product pages with cart integration

## Architecture Notes

### URL Structure
| Page | PT | ES | EN |
|------|----|----|-----|
| Home | / | / | / |
| Shop | /loja | /tienda | /shop |
| Foundation | /fundacao | /fundacion | /foundation |
| Library | /hinarios | /himnarios | /library |
| Archive | /arquivo | /arquivo | /archive |

### i18n Navigation
- Navbar.astro maps locale → translated path name
- Footer.astro same mapping
- changeLanguage() handles URL switching

### Brand Update (2026-04-23)
- Project renamed from "Ponto Socorro" to "CEPSERIS"
- Logo and brand name updated in Navbar
- VideoHero component for homepage background
```

---

## FROM .atl/protosocorro-estado-actual.md (44 lines)

```markdown
# Protosocorro - Gestor de Tareas

**Proyecto**: `/Users/calderonjosue_/clientes/ponto-socorro/protosocorro/`
**Stack**: Astro 6.x + Tailwind v4 + Nanostores + i18n ES/EN/PT
**Fecha**: 22 Abril 2026

## ✅ Completado

| Tarea | Estado | Notas |
|-------|--------|-------|
| Navbar con URLs simples | ✅ | /foundation, /library, etc. |
| favicon.svg | ✅ | Creado en public/ |
| Imágenes placeholder SVG | ✅ | 10 productos tienen placeholders |
| CartDrawer funcional | ✅ | Slide-out cart funciona |
| Botón carrito en navbar | ✅ | Muestra badge con count |
| AddToCart conectado al cartStore | ✅ | Nanostores persistence |
| Tienda con 10 productos | ✅ | ProductGrid renderiza |
| Todas las páginas | ✅ | Home, Library, Shop, Foundation, Archive |
| nanostores con localStorage | ✅ | Persistence activo |

## ❌ Pendiente

| # | Tarea | Prioridad |
|---|-------|----------|
| 1 | Audio player connection | 🔴 Alta |
| 2 | Shop filters | 🟡 Media |
| 3 | MeasurementForm | 🟡 Media |
| 4 | Fix hymn counts | 🟢 Baja |
| 5 | Manifesto text | 🟢 Baja |

## Key Findings

- **Audio player connection** es la tarea más crítica - requiere integración con backend de streaming
- **Shop filters** necesita implementación de UI para filtrar productos por categoría/tipo
- **MeasurementForm** sugiere una app de toma de medidas para productos custom
- **Hymn counts** refiere al contenido de la sección "Foundation" (himnos/contenido?)
- **Manifesto text** probablemente contenido editorial de la página Foundation

## Stack Notes

- Astro 6.x (framework principal)
- Tailwind v4 (estilos)
- Nanostores (state management con localStorage persistence)
- i18n ES/EN/PT (multilingüe)
```

---

## Summary

| Original File | Lines | Preserved |
|---------------|-------|-----------|
| TASKS.md | 160 | ✅ |
| TODO-TODAY.md | 303 | ✅ |
| TODO.md | 58 | ✅ |
| protosocorro-estado-actual.md | 44 | ✅ |
| **TOTAL** | **565** | **100%** |

Archive created: 2026-04-23
Consolidated into: STATUS.md + INBOX.md