"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { 
  FileSpreadsheet, 
  FileText, 
  Database, 
  Globe, 
  Presentation, 
  FolderArchive, 
  Calculator, 
  Mail, 
  Calendar, 
  ClipboardCheck,
  Terminal,
  Sparkles,
  Zap,
  BarChart3
} from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  { 
    name: "Microsoft Excel Lanjutan (VLOOKUP, Pivot, DAX)", 
    nameEn: "Advanced Microsoft Excel (VLOOKUP, Pivot, DAX)", 
    icon: <FileSpreadsheet className="w-5 h-5 text-emerald-400" /> 
  },
  { 
    name: "Python for Office Automation", 
    nameEn: "Python for Office Automation", 
    icon: <Terminal className="w-5 h-5 text-emerald-400" /> 
  },
  { 
    name: "AI Productivity & Prompt Engineering", 
    nameEn: "AI Productivity & Prompt Engineering", 
    icon: <Sparkles className="w-5 h-5 text-amber-400" /> 
  },
  { 
    name: "Otomasi Data & Skrip Rutinitas", 
    nameEn: "Data Automation & Routine Scripts", 
    icon: <Zap className="w-5 h-5 text-orange-400" /> 
  },
  { 
    name: "Microsoft Power BI & Dashboarding", 
    nameEn: "Microsoft Power BI & Dashboarding", 
    icon: <BarChart3 className="w-5 h-5 text-yellow-400" /> 
  },
  { 
    name: "Pembersihan & Rekonsiliasi Data", 
    nameEn: "Data Cleaning & Reconciliation", 
    icon: <Database className="w-5 h-5 text-blue-400" /> 
  },
  { 
    name: "Microsoft Word & Korespondensi Resmi", 
    nameEn: "Microsoft Word & Corporate Correspondence", 
    icon: <FileText className="w-5 h-5 text-blue-300" /> 
  },
  { 
    name: "Google Workspace (Sheets, Docs, Drive)", 
    nameEn: "Google Workspace (Sheets, Docs, Drive)", 
    icon: <Globe className="w-5 h-5 text-emerald-300" /> 
  },
  { 
    name: "Tata Kelola Arsip & Filing Digital", 
    nameEn: "Digital Archiving & Filing Governance", 
    icon: <FolderArchive className="w-5 h-5 text-purple-400" /> 
  },
  { 
    name: "Pembukuan Kas & Petty Cash", 
    nameEn: "Cashbook & Petty Cash Accounting", 
    icon: <Calculator className="w-5 h-5 text-teal-400" /> 
  },
  { 
    name: "Penjadwalan Roster & Timesheet", 
    nameEn: "Shift Rostering & Timesheet Control", 
    icon: <Calendar className="w-5 h-5 text-rose-400" /> 
  },
  { 
    name: "Standar Operasional (SOP) & K3", 
    nameEn: "Standard Operating Procedures (SOP) & HSE", 
    icon: <ClipboardCheck className="w-5 h-5 text-emerald-400" /> 
  },
];

export function TechStack() {
  const { t, locale } = useLocale();

  return (
    <section className="py-24 overflow-hidden bg-background relative border-y border-border">
      {/* Background gradients */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl mb-12 relative z-20">
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {t("techStack.subtitle") || "SOFTWARE & KETERAMPILAN ADMINISTRASI"}
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black mt-4">
          {t("techStack.title") || "Keahlian & Kemampuan"}
        </h2>
      </div>

      <div className="flex w-full">
        {/* We duplicate the content to make the infinite scroll seamless */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className="flex shrink-0 pr-8"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {skills.map((skill, index) => (
              <div key={`${skill.name}-${index}`} className="shrink-0 mx-4 flex items-center gap-3 px-8 py-4 rounded-full bg-secondary/80 border border-border text-lg font-medium text-foreground hover:border-primary hover:text-primary transition-all hover:shadow-[0_0_20px_rgba(251,146,60,0.2)] cursor-pointer backdrop-blur-sm">
                <span className="text-primary">{skill.icon}</span>
                {locale === 'en' ? skill.nameEn : skill.name}
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
