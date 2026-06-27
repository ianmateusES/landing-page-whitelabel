import type { ContentConfig } from "@/types";

export const content: ContentConfig = {
  nav: {
    ctaLabel: "Vem pro time",
    items: [
      { label: "Quem sou eu", href: "#about" },
      { label: "Como funciona", href: "#como-funciona" },
      { label: "Resultados", href: "#resultados" },
      { label: "Planos", href: "#planos" },
      { label: "Comece agora", href: "#contato" },
    ],
  },

  hero: {
    headline: "A mudança de hábito pelo treino",
    subheadline:
      "Consultoria Online personalizada com treinador dedicado ao seu objetivo — hipertrofia, emagrecimento, performance ou qualidade de vida.",
    primaryCta: "Quero iniciar agora",
    secondaryCta: "Ver resultados",
    socialProof: "500+ alunos transformados",
  },

  about: {
    sectionLabel: "Quem sou eu",
    heading: "Olá, me chamo Matheus Sena.",
    bio: [
      "Graduando em Educação Física, trabalho com musculação há mais de 6 anos e já ajudei mais de 500 pessoas a alcançarem seus objetivos.",
      "Todo o trabalho é voltado para você que busca uma transformação real — rápida, segura e sustentável, sempre de acordo com a sua rotina.",
    ],
    objectives: ["Hipertrofia", "Performance", "Emagrecimento", "Qualidade de vida"],
    instagramCta: {
      text: "Me acompanhe no Instagram e veja meus resultados e dicas de treino.",
      buttonLabel: "Seguir no Instagram",
    },
  },

  stats: [
    { value: "6+", label: "Anos de experiência" },
    { value: "500+", label: "Alunos transformados" },
    { value: "100%", label: "Plano individualizado" },
    { value: "24h", label: "Suporte via WhatsApp" },
  ],

  trainingTypes: {
    sectionLabel: "Planejamento Individualizado",
    heading: "Treino adaptado à sua realidade",
    subheading:
      "Tudo de acordo com a sua rotina, alimentação e horários disponíveis.",
    items: [
      {
        id: "individualizado",
        icon: "ClipboardList",
        title: "Treino Individualizado",
        description:
          "Treino, aeróbico e alongamento — tudo planejado conforme a sua rotina, alimentação e horários disponíveis.",
      },
      {
        id: "hipertrofia",
        icon: "Dumbbell",
        title: "Treino para Hipertrofia",
        description:
          "Focado em quem quer ganhar massa magra. Trabalhamos diversas técnicas para que a construção dos seus músculos seja feita da melhor maneira.",
      },
      {
        id: "emagrecimento",
        icon: "Flame",
        title: "Treino para Emagrecimento",
        description:
          "Combinação de treino de força e exercícios aeróbicos para perda de peso saudável, preservando o máximo de massa magra.",
      },
      {
        id: "qualidade-de-vida",
        icon: "Heart",
        title: "Qualidade de Vida",
        description:
          "Para quem quer manter a saúde em dia, em movimento, sem foco forçado em emagrecimento — treino para manutenção e bem-estar.",
      },
    ],
  },

  support: {
    sectionLabel: "Suporte Diário",
    heading: "Você nunca estará sozinho",
    items: [
      {
        id: "whatsapp",
        icon: "MessageCircle",
        title: "Suporte via WhatsApp",
        description:
          "Todo o suporte é via WhatsApp. Até 24 horas para responder a todos os alunos.",
      },
      {
        id: "execucao",
        icon: "Video",
        title: "Correção de Execução",
        description:
          "Dúvida em algum exercício? Grave e envie sua execução para que eu possa corrigi-la.",
      },
      {
        id: "avaliacao",
        icon: "BarChart2",
        title: "Avaliação de Evolução",
        description:
          "Acompanhamento periódico da sua evolução para garantir que estamos no caminho certo.",
      },
    ],
  },

  howItWorks: {
    sectionLabel: "Como funciona",
    heading: "4 passos para a sua transformação",
    steps: [
      {
        step: 1,
        title: "Anamnese",
        description:
          "Após entrar em um dos planos, você recebe um questionário que deve ser respondido com seriedade. Ele nos ajuda a montar o treino ideal para o seu perfil.",
      },
      {
        step: 2,
        title: "Treino Individualizado",
        description:
          "Após preencher a anamnese, você recebe seu planejamento em até 7 dias — com um áudio meu explicando tudo que tem no treino.",
      },
      {
        step: 3,
        title: "Feedbacks Semanais",
        description:
          "Toda semana solicito um feedback sobre como estão os treinos, se há alguma dúvida ou se você está sentindo alguma dor — sempre via WhatsApp.",
      },
      {
        step: 4,
        title: "Novo Planejamento",
        description:
          "Ao final da periodização, entro em contato para avaliar sua condição atual e fazer os ajustes para o novo treino individualizado, conforme o plano contratado.",
      },
    ],
  },

  comparison: {
    sectionLabel: "Por que a MS Workout?",
    heading: "Consultoria comum vs Método MS Workout",
    negativeTitle: "Consultoria comum",
    positiveTitle: "Método MS Workout",
    negativeItems: [
      { label: "Treino e dieta genéricos copiados da internet" },
      { label: "Sem acompanhamento real do progresso" },
      { label: "Suporte falho — você fica sozinho" },
      { label: "Resultados lentos ou inexistentes" },
      { label: "Profissional sem experiência comprovada" },
      { label: "Sem ajuste ao seu objetivo e rotina" },
    ],
    positiveItems: [
      { label: "Treino 100% individualizado ao seu objetivo" },
      { label: "Reavaliação e novo planejamento ao fim de cada periodização" },
      { label: "Suporte via WhatsApp com resposta em até 24h" },
      { label: "Resultados rápidos, seguros e sustentáveis" },
      { label: "6+ anos de experiência e 500+ alunos transformados" },
      { label: "Planejamento adaptado à sua rotina e horários" },
    ],
    ctaLabel: "Quero o Método MS Workout",
  },

  results: {
    sectionLabel: "Resultados reais",
    heading: "Antes & Depois",
    subheading:
      "Transformações reais de alunos que confiaram no método MS Workout. Você pode ser o próximo.",
  },

  testimonials: {
    sectionLabel: "O que dizem os alunos",
    heading: "Feedbacks reais",
    subheading: "Relatos reais de alunos no dia a dia da consultoria.",
  },

  plans: {
    sectionLabel: "Escolha seu plano",
    heading: "Comece sua transformação",
    subheading: "Quanto mais tempo, mais resultado. Escolha o plano ideal e fale com nosso time agora mesmo.",
    items: [
      {
        id: "mensal",
        name: "Plano Mensal",
        period: "1 mês",
        price: "R$ 200,00",
        priceRaw: 200,
        features: [
          "Treino individualizado",
          "Suporte via WhatsApp",
          "Anamnese completa",
          "Áudio explicativo do treino",
        ],
        ctaLabel: "Quero esse plano",
      },
      {
        id: "trimestral",
        name: "Plano Trimestral",
        period: "3 meses",
        price: "R$ 540,00",
        priceRaw: 540,
        badge: "10% OFF",
        features: [
          "Tudo do plano Mensal",
          "Reavaliação periódica",
          "Feedbacks semanais",
          "Novo planejamento ao fim do ciclo",
        ],
        ctaLabel: "Quero esse plano",
      },
      {
        id: "semestral",
        name: "Plano Semestral",
        period: "6 meses",
        price: "R$ 1.020,00",
        priceRaw: 1020,
        badge: "Recomendado",
        featured: true,
        features: [
          "Tudo do plano Trimestral",
          "Periodização completa",
          "Acompanhamento prioritário",
          "Transformação real e duradoura",
          "15% de desconto",
        ],
        ctaLabel: "Quero esse plano",
      },
      {
        id: "anual",
        name: "Plano Anual",
        period: "12 meses",
        price: "R$ 1.920,00",
        priceRaw: 1920,
        badge: "20% OFF",
        features: [
          "Tudo do plano Semestral",
          "Maior economia (R$ 480,00)",
          "Compromisso de longo prazo",
          "Evolução máxima garantida",
        ],
        ctaLabel: "Quero esse plano",
      },
    ],
  },

  mission: {
    quote:
      "Minha missão é atingirmos seus objetivos da maneira mais rápida possível, sempre respeitando sua saúde e de acordo com sua rotina!",
    attribution: "— Matheus Sena",
    ctaLabel: "Vem pro time MS Workout!",
  },

  form: {
    sectionLabel: "Comece agora",
    heading: "Dê o",
    headingHighlight: "primeiro passo",
    subheading: "Preencha seus dados e fale direto com nosso time no WhatsApp.",
    fields: {
      name: { label: "Nome completo (opcional)", placeholder: "Seu nome" },
      age: { label: "Idade (opcional)", placeholder: "Ex: 28" },
      city: { label: "Cidade (opcional)", placeholder: "Sua cidade" },
      plan: { label: "Plano de interesse (opcional)", placeholder: "Selecione um plano" },
    },
    submitLabel: "Chamar no WhatsApp",
    privacyNotice:
      "Ao enviar, você será redirecionado para o WhatsApp com seus dados preenchidos.",
  },

  footer: {
    tagline: "A mudança de hábito pelo treino",
    copyright: `© ${new Date().getFullYear()} MS Workout — Todos os direitos reservados.`,
  },
};
