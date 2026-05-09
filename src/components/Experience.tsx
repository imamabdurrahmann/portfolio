import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: "1",
    title: "DompetKu - Catatan Keuangan",
    description: "Aplikasi pencatatan keuangan personal dengan fitur lengkap: track income, expense, savings, debts, charts interaktif, PDF export, biometric auth, dan home screen widget.",
    tech: ["Flutter", "Riverpod", "SQLite", "fl_chart"],
    featured: true,
  },
  {
    id: "2",
    title: "Grammar Master",
    description: "Offline English Grammar Learning App dengan fitur: interactive lessons, quizzes interaktif, dan text-to-speech untuk pronunciation.",
    tech: ["Flutter", "Provider", "TTS"],
    featured: true,
  },
  {
    id: "3",
    title: "Try Outcpns",
    description: "Aplikasi Try Outcpns dengan Clean Architecture. Fitur lengkap untuk latihan soal cpns dengan progress tracking dan analytics.",
    tech: ["Flutter", "Riverpod", "Hive", "Clean Architecture"],
    featured: false,
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Work <span className="gradient-text">Experience</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="glass-card p-6 group">
              <div className="flex items-start gap-4">
                {/* Project Initial */}
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-purple-500/20 to-indigo-500/10 flex items-center justify-center shrink-0">
                  <span className="text-3xl font-bold gradient-text">{project.title.charAt(0)}</span>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm mt-2 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.slice(0, 3).map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>

              {/* Link */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <Link
                  href={`https://wa.me/6282375227802?text=${encodeURIComponent(`Halo Imam, saya tertarik dengan project ${project.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors"
                >
                  Hubungi <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}