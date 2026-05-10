"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star, Sparkles } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";
import { getFeaturedProjects } from "@/lib/projects";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const projectVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } }
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
    <section id="lab" className="py-16 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground/80">{t("featured.title")}</span>
          </div>
          <h2 className="text-2xl lg:text-4xl font-bold text-foreground mt-2">
            Featured <span className="gradient-text">{t("featured.titleAccent")}</span>
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
              {/* Stable Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Image Content */}
                <Link
                  href={`/projects/${project.slug}`}
                  className={`block group ${isEven ? "md:order-2" : "md:order-1"}`}
                >
                  <div className="relative rounded-2xl overflow-hidden aspect-video bg-gradient-to-br from-primary/20 to-secondary/50">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-8xl font-black gradient-text opacity-30">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary to-indigo-500 text-white text-xs font-semibold shadow-lg">
                      <Star className="w-3 h-3" />
                      {t("projectCard.featured")}
                    </div>
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white font-semibold">
                        {locale === 'en' ? 'View Details' : 'Lihat Detail'}
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Text Content */}
                <div className={isEven ? "md:order-1" : "md:order-2"}>
                  <span className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mb-3">
                    <div className="w-6 h-[2px] bg-primary" />
                    {t("featured.title")}
                  </span>
                  <Link href={`/projects/${project.slug}`} className="block group">
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {t(`projectData.${project.id}.title`, undefined, project.title)}
                    </h3>
                  </Link>
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
                      <motion.span className="tech-tag" variants={techTagVariants}>
                        +{project.tech.length - 4}
                      </motion.span>
                    )}
                  </motion.div>

                  {/* CTA Buttons */}
                  <div className="mt-6 flex flex-wrap gap-3">
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