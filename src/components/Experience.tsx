"use client";

import { ArrowRight, Code2 } from "lucide-react";
import Link from "next/link";
import { useLocale } from "@/i18n/LocaleProvider";
import { getProjects } from "@/lib/projects";
import { motion } from "framer-motion";
import { Magnetic } from "./Magnetic";

// Asymmetric sizing for bento grid
const getCardStyles = (index: number) => {
  const styles = [
    "md:col-span-2 md:row-span-2 bg-gradient-to-br from-secondary to-background", // Large hero
    "md:col-span-1 md:row-span-1", // Standard
    "md:col-span-1 md:row-span-2 bg-primary/5 border-primary/20", // Tall
    "md:col-span-2 md:row-span-1", // Wide (changed to fill hole)
    "md:col-span-1 md:row-span-1", // Standard
  ];
  return styles[index % styles.length];
};

export function Experience() {
  const { t } = useLocale();
  const projects = getProjects();

  return (
    <section id="experience" className="py-32 px-6 relative bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Code2 className="w-6 h-6 text-primary" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                {t("experience.title")}
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tight">
              All <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Projects</span>
              <span className="text-2xl text-foreground/30 ml-4">({projects.length})</span>
            </h2>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {projects.map((project, index) => {
            const bentoClass = getCardStyles(index);
            
            return (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={project.id}
                className={`group relative p-8 rounded-[2rem] bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-500 flex flex-col justify-between ${bentoClass}`}
              >
                {/* Background Hover Glow */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-secondary border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                      <span className="text-2xl font-bold font-mono">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                    <span className="text-4xl font-black text-foreground/5 font-mono pointer-events-none group-hover:text-primary/10 transition-colors duration-500">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {t(`projectData.${project.id}.title`, undefined, project.title)}
                  </h3>

                  <p className="text-sm text-foreground/60 leading-relaxed line-clamp-2 md:line-clamp-3">
                    {t(`projectData.${project.id}.description`, undefined, project.description)}
                  </p>
                </div>

                <div className="relative z-10 mt-6">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-xs px-3 py-1 rounded-full bg-secondary text-foreground/70 font-medium border border-border">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs px-3 py-1 rounded-full bg-secondary text-foreground/70 font-medium border border-border">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  <Magnetic>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 text-foreground font-bold text-sm group/btn"
                    >
                      <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground group-hover/btn:scale-110 transition-transform">
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
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
  );
}