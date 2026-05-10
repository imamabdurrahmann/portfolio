"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";

const techStack = [
  { name: "Flutter" },
  { name: "Dart" },
  { name: "Riverpod" },
  { name: "BLoC" },
  { name: "Firebase" },
  { name: "SQLite" },
  { name: "Hive" },
  { name: "Clean Arch" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
};

export function TechStack() {
  const { t } = useLocale();

  return (
    <section className="py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <span className="text-primary text-xs font-medium uppercase tracking-wider">{t("techStack.subtitle")}</span>
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mt-1">
            {t("techStack.title")}
          </h2>
        </div>

        <motion.div
          className="flex flex-wrap justify-center gap-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              className="px-4 py-2 rounded-full glass-card text-sm font-medium text-foreground hover:scale-105 transition-transform cursor-default"
            >
              {tech.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}