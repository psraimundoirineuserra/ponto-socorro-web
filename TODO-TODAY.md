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
