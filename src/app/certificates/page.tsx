"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Award, Calendar, Building, Eye, X, ExternalLink, ShieldCheck } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";
import { getCertificates, Certificate } from "@/lib/certificates";
import { motion, AnimatePresence } from "framer-motion";

export default function CertificatesPage() {
  const { t, locale } = useLocale();
  const allCertificates = getCertificates();
  const [filter, setFilter] = useState<'all' | 'office' | 'data' | 'compliance'>('all');
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const certificates = allCertificates.filter(c => filter === 'all' || c.category === filter);

  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Document Preview Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 sm:right-2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                onClick={() => setSelectedCert(null)}
                title={locale === 'en' ? 'Close' : 'Tutup'}
              >
                <X className="w-6 h-6" />
              </button>

              <div className="bg-card rounded-2xl overflow-hidden border border-border max-h-[80vh] flex flex-col shadow-2xl w-full">
                <div className="p-4 bg-secondary/80 border-b border-border flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="font-bold text-foreground text-sm truncate max-w-xs sm:max-w-md">
                      {locale === 'en' ? selectedCert.titleEn : selectedCert.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {selectedCert.credentialUrl && (
                      <a
                        href={selectedCert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs px-2.5 py-1 rounded-full bg-primary/20 text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-1"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Verify
                      </a>
                    )}
                    <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {locale === 'en' ? selectedCert.badgeEn : selectedCert.badge}
                    </span>
                  </div>
                </div>

                <div className="p-2 sm:p-4 overflow-auto flex items-center justify-center bg-black/40">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="max-h-[68vh] w-auto object-contain rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 blur-[100px] rounded-full pointer-events-none -z-10" />
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">{t("nav.certificates")}</span>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-foreground mt-4 tracking-tighter">
              {t("certificates.title")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                {t("certificates.titleAccent")}
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              {t("certificates.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-6 sm:py-8 px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="container mx-auto max-w-6xl">
          {/* Filters */}
          <div className="flex justify-center flex-wrap gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12">
            {(['all', 'office', 'data', 'compliance'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm md:text-base font-bold transition-all ${
                  filter === f 
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105' 
                    : 'bg-secondary/50 text-foreground/70 hover:bg-secondary hover:text-foreground hover:scale-105'
                }`}
              >
                {f === 'all' ? t('certificates.filterAll') : 
                 f === 'office' ? t('certificates.filterOffice') : 
                 f === 'data' ? t('certificates.filterData') : 
                 t('certificates.filterCompliance')}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {certificates.map((cert, index) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={cert.id}
                  className="group relative rounded-[2rem] bg-card border border-border hover:border-primary/50 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-primary/5 overflow-hidden"
                >
                  {/* Top Thumbnail Image Container with Click-to-Zoom */}
                  <div
                    onClick={() => setSelectedCert(cert)}
                    className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 border-b border-border/80 cursor-pointer group/img"
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover object-top opacity-95 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-black/30" />
                    
                    {/* Hover Eye Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground font-bold text-xs shadow-lg transform group-hover/img:scale-105 transition-transform">
                        <Eye className="w-4 h-4" />
                        {t("certificates.viewDocument")}
                      </span>
                    </div>

                    {/* Verified Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-emerald-400 text-xs font-bold flex items-center gap-1.5 shadow-md">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      {t("certificates.verified")}
                    </div>

                    {/* Honor Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-xs font-bold shadow-md">
                      {locale === 'en' ? cert.badgeEn : cert.badge}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-8 md:p-10 flex flex-col flex-grow">
                    {/* Meta info: Issuer & Year */}
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-medium text-foreground/50 mb-3">
                      <span className="flex items-center gap-1.5 font-semibold text-foreground/70">
                        <Building className="w-3.5 h-3.5 text-primary" />
                        {locale === 'en' ? cert.issuerEn : cert.issuer}
                      </span>
                      <span className="flex items-center gap-1 font-mono">
                        <Calendar className="w-3.5 h-3.5 text-primary" />
                        {cert.year}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                      {locale === 'en' ? cert.titleEn : cert.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-foreground/70 leading-relaxed mb-6 flex-grow">
                      {locale === 'en' ? cert.descriptionEn : cert.description}
                    </p>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {(locale === 'en' && cert.skillsEn ? cert.skillsEn : cert.skills).map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-3 py-1 rounded-full bg-secondary text-foreground/80 font-medium border border-border"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Action Area */}
                    <div className="pt-6 border-t border-border/60 mt-auto flex items-center justify-between gap-3">
                      <button
                        onClick={() => setSelectedCert(cert)}
                        className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-bold text-sm"
                      >
                        <Eye className="w-4 h-4 text-primary" />
                        <span>{t("certificates.viewDocument")}</span>
                      </button>

                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-foreground/50 hover:text-primary transition-colors font-mono"
                        >
                          <span>Verify</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 relative border-t border-border/40">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
            {locale === 'en' ? 'Verified Credentials & Readiness' : 'Legalitas & Kesiapan Kerja'}
          </h2>
          <p className="text-foreground/60 text-base md:text-lg max-w-xl mx-auto mb-8">
            {locale === 'en'
              ? 'All documents and certificates are verified. Ready to contribute immediately.'
              : 'Seluruh sertifikasi resmi dan dokumen kredensial terverifikasi. Siap berkontribusi secara profesional.'
            }
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/25"
          >
            {t("nav.hireMe")}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
