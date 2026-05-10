"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";
import { Mail, Phone, MapPin, ArrowRight, MessageCircle } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export function Contact() {
  const { t } = useLocale();

  return (
    <footer id="contact" className="py-20 px-6 footer relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-primary/5 to-transparent rounded-full" />
      </div>

      <motion.div
        className="container mx-auto max-w-4xl relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
      >
        {/* CTA Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-foreground/60 max-w-lg mx-auto leading-relaxed">
            {t("contact.subtitle")}
          </p>

          {/* Contact Cards */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <motion.a
              href="https://wa.me/6282375227802"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 flex items-center gap-3 group"
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <span className="text-xs text-foreground/60">WhatsApp</span>
                <p className="font-semibold text-foreground group-hover:text-green-500 transition-colors">
                  +62 823 7522 7802
                </p>
              </div>
            </motion.a>

            <motion.a
              href="mailto:muhammadimamabdurrahman93@gmail.com"
              className="glass-card p-4 flex items-center gap-3 group"
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="text-xs text-foreground/60">Email</span>
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  muhammadimamabdurrahman93@gmail.com
                </p>
              </div>
            </motion.a>

            <motion.div
              className="glass-card p-4 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-purple-500" />
              </div>
              <div>
                <span className="text-xs text-foreground/60">Location</span>
                <p className="font-semibold text-foreground">
                  Indonesia
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 mb-8">
          <motion.div
            whileHover={{ y: -4, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link
              href="https://github.com/imamabdurrahmann"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ y: -4, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link
              href="https://wa.me/6282375227802"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ y: -4, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link
              href="mailto:muhammadimamabdurrahman93@gmail.com"
              className="social-icon"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-12">
          <Link href="/contact" className="hero-cta inline-flex">
            {t("nav.hireMe")}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 border-t border-border/50">
          <p className="text-foreground/40 text-sm">
            &copy; {new Date().getFullYear()} Muhammad Imam Abdurrahman. {t("footer.copyright")}
          </p>
        </div>
      </motion.div>
    </footer>
  );
}