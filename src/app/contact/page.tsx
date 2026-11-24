import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact | Muhammad Imam Abdurrahman",
  description: "Hubungi saya untuk peluang kerja posisi Administrasi, Pengolahan Data, atau Operasional Kantor",
};

export default function ContactPage() {
  return <ContactClient />;
}
