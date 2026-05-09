import type { Metadata } from "next";
import { Mail, MapPin, Clock, MessageCircle, Send, Sparkles } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Contact | Flutter Developer Portfolio",
  description: "Hubungi saya untuk project freelance atau kolaborasi",
};

const contactItems = [
  {
    icon: <Mail className="h-5 w-5" />,
    bgClass: "bg-primary/10",
    colorClass: "text-primary",
    title: "Email",
    value: "muhammadimamabdurrahman93@gmail.com",
    href: "mailto:muhammadimamabdurrahman93@gmail.com",
  },
  {
    icon: <MessageCircle className="h-5 w-5" />,
    bgClass: "bg-green-100",
    colorClass: "text-green-600",
    title: "WhatsApp",
    value: "082375227802",
    href: "https://wa.me/6282375227802?text=Halo%20Imam,%20saya%20tertarik%20dengan%20jasa%20pengembangan%20aplikasi%20Flutter",
    badge: "Chat Langsung",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    bgClass: "bg-primary/10",
    colorClass: "text-primary",
    title: "Lokasi",
    value: "Bengkulu, Indonesia",
    href: null,
  },
  {
    icon: <Clock className="h-5 w-5" />,
    bgClass: "bg-primary/10",
    colorClass: "text-primary",
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
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 gap-2">
            <Sparkles className="h-3 w-3" />
            Get In Touch
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold">
            Hubungi <span className="text-primary">Saya</span>
          </h1>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto leading-relaxed">
            Punya project menarik atau ingin berdiskusi? Jangan ragu untuk menghubungi saya.
            Saya biasanya merespons dalam 1x24 jam.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-5">
                  {contactItems.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className={`p-2.5 rounded-xl ${item.bgClass}`}>
                        <span className={item.colorClass}>{item.icon}</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium text-sm">{item.title}</h3>
                          {item.badge && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-green-100 text-green-700 font-medium">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className={`text-muted-foreground text-sm hover:underline ${
                              item.title === "WhatsApp" ? "hover:text-green-600" : "hover:text-primary"
                            }`}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground text-sm">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Send className="h-4 w-4 text-primary" />
                  <h3 className="font-medium">Layanan yang Ditawarkan</h3>
                </div>
                <ul className="space-y-2">
                  {services.map((service) => (
                    <li key={service} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {service}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="p-5 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Send className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-semibold">Respons Cepat</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Saya biasanya merespons dalam waktu 1x24 jam. Untuk pertanyaan urgent,
                silakan hubungi via WhatsApp untuk respons yang lebih cepat.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}