import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Flutter Developer Portfolio",
  description: "Portfolio showcasing Flutter mobile application projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t py-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}