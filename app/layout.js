// =====================================================
// ✅ ملف: layout.js
// 📌 المكان: app/layout.js
// 🎯 الوظيفة: التخطيط الرئيسي للموقع (يغلف كل الصفحات)
// =====================================================

import Footer from "./components/Footer";
import "./globals.css";
import Navbar from "./components/Navbar";

// إعدادات SEO للموقع (مهم لمحركات البحث)
export const metadata = {
  title: "CodeMaster - منصة تعلم البرمجة",
  description: "اتعلم البرمجة من الصفر للاحتراف بالعربي - HTML, CSS, JavaScript, React, Next.js",
};

// =====================================================
// 💡 RootLayout هو المكون اللي بيغلف كل الصفحات
// 💡 أي حاجة هنا هتظهر في كل صفحة في الموقع
// =====================================================
export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="min-h-screen flex flex-col">
        {/* شريط التنقل - يظهر في كل الصفحات */}
        <Navbar />
        
        {/* المحتوى الرئيسي - يتغير من صفحة لأخرى */}
        <main className="flex-1 mt-[70px]">
          {children}
        </main>
        
        {/* الفوتر - يظهر في كل الصفحات */}
        <Footer />
      </body>
    </html>
  );
}