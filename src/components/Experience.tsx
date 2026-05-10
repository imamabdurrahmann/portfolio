"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";
import { getProjects } from "@/lib/projects";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

export function Experience() {
  const { t } = useLocale();
  const projects = getProjects();

  return (
    <section id="experience" className="py-16 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-xs font-medium uppercase tracking-widest">
            {t("experience.title")}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Staggered Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 [&>*:nth-child(2)]:md:mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="glass-card p-6 group relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Project Initial - bigger and more prominent */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                  <span className="text-3xl font-bold gradient-text">{project.title.charAt(0)}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {t(`projectData.${project.id}.title`, undefined, project.title)}
                </h3>

                {/* Description */}
                <p className="text-sm text-foreground/60 mt-2 leading-relaxed">
                  {t(`projectData.${project.id}.description`, undefined, project.description)}
                </p>

                {/* Tech Tags - better spacing */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>

                {/* CTA Link */}
                <div className="mt-5 pt-4 border-t border-border/50">
                  <Link
                    href={`https://wa.me/6282375227802?text=${encodeURIComponent(t("experience.contactMessage", { project: project.title }))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:gap-3 font-semibold text-sm transition-all duration-300"
                  >
                    {t("experience.contact")}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}