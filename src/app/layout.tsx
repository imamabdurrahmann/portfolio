import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { LocaleProvider } from "@/i18n/LocaleProvider";

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
        <meta name="color-scheme" content="light dark" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('portfolio-theme');
                  var theme = stored || 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                  document.documentElement.style.colorScheme = theme;
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <LocaleProvider>
          <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
            <Navbar />
            <main className="flex-1">
              <ErrorBoundary>{children}</ErrorBoundary>
            </main>
            <footer className="border-t py-6 text-center text-sm text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} Muhammad Imam Abdurrahman. All rights reserved.</p>
            </footer>
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}