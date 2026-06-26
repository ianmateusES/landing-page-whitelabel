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

export function buildLeadMessage(
  brandName: string,
  lead: { name: string; age: string; city: string; plan?: { name: string; price: string } }
): string {
  const name = lead.name.trim();
  const age = lead.age.trim();
  const city = lead.city.trim();
  const closing = `Quero iniciar minha consultoria com a ${brandName}!`;
  const planPart = lead.plan
    ? `Tenho interesse no ${lead.plan.name} (${lead.plan.price})`
    : "";

  const hasIdentity = !!(name || age || city);

  if (!hasIdentity && !planPart) {
    return `Olá! ${closing}`;
  }

  if (!hasIdentity && planPart) {
    return `Olá! ${planPart} e ${closing.charAt(0).toLowerCase()}${closing.slice(1)}`;
  }

  let identity = "";
  if (name && !age && !city) {
    identity = `Meu nome é ${name}`;
  } else {
    const details: string[] = [];
    if (age) details.push(`tenho ${age} anos`);
    if (city) details.push(`moro em ${city}`);

    if (name && details.length > 0) {
      identity = `Meu nome é ${name}, ${details.join(" e ")}`;
    } else if (name) {
      identity = `Meu nome é ${name}`;
    } else if (details.length === 2) {
      identity = `${details[0].charAt(0).toUpperCase()}${details[0].slice(1)} e ${details[1]}`;
    } else if (age) {
      identity = `Tenho ${age} anos`;
    } else if (city) {
      identity = `Moro em ${city}`;
    }
  }

  if (identity && planPart) {
    return `Olá! ${identity}. ${planPart}. ${closing}`;
  }

  return `Olá! ${identity} e ${closing.charAt(0).toLowerCase()}${closing.slice(1)}`;
}

export function buildLeadWhatsAppUrl(
  phone: string,
  brandName: string,
  lead: { name: string; age: string; city: string; plan?: { name: string; price: string } }
): string {
  const message = buildLeadMessage(brandName, lead);
  return buildWhatsAppUrl(phone, { message });
}
