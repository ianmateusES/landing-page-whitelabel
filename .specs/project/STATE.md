# STATE — MS Workout Landing

## Decisions

| ID | Decision | Rationale | Date |
|----|----------|-----------|------|
| D-01 | Dark theme com acento verde-lima como paleta provisória | Fitness + conversão; aguarda confirmação do cliente | 2026-06-26 |
| D-02 | `BRAND_SLUG` env var para multi-brand (default: matheus-sena) | Evita runtime complexity; clean para Vercel | 2026-06-26 |
| D-03 | CTAs WhatsApp diretos + formulário final | Fiel ao modelo prtteam.com; sem backend | 2026-06-26 |
| D-04 | TrainingTypes substitui BrandPillars orbital | Mais fiel ao PDF; reduce animation complexity | 2026-06-26 |
| D-05 | About (profissional solo) em vez de Team | Matheus opera sozinho; pode ser multi-person em outro brand | 2026-06-26 |

## Blockers

| ID | Blocker | Owner | Status |
|----|---------|-------|--------|
| B-01 | Número WhatsApp do Matheus Sena | Cliente | Open — usando placeholder 5511999999999 |
| B-02 | Logo MS Workout (SVG/PNG) | Cliente | Open — placeholder SVG gerado |
| B-03 | Foto profissional (hero/profile) | Cliente | Open — placeholder via URL |
| B-04 | Fotos antes/depois: Lucas Muniz, Matheus (aluno), Haissa | Cliente | Open — placeholders nomeados |
| B-05 | Paleta de cores oficial | Cliente | Open — provisório: primary #a3e635 (lime-400), bg #0a0a0a |

## Deferred Ideas

- Auto-discovery de brands via `fs.readdirSync('config/brands')`
- Preset nutricionista em `config/brands/nutritionist-template/`
- CMS headless (Sanity) para edição sem código
- Analytics: eventos de clique no CTA + envio de formulário
- Testes E2E Playwright para funil de conversão
- Domínio customizado msworkout.com.br
- A/B test de headline no Hero

## Learnings

- PDF do cliente tem copy suficiente para todas as seções principais
- Depoimentos no PDF são apenas nomes (Lucas Muniz, Matheus, Haissa) — texto a obter com cliente
- Plano Semestral é explicitamente "RECOMENDADO" no material — badge já confirmado
