"use client";

import { motion } from "framer-motion";
import { ExternalLink, Play, Link2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLocale } from "@/i18n/LocaleProvider";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  playStore?: string;
  appStore?: string;
  github?: string;
  tech: string[];
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  variant?: "default" | "compact";
}

export function ProjectCard({ project, variant = "default" }: ProjectCardProps) {
  const { t } = useLocale();

  if (variant === "compact") {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <Card className="overflow-hidden hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <h3 className="font-semibold">{project.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {project.tech.slice(0, 3).map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <Card className="project-card overflow-hidden">
        <div className="project-card-image">
          {project.image ? (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          ) : (
            <span className="project-placeholder">{project.title.charAt(0)}</span>
          )}
          {project.featured && (
            <div className="project-badge">
              <span className="text-xs font-medium">{t("projectCard.featured")}</span>
            </div>
          )}
        </div>
        <CardContent className="project-card-content">
          <h3 className="font-bold text-lg">{project.title}</h3>
          <p className="text-sm text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 mt-5">
            {project.playStore && (
              <a href={project.playStore} target="_blank" rel="noopener noreferrer" className="project-link">
                <Play className="h-3.5 w-3.5" /> Play Store
              </a>
            )}
            {project.appStore && (
              <a href={project.appStore} target="_blank" rel="noopener noreferrer" className="project-link">
                <ExternalLink className="h-3.5 w-3.5" /> App Store
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                <Link2 className="h-3.5 w-3.5" /> GitHub
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
