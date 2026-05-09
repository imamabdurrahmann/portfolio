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
      <section className="py-20 px-6 bg-[#0f0a1f]">
        <div className="container mx-auto max-w-6xl text-center">
          <span className="text-purple-400 text-sm font-medium uppercase tracking-wider">Portfolio</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4">
            Project <span className="gradient-text">Saya</span>
          </h1>
          <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Kumpulan aplikasi Flutter yang telah saya kembangkan dengan perhatian pada kualitas,
            performa, dan pengalaman pengguna.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="glass-card p-6 group">
                {/* Project Image Placeholder */}
                <div className="relative h-32 rounded-xl bg-gradient-to-br from-purple-500/20 to-indigo-500/10 flex items-center justify-center mb-4 overflow-hidden">
                  <span className="text-5xl font-bold gradient-text opacity-50">{project.title.charAt(0)}</span>
                  {project.featured && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-xs font-semibold">
                      <Star className="w-3 h-3" />
                      Featured
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.slice(0, 4).map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-xs text-white/40">+{project.tech.length - 4}</span>
                  )}
                </div>

                <div className="flex items-center gap-3 mt-5 pt-4 border-t border-white/10">
                  <Link
                    href={`https://wa.me/6282375227802?text=${encodeURIComponent(project.contactMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm py-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Hubungi
                  </Link>
                  <Link href="/contact" className="btn-primary text-sm py-2">
                    Tanya Detail
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#0f0a1f]">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Tertarik bekerja sama?</h2>
          <p className="mt-3 text-white/60 max-w-md mx-auto">
            Saya selalu terbuka untuk project baru yang menarik dan challenging.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 mt-6 btn-primary">
            Hubungi Saya
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}