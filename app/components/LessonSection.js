// =====================================================
// ✅ ملف: LessonSection.js
// 📌 المكان: app/components/LessonSection.js
// 🎯 الوظيفة: مكون لعرض قسم واحد من أقسام الدرس بشكل منسق
// =====================================================

export default function LessonSection({ title, children }) {
  return (
    // `section` هو وسم دلالي يستخدم لتقسيم المحتوى إلى أقسام منطقية.
    // `mb-12` يضيف هامشًا سفليًا (margin-bottom) للفصل بين الأقسام.
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
        {title}
      </h2>
      {/* `prose` هي كلاس من Tailwind Typography لتحسين قراءة النصوص الطويلة. */}
      <div className="prose prose-lg dark:prose-invert max-w-none">{children}</div>
    </section>
  );
}