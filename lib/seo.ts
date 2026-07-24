const vercelUrl =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (vercelUrl ? `https://${vercelUrl}` : undefined);

export const siteName = "InnerLight Counselling";
export const siteDescription =
  "InnerLight Counselling offers evidence-based, one-to-one psychological support for anxiety, depression, trauma, and life transitions.";
export const siteLogo = "/innerlight-logo-light.svg";
export const siteOgImage = "/opengraph-image";
export const instagramUrl = "https://instagram.com/innerlight_counselling";

export const siteKeywords = [
  "counselling",
  "therapy",
  "mental health",
  "anxiety",
  "depression",
  "couples therapy",
  "trauma recovery",
  "online therapy",
  "clinical psychology",
  "psychologist India",
];
