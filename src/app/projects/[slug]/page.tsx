"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Play, Star, Check, Zap, Shield, Clock, TrendingUp, Target, Award, Database, Users, Bell, FileText, Smartphone } from "lucide-react";
import { getProjectBySlug } from "@/lib/projects";
import { useLocale } from "@/i18n/LocaleProvider";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}

interface ProjectDetailProps {
  project: NonNullable<ReturnType<typeof getProjectBySlug>>;
}

function ProjectDetail({ project }: ProjectDetailProps) {
  const { t, locale } = useLocale();

  const title = t(`projectData.${project.id}.title`, undefined, project.title) as string;
  const description = t(`projectData.${project.id}.description`, undefined, project.description) as string;

  const allFeatures = getAllFeaturesByProject(project.slug, locale);

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
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Database className="w-5 h-5 text-primary" />
            {locale === 'en' ? 'Technology Stack' : 'Tech Stack'}
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features by Category */}
      {allFeatures.map((category, catIndex) => (
        <motion.section
          key={category.category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + catIndex * 0.1 }}
          className="px-6 mb-8"
        >
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              {category.icon}
              {category.category}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {category.features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + catIndex * 0.1 + index * 0.03 }}
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
      ))}

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

interface FeatureCategory {
  category: string;
  icon: React.ReactNode;
  features: Array<{ title: string; description: string }>;
}

function getAllFeaturesByProject(slug: string, locale: string): FeatureCategory[] {
  if (slug === "catatan-keuangan-dompetku") {
    return locale === 'en' ? [
      {
        category: "Transaction Management",
        icon: <TrendingUp className="w-5 h-5 text-primary" />,
        features: [
          { title: "Income & Expense Tracking", description: "Full CRUD operations with categorized transactions, search, and pagination" },
          { title: "Multiple Wallets (Dompet)", description: "Support multiple wallets with different currencies, automatic balance sync" },
          { title: "Recurring Transactions", description: "Auto-create daily, weekly, monthly, quarterly, yearly transactions" },
          { title: "Receipt Attachments", description: "Attach photo receipts to transactions for record keeping" },
          { title: "Soft Delete & Trash", description: "Deleted transactions go to trash, can be restored or permanently deleted" },
          { title: "Full-text Search", description: "Search across all transactions with filters by date, category, wallet" },
        ]
      },
      {
        category: "Budget & Planning",
        icon: <Target className="w-5 h-5 text-primary" />,
        features: [
          { title: "Monthly Budgets", description: "Set budget per category with visual progress indicators" },
          { title: "Budget Rollover", description: "Unused budget automatically carries to next month" },
          { title: "Budget Alerts", description: "Notifications when spending reaches 80% threshold" },
          { title: "Cashflow Prediction", description: "Algorithm calculates days remaining based on spending pattern" },
        ]
      },
      {
        category: "Goals & Debts",
        icon: <Award className="w-5 h-5 text-primary" />,
        features: [
          { title: "Savings Goals (Tabungan Impian)", description: "Target-based savings with visual progress, milestone notifications at 50%, 75%, 100%" },
          { title: "Debt Management", description: "Track money owed to/by others with installment payment history" },
          { title: "Due Date Reminders", description: "Notifications for approaching debt deadlines" },
        ]
      },
      {
        category: "Security & Profiles",
        icon: <Shield className="w-5 h-5 text-primary" />,
        features: [
          { title: "PIN Lock", description: "Optional 6-digit PIN protection for app access" },
          { title: "Biometric Auth", description: "Fingerprint and face unlock for secure access" },
          { title: "Multi-Profile Support", description: "Separate profiles for family members with data isolation" },
          { title: "App Lock on Background", description: "Auto re-lock when app goes to background" },
        ]
      },
      {
        category: "Export & Reports",
        icon: <FileText className="w-5 h-5 text-primary" />,
        features: [
          { title: "PDF Export", description: "Generate professional financial reports as PDF documents" },
          { title: "JSON Backup/Restore", description: "Full data backup to JSON with file sharing, restore from backup" },
          { title: "Monthly Summaries", description: "Income/expense totals with category breakdown pie charts" },
        ]
      },
      {
        category: "Platform & Integration",
        icon: <Smartphone className="w-5 h-5 text-primary" />,
        features: [
          { title: "Android Home Widget", description: "Show balance on home screen with quick add income/expense actions" },
          { title: "Desktop Support", description: "Full Windows/Mac/Linux support with window management" },
          { title: "Local Notifications", description: "Budget warnings, debt reminders, savings milestones" },
        ]
      },
    ] : [
      {
        category: "Manajemen Transaksi",
        icon: <TrendingUp className="w-5 h-5 text-primary" />,
        features: [
          { title: "Pencatatan Pemasukan & Pengeluaran", description: "Operasi CRUD lengkap dengan transaksi terkategori, pencarian, dan pagination" },
          { title: "Multi Dompet", description: "Dukung banyak dompet dengan mata uang berbeda, sinkronisasi saldo otomatis" },
          { title: "Transaksi Berulang", description: "Auto-create transaksi harian, mingguan, bulanan, quarterly, tahunan" },
          { title: "Lampiran Struk", description: "Lampirkan foto struk untuk arsip transaksi" },
          { title: "Soft Delete & Tong Sampah", description: "Transaksi dihapus masuk tong sampah, bisa direstore atau hapus permanen" },
          { title: "Pencarian Lengkap", description: "Cari semua transaksi dengan filter tanggal, kategori, dompet" },
        ]
      },
      {
        category: "Anggaran & Perencanaan",
        icon: <Target className="w-5 h-5 text-primary" />,
        features: [
          { title: "Anggaran Bulanan", description: "Tetapkan anggaran per kategori dengan indikator progres visual" },
          { title: "Roll Over Anggaran", description: "Anggaran tidak terpakai secara otomatis masuk bulan berikutnya" },
          { title: "Peringatan Anggaran", description: "Notifikasi saat pengeluaran mencapai 80% batas anggaran" },
          { title: "Prediksi Arus Kas", description: "Algoritma menghitung hari tersisa berdasarkan pola pengeluaran" },
        ]
      },
      {
        category: "Target & Utang",
        icon: <Award className="w-5 h-5 text-primary" />,
        features: [
          { title: "Tabungan Impian", description: "Tabungan berbasis target dengan progres visual, notifikasi di 50%, 75%, 100%" },
          { title: "Manajemen Utang", description: "Lacak uang yang dipinjam/utang dengan history cicilan" },
          { title: "Pengingat Jatuh Tempo", description: "Notifikasi untuk deadline utang yang mendekati" },
        ]
      },
      {
        category: "Keamanan & Profil",
        icon: <Shield className="w-5 h-5 text-primary" />,
        features: [
          { title: "Kunci PIN", description: "Proteksi opsional dengan PIN 6 digit untuk akses aplikasi" },
          { title: "Autentikasi Biometrik", description: "Buka kunci dengan sidik jari atau wajah" },
          { title: "Multi Profil", description: "Profil terpisah untuk anggota keluarga dengan isolasi data" },
          { title: "Kunci Saat Background", description: "Otomatis kunci kembali saat aplikasi di background" },
        ]
      },
      {
        category: "Ekspor & Laporan",
        icon: <FileText className="w-5 h-5 text-primary" />,
        features: [
          { title: "Ekspor PDF", description: "Generate laporan keuangan profesional sebagai dokumen PDF" },
          { title: "Backup/Restore JSON", description: "Backup data lengkap ke JSON dengan berbagi file, restore dari backup" },
          { title: "Ringkasan Bulanan", description: "Total pemasukan/pengeluaran dengan breakdown kategori pie chart" },
        ]
      },
      {
        category: "Platform & Integrasi",
        icon: <Smartphone className="w-5 h-5 text-primary" />,
        features: [
          { title: "Widget Android", description: "Tampilkan saldo di layar utama dengan aksi cepat tambah transaksi" },
          { title: "Dukungan Desktop", description: "Dukungan penuh Windows/Mac/Linux dengan window management" },
          { title: "Notifikasi Lokal", description: "Peringatan anggaran, pengingat utang, pencapaian tabungan" },
        ]
      },
    ];
  }

  if (slug === "part-of-english") {
    return locale === 'en' ? [
      {
        category: "Grammar Learning",
        icon: <Zap className="w-5 h-5 text-primary" />,
        features: [
          { title: "Organized Grammar Categories", description: "Learn Tenses, Articles, Prepositions, and more with structured lessons" },
          { title: "Rich Lesson Content", description: "Markdown-like formatting with bold, lists, and examples" },
          { title: "Sentence Type Detection", description: "Auto-detect positive/negative/interrogative with color-coded badges" },
          { title: "Learning Tips", description: "Helpful tips for each grammar concept" },
          { title: "XP Rewards System", description: "Earn experience points for completing lessons" },
        ]
      },
      {
        category: "Quiz System",
        icon: <Target className="w-5 h-5 text-primary" />,
        features: [
          { title: "6 Question Types", description: "Multiple Choice, Fill in Blank, True/False, Sentence Ordering, Drag & Drop, Matching" },
          { title: "Timer Support", description: "Optional timed quizzes for exam simulation" },
          { title: "Hint System", description: "Optional hints for difficult questions" },
          { title: "Detailed Explanations", description: "Learn from each question with full explanations" },
          { title: "Score Tracking", description: "Percentage-based scoring with XP rewards" },
        ]
      },
      {
        category: "Spaced Repetition System (SRS)",
        icon: <Clock className="w-5 h-5 text-primary" />,
        features: [
          { title: "SM-2 Algorithm", description: "Enhanced spaced repetition with ease factors" },
          { title: "Card Flip Animation", description: "Beautiful 3D flip animation for flashcard review" },
          { title: "Swipe Gestures", description: "Swipe to rate cards (Again, Hard, Good, Easy)" },
          { title: "Review Statistics", description: "Due count, new cards, retention rate, review forecast" },
        ]
      },
      {
        category: "Special Practice",
        icon: <Award className="w-5 h-5 text-primary" />,
        features: [
          { title: "Daily Challenge", description: "Timed grammar challenges every day" },
          { title: "Sentence Transformation", description: "Practice transforming sentence structures" },
          { title: "Grammar Error Correction", description: "Find and fix grammar errors" },
          { title: "Idioms Collection", description: "Learn common English idiomatic expressions" },
          { title: "Collocations", description: "Word combination learning" },
          { title: "Word Roots", description: "Etymology-based vocabulary building" },
          { title: "Mnemonics", description: "Memory tricks for grammar rules" },
        ]
      },
      {
        category: "Text-to-Speech",
        icon: <ExternalLink className="w-5 h-5 text-primary" />,
        features: [
          { title: "English Pronunciation", description: "Hear correct pronunciation for all grammar examples" },
          { title: "Adjustable Settings", description: "Control speech rate, pitch, and volume" },
          { title: "Toggle On/Off", description: "Enable or disable TTS as needed" },
        ]
      },
      {
        category: "Gamification & Progress",
        icon: <Star className="w-5 h-5 text-primary" />,
        features: [
          { title: "XP & Leveling System", description: "Automatic level up based on XP earned" },
          { title: "Daily Streaks", description: "Track consecutive study days with animations" },
          { title: "10+ Achievements", description: "Unlockable achievements for milestones" },
          { title: "Celebration Dialogs", description: "Animated celebrations for streaks and level-ups" },
          { title: "Progress Dashboard", description: "Topic-by-topic completion tracking" },
        ]
      },
    ] : [
      {
        category: "Pembelajaran Tata Bahasa",
        icon: <Zap className="w-5 h-5 text-primary" />,
        features: [
          { title: "Kategori Tata Bahasa Terorganisir", description: "Pelajari Tenses, Articles, Prepositions, dan lainnya dengan pelajaran terstruktur" },
          { title: "Konten Pelajaran Rich", description: "Format seperti markdown dengan bold, lists, dan contoh" },
          { title: "Deteksi Tipe Kalimat", description: "Auto-detect kalimat positif/negatif/interogatif dengan badge berkode warna" },
          { title: "Tips Pembelajaran", description: "Tips berguna untuk setiap konsep tata bahasa" },
          { title: "Sistem XP Rewards", description: "Peroleh experience points untuk menyelesaikan pelajaran" },
        ]
      },
      {
        category: "Sistem Kuis",
        icon: <Target className="w-5 h-5 text-primary" />,
        features: [
          { title: "6 Tipe Soal", description: "Pilihan Ganda, Isi Kosong, Benar/Salah, Susun Kalimat, Drag & Drop, Pasangan" },
          { title: "Dukungan Timer", description: "Kuis berbatas waktu opsional untuk simulasi ujian" },
          { title: "Sistem Petunjuk", description: "Petunjuk opsional untuk soal sulit" },
          { title: "Penjelasan Detail", description: "Pelajari dari setiap soal dengan penjelasan lengkap" },
          { title: "Pelacakan Skor", description: "Scoring berbasis persentase dengan reward XP" },
        ]
      },
      {
        category: "Spaced Repetition System (SRS)",
        icon: <Clock className="w-5 h-5 text-primary" />,
        features: [
          { title: "Algoritma SM-2", description: "Spaced repetition enhanced dengan ease factors" },
          { title: "Animasi Flip Card", description: "Animasi flip 3D yang indah untuk review flashcard" },
          { title: "Gesture Swipe", description: "Swipe untuk memberi rating kartu (Ulangi, Susah, Bagus, Mudah)" },
          { title: "Statistik Review", description: "Jumlah due, kartu baru, retention rate, forecast review" },
        ]
      },
      {
        category: "Latihan Khusus",
        icon: <Award className="w-5 h-5 text-primary" />,
        features: [
          { title: "Tantangan Harian", description: "Tantangan tata bahasa berbatas waktu setiap hari" },
          { title: "Transformasi Kalimat", description: "Latihan mengubah struktur kalimat" },
          { title: "Koreksi Error Tata Bahasa", description: "Temukan dan perbaiki error tata bahasa" },
          { title: "Koleksi Idioms", description: "Pelajari ungkapan idiomatik bahasa Inggris" },
          { title: "Collocations", description: "Pembelajaran kombinasi kata" },
          { title: "Word Roots", description: "Pembelajaran vocabulary berbasis etimologi" },
          { title: "Mnemonics", description: "Trik memori untuk aturan tata bahasa" },
        ]
      },
      {
        category: "Text-to-Speech",
        icon: <ExternalLink className="w-5 h-5 text-primary" />,
        features: [
          { title: "Pengucapan Bahasa Inggris", description: "Dengar pengucapan yang benar untuk semua contoh tata bahasa" },
          { title: "Pengaturan Adjustable", description: "Kontrol speech rate, pitch, dan volume" },
          { title: "Toggle On/Off", description: "Aktifkan atau nonaktifkan TTS sesuai kebutuhan" },
        ]
      },
      {
        category: "Gamifikasi & Progres",
        icon: <Star className="w-5 h-5 text-primary" />,
        features: [
          { title: "Sistem XP & Leveling", description: "Level up otomatis berdasarkan XP yang diperoleh" },
          { title: "Daily Streaks", description: "Lacak hari belajar berturut-turut dengan animasi" },
          { title: "10+ Achievement", description: "Achievement yang bisa di-unlock untuk milestone" },
          { title: "Dialog Celebrasi", description: "Animasi celebration untuk streaks dan level-ups" },
          { title: "Dashboard Progress", description: "Pelacakan completion per topik" },
        ]
      },
    ];
  }

  if (slug === "try-outcpns") {
    return locale === 'en' ? [
      {
        category: "Exam Simulation",
        icon: <Target className="w-5 h-5 text-primary" />,
        features: [
          { title: "Full 110-Question Exam", description: "Complete exam simulation with all question types" },
          { title: "Category-Specific Tests", description: "Practice TWK, TIU, or TKP only" },
          { title: "Timed Exams", description: "Configurable time limits with auto-submit at time end" },
          { title: "Keyboard Navigation", description: "A-E for answers, arrow keys for navigation, fully keyboard-driven" },
          { title: "Flag System", description: "Mark questions for review before submission" },
        ]
      },
      {
        category: "Question Bank",
        icon: <Database className="w-5 h-5 text-primary" />,
        features: [
          { title: "Multiple Choice with 5 Options", description: "Comprehensive question format" },
          { title: "Categories: TWK, TIU, TKP", description: "All three exam categories covered" },
          { title: "Subcategory Organization", description: "More granular topic organization" },
          { title: "Difficulty Levels", description: "Easy, medium, hard questions" },
          { title: "Figural Questions", description: "Image-based questions support" },
        ]
      },
      {
        category: "Scoring & Results",
        icon: <TrendingUp className="w-5 h-5 text-primary" />,
        features: [
          { title: "Passing Grades", description: "TWK (65), TIU (80), TKP (166) benchmarks" },
          { title: "Category Scores", description: "Individual section scores breakdown" },
          { title: "Overall Pass/Fail", description: "Combined scoring with pass/fail determination" },
          { title: "Score History", description: "Track performance across all attempts" },
          { title: "Detailed Results", description: "Score breakdown by category with explanations" },
        ]
      },
      {
        category: "Statistics & Analytics",
        icon: <Award className="w-5 h-5 text-primary" />,
        features: [
          { title: "Progress Chart", description: "Visual score progression over time" },
          { title: "Category Accuracy", description: "Per-category accuracy rates analysis" },
          { title: "Weakness Analysis", description: "AI-based identification of weakest areas" },
          { title: "Trend Analysis", description: "Score trend indicators (improving/declining)" },
          { title: "Summary Statistics", description: "Total sessions, pass rate, average score" },
        ]
      },
      {
        category: "Practice Mode",
        icon: <Zap className="w-5 h-5 text-primary" />,
        features: [
          { title: "Per-Subtopic Practice", description: "Practice specific subtopics for targeted learning" },
          { title: "Immediate Feedback", description: "See correct answer right away after answering" },
          { title: "Untimed Practice", description: "No timer for relaxed learning sessions" },
          { title: "Detailed Explanations", description: "Full explanations for every question" },
        ]
      },
      {
        category: "Data & Recovery",
        icon: <Shield className="w-5 h-5 text-primary" />,
        features: [
          { title: "Auto-Save", description: "Save progress during exam to prevent data loss" },
          { title: "Crash Recovery", description: "Resume interrupted exams seamlessly" },
          { title: "Session History", description: "Complete history of past attempts" },
          { title: "Time Warnings", description: "10min, 5min, 1min warnings during exam" },
        ]
      },
    ] : [
      {
        category: "Simulasi Ujian",
        icon: <Target className="w-5 h-5 text-primary" />,
        features: [
          { title: "Ujian Lengkap 110 Soal", description: "Simulasi ujian lengkap dengan semua tipe soal" },
          { title: "Tes per Kategori", description: "Latihan TWK, TIU, atau TKP saja" },
          { title: "Ujian Berbatas Waktu", description: "Batas waktu configurable dengan auto-submit saat waktu habis" },
          { title: "Navigasi Keyboard", description: "A-E untuk jawaban, arrow keys untuk navigasi, sepenuhnya keyboard-driven" },
          { title: "Sistem Flag", description: "Tandai soal untuk di-review sebelum submit" },
        ]
      },
      {
        category: "Bank Soal",
        icon: <Database className="w-5 h-5 text-primary" />,
        features: [
          { title: "Pilihan Ganda 5 Opsi", description: "Format soal komprehensif" },
          { title: "Kategori: TWK, TIU, TKP", description: "Semua tiga kategori ujian tercakup" },
          { title: "Organisasi Subkategori", description: "Organisasi topik yang lebih granular" },
          { title: "Tingkat Kesulitan", description: "Soal mudah, sedang, sulit" },
          { title: "Soal Figural", description: "Dukungan soal berbasis gambar" },
        ]
      },
      {
        category: "Scoring & Hasil",
        icon: <TrendingUp className="w-5 h-5 text-primary" />,
        features: [
          { title: "Nilai Lulus", description: "Benchmark TWK (65), TIU (80), TKP (166)" },
          { title: "Skor per Kategori", description: "Breakdown skor per section" },
          { title: "Lulus/Gagal Keseluruhan", description: "Scoring gabungan dengan penentuan lulus/gagal" },
          { title: "Riwayat Skor", description: "Lacak performa di semua attempt" },
          { title: "Hasil Detail", description: "Breakdown skor per kategori dengan penjelasan" },
        ]
      },
      {
        category: "Statistik & Analitik",
        icon: <Award className="w-5 h-5 text-primary" />,
        features: [
          { title: "Grafik Progress", description: "Visual progression skor dari waktu ke waktu" },
          { title: "Akurasi per Kategori", description: "Analisis tingkat akurasi per kategori" },
          { title: "Analisis Kelemahan", description: "Identifikasi area terlemah berbasis AI" },
          { title: "Analisis Trend", description: "Indikator trend skor (meningkat/menurun)" },
          { title: "Statistik Ringkasan", description: "Total sesi, pass rate, rata-rata skor" },
        ]
      },
      {
        category: "Mode Latihan",
        icon: <Zap className="w-5 h-5 text-primary" />,
        features: [
          { title: "Latihan per Subtopik", description: "Latihan subtopik spesifik untuk pembelajaran target" },
          { title: "Feedback Langsung", description: "Lihat jawaban benar langsung setelah menjawab" },
          { title: "Latihan Tanpa Timer", description: "Sesi pembelajaran santai tanpa batasan waktu" },
          { title: "Penjelasan Detail", description: "Penjelasan lengkap untuk setiap soal" },
        ]
      },
      {
        category: "Data & Recovery",
        icon: <Shield className="w-5 h-5 text-primary" />,
        features: [
          { title: "Auto-Save", description: "Simpan progress selama ujian untuk mencegah kehilangan data" },
          { title: "Crash Recovery", description: "Lanjutkan ujian yang terputus dengan seamless" },
          { title: "Riwayat Sesi", description: "History lengkap attempt sebelumnya" },
          { title: "Peringatan Waktu", description: "Peringatan 10menit, 5menit, 1menit selama ujian" },
        ]
      },
    ];
  }

  if (slug === "calcpro") {
    return locale === 'en' ? [
      {
        category: "Calculator",
        icon: <Target className="w-5 h-5 text-primary" />,
        features: [
          { title: "Standard Calculator", description: "Basic arithmetic (+, -, ×, ÷) with Samsung-style display and live result preview" },
          { title: "Scientific Calculator", description: "sin, cos, tan, asin, acos, atan, log, ln, √, π, e, x², xⁿ, factorial with DEG/RAD toggle" },
          { title: "Fraction Mode", description: "Display results as mixed fractions (a/b) using fraction package" },
          { title: "Smart Input", description: "Auto-inserts parentheses, implicit multiplication (2( becomes 2×(), 500-char limit" },
          { title: "Calculator History", description: "Stores last 50 calculations, persisted locally" },
          { title: "Post-evaluate Continuation", description: "Press number after = to start new; press operator to continue from result" },
        ]
      },
      {
        category: "Unit Conversion",
        icon: <Database className="w-5 h-5 text-primary" />,
        features: [
          { title: "7 Categories", description: "Length, Weight, Temperature, Area, Volume, Speed, Digital Storage" },
          { title: "26+ Units", description: "km, m, cm, mm, mi, yd, ft, in, ton, kg, g, mg, lb, oz, °C, °F, K, L, mL, gal, cup, km/h, m/s, mph, TB, GB, MB, KB, B, bit" },
          { title: "Temperature Formulas", description: "Proper Celsius/Fahrenheit/Kelvin conversions (not linear)" },
          { title: "Swap Units", description: "Quick button to swap from/to units" },
        ]
      },
      {
        category: "Health & Finance Tools",
        icon: <Award className="w-5 h-5 text-primary" />,
        features: [
          { title: "BMI Calculator", description: "weight(kg) / height(m)² with color-coded categories and ideal weight range" },
          { title: "Discount Calculator", description: "Single and stacked discounts (20%+10%), optional PPN 11% toggle" },
          { title: "Split Bill", description: "Divide total bill among people with tip calculator (0-20%)" },
          { title: "Currency Exchange", description: "20 currencies with live rates from exchangerate-api.com, 24-hour cache" },
          { title: "Loan Calculator", description: "Monthly instalment with DP, interest rate, tenor; pie chart visualization" },
        ]
      },
      {
        category: "Advanced Features",
        icon: <TrendingUp className="w-5 h-5 text-primary" />,
        features: [
          { title: "Programmer Mode", description: "HEX/DEC/OCT/BIN conversions with bitwise operations (AND, OR, XOR, SHL, SHR)" },
          { title: "Function Graphing", description: "Plot y = f(x) equations with parser caching for performance" },
          { title: "Matrix Operations", description: "2x2 and 3x3 support with +,-,×, determinant, and inverse" },
          { title: "PDF Export", description: "Generate loan reports and calculation history as PDF documents" },
          { title: "Share Results", description: "Share calculation results via native share sheet" },
        ]
      },
      {
        category: "UI/UX Features",
        icon: <Zap className="w-5 h-5 text-primary" />,
        features: [
          { title: "6 Theme Presets", description: "Deep Space, Cyberpunk Neon, Rose Gold, Mint Fresh, Sunset Blaze, Arctic Blue" },
          { title: "Material You", description: "Android 12+ dynamic color extraction support" },
          { title: "Left-handed Mode", description: "Reverses calculator button layout for accessibility" },
          { title: "Haptic Feedback", description: "Light impact on all button presses" },
          { title: "Glassmorphism UI", description: "Custom GlassContainer widget with optional blur effect" },
          { title: "Onboarding", description: "3-page intro with PageView and animated dots" },
        ]
      },
    ] : [
      {
        category: "Kalkulator",
        icon: <Target className="w-5 h-5 text-primary" />,
        features: [
          { title: "Kalkulator Standar", description: "Aritmatika dasar (+, -, ×, ÷) dengan tampilan style Samsung dan live preview hasil" },
          { title: "Kalkulator Ilmiah", description: "sin, cos, tan, asin, acos, atan, log, ln, √, π, e, x², xⁿ, faktorial dengan toggle DEG/RAD" },
          { title: "Mode Pecahan", description: "Tampilkan hasil sebagai pecahan campuran (a/b)" },
          { title: "Input Cerdas", description: "Auto-insert tanda kurung, perkalian implisit (2( menjadi 2×(), batas 500 karakter" },
          { title: "Riwayat Kalkulator", description: "Simpan 50 perhitungan terakhir, tersimpan secara lokal" },
          { title: "Lanjut dari Hasil", description: "Tekan angka setelah = untuk mulai baru; tekan operator untuk lanjut dari hasil" },
        ]
      },
      {
        category: "Konversi Unit",
        icon: <Database className="w-5 h-5 text-primary" />,
        features: [
          { title: "7 Kategori", description: "Panjang, Berat, Suhu, Luas, Volume, Kecepatan, Penyimpanan Digital" },
          { title: "26+ Satuan", description: "km, m, cm, mm, mi, yd, ft, in, ton, kg, g, mg, lb, oz, °C, °F, K, L, mL, gal, cup, km/h, m/s, mph, TB, GB, MB, KB, B, bit" },
          { title: "Formula Suhu", description: "Konversi Celsius/Fahrenheit/Kelvin yang tepat (bukan linear)" },
          { title: "Tukar Satuan", description: "Tombol cepat untuk tukar satuan dari/ke" },
        ]
      },
      {
        category: "Alat Kesehatan & Keuangan",
        icon: <Award className="w-5 h-5 text-primary" />,
        features: [
          { title: "Kalkulator BMI", description: "berat(kg) / tinggi(m)² dengan kategori berkode warna dan rentang berat ideal" },
          { title: "Kalkulator Diskon", description: "Diskon tunggal dan bertumpuk (20%+10%), toggle PPN 11% opsional" },
          { title: "Split Bill", description: "Bagi tagihan dengan tip calculator (0-20%)" },
          { title: "Konversi Mata Uang", description: "20 mata uang dengan kurs live dari exchangerate-api.com, cache 24 jam" },
          { title: "Kalkulator Pinjaman", description: "Cicilan bulanan dengan DP, suku bunga, tenor; visualisasi pie chart" },
        ]
      },
      {
        category: "Fitur Lanjutan",
        icon: <TrendingUp className="w-5 h-5 text-primary" />,
        features: [
          { title: "Mode Programmer", description: "Konversi HEX/DEC/OCT/BIN dengan operasi bitwise (AND, OR, XOR, SHL, SHR)" },
          { title: "Grafik Fungsi", description: "Plot persamaan y = f(x) dengan parser caching untuk performa" },
          { title: "Operasi Matrix", description: "Mendukung 2x2 dan 3x3 dengan +,-,×, determinan, dan invers" },
          { title: "Ekspor PDF", description: "Generate laporan pinjaman dan riwayat kalkulasi sebagai dokumen PDF" },
          { title: "Bagikan Hasil", description: "Bagikan hasil kalkulasi via native share sheet" },
        ]
      },
      {
        category: "Fitur UI/UX",
        icon: <Zap className="w-5 h-5 text-primary" />,
        features: [
          { title: "6 Tema Preset", description: "Deep Space, Cyberpunk Neon, Rose Gold, Mint Fresh, Sunset Blaze, Arctic Blue" },
          { title: "Material You", description: "Dukungan dynamic color Android 12+" },
          { title: "Mode Kidal", description: "Balik layout tombol kalkulator untuk aksesibilitas" },
          { title: "Haptic Feedback", description: "Light impact di setiap tekan tombol" },
          { title: "Glassmorphism UI", description: "Widget GlassContainer custom dengan efek blur opsional" },
          { title: "Onboarding", description: "Intro 3 halaman dengan PageView dan animated dots" },
        ]
      },
    ];
  }

  return [];
}