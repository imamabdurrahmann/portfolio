"use client";

import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";
import { getFeaturedProjects } from "@/lib/projects";
import { motion } from "framer-motion";
import { Magnetic } from "./Magnetic";

function ProjectMockup({ id, locale }: { id: string; locale: string }) {
  if (id === "4") {
    return (
      <div className="w-full h-full p-6 md:p-8 bg-[#0b1120] flex flex-col justify-between font-mono text-xs select-none">
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <span className="text-slate-400 text-xs ml-2">pos_cashier_balance.log</span>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 text-[11px] font-bold border border-amber-500/20">
            {locale === 'en' ? 'Cash Variance: 0%' : 'Selisih Kas: 0%'}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 my-4">
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-slate-400 text-[11px] block">
              {locale === 'en' ? 'Daily Balancing' : 'Pembukuan Kas Harian'}
            </span>
            <span className="text-emerald-400 text-xl font-bold font-sans">100% Match</span>
            <span className="text-slate-500 text-[10px] block mt-0.5">
              {locale === 'en' ? 'System vs Cash Balance' : 'Kesesuaian Sistem vs Kas Fisik'}
            </span>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-slate-400 text-[11px] block">
              {locale === 'en' ? 'Barcode Scan Velocity' : 'Kecepatan Barcode'}
            </span>
            <span className="text-primary text-xl font-bold font-sans">&lt; 1.5s</span>
            <span className="text-slate-500 text-[10px] block mt-0.5">
              {locale === 'en' ? 'Real-Time Inventory Sync' : 'Sinkronisasi Stok Real-Time'}
            </span>
          </div>
        </div>

        <div className="space-y-2 text-[11px] text-slate-300">
          <div className="flex justify-between p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/80">
            <span>{locale === 'en' ? 'Transaction Audit' : 'Audit Transaksi Kasir'}</span>
            <span className="text-emerald-400 font-bold">100% Reconciled</span>
          </div>
          <div className="flex justify-between p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/80">
            <span>{locale === 'en' ? 'Stock Movement Alert' : 'Peringatan Stok Minimum'}</span>
            <span className="text-primary font-bold">Automated Notification</span>
          </div>
        </div>
      </div>
    );
  }

  if (id === "2") {
    return (
      <div className="w-full h-full p-6 md:p-8 bg-[#0b1120] flex flex-col justify-between font-mono text-xs select-none">
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <span className="text-slate-400 text-xs ml-2">manpower_roster_24h.xlsx</span>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[11px] font-bold border border-emerald-500/20">
            {locale === 'en' ? 'Shift Fulfillment: 98.4%' : 'Pemenuhan Shift: 98.4%'}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 my-4">
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-slate-400 text-[11px] block">
              {locale === 'en' ? 'Shift Fulfillment' : 'Tingkat Pemenuhan Shift'}
            </span>
            <span className="text-emerald-400 text-xl font-bold font-sans">98.4%</span>
            <span className="text-slate-500 text-[10px] block mt-0.5">
              {locale === 'en' ? '3-Shift 24h Rotation' : 'Rotasi 3-Shift 24 Jam'}
            </span>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-slate-400 text-[11px] block">
              {locale === 'en' ? 'Overtime Reconciliation' : 'Rekonsiliasi Jam Lembur'}
            </span>
            <span className="text-primary text-xl font-bold font-sans">100%</span>
            <span className="text-slate-500 text-[10px] block mt-0.5">
              {locale === 'en' ? 'Zero Unbudgeted Discrepancy' : 'Nol Selisih Biaya Lembur'}
            </span>
          </div>
        </div>

        <div className="space-y-2 text-[11px] text-slate-300">
          <div className="flex justify-between p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/80">
            <span>{locale === 'en' ? 'Timesheet Formula Engine' : 'Formula Otomasi Timesheet'}</span>
            <span className="text-emerald-400 font-bold">VLOOKUP • INDEX/MATCH</span>
          </div>
          <div className="flex justify-between p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/80">
            <span>{locale === 'en' ? 'Monthly Management Recap' : 'Rekapitulasi Manajemen'}</span>
            <span className="text-primary font-bold">
              {locale === 'en' ? 'Automated Pivot Tables' : 'Pivot Tables Otomatis'}
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Project 3: CAT BKN Exam System
  return (
    <div className="w-full h-full p-6 md:p-8 bg-[#0b1120] flex flex-col justify-between font-mono text-xs select-none">
      <div className="flex items-center justify-between pb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          <span className="text-slate-400 text-xs ml-2">cat_bkn_scoring_engine.dat</span>
        </div>
        <span className="px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[11px] font-bold border border-blue-500/20">
          {locale === 'en' ? 'BKN Benchmark Evaluated' : 'Benchmark BKN Teruji'}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 my-4">
        <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
          <span className="text-slate-400 text-[11px] block">
            {locale === 'en' ? 'Passing Grade Benchmark' : 'Ambang Batas Nilai (Passing Grade)'}
          </span>
          <span className="text-blue-400 text-xl font-bold font-sans">TWK • TIU • TKP</span>
          <span className="text-slate-500 text-[10px] block mt-0.5">
            {locale === 'en' ? 'Official Threshold Scored' : 'Penilaian Sesuai Ambang Resmi'}
          </span>
        </div>
        <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
          <span className="text-slate-400 text-[11px] block">
            {locale === 'en' ? 'Candidate Flow Stability' : 'Stabilitas Alur Peserta'}
          </span>
          <span className="text-emerald-400 text-xl font-bold font-sans">
            {locale === 'en' ? 'Zero Latency' : 'Nol Latensi'}
          </span>
          <span className="text-slate-500 text-[10px] block mt-0.5">
            {locale === 'en' ? 'Peak Load Synchronized' : 'Sinkronisasi Beban Puncak'}
          </span>
        </div>
      </div>

      <div className="space-y-2 text-[11px] text-slate-300">
        <div className="flex justify-between p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/80">
          <span>{locale === 'en' ? 'Question Bank Validation' : 'Validasi Bank Soal'}</span>
          <span className="text-emerald-400 font-bold">
            {locale === 'en' ? 'Hundreds Curated' : 'Ratusan Soal Terkurasi'}
          </span>
        </div>
        <div className="flex justify-between p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/80">
          <span>{locale === 'en' ? 'Performance Analytics' : 'Analisis Skor Diagnostik'}</span>
          <span className="text-primary font-bold">
            {locale === 'en' ? 'Diagnostic Score Chart' : 'Grafik Skor Diagnostik'}
          </span>
        </div>
      </div>
    </div>
  );
}

export function FeaturedProjects() {
  const { t, locale } = useLocale();
  const featuredProjects = getFeaturedProjects();

  return (
    <section id="lab" className="py-32 px-6 relative overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-[500px] bg-primary/5 blur-[120px] -z-10 rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                {locale === 'en' ? 'Selected Portfolio' : 'Portofolio Pilihan'}
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground tracking-tighter break-words max-w-full">
              {t("featured.title")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400 inline-block">
                {t("featured.titleAccent")}
              </span>
            </h2>
          </div>
          <Magnetic>
            <Link href="/projects" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-secondary/50 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 backdrop-blur-sm">
              <span className="font-semibold text-sm">{locale === 'en' ? 'View All Portfolios' : 'Lihat Semua Portofolio'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Magnetic>
        </div>

        <div className="grid gap-10 md:gap-20">
          {featuredProjects.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                key={project.id} 
                className="group relative"
              >
                <div className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}>
                  
                  {/* Visual Mockup Container */}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="w-full md:w-3/5 block relative overflow-hidden rounded-[2rem] aspect-[4/3] md:aspect-video bg-card border border-border shadow-2xl hover:border-primary/50 transition-colors"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="w-full h-full relative"
                    >
                      <ProjectMockup id={project.id} locale={locale} />
                    </motion.div>

                    {/* Badge */}
                    <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-bold flex items-center gap-2">
                      <Star className="w-3 h-3 text-primary" />
                      {t("projectCard.featured")}
                    </div>
                  </Link>

                  {/* Content Container */}
                  <div className="w-full md:w-2/5 flex flex-col items-start">
                    <div className="text-9xl font-black text-foreground/5 absolute -top-10 -left-10 md:-left-20 pointer-events-none select-none z-0">
                      0{index + 1}
                    </div>
                    
                    <div className="relative z-10 w-full">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {(locale === 'en' && project.techEn ? project.techEn : project.tech).slice(0, 4).map((tech) => (
                          <span key={tech} className="px-3 py-1 text-xs font-mono font-medium rounded-full border border-primary/20 bg-primary/5 text-primary">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <Link href={`/projects/${project.slug}`} className="block group/title">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 group-hover/title:text-primary transition-colors leading-tight">
                          {t(`projectData.${project.id}.title`, undefined, project.title)}
                        </h3>
                      </Link>

                      <p className="text-base md:text-lg text-foreground/60 leading-relaxed mb-8">
                        {t(`projectData.${project.id}.description`, undefined, project.description)}
                      </p>

                      <Magnetic>
                        <Link
                          href={`/projects/${project.slug}`}
                          className="inline-flex items-center gap-3 text-foreground font-bold text-sm lg:text-base group/btn"
                        >
                          <span className="relative overflow-hidden flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground group-hover/btn:scale-110 transition-transform">
                            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                          </span>
                          <span className="group-hover/btn:text-primary transition-colors">
                            {locale === 'en' ? 'Explore Case Study' : 'Lihat Detail Proyek'}
                          </span>
                        </Link>
                      </Magnetic>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
