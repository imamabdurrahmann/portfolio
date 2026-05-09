import Link from "next/link";
import { ArrowRight, Mail, Link2, Sparkles, Code2, Rocket, Zap, Star, TrendingUp, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Project data
const featuredProjects = [
  {
    id: "1",
    title: "Catatan Keuangan (DompetKu)",
    description: "Aplikasi pencatatan keuangan personal. Track income, expense, savings, dan debts dengan fitur charts, PDF export, biometric auth, dan home screen widget.",
    tech: ["Flutter", "Riverpod", "SQLite", "fl_chart"],
    featured: true,
  },
  {
    id: "2",
    title: "Grammar Master",
    description: "Offline English Grammar Learning App. Master grammar dengan interactive lessons dan quizzes, plus text-to-speech.",
    tech: ["Flutter", "Provider", "TTS", "Google Fonts"],
    featured: true,
  },
];

// Tech stack data
const techStack = [
  { name: "Flutter", color: "tech-flutter" },
  { name: "Dart", color: "tech-dart" },
  { name: "Riverpod", color: "tech-riverpod" },
  { name: "BLoC", color: "tech-bloc" },
  { name: "Firebase", color: "tech-firebase" },
  { name: "SQLite", color: "tech-sqlite" },
  { name: "Hive", color: "tech-hive" },
  { name: "Clean Arch", color: "tech-arch" },
];

// Services
const services = [
  { icon: <Code2 className="w-5 h-5" />, title: "App Development", desc: "Membangun aplikasi mobile berkualitas tinggi" },
  { icon: <Zap className="w-5 h-5" />, title: "Performance", desc: "Optimasi untuk pengalaman terbaik" },
  { icon: <Heart className="w-5 h-5" />, title: "Clean Code", desc: "Kode terstruktur dan mudah dipelihara" },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Navbar Space */}
      <div className="h-16" />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow-delayed" />

        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Available for Projects</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Flutter <span className="gradient-text">Developer</span>
              <br />
              <span className="text-foreground/80">yang Menghadirkan</span>
              <br />
              <span className="gradient-text-2">Solusi Digital</span>
            </h1>

            {/* Description */}
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Membangun aplikasi mobile yang tidak hanya berfungsi dengan baik,
              tapi juga memberikan pengalaman yang berkesan bagi setiap pengguna.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-12">
              {[
                { num: "3+", label: "Project", icon: <Star className="w-4 h-4" /> },
                { num: "100%", label: "Dedikasi", icon: <Heart className="w-4 h-4" /> },
                { num: "5+", label: "Tech Stack", icon: <TrendingUp className="w-4 h-4" /> },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center">
                  <div className="flex items-center gap-1 text-4xl md:text-5xl font-bold gradient-text">
                    {stat.num}
                    {stat.icon}
                  </div>
                  <span className="text-sm text-muted-foreground mt-1">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <Link href="/projects" className="btn-primary">
                Lihat Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn-secondary">
                <Mail className="w-4 h-4" />
                Hubungi Saya
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Services</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Apa yang Saya Tawarkan</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, i) => (
              <div key={service.title} className="service-card group">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
                <p className="text-muted-foreground mt-2 leading-relaxed">{service.desc}</p>
                <div className="service-number">0{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Portfolio</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">Project Pilihan</h2>
              <p className="text-muted-foreground mt-2 max-w-md">
                Aplikasi yang telah dibangun dengan perhatian pada detail dan kualitas.
              </p>
            </div>
            <Link href="/projects" className="view-all-link">
              Lihat Semua
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {featuredProjects.map((project) => (
              <div key={project.id} className="project-card-2">
                <div className="project-image">
                  <span className="project-initial">{project.title.charAt(0)}</span>
                  {project.featured && (
                    <div className="featured-badge">
                      <Star className="w-3 h-3" />
                      Featured
                    </div>
                  )}
                </div>
                <div className="project-content">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground mt-2 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Technologies</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Tech Stack</h2>
            <p className="text-muted-foreground mt-2">Tools dan teknologi yang saya kuasai</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {techStack.map((tech) => (
              <span key={tech.name} className={`tech-badge ${tech.color}`}>
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Let's Collaborate</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
              Punya Ide Aplikasi?
              <br />
              <span className="gradient-text">Mari Wujudkan Bersama</span>
            </h2>
            <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
              Saya terbuka untuk project freelance, kolaborasi, atau kesempatan kerja sama.
              Jangan ragu untuk memulai percakapan.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                <Mail className="w-5 h-5" />
                Mulai Percakapan
              </Link>
              <a href="https://github.com/imamabdurrahmann" target="_blank" rel="noopener noreferrer" className="btn-secondary text-lg px-8 py-4">
                <Link2 className="w-5 h-5" />
                GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-primary" />
              <span className="font-semibold">Portfolio</span>
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Flutter Developer. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}