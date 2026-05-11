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

const contactItems = [
  {
    icon: <Mail className="h-5 w-5" />,
    title: "Email",
    value: "muhammadimamabdurrahman93@gmail.com",
    href: "mailto:muhammadimamabdurrahman93@gmail.com",
  },
  {
    icon: <LinkedinIcon className="h-5 w-5" />,
    title: "LinkedIn",
    value: "Muhammad Imam Abdurrahman",
    href: "https://linkedin.com/in/muhammad-imam-abdurrahman-24108417a",
  },
  {
    icon: <MessageCircle className="h-5 w-5" />,
    title: "WhatsApp",
    value: "+62 823 7522 7802",
    href: "https://wa.me/6282375227802?text=Halo%20Imam,%20saya%20tertarik%20dengan%20jasa%20pengembangan%20aplikasi%20Flutter",
    badge: "Chat Langsung",
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
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-5xl">
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

          <div className="grid lg:grid-cols-2 gap-6">
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