"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { defaultLocale, isValidLocale, type Locale } from "@/i18n/config";
import en from "@/i18n/messages/en.json";
import id from "@/i18n/messages/id.json";

type Messages = typeof en;

const messages: Record<Locale, Messages> = { en, id };

const STORAGE_KEY = "portfolio-locale";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

function getNestedValue(obj: unknown, path: string): string {
  const keys = path.split(".");
  let value: unknown = obj;

  for (const key of keys) {
    if (value && typeof value === "object" && key in value) {
      value = (value as Record<string, unknown>)[key];
    } else {
      return path;
    }
  }

  return typeof value === "string" ? value : path;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && isValidLocale(stored)) {
        setLocaleState(stored);
      }
    } catch {
      // localStorage not available
    }
    setIsInitialized(true);
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem(STORAGE_KEY, newLocale);
    } catch {
      // localStorage not available
    }
  }, []);

  const t = useCallback(
    (key: string, params?: Record<string, string | number>): string => {
      let text = getNestedValue(messages[locale], key);

      if (params) {
        Object.entries(params).forEach(([paramKey, value]) => {
          text = text.replace(new RegExp(`\\{${paramKey}\\}`, "g"), String(value));
        });
      }

      return text;
    },
    [locale]
  );

  if (!isInitialized) {
    return <>{children}</>;
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    // Return defaults for SSR/static generation
    return {
      locale: defaultLocale,
      setLocale: () => {},
      t: (key: string, params?: Record<string, string | number>): string => {
        let text = getNestedValue(messages[defaultLocale], key);
        if (params) {
          Object.entries(params).forEach(([paramKey, value]) => {
            text = text.replace(new RegExp(`\\{${paramKey}\\}`, "g"), String(value));
          });
        }
        return text;
      },
    };
  }
  return context;
}
