import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Clock, MessageCircle, Send, ArrowRight } from "lucide-react";

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
    href: null,
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
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
              Hubungi <span className="gradient-text">Saya</span>
            </h1>
            <p className="mt-3 text-sm text-foreground/60 max-w-xl mx-auto leading-relaxed">
              Punya project menarik atau ingin berdiskusi? Jangan ragu untuk menghubungi saya.
              Saya biasanya merespons dalam 1x24 jam.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Left - Contact Info */}
            <div className="space-y-4">
              <div className="glass-card p-5">
                <div className="space-y-4">
                  {contactItems.map((item) => (
                    <div key={item.title} className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium text-foreground text-sm">{item.title}</h3>
                          {item.badge && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-600 font-medium">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-foreground/60 text-xs hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground/60 text-xs">{item.value}</p>
                        )}
                      </div>
                    </div>
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
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
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
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-foreground mb-5">Kirim Pesan</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-foreground/80 mb-1.5">Nama</label>
                  <input
                    type="text"
                    placeholder="Nama lengkap Anda"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm placeholder-foreground/40 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-foreground/80 mb-1.5">Email</label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm placeholder-foreground/40 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-foreground/80 mb-1.5">Pesan</label>
                  <textarea
                    rows={4}
                    placeholder="Tulis pesan Anda di sini..."
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm placeholder-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary justify-center"
                >
                  Kirim Pesan
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}