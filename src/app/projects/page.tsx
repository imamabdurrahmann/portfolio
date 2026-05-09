import { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects | Flutter Developer Portfolio",
  description: "Kumpulan project aplikasi Flutter yang telah dikembangkan",
};

export default function ProjectsPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold">Project Saya</h1>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Berikut adalah kumpulan aplikasi Flutter yang telah saya kembangkan.
            Setiap project dibangun dengan perhatian pada performa, UX, dan code quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
