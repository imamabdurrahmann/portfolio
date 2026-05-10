"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useLocale } from "@/i18n/LocaleProvider";

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
                <motion.div key={link.href} variants={navItemVariants}>
                  <Link
                    href={link.href}
                    className={`nav-link px-4 py-2 rounded-lg ${
                      pathname === link.href ? "active" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Language Toggle */}
            <LanguageToggle />

            {/* CTA - Desktop */}
            <motion.div variants={navItemVariants}>
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-semibold shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30 transition-all"
              >
                {t("nav.hireMe")}
              </Link>
            </motion.div>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
