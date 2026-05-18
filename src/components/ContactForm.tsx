"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLocale } from "@/i18n/LocaleProvider";
import { Magnetic } from "@/components/Magnetic";
import { motion } from "framer-motion";

const formId = "mwvyraeg";

export function ContactForm() {
  const [state, handleSubmit] = useForm(formId);
  const { t } = useLocale();

  if (state.succeeded) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full p-8 rounded-[2rem] bg-card border border-border shadow-lg flex flex-col items-center justify-center text-center h-full min-h-[400px]"
      >
        <div className="p-5 bg-emerald-500/10 rounded-full inline-flex mb-6 relative">
          <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full" />
          <CheckCircle className="h-12 w-12 text-emerald-500 relative z-10" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-3">{t("contact.successTitle")}</h3>
        <p className="text-foreground/60 max-w-[250px]">
          {t("contact.successMessage")}
        </p>
      </motion.div>
    );
  }

  return (
    <div className="w-full p-8 rounded-[2rem] bg-card border border-border shadow-lg relative group transition-colors duration-500 hover:border-primary/50">
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] z-0 pointer-events-none" />
      
      <div className="relative z-10">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
            Contact Me
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
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
    </div>
  );
}
