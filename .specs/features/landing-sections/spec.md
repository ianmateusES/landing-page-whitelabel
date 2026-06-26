# landing-sections Specification

## Problem Statement

O Matheus Sena precisa de uma landing page que convença visitantes a contratar sua consultoria online, seguindo o mesmo funil de alta conversão do prtteam.com, mas com conteúdo e estrutura fiel ao seu material de apresentação.

## Goals

- [ ] Visitante entende quem é Matheus Sena e o diferencial em menos de 10s (Hero + About)
- [ ] Visitante compreende o método e os diferenciais antes de ver o preço
- [ ] Visitante consegue converter em qualquer ponto da página (CTAs múltiplos)

## Out of Scope

| Feature | Reason |
|---------|--------|
| Blog | Fora do v1 |
| Página de vendas por plano | Single-page é o foco |
| Chat ao vivo | WhatsApp é o canal |

---

## User Stories

### P1: Header sticky com CTA ⭐ MVP

**Acceptance Criteria:**

1. WHEN página carrega THEN header SHALL ser sticky (fixo no topo ao scrollar)
2. WHEN header renderiza THEN SHALL exibir logo MS Workout + CTA "Vem pro time"
3. WHEN CTA do header clicado THEN SHALL abrir WhatsApp

**Independent Test:** Scrollar a página e verificar header visível; clicar CTA e verificar abertura do WhatsApp

---

### P1: Hero ⭐ MVP

**Acceptance Criteria:**

1. WHEN hero renderiza THEN SHALL exibir tagline "A mudança de hábito pelo treino"
2. WHEN hero renderiza THEN SHALL exibir subtítulo sobre consultoria online
3. WHEN hero renderiza THEN SHALL exibir 2 CTAs: primário (WhatsApp) + secundário ("Ver resultados")
4. WHEN hero renderiza THEN SHALL exibir prova social (ex: 500+ alunos)

---

### P1: About + AuthorityStats ⭐ MVP

**Acceptance Criteria:**

1. WHEN about renderiza THEN SHALL exibir bio do Matheus Sena (formação, experiência)
2. WHEN stats renderiza THEN SHALL exibir: 6+ anos, 500+ alunos, Ed. Física, 100% individualizado

---

### P1: TrainingTypes — Planejamento Individualizado ⭐ MVP

**Acceptance Criteria:**

1. WHEN seção renderiza THEN SHALL listar 4 modalidades: Individualizado, Hipertrofia, Emagrecimento, Qualidade de Vida
2. WHEN modalidade renderiza THEN SHALL ter ícone + título + descrição do PDF

---

### P1: Pricing — 4 Planos MS Workout ⭐ MVP

**Acceptance Criteria:**

1. WHEN pricing renderiza THEN SHALL exibir 4 planos: Mensal R$200, Trimestral R$540, Semestral R$1.020, Anual R$1.920
2. WHEN plano Semestral renderiza THEN SHALL exibir badge "Recomendado" e destaque visual
3. WHEN CTA de qualquer plano clicado THEN SHALL abrir WhatsApp com nome + preço do plano

---

### P2: Support — Suporte Diário

**Acceptance Criteria:**

1. WHEN seção renderiza THEN SHALL exibir 3 diferenciais: WhatsApp 24h, correção por vídeo, avaliação de evolução

---

### P2: HowItWorks — Como Funciona

**Acceptance Criteria:**

1. WHEN seção renderiza THEN SHALL exibir 4 passos numerados: Anamnese, Treino Individualizado, Feedbacks, Novo Planejamento
2. WHEN passo renderiza THEN SHALL ter número, título e descrição do PDF

---

### P2: Comparison

**Acceptance Criteria:**

1. WHEN seção renderiza THEN SHALL mostrar coluna "Consultoria Comum" (negativa, riscada) vs "Método MS Workout" (positiva)

---

### P2: Results — Antes & Depois

**Acceptance Criteria:**

1. WHEN seção renderiza THEN SHALL exibir cards de resultados: Lucas Muniz, Matheus, Haissa
2. WHEN imagens reais não disponíveis THEN SHALL exibir placeholders com nome do aluno

---

### P2: MissionCta — Missão e Fechamento

**Acceptance Criteria:**

1. WHEN seção renderiza THEN SHALL exibir quote: "Minha missão é atingirmos seus objetivos da maneira mais rápida possível..."
2. WHEN seção renderiza THEN SHALL exibir CTA final "Vem pro time MS Workout!"

---

## Requirement Traceability

| Req ID | Story | Component |
|--------|-------|-----------|
| LAND-01 | Header sticky | Header |
| LAND-02 | Hero | Hero |
| LAND-03 | About + Stats | About, AuthorityStats |
| LAND-04 | TrainingTypes | TrainingTypes |
| LAND-05 | HowItWorks | HowItWorks |
| LAND-06 | Pricing | Pricing |
| LAND-07 | Badge semestral | Pricing |
| LAND-08 | Support | Support |
| LAND-09 | Results | Results |
| LAND-10 | MissionCta | MissionCta |
| LAND-11 | Comparison | Comparison |
