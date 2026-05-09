"use client";

import { motion, type Variants } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ProjectsPage() {
  return (
    <div className="py-16 md:py-24">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-40 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Portfolio
            </span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Project <span className="text-primary">Saya</span>
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Berikut adalah kumpulan aplikasi Flutter yang telah saya kembangkan.
            Setiap project dibangun dengan perhatian pada performa, UX, dan code quality.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty state / CTA */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-center mt-16 p-8 rounded-2xl bg-muted/30 border border-dashed border-border"
        >
          <h3 className="font-semibold text-lg">Tertarik bekerja sama?</h3>
          <p className="text-muted-foreground mt-2 text-sm">
            Saya selalu terbuka untuk project baru yang menarik
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 mt-4 px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium"
          >
            Hubungi Saya
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
