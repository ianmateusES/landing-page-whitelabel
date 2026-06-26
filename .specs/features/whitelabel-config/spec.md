# whitelabel-config Specification

## Problem Statement

Landing pages para personais são construídas uma a uma, acoplando marca e código. Isso impede reutilização e torna cada novo cliente um projeto do zero. Precisamos de um sistema onde trocar de cliente = trocar de config, não de componente.

## Goals

- [ ] Dev altera apenas `config/brands/{slug}/` para rebrandar completamente a landing
- [ ] Cores, logo, imagens e copy isolados em arquivos de config por brand
- [ ] Template `_template` documentado reduz onboarding de novo personal para 1–2h

## Out of Scope

| Feature | Reason |
|---------|--------|
| CMS headless | Complexidade desnecessária no v1 |
| Auto-discovery de brands | Deferred — registrar manualmente em config/index.ts por ora |
| i18n | Fora do escopo v1 |

---

## User Stories

### P1: Sistema multi-brand por slug ⭐ MVP

**User Story:** Como dev, quero trocar o `BRAND_SLUG` e ver a landing com identidade completa de outro personal, sem alterar componentes.

**Acceptance Criteria:**

1. WHEN dev altera `brand.colors` no slug ativo THEN página SHALL refletir novas cores via CSS variables sem rebuild de componentes
2. WHEN dev troca `brand.logo.src` THEN header e footer SHALL exibir o novo logo
3. WHEN dev atualiza `brand.images.results` THEN galeria de resultados SHALL renderizar as novas fotos
4. WHEN dev edita `content.ts` de um slug THEN copy SHALL atualizar em todas as seções sem mudar componentes
5. WHEN `BRAND_SLUG` env aponta para slug registrado THEN página SHALL carregar config completa desse slug

**Independent Test:** Trocar `primary` de `brand.colors` e ver a cor do botão mudar sem editar `Button.tsx`

---

### P1: Template para novos personais ⭐ MVP

**User Story:** Como dev, quero copiar `_template` e ter uma estrutura documentada que me guia no onboarding de um novo cliente.

**Acceptance Criteria:**

1. WHEN dev copia `_template` → `{novo-slug}` THEN `brand.ts` SHALL ter todos os campos documentados com comentários explicativos
2. WHEN dev copia `_template` → `{novo-slug}` THEN `content.ts` SHALL ter estrutura completa com placeholders funcionais
3. WHEN dev registra novo slug em `config/index.ts` THEN página SHALL funcionar com placeholders sem erros

**Independent Test:** Copiar `_template` → `test-brand`, registrar no resolver, ver landing funcionar com placeholders

---

### P1: Animações acessíveis

**User Story:** Como usuário com `prefers-reduced-motion`, quero que animações sejam desabilitadas.

**Acceptance Criteria:**

1. WHEN `prefers-reduced-motion: reduce` THEN animações de scroll reveal e objetivos SHALL ser desabilitadas
2. WHEN `prefers-reduced-motion: no-preference` THEN animações SHALL funcionar normalmente

**Independent Test:** Ativar `prefers-reduced-motion` no OS e verificar ausência de animações

---

## Requirement Traceability

| Req ID | Story | Component |
|--------|-------|-----------|
| WL-01 | Multi-brand por slug | ThemeProvider + brand.colors |
| WL-02 | Logo por brand | Header, Footer + brand.logo |
| WL-03 | Imagens por brand | Results, Hero + brand.images |
| WL-04 | Copy por brand | Todas as seções + content.ts |
| WL-05 | BRAND_SLUG resolver | config/index.ts |
| WL-06 | Template documentado | config/brands/_template/ |
| WL-07 | prefers-reduced-motion | animações Framer Motion |
