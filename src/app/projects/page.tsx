import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Projects | Flutter Developer Portfolio",
  description: "Kumpulan project aplikasi Flutter yang telah dikembangkan",
};

export default function ProjectsPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold">Project Saya</h1>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto leading-relaxed">
            Berikut adalah kumpulan aplikasi Flutter yang telah saya kembangkan.
            Setiap project dibangun dengan perhatian pada performa, UX, dan code quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Empty state / CTA */}
        <div className="text-center mt-16 p-8 rounded-2xl bg-muted/30 border border-dashed border-border">
          <h3 className="font-semibold text-lg">Tertarik bekerja sama?</h3>
          <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
            Saya selalu terbuka untuk project baru yang menarik.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 mt-4 px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium"
          >
            Hubungi Saya
          </a>
        </div>
      </div>
    </div>
  );
}