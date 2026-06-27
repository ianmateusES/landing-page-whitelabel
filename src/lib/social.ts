import type { BrandSocial, SocialPlatform } from "@/types";

export interface SocialLinkItem {
  id: SocialPlatform;
  href: string;
  label: string;
}

function isConfigured(value?: string | null): value is string {
  return !!value?.trim();
}

function toUrl(value: string, build: (username: string) => string): string {
  const trimmed = value.trim();
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed;
  }
  return build(trimmed.replace(/^@/, ""));
}

export function getSocialLinks(social: BrandSocial): SocialLinkItem[] {
  const links: SocialLinkItem[] = [];

  if (isConfigured(social.instagram)) {
    links.push({
      id: "instagram",
      href: toUrl(social.instagram, (u) => `https://instagram.com/${u}`),
      label: "Instagram",
    });
  }

  if (isConfigured(social.youtube)) {
    links.push({
      id: "youtube",
      href: toUrl(social.youtube, (u) => `https://youtube.com/@${u}`),
      label: "YouTube",
    });
  }

  if (isConfigured(social.tiktok)) {
    links.push({
      id: "tiktok",
      href: toUrl(social.tiktok, (u) => `https://tiktok.com/@${u}`),
      label: "TikTok",
    });
  }

  if (isConfigured(social.telegram)) {
    links.push({
      id: "telegram",
      href: toUrl(social.telegram, (u) => `https://t.me/${u}`),
      label: "Telegram",
    });
  }

  if (isConfigured(social.spotify)) {
    links.push({
      id: "spotify",
      href: toUrl(social.spotify, (u) => `https://open.spotify.com/artist/${u}`),
      label: "Spotify",
    });
  }

  return links;
}

export function getInstagramUrl(social: BrandSocial): string | null {
  if (!isConfigured(social.instagram)) return null;
  return toUrl(social.instagram, (u) => `https://instagram.com/${u}`);
}
