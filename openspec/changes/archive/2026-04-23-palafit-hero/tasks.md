# Tasks: Video Hero - Protosocorro

## Phase 1: Create VideoHero Component

- [ ] 1.1 Create `src/components/home/VideoHero.astro`
- [ ] 1.2 Implement YouTube iframe API integration with videoId `CYlTJPG2vK0`
- [ ] 1.3 Add sound toggle button with glass style (`backdrop-blur-md bg-white/40`)
- [ ] 1.4 Add adaptive overlay gradient (`rgba(0,0,0,0.1)` → `rgba(0,0,0,0.3)`)
- [ ] 1.5 Add fade-in transition (1s ease-in-out)
- [ ] 1.6 Apply Studio Minimal styling (shadow-sm, borders rgba(0,0,0,0.05))
- [ ] 1.7 Add responsive styles (mobile top-5 right-5, desktop top-6 right-6)

## Phase 2: Integrate into Homepage

- [ ] 2.1 Update `src/pages/[lang]/index.astro` to import VideoHero
- [ ] 2.2 Replace existing Hero component with VideoHero
- [ ] 2.3 Verify locale prop is passed correctly

## Phase 3: Test & Verify

- [ ] 3.1 Run dev server and test video loads
- [ ] 3.2 Test sound toggle button (mute/unmute)
- [ ] 3.3 Verify fade-in transition
- [ ] 3.4 Test responsive on mobile viewport
- [ ] 3.5 Verify no visual conflicts with existing page elements