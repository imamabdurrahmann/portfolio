import type { Metadata } from "next";
import { Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const metadata: Metadata = {
  title: "Contact | Flutter Developer Portfolio",
  description: "Hubungi saya untuk project freelance atau kolaborasi",
};

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const contactItems = [
  {
    icon: <LinkedinIcon className="h-5 w-5" />,
    title: "LinkedIn",
    value: "Muhammad Imam Abdurrahman",
    href: "https://linkedin.com/in/muhammad-imam-abdurrahman-24108417a",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    title: "Email",
    value: "muhammadimamabdurrahman93@gmail.com",
    href: "mailto:muhammadimamabdurrahman93@gmail.com",
  },
  {
    icon: <GithubIcon className="h-5 w-5" />,
    title: "GitHub",
    value: "imamabdurrahmann",
    href: "https://github.com/imamabdurrahmann",
  },
  {
    icon: <MessageCircle className="h-5 w-5" />,
    title: "WhatsApp",
    value: "+62 823 7522 7802",
    href: "https://wa.me/6282375227802?text=Halo%20Imam,%20saya%20tertarik%20dengan%20jasa%20pengembangan%20aplikasi%20Flutter",
    badge: "Chat Langsung",
  },
  {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    title: "Instagram",
    value: "@itsimammm",
    href: "https://instagram.com/itsimammm",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    title: "Lokasi",
    value: "Bengkulu, Indonesia",
    href: "https://www.google.com/maps/search/Bengkulu,+Indonesia",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Availability",
    value: "UTC+7 (WIB)",
    href: null,
  },
];

const services = [
  "Pengembangan Aplikasi Flutter",
  "Custom Widget & Library",
  "Bug Fix & Maintenance",
  "Code Review & Consulting",
];

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <span className="text-primary text-xs font-medium uppercase tracking-wider">Get In Touch</span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-3 font-heading">
              Hubungi <span className="gradient-text">Saya</span>
            </h1>
            <p className="mt-3 text-sm text-foreground/60 max-w-xl mx-auto leading-relaxed">
              Punya project menarik atau ingin berdiskusi? Jangan ragu untuk menghubungi saya.
              Saya biasanya merespons dalam 1x24 jam.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Left - Contact Info */}
            <div className="space-y-6">
              <div className="glass-card p-5 border border-border/50 shadow-sm">
                <div className="flex flex-col gap-4">
                  {contactItems.map((item) => (
                    item.href ? (
                      <a
                        key={item.title}
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-4 p-2 -m-2 rounded-xl hover:bg-accent-secondary/5 transition-colors duration-300 group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-accent-secondary/10 border border-accent-secondary/20 flex items-center justify-center text-accent-secondary group-hover:bg-accent-secondary/20 transition-colors duration-300">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">{item.title}</h3>
                            {item.badge && (
                              <span className="text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 font-medium">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 text-xs">{item.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div key={item.title} className="flex items-center gap-4 p-2 -m-2">
                        <div className="w-10 h-10 rounded-xl bg-accent-secondary/10 border border-accent-secondary/20 flex items-center justify-center text-accent-secondary">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">{item.title}</h3>
                            {item.badge && (
                              <span className="text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 font-medium">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 text-xs">{item.value}</p>
                        </div>
                      </div>
                    )
                  ))}
                </div>
              </div>

              {/* Services */}
              <div className="glass-card p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Send className="h-4 w-4 text-primary" />
                  <h3 className="font-semibold text-foreground text-sm">Layanan yang Ditawarkan</h3>
                </div>
                <ul className="space-y-2">
                  {services.map((service) => (
                    <li key={service} className="flex items-center text-foreground/60 text-xs">
                      <span className="w-1.5 h-1.5 bg-accent-secondary rounded-full mr-2" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Response Note */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                <h3 className="font-semibold text-foreground text-sm mb-1">Respons Cepat</h3>
                <p className="text-xs text-foreground/60 leading-relaxed">
                  Biasanya merespons 1x24 jam. Untuk urgent, hubungi via WhatsApp.
                </p>
              </div>
            </div>

            {/* Right - Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}