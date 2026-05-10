"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";
import { getFeaturedProjects } from "@/lib/projects";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const projectVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const techTagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
};

const techContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

export function FeaturedProjects() {
  const { t, locale } = useLocale();
  const featuredProjects = getFeaturedProjects();

  return (
    <section id="lab" className="py-12 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          className="text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">{t("featured.title")}</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2">
            {locale === 'en' ? 'Project' : 'Project'} <span className="gradient-text">{t("featured.titleAccent")}</span>
          </h2>
        </motion.div>

        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 1;

          return (
            <motion.div
              key={project.id}
              className="mb-12 last:mb-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={projectVariants}
            >
              <div className={`featured-item grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start ${
                isEven ? "lg:grid-flow-dense" : ""
              }`}>
                {/* Image Content - Clickable */}
                <Link href={`/projects/${project.slug}`} className={`order-1 ${isEven ? "lg:col-start-2" : ""} block cursor-pointer group`}>
                  <div className="featured-project-image rounded-2xl overflow-hidden">
                    <div className="featured-project-placeholder">{project.title.charAt(0)}</div>
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary to-indigo-500 text-white text-xs font-semibold shadow-lg">
                      <Star className="w-3 h-3" />
                      {t("projectCard.featured")}
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white font-semibold">{locale === 'en' ? 'View Details' : 'Lihat Detail'}</span>
                    </div>
                  </div>
                </Link>

                {/* Text Content */}
                <div className={`order-2 ${isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <Link href={`/projects/${project.slug}`} className="block group">
                    <span className="text-primary text-xs font-medium uppercase tracking-wider">{t("featured.title")}</span>
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground mt-1 group-hover:text-primary transition-colors">
                      {t(`projectData.${project.id}.title`, undefined, project.title)}
                    </h3>
                  </Link>

                  {/* Description */}
                  <p className="mt-4 text-sm text-foreground/70 leading-relaxed">
                    {t(`projectData.${project.id}.description`, undefined, project.description)}
                  </p>

                  {/* Tech Tags */}
                  <motion.div
                    className="flex flex-wrap gap-2 mt-4"
                    variants={techContainerVariants}
                  >
                    {project.tech.slice(0, 4).map((tech) => (
                      <motion.span key={tech} className="tech-tag" variants={techTagVariants}>
                        {tech}
                      </motion.span>
                    ))}
                    {project.tech.length > 4 && (
                      <motion.span className="tech-tag text-foreground/50" variants={techTagVariants}>
                        +{project.tech.length - 4}
                      </motion.span>
                    )}
                  </motion.div>

                  {/* CTA */}
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="btn-primary text-sm"
                    >
                      {locale === 'en' ? 'View Details' : 'Lihat Detail'}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href={`https://wa.me/6282375227802?text=${encodeURIComponent(t("experience.contactMessage", { project: t(`projectData.${project.id}.title`, undefined, project.title) as string }))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-sm"
                    >
                      {t("featured.contactVia")}
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
