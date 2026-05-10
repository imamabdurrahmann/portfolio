export const locales = ["en", "id"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "EN",
  id: "ID",
};

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
