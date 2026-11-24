"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Play, Star, Check, Zap, Shield, Clock, TrendingUp, Target, Award, Database, Users, Bell, FileText, Image as ImageIcon, Briefcase, FileSpreadsheet, PackageCheck, BarChart3 } from "lucide-react";
import { getProjectBySlug } from "@/lib/projects";
import { useLocale } from "@/i18n/LocaleProvider";
import { useState } from "react";

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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const title = t(`projectData.${project.id}.title`, undefined, project.title) as string;
  const description = t(`projectData.${project.id}.description`, undefined, project.description) as string;

  const allFeatures = getAllFeaturesByProject(project.slug, locale);

  const images = project.images || [];

  return (
    <div className="min-h-screen pt-20 pb-12">
      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/20 rounded-full"
            onClick={() => setSelectedImage(null)}
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <img
            src={selectedImage}
            alt="Screenshot"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}

      {/* Back Button */}
      <div className="px-6 py-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors font-medium text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          {locale === 'en' ? 'Back to Portfolios' : 'Kembali ke Portofolio'}
        </Link>
      </div>

      {/* Hero Section */}
      <div className="px-6 mb-8">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-secondary border border-border flex items-center justify-center shrink-0 overflow-hidden shadow-lg">
              {project.image && (
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              )}
              {!project.image && (
                <span className="text-4xl md:text-5xl font-bold text-primary">{project.title.charAt(0)}</span>
              )}
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                {project.featured && (
                  <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    {t("projectCard.featured")}
                  </span>
                )}
                <span className="px-3 py-1 rounded-full bg-secondary text-foreground/70 text-xs font-medium uppercase tracking-wider border border-border">
                  {project.category}
                </span>
              </div>
              <h1 className="text-2xl md:text-4xl font-bold text-foreground">
                {title}
              </h1>
              <p className="mt-3 text-foreground/70 leading-relaxed text-sm md:text-base">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Screenshot Gallery */}
      {images.length > 0 && (
        <div className="px-6 mb-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-primary" />
              {locale === 'en' ? `Documentation Gallery (${images.length})` : `Dokumentasi Sistem (${images.length})`}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {images.map((img) => (
                <div
                  key={img}
                  className="relative aspect-video rounded-xl overflow-hidden cursor-pointer border border-border hover:border-primary transition-colors group shadow-md"
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img}
                    alt="Screenshot"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tech & Competency Stack */}
      <div className="px-6 mb-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-primary" />
            {locale === 'en' ? 'Core Competencies & Tools' : 'Kompetensi & Tools'}
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span key={tech} className="px-3 py-1.5 text-xs font-medium rounded-lg bg-secondary text-foreground/80 border border-border">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Features by Category */}
      {allFeatures.map((category) => (
        <div key={category.category} className="px-6 mb-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              {category.icon}
              {category.category}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {category.features.map((feature) => (
                <div
                  key={feature.title}
                  className="p-4 rounded-xl bg-card border border-border flex items-start gap-3 shadow-sm"
                >
                  <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-foreground/70 mt-1 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* External Links */}
      {(project.playStore || project.appStore || project.github) && (
        <div className="px-6 mb-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              {locale === 'en' ? 'Links & Resources' : 'Tautan Terkait'}
            </h2>
            <div className="flex flex-wrap gap-4">
              {project.playStore && (
                <a
                  href={project.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold"
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
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold"
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
                  className="px-6 py-3 rounded-full bg-secondary border border-border text-foreground font-semibold inline-flex items-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  {t("projectCard.github")}
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="px-6 mt-12">
        <div className="container mx-auto max-w-4xl p-8 rounded-2xl bg-secondary/50 border border-border text-center">
          <h2 className="text-xl font-bold text-foreground mb-2">
            {locale === 'en' ? 'Interested in this operational profile?' : 'Tertarik dengan rekam jejak ini?'}
          </h2>
          <p className="text-sm text-foreground/60 mb-6 max-w-md mx-auto">
            {locale === 'en'
              ? 'Feel free to get in touch to discuss full-time or contract administration and operations opportunities.'
              : 'Silakan hubungi saya untuk mendiskusikan peluang kerja penuh waktu atau kontrak posisi administrasi & operasional.'
            }
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold rounded-full hover:scale-105 transition-transform text-sm shadow-lg shadow-primary/20">
            {t("nav.hireMe")}
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
}

interface FeatureCategory {
  category: string;
  icon: React.ReactNode;
  features: Array<{ title: string; description: string }>;
}

function getAllFeaturesByProject(slug: string, locale: string): FeatureCategory[] {
  if (slug === "manajemen-operasional-gudang-omiko") {
    return locale === 'en' ? [
      {
        category: "Inventory & Warehouse Control",
        icon: <PackageCheck className="w-5 h-5 text-primary" />,
        features: [
          { title: "Routine Stock Audits", description: "Periodic physical stock counts with 0% data variance between ledger and inventory" },
          { title: "Inbound Flow Supervision", description: "Structured receiving logs from suppliers with quality control verification" },
          { title: "Outbound Distribution", description: "Timely allocation of daily operational supplies across hotel departments" },
          { title: "5S Standard Implementation", description: "Established systematic workplace organization (Sort, Set in order, Shine, Standardize, Sustain)" },
        ]
      },
      {
        category: "SOP & Vendor Management",
        icon: <Shield className="w-5 h-5 text-primary" />,
        features: [
          { title: "SOP Formulation", description: "Authored Standard Operating Procedures for frontline logistics and stock issuance" },
          { title: "Vendor Coordination", description: "Liaised with 40+ local and regional suppliers for timely procurement and pricing" },
          { title: "Asset & Card Stock Tracking", description: "Maintained accurate physical stock cards and digital spreadsheets" },
          { title: "Workplace Safety Compliance", description: "Ensured adherence to occupational safety standards in storage facilities" },
        ]
      }
    ] : [
      {
        category: "Kontrol Inventaris & Pergudangan",
        icon: <PackageCheck className="w-5 h-5 text-primary" />,
        features: [
          { title: "Stok Opname Rutin", description: "Audit fisik berkala dengan hasil 0% selisih data antara pencatatan dan fisik barang" },
          { title: "Supervisi Alur Inbound", description: "Pencatatan penerimaan barang dari vendor dengan pengecekan standar mutu (QC)" },
          { title: "Distribusi Outbound", description: "Alokasi tepat waktu kebutuhan harian ke seluruh departemen operasional hotel" },
          { title: "Penerapan Standar 5S", description: "Menjaga kerapian dan sistem tata kelola gudang dengan metode Seiri, Seiton, Seiso, Seiketsu, Shitsuke" },
        ]
      },
      {
        category: "Standarisasi SOP & Vendor",
        icon: <Shield className="w-5 h-5 text-primary" />,
        features: [
          { title: "Penyusunan SOP Pergudangan", description: "Menyusun Standard Operating Procedure untuk alur barang dan keselamatan kerja" },
          { title: "Koordinasi Multi-Vendor", description: "Menangani kerja sama dengan 40+ supplier lokal dan regional untuk kontinuitas pasokan" },
          { title: "Pelacakan Kartu Stok & Aset", description: "Pengelolaan kartu stok fisik dan rekonsiliasi spreadsheet berkala" },
          { title: "Kepatuhan K3 & Keamanan", description: "Memastikan lingkungan penyimpanan aman dari risiko kerusakan dan kecelakaan kerja" },
        ]
      }
    ];
  }

  if (slug === "penjadwalan-roster-absensi-excel") {
    return locale === 'en' ? [
      {
        category: "Manpower Scheduling & Rostering",
        icon: <Users className="w-5 h-5 text-primary" />,
        features: [
          { title: "24/7 Shift Rotation Roster", description: "Designed 3-shift 24-hour staff schedules achieving 98%+ shift fulfillment" },
          { title: "Leave & Shift Swap Management", description: "Structured workflows for leave requests and emergency manpower replacements" },
          { title: "Overtime Variance Control", description: "Controlled unbudgeted overtime hours through balanced personnel distribution" },
          { title: "Daily Staff Briefings", description: "Conducted daily alignment briefings to enforce operational discipline" },
        ]
      },
      {
        category: "Advanced Excel Reconciliation",
        icon: <FileSpreadsheet className="w-5 h-5 text-primary" />,
        features: [
          { title: "Advanced Formulas", description: "Leveraged VLOOKUP, INDEX/MATCH, and dynamic formulas for automated data processing" },
          { title: "Pivot Tables & Timesheets", description: "Built monthly attendance summary reports for executive leadership" },
          { title: "Discrepancy Elimination", description: "Reconciled biometric logs with manual timesheets with zero pending disputes" },
          { title: "Operational Expense Tracking", description: "Monitored department staffing costs against monthly budget allocations" },
        ]
      }
    ] : [
      {
        category: "Manajemen Manpower & Penjadwalan",
        icon: <Users className="w-5 h-5 text-primary" />,
        features: [
          { title: "Roster Shift 24 Jam", description: "Merancang rotasi jadwal 3 shift dengan tingkat pemenuhan staf (fulfillment) 98%+" },
          { title: "Pengelolaan Cuti & Tukar Shift", description: "Alur terstruktur permohonan cuti dan penggantian shift darurat tanpa kekosongan tugas" },
          { title: "Kontrol Jam Lembur", description: "Meminimalkan biaya lembur tidak terduga melalui alokasi tenaga kerja yang merata" },
          { title: "Briefing & Kedisiplinan Staf", description: "Memimpin pengarahan harian untuk memastikan kepatuhan terhadap standar pelayanan" },
        ]
      },
      {
        category: "Rekonsiliasi Excel Lanjutan",
        icon: <FileSpreadsheet className="w-5 h-5 text-primary" />,
        features: [
          { title: "Formula Excel Kompleks", description: "Memanfaatkan VLOOKUP, INDEX/MATCH, dan formula dinamis untuk otomasi data presensi" },
          { title: "Pivot Tables & Timesheet Bulanan", description: "Menyusun rekapitulasi data kehadiran dan biaya operasional untuk manajemen" },
          { title: "Eliminasi Selisih Presensi", description: "Mencocokkan absensi biometrik dengan catatan timesheet tanpa sengketa data" },
          { title: "Monitoring Budget Operasional", description: "Memantau realisasi biaya tenaga kerja terhadap alokasi anggaran bulanan" },
        ]
      }
    ];
  }

  if (slug === "administrasi-database-cat-bkn") {
    return locale === 'en' ? [
      {
        category: "Participant & Exam Administration",
        icon: <Database className="w-5 h-5 text-primary" />,
        features: [
          { title: "National Exam Standard Logic", description: "Simulated national civil service CAT standards with synchronized timer and answer locks" },
          { title: "Multi-Tiered Question Bank", description: "Structured database covering hundreds of TWK, TIU, and TKP validated questions" },
          { title: "Candidate Flow Oversight", description: "Monitored smooth test execution with zero queue latency during peak load" },
          { title: "Review & Flagging System", description: "Allowed participants to flag uncertain answers for review before submission" },
        ]
      },
      {
        category: "Scoring Analytics & Diagnostics",
        icon: <BarChart3 className="w-5 h-5 text-primary" />,
        features: [
          { title: "Official Benchmark Evaluation", description: "Automated pass/fail scoring based on official BKN standards (TWK: 65, TIU: 80, TKP: 166)" },
          { title: "Accuracy Rate by Category", description: "Per-category accuracy analytics highlighting areas needing improvement" },
          { title: "Historical Progress Tracking", description: "Maintained complete attempt records to evaluate participant learning progression" },
          { title: "Diagnostic Summary Export", description: "Generated structured scoring reports for individual performance review" },
        ]
      }
    ] : [
      {
        category: "Administrasi Database & Alur Ujian",
        icon: <Database className="w-5 h-5 text-primary" />,
        features: [
          { title: "Standar Logika CAT Nasional", description: "Simulasi alur ujian resmi BKN dengan timer otomatis dan penguncian jawaban presisi" },
          { title: "Manajemen Bank Data Soal", description: "Pengelolaan database terstruktur berisi ratusan bank soal terverifikasi (TWK, TIU, TKP)" },
          { title: "Pengawasan Trafik Peserta", description: "Memastikan kestabilan alur pengisian jawaban tanpa antrean macet pada volume tinggi" },
          { title: "Sistem Flag & Tinjau Ulang", description: "Fitur penandaan nomor soal ragu-ragu untuk evaluasi sebelum submit final" },
        ]
      },
      {
        category: "Analisis Statistik & Skor",
        icon: <BarChart3 className="w-5 h-5 text-primary" />,
        features: [
          { title: "Benchmark Passing Grade Resmi", description: "Kalkulasi otomatis kelulusan berdasarkan ambang batas BKN (TWK: 65, TIU: 80, TKP: 166)" },
          { title: "Tingkat Akurasi per Kategori", description: "Analisis akurasi jawaban per materi untuk mendeteksi materi yang perlu ditingkatkan" },
          { title: "Rekam Riwayat Evaluasi", description: "Menyimpan seluruh data riwayat ujian peserta untuk memantau grafik progres nilai" },
          { title: "Laporan Diagnostik Nilai", description: "Penyusunan rekapitulasi skor komprehensif untuk evaluasi hasil belajar" },
        ]
      }
    ];
  }

  if (slug === "sistem-pos-kontrol-inventaris") {
    return locale === 'en' ? [
      {
        category: "POS Cashier Operations",
        icon: <TrendingUp className="w-5 h-5 text-primary" />,
        features: [
          { title: "Barcode Scanner Integration", description: "Fast item lookup under 2 seconds per scan with automated cart totaling" },
          { title: "Automated Daily Cash Balancing", description: "Reconciled physical cash register with digital transactions with zero difference" },
          { title: "Tax & Discount Computation", description: "Accurate automatic price deductions and tax calculations per transaction" },
          { title: "Digital Receipt Archiving", description: "Generated and archived digital receipts for audit and customer verification" },
        ]
      },
      {
        category: "Real-Time Stock Tracking",
        icon: <PackageCheck className="w-5 h-5 text-primary" />,
        features: [
          { title: "Instant Stock Deduction", description: "Synchronized inventory counts in real time upon completed sale transactions" },
          { title: "Low-Stock Reorder Alerts", description: "Automated notifications when inventory falls below minimum buffer thresholds" },
          { title: "Discrepancy Prevention", description: "Prevented inventory shrinkage through real-time ledger verification" },
          { title: "Periodic Sales Summaries", description: "Exported daily, weekly, and monthly revenue summaries for executive review" },
        ]
      }
    ] : [
      {
        category: "Operasional Kasir & Transaksi",
        icon: <TrendingUp className="w-5 h-5 text-primary" />,
        features: [
          { title: "Integrasi Barcode Scanner", description: "Pencatatan item cepat di bawah 2 detik per scan dengan kalkulasi total otomatis" },
          { title: "Rekonsiliasi Kas Harian", description: "Pencocokan fisik uang kasir dengan laporan sistem dengan selisih Rp 0" },
          { title: "Kalkulasi Diskon & Pajak", description: "Perhitungan matematis otomatis untuk promo diskon dan pajak transaksi" },
          { title: "Pengarsipan Struk Digital", description: "Penyimpanan arsip transaksi digital untuk kebutuhan audit dan pembukuan" },
        ]
      },
      {
        category: "Pelacakan Stok Real-Time",
        icon: <PackageCheck className="w-5 h-5 text-primary" />,
        features: [
          { title: "Pengurangan Stok Otomatis", description: "Sinkronisasi saldo stok barang langsung berkurang seketika transaksi tuntas" },
          { title: "Peringatan Minimum Stok", description: "Notifikasi otomatis saat stok mencapai batas minimum untuk pengadaan ulang" },
          { title: "Pencegahan Selisih Barang", description: "Mengeliminasi risiko kehilangan stok melalui verifikasi alur mutasi barang" },
          { title: "Rekap Penjualan Berkala", description: "Penyusunan rekapitulasi penjualan harian, mingguan, dan bulanan untuk laporan keuangan" },
        ]
      }
    ];
  }

  return [];
}
