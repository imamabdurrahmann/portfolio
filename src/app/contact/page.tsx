import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact | Flutter Developer Portfolio",
  description: "Hubungi saya untuk project freelance atau kolaborasi",
};

export default function ContactPage() {
  return <ContactClient />;
}