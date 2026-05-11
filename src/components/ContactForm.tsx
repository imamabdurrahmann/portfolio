"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLocale } from "@/i18n/LocaleProvider";

const formId = "mwvyraeg";

export function ContactForm() {
  const [state, handleSubmit] = useForm(formId);
  const { t } = useLocale();

  if (state.succeeded) {
    return (
      <Card className="w-full glass-card border border-border/50 shadow-sm">
        <CardContent className="p-8 text-center">
          <div className="p-4 bg-emerald-100 rounded-full inline-flex mb-4">
            <CheckCircle className="h-10 w-10 text-emerald-600" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">{t("contact.successTitle")}</h3>
          <p className="text-sm text-foreground/60 mt-2">
            {t("contact.successMessage")}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full glass-card border border-border/50 shadow-sm">
      <CardHeader>
        <CardTitle className="text-center text-lg font-semibold">{t("contact.contactTitle")}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-xs font-medium text-foreground/80 mb-1.5">{t("contact.name")}</label>
            <Input id="name" name="name" placeholder={t("contact.namePlaceholder")} required />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-medium text-foreground/80 mb-1.5">{t("contact.email")}</label>
            <Input id="email" name="email" type="email" placeholder={t("contact.emailPlaceholder")} required />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-500 mt-1" />
          </div>
          <div>
            <label htmlFor="message" className="block text-xs font-medium text-foreground/80 mb-1.5">{t("contact.message")}</label>
            <Textarea id="message" name="message" placeholder={t("contact.messagePlaceholder")} required rows={4} className="resize-none" />
            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-500 mt-1" />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {state.submitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                {t("contact.sending")}
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                {t("contact.send")}
              </>
            )}
          </button>
          <ValidationError errors={state.errors} className="text-sm text-red-500 text-center" />
        </form>
      </CardContent>
    </Card>
  );
}
