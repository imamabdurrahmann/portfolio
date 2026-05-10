"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";
import { Code2, Database, Layers, Zap, Shield, Globe } from "lucide-react";

const techStack = [
  { name: "Flutter", icon: <Code2 className="w-4 h-4" /> },
  { name: "Dart", icon: <Zap className="w-4 h-4" /> },
  { name: "Riverpod", icon: <Layers className="w-4 h-4" /> },
  { name: "BLoC", icon: <Layers className="w-4 h-4" /> },
  { name: "Firebase", icon: <Shield className="w-4 h-4" /> },
  { name: "SQLite", icon: <Database className="w-4 h-4" /> },
  { name: "Hive", icon: <Database className="w-4 h-4" /> },
  { name: "Clean Arch", icon: <Globe className="w-4 h-4" /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const }
  }
};

export function TechStack() {
  const { t } = useLocale();

  return (
    <section className="py-20 px-6 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-xs font-medium uppercase tracking-widest">
            {t("techStack.subtitle")}
          </span>
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mt-2">
            {t("techStack.title")}
          </h2>
          <p className="text-foreground/60 text-sm mt-3 max-w-md mx-auto">
            Teknologi yang saya gunakan untuk membangun aplikasi mobile yang berkualitas
          </p>
        </motion.div>

        {/* Premium Tech Pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              className="group px-5 py-3 rounded-full glass-card text-sm font-semibold text-foreground flex items-center gap-2 cursor-default"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span className="text-primary group-hover:text-white transition-colors">
                {tech.icon}
              </span>
              <span className="group-hover:text-white transition-colors">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}