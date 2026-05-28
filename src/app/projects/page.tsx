"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Star, ExternalLink, Code2 } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";
import { getProjects } from "@/lib/projects";
import { motion } from "framer-motion";
import { Magnetic } from "@/components/Magnetic";

// Asymmetric sizing for bento grid
const getCardStyles = (index: number) => {
  const styles = [
    "md:col-span-2 md:row-span-2 bg-gradient-to-br from-secondary to-background", // Large hero
    "md:col-span-1 md:row-span-1", // Standard
    "md:col-span-1 md:row-span-2 bg-primary/5 border-primary/20", // Tall
    "md:col-span-2 md:row-span-1", // Wide (changed from standard to fill the hole for 4 items)
    "md:col-span-1 md:row-span-1", // Standard
  ];
  return styles[index % styles.length];
};

export default function ProjectsPage() {
  const { t } = useLocale();
  const allProjects = getProjects();
  const [filter, setFilter] = useState<'all' | 'mobile' | 'website'>('all');

  const projects = allProjects.filter(p => filter === 'all' || p.category === filter);

  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Hero */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 blur-[100px] rounded-full pointer-events-none -z-10" />
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">{t("nav.projects")}</span>
            <h1 className="text-5xl md:text-7xl font-black text-foreground mt-4 tracking-tighter">
              {t("projects.title")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">{t("projects.titleAccent")}</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed">
              {t("projects.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Bento Grid */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Filters */}
          <div className="flex justify-center gap-4 mb-12">
            {(['all', 'mobile', 'website'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-full text-sm md:text-base font-bold transition-all ${
                  filter === f 
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105' 
                    : 'bg-secondary/50 text-foreground/70 hover:bg-secondary hover:text-foreground hover:scale-105'
                }`}
              >
                {f === 'all' ? t('projects.filterAll') : 
                 f === 'mobile' ? t('projects.filterMobile') : 
                 t('projects.filterWebsite')}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(400px,auto)] md:auto-rows-[300px]">
            {projects.map((project, index) => {
              const bentoClass = getCardStyles(index);
              
              return (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                  key={project.id}
                  className={`group relative p-8 rounded-[2rem] bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-500 flex flex-col justify-between ${bentoClass}`}
                >
                  {/* Background Image / Glow */}
                  {project.image ? (
                     <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500 z-0">
                       <img src={project.image} alt={project.title} className="w-full h-full object-cover mix-blend-overlay blur-[2px] group-hover:blur-0 transition-all duration-500" />
                       <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
                     </div>
                  ) : (
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                  )}

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-secondary/80 backdrop-blur-md border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500 shadow-xl">
                        <span className="text-2xl font-bold font-mono">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        {project.featured && (
                          <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold border border-primary/20">
                            <Star className="w-3 h-3" /> Featured
                          </span>
                        )}
                        <span className="text-4xl font-black text-foreground/10 font-mono pointer-events-none group-hover:text-primary/20 transition-colors duration-500">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors drop-shadow-md">
                      {t(`projectData.${project.id}.title`, undefined, project.title)}
                    </h3>

                    <p className="text-sm text-foreground/70 leading-relaxed line-clamp-2 md:line-clamp-3">
                      {t(`projectData.${project.id}.description`, undefined, project.description)}
                    </p>
                  </div>

                  <div className="relative z-10 mt-6 flex flex-col justify-end h-full">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-xs px-3 py-1 rounded-full bg-secondary/80 backdrop-blur-sm text-foreground/90 font-medium border border-border">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-xs px-3 py-1 rounded-full bg-secondary/80 backdrop-blur-sm text-foreground/90 font-medium border border-border">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>

                    <Magnetic>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-3 text-foreground font-bold text-sm group/btn"
                      >
                        <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground group-hover/btn:scale-110 transition-transform shadow-lg shadow-primary/20">
                          <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </span>
                        <span className="group-hover/btn:text-primary transition-colors">
                          {t("projectCard.viewDetails")}
                        </span>
                      </Link>
                    </Magnetic>
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
          <Magnetic>
            <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/25">
              {t("nav.hireMe")}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Magnetic>
        </div>
      </section>
    </div>
  );
}