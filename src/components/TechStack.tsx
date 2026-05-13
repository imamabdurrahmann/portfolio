"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";
import { Code2, Database, Layers, Zap, Shield, Globe, Smartphone, Workflow } from "lucide-react";

const techStack = [
  { name: "Flutter", icon: <Smartphone className="w-4 h-4" />, story: "Write once, run everywhere" },
  { name: "Dart", icon: <Code2 className="w-4 h-4" />, story: "The language behind it all" },
  { name: "Riverpod", icon: <Layers className="w-4 h-4" />, story: "State management done right" },
  { name: "BLoC", icon: <Workflow className="w-4 h-4" />, story: "Predictable state flows" },
  { name: "Firebase", icon: <Shield className="w-4 h-4" />, story: "Backend made simple" },
  { name: "SQLite", icon: <Database className="w-4 h-4" />, story: "Offline-first data" },
  { name: "Hive", icon: <Database className="w-4 h-4" />, story: "Fast local storage" },
  { name: "Clean Arch", icon: <Globe className="w-4 h-4" />, story: "Scale with confidence" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
  }
};

export function TechStack() {
  const { t } = useLocale();

  return (
    <section className="py-20 px-6 relative">
      {/* Warm ambient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Section Header - left aligned */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-left"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              {t("techStack.subtitle")}
            </span>
          </div>
          <div className="flex items-baseline gap-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              {t("techStack.title")}
            </h2>
          </div>
          <p className="text-foreground/60 text-sm mt-3 max-w-md">
            Teknologi yang saya gunakan untuk membangun aplikasi mobile yang berkualitas
          </p>
        </motion.div>

        {/* Tech Pills - more personal with hover stories */}
        <motion.div
          className="flex flex-wrap gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              className="group relative px-5 py-3 rounded-full glass-card text-sm font-semibold text-foreground flex items-center gap-2 cursor-default"
              whileHover={{ scale: 1.03, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <span className="text-primary transition-colors duration-300 group-hover:text-accent-secondary">
                {tech.icon}
              </span>
              <span className="group-hover:text-primary transition-colors duration-300">
                {tech.name}
              </span>

              {/* Tooltip with personal story */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 rounded-lg bg-card border border-border text-xs text-foreground/70 whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg z-10">
                {tech.story}
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-2 h-2 bg-card border-r border-b border-border rotate-45" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}