"use client";

import Link from "next/link";
import { Star, Heart, ArrowRight, Mail, Sparkles, Smartphone, Globe, Monitor } from "lucide-react";
import { motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";

// Slight rotation for human feel - not perfectly aligned
const ROTATION_ANGLE = 2;

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
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 }
};

const offsetVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: { opacity: 1, x: 0 }
};

const platforms = [
  { icon: Smartphone, label: "Android" },
  { icon: Globe, label: "iOS" },
  { icon: Globe, label: "Web" },
  { icon: Monitor, label: "Desktop" },
];

export function Banner() {
  const { t } = useLocale();

  return (
    <section className="hero-section px-6">
      {/* Warm ambient background */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column - Personal, asymmetric */}
          <div className="lg:col-span-7 space-y-7">
            {/* No badge - more authentic, just intro */}
            <motion.div variants={itemVariants} className="text-left">
              <h1 className="hero-heading text-left" style={{ transform: `rotate(-${ROTATION_ANGLE * 0.3}deg)` }}>
                {t("hero.title")}<br />
                <span className="hero-heading-accent">{t("hero.titleAccent2")}</span>
              </h1>
            </motion.div>

            {/* Role indicator - slightly varied spacing */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3"
              style={{ marginLeft: `${Math.random() * 8}px` }}
            >
              <span className="h-6 w-[2px] bg-gradient-to-b from-primary to-accent-secondary rounded-full" />
              <span className="hero-role font-normal italic">
                Flutter Developer
              </span>
            </motion.div>

            {/* Personal story - conversational, not corporate */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-foreground/70 leading-relaxed text-left max-w-xl font-light"
            >
              {t("hero.description")}
            </motion.p>

            {/* Why Flutter story - personal POV */}
            <motion.div
              variants={offsetVariants}
              className="relative pl-5 border-l-2 border-primary/25"
            >
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">{t("hero.storyTitle")}</span>
              </div>
              <p className="text-sm text-foreground/60 leading-relaxed">
                {t("hero.storyDescription")}
              </p>

              {/* Platform badges */}
              <div className="flex flex-wrap items-center gap-3 mt-4">
                {platforms.map((platform, i) => (
                  <motion.div
                    key={platform.label}
                    className="platform-badge"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.08 }}
                  >
                    <platform.icon className="w-3 h-3" />
                    <span>{platform.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA buttons - no unnecessary polish */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link href="/projects" className="hero-cta">
                {t("hero.viewProject")}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="hero-cta-secondary">
                <Mail className="w-4 h-4" />
                {t("hero.contactMe")}
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Profile with slight rotation for human feel */}
          <motion.div
            className="lg:col-span-5 relative"
            variants={itemVariants}
          >
            {/* Main profile - slightly rotated for imperfect feel */}
            <div className="relative inline-block overflow-visible">
              {/* Top-left decorative accent - overlaps corner */}
              <div
                className="absolute -top-2 -left-2 w-12 h-12 border-2 border-primary/30 rounded-xl z-10"
                style={{ transform: `rotate(${ROTATION_ANGLE}deg)` }}
              />

              {/* Profile image with subtle rotation */}
              <div
                className="profile-image-wrapper overflow-visible"
                style={{ transform: `rotate(${ROTATION_ANGLE}deg)` }}
              >
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 relative">
                  {/* Tight orange border */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-primary/40 pointer-events-none" />
                  <img
                    src="/profile.jpg"
                    alt="Muhammad Imam Abdurrahman"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Status badge - no "Available" text, just the dot */}
                <div className="absolute -bottom-3 -right-3 w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50" />
              </div>
            </div>

            {/* Stats - positioned below, not floating awkwardly */}
            <motion.div
              className="mt-16 ml-2 flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="glass-card px-4 py-3 flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-primary" />
                  <span className="text-lg font-bold gradient-text">4</span>
                </div>
                <span className="text-xs text-foreground/60">Apps</span>
              </div>
              <div className="glass-card px-4 py-3 flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-rose-400" />
                  <span className="text-lg font-bold gradient-text">3+</span>
                </div>
                <span className="text-xs text-foreground/60">Years</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom line - simple, honest */}
        <motion.div
          className="mt-16 pt-6 border-t border-foreground/10 flex flex-wrap items-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="flex items-center gap-2 text-sm text-foreground/50">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span>Clean Architecture</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground/50">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span>Bengkulu, Indonesia</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}