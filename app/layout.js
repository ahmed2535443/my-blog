import Footer from "./components/Footer";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/ThemeProvider";
import { LanguageProvider } from "./components/LanguageProvider";

export const metadata = {
  metadataBase: new URL("https://codemaster-edu.vercel.app"),
  title: {
    default: "CodeMaster - منصة تعلم البرمجة من الصفر إلى الاحتراف",
    template: "%s | CodeMaster",
  },
  description: "اتعلم البرمجة من الصفر للاحتراف بالعربي - HTML, CSS, JavaScript, TypeScript, React, Next.js, Supabase, Clerk مع مشاريع حقيقية وتمارين تفاعلية",
  keywords: ["تعلم البرمجة", "برمجة", "HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "Supabase", "Clerk", "curso de programación", "programming course", "تعلم اونلاين", "دورة برمجة"],
  authors: [{ name: "CodeMaster" }],
  creator: "CodeMaster",
  publisher: "CodeMaster",
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://codemaster-edu.vercel.app",
    siteName: "CodeMaster",
    title: "CodeMaster - منصة تعلم البرمجة من الصفر إلى الاحتراف",
    description: "اتعلم البرمجة من الصفر للاحتراف بالعربي - HTML, CSS, JavaScript, TypeScript, React, Next.js, Supabase, Clerk",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CodeMaster - منصة تعلم البرمجة",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeMaster - منصة تعلم البرمجة",
    description: "اتعلم البرمجة من الصفر للاحتراف بالعربي",
    images: ["/og-image.png"],
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
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
