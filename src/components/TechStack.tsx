"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { Code2, Database, Layers, Shield, Globe, Smartphone, Workflow } from "lucide-react";
import { motion } from "framer-motion";
import { Magnetic } from "./Magnetic";

const techStack = [
  { name: "Flutter", icon: <Smartphone className="w-5 h-5" /> },
  { name: "Dart", icon: <Code2 className="w-5 h-5" /> },
  { name: "Riverpod", icon: <Layers className="w-5 h-5" /> },
  { name: "BLoC", icon: <Workflow className="w-5 h-5" /> },
  { name: "Firebase", icon: <Shield className="w-5 h-5" /> },
  { name: "SQLite", icon: <Database className="w-5 h-5" /> },
  { name: "Hive", icon: <Database className="w-5 h-5" /> },
  { name: "Clean Arch", icon: <Globe className="w-5 h-5" /> },
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
            {t("techStack.subtitle") || "ALAT YANG SAYA PAKAI"}
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black mt-4">
          {t("techStack.title") || "Tech Stack"}
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
            {techStack.map((tech, index) => (
              <div key={`${tech.name}-${index}`} className="mx-4 flex items-center gap-3 px-8 py-4 rounded-full bg-secondary/80 border border-border text-lg font-medium text-foreground hover:border-primary hover:text-primary transition-all hover:shadow-[0_0_20px_rgba(251,146,60,0.2)] cursor-pointer backdrop-blur-sm">
                <span className="text-primary">{tech.icon}</span>
                {tech.name}
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}