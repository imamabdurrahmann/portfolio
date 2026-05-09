import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Flutter Developer Portfolio",
  description: "Kumpulan project aplikasi Flutter yang telah dikembangkan",
};

const projects = [
  {
    id: "1",
    title: "Catatan Keuangan (DompetKu)",
    description: "Aplikasi pencatatan keuangan personal. Track income, expense, savings, dan debts dengan fitur charts, PDF export, biometric auth, dan home screen widget.",
    tech: ["Flutter", "Riverpod", "SQLite", "fl_chart", "PDF", "Biometric Auth", "GoRouter"],
    featured: true,
    playStore: "",
  },
  {
    id: "2",
    title: "Grammar Master",
    description: "Offline English Grammar Learning App. Master grammar dengan interactive lessons dan quizzes, plus text-to-speech.",
    tech: ["Flutter", "Provider", "TTS", "Shared Preferences", "Google Fonts"],
    featured: true,
    playStore: "",
  },
  {
    id: "3",
    title: "Try Outcpns",
    description: "Aplikasi Try Outcpns dengan Clean Architecture. Fitur lengkap untuk latihan soal cpns dengan progress tracking.",
    tech: ["Flutter", "Riverpod", "Hive", "Clean Architecture", "GoRouter", "Dio"],
    featured: false,
    playStore: "",
  },
];

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
            <div key={project.id} className="project-card">
              <div className="project-card-image">
                <span className="project-placeholder">{project.title.charAt(0)}</span>
                {project.featured && (
                  <div className="project-badge">
                    <span className="text-xs font-medium">Featured</span>
                  </div>
                )}
              </div>
              <div className="project-card-content">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

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