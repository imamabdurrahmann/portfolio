"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLocale } from "@/i18n/LocaleProvider";
import { Magnetic } from "@/components/Magnetic";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const formId = "mwvyraeg";

export function ContactForm() {
  const [state, handleSubmit] = useForm(formId);
  const { t } = useLocale();
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    if (state.errors && state.errors.length > 0) {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  }, [state.errors]);

  const onSubmitWrap = (e: React.FormEvent<HTMLFormElement>) => {
    if (!e.currentTarget.checkValidity()) {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      // Browser handles native tooltip, but we trigger shake
    }
    handleSubmit(e);
  };

  if (state.succeeded) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full p-8 rounded-[2rem] bg-card border border-border shadow-lg flex flex-col items-center justify-center text-center h-full min-h-[400px]"
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
          className="p-5 bg-emerald-500/10 rounded-full inline-flex mb-6 relative"
        >
          <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full" />
          <CheckCircle className="h-12 w-12 text-emerald-500 relative z-10" />
        </motion.div>
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold text-foreground mb-3"
        >
          {t("contact.successTitle")}
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-foreground/60 max-w-[250px]"
        >
          {t("contact.successMessage")}
        </motion.p>
      </motion.div>
    );
  }

  return (
    <motion.div 
      animate={isShaking ? { x: [-10, 10, -10, 10, -5, 5, 0] } : {}}
      transition={{ duration: 0.4 }}
      className="w-full p-8 rounded-[2rem] bg-card border border-border shadow-lg relative group transition-colors duration-500 hover:border-primary/50"
    >
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] z-0 pointer-events-none" />
      
      <div className="relative z-10">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
            Contact Me
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          </h3>
        </div>

        <form onSubmit={onSubmitWrap} className="space-y-5">
          <div className="space-y-2">
            <label htmlFor="name" className="text-xs font-bold text-foreground/60 uppercase tracking-wider ml-1">{t("contact.name")}</label>
            <Input 
              id="name" 
              name="name" 
              placeholder={t("contact.namePlaceholder") || "What should I call you?"} 
              required 
              className="bg-secondary/50 border-border h-12 rounded-xl focus-visible:ring-primary/50 transition-all"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-xs font-bold text-foreground/60 uppercase tracking-wider ml-1">{t("contact.email")}</label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              placeholder={t("contact.emailPlaceholder") || "your@email.com"} 
              required 
              className="bg-secondary/50 border-border h-12 rounded-xl focus-visible:ring-primary/50 transition-all"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-500 mt-1" />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-xs font-bold text-foreground/60 uppercase tracking-wider ml-1">{t("contact.message")}</label>
            <Textarea 
              id="message" 
              name="message" 
              placeholder={t("contact.messagePlaceholder") || "What's on your mind?"} 
              required 
              rows={4} 
              className="resize-none bg-secondary/50 border-border rounded-xl focus-visible:ring-primary/50 transition-all p-4" 
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-500 mt-1" />
          </div>
          
          <div className="pt-2">
            <Magnetic>
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg shadow-primary/25"
              >
                {state.submitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    {t("contact.sending")}
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    {t("contact.send")}
                  </>
                )}
              </button>
            </Magnetic>
          </div>
          
          <ValidationError errors={state.errors} className="text-sm text-red-500 text-center" />
        </form>
      </div>
    </motion.div>
  );
}
