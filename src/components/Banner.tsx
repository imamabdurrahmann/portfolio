"use client";

import Link from "next/link";
import { Star, Heart, ArrowRight, Mail, Terminal, Smartphone, Globe, Monitor, Code } from "lucide-react";
import { Magnetic } from "./Magnetic";
import { useLocale } from "@/i18n/LocaleProvider";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const platforms = [
  { icon: Smartphone, label: "Android" },
  { icon: Globe, label: "iOS" },
  { icon: Globe, label: "Web" },
  { icon: Monitor, label: "Desktop" },
];

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayText(text.slice(0, i));
        i++;
        if (i > text.length) clearInterval(interval);
      }, 50);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [text, delay]);

  return <span>{displayText}<span className="animate-pulse">_</span></span>;
};

export function Banner() {
  const { t } = useLocale();

  return (
    <section className="hero-section relative w-full overflow-hidden flex items-center justify-center pt-24 pb-16 lg:pt-32 lg:pb-24 min-h-[95vh]">
      {/* Background Huge Text Overlay */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.05, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black leading-none whitespace-nowrap z-0 pointer-events-none tracking-tighter"
      >
        FLUTTER
      </motion.div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-mono mb-6 backdrop-blur-sm">
              <Code className="w-4 h-4" />
              <span>Dart & Flutter Specialist</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] mb-6">
              {t("hero.title").split(',')[0]}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                {t("hero.title").split(',')[1] ? t("hero.title").split(',')[1] : "Developer"}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mb-8 leading-relaxed">
              {t("hero.description")}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Magnetic>
                <Link href="/projects" className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full overflow-hidden transition-transform active:scale-95">
                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                  <span className="relative flex items-center gap-2">
                    {t("hero.viewProject")}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Magnetic>
              
              <Magnetic>
                <Link href="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-secondary/80 hover:bg-secondary border border-border text-foreground font-bold rounded-full transition-colors active:scale-95 backdrop-blur-md">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>{t("hero.contactMe")}</span>
                </Link>
              </Magnetic>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <span className="text-sm font-semibold text-foreground/50 uppercase tracking-widest mr-2">Deploy To:</span>
              {platforms.map((platform, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (idx * 0.1) }}
                  key={platform.label} 
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-card border border-border/50 text-xs font-medium"
                >
                  <platform.icon className="w-3.5 h-3.5 text-foreground/70" />
                  {platform.label}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Terminal & Profile */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative flex flex-col items-center lg:items-end mt-16 lg:mt-0"
          >
            {/* Profile Image */}
            <div className="relative z-20 w-48 h-48 md:w-60 md:h-60 rounded-full p-2 bg-gradient-to-tr from-primary to-orange-400 mb-[-3rem] mr-auto lg:mr-10 shadow-2xl shadow-primary/20 hover:scale-105 transition-transform duration-500">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-background bg-card">
                <img
                  src="/profile.jpg"
                  alt="Muhammad Imam Abdurrahman"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              {/* Floating badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-1/2 px-4 py-2 rounded-2xl bg-card border border-border flex items-center gap-2 shadow-xl"
              >
                <Star className="w-4 h-4 text-primary" />
                <span className="text-sm font-bold">4+ Apps</span>
              </motion.div>
            </div>

            {/* Terminal Window */}
            <div className="w-full rounded-2xl overflow-hidden border border-border bg-[#0d1117] shadow-2xl relative z-10 md:-ml-8">
              <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-border/40">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="flex-1 text-center text-xs font-mono text-foreground/40 flex items-center justify-center gap-2">
                  <Terminal className="w-3 h-3" /> main.dart
                </div>
              </div>
              <div className="p-6 font-mono text-xs sm:text-sm leading-loose overflow-x-auto">
                <div className="text-blue-400">void <span className="text-yellow-300">main</span>() {'{'}</div>
                <div className="pl-4 text-gray-300">
                  <span className="text-purple-400">final</span> developer = <span className="text-yellow-300">Developer</span>(<br/>
                  <span className="pl-4 text-orange-300">name:</span> <span className="text-green-400">'Imam Abdurrahman'</span>,<br/>
                  <span className="pl-4 text-orange-300">role:</span> <span className="text-green-400">'Flutter Expert'</span>,<br/>
                  <span className="pl-4 text-orange-300">passion:</span> <span className="text-green-400">'Clean Code'</span>,<br/>
                  );
                </div>
                <div className="pl-4 mt-2">
                  <span className="text-yellow-300">runApp</span>(<br/>
                  <span className="pl-4 text-blue-400">AwesomeApp</span>(developer)<br/>
                  );
                </div>
                <div>{'}'}</div>
                <div className="mt-4 text-green-400/80 font-bold flex items-center gap-2">
                  <span>$</span> <TypewriterText text="flutter run -d all_devices" delay={1000} />
                </div>
              </div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-primary/10 blur-[100px] -z-10 rounded-full"></div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}