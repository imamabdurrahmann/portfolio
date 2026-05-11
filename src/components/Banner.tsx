"use client";

import Link from "next/link";
import { Star, Heart, TrendingUp, ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import { useLocale } from "@/i18n/LocaleProvider";

const roles = ["Flutter Developer", "Mobile App Builder", "UI Enthusiast"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

export function Banner() {
  const { displayedText } = useTypingAnimation(roles);
  const { t } = useLocale();

  return (
    <section className="hero-section px-6">
      {/* Floating orbs for depth */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Premium Badge */}
          <motion.div
            variants={itemVariants}
            className="hero-badge mb-8"
          >
            <span className="hero-badge-dot" />
            <span className="text-sm font-medium">{t("hero.available")}</span>
          </motion.div>

          {/* Premium Heading */}
          <motion.h1
            variants={itemVariants}
            className="hero-heading"
          >
            {t("hero.title")}<br />
            <span className="hero-heading-accent">{t("hero.titleAccent2")}</span>
          </motion.h1>

          {/* Typing Role - cleaner styling */}
          <motion.div
            variants={itemVariants}
            className="mt-6 min-h-[2.5rem] flex items-center justify-center"
          >
            <span className="hero-role">
              {t("hero.typingRole", { role: displayedText })}
              <span className="typing-cursor text-primary ml-1">|</span>
            </span>
          </motion.div>

          {/* Description with more breathing room */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-base md:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed"
          >
            {t("hero.description")}
          </motion.p>

          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="mt-8 mb-6"
          >
            <div className="relative inline-block">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl shadow-primary/10">
                <img
                  src="/profile.jpg"
                  alt="Muhammad Imam Abdurrahman"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-emerald-500 rounded-full border-4 border-background flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            </div>
          </motion.div>

          {/* Premium Stats - cards instead of plain numbers */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mt-10"
          >
            {[
              { num: "4", label: t("hero.project"), icon: <Star className="w-4 h-4" /> },
              { num: "100%", label: t("hero.dedication"), icon: <Heart className="w-4 h-4" /> },
              { num: "8+", label: t("hero.techStack"), icon: <TrendingUp className="w-4 h-4" /> },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="hero-stat"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="flex items-center gap-2 hero-stat-number">
                  {stat.num}
                </div>
                <span className="hero-stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Premium CTA */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mt-10"
          >
            <Link href="/projects" className="hero-cta">
              {t("hero.viewProject")}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="hero-cta-secondary">
              <Mail className="w-5 h-5" />
              {t("hero.contactMe")}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
