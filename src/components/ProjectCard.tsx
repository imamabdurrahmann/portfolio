"use client";

import Image from "next/image";
import { ExternalLink, Play, Link2, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  variant?: "default" | "compact";
}

export function ProjectCard({ project, variant = "default" }: ProjectCardProps) {
  if (variant === "compact") {
    return (
      <Card className="overflow-hidden hover:shadow-md transition-shadow">
        <CardContent className="p-4">
          <h3 className="font-semibold">{project.title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.tech.slice(0, 3).map((t) => (
              <Badge key={t} variant="secondary" className="text-xs">
                {t}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow border-border/50">
      {/* Image container */}
      <div className="aspect-video relative bg-gradient-to-br from-primary/10 to-primary/5">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-5xl font-bold text-primary/20">
              {project.title.charAt(0)}
            </span>
          </div>
        )}

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 right-3">
            <Badge className="gap-1 bg-primary/90 backdrop-blur-sm text-xs">
              <Sparkles className="h-3 w-3" />
              Featured
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="p-5">
        <h3 className="font-bold text-lg">{project.title}</h3>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((t) => (
            <Badge key={t} variant="secondary" className="text-xs">
              {t}
            </Badge>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3 mt-5">
          {project.playStore && (
            <a
              href={project.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <Play className="h-3.5 w-3.5" />
              Play Store
            </a>
          )}
          {project.appStore && (
            <a
              href={project.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              App Store
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <Link2 className="h-3.5 w-3.5" />
              GitHub
            </a>
          )}
        </div>
      </CardContent>

      <style jsx>{`
        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          height: 2rem;
          padding: 0 0.75rem;
          font-size: 0.75rem;
          font-weight: 500;
          border-radius: 0.375rem;
          border: 1px solid oklch(0.922 0 0);
          background: var(--card);
          color: var(--card-foreground);
          transition: background 0.15s ease, border-color 0.15s ease;
        }
        .project-link:hover {
          background: oklch(0.97 0 0);
          border-color: oklch(0.205 0 0 / 30%);
        }
      `}</style>
    </Card>
  );
}