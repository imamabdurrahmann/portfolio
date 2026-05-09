import Link from "next/link";
import { ArrowRight, Star, ExternalLink } from "lucide-react";

const projects = [
  {
    id: "1",
    title: "Catatan Keuangan (DompetKu)",
    description: "Aplikasi pencatatan keuangan personal dengan fitur lengkap: track income, expense, savings, debts, charts interaktif, PDF export, biometric auth, dan home screen widget. Dibangun dengan Clean Architecture untuk kode yang maintainable.",
    tech: ["Flutter", "Riverpod", "SQLite", "fl_chart", "PDF", "Biometric Auth", "GoRouter"],
    featured: true,
  },
  {
    id: "2",
    title: "Grammar Master",
    description: "Offline English Grammar Learning App dengan fitur: interactive lessons, quizzes interaktif, text-to-speech untuk pronunciation, dan progress tracking. Cocok untuk belajar grammar bahasa Inggris secara mandiri.",
    tech: ["Flutter", "Provider", "TTS", "Shared Preferences", "Google Fonts"],
    featured: true,
  },
  {
    id: "3",
    title: "Try Outcpns",
    description: "Aplikasi Try Outcpns dengan Clean Architecture. Fitur lengkap untuk latihan soal cpns dengan progress tracking, timer, dan analytics. Desain modern dan mudah digunakan.",
    tech: ["Flutter", "Riverpod", "Hive", "Clean Architecture", "GoRouter", "Dio"],
    featured: false,
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Navbar Space */}
      <div className="h-16" />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Portfolio</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
            Project <span className="gradient-text">Saya</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Kumpulan aplikasi Flutter yang telah saya kembangkan dengan perhatian pada kualitas,
            performa, dan pengalaman pengguna.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="project-card-new group">
                <div className="project-image-new">
                  <div className="project-gradient" />
                  <span className="project-initial-new">{project.title.charAt(0)}</span>
                  {project.featured && (
                    <div className="featured-badge-new">
                      <Star className="w-3 h-3" />
                      Featured
                    </div>
                  )}
                </div>
                <div className="project-content-new">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.slice(0, 4).map((t) => (
                      <span key={t} className="tech-tag-new">{t}</span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="text-xs text-muted-foreground">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 mt-5 pt-4 border-t border-border">
                    <button className="btn-outline-sm">
                      <ExternalLink className="w-4 h-4" />
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Tertarik bekerja sama?</h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            Saya selalu terbuka untuk project baru yang menarik dan challenging.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 mt-6 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-xl transition-all">
            Hubungi Saya
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}