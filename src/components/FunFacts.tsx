"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";

const facts = {
  en: [
    { emoji: "☕", fact: "Drinks 3-4 cups of coffee while coding" },
    { emoji: "🌙", fact: "Most productive during night hours (curse of the night owl)" },
    { emoji: "🎮", fact: "Favorites: Mobile Legends & Valorant" },
    { emoji: "📚", fact: "Currently reading: Clean Code by Robert C. Martin" },
    { emoji: "🎵", fact: "Lo-fi beats while debugging, nothing else during deep work" },
    { emoji: "😴", fact: "Sleep schedule? What's that?" },
  ],
  id: [
    { emoji: "☕", fact: "Minum 3-4 cangkir kopi pas coding" },
    { emoji: "🌙", fact: "Paling produktif pas malam (kutukan si burung hantu)" },
    { emoji: "🎮", fact: "Favorit: Mobile Legends & Valorant" },
    { emoji: "📚", fact: "Sedang baca: Clean Code oleh Robert C. Martin" },
    { emoji: "🎵", fact: "Lo-fi pas debugging, sunyi pas deep work" },
    { emoji: "😴", fact: "Jadwal tidur? Apanya?" },
  ]
};

export function FunFacts() {
  const { locale } = useLocale();
  const lang = locale === "id" ? "id" : "en";
  const content = facts[lang];

  // Shuffle array for random order each load
  const shuffled = [...content].sort(() => Math.random() - 0.5);

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Simple header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            {lang === "id" ? "Yang lain" : "Other stuff"}
          </span>
        </motion.div>

        {/* Fun facts - horizontal scroll on mobile, grid on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {shuffled.map((item, index) => (
            <motion.div
              key={item.fact}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="p-4 rounded-xl bg-card border border-border text-center hover:border-primary/30 transition-colors"
            >
              <span className="text-2xl mb-2 block">{item.emoji}</span>
              <p className="text-xs text-foreground/70">{item.fact}</p>
            </motion.div>
          ))}
        </div>

        {/* Random thought of the day */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 p-6 rounded-2xl bg-primary/5 border border-primary/10 text-center"
        >
          <p className="text-sm text-foreground/60 italic">
            "{lang === "id"
              ? "Kode yang gw tulis hari ini adalah commit message yang gw bingungin tomorrow."
              : "Today's code is tomorrow's commit message I'm confused about."}"
          </p>
          <span className="text-xs text-primary mt-2 block">— Every developer ever</span>
        </motion.div>
      </div>
    </section>
  );
}