"use client";

import { motion, type Variants } from "framer-motion";
import { Mail, MapPin, Clock, Phone, MessageCircle, Send, Sparkles } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const contactItems = [
  {
    icon: <Mail className="h-5 w-5" />,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    title: "Email",
    value: "muhammadimamabdurrahman93@gmail.com",
    href: "mailto:muhammadimamabdurrahman93@gmail.com",
    hoverColor: "hover:text-primary"
  },
  {
    icon: <MessageCircle className="h-5 w-5" />,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    title: "WhatsApp",
    value: "082375227802",
    href: "https://wa.me/6282375227802?text=Halo%20Imam,%20saya%20tertarik%20dengan%20jasa%20pengembangan%20aplikasi%20Flutter",
    hoverColor: "hover:text-green-600",
    badge: "Chat Langsung"
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    title: "Lokasi",
    value: "Bengkulu, Indonesia",
    href: null,
    hoverColor: ""
  },
  {
    icon: <Clock className="h-5 w-5" />,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    title: "Availability",
    value: "UTC+7 (WIB)",
    href: null,
    hoverColor: ""
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
    <div className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Badge variant="secondary" className="mb-4 gap-2">
              <Sparkles className="h-3 w-3" />
              Get In Touch
            </Badge>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Hubungi <span className="text-primary">Saya</span>
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Punya project menarik atau ingin berdiskusi? Jangan ragu untuk menghubungi saya.
            Saya biasanya merespons dalam 1x24 jam.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <motion.div
                    variants={containerVariants}
                    className="space-y-5"
                  >
                    {contactItems.map((item, i) => (
                      <motion.div
                        key={item.title}
                        variants={itemVariants}
                        className="flex items-start gap-4 group"
                      >
                        <motion.div
                          className={`p-2.5 rounded-xl ${item.iconBg}`}
                          whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className={item.iconColor}>{item.icon}</span>
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium text-sm">{item.title}</h3>
                            {item.badge && (
                              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-green-100 text-green-700 font-medium">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          {item.href ? (
                            <motion.a
                              href={item.href}
                              target={item.href.startsWith("http") ? "_blank" : undefined}
                              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                              className={`text-muted-foreground ${item.hoverColor} transition-colors text-sm`}
                              whileHover={{ x: 2 }}
                              transition={{ duration: 0.2 }}
                            >
                              {item.value}
                            </motion.a>
                          ) : (
                            <p className="text-muted-foreground text-sm">{item.value}</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Phone className="h-4 w-4 text-primary" />
                    <h3 className="font-medium">Layanan yang Ditawarkan</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {services.map((service, i) => (
                      <motion.li
                        key={service}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <motion.span
                          className="w-1.5 h-1.5 bg-primary rounded-full mr-2"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                        />
                        {service}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick CTA */}
            <motion.div
              variants={itemVariants}
              className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Send className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-semibold">Respons Cepat</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Saya biasanya merespons dalam waktu 1x24 jam. Untuk pertanyaan urgent,
                silakan hubungi via WhatsApp untuk respons yang lebih cepat.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
