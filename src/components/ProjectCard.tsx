"use client";

import { motion } from "framer-motion";
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
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        <Card className="overflow-hidden hover:shadow-lg transition-shadow">
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
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <Card className="overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border-border/50 hover:border-primary/30">
        {/* Image container with overlay */}
        <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-background">
          {project.image ? (
            <>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center relative">
              <motion.div
                className="text-6xl font-bold text-primary/10"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              >
                {project.title.charAt(0)}
              </motion.div>
              {/* Decorative background */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
              </div>
            </div>
          )}

          {/* Featured badge */}
          {project.featured && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute top-3 right-3"
            >
              <Badge className="gap-1 bg-primary/90 backdrop-blur-sm">
                <Sparkles className="h-3 w-3" />
                Featured
              </Badge>
            </motion.div>
          )}
        </div>

        <CardContent className="p-5">
          <motion.h3
            className="font-bold text-lg group-hover:text-primary transition-colors"
            layoutId={`title-${project.id}`}
          >
            {project.title}
          </motion.h3>
          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
            {project.description}
          </p>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((t, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05, duration: 0.2 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <Badge variant="secondary" className="text-xs cursor-default">
                  {t}
                </Badge>
              </motion.div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 mt-5">
            {project.playStore && (
              <motion.a
                href={project.playStore}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-background px-3 text-xs font-medium text-foreground transition-all hover:bg-muted hover:border-primary/30"
              >
                <Play className="h-3.5 w-3.5" />
                Play Store
              </motion.a>
            )}
            {project.appStore && (
              <motion.a
                href={project.appStore}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-background px-3 text-xs font-medium text-foreground transition-all hover:bg-muted hover:border-primary/30"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                App Store
              </motion.a>
            )}
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-background px-3 text-xs font-medium text-foreground transition-all hover:bg-muted hover:border-primary/30"
              >
                <Link2 className="h-3.5 w-3.5" />
                GitHub
              </motion.a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
