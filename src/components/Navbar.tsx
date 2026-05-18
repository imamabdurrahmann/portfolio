"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useLocale } from "@/i18n/LocaleProvider";
import { useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const { t } = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/projects", label: t("nav.projects") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4 pointer-events-none">
      <nav className="pointer-events-auto bg-card/70 backdrop-blur-xl border border-border/50 shadow-2xl shadow-black/20 rounded-full px-2 py-2 flex items-center gap-1 sm:gap-2">
        {/* Desktop & Mobile Links Container */}
        <div className="flex items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 bg-primary/10 rounded-full -z-10"></span>
                )}
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Divider */}
        <div className="w-[1px] h-6 bg-border mx-1"></div>

        {/* Actions */}
        <div className="flex items-center gap-1 sm:gap-2 pl-1 pr-1">
          <ThemeToggle />
          <LanguageToggle />
          <Link href="/contact" className="ml-1 px-4 py-2 bg-primary text-primary-foreground font-bold rounded-full text-sm hover:scale-105 transition-transform">
            {t("nav.hireMe")}
          </Link>
        </div>
      </nav>
    </header>
  );
}