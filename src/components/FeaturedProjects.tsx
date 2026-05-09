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
    id: "2",
    title: "Grammar Master",
    description: "Offline English Grammar Learning App dengan fitur: interactive lessons, quizzes interaktif, dan text-to-speech untuk pronunciation.",
    tech: ["Flutter", "Provider", "TTS", "Shared Preferences"],
    featured: true,
    contactMessage: "Halo Imam, saya tertarik dengan project Grammar Master",
  },
];

export function FeaturedProjects() {
  return (
    <section id="lab" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-purple-400 text-lg font-medium">Featured Project</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-2">
            Project <span className="gradient-text">Pilihan</span>
          </h2>
        </div>

        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 1;

          return (
            <div key={project.id} className="mb-20 last:mb-0">
              <div className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                isEven ? "lg:grid-flow-dense" : ""
              }`}>
                {/* Text Content */}
                <div className={`${isEven ? "lg:col-start-2" : ""}`}>
                  <span className="text-purple-400 text-lg font-medium">Featured Project</span>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mt-2 mb-6">
                    {project.title}
                  </h3>

                  {/* Description Card */}
                  <div className={`featured-description-card ${isEven ? "lg:mr-[-15%]" : "lg:ml-[-15%]"}`}>
                    <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mt-8">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex flex-wrap gap-4 mt-8">
                    <Link
                      href={`https://wa.me/6282375227802?text=${encodeURIComponent(project.contactMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Hubungi via WhatsApp
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Image Content */}
                <div className={`${isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <div className="featured-project-image">
                      <div className="featured-project-placeholder">{project.title.charAt(0)}</div>
                      <div className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-semibold shadow-lg">
                        <Star className="w-4 h-4" />
                        Featured
                      </div>
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