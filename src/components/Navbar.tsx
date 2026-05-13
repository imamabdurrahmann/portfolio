"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Code2, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useLocale } from "@/i18n/LocaleProvider";
import { useState } from "react";

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

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
    <motion.header
      className="header"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <nav className="px-6 py-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between">
          {/* Logo - simple text */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl font-bold text-primary" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Imam.dev
            </span>
          </Link>

          <div className="flex items-center gap-4">
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={navItemVariants}>
                  <Link
                    href={link.href}
                    className={`nav-link relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                      pathname === link.href ? "active bg-primary/10 text-primary" : ""
                    }`}
                  >
                    {link.label}
                    {pathname === link.href && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Language Toggle */}
            <LanguageToggle />

            {/* CTA - Desktop */}
            <motion.div variants={navItemVariants} className="hidden md:block">
              <Link
                href="/contact"
                className="hero-cta !py-2.5 !px-5 !text-sm"
              >
                {t("nav.hireMe")}
              </Link>
            </motion.div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-xl glass-card"
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 p-4 rounded-2xl glass-card"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-secondary"
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
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
