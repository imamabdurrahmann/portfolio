"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const formId = "mwvyraeg";

export function ContactForm() {
  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="p-6 text-center">
          <div className="p-3 bg-green-100 rounded-full inline-flex mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold">Pesan Terkirim!</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Terima kasih sudah menghubungi. Saya akan segera merespons pesan Anda.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center">Hubungi Saya</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="text-sm font-medium">Nama</label>
            <Input id="name" name="name" placeholder="Nama lengkap" required className="mt-1.5" />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <Input id="email" name="email" type="email" placeholder="email@example.com" required className="mt-1.5" />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-500 mt-1" />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium">Pesan</label>
            <Textarea id="message" name="message" placeholder="Tulis pesan Anda di sini..." required rows={5} className="mt-1.5 resize-none" />
            <ValidationError prefix="Pesan" field="message" errors={state.errors} className="text-xs text-red-500 mt-1" />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full h-9 flex items-center justify-center gap-1.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 disabled:opacity-50"
          >
            {state.submitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Mengirim...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Kirim Pesan
              </>
            )}
          </button>
          <ValidationError errors={state.errors} className="text-sm text-red-500 text-center" />
        </form>
      </CardContent>
    </Card>
  );
}