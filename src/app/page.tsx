import Link from "next/link";
import { ArrowRight, Mail, Link2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/ProjectCard";
import { getFeaturedProjects } from "@/lib/projects";

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-24 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4">
            Flutter Developer
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Membangun Aplikasi Mobile <br className="hidden md:block" />
            <span className="text-primary">yang Bermakna</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Saya pengembang Flutter yang passionate dalam menciptakan aplikasi mobile
            yang intuitif, performant, dan memberikan pengalaman pengguna terbaik.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/projects"
              className="inline-flex h-11 items-center justify-center gap-1.5 rounded-lg bg-primary px-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
            >
              Lihat Project <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center gap-1.5 rounded-lg border border-border bg-background px-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <Mail className="mr-2 h-4 w-4" /> Hubungi Saya
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Project Pilihan</h2>
              <p className="text-muted-foreground mt-1">
                Aplikasi Flutter yang telah saya kembangkan
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Lihat Semua <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills/Tech Stack */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Tech Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Flutter",
              "Dart",
              "Riverpod",
              "BLoC",
              "GetX",
              "Firebase",
              "SQLite",
              "Hive",
              "REST API",
              "GraphQL",
              "Git",
              "CI/CD",
            ].map((tech) => (
              <Badge key={tech} variant="outline" className="text-sm px-4 py-1.5">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Tertarik untuk Berkolaborasi?
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            Saya terbuka untuk project freelance atau kesempatan kerja sama.
            Jangan ragu untuk menghubungi saya.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center gap-1.5 rounded-lg bg-primary px-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
            >
              <Mail className="mr-2 h-4 w-4" /> Mulai Percakapan
            </Link>
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-1.5 rounded-lg border border-border bg-background px-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <Link2 className="mr-2 h-4 w-4" /> GitHub Profile
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
