import { ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: "1",
    title: "DompetKu - Catatan Keuangan",
    description: "Aplikasi pencatatan keuangan personal dengan fitur lengkap: track income, expense, savings, debts, charts interaktif, PDF export, biometric auth, dan home screen widget.",
    tech: ["Flutter", "Riverpod", "SQLite", "fl_chart"],
  },
  {
    id: "2",
    title: "Grammar Master",
    description: "Offline English Grammar Learning App dengan fitur: interactive lessons, quizzes interaktif, dan text-to-speech untuk pronunciation.",
    tech: ["Flutter", "Provider", "TTS"],
  },
  {
    id: "3",
    title: "Try Outcpns",
    description: "Aplikasi Try Outcpns dengan Clean Architecture. Fitur lengkap untuk latihan soal cpns dengan progress tracking dan analytics.",
    tech: ["Flutter", "Riverpod", "Hive", "Clean Architecture"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-12 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
          Work <span className="gradient-text">Experience</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div key={project.id} className="glass-card p-5 group">
              <div className="flex items-start gap-4">
                {/* Project Initial */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-2xl font-bold gradient-text">{project.title.charAt(0)}</span>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-foreground/60 mt-1.5 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mt-3">
                {project.tech.slice(0, 3).map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>

              {/* Link */}
              <div className="mt-3 pt-3 border-t border-border">
                <Link
                  href={`https://wa.me/6282375227802?text=${encodeURIComponent(`Halo Imam, saya tertarik dengan project ${project.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 font-medium text-xs transition-colors"
                >
                  Hubungi <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}