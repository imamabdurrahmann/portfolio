"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";
import { Code2, Database, Layers, Zap, Shield, Globe, Smartphone, Workflow } from "lucide-react";

const techStack = [
  { name: "Flutter", icon: <Smartphone className="w-4 h-4" /> },
  { name: "Dart", icon: <Code2 className="w-4 h-4" /> },
  { name: "Riverpod", icon: <Layers className="w-4 h-4" /> },
  { name: "BLoC", icon: <Workflow className="w-4 h-4" /> },
  { name: "Firebase", icon: <Shield className="w-4 h-4" /> },
  { name: "SQLite", icon: <Database className="w-4 h-4" /> },
  { name: "Hive", icon: <Database className="w-4 h-4" /> },
  { name: "Clean Arch", icon: <Globe className="w-4 h-4" /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0 }
};

export function TechStack() {
  const { t } = useLocale();

  return (
    <section className="py-16 px-6">
      {/* Subtle warm background */}
      <div className="container mx-auto max-w-4xl">
        {/* Section Header - left aligned, not fancy */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-8 text-left"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              {t("techStack.subtitle")}
            </span>
          </div>
          <h2 className="text-2xl font-bold text-foreground">
            {t("techStack.title")}
          </h2>
        </motion.div>

        {/* Tech pills - simple, no hover fluff */}
        <motion.div
          className="flex flex-wrap gap-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground/80 hover:border-primary/50 hover:text-primary transition-colors"
            >
              <span className="inline-flex items-center gap-2">
                <span className="text-primary">{tech.icon}</span>
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}