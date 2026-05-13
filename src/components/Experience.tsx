"use client";

import { ArrowRight, Code2 } from "lucide-react";
import Link from "next/link";
import { useLocale } from "@/i18n/LocaleProvider";
import { getProjects } from "@/lib/projects";

const cardWidths = [
  "lg:col-span-2",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-2",
];

export function Experience() {
  const { t } = useLocale();
  const projects = getProjects();

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <Code2 className="w-5 h-5 text-primary" />
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              {t("experience.title")}
            </span>
          </div>
          <div className="flex items-baseline gap-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              All <span className="text-primary">Projects</span>
            </h2>
            <span className="text-sm text-foreground/50">({projects.length})</span>
          </div>
        </div>

        {/* Grid - no stagger animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => {
            return (
              <div
                key={project.id}
                className={`p-5 rounded-xl bg-secondary border border-border self-start ${cardWidths[index]}`}
              >
                <div>
                  {/* Project Index */}
                  <span
                    className="text-2xl font-black text-primary/8 absolute -top-1 -right-1"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  {/* Project Initial */}
                  <div className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center mb-3">
                    <span
                      className="text-lg font-bold text-primary"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {project.title.charAt(0)}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-base font-bold text-foreground"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {t(`projectData.${project.id}.title`, undefined, project.title)}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-foreground/60 mt-2 leading-relaxed line-clamp-2">
                    {t(`projectData.${project.id}.description`, undefined, project.description)}
                  </p>

                  {/* Tech Tags */}
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
                      className="inline-flex items-center gap-1.5 text-primary font-semibold text-xs"
                    >
                      {t("projectCard.viewDetails")}
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}