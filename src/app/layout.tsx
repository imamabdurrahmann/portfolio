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
  title: "Muhammad Imam Abdurrahman | Flutter Developer",
  description: "Portfolio of Muhammad Imam Abdurrahman, a passionate Flutter & Dart Developer from Indonesia specializing in high-performance mobile applications.",
  keywords: [
    "Flutter Developer",
    "Dart",
    "Mobile App Developer Indonesia",
    "Muhammad Imam Abdurrahman",
    "Frontend",
    "Bengkulu",
    "Flutter Portfolio",
    "App Development",
  ],
  authors: [{ name: "Muhammad Imam Abdurrahman", url: "https://imamabdurrahman.info" }],
  creator: "Muhammad Imam Abdurrahman",
  openGraph: {
    title: "Muhammad Imam Abdurrahman | Flutter Developer",
    description: "Portfolio of Muhammad Imam Abdurrahman, a passionate Flutter & Dart Developer from Indonesia.",
    url: "https://imamabdurrahman.info",
    siteName: "Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Imam Abdurrahman | Flutter Developer",
    description: "Portfolio of a passionate Flutter & Dart Developer from Indonesia.",
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
        {/* Grain Overlay */}
        <div 
          className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-difference"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
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