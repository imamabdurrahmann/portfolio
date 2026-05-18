"use client";

import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";
import { getFeaturedProjects } from "@/lib/projects";
import { motion } from "framer-motion";
import { Magnetic } from "./Magnetic";

export function FeaturedProjects() {
  const { t, locale } = useLocale();
  const featuredProjects = getFeaturedProjects();

  return (
    <section id="lab" className="py-32 px-6 relative overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-[500px] bg-primary/5 blur-[120px] -z-10 rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Selected Works
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground tracking-tighter break-words max-w-full">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400 inline-block">{t("featured.titleAccent")}</span>
            </h2>
          </div>
          <Magnetic>
            <Link href="/projects" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-secondary/50 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 backdrop-blur-sm">
              <span className="font-semibold text-sm">View All Archive</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Magnetic>
        </div>

        <div className="grid gap-10 md:gap-20">
          {featuredProjects.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                key={project.id} 
                className="group relative"
              >
                <div className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}>
                  
                  {/* Image Container */}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="w-full md:w-3/5 block relative overflow-hidden rounded-[2rem] aspect-[4/3] md:aspect-video bg-card border border-border shadow-2xl"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="w-full h-full relative"
                    >
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary to-background">
                          <span className="text-8xl font-black text-primary/10">
                            {project.title.charAt(0)}
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                    </motion.div>

                    {/* Badge */}
                    <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-bold flex items-center gap-2">
                      <Star className="w-3 h-3 text-primary" />
                      {t("projectCard.featured")}
                    </div>
                  </Link>

                  {/* Content Container */}
                  <div className="w-full md:w-2/5 flex flex-col items-start">
                    <div className="text-9xl font-black text-foreground/5 absolute -top-10 -left-10 md:-left-20 pointer-events-none select-none z-0">
                      0{index + 1}
                    </div>
                    
                    <div className="relative z-10 w-full">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.slice(0, 4).map((tech) => (
                          <span key={tech} className="px-3 py-1 text-xs font-mono font-medium rounded-full border border-primary/20 bg-primary/5 text-primary">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <Link href={`/projects/${project.slug}`} className="block group/title">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 group-hover/title:text-primary transition-colors leading-tight">
                          {t(`projectData.${project.id}.title`, undefined, project.title)}
                        </h3>
                      </Link>

                      <p className="text-base md:text-lg text-foreground/60 leading-relaxed mb-8">
                        {t(`projectData.${project.id}.description`, undefined, project.description)}
                      </p>

                      <Magnetic>
                        <Link
                          href={`/projects/${project.slug}`}
                          className="inline-flex items-center gap-3 text-foreground font-bold text-sm lg:text-base group/btn"
                        >
                          <span className="relative overflow-hidden flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground group-hover/btn:scale-110 transition-transform">
                            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                          </span>
                          <span className="group-hover/btn:text-primary transition-colors">
                            {locale === 'en' ? 'Explore Case Study' : 'Lihat Detail Proyek'}
                          </span>
                        </Link>
                      </Magnetic>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}