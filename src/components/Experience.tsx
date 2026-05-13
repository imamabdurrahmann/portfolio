"use client";

import { ArrowRight, Code2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";
import { getProjects } from "@/lib/projects";

// More organic animation timing
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
      when: "async",
    }
  }
};

// Variable animation durations
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: i * 0.07
    }
  })
};

export function Experience() {
  const { t } = useLocale();
  const projects = getProjects();

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header - left aligned */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <Code2 className="w-5 h-5 text-primary" />
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              {t("experience.title")}
            </span>
          </div>
          <div className="flex items-baseline gap-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              All <span className="gradient-text">Projects</span>
            </h2>
            <span className="text-sm text-foreground/50">({projects.length})</span>
          </div>
        </motion.div>

        {/* Asymmetric grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                custom={index}
                variants={itemVariants}
                className="glass-card p-5 group relative overflow-hidden self-start"
              >
                {/* Subtle warm gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-accent-secondary/8 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Project Index */}
                  <span
                    className="text-4xl font-black text-primary/10 leading-none absolute -top-2 -right-2"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  {/* Project Initial */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-400">
                    <span
                      className="text-xl font-bold gradient-text"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {project.title.charAt(0)}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {t(`projectData.${project.id}.title`, undefined, project.title)}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-foreground/60 mt-2 leading-relaxed line-clamp-2">
                    {t(`projectData.${project.id}.description`, undefined, project.description)}
                  </p>

                  {/* Tech Tags - compact */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="mt-4 pt-3 border-t border-border/50">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-primary hover:gap-2.5 font-semibold text-xs transition-all duration-300"
                    >
                      {t("projectCard.viewDetails")}
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}