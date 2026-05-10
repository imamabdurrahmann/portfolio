"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { localeNames, type Locale } from "@/i18n/config";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const { locale, setLocale } = useLocale();

  const toggleLocale = () => {
    const newLocale: Locale = locale === "en" ? "id" : "en";
    setLocale(newLocale);
  };

  return (
    <button
      onClick={toggleLocale}
      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-muted transition-colors"
      aria-label={`Switch to ${locale === "en" ? "Indonesian" : "English"}`}
    >
      <Globe className="w-4 h-4" />
      <span>{localeNames[locale]}</span>
    </button>
  );
}
