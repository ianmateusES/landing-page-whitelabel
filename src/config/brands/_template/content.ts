import type { ContentConfig } from "@/types";

/**
 * WHITELABEL TEMPLATE — Preencha cada seção com o conteúdo do novo cliente.
 * Mantenha a estrutura; só altere os valores das strings.
 */
export const content: ContentConfig = {
  nav: {
    ctaLabel: "Começar agora",
    items: [
      { label: "Sobre", href: "#about" },
      { label: "Como funciona", href: "#como-funciona" },
      { label: "Resultados", href: "#resultados" },
      { label: "Planos", href: "#planos" },
      { label: "Comece agora", href: "#contato" },
    ],
  },

  hero: {
    headline: "Sua headline principal aqui",
    subheadline: "Descrição do serviço e proposta de valor em 1–2 frases.",
    primaryCta: "Quero iniciar agora",
    secondaryCta: "Ver resultados",
    socialProof: "X+ alunos transformados",
  },

  about: {
    sectionLabel: "Quem sou eu",
    heading: "Olá, me chamo [Nome].",
    bio: [
      "Primeiro parágrafo da bio — formação e experiência.",
      "Segundo parágrafo — missão e abordagem.",
    ],
    objectives: ["Objetivo 1", "Objetivo 2", "Objetivo 3", "Objetivo 4"],
    instagramCta: {
      text: "Me acompanhe no Instagram e veja meus resultados e dicas.",
      buttonLabel: "Seguir no Instagram",
    },
  },

  stats: [
    { value: "X+", label: "Anos de experiência" },
    { value: "Y+", label: "Alunos transformados" },
    { value: "100%", label: "Plano individualizado" },
    { value: "24h", label: "Suporte disponível" },
  ],

  trainingTypes: {
    sectionLabel: "Planejamento Individualizado",
    heading: "Treino adaptado à sua realidade",
    subheading: "Descrição geral da metodologia.",
    items: [
      {
        id: "servico-1",
        icon: "ClipboardList",
        title: "Serviço 1",
        description: "Descrição do serviço 1.",
      },
      {
        id: "servico-2",
        icon: "Dumbbell",
        title: "Serviço 2",
        description: "Descrição do serviço 2.",
      },
      {
        id: "servico-3",
        icon: "Flame",
        title: "Serviço 3",
        description: "Descrição do serviço 3.",
      },
      {
        id: "servico-4",
        icon: "Heart",
        title: "Serviço 4",
        description: "Descrição do serviço 4.",
      },
    ],
  },

  support: {
    sectionLabel: "Suporte",
    heading: "Você nunca estará sozinho",
    items: [
      {
        id: "suporte-1",
        icon: "MessageCircle",
        title: "Suporte via WhatsApp",
        description: "Descrição do suporte.",
      },
      {
        id: "suporte-2",
        icon: "Video",
        title: "Correção de Execução",
        description: "Descrição da correção de execução.",
      },
      {
        id: "suporte-3",
        icon: "BarChart2",
        title: "Avaliação de Evolução",
        description: "Descrição da avaliação.",
      },
    ],
  },

  howItWorks: {
    sectionLabel: "Como funciona",
    heading: "Como funciona a consultoria",
    steps: [
      { step: 1, title: "Passo 1", description: "Descrição do passo 1." },
      { step: 2, title: "Passo 2", description: "Descrição do passo 2." },
      { step: 3, title: "Passo 3", description: "Descrição do passo 3." },
      { step: 4, title: "Passo 4", description: "Descrição do passo 4." },
    ],
  },

  comparison: {
    sectionLabel: "Por que escolher?",
    heading: "Consultoria comum vs Nosso método",
    negativeTitle: "Consultoria comum",
    positiveTitle: "Nosso método",
    negativeItems: [
      { label: "Item negativo 1" },
      { label: "Item negativo 2" },
      { label: "Item negativo 3" },
    ],
    positiveItems: [
      { label: "Item positivo 1" },
      { label: "Item positivo 2" },
      { label: "Item positivo 3" },
    ],
    ctaLabel: "Quero começar",
  },

  results: {
    sectionLabel: "Resultados reais",
    heading: "Antes & Depois",
    subheading: "Transformações reais de alunos que confiaram no método.",
  },

  testimonials: {
    sectionLabel: "Feedbacks",
    heading: "O que dizem os alunos",
    subheading: "Prints de relatos reais dos alunos.",
  },

  plans: {
    sectionLabel: "Planos",
    heading: "Comece sua transformação",
    subheading: "Escolha o plano ideal para você.",
    items: [
      {
        id: "basico",
        name: "Plano Básico",
        period: "1 mês",
        price: "R$ X,00",
        priceRaw: 0,
        features: ["Feature 1", "Feature 2"],
        ctaLabel: "Quero esse plano",
      },
      {
        id: "recomendado",
        name: "Plano Recomendado",
        period: "3 meses",
        price: "R$ Y,00",
        priceRaw: 0,
        badge: "Recomendado",
        featured: true,
        features: ["Tudo do plano básico", "Feature extra 1", "Feature extra 2"],
        ctaLabel: "Quero esse plano",
      },
    ],
  },

  mission: {
    quote: "Sua frase de missão ou motivação aqui.",
    attribution: "— Nome do Profissional",
    ctaLabel: "Comece agora!",
  },

  form: {
    sectionLabel: "Comece agora",
    heading: "Dê o",
    headingHighlight: "primeiro passo",
    subheading: "Preencha seus dados e fale direto conosco no WhatsApp.",
    fields: {
      name: { label: "Nome completo", placeholder: "Seu nome" },
      age: { label: "Idade", placeholder: "Sua idade" },
      city: { label: "Cidade", placeholder: "Sua cidade" },
      plan: { label: "Plano de interesse (opcional)", placeholder: "Selecione um plano" },
    },
    submitLabel: "Chamar no WhatsApp",
    privacyNotice:
      "Ao enviar, você será redirecionado para o WhatsApp. Suas informações não são armazenadas.",
  },

  footer: {
    tagline: "Sua tagline aqui",
    copyright: `© ${new Date().getFullYear()} Nome da Marca — Todos os direitos reservados.`,
  },
};
