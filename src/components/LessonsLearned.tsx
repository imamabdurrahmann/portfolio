"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";
import { AlertCircle, Lightbulb, Coffee, Code2 } from "lucide-react";

const lessons = {
  en: [
    {
      icon: AlertCircle,
      title: "Scope creep is real",
      story: "My first app took 6 months instead of 2 because I kept adding features. Now I ship MVP first, iterate later.",
      color: "text-red-400"
    },
    {
      icon: Lightbulb,
      title: "Offline-first > internet-first",
      story: "Users in Indonesia deal with spotty internet. Apps that work offline get better reviews.",
      color: "text-yellow-400"
    },
    {
      icon: Coffee,
      title: "Take breaks seriously",
      story: "Spent 8 hours debugging a bug. Found it in 5 minutes after coffee and a walk. Rest is part of the job.",
      color: "text-orange-400"
    },
    {
      icon: Code2,
      title: "Clean code pays off",
      story: "Wrote messy code once to save time. Took 3x longer to add features later. Clean Architecture is an investment.",
      color: "text-emerald-400"
    }
  ],
  id: [
    {
      icon: AlertCircle,
      title: "Scope creep itu nyata",
      story: "App pertama gw selesai 6 bulan, padahal target 2 bulan. Mulai dari MVP dulu, iterate depois.",
      color: "text-red-400"
    },
    {
      icon: Lightbulb,
      title: "Offline-first > internet-first",
      story: "User di Indonesia sering menghadapi internet yang nggak stabil. App yang work offline dapet review lebih baik.",
      color: "text-yellow-400"
    },
    {
      icon: Coffee,
      title: "Istirahat itu penting",
      story: "Debugging 8 jam tanpa hasil. nemu bug dalam 5 menit abis kopi dan jalan-jalan. Istirahat itu bagian dari kerja.",
      color: "text-orange-400"
    },
    {
      icon: Code2,
      title: "Clean code itu investasi",
      story: " pernah nulis code berantakan demi hemat waktu. Tapi waktu mau nambah fitur, butuh 3x lebih lama. Clean Architecture itu investasi.",
      color: "text-emerald-400"
    }
  ]
};

// Random-ish rotation for imperfect feel
const getRotation = (index: number) => {
  const rotations = [-0.5, 0.5, -0.3, 0.3];
  return rotations[index % rotations.length];
};

export function LessonsLearned() {
  const { locale } = useLocale();
  const lang = locale === "id" ? "id" : "en";
  const content = lessons[lang];

  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              {lang === "id" ? "Yang gw pelajari" : "Lessons I Learned"}
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            {lang === "id" ? "Dari" : "From"} <span className="gradient-text">{lang === "id" ? "kesalahan" : "Mistakes"}</span>
          </h2>
          <p className="text-foreground/60 text-sm mt-3 max-w-lg">
            {lang === "id"
              ? "Setiap bug dan fitur yang gagal ngajarin gw sesuatu. Ini beberapa di antaranya."
              : "Every failed feature and bug taught me something. Here are a few."}
          </p>
        </motion.div>

        {/* Lessons Grid - asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.map((lesson, index) => (
            <motion.div
              key={lesson.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border"
              style={{ transform: `rotate(${getRotation(index)}deg)` }}
            >
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-lg bg-card border border-border ${lesson.color}`}>
                  <lesson.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-foreground mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {lesson.title}
                  </h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {lesson.story}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Honest about current situation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-foreground/50 italic">
            {lang === "id"
              ? "Still learning every day. Still making mistakes. Still enjoying it."
              : "Still learning every day. Still making mistakes. Still enjoying it."}
          </p>
        </motion.div>
      </div>
    </section>
  );
}