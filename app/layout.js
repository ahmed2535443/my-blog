import Footer from "./components/Footer";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/ThemeProvider";
import { LanguageProvider } from "./components/LanguageProvider";

export const metadata = {
  title: "CodeMaster - منصة تعلم البرمجة",
  description: "اتعلم البرمجة من الصفر للاحتراف بالعربي - HTML, CSS, JavaScript, React, Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main className="flex-1 mt-[70px]">
              {children}
            </main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
