"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useLocale } from "@/i18n/LocaleProvider";
import { Menu, X, ArrowRight, Home, Briefcase, Award, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const pathname = usePathname();
  const { t } = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu whenever pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: t("nav.home"), icon: Home },
    { href: "/projects", label: t("nav.projects"), icon: Briefcase },
    { href: "/certificates", label: t("nav.certificates"), icon: Award },
    { href: "/contact", label: t("nav.contact"), icon: Mail },
  ];

  return (
    <header className="fixed top-3 sm:top-6 left-0 right-0 z-50 pointer-events-none px-3 sm:px-6">
      {/* DESKTOP NAVBAR (md and up) */}
      <nav className="hidden md:flex pointer-events-auto mx-auto max-w-fit bg-card/75 backdrop-blur-xl border border-border/50 shadow-2xl shadow-black/20 rounded-full px-2.5 py-2 items-center justify-between gap-2">
        <div className="flex items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 lg:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
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
        <div className="flex items-center gap-2 pl-1 pr-1">
          <ThemeToggle />
          <LanguageToggle />
          <Link
            href="/contact"
            className="ml-1 px-4 py-2 bg-primary text-primary-foreground font-bold rounded-full text-sm hover:scale-105 transition-transform"
          >
            {t("nav.hireMe")}
          </Link>
        </div>
      </nav>

      {/* MOBILE NAVBAR (< md) */}
      <div className="flex md:hidden flex-col max-w-md mx-auto w-full">
        <nav className="pointer-events-auto bg-card/85 backdrop-blur-xl border border-border/60 shadow-xl shadow-black/20 rounded-full px-3 py-1.5 flex items-center justify-between w-full">
          {/* Brand Logo / Monogram */}
          <Link
            href="/"
            className="flex items-center gap-2 pl-1.5 pr-2 py-1 text-sm font-black tracking-tight text-foreground hover:text-primary transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-heading">IMAM</span>
          </Link>

          {/* Action Group: Theme, Language, Hamburger */}
          <div className="flex items-center gap-1.5">
            <LanguageToggle />
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 rounded-full bg-secondary/80 border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors ml-0.5 active:scale-95"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="pointer-events-auto mt-2 w-full bg-card/95 backdrop-blur-2xl border border-border/80 shadow-2xl rounded-3xl p-3 flex flex-col gap-1 overflow-hidden"
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "text-foreground/80 hover:bg-secondary/80"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? "text-primary-foreground" : "text-primary"}`} />
                      <span>{link.label}</span>
                    </div>
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-primary-foreground"></span>
                    ) : (
                      <ArrowRight className="w-4 h-4 text-foreground/40" />
                    )}
                  </Link>
                );
              })}

              <div className="pt-2 mt-1 border-t border-border/50">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 px-4 bg-primary text-primary-foreground text-center font-bold text-sm rounded-2xl hover:bg-orange-600 transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>{t("nav.hireMe")}</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
