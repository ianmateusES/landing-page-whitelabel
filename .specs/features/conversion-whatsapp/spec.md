# conversion-whatsapp Specification

## Problem Statement

Todo visitante que demonstra interesse deve conseguir entrar em contato com o Matheus Sena no WhatsApp de forma rápida e com contexto suficiente para que ele possa responder com qualidade — sem backend, sem fricção.

## Goals

- [ ] CTA em qualquer ponto da página abre WhatsApp com mensagem contextualizada
- [ ] Formulário final captura nome, idade e cidade antes do redirect
- [ ] Mensagem do WhatsApp inclui o plano de interesse quando aplicável

## Out of Scope

| Feature | Reason |
|---------|--------|
| CRM / webhook | Fora do v1; lead vai direto pro WhatsApp |
| Email de confirmação | Sem backend |
| Analytics de conversão | Deferred |

---

## User Stories

### P1: CTA global ⭐ MVP

**User Story:** Como visitante interessado, quero clicar em qualquer CTA e ser direcionado ao WhatsApp do Matheus com uma mensagem já redigida.

**Acceptance Criteria:**

1. WHEN CTA global clicado (Header, Hero, MissionCta) THEN SHALL abrir `wa.me/5511999999999` com mensagem "Olá! Quero saber mais sobre a consultoria MS Workout."
2. WHEN link abre THEN mensagem SHALL estar pré-preenchida no campo de texto do WhatsApp

**Independent Test:** Clicar CTA do Header e ver URL `wa.me` com `text=` encodeado no browser

---

### P1: CTA de plano ⭐ MVP

**User Story:** Como visitante que escolheu um plano, quero que minha mensagem já informe qual plano me interessa.

**Acceptance Criteria:**

1. WHEN CTA de plano clicado THEN mensagem SHALL incluir nome e preço: "Tenho interesse no plano Semestral (R$ 1.020,00)"
2. WHEN qualquer plano é clicado THEN URL `wa.me` SHALL conter o texto com `encodeURIComponent`

---

### P1: Formulário lead ⭐ MVP

**User Story:** Como visitante, quero preencher nome, idade e cidade e ser redirecionado ao WhatsApp com esses dados.

**Acceptance Criteria:**

1. WHEN formulário válido enviado THEN SHALL redirecionar para WhatsApp com mensagem: "Olá! Meu nome é {nome}, tenho {idade} anos e moro em {cidade}. Quero iniciar minha consultoria com o Matheus Sena!"
2. WHEN campo nome vazio ou inválido THEN formulário SHALL exibir erro inline sem redirect
3. WHEN campo idade não é número ou fora de 10–99 THEN formulário SHALL exibir erro inline
4. WHEN campo cidade vazio THEN formulário SHALL exibir erro inline
5. WHEN formulário exibido THEN SHALL exibir aviso LGPD: texto configurável em `content.form.privacyNotice`

**Independent Test:** Preencher formulário e verificar URL WhatsApp com dados encodeados

---

## Requirement Traceability

| Req ID | Story | Component |
|--------|-------|-----------|
| CONV-01 | CTA global | Button + lib/whatsapp.ts |
| CONV-02 | CTA de plano | Pricing + lib/whatsapp.ts |
| CONV-03 | Formulário → WhatsApp | LeadForm + lib/whatsapp.ts |
| CONV-04 | Validação inline | LeadForm + Zod |
| CONV-05 | Aviso LGPD | LeadForm + content.form.privacyNotice |
