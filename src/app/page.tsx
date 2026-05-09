import Link from "next/link";
import { ArrowRight, Mail, Link2, Sparkles, Code2, Rocket, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/ProjectCard";
import { getFeaturedProjects } from "@/lib/projects";

// Tech stack data
const techStack = [
  { name: "Flutter", color: "bg-blue-500/10 text-blue-600 border-blue-200" },
  { name: "Dart", color: "bg-blue-600/10 text-blue-700 border-blue-300" },
  { name: "Riverpod", color: "bg-red-500/10 text-red-600 border-red-200" },
  { name: "BLoC", color: "bg-green-500/10 text-green-600 border-green-200" },
  { name: "Firebase", color: "bg-orange-500/10 text-orange-600 border-orange-200" },
  { name: "SQLite", color: "bg-purple-500/10 text-purple-600 border-purple-200" },
  { name: "Hive", color: "bg-pink-500/10 text-pink-600 border-pink-200" },
  { name: "REST API", color: "bg-cyan-500/10 text-cyan-600 border-cyan-200" },
  { name: "Clean Architecture", color: "bg-indigo-500/10 text-indigo-600 border-indigo-200" },
  { name: "Git", color: "bg-orange-600/10 text-orange-700 border-orange-300" },
];

// Features data
const features = [
  {
    icon: <Code2 className="h-5 w-5" />,
    title: "Clean Code",
    description: "Kode bersih, terstruktur, dan mudah dipelihara dengan prinsip Clean Architecture."
  },
  {
    icon: <Rocket className="h-5 w-5" />,
    title: "Performant Apps",
    description: "Optimasi performa untuk pengalaman pengguna yang smooth dan responsif."
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Modern UI/UX",
    description: "Antarmuka yang intuitif dan menarik dengan Material Design 3."
  },
];

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 hero-bg" aria-hidden="true" />

        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <Badge variant="secondary" className="px-4 py-1.5 text-sm font-medium gap-2">
              <Sparkles className="h-3.5 w-3.5" />
              Available for Freelance
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Membangun Aplikasi<br className="hidden md:block" />
            <span className="hero-gradient-text">Mobile Premium</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Flutter Developer yang passionate dalam menciptakan aplikasi mobile
            yang intuitif, performant, dan memberikan pengalaman terbaik untuk pengguna.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/projects" className="cta-button-primary">
              Lihat Project
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
            <Link href="/contact" className="cta-button-secondary">
              <Mail className="h-4 w-4 mr-2" />
              Hubungi Saya
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { value: "3+", label: "Project Selesai" },
              { value: "5+", label: "Tech Stack" },
              { value: "100%", label: "Dedikasi" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="font-semibold text-base md:text-lg">{feature.title}</h3>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold">Project Pilihan</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto leading-relaxed">
              Aplikasi Flutter yang telah saya kembangkan dengan perhatian pada kualitas dan detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/projects" className="view-all-link">
              Lihat Semua Project
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold">Tech Stack</h2>
            <p className="text-muted-foreground mt-2 leading-relaxed">
              Teknologi yang saya kuasai untuk membangun aplikasi mobile.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {techStack.map((tech) => (
              <Badge
                key={tech.name}
                variant="outline"
                className={`text-xs md:text-sm px-3 py-1.5 md:px-4 md:py-2 border ${tech.color}`}
              >
                {tech.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 cta-section-bg" aria-hidden="true" />

        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4 px-4 text-sm">
            Let's Work Together
          </Badge>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">
            Tertarik untuk <span className="text-primary">Berkolaborasi?</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto leading-relaxed">
            Saya terbuka untuk project freelance atau kesempatan kerja sama.
            Mari wujudkan ide aplikasi mobile kamu bersama.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="cta-button-primary">
              <Mail className="h-4 w-4 mr-2" />
              Mulai Percakapan
            </Link>
            <a
              href="https://github.com/imamabdurrahmann"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button-secondary"
            >
              <Link2 className="h-4 w-4 mr-2" />
              GitHub Profile
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}