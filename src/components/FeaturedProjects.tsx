import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

const featuredProjects = [
  {
    id: "1",
    title: "Catatan Keuangan (DompetKu)",
    description: "Aplikasi pencatatan keuangan personal dengan fitur lengkap: track income, expense, savings, debts, charts interaktif, PDF export, biometric auth, dan home screen widget.",
    tech: ["Flutter", "Riverpod", "SQLite", "fl_chart", "PDF", "Biometric Auth"],
    featured: true,
    contactMessage: "Halo Imam, saya tertarik dengan project DompetKu - Catatan Keuangan",
  },
  {
    id: "3",
    title: "Try Outcpns",
    description: "Aplikasi Try Outcpns dengan Clean Architecture. Fitur lengkap untuk latihan soal cpns dengan progress tracking dan analytics.",
    tech: ["Flutter", "Riverpod", "Hive", "Clean Architecture", "GoRouter"],
    featured: false,
    contactMessage: "Halo Imam, saya tertarik dengan project Try Outcpns",
  },
];

export function FeaturedProjects() {
  return (
    <section id="lab" className="py-12 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Featured Project</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2">
            Project <span className="gradient-text">Pilihan</span>
          </h2>
        </div>

        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 1;

          return (
            <div key={project.id} className="mb-12 last:mb-0">
              <div className={`featured-item grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start ${
                isEven ? "lg:grid-flow-dense" : ""
              }`}>
                {/* Image Content */}
                <div className={`order-1 ${isEven ? "lg:col-start-2" : ""}`}>
                  <div className="featured-project-image rounded-2xl overflow-hidden">
                    <div className="featured-project-placeholder">{project.title.charAt(0)}</div>
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary to-indigo-500 text-white text-xs font-semibold shadow-lg">
                      <Star className="w-3 h-3" />
                      Featured
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className={`order-2 ${isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <span className="text-primary text-xs font-medium uppercase tracking-wider">Featured Project</span>
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground mt-1">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-sm text-foreground/70 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.slice(0, 4).map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="tech-tag text-foreground/50">+{project.tech.length - 4}</span>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="mt-5">
                    <Link
                      href={`https://wa.me/6282375227802?text=${encodeURIComponent(project.contactMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-sm"
                    >
                      Hubungi via WhatsApp
                      <ArrowRight className="w-4 h-4" />
                    </Link>
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