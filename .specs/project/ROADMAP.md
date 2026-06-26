# Roadmap

**Current Milestone:** M1 — Foundation
**Status:** In Progress

---

## M1 — Foundation

**Goal:** Next.js funcional com sistema multi-brand, preset MS Workout, layout shell e ThemeProvider
**Target:** Concluir scaffold e config antes de qualquer componente de seção

### Features

**Scaffold + Config** — IN PROGRESS
- Next.js 15 + TypeScript + Tailwind + Framer Motion
- `config/brands/matheus-sena/` seed do PDF
- `config/brands/_template/` com estrutura guia
- `config/index.ts` slug resolver

**Theme + Layout** — PLANNED
- CSS tokens via variáveis CSS
- ThemeProvider (client component leve)
- Header sticky + Footer
- Primitivos UI (Button, Card, Badge, SectionHeading)

---

## M2 — MVP Conversão

**Goal:** Funil mínimo operacional — usuário chega, conhece o personal, vê planos, converte via WhatsApp

### Features

**Seções P1** — PLANNED
- Hero, About, AuthorityStats, TrainingTypes
- Pricing (4 planos MS Workout com preços reais)
- MissionCta

**Conversão** — PLANNED
- lib/whatsapp.ts (mensagens MS Workout)
- CTAs em Header, Hero, Planos, MissionCta
- LeadForm (React Hook Form + Zod) → redirect WhatsApp

---

## M3 — Confiança

**Goal:** Prova social, método e diferenciação — visitante vira crente antes de ver os preços

### Features

**Seções P2** — PLANNED
- HowItWorks (4 passos do PDF)
- Support (WhatsApp 24h, vídeo, avaliação)
- Comparison (genérico vs MS Workout)
- Results (Lucas Muniz, Matheus, Haissa)
- Testimonials
- Smooth scroll + reveal animations

---

## M4 — Polish

**Goal:** Produção-ready: SEO, performance, docs de whitelabel

### Features

**SEO + Performance** — PLANNED
- Metadata API ("Matheus Sena", "MS Workout", "consultoria online")
- sitemap.ts, robots.ts
- next/image + next/font tuning
- Lighthouse ≥ 90 performance / ≥ 95 SEO

**Whitelabel Docs** — PLANNED
- README.whitelabel.md (guia de rebrand via _template)

---

## Future Considerations

- Segundo brand real para validar whitelabel end-to-end
- Auto-discovery de brands em `config/brands/`
- Preset nutricionista
- CMS headless (Sanity)
- Analytics (Plausible / Vercel Analytics)
- Testes E2E Playwright
- Domínio customizado msworkout.com.br
