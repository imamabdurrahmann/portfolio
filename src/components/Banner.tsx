"use client";

import Link from "next/link";
import { Star, Heart, ArrowRight, Mail, Sparkles, Smartphone, Globe, Monitor } from "lucide-react";
import { motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";

// Organic animation variants - less predictable
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

// Random offset animation for personal feel
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
            {/* Small badge - left aligned */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass"
            >
              <span className="hero-badge-dot" />
              <span className="text-sm font-medium">{t("hero.available")}</span>
            </motion.div>

            {/* Heading - uncentered, personal */}
            <motion.div variants={itemVariants} className="text-left">
              <h1 className="hero-heading text-left">
                {t("hero.title")}<br />
                <span className="hero-heading-accent">{t("hero.titleAccent2")}</span>
              </h1>
            </motion.div>

            {/* Role indicator */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3"
            >
              <span className="h-6 w-[2px] bg-gradient-to-b from-primary to-accent-secondary rounded-full" />
              <span className="hero-role">
                Flutter Developer
              </span>
            </motion.div>

            {/* Personal story */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-foreground/70 leading-relaxed text-left max-w-xl"
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

              {/* Platform badges - show cross-platform power */}
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

            {/* CTA buttons */}
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

          {/* Right Column - Profile with personal touches */}
          <motion.div
            className="lg:col-span-5 relative"
            variants={itemVariants}
          >
            {/* Offset decorative elements */}
            <div className="relative pl-6 pt-6">
              <div className="absolute -top-3 -left-3 w-20 h-20 border border-primary/20 rounded-xl" />
              <div className="absolute -bottom-2 right-10 w-14 h-14 bg-gradient-to-br from-accent-secondary/15 to-transparent rounded-xl" />

              {/* Main profile with personal styling */}
              <div className="relative profile-image-wrapper">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
                  <img
                    src="/profile.jpg"
                    alt="Muhammad Imam Abdurrahman"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Status badge */}
                <div className="absolute -bottom-3 -right-3 flex items-center gap-2 px-4 py-2 rounded-full glass">
                  <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Available</span>
                </div>
              </div>
            </div>

            {/* Stats - asymmetric placement */}
            <motion.div
              className="absolute -bottom-12 -left-2 lg:left-6 flex items-center gap-3 mt-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="glass-card px-4 py-3 flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-primary" />
                  <span className="text-lg font-bold gradient-text">4</span>
                </div>
                <span className="text-xs text-foreground/60">Projects</span>
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

        {/* Bottom line - subtle, personal */}
        <motion.div
          className="mt-20 pt-6 border-t border-foreground/10 flex flex-wrap items-center gap-8"
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