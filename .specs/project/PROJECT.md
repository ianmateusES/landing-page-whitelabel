# MS Workout — Landing Whitelabel

**Vision:** Landing page de conversão para consultoria online de personal trainer. v1 entrega a marca MS Workout do Matheus Sena; arquitetura whitelabel permite clonar para outros profissionais trocando apenas config e assets.

**For:** Matheus Sena (v1); futuramente outros personais com o mesmo template.

**Solves:** Profissionais de educação física que precisam de presença digital rápida e de alta conversão para fechar alunos via WhatsApp.

## Goals

- Gerar leads qualificados para a consultoria online MS Workout via WhatsApp
- Construir arquitetura whitelabel que permita rebrand em 1–2h sem tocar em componentes
- Entregar funil completo (atenção → autoridade → método → prova social → conversão)

## Tech Stack

**Core:**

- Framework: Next.js 15 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Animation: Framer Motion

**Key dependencies:** react-hook-form, zod, lucide-react, next/image, next/font

## Scope

**v1 includes:**

- Preset `matheus-sena` completo (copy, planos, identidade do PDF)
- Template `_template` documentado para novos personais
- 14 seções: Header, Hero, About, AuthorityStats, TrainingTypes, Support, HowItWorks, Comparison, Results, Testimonials, Pricing, MissionCta, LeadForm, Footer
- CTAs diretos para WhatsApp + formulário com redirect
- Sistema multi-brand via `BRAND_SLUG` env
- Deploy Vercel

**Explicitly out of scope:**

- CMS headless
- Backend / banco de dados
- Pagamentos online
- Variante nutricionista
- Multi-idioma
- Área logada / app

## Constraints

- Assets reais (logo, fotos) ainda não entregues pelo cliente — usar placeholders até T27
- Número WhatsApp pendente — placeholder "5511999999999"
- Cores definitivas pendentes — usar paleta dark com acento verde-lima até confirmação
