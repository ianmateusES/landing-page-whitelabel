interface WhatsAppOptions {
  message: string;
}

export function buildWhatsAppUrl(phone: string, { message }: WhatsAppOptions): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function buildPlanWhatsAppUrl(
  phone: string,
  brandName: string,
  planName: string,
  planPrice: string
): string {
  const message = `Olá! Tenho interesse no ${planName} (${planPrice}) da consultoria ${brandName}. Pode me passar mais informações?`;
  return buildWhatsAppUrl(phone, { message });
}

export function buildLeadWhatsAppUrl(
  phone: string,
  brandName: string,
  lead: { name: string; age: string; city: string }
): string {
  const message = `Olá! Meu nome é ${lead.name}, tenho ${lead.age} anos e moro em ${lead.city}. Quero iniciar minha consultoria com a ${brandName}!`;
  return buildWhatsAppUrl(phone, { message });
}
