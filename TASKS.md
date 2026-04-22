# Protosocorro - Gestor de Tareas

**Proyecto**: `/Users/calderonjosue_/clientes/ponto-socorro/protosocorro/`
**Stack**: Astro 6.x + Tailwind v4 + Nanostores + i18n ES/EN/PT
**Fecha**: 22 Abril 2026

---

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

---

## ❌ Pendiente

| # | Tarea | Prioridad | Descripción |
|---|-------|----------|-------------|
| 1 | Audio player connection | 🔴 Alta | Conectar UI del player al audioStore (play, pause, progress) |
| 2 | Shop filters | 🟡 Media | Filtrar productos por categoría en la tienda |
| 3 | MeasurementForm | 🟡 Media | Formulario de medidas para fardas (pecho, cintura, largo) |
| 4 | Fix hymn counts | 🟢 Baja | Los cadernos dicen 40 himnos pero solo hay 10 mock data |
| 5 | Manifesto text | 🟢 Baja | Asegurar texto consistente en español |

---

## 📋 Detalles de Tareas Pendientes

### 1. Audio Player Connection (🔴 Alta)
**Archivos**:
- `src/components/audio/PersistentPlayer.astro`
- `src/stores/audioStore.ts`

**Requerimientos**:
- Conectar play/pause button al store
- Actualizar progress bar basado en currentTime
- Mostrar info del himno actual (título, número)

---

### 2. Shop Filters (🟡 Media)
**Archivos**:
- `src/pages/shop/index.astro`
- `src/data/products.ts`

**Requerimientos**:
- Definir categorías en products.ts
- Obtener category de URL params (`?category=textil`)
- Filtrar productos antes de renderizar
- Mostrar category pills activos

---

### 3. MeasurementForm (🟡 Media)
**Archivos**:
- `src/pages/shop/[product].astro`

**Requerimientos**:
- Productos con `requiresMeasurement: true` necesitan formulario
- Campos: Pecho (cm), Cintura (cm), Largo total (cm)
- Validar que las medidas estén completas antes de añadir al carrito

---

### 4. Fix Hymn Counts (🟢 Baja)
**Archivos**:
- `src/data/cadernos.ts`
- `src/data/hymns.ts`

**Problema**: Los cadernos muestran "40 himnos" pero solo hay 10 en mock data

**Opciones**:
- Opción A: Agregar más himnos (30 más) para llegar a 40
- Opción B: Cambiar counts a valores reales (2, 2, 2, 2 = 10 total)

---

### 5. Manifesto Text (🟢 Baja)
**Archivo**: `src/components/home/Manifesto.astro`

**Problema**: Texto mixto ES/EN

**Solución**: Asegurar texto consistente en español

---

## 🎯 Orden de Implementación Recomendada

1. **Audio Player** (Alta) - Más crítico para la experiencia
2. **Shop Filters** (Media) - Mejora funcionalidad tienda
3. **MeasurementForm** (Media) - Necesario para venta de fardas
4. **Fix Hymn Counts** (Baja) - Data consistency
5. **Manifesto Text** (Baja) - polish

---

## 🔗 Links Útiles

- Dev Server: `http://localhost:4321`
- Git: (no inicializado aún)
- Plan original: `/Users/calderonjosue_/clientes/ponto-socorro/ponto-socorro-plan-tecnico.md`