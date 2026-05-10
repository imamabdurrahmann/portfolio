"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Code2 } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useLocale } from "@/i18n/LocaleProvider";

export function Navbar() {
  const pathname = usePathname();
  const { t } = useLocale();

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/projects", label: t("nav.projects") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <header className="header">
      <nav className="px-6 py-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-1.5 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 group-hover:from-purple-500/30 group-hover:to-purple-600/20 transition-all">
              <Code2 className="w-5 h-5 text-purple-500" />
            </div>
            <span className="font-bold text-lg text-foreground">Portfolio</span>
          </Link>

          <div className="flex items-center gap-3">
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link px-4 py-2 rounded-lg ${
                    pathname === link.href ? "active" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Language Toggle */}
            <LanguageToggle />

            {/* CTA - Desktop */}
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-semibold shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30 transition-all"
            >
              {t("nav.hireMe")}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
