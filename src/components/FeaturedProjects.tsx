"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";
import { getFeaturedProjects } from "@/lib/projects";

const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 }
};

const projectVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1
    }
  })
};

// Vary font weights for human feel
const titleWeights = ["font-bold", "font-extrabold", "font-semibold"];
const descWeights = ["font-light", "font-normal", "font-light"];

export function FeaturedProjects() {
  const { t, locale } = useLocale();
  const featuredProjects = getFeaturedProjects();

  return (
    <section id="lab" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <div className="flex items-end gap-4">
            <h2 className="text-3xl font-bold text-foreground">
              Featured <span className="gradient-text">{t("featured.titleAccent")}</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent mb-2 hidden md:block" />
          </div>
        </motion.div>

        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 1;
          const titleWeight = titleWeights[index % titleWeights.length];
          const descWeight = descWeights[index % descWeights.length];

          return (
            <motion.div
              key={project.id}
              className="mb-12 last:mb-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={index}
              variants={projectVariants}
            >
              <div className={`grid gap-8 items-center grid-cols-1 ${isEven ? 'md:grid-cols-2' : 'md:grid-cols-2'}`}>
                {/* Image */}
                <Link
                  href={`/projects/${project.slug}`}
                  className={`block group relative ${isEven ? "md:order-2" : "md:order-1"}`}
                >
                  <div className={`relative rounded-xl overflow-hidden aspect-video bg-gradient-to-br from-primary/10 to-secondary/30 group-hover:shadow-lg transition-shadow duration-300`}>
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-5xl font-black text-primary/10">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    )}

                    {/* Simple badge */}
                    <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-primary/90 text-white text-xs font-semibold">
                      <Star className="w-3 h-3 inline mr-1" />
                      {t("projectCard.featured")}
                    </div>
                  </div>
                </Link>

                {/* Text */}
                <div className={`${isEven ? "md:order-1" : "md:order-2"}`}>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-[2px] bg-primary" />
                      <span className="text-xs font-medium uppercase tracking-widest text-primary">
                        {t("featured.title")}
                      </span>
                    </div>

                    <Link href={`/projects/${project.slug}`} className="block group">
                      <h3 className={`text-xl lg:text-2xl text-foreground group-hover:text-primary transition-colors ${titleWeight}`}
                        style={{ fontFamily: "'Outfit', sans-serif" }}>
                        {t(`projectData.${project.id}.title`, undefined, project.title)}
                      </h3>
                    </Link>

                    <p className={`text-sm text-foreground/60 leading-relaxed ${descWeight}`}>
                      {t(`projectData.${project.id}.description`, undefined, project.description)}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
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
                    <div className="pt-2">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-2 text-primary hover:gap-3 font-semibold text-sm transition-all"
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