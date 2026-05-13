"use client";

import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";
import { getFeaturedProjects } from "@/lib/projects";

export function FeaturedProjects() {
  const { t, locale } = useLocale();
  const featuredProjects = getFeaturedProjects();

  return (
    <section id="lab" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header - simple, no animations */}
        <div className="mb-12">
          <div className="flex items-end gap-4">
            <h2 className="text-3xl font-bold text-foreground">
              Featured <span className="text-primary">{t("featured.titleAccent")}</span>
            </h2>
            <div className="flex-1 h-px bg-border mb-2 hidden md:block" />
          </div>
        </div>

        {/* Projects - no stagger animations */}
        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 1;

          return (
            <div key={project.id} className="mb-16 last:mb-0">
              <div className="grid gap-8 items-center grid-cols-1 md:grid-cols-2">
                {/* Image - subtle scale on hover */}
                <Link
                  href={`/projects/${project.slug}`}
                  className={`block ${isEven ? "md:order-2" : "md:order-1"}`}
                >
                  <div className="relative rounded-xl overflow-hidden aspect-video bg-secondary group">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-5xl font-black text-primary/10">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    )}

                    {/* Badge */}
                    <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-primary text-white text-xs font-semibold">
                      <Star className="w-3 h-3 inline mr-1" />
                      {t("projectCard.featured")}
                    </div>
                  </div>
                </Link>

                {/* Text */}
                <div className={isEven ? "md:order-1" : "md:order-2"}>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-[2px] bg-primary" />
                      <span className="text-xs font-medium uppercase tracking-widest text-primary">
                        {t("featured.title")}
                      </span>
                    </div>

                    <Link href={`/projects/${project.slug}`} className="block">
                      <h3 className="text-xl lg:text-2xl font-bold text-foreground hover:text-primary transition-colors">
                        {t(`projectData.${project.id}.title`, undefined, project.title)}
                      </h3>
                    </Link>

                    <p className="text-sm text-foreground/60 leading-relaxed">
                      {t(`projectData.${project.id}.description`, undefined, project.description)}
                    </p>

                    {/* Tech stack - simple */}
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
                        className="inline-flex items-center gap-2 text-primary font-semibold text-sm"
                      >
                        {locale === 'en' ? 'View Project' : 'Lihat Project'}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}