# Skill Registry - Protosocorro

## SDD Skills (Framework)

| Skill | Trigger | Description |
|-------|---------|-------------|
| sdd-init | `sdd init`, inicializar SDD | Initialize SDD context and persistence |
| sdd-explore | `sdd-explore <topic>` | Investigate ideas before committing |
| sdd-propose | `sdd-propose <change>` | Create change proposal with intent/scope |
| sdd-spec | `sdd-spec <change>` | Write delta specifications |
| sdd-design | `sdd-design <change>` | Technical architecture and approach |
| sdd-tasks | `sdd-tasks <change>` | Break down into implementation checklist |
| sdd-apply | `sdd-apply <change>` | Implement tasks from change |
| sdd-verify | `sdd-verify <change>` | Validate implementation matches specs |
| sdd-archive | `sdd-archive <change>` | Archive completed change |

## Stack-Specific Skills

| Skill | Trigger | Description |
|-------|---------|-------------|
| typescript | Writing TypeScript code | Strict patterns and best practices |
| react-19 | Writing React components | React 19 patterns with Compiler |
| nextjs-15 | Working with Next.js | App Router patterns |
| zustand-5 | State management with Zustand | Zustand 5 patterns |
| ai-sdk-5 | Building AI chat features | AI SDK 5 breaking changes |
| shadcn | Managing shadcn components | Component library integration |

## Project Commands

| Command | Action |
|---------|--------|
| `/sdd-new <change>` | Start new change (explore → propose) |
| `/sdd-ff <change>` | Fast-forward (propose → spec → design → tasks) |
| `/sdd-continue <change>` | Continue next missing artifact |
| `/sdd-apply <change>` | Implement in batches |
| `/sdd-verify <change>` | Validate implementation |

## Current Context

- **Project**: protosocorro
- **Stack**: Astro 6.x + Tailwind v4 + Nanostores + React 19
- **Repo**: psraimundoirineuserra/ponto-socorro-web
- **Branch**: develop (default for all work)
- **Languages**: PT (default), ES, EN
- **Persistence**: openspec + engram (hybrid)