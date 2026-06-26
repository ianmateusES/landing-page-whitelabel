export interface BrandColors {
  primary: string;
  primaryForeground: string;
  accent: string;
  background: string;
  foreground: string;
  muted: string;
  mutedForeground: string;
  border: string;
  card: string;
  cardForeground: string;
}

export interface BrandConfig {
  slug: string;
  name: string;
  professionalName: string;
  tagline: string;
  logo: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  colors: BrandColors;
  contact: {
    whatsapp: string; // E.164 without + e.g. "5511999999999"
  };
  social: {
    instagram: string; // without @ e.g. "matheussenames"
  };
  images: {
    hero: string;
    profile: string;
    og: string;
    results: ResultImage[];
    testimonials: TestimonialImage[];
  };
}

export interface ResultImage {
  id: string;
  name: string;
  src: string;
  alt: string;
}

export interface TestimonialImage {
  id: string;
  src?: string;
  alt?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface TrainingType {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface SupportItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
}

export interface ComparisonItem {
  label: string;
}

export interface Plan {
  id: string;
  name: string;
  period: string;
  price: string;
  priceRaw: number;
  badge?: string;
  featured?: boolean;
  features: string[];
  ctaLabel: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  imageId?: string;
}

export interface ContentConfig {
  nav: {
    ctaLabel: string;
    items: NavItem[];
  };
  hero: {
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    socialProof: string;
  };
  about: {
    sectionLabel: string;
    heading: string;
    bio: string[];
    objectives: string[];
  };
  stats: StatItem[];
  trainingTypes: {
    sectionLabel: string;
    heading: string;
    subheading: string;
    items: TrainingType[];
  };
  support: {
    sectionLabel: string;
    heading: string;
    items: SupportItem[];
  };
  howItWorks: {
    sectionLabel: string;
    heading: string;
    steps: HowItWorksStep[];
  };
  comparison: {
    sectionLabel: string;
    heading: string;
    negativeTitle: string;
    positiveTitle: string;
    negativeItems: ComparisonItem[];
    positiveItems: ComparisonItem[];
    ctaLabel: string;
  };
  results: {
    sectionLabel: string;
    heading: string;
    subheading: string;
  };
  testimonials: {
    sectionLabel: string;
    heading: string;
    items: Testimonial[];
  };
  plans: {
    sectionLabel: string;
    heading: string;
    subheading: string;
    items: Plan[];
  };
  mission: {
    quote: string;
    attribution: string;
    ctaLabel: string;
  };
  form: {
    sectionLabel: string;
    heading: string;
    subheading: string;
    fields: {
      name: { label: string; placeholder: string };
      age: { label: string; placeholder: string };
      city: { label: string; placeholder: string };
    };
    submitLabel: string;
    privacyNotice: string;
  };
  footer: {
    tagline: string;
    copyright: string;
  };
}
