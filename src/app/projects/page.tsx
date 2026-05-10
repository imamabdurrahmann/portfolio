"use client";

import Link from "next/link";
import { ArrowRight, Star, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";
import { getProjects } from "@/lib/projects";

export default function ProjectsPage() {
  const { t } = useLocale();
  const projects = getProjects();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <span className="text-primary text-xs font-medium uppercase tracking-wider">{t("nav.projects")}</span>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            {t("projects.title")} <span className="gradient-text">{t("projects.titleAccent")}</span>
          </h1>
          <p className="mt-3 text-sm text-foreground/60 max-w-xl mx-auto leading-relaxed">
            {t("projects.subtitle")}
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-5 group"
              >
                {/* Project Image Placeholder */}
                <div className="relative h-28 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-4 overflow-hidden">
                  <span className="text-4xl font-bold gradient-text opacity-40">{project.title.charAt(0)}</span>
                  {project.featured && (
                    <div className="absolute top-2 right-2 flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-primary to-indigo-500 text-white text-xs font-semibold">
                      <Star className="w-3 h-3" />
                    </div>
                  )}
                </div>

                <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                  {t(`projectData.${project.id}.title`, undefined, project.title)}
                </h3>
                <p className="mt-2 text-xs text-foreground/60 leading-relaxed line-clamp-2">
                  {t(`projectData.${project.id}.description`, undefined, project.description)}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="tech-tag text-foreground/50">+{project.tech.length - 3}</span>
                  )}
                </div>

                <div className="flex items-center gap-2 mt-4 pt-3 border-t border-border">
                  <Link
                    href={`https://wa.me/6282375227802?text=${encodeURIComponent(project.contactMessage || `Hi Imam, I'm interested in the ${project.title} project`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs py-2 px-3"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    {t("projectCard.viewProject")}
                  </Link>
                  <Link href="/contact" className="btn-primary text-xs py-2 px-3">
                    {t("nav.contact")}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-xl md:text-2xl font-bold text-foreground">{t("contact.title")}</h2>
          <p className="mt-2 text-foreground/60 text-sm max-w-md mx-auto">
            {t("contact.subtitle")}
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 mt-5 btn-primary">
            {t("nav.hireMe")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}