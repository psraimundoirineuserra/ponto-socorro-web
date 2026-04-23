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