"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Star, PackageCheck, FileSpreadsheet, Database, Calculator } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";
import { getProjects } from "@/lib/projects";
import { motion } from "framer-motion";

const getProjectIcon = (id: string) => {
  if (id === "1") return <PackageCheck className="w-6 h-6 text-orange-400" />;
  if (id === "2") return <FileSpreadsheet className="w-6 h-6 text-emerald-400" />;
  if (id === "3") return <Database className="w-6 h-6 text-blue-400" />;
  return <Calculator className="w-6 h-6 text-amber-400" />;
};

const getIconBg = (id: string) => {
  if (id === "1") return "bg-orange-500/10 border-orange-500/20";
  if (id === "2") return "bg-emerald-500/10 border-emerald-500/20";
  if (id === "3") return "bg-blue-500/10 border-blue-500/20";
  return "bg-amber-500/10 border-amber-500/20";
};

export default function ProjectsPage() {
  const { t, locale } = useLocale();
  const allProjects = getProjects();
  const [filter, setFilter] = useState<'all' | 'operations' | 'administration' | 'finance'>('all');

  const projects = allProjects.filter(p => filter === 'all' || p.category === filter);

  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Hero */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 blur-[100px] rounded-full pointer-events-none -z-10" />
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">{t("nav.projects")}</span>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-foreground mt-4 tracking-tighter">
              {t("projects.title")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">{t("projects.titleAccent")}</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              {t("projects.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 sm:py-12 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Filters */}
          <div className="flex justify-center flex-wrap gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12">
            {(['all', 'operations', 'administration', 'finance'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm md:text-base font-bold transition-all ${
                  filter === f 
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105' 
                    : 'bg-secondary/50 text-foreground/70 hover:bg-secondary hover:text-foreground hover:scale-105'
                }`}
              >
                {f === 'all' ? t('projects.filterAll') : 
                 f === 'operations' ? t('projects.filterOperations') : 
                 f === 'administration' ? t('projects.filterAdministration') :
                 t('projects.filterFinance')}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {projects.map((project, index) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={project.id}
                  className="group relative p-8 md:p-10 rounded-[2rem] bg-card border border-border hover:border-primary/50 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-primary/5 min-h-[420px]"
                >
                  {/* Subtle top right ambient glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/10 transition-colors duration-500" />

                  <div className="relative z-10 flex flex-col flex-grow">
                    {/* Top Row: Icon + Badge + Number */}
                    <div className="flex justify-between items-center mb-6">
                      <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center shadow-md ${getIconBg(project.id)}`}>
                        {getProjectIcon(project.id)}
                      </div>

                      <div className="flex items-center gap-3">
                        {project.featured && (
                          <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-bold border border-primary/20">
                            <Star className="w-3 h-3 fill-primary" /> {t("projectCard.featured")}
                          </span>
                        )}
                        <span className="text-3xl font-black text-foreground/20 font-mono group-hover:text-primary/30 transition-colors">
                          0{project.id}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors leading-snug">
                      {t(`projectData.${project.id}.title`, undefined, project.title)}
                    </h3>

                    {/* Description */}
                    <p className="text-sm md:text-base text-foreground/70 leading-relaxed mb-6 flex-grow">
                      {t(`projectData.${project.id}.description`, undefined, project.description)}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {(locale === 'en' && project.techEn ? project.techEn : project.tech).map((tech) => (
                        <span key={tech} className="text-xs px-3 py-1.5 rounded-full bg-secondary text-foreground/80 font-medium border border-border">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Area - Guaranteed 100% visible */}
                  <div className="relative z-10 pt-6 border-t border-border/60 mt-auto">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="flex items-center justify-between group/btn text-foreground hover:text-primary transition-colors font-bold text-sm md:text-base"
                    >
                      <span className="flex items-center gap-2">
                        {t("projectCard.viewDetails")}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-secondary border border-border group-hover/btn:bg-primary group-hover/btn:border-primary group-hover/btn:text-primary-foreground flex items-center justify-center transition-all shadow-sm">
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                      </div>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">{t("contact.title")}</h2>
          <p className="text-foreground/60 text-lg max-w-xl mx-auto mb-10">
            {t("contact.subtitle")}
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/25">
            {t("nav.hireMe")}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
