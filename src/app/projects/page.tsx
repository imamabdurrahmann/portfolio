import Link from "next/link";
import { ArrowRight, Star, ExternalLink } from "lucide-react";

const projects = [
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
  {
    id: "3",
    title: "Try Outcpns",
    description: "Aplikasi Try Outcpns dengan Clean Architecture. Fitur lengkap untuk latihan soal cpns dengan progress tracking dan analytics.",
    tech: ["Flutter", "Riverpod", "Hive", "Clean Architecture", "GoRouter"],
    featured: false,
    contactMessage: "Halo Imam, saya tertarik dengan project Try Outcpns",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <span className="text-primary text-xs font-medium uppercase tracking-wider">Portfolio</span>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            Project <span className="gradient-text">Saya</span>
          </h1>
          <p className="mt-3 text-sm text-foreground/60 max-w-xl mx-auto leading-relaxed">
            Kumpulan aplikasi Flutter yang telah saya kembangkan dengan perhatian pada kualitas,
            performa, dan pengalaman pengguna.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <div key={project.id} className="glass-card p-5 group">
                {/* Project Image Placeholder */}
                <div className="relative h-28 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-4 overflow-hidden">
                  <span className="text-4xl font-bold gradient-text opacity-40">{project.title.charAt(0)}</span>
                  {project.featured && (
                    <div className="absolute top-2 right-2 flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-primary to-indigo-500 text-white text-xs font-semibold">
                      <Star className="w-3 h-3" />
                    </div>
                  )}
                </div>

                <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-xs text-foreground/60 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="tech-tag text-foreground/50">+{project.tech.length - 3}</span>
                  )}
                </div>

                <div className="flex items-center gap-2 mt-4 pt-3 border-t border-border">
                  <Link
                    href={`https://wa.me/6282375227802?text=${encodeURIComponent(project.contactMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs py-2 px-3"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Hubungi
                  </Link>
                  <Link href="/contact" className="btn-primary text-xs py-2 px-3">
                    Tanya Detail
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-xl md:text-2xl font-bold text-foreground">Tertarik bekerja sama?</h2>
          <p className="mt-2 text-foreground/60 text-sm max-w-md mx-auto">
            Saya selalu terbuka untuk project baru yang menarik dan challenging.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 mt-5 btn-primary">
            Hubungi Saya
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}