"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Star, Heart, TrendingUp, ArrowRight, Mail } from "lucide-react";

const roles = ["Flutter Developer", "Mobile App Builder", "UI Enthusiast"];

export function Banner() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    if (!isDeleting) {
      if (displayedText.length < currentRole.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section className="hero-section px-6">
      <div className="hero-glow" />
      <div className="hero-glow-2" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white/80">Available for Projects</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white">
            Flutter Developer<br />
            yang Menghadirkan<br />
            <span className="gradient-text">Solusi Digital</span>
          </h1>

          {/* Typing Role */}
          <div className="mt-8 text-2xl md:text-3xl font-semibold text-white">
            I&apos;m a {displayedText}
            <span className="typing-cursor text-purple-400">|</span>
          </div>

          {/* Description */}
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Membangun aplikasi mobile yang tidak hanya berfungsi dengan baik,
            tapi juga memberikan pengalaman yang berkesan bagi setiap pengguna.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-12">
            {[
              { num: "3+", label: "Project", icon: <Star className="w-4 h-4" /> },
              { num: "100%", label: "Dedikasi", icon: <Heart className="w-4 h-4" /> },
              { num: "5+", label: "Tech Stack", icon: <TrendingUp className="w-4 h-4" /> },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <div className="flex items-center gap-1 text-4xl md:text-5xl font-bold gradient-text">
                  {stat.num}
                  {stat.icon}
                </div>
                <span className="text-sm text-white/60 mt-1">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <Link href="/projects" className="btn-primary">
              Lihat Project
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="btn-secondary">
              <Mail className="w-4 h-4" />
              Hubungi Saya
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}