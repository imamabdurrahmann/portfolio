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
    <header className="header">
      <nav className="px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-primary">
            Imam.dev
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-secondary text-primary"
                    : "text-foreground/60 hover:text-foreground hover:bg-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <LanguageToggle />
            <Link href="/contact" className="hero-cta !py-2 !px-4 !text-sm">
              {t("nav.hireMe")}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg bg-secondary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-border">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/70 hover:bg-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border">
              <ThemeToggle />
              <LanguageToggle />
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="hero-cta !py-2 !px-4 !text-sm flex-1 justify-center"
              >
                {t("nav.hireMe")}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}