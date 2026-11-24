import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { LenisScroll } from "@/components/LenisScroll";
import { Preloader } from "@/components/Preloader";
import { CustomCursor } from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Muhammad Imam Abdurrahman | AI & Automation-Powered Administrative Specialist",
  description: "Portofolio Muhammad Imam Abdurrahman, profesional Administrasi, Pengolahan Data Otomatis (Python), Power BI, dan AI Workflow Productivity dari Bengkulu, Indonesia.",
  keywords: [
    "Staff Administrasi",
    "Office Administrator",
    "Administrasi Perkantoran",
    "Python Office Automation",
    "AI Productivity",
    "Data Entry Specialist",
    "Administrative Assistant",
    "Operations Support",
    "Microsoft Excel Lanjutan",
    "Power BI",
    "Muhammad Imam Abdurrahman",
    "Bengkulu",
  ],
  authors: [{ name: "Muhammad Imam Abdurrahman", url: "https://imamabdurrahman.info" }],
  creator: "Muhammad Imam Abdurrahman",
  openGraph: {
    title: "Muhammad Imam Abdurrahman | AI & Automation-Powered Administrative Specialist",
    description: "Portofolio Muhammad Imam Abdurrahman, profesional Administrasi, Pengolahan Data Otomatis (Python), Power BI, dan AI Workflow Productivity dari Bengkulu, Indonesia.",
    url: "https://imamabdurrahman.info",
    siteName: "Portfolio",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Imam Abdurrahman | AI & Automation-Powered Administrative Specialist",
    description: "Portofolio Muhammad Imam Abdurrahman, profesional Administrasi, Pengolahan Data Otomatis (Python), Power BI, dan AI Workflow Productivity dari Bengkulu, Indonesia.",
    creator: "@imamabdurrahman",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="dark" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  document.documentElement.setAttribute('data-theme', 'dark');
                  document.documentElement.style.colorScheme = 'dark';
                  localStorage.setItem('portfolio-theme', 'dark');
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased relative" suppressHydrationWarning>

        <LocaleProvider>
          <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
            <LenisScroll />
            <Preloader />
            <CustomCursor />
            <Navbar />
            <main className="flex-1">
              <ErrorBoundary>{children}</ErrorBoundary>
            </main>
            <footer className="border-t py-6 text-center text-sm text-muted-foreground relative z-10">
              <p>&copy; {new Date().getFullYear()} Muhammad Imam Abdurrahman. All rights reserved.</p>
            </footer>
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
