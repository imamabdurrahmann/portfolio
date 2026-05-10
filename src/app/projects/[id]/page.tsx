"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Play, Star, Check } from "lucide-react";
import { getProjectById, getProjects } from "@/lib/projects";
import { useLocale } from "@/i18n/LocaleProvider";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}

interface ProjectDetailProps {
  project: NonNullable<ReturnType<typeof getProjectById>>;
}

function ProjectDetail({ project }: ProjectDetailProps) {
  const { t, locale } = useLocale();

  // Get translated title and description
  const title = t(`projectData.${project.id}.title`, undefined, project.title) as string;
  const description = t(`projectData.${project.id}.description`, undefined, project.description) as string;

  // Get features based on project ID
  const features = getFeaturesByProject(project.id, locale);

  return (
    <div className="min-h-screen pt-20 pb-12">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="px-6 py-6"
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {locale === 'en' ? 'Back to Projects' : 'Kembali ke Project'}
        </Link>
      </motion.div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="px-6 mb-8"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-start gap-6">
            {/* Project Icon */}
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center shrink-0">
              <span className="text-4xl md:text-5xl font-bold gradient-text">{project.title.charAt(0)}</span>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                {project.featured && (
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-primary to-indigo-500 text-white text-xs font-semibold flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    {t("projectCard.featured")}
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                {title}
              </h1>
              <p className="mt-3 text-foreground/70 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Tech Stack */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="px-6 mb-8"
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            {locale === 'en' ? 'Technology Stack' : 'Tech Stack'}
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="px-6 mb-8"
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            {locale === 'en' ? 'Key Features' : 'Fitur Utama'}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="glass-card p-4 flex items-start gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-foreground/60 mt-1">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Links */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="px-6"
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            {locale === 'en' ? 'Get the App' : 'Dapatkan Aplikasi'}
          </h2>
          <div className="flex flex-wrap gap-4">
            {project.playStore && (
              <a
                href={project.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-indigo-500 text-white font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all"
              >
                <Play className="w-5 h-5" />
                {t("projectCard.playStore")}
              </a>
            )}
            {project.appStore && (
              <a
                href={project.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-indigo-500 text-white font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all"
              >
                <ExternalLink className="w-5 h-5" />
                {t("projectCard.appStore")}
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <ExternalLink className="w-5 h-5" />
                {t("projectCard.github")}
              </a>
            )}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="px-6 mt-12"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-xl font-bold text-foreground mb-2">
            {locale === 'en' ? 'Interested in this project?' : 'Tertarik dengan project ini?'}
          </h2>
          <p className="text-foreground/60 mb-4">
            {locale === 'en'
              ? "Let's discuss how I can help with your next project"
              : 'Mari diskusikan bagaimana saya bisa membantu project Anda berikutnya'
            }
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
            {t("nav.hireMe")}
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </motion.section>
    </div>
  );
}

function getFeaturesByProject(id: string, locale: string) {
  const enFeatures: Record<string, Array<{ title: string; description: string }>> = {
    "1": [
      { title: "Income & Expense Tracking", description: "Track all your income and expenses with categorized transactions" },
      { title: "Savings Goals", description: "Set and monitor savings targets with visual progress indicators" },
      { title: "Debt Management", description: "Manage and track your debts, loans, and payments easily" },
      { title: "Interactive Charts", description: "Visualize your financial data with beautiful, interactive charts" },
      { title: "PDF Export", description: "Export your financial reports to PDF for record keeping or sharing" },
      { title: "Biometric Authentication", description: "Secure your data with fingerprint or face unlock" },
      { title: "Home Screen Widget", description: "Quick glance at your balance from your phone's home screen" },
      { title: "Offline Support", description: "Works completely offline - your data stays on your device" },
    ],
    "2": [
      { title: "Interactive Lessons", description: "Learn grammar through engaging, structured lessons" },
      { title: "Practice Quizzes", description: "Test your knowledge with interactive quizzes" },
      { title: "Text-to-Speech", description: "Hear correct pronunciation with built-in TTS" },
      { title: "Progress Tracking", description: "Track your learning progress and identify weak areas" },
      { title: "Offline Access", description: "Study anywhere without internet connection" },
      { title: "Multiple Difficulty Levels", description: "From beginner to advanced grammar concepts" },
    ],
    "3": [
      { title: "Clean Architecture", description: "Well-structured, maintainable codebase following best practices" },
      { title: "Comprehensive Practice Tests", description: "Hundreds of questions covering all exam topics" },
      { title: "Progress Analytics", description: "Track your improvement with detailed analytics dashboard" },
      { title: "Timed Exams", description: "Simulate real exam conditions with timed practice sessions" },
      { title: "Topic-based Practice", description: "Focus on specific subjects you need to improve" },
      { title: "Offline Mode", description: "Practice anywhere, even without internet connection" },
    ],
  };

  const idFeatures: Record<string, Array<{ title: string; description: string }>> = {
    "1": [
      { title: "Pencatatan Pemasukan & Pengeluaran", description: "Lacak semua pemasukan dan pengeluaran dengan transaksi terkategori" },
      { title: "Target Tabungan", description: "Tetapkan dan pantau target tabungan dengan indikator progres visual" },
      { title: "Manajemen Utang", description: "Kelola dan lacak utang, pinjaman, dan pembayaran dengan mudah" },
      { title: "Grafik Interaktif", description: "Visualisasikan data keuangan Anda dengan grafik interaktif yang indah" },
      { title: "Ekspor PDF", description: "Ekspor laporan keuangan ke PDF untuk arsip atau berbagi" },
      { title: "Autentikasi Biometrik", description: "Amankan data Anda dengan sidik jari atau buka kunci wajah" },
      { title: "Widget Layar Utama", description: "Lihat saldo cepat dari layar utama HP Anda" },
      { title: "Dukungan Offline", description: "Berfungsi sepenuhnya offline - data Anda tetap di perangkat Anda" },
    ],
    "2": [
      { title: "Pelajaran Interaktif", description: "Pelajari tata bahasa melalui pelajaran terstruktur yang menarik" },
      { title: "Kuis Latihan", description: "Uji pengetahuan Anda dengan kuis interaktif" },
      { title: "Text-to-Speech", description: "Dengar pengucapan yang benar dengan TTS bawaan" },
      { title: "Pantau Progres", description: "Lacak progres belajar dan identifikasi area lemah" },
      { title: "Akses Offline", description: "Belajar di mana saja tanpa koneksi internet" },
      { title: "Berbagai Tingkat Kesulitan", description: "Dari konsep tata bahasa pemula hingga lanjutan" },
    ],
    "3": [
      { title: "Clean Architecture", description: "Kode terstruktur dengan baik, mengikuti best practices" },
      { title: "Try Out Lengkap", description: "Ratusan soal yang mencakup semua topik ujian" },
      { title: "Analitik Progres", description: "Lacak peningkatan Anda dengan dashboard analitik detail" },
      { title: "Ujian Berbatas Waktu", description: "Simulasikan kondisi ujian nyata dengan sesi latihan berbatas waktu" },
      { title: "Latihan Berbasis Topik", description: "Fokus pada topik spesifik yang perlu Anda tingkatkan" },
      { title: "Mode Offline", description: "Berlatih di mana saja, bahkan tanpa koneksi internet" },
    ],
  };

  return locale === 'en' ? enFeatures[id] || [] : idFeatures[id] || [];
}