"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";

const facts = {
  en: [
    { text: "Usually codes from 10 PM to 3 AM", detail: "Night owl curse, can't help it" },
    { text: "Currently reading Clean Code", detail: "Should've read it sooner" },
    { text: "Plays Mobile Legends and Valorant", detail: "Main Hanzo sometimes" },
    { text: "Needs complete silence for deep work", detail: "No music, no noise, just code" },
    { text: "Probably on his 4th cup of coffee", detail: "Sleep is a myth" },
  ],
  id: [
    { text: "Biasanya coding dari jam 10 malam sampai 3 pagi", detail: "Kutukan burung hantu, gabisa dihindari" },
    { text: "Sedang baca Clean Code", detail: "Seharusnya dari dulu" },
    { text: "Main Mobile Legends dan Valorant", detail: "Kadang main Hanzo" },
    { text: "Butuh hening total buat deep work", detail: "Gak bisa denger musik pas fokus" },
    { text: "Kemungkinan udah di cangkir kopi ke-4", detail: "Tidur itu mitos" },
  ]
};

export function FunFacts() {
  const { locale } = useLocale();
  const lang = locale === "id" ? "id" : "en";
  const content = facts[lang];

  // Sort by length for varied visual rhythm
  const sorted = [...content].sort((a, b) => a.text.length - b.text.length);

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-3xl">
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

        {/* Facts - simple list, no cards */}
        <div className="space-y-4">
          {sorted.map((item, index) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-start gap-4 group"
            >
              <span className="text-primary mt-0.5">—</span>
              <div>
                <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                  {item.text}
                </p>
                <p className="text-xs text-foreground/40 mt-0.5">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Honest note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-6 border-t border-border"
        >
          <p className="text-xs text-foreground/50">
            {lang === "id"
              ? "Fun fact: gw nulis ini malem-malem pas harusnya tidur."
              : "Fun fact: writing this at 2 AM instead of sleeping."}
          </p>
        </motion.div>
      </div>
    </section>
  );
}