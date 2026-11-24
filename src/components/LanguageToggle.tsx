"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex items-center gap-0.5 p-0.5 sm:p-1 rounded-full bg-secondary/80 border border-border text-xs font-mono">
      <Globe className="w-3.5 h-3.5 ml-1 mr-0.5 text-foreground/50 shrink-0 hidden sm:block" />
      <button
        type="button"
        onClick={() => setLocale("id")}
        className={`px-1.5 sm:px-2 py-0.5 rounded-full transition-all text-[11px] sm:text-xs font-bold ${
          locale === "id"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-foreground/50 hover:text-foreground hover:bg-white/5"
        }`}
        title="Ganti ke Bahasa Indonesia"
      >
        ID
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={`px-1.5 sm:px-2 py-0.5 rounded-full transition-all text-[11px] sm:text-xs font-bold ${
          locale === "en"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-foreground/50 hover:text-foreground hover:bg-white/5"
        }`}
        title="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
