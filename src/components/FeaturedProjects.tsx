"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star, Sparkles } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";
import { getFeaturedProjects } from "@/lib/projects";

// More organic animation timing
const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 }
};

// Random-feeling stagger
const projectVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: i * 0.12
    }
  })
};

export function FeaturedProjects() {
  const { t, locale } = useLocale();
  const featuredProjects = getFeaturedProjects();

  return (
    <section id="lab" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header - asymmetric, personal */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <div className="flex items-end gap-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Featured <span className="gradient-text">{t("featured.titleAccent")}</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent mb-2 hidden md:block" />
          </div>
        </motion.div>

        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 1;
          // First project gets more visual weight
          const isLarge = index === 0;

          return (
            <motion.div
              key={project.id}
              className={`mb-16 last:mb-0 ${isLarge ? 'relative' : ''}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={index}
              variants={projectVariants}
            >
              <div className={`grid gap-8 items-center ${isLarge ? 'md:grid-cols-5' : 'grid-cols-1 md:grid-cols-2'}`}>
                {/* Image - offset for personality */}
                <Link
                  href={`/projects/${project.slug}`}
                  className={`block group relative ${isEven ? "md:order-2" : "md:order-1"} ${isLarge ? 'md:col-span-3' : ''}`}
                >
                  {/* Decorative corner - not centered */}
                  <div className="absolute -top-3 -left-3 w-14 h-14 border border-primary/20 rounded-lg -z-10" />

                  <div className={`relative rounded-2xl overflow-hidden ${isLarge ? 'aspect-[4/3]' : 'aspect-video'} bg-gradient-to-br from-primary/15 to-secondary/40 group-hover:shadow-xl group-hover:shadow-primary/10 transition-shadow duration-500`}>
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-7xl font-black gradient-text opacity-15"
                          style={{ fontFamily: "'Outfit', sans-serif" }}>
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    )}

                    {/* Featured badge - top right */}
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary to-orange-600 text-white text-xs font-semibold shadow-lg">
                      <Star className="w-3 h-3" />
                      {t("projectCard.featured")}
                    </div>

                    {/* Hover reveal */}
                    <div className="absolute inset-0 bg-primary/85 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <div className="flex items-center gap-2 text-white font-semibold">
                        <span>{locale === 'en' ? 'View Details' : 'Lihat Detail'}</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Text - offset for balance */}
                <div className={`${isEven ? "md:order-1" : "md:order-2"} ${isLarge ? 'md:col-span-2' : ''}`}>
                  <div className="space-y-4">
                    {/* Project index - big, subtle */}
                    <span
                      className="project-index"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <div className="flex items-center gap-2">
                      <div className="w-8 h-[2px] bg-primary" />
                      <span className="text-xs font-bold uppercase tracking-widest text-primary">
                        {t("featured.title")}
                      </span>
                    </div>

                    <Link href={`/projects/${project.slug}`} className="block group">
                      <h3 className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300"
                        style={{ fontFamily: "'Outfit', sans-serif" }}>
                        {t(`projectData.${project.id}.title`, undefined, project.title)}
                      </h3>
                    </Link>

                    <p className="text-sm text-foreground/60 leading-relaxed">
                      {t(`projectData.${project.id}.description`, undefined, project.description)}
                    </p>

                    {/* Tech stack - compact */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="tech-tag">+{project.tech.length - 3}</span>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="pt-4">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-2 text-primary hover:gap-3 font-semibold text-sm transition-all duration-300"
                      >
                        {locale === 'en' ? 'View Project' : 'Lihat Project'}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
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