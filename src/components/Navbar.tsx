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
      <nav className="px-6 py-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Imam.dev
            </span>
          </Link>

          <div className="flex items-center gap-4">
            {/* Desktop Nav - simple, no animations */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-secondary text-primary"
                      : "text-foreground/60 hover:text-foreground hover:bg-secondary"
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
              className="hidden md:inline-flex hero-cta !py-2.5 !px-5 !text-sm"
            >
              {t("nav.hireMe")}
            </Link>

            {/* Mobile Menu Toggle - simple */}
            <button
              className="md:hidden p-2 rounded-xl bg-secondary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - simple */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 rounded-2xl bg-secondary border border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-primary/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="hero-cta !py-3 !px-5 mt-2 justify-center"
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
