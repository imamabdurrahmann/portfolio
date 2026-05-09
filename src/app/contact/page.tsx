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
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-purple-400 text-sm font-medium uppercase tracking-wider">Get In Touch</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4">
              Hubungi <span className="gradient-text">Saya</span>
            </h1>
            <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Punya project menarik atau ingin berdiskusi? Jangan ragu untuk menghubungi saya.
              Saya biasanya merespons dalam 1x24 jam.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Contact Info */}
            <div className="space-y-6">
              <div className="glass-card p-6">
                <div className="space-y-5">
                  {contactItems.map((item) => (
                    <div key={item.title} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium text-white">{item.title}</h3>
                          {item.badge && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 font-medium">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-white/60 text-sm hover:text-purple-400 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-white/60 text-sm">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div className="glass-card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Send className="h-5 w-5 text-purple-400" />
                  <h3 className="font-semibold text-white">Layanan yang Ditawarkan</h3>
                </div>
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li key={service} className="flex items-center text-white/70 text-sm">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Response Note */}
              <div className="p-5 rounded-xl bg-gradient-to-br from-purple-500/10 to-indigo-500/5 border border-purple-500/20">
                <h3 className="font-semibold text-white mb-2">Respons Cepat</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Saya biasanya merespons dalam waktu 1x24 jam. Untuk pertanyaan urgent,
                  silakan hubungi via WhatsApp untuk respons yang lebih cepat.
                </p>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Kirim Pesan</h3>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Nama</label>
                  <input
                    type="text"
                    placeholder="Nama lengkap Anda"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Pesan</label>
                  <textarea
                    rows={5}
                    placeholder="Tulis pesan Anda di sini..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-purple-500 transition-colors resize-none"
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