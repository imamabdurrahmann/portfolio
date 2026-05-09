"use client";

import Link from "next/link";
import { ArrowRight, Mail, Link2, Sparkles, Code2, Rocket, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/ProjectCard";
import { getFeaturedProjects } from "@/lib/projects";
import { useEffect, useState } from "react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const slideIn = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const techBadgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
};

const floatAnimation = {
  y: [0, -10, 0],
  transition: { duration: 3, repeat: Infinity }
};

// Tech stack data
const techStack = [
  { name: "Flutter", color: "bg-blue-500/10 text-blue-600 border-blue-200" },
  { name: "Dart", color: "bg-blue-600/10 text-blue-700 border-blue-300" },
  { name: "Riverpod", color: "bg-red-500/10 text-red-600 border-red-200" },
  { name: "BLoC", color: "bg-green-500/10 text-green-600 border-green-200" },
  { name: "Firebase", color: "bg-orange-500/10 text-orange-600 border-orange-200" },
  { name: "SQLite", color: "bg-purple-500/10 text-purple-600 border-purple-200" },
  { name: "Hive", color: "bg-pink-500/10 text-pink-600 border-pink-200" },
  { name: "REST API", color: "bg-cyan-500/10 text-cyan-600 border-cyan-200" },
  { name: "Clean Architecture", color: "bg-indigo-500/10 text-indigo-600 border-indigo-200" },
  { name: "Git", color: "bg-orange-600/10 text-orange-700 border-orange-300" },
];

// Features data
const features = [
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Clean Code",
    description: "Menulis kode yang bersih, terstruktur, dan mudah dipelihara dengan prinsip Clean Architecture."
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Performant Apps",
    description: "Optimasi performa aplikasi untuk pengalaman pengguna yang smooth dan responsif."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Modern UI/UX",
    description: "Menciptakan antarmuka yang intuitif dan menarik dengan Material Design 3."
  },
];

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(className.replace(/\s/g, '-').replace(/^/, 'section-'));
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [className]);

  return (
    <motion.div
      id={className.replace(/\s/g, '-').replace(/^/, 'section-')}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-24 md:py-40 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <motion.div
            className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary/40 rounded-full"
            animate={floatAnimation}
          />
          <motion.div
            className="absolute top-1/3 left-1/4 w-3 h-3 bg-primary/30 rounded-full"
            animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 0.5 } }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-primary/20 rounded-full"
            animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 1 } }}
          />
        </div>

        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <Badge variant="secondary" className="px-4 py-1.5 text-sm font-medium gap-2">
              <Sparkles className="h-4 w-4" />
              Available for Freelance
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-7xl font-bold tracking-tight"
          >
            Membangun Aplikasi <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              Mobile Premium
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Flutter Developer yang passionate dalam menciptakan aplikasi mobile
            yang <span className="text-foreground font-medium">intuitif</span>,{" "}
            <span className="text-foreground font-medium">performant</span>, dan memberikan
            <span className="text-foreground font-medium">pengalaman terbaik</span> untuk pengguna.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/projects"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
              >
                Lihat Project
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.div>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-border px-6 text-sm font-medium transition-all hover:bg-muted/50 hover:border-primary/50"
              >
                <Mail className="h-4 w-4" />
                Hubungi Saya
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16"
          >
            {[
              { value: "3+", label: "Project Selesai" },
              { value: "5+", label: "Tech Stack" },
              { value: "100%", label: "Dedikasi" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <AnimatedSection className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className="group relative p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5"
              >
                <motion.div
                  className="p-3 rounded-xl bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="font-bold text-lg mt-4">{feature.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Featured Projects */}
      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div variants={slideIn} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Project Pilihan</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Aplikasi Flutter yang telah saya kembangkan dengan perhatian pada kualitas dan detail
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          <motion.div variants={scaleIn} className="text-center mt-10">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              Lihat Semua Project
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Tech Stack */}
      <AnimatedSection className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/50">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Tech Stack</h2>
            <p className="text-muted-foreground mt-3">
              Teknologi yang saya kuasai untuk membangun aplikasi mobile
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-3"
          >
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                variants={techBadgeVariants}
                whileHover={{ scale: 1.1, y: -2 }}
                className="cursor-pointer"
              >
                <Badge
                  variant="outline"
                  className={`text-sm px-4 py-2 border ${tech.color} hover:shadow-md transition-all`}
                >
                  {tech.name}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <section className="relative py-16 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-6 px-4">
              Let's Work Together
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold">
              Tertarik untuk <span className="text-primary">Berkolaborasi?</span>
            </h2>
            <p className="text-muted-foreground mt-6 max-w-lg mx-auto text-lg">
              Saya terbuka untuk project freelance atau kesempatan kerja sama.
              Mari wujudkan ide aplikasi mobile kamu bersama.
            </p>

            <motion.div
              className="mt-10 flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90"
                >
                  <Mail className="h-4 w-4" />
                  Mulai Percakapan
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="https://github.com/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-border px-8 text-sm font-medium transition-all hover:bg-muted/50"
                >
                  <Link2 className="h-4 w-4" />
                  GitHub Profile
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
