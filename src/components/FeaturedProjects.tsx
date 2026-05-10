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
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
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
    <section id="lab" className="py-20 px-6 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-gradient-radial from-purple-500/5 to-transparent rounded-full" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground/80">{t("featured.title")}</span>
          </motion.div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-2">
            Featured <span className="gradient-text">{t("featured.titleAccent")}</span>
          </h2>
        </motion.div>

        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 1;

          return (
            <motion.div
              key={project.id}
              className="mb-20 last:mb-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={projectVariants}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                isEven ? "lg:grid-flow-dense" : ""
              }`}>
                {/* Image Content - Premium Card */}
                <Link
                  href={`/projects/${project.slug}`}
                  className={`order-1 ${isEven ? "lg:col-start-2" : ""} block group relative`}
                >
                  <div className="relative">
                    <motion.div
                      className="featured-project-image rounded-3xl overflow-hidden aspect-[4/3] relative"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {/* Gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/50 to-purple-900/20" />

                      {/* Large initial letter */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[10rem] font-black gradient-text opacity-20 leading-none">
                          {project.title.charAt(0)}
                        </span>
                      </div>

                      {/* Featured badge */}
                      <motion.div
                        className="absolute top-4 right-4 flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-purple-500 text-white text-xs font-bold shadow-lg shadow-primary/30 z-10"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Star className="w-3.5 h-3.5" />
                        {t("projectCard.featured")}
                      </motion.div>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-8">
                        <span className="text-white font-bold text-lg flex items-center gap-2">
                          {locale === 'en' ? 'View Details' : 'Lihat Detail'}
                          <ArrowRight className="w-5 h-5" />
                        </span>
                      </div>
                    </motion.div>

                    {/* Decorative elements */}
                    <div className="absolute -z-10 top-4 left-4 w-full h-full rounded-3xl border border-primary/20" />
                  </div>
                </Link>

                {/* Text Content - Premium styling */}
                <div className={`order-2 ${isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  {/* Category label */}
                  <span className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mb-3">
                    <div className="w-8 h-[2px] bg-primary" />
                    {t("featured.title")}
                  </span>

                  {/* Title */}
                  <Link href={`/projects/${project.slug}`} className="block group">
                    <h3 className="text-2xl lg:text-4xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                      {t(`projectData.${project.id}.title`, undefined, project.title)}
                    </h3>
                  </Link>

                  {/* Description with more style */}
                  <p className="mt-6 text-base text-foreground/70 leading-relaxed max-w-lg">
                    {t(`projectData.${project.id}.description`, undefined, project.description)}
                  </p>

                  {/* Tech Tags - Better presentation */}
                  <motion.div
                    className="flex flex-wrap gap-2 mt-6"
                    variants={techContainerVariants}
                  >
                    {project.tech.slice(0, 5).map((tech) => (
                      <motion.span key={tech} className="tech-tag" variants={techTagVariants}>
                        {tech}
                      </motion.span>
                    ))}
                    {project.tech.length > 5 && (
                      <motion.span className="tech-tag bg-primary/20 border-primary/30" variants={techTagVariants}>
                        +{project.tech.length - 5}
                      </motion.span>
                    )}
                  </motion.div>

                  {/* CTA Buttons - Premium styling */}
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="hero-cta"
                    >
                      {locale === 'en' ? 'View Details' : 'Lihat Detail'}
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link
                      href={`https://wa.me/6282375227802?text=${encodeURIComponent(t("experience.contactMessage", { project: t(`projectData.${project.id}.title`, undefined, project.title) as string }))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hero-cta-secondary"
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