"use client";

import Link from "next/link";
import { Star, Heart, TrendingUp, ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import { useLocale } from "@/i18n/LocaleProvider";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const roles = ["Flutter Developer", "Mobile App Builder", "UI Enthusiast"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Banner() {
  const { displayedText } = useTypingAnimation(roles);
  const { t } = useLocale();

  return (
    <section className="hero-section px-6">
      <div className="hero-glow" />
      <div className="hero-glow-2" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-foreground/80">{t("hero.available")}</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
            {t("hero.title")}<br />
            {t("hero.titleAccent")}<br />
            <span className="gradient-text">{t("hero.titleAccent2")}</span>
          </motion.h1>

          {/* Typing Role */}
          <motion.div variants={itemVariants} className="mt-6 text-xl md:text-2xl font-semibold text-foreground/90">
            {t("hero.typingRole", { role: displayedText })}
            <span className="typing-cursor text-primary">|</span>
          </motion.div>

          {/* Description */}
          <motion.p variants={itemVariants} className="mt-4 text-base text-foreground/70 max-w-xl mx-auto leading-relaxed">
            {t("hero.description")}
          </motion.p>

          {/* Stats */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 md:gap-12 mt-8">
            {[
              { num: "3+", label: t("hero.project"), icon: <Star className="w-4 h-4" /> },
              { num: "100%", label: t("hero.dedication"), icon: <Heart className="w-4 h-4" /> },
              { num: "5+", label: t("hero.techStack"), icon: <TrendingUp className="w-4 h-4" /> },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <div className="flex items-center gap-1 text-3xl md:text-4xl font-bold gradient-text">
                  {stat.num}
                  {stat.icon}
                </div>
                <span className="text-xs text-foreground/60 mt-1">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mt-8">
            <Link href="/projects" className="btn-primary">
              {t("hero.viewProject")}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="btn-secondary">
              <Mail className="w-4 h-4" />
              {t("hero.contactMe")}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
