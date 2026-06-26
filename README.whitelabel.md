# Guia de Whitelabel — Como adicionar um novo personal

Este projeto é um template whitelabel para landing pages de personal trainers. A marca e o conteúdo são **totalmente configuráveis** sem tocar em nenhum componente React.

Tempo estimado para rebrand: **1–2 horas**.

---

## Estrutura de configuração

```
src/config/brands/
├── matheus-sena/       ← cliente âncora (exemplo completo)
│   ├── brand.ts        ← logo, cores, whatsapp, imagens, instagram
│   └── content.ts      ← todo o copy da landing (seção por seção)
└── _template/          ← ponto de partida para novos clientes
    ├── brand.ts
    └── content.ts

public/brands/
├── matheus-sena/       ← assets do cliente âncora
└── _template/          ← mirrors para onboarding
```

---

## Passo a passo para um novo personal

### 1. Copie o template

```bash
cp -r src/config/brands/_template src/config/brands/nome-do-personal
cp -r public/brands/_template public/brands/nome-do-personal
```

### 2. Preencha `brand.ts`

Abra `src/config/brands/nome-do-personal/brand.ts` e edite:

| Campo | O que preencher |
|-------|-----------------|
| `slug` | Identificador único (`joao-silva`) |
| `name` | Nome da marca (`JS Fitness`) |
| `professionalName` | Nome completo |
| `tagline` | Frase de impacto |
| `logo.src` | Caminho do logo em `/public/brands/{slug}/logo.svg` |
| `colors.primary` | Cor primária em HEX |
| `colors.background` | Cor de fundo em HEX |
| `contact.whatsapp` | Número E.164 sem + (ex: `5511999999999`) |
| `social.instagram` | Arroba sem @ (ex: `joaosilva`) |
| `images.*` | Caminhos dos assets em `/public/brands/{slug}/` |

### 3. Preencha `content.ts`

Abra `src/config/brands/nome-do-personal/content.ts` e preencha cada seção:

- `hero` — headline, subheadline, CTAs
- `about` — bio e objetivos
- `stats` — métricas de autoridade
- `trainingTypes` — modalidades/serviços (até 4)
- `support` — diferenciais de suporte
- `howItWorks` — passos da consultoria (até 4)
- `comparison` — coluna negativa vs positiva
- `testimonials` — depoimentos de alunos
- `plans` — planos e preços
- `mission` — quote de fechamento
- `form` — campos e aviso LGPD

### 4. Adicione os assets

Coloque os arquivos em `public/brands/{slug}/`:

```
public/brands/{slug}/
├── logo.svg          ← logo da marca
├── hero.webp         ← imagem do hero (1920×1080 recomendado)
├── profile.webp      ← foto do profissional (retrato 3:4)
├── og.png            ← Open Graph (1200×630)
└── results/              ← carregados automaticamente (ver abaixo)
```

#### Resultados (dinâmico)

Adicione pares **imagem + .txt** em `public/brands/{slug}/results/`:

```
public/brands/{slug}/results/
├── lucas-muniz.jpeg
├── lucas-muniz.txt    ← conteúdo: "Lucas Muniz" (nome exibido no card)
├── haissa.webp
└── haissa.txt         ← conteúdo: "Haissa"
```

- Formatos aceitos: `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`
- O `.txt` deve ter o **mesmo nome** da imagem (sem extensão)
- Sem `.txt`, exibe **somente a imagem** (sem nome/legenda abaixo)
- Não é necessário editar `brand.ts` — novos alunos aparecem automaticamente após rebuild

**Formatos recomendados:** WebP ou JPEG para fotos, SVG para logotipos.
**Tamanho máximo:** ≤ 500KB por imagem (use [Squoosh](https://squoosh.app/) para comprimir).

### 5. Registre o novo slug em `config/index.ts`

```typescript
// src/config/index.ts
import { brand as joaoSilvaBrand } from "./brands/joao-silva/brand";
import { content as joaoSilvaContent } from "./brands/joao-silva/content";

const brands: Record<string, BrandEntry> = {
  "matheus-sena": { brand: matheusSenaBrand, content: matheusSenaContent },
  "joao-silva": { brand: joaoSilvaBrand, content: joaoSilvaContent }, // ← adicione aqui
};
```

### 6. Faça o deploy com a variável de ambiente

Na Vercel (ou `.env.local` para dev local):

```bash
BRAND_SLUG=joao-silva
```

Se `BRAND_SLUG` não for definido, o default é `matheus-sena`.

---

## Testando localmente com outro brand

```bash
BRAND_SLUG=joao-silva npm run dev
```

---

## Cores — referência de tokens

Os tokens CSS são injetados automaticamente pelo `ThemeProvider` a partir de `brand.colors`. Para referência:

| Token | Uso |
|-------|-----|
| `primary` | Botões, destaques, ícones |
| `primaryForeground` | Texto sobre fundo primário |
| `accent` | Hover e variações do primário |
| `background` | Fundo principal da página |
| `foreground` | Texto principal |
| `muted` | Fundo de cards e seções alternadas |
| `mutedForeground` | Texto secundário |
| `border` | Bordas de cards e separadores |
| `card` | Fundo de cards |
| `cardForeground` | Texto dentro de cards |

---

## Checklist de entrega para novo cliente

- [ ] `brand.ts` preenchido com dados reais
- [ ] `content.ts` com copy aprovado pelo cliente
- [ ] Logo em formato SVG ou PNG transparente
- [ ] Foto profissional (retrato, boa iluminação)
- [ ] Fotos antes/depois dos alunos (com consentimento)
- [ ] Número WhatsApp confirmado
- [ ] Paleta de cores aprovada
- [ ] Slug registrado em `config/index.ts`
- [ ] `BRAND_SLUG` configurado no ambiente de deploy
- [ ] Domínio customizado configurado (opcional)
- [ ] `src/app/sitemap.ts` atualizado com URL de produção
