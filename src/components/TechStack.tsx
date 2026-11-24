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
  ClipboardCheck 
} from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  { name: "Microsoft Excel", icon: <FileSpreadsheet className="w-5 h-5" /> },
  { name: "Microsoft Word", icon: <FileText className="w-5 h-5" /> },
  { name: "Google Workspace", icon: <Globe className="w-5 h-5" /> },
  { name: "Data Entry & Validasi", icon: <Database className="w-5 h-5" /> },
  { name: "Microsoft PowerPoint", icon: <Presentation className="w-5 h-5" /> },
  { name: "Manajemen Arsip & Filing", icon: <FolderArchive className="w-5 h-5" /> },
  { name: "Pembukuan Kas & Petty Cash", icon: <Calculator className="w-5 h-5" /> },
  { name: "Korespondensi & Surat Resmi", icon: <Mail className="w-5 h-5" /> },
  { name: "Manajemen Jadwal", icon: <Calendar className="w-5 h-5" /> },
  { name: "Administrasi Operasional", icon: <ClipboardCheck className="w-5 h-5" /> },
];

export function TechStack() {
  const { t } = useLocale();

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
                {skill.name}
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
