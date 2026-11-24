"use client";

import Link from "next/link";
import { ArrowRight, Mail, FileSpreadsheet, FileText, Database, CheckCircle2, FolderCheck, Briefcase, Terminal, Sparkles, Zap } from "lucide-react";
import { Magnetic } from "./Magnetic";
import { useLocale } from "@/i18n/LocaleProvider";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { getLiveAge, AgeDetails } from "@/lib/age";

const competencies = [
  { icon: FileSpreadsheet, label: "Ms. Excel Lanjutan", labelEn: "Advanced Ms. Excel" },
  { icon: Terminal, label: "Python Automation", labelEn: "Python Automation" },
  { icon: Sparkles, label: "AI Workflows", labelEn: "AI Workflows" },
  { icon: Database, label: "Pemrosesan Data", labelEn: "Data Processing" },
  { icon: FolderCheck, label: "Arsip Digital", labelEn: "Digital Archiving" },
  { icon: FileText, label: "Tata Kelola Dokumen", labelEn: "Document Governance" },
];

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayText(text.slice(0, i));
        i++;
        if (i > text.length) clearInterval(interval);
      }, 50);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [text, delay]);

  return <span>{displayText}<span className="animate-pulse">_</span></span>;
};

export function Banner() {
  const { t, locale } = useLocale();
  const [mounted, setMounted] = useState(false);
  const [age, setAge] = useState<AgeDetails>(() => getLiveAge());

  useEffect(() => {
    setMounted(true);
    setAge(getLiveAge());
    const interval = setInterval(() => {
      setAge(getLiveAge());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section relative w-full overflow-hidden flex items-center justify-center pt-32 pb-16 lg:pt-40 lg:pb-24 min-h-[95vh]">
      {/* Background Huge Text Overlay */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.04, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-black leading-none whitespace-nowrap z-0 pointer-events-none tracking-tighter"
      >
        ADMINISTRATION
      </motion.div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6 backdrop-blur-sm">
              <Briefcase className="w-4 h-4" />
              <span>{locale === 'en' ? 'AI & Automation-Powered Administration' : 'Administrasi Perkantoran, Python & Otomasi AI'}</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] mb-6">
              {t("hero.title")}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                {t("hero.titleAccent")}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mb-8 leading-relaxed">
              {t("hero.description")}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <Magnetic>
                <Link href="/projects" className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full overflow-hidden transition-all active:scale-95 shadow-[inset_0_-4px_0_rgba(0,0,0,0.2)] hover:shadow-[inset_0_-4px_0_rgba(0,0,0,0.4)] hover:bg-orange-600">
                  <span className="relative flex items-center gap-2">
                    {t("hero.viewProject")}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Magnetic>
              
              <Magnetic>
                <Link href="/contact" className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary/80 hover:bg-secondary border border-border text-foreground font-bold rounded-full transition-colors active:scale-95 backdrop-blur-md">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>{t("hero.contactMe")}</span>
                </Link>
              </Magnetic>
            </div>

            <div className="flex flex-wrap gap-3 items-center w-full">
              <span className="text-sm font-semibold text-foreground/50 uppercase tracking-widest mr-1 w-full sm:w-auto mb-1 sm:mb-0">
                {locale === 'en' ? 'Core Competencies:' : 'Keahlian Utama:'}
              </span>
              {competencies.map((comp, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (idx * 0.1) }}
                  key={comp.label} 
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-card border border-border/50 text-xs font-medium"
                >
                  <comp.icon className="w-3.5 h-3.5 text-primary" />
                  {locale === 'en' ? comp.labelEn : comp.label}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Administrative Overview & Profile */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative flex flex-col items-center lg:items-end mt-16 lg:mt-0"
          >
            {/* Profile Image */}
            <div className="relative z-20 w-48 h-48 md:w-60 md:h-60 rounded-full p-2 bg-gradient-to-tr from-primary to-orange-400 mb-[-3rem] mr-auto lg:mr-10 shadow-2xl shadow-primary/20 hover:scale-105 transition-transform duration-500">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-background bg-card">
                <img
                  src="/profile.jpg"
                  alt="Muhammad Imam Abdurrahman"
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </div>
              
              {/* Floating badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-1/2 px-4 py-2 rounded-2xl bg-card border border-border flex items-center gap-2 shadow-xl"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-bold">{locale === 'en' ? 'Open for Work' : 'Siap Bekerja'}</span>
              </motion.div>
            </div>

            {/* Administrative Card Window */}
            <div className="w-full rounded-2xl overflow-hidden border border-border bg-[#0d1117] shadow-2xl relative z-10 md:-ml-8">
              <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-border/40">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="flex-1 text-center text-xs font-mono text-foreground/60 flex items-center justify-center gap-2">
                  <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" /> {locale === 'en' ? 'executive_summary.xlsx' : 'ringkasan_eksekutif.xlsx'}
                </div>
              </div>

              <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed space-y-3.5">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-foreground/50">STATUS:</span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    {locale === 'en' ? 'Available for Full-time / Contract' : 'Tersedia Penuh Waktu / Kontrak'}
                  </span>
                </div>

                <div className="space-y-2 text-foreground/80">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-primary font-semibold">
                      {locale === 'en' ? 'Candidate:' : 'Kandidat:'}
                    </span>
                    <span className="text-foreground font-bold">Muhammad Imam Abdurrahman</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-primary font-semibold flex items-center gap-1.5">
                      <span>{locale === 'en' ? 'Age & DOB:' : 'Usia & Lahir:'}</span>
                      <span 
                        className="text-[9px] px-1 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono font-bold"
                        title={locale === 'en' ? 'Calculated automatically every single day' : 'Terhitung otomatis setiap hari'}
                      >
                        fx
                      </span>
                    </span>
                    <div className="text-foreground/90 flex items-center gap-1.5 flex-wrap sm:justify-end">
                      <span className="font-bold text-emerald-400">
                        {mounted ? (locale === 'en' ? age.formattedEn : age.formattedId) : `${age.years} Tahun`}
                      </span>
                      <span 
                        className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-foreground/50 font-mono"
                        title={locale === 'en' ? 'Total days lived' : 'Total hari hidup'}
                      >
                        {mounted ? `${age.totalDaysFormatted} ${locale === 'en' ? 'days' : 'hari'}` : '28 Des 2002'}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-primary font-semibold">
                      {locale === 'en' ? 'Target Roles:' : 'Minat Posisi:'}
                    </span>
                    <span className="text-foreground/90">
                      {locale === 'en' ? 'Office Administrator / Operations & Data Automation' : 'Staf Administrasi / Otomasi Data & Operasional'}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-primary font-semibold">
                      {locale === 'en' ? 'Core Software:' : 'Software Utama:'}
                    </span>
                    <span className="text-foreground/90">Excel (Pivot, DAX), Python, AI Tools, Workspace</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-primary font-semibold">
                      {locale === 'en' ? 'Superpower:' : 'Nilai Tambah:'}
                    </span>
                    <span className="text-foreground/90">
                      {locale === 'en' ? 'Office Script Automation, AI Workflows, Zero-Variance' : 'Otomasi Skrip Kantor, AI Workflows, Zero-Variance'}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-primary font-semibold">
                      {locale === 'en' ? 'Work Ethic:' : 'Etos Kerja:'}
                    </span>
                    <span className="text-foreground/90">
                      {locale === 'en' ? 'Meticulous, Systematic, Fast Learner, Highly Efficient' : 'Teliti, Terorganisir, Cepat Belajar, Efisiensi Tinggi'}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-emerald-400 font-semibold text-xs">
                  <span className="text-primary font-bold">&gt;</span>
                  <TypewriterText 
                    text={locale === 'en' 
                      ? "Ready to automate workflows and optimize your office operations." 
                      : "Siap mengotomasi alur kerja dan mengoptimalkan efisiensi kantor Anda."
                    } 
                    delay={800} 
                  />
                </div>
              </div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-primary/10 blur-[100px] -z-10 rounded-full"></div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
