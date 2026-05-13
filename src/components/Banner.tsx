"use client";

import Link from "next/link";
import { Star, Heart, ArrowRight, Mail, Sparkles, Smartphone, Globe, Monitor } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";

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
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Grid layout - no stagger animations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="hero-heading text-left">
              {t("hero.title")}<br />
              <span className="hero-heading-accent">{t("hero.titleAccent2")}</span>
            </h1>

            <div className="flex items-center gap-3">
              <span className="h-6 w-[2px] bg-primary/40 rounded-full" />
              <span className="hero-role">Flutter Developer</span>
            </div>

            <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-xl">
              {t("hero.description")}
            </p>

            {/* Why Flutter story */}
            <div className="relative pl-5 border-l-2 border-primary/25">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">{t("hero.storyTitle")}</span>
              </div>
              <p className="text-sm text-foreground/60 leading-relaxed">
                {t("hero.storyDescription")}
              </p>

              <div className="flex flex-wrap items-center gap-3 mt-4">
                {platforms.map((platform) => (
                  <div key={platform.label} className="platform-badge">
                    <platform.icon className="w-3 h-3" />
                    <span>{platform.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/projects" className="hero-cta">
                {t("hero.viewProject")}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="hero-cta-secondary">
                <Mail className="w-4 h-4" />
                {t("hero.contactMe")}
              </Link>
            </div>
          </div>

          {/* Right Column - Profile */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 relative">
                <img
                  src="/profile.jpg"
                  alt="Muhammad Imam Abdurrahman"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Stats below image */}
              <div className="mt-6 flex items-center justify-center gap-4">
                <div className="px-4 py-2 rounded-xl bg-secondary border border-border flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary" />
                  <span className="text-base font-bold text-primary">4</span>
                  <span className="text-xs text-foreground/60">Apps</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-secondary border border-border flex items-center gap-2">
                  <Heart className="w-4 h-4 text-rose-400" />
                  <span className="text-base font-bold text-primary">3+</span>
                  <span className="text-xs text-foreground/60">Years</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-16 pt-6 border-t border-foreground/10 flex flex-wrap items-center gap-8">
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
        </div>
      </div>
    </section>
  );
}