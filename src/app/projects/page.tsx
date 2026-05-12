"use client";

import Link from "next/link";
import { ArrowRight, Star, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";
import { getProjects } from "@/lib/projects";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]
    }
  })
};

const featuredVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }
  }
};

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

      {/* Featured Project (First Project - Full Width) */}
      {projects.length > 0 && (
        <motion.div
          key={projects[0].id}
          variants={featuredVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="glass-card p-6 group mb-6 hover:shadow-lg hover:shadow-primary/10 transition-shadow duration-500"
        >
          <div className="grid md:grid-cols-2 gap-6 items-center">
            {/* Project Image */}
            <Link href={`/projects/${projects[0].slug}`} className="block cursor-pointer">
              <div className="relative aspect-video rounded-xl bg-gradient-to-br from-accent-secondary/20 via-primary/15 to-primary/5 flex items-center justify-center overflow-hidden">
                {projects[0].image ? (
                  <img src={projects[0].image} alt={projects[0].title} className="w-full h-full object-contain" />
                ) : (
                  <span className="text-7xl md:text-8xl font-black gradient-text opacity-25">
                    {projects[0].title.charAt(0)}
                  </span>
                )}
                {projects[0].featured && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-accent-secondary to-primary text-white text-xs font-semibold shadow-lg">
                    <Star className="w-3 h-3" />
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-accent-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">{t("projectCard.viewDetails")}</span>
                </div>
              </div>
            </Link>

            {/* Project Info */}
            <div>
              <span className="inline-flex items-center gap-2 text-accent-secondary text-xs font-bold uppercase tracking-widest mb-3">
                <div className="w-6 h-[2px] bg-accent-secondary" />
                Featured Project
              </span>
              <Link href={`/projects/${projects[0].slug}`} className="block group">
                <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-accent-secondary transition-colors duration-300">
                  {t(`projectData.${projects[0].id}.title`, undefined, projects[0].title)}
                </h3>
              </Link>
              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
                {t(`projectData.${projects[0].id}.description`, undefined, projects[0].description)}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {projects[0].tech.slice(0, 4).map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
                {projects[0].tech.length > 4 && (
                  <span className="tech-tag">+{projects[0].tech.length - 4}</span>
                )}
              </div>

              <div className="mt-5 pt-4 border-t border-border">
                <Link
                  href={`/projects/${projects[0].slug}`}
                  className="btn-primary"
                >
                  <ExternalLink className="w-4 h-4" />
                  {t("projectCard.viewDetails")}
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Other Projects Grid */}
      <section className="py-8 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.slice(1).map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={index}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass-card p-5 group cursor-pointer"
              >
                <Link href={`/projects/${project.slug}`} className="block cursor-pointer">
                  {/* Project Image */}
                  <div className="relative h-28 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-4 overflow-hidden">
                    {project.image ? (
                      <img src={project.image} alt={project.title} className="w-full h-full object-contain" />
                    ) : (
                      <span className="text-4xl font-bold gradient-text opacity-40">{project.title.charAt(0)}</span>
                    )}
                    {project.featured && (
                      <div className="absolute top-2 right-2 flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-primary to-indigo-500 text-white text-xs font-semibold">
                        <Star className="w-3 h-3" />
                      </div>
                    )}
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white font-semibold">{t("projectCard.viewDetails")}</span>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-foreground group-hover:text-accent-secondary transition-colors duration-300">
                    {t(`projectData.${project.id}.title`, undefined, project.title)}
                  </h3>
                  <p className="mt-2 text-xs text-foreground/60 leading-relaxed line-clamp-2">
                    {t(`projectData.${project.id}.description`, undefined, project.description)}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + techIndex * 0.06, duration: 0.3, ease: "backOut" }}
                        className="tech-tag"
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.tech.length > 3 && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + 3 * 0.06, duration: 0.3, ease: "backOut" }}
                        className="tech-tag text-foreground/50"
                      >
                        +{project.tech.length - 3}
                      </motion.span>
                    )}
                  </div>
                </Link>

                <div className="mt-4 pt-3 border-t border-border">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="btn-secondary text-xs py-2 px-3"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    {t("projectCard.viewDetails")}
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