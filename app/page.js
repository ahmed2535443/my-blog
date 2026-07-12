// =====================================================
// ملف: page.js (الصفحة الرئيسية)
// المكان: app/page.js
// الوظيفة: الصفحة الرئيسية لمنصة CodeMaster
// تعرض: بانر ترحيبي + إحصائيات + مراحل التعلم + مميزات المنصة
// =====================================================

import Link from "next/link";
import { stages, getTotalLessons } from "./data/curriculum";
import StageCard from "./components/StageCard";

export default function Home() {
  const totalLessons = getTotalLessons();

  return (
    <div className="min-h-screen">
      {/* ========================================== */}
      {/* القسم الترحيبي (Hero Section) */}
      {/* ========================================== */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* خلفية مزخرفة */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, var(--primary) 0%, transparent 50%), radial-gradient(circle at 75% 75%, var(--secondary) 0%, transparent 50%)",
          }}
        />

        <div className="container mx-auto text-center relative z-10">
          {/* الشارة */}
          <div className="inline-block mb-6 px-4 py-2 rounded-full text-sm font-medium" style={{ background: "var(--primary)20", color: "var(--primary)" }}>
            🚀 منصة تعليم البرمجة من الصفر إلى الاحتراف بالعربي
          </div>

          {/* العنوان الرئيسي */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            <span style={{ color: "var(--foreground)" }}>اتعلم </span>
            <span style={{ color: "var(--primary)" }}>البرمجة</span>
            <br />
            <span style={{ color: "var(--secondary)" }}>من الصفر</span>
            <span style={{ color: "var(--foreground)" }}> إلى الاحتراف</span>
          </h1>

          {/* الوصف */}
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10" style={{ color: "var(--muted)" }}>
            رحلة متكاملة لتعلم HTML, CSS, JavaScript, React, Next.js والمزيد
            <br />
            مع مشاريع حقيقية وتمارين تفاعلية وأسئلة مقابلات
          </p>

          {/* أزرار الدعوة للعمل */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/learn/html/01-introduction-to-html"
              className="px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:scale-105"
              style={{
                background: "var(--primary)",
                color: "var(--background)",
              }}
            >
              ابدأ التعلم مجاناً ←
            </Link>
            <Link
              href="/learn"
              className="px-8 py-4 rounded-xl text-lg font-bold border-2 transition-all duration-300 hover:scale-105"
              style={{
                borderColor: "var(--border)",
                color: "var(--foreground)",
              }}
            >
              عرض المنهج
            </Link>
          </div>

          {/* إحصائيات سريعة */}
          <div className="flex flex-wrap justify-center gap-8 mt-16">
            <div className="text-center">
              <p className="text-3xl font-extrabold" style={{ color: "var(--primary)" }}>
                {stages.length}
              </p>
              <p className="text-sm" style={{ color: "var(--muted)" }}>مرحلة تعليمية</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-extrabold" style={{ color: "var(--secondary)" }}>
                {totalLessons}
              </p>
              <p className="text-sm" style={{ color: "var(--muted)" }}>درس مُعَلَّم</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-extrabold" style={{ color: "var(--accent)" }}>
                +10
              </p>
              <p className="text-sm" style={{ color: "var(--muted)" }}>مشاريع تطبيقية</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-extrabold" style={{ color: "var(--danger)" }}>
                100%
              </p>
              <p className="text-sm" style={{ color: "var(--muted)" }}>مجاني بالكامل</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* قسم مراحل التعلم (Roadmap) */}
      {/* ========================================== */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          {/* عنوان القسم */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: "var(--foreground)" }}>
              مسار التعلم
            </h2>
            <p className="text-lg" style={{ color: "var(--muted)" }}>
              اتبع المنهج بالترتيب من المرحلة الأولى إلى المشروع النهائي
            </p>
          </div>

          {/* شبكة المراحل */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stages.map((stage, index) => (
              <StageCard key={stage.id} stage={stage} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* قسم مميزات المنصة */}
      {/* ========================================== */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: "var(--foreground)" }}>
              لماذا CodeMaster؟
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* ميزة 1: شرح بالعربي */}
            <div
              className="p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02]"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <span className="text-3xl block mb-3">🌍</span>
              <h3 className="font-bold text-lg mb-2" style={{ color: "var(--foreground)" }}>
                شرح بالعربي
              </h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                كل الدروس مكتوبة بالعربي مع المصطلحات التقنية بالإنجليزي لفهم أعمق
              </p>
            </div>

            {/* ميزة 2: من الصفر */}
            <div
              className="p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02]"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <span className="text-3xl block mb-3">🎯</span>
              <h3 className="font-bold text-lg mb-2" style={{ color: "var(--foreground)" }}>
                من الصفر تماماً
              </h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                لا نفترض أي معرفة مسبقة - نبدأ من الصفر ونصل للمشاريع الاحترافية
              </p>
            </div>

            {/* ميزة 3: مشاريع حقيقية */}
            <div
              className="p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02]"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <span className="text-3xl block mb-3">💼</span>
              <h3 className="font-bold text-lg mb-2" style={{ color: "var(--foreground)" }}>
                مشاريع حقيقية
              </h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                بعد كل مرحلة، مشروع تطبيقي يُثبّت ما تعلمته ويزيد خبرتك
              </p>
            </div>

            {/* ميزة 4: تمارين تفاعلية */}
            <div
              className="p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02]"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <span className="text-3xl block mb-3">✏️</span>
              <h3 className="font-bold text-lg mb-2" style={{ color: "var(--foreground)" }}>
                تمارين وتحديات
              </h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                تمارين تفاعلية في كل درس مع حلول يمكنك مراجعتها
              </p>
            </div>

            {/* ميزة 5: تتبع التقدم */}
            <div
              className="p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02]"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <span className="text-3xl block mb-3">📊</span>
              <h3 className="font-bold text-lg mb-2" style={{ color: "var(--foreground)" }}>
                تتبع التقدم
              </h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                تتبع تقدمك في كل مرحلة واحفظ إنجازاتك
              </p>
            </div>

            {/* ميزة 6: مقارنة الكود */}
            <div
              className="p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02]"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <span className="text-3xl block mb-3">⚖️</span>
              <h3 className="font-bold text-lg mb-2" style={{ color: "var(--foreground)" }}>
                مبتدئ vs محترف
              </h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                مقارنة بين كود المبتدئ وكود المحترف لفهم أفضل الممارسات
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* قسم الدعوة للعمل النهائي */}
      {/* ========================================== */}
      <section className="py-20 px-4">
        <div
          className="container mx-auto text-center p-12 rounded-3xl border-2"
          style={{
            background: "var(--surface)",
            borderColor: "var(--primary)",
          }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: "var(--foreground)" }}>
            جاهز تبدأ رحلتك في عالم البرمجة؟
          </h2>
          <p className="text-lg mb-8" style={{ color: "var(--muted)" }}>
            ابدأ الآن مجاناً - لا حاجة لحساب أو اشتراك
          </p>
          <Link
            href="/learn/html/01-introduction-to-html"
            className="inline-block px-10 py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:scale-105"
            style={{
              background: "var(--primary)",
              color: "var(--background)",
            }}
          >
            ابدأ الدرس الأول الآن ←
          </Link>
        </div>
      </section>
    </div>
  );
}
