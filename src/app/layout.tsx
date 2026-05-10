import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { LocaleProvider } from "@/i18n/LocaleProvider";

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